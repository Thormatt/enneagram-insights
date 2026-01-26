import type { TypeNumber, InstinctType, WingVariant } from '../../types';
import type { AgentPersona, WingAgent, SubtypeAgent } from '../agents/typeAgents';
import {
  getAllBaseAgents,
  getAllWingAgents,
  getCounterTypeAgents,
} from '../agents/typeAgents';
import {
  createMergedInitialState,
  startMergedQuiz,
  getCurrentMergedQuestion,
  processMergedScenarioAnswer,
  processMergedLikertAnswer,
  processMergedForcedChoiceAnswer,
  processMergedWingAnswer,
  processMergedInstinctAnswer,
  processMergedHealthAnswer,
  type MergedQuizResults,
} from '../../components/Quiz/engine/mergedEngine';
import type { ScenarioQuestion } from '../../components/Quiz/questionPool/scenarioQuestions';
import type { ForcedChoicePair } from '../../components/Quiz/questionPool/forcedChoiceQuestions';
import type { InstinctParagraphSet } from '../../components/Quiz/questionPool/instinctParagraphs';
import type { HealthQuestion } from '../../components/Quiz/questionPool/healthLevelQuestions';

/**
 * Merged Quiz Simulator
 *
 * Runs agent personas through the merged quiz that combines
 * the best of adaptive (Likert) and hybrid (Delphi) approaches.
 */

export interface MergedSimulationResult {
  agent: AgentPersona | WingAgent | SubtypeAgent;
  results: MergedQuizResults;
  correctType: boolean;
  correctWing: boolean;
  correctInstinct: boolean;
  questionsAnswered: number;
  convergenceReason: string;
}

export interface MergedSimulationMetrics {
  totalAgents: number;
  typeAccuracy: number;
  wingAccuracy: number;
  instinctAccuracy: number;
  averageQuestions: number;
  averageConfidence: number;

  // By convergence reason
  byConvergenceReason: Record<string, number>;

  // Confusion matrix
  confusionMatrix: Record<TypeNumber, Record<TypeNumber, number>>;

  // Per-type breakdown
  typeBreakdown: Record<
    TypeNumber,
    {
      correct: number;
      total: number;
      accuracy: number;
      avgConfidence: number;
      commonMistype: TypeNumber | null;
    }
  >;
}

// ==========================================
// Agent Response Simulation
// ==========================================

const typeToCenter: Record<TypeNumber, 'gut' | 'heart' | 'head'> = {
  8: 'gut', 9: 'gut', 1: 'gut',
  2: 'heart', 3: 'heart', 4: 'heart',
  5: 'head', 6: 'head', 7: 'head',
};

const typeKeyMap: Record<TypeNumber, keyof AgentPersona['responsePatterns']> = {
  1: 'fearOfCorruption',
  2: 'needToBeNeeded',
  3: 'achievementDrive',
  4: 'identitySearch',
  5: 'knowledgeAccumulation',
  6: 'securitySeeking',
  7: 'experienceSeeking',
  8: 'controlAssertiveness',
  9: 'peaceHarmony',
};

/**
 * Simulate scenario ranking
 */
function simulateScenarioAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  question: ScenarioQuestion
): Record<string, number> {
  const agentCenter = typeToCenter[agent.type];
  const agentResonance = agent.responsePatterns[typeKeyMap[agent.type]];
  const scores: Record<string, number> = {};

  for (const response of question.responses) {
    let score = 0;

    // Center matching - base score for responses in agent's center
    if (response.center === agentCenter) {
      score = agent.centerResonance[agentCenter] * 2;
    } else if (response.center) {
      score = agent.centerResonance[response.center] * 0.3;
    }

    // Type score matching - PRIORITIZE DIRECT TYPE MATCH
    if (response.typeScores) {
      const directTypeScore = response.typeScores[agent.type] || 0;

      // Direct type match gets heavy weighting
      if (directTypeScore > 0) {
        score += directTypeScore * 3 * agentResonance;
      } else if (directTypeScore < 0) {
        score += directTypeScore * 2;
      }

      // Wing type contribution - only add if wing scores LOWER than direct type
      // This prevents wing types from competing with the core type
      const wingPairs: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
        1: [9, 2], 2: [1, 3], 3: [2, 4], 4: [3, 5], 5: [4, 6],
        6: [5, 7], 7: [6, 8], 8: [7, 9], 9: [8, 1],
      };
      const [wingA, wingB] = wingPairs[agent.type];
      const wingAScore = response.typeScores[wingA] || 0;
      const wingBScore = response.typeScores[wingB] || 0;
      // Only count wing bonus if it doesn't exceed the direct type score
      const effectiveWingA = wingAScore <= directTypeScore ? wingAScore : 0;
      const effectiveWingB = wingBScore <= directTypeScore ? wingBScore : 0;
      score += (effectiveWingA + effectiveWingB) * 0.2;

      // Reduce score for center-mates that are NOT the agent's type
      // This helps differentiate within centers (e.g., 5 vs 6 vs 7)
      for (const [type, typeScore] of Object.entries(response.typeScores)) {
        const typeNum = Number(type) as TypeNumber;
        if (typeNum !== agent.type && typeToCenter[typeNum] === agentCenter) {
          // Other same-center types - reduce attraction if they score higher
          // Increased penalty (1.5x) to properly differentiate within centers
          if (typeScore > directTypeScore) {
            score -= (typeScore - directTypeScore) * 1.5;
          }
        }
      }
    }

    // Minimal noise - small enough to not affect rankings
    score += (Math.random() - 0.5) * 0.02;
    scores[response.id] = score;
  }

  // Convert to rankings
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id);

  const rankings: Record<string, number> = {};
  sorted.forEach((id, index) => {
    rankings[id] = index + 1;
  });

  return rankings;
}

/**
 * Simulate Likert answer
 */
function simulateLikertAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  question: { typeScores?: Partial<Record<TypeNumber, number>>; direction?: { positive: TypeNumber; negative: TypeNumber } }
): number {
  let typeScores: Partial<Record<TypeNumber, number>> = {};

  if ('typeScores' in question && question.typeScores) {
    typeScores = question.typeScores;
  } else if ('direction' in question && question.direction) {
    typeScores = {
      [question.direction.positive]: 2,
      [question.direction.negative]: -2,
    };
  }

  // Calculate direct type score (if agent's type is in the question)
  const agentTypeScore = typeScores[agent.type] || 0;
  const agentResonance = agent.responsePatterns[typeKeyMap[agent.type]];
  const agentCenter = typeToCenter[agent.type];

  // Calculate center-based score (sum of scores for types in agent's center)
  let centerScore = 0;
  let centerTypeCount = 0;
  for (const [type, score] of Object.entries(typeScores)) {
    const typeNum = Number(type) as TypeNumber;
    if (typeToCenter[typeNum] === agentCenter) {
      centerScore += score || 0;
      centerTypeCount++;
    }
  }
  // Average center score
  const avgCenterScore = centerTypeCount > 0 ? centerScore / centerTypeCount : 0;

  // Calculate related type scores (wing types, connected types)
  const wingPairs: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
    1: [9, 2], 2: [1, 3], 3: [2, 4], 4: [3, 5], 5: [4, 6],
    6: [5, 7], 7: [6, 8], 8: [7, 9], 9: [8, 1],
  };
  const [wingA, wingB] = wingPairs[agent.type];
  const wingAScore = typeScores[wingA] || 0;
  const wingBScore = typeScores[wingB] || 0;
  const avgWingScore = (wingAScore + wingBScore) / 2;

  let baseAnswer: number;

  // Priority 1: Direct type match (strongest signal)
  if (agentTypeScore >= 3) {
    baseAnswer = 4.5 + agentResonance * 0.3;
  } else if (agentTypeScore >= 2) {
    baseAnswer = 4 + agentResonance * 0.4;
  } else if (agentTypeScore >= 1) {
    baseAnswer = 3.5 + agentResonance * 0.4;
  } else if (agentTypeScore <= -3) {
    baseAnswer = 1.5 - agentResonance * 0.3;
  } else if (agentTypeScore <= -2) {
    baseAnswer = 2 - agentResonance * 0.3;
  } else if (agentTypeScore <= -1) {
    baseAnswer = 2.5 - agentResonance * 0.2;
  } else {
    // No direct type score - use center and wing as proxy
    // This is critical for questions that don't directly target the agent's type
    // but target related types (center-mates, wings)

    // Weight: center score matters a lot, wing score matters some
    const combinedScore = avgCenterScore * 0.7 + avgWingScore * 0.3;

    if (combinedScore >= 2) {
      baseAnswer = 3.8 + agent.centerResonance[agentCenter] * 0.4;
    } else if (combinedScore >= 1) {
      baseAnswer = 3.4 + agent.centerResonance[agentCenter] * 0.3;
    } else if (combinedScore <= -2) {
      baseAnswer = 2.2 - agent.centerResonance[agentCenter] * 0.3;
    } else if (combinedScore <= -1) {
      baseAnswer = 2.6 - agent.centerResonance[agentCenter] * 0.2;
    } else {
      // Truly neutral - add slight center bias
      baseAnswer = 3 + avgCenterScore * agent.centerResonance[agentCenter] * 0.3;
    }
  }

  // Minimal noise - too much causes answer flips on boundary cases
  const noise = (Math.random() - 0.5) * 0.05;
  return Math.max(1, Math.min(5, Math.round(baseAnswer + noise)));
}

/**
 * Simulate forced-choice answer
 */
function simulateForcedChoiceAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  question: ForcedChoicePair
): TypeNumber {
  const resonanceA = agent.responsePatterns[typeKeyMap[question.optionA.type]] || 0.5;
  const resonanceB = agent.responsePatterns[typeKeyMap[question.optionB.type]] || 0.5;

  const agentCenter = typeToCenter[agent.type];
  const centerBonusA = typeToCenter[question.optionA.type] === agentCenter ? 0.15 : 0;
  const centerBonusB = typeToCenter[question.optionB.type] === agentCenter ? 0.15 : 0;

  const scoreA = resonanceA + centerBonusA + (Math.random() - 0.5) * 0.1;
  const scoreB = resonanceB + centerBonusB - (Math.random() - 0.5) * 0.1;

  return scoreA > scoreB ? question.optionA.type : question.optionB.type;
}

/**
 * Simulate wing answer
 */
function simulateWingAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  _question: unknown
): number {
  // If agent has wing info, use it
  if ('wing' in agent) {
    const wingPairs: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
      1: [9, 2], 2: [1, 3], 3: [2, 4], 4: [3, 5], 5: [4, 6],
      6: [5, 7], 7: [6, 8], 8: [7, 9], 9: [8, 1],
    };
    const [wingA] = wingPairs[agent.type];

    if (agent.wing === wingA) {
      return Math.random() > 0.3 ? 5 : 4;
    } else {
      return Math.random() > 0.3 ? 1 : 2;
    }
  }

  // Default to moderate
  return 3 + Math.round((Math.random() - 0.5) * 2);
}

/**
 * Simulate instinct paragraph ranking
 */
function simulateInstinctAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent
): Record<InstinctType, number> {
  let preferences: Record<InstinctType, number>;

  if ('dominantInstinct' in agent) {
    preferences = {
      [agent.dominantInstinct]: 0.9,
      [agent.secondaryInstinct]: 0.5,
      [agent.blindSpot]: 0.1,
    } as Record<InstinctType, number>;
  } else {
    preferences = {
      sp: (agent.responsePatterns.securitySeeking + agent.responsePatterns.peaceHarmony) / 2,
      so: (agent.responsePatterns.needToBeNeeded + agent.responsePatterns.achievementDrive) / 2,
      sx: (agent.responsePatterns.experienceSeeking + agent.responsePatterns.identitySearch) / 2,
    };
  }

  const scores: Record<InstinctType, number> = {
    sp: preferences.sp + (Math.random() - 0.5) * 0.2,
    so: preferences.so + (Math.random() - 0.5) * 0.2,
    sx: preferences.sx + (Math.random() - 0.5) * 0.2,
  };

  const sorted = (Object.entries(scores) as [InstinctType, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([instinct]) => instinct);

  return {
    [sorted[0]]: 1,
    [sorted[1]]: 2,
    [sorted[2]]: 3,
  } as Record<InstinctType, number>;
}

/**
 * Simulate health answer
 */
function simulateHealthAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  question: HealthQuestion
): number {
  const isCountertype = 'isCountertype' in agent && agent.isCountertype;

  let baseAnswer: number;
  if (question.direction === 'fixation') {
    baseAnswer = isCountertype ? 3.5 : 3.0;
  } else {
    baseAnswer = isCountertype ? 2.8 : 3.2;
  }

  const noise = (Math.random() - 0.5) * 1.5;
  return Math.max(1, Math.min(5, Math.round(baseAnswer + noise)));
}

// ==========================================
// Main Simulation Functions
// ==========================================

/**
 * Run a single agent through the merged quiz
 */
export function simulateMergedQuiz(
  agent: AgentPersona | WingAgent | SubtypeAgent
): MergedSimulationResult {
  let state = createMergedInitialState();
  state = startMergedQuiz(state);

  const maxIterations = 100;
  let iterations = 0;

  while (state.stage !== 'results' && iterations < maxIterations) {
    iterations++;
    const current = getCurrentMergedQuestion(state);

    if (!current) break;

    switch (current.type) {
      case 'scenario': {
        const scenario = current.question as ScenarioQuestion;
        const rankings = simulateScenarioAnswer(agent, scenario);
        state = processMergedScenarioAnswer(state, scenario.id, rankings);
        break;
      }

      case 'likert': {
        const likertQ = current.question as { id: string; typeScores?: Partial<Record<TypeNumber, number>>; direction?: { positive: TypeNumber; negative: TypeNumber } };
        const answer = simulateLikertAnswer(agent, likertQ);
        state = processMergedLikertAnswer(state, likertQ.id, answer);
        break;
      }

      case 'forced-choice': {
        const fcQ = current.question as ForcedChoicePair;
        const chosenType = simulateForcedChoiceAnswer(agent, fcQ);
        state = processMergedForcedChoiceAnswer(state, fcQ.id, chosenType);
        break;
      }

      case 'wing': {
        const wingQ = current.question as { id: string };
        const answer = simulateWingAnswer(agent, wingQ);
        state = processMergedWingAnswer(state, wingQ.id, answer);
        break;
      }

      case 'instinct-paragraph': {
        const instinctSet = current.question as InstinctParagraphSet;
        const rankings = simulateInstinctAnswer(agent);
        state = processMergedInstinctAnswer(state, instinctSet.id, rankings);
        break;
      }

      case 'health': {
        const healthQ = current.question as HealthQuestion;
        const answer = simulateHealthAnswer(agent, healthQ);
        state = processMergedHealthAnswer(state, healthQ.id, answer);
        break;
      }
    }
  }

  if (!state.results) {
    throw new Error(`Merged quiz did not complete for agent type ${agent.type}`);
  }

  const results = state.results;

  // Check correctness
  const correctType = results.primaryType === agent.type;

  let expectedWing: WingVariant | null = null;
  if ('wing' in agent) {
    expectedWing = agent.variant;
  }
  const correctWing = expectedWing ? results.wing === expectedWing : true;

  let expectedInstinct: InstinctType | null = null;
  if ('dominantInstinct' in agent) {
    expectedInstinct = agent.dominantInstinct;
  }
  const dominantResult = results.instinctStack.split('/')[0] as InstinctType;
  const correctInstinct = expectedInstinct ? dominantResult === expectedInstinct : true;

  return {
    agent,
    results,
    correctType,
    correctWing,
    correctInstinct,
    questionsAnswered: results.questionsAnswered,
    convergenceReason: results.convergenceReason,
  };
}

/**
 * Run simulation on multiple agents
 */
export function runMergedSimulationBatch(
  agents: (AgentPersona | WingAgent | SubtypeAgent)[]
): MergedSimulationResult[] {
  return agents.map((agent) => simulateMergedQuiz(agent));
}

/**
 * Calculate comprehensive metrics
 */
export function calculateMergedMetrics(
  results: MergedSimulationResult[]
): MergedSimulationMetrics {
  const totalAgents = results.length;

  const typeCorrect = results.filter((r) => r.correctType).length;
  const wingCorrect = results.filter((r) => r.correctWing).length;
  const instinctCorrect = results.filter((r) => r.correctInstinct).length;

  const avgQuestions =
    results.reduce((sum, r) => sum + r.questionsAnswered, 0) / totalAgents;
  const avgConfidence =
    results.reduce((sum, r) => sum + r.results.typeConfidence, 0) / totalAgents;

  // By convergence reason
  const byConvergenceReason: Record<string, number> = {};
  for (const result of results) {
    const reason = result.convergenceReason || 'unknown';
    byConvergenceReason[reason] = (byConvergenceReason[reason] || 0) + 1;
  }

  // Confusion matrix
  const confusionMatrix: Record<TypeNumber, Record<TypeNumber, number>> = {} as any;
  for (let i = 1; i <= 9; i++) {
    confusionMatrix[i as TypeNumber] = {} as Record<TypeNumber, number>;
    for (let j = 1; j <= 9; j++) {
      confusionMatrix[i as TypeNumber][j as TypeNumber] = 0;
    }
  }

  for (const result of results) {
    const actual = result.agent.type;
    const predicted = result.results.primaryType;
    confusionMatrix[actual][predicted]++;
  }

  // Per-type breakdown
  const typeBreakdown: Record<TypeNumber, any> = {} as any;
  for (let type = 1; type <= 9; type++) {
    const typeNum = type as TypeNumber;
    const typeResults = results.filter((r) => r.agent.type === typeNum);
    const correct = typeResults.filter((r) => r.correctType).length;
    const total = typeResults.length;

    let commonMistype: TypeNumber | null = null;
    let maxMiscount = 0;
    for (let other = 1; other <= 9; other++) {
      if (other !== type && confusionMatrix[typeNum][other as TypeNumber] > maxMiscount) {
        maxMiscount = confusionMatrix[typeNum][other as TypeNumber];
        commonMistype = other as TypeNumber;
      }
    }

    typeBreakdown[typeNum] = {
      correct,
      total,
      accuracy: total > 0 ? correct / total : 0,
      avgConfidence:
        typeResults.length > 0
          ? typeResults.reduce((sum, r) => sum + r.results.typeConfidence, 0) / typeResults.length
          : 0,
      commonMistype: maxMiscount > 0 ? commonMistype : null,
    };
  }

  return {
    totalAgents,
    typeAccuracy: typeCorrect / totalAgents,
    wingAccuracy: wingCorrect / totalAgents,
    instinctAccuracy: instinctCorrect / totalAgents,
    averageQuestions: avgQuestions,
    averageConfidence: avgConfidence,
    byConvergenceReason,
    confusionMatrix,
    typeBreakdown,
  };
}

/**
 * Format metrics report
 */
export function formatMergedMetricsReport(metrics: MergedSimulationMetrics): string {
  let report = '=== MERGED QUIZ SIMULATION REPORT ===\n\n';

  report += '📊 OVERALL METRICS\n';
  report += `Total agents tested: ${metrics.totalAgents}\n`;
  report += `Type accuracy: ${(metrics.typeAccuracy * 100).toFixed(1)}%\n`;
  report += `Wing accuracy: ${(metrics.wingAccuracy * 100).toFixed(1)}%\n`;
  report += `Instinct accuracy: ${(metrics.instinctAccuracy * 100).toFixed(1)}%\n`;
  report += `Average questions: ${metrics.averageQuestions.toFixed(1)}\n`;
  report += `Average confidence: ${metrics.averageConfidence.toFixed(1)}%\n\n`;

  report += '🎯 BY CONVERGENCE REASON\n';
  for (const [reason, count] of Object.entries(metrics.byConvergenceReason)) {
    report += `  ${reason}: ${count}\n`;
  }
  report += '\n';

  report += '📋 PER-TYPE BREAKDOWN\n';
  for (let type = 1; type <= 9; type++) {
    const typeNum = type as TypeNumber;
    const data = metrics.typeBreakdown[typeNum];
    const accuracyPct = (data.accuracy * 100).toFixed(0);
    const status = data.accuracy >= 0.85 ? '✅' : data.accuracy >= 0.6 ? '⚠️' : '❌';

    report += `  Type ${type}: ${data.correct}/${data.total} (${accuracyPct}%) ${status}`;
    if (data.commonMistype) {
      report += ` → mistyped as ${data.commonMistype}`;
    }
    report += ` [avg conf: ${data.avgConfidence.toFixed(0)}%]\n`;
  }
  report += '\n';

  report += '🔀 CONFUSION MATRIX (actual → predicted)\n';
  report += '     ';
  for (let j = 1; j <= 9; j++) report += `  ${j} `;
  report += '\n';

  for (let i = 1; i <= 9; i++) {
    report += `  ${i}  `;
    for (let j = 1; j <= 9; j++) {
      const count = metrics.confusionMatrix[i as TypeNumber][j as TypeNumber];
      const display = count > 0 ? count.toString().padStart(2) : ' .';
      report += ` ${display}`;
    }
    report += '\n';
  }

  return report;
}

/**
 * Run full validation suite
 */
export function runMergedValidation(): {
  baseMetrics: MergedSimulationMetrics;
  wingMetrics: MergedSimulationMetrics;
  counterTypeMetrics: MergedSimulationMetrics;
  combinedMetrics: MergedSimulationMetrics;
} {
  const baseAgents = getAllBaseAgents();
  const baseResults = runMergedSimulationBatch(baseAgents);
  const baseMetrics = calculateMergedMetrics(baseResults);

  const wingAgents = getAllWingAgents();
  const wingResults = runMergedSimulationBatch(wingAgents);
  const wingMetrics = calculateMergedMetrics(wingResults);

  const counterAgents = getCounterTypeAgents();
  const counterResults = runMergedSimulationBatch(counterAgents);
  const counterTypeMetrics = calculateMergedMetrics(counterResults);

  const allResults = [...baseResults, ...wingResults, ...counterResults];
  const combinedMetrics = calculateMergedMetrics(allResults);

  return {
    baseMetrics,
    wingMetrics,
    counterTypeMetrics,
    combinedMetrics,
  };
}
