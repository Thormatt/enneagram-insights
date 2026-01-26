import type { TypeNumber, InstinctType, WingVariant } from '../../types';
import type { AgentPersona, WingAgent, SubtypeAgent } from '../agents/typeAgents';
import {
  getAllBaseAgents,
  getAllWingAgents,
  getCounterTypeAgents,
} from '../agents/typeAgents';
import {
  createHybridInitialState,
  startHybridQuiz,
  getCurrentHybridQuestion,
  processScenarioAnswer,
  processForcedChoiceAnswer,
  processInstinctAnswer,
  processHealthAnswer,
  type HybridQuizState as _HybridQuizState,
  type HybridQuizResults,
} from '../../components/Quiz/engine/hybridEngine';
import type { ScenarioQuestion } from '../../components/Quiz/questionPool/scenarioQuestions';
import type { ForcedChoicePair } from '../../components/Quiz/questionPool/forcedChoicePairs';
import type { InstinctParagraphSet } from '../../components/Quiz/questionPool/instinctParagraphs';
import type { HealthQuestion } from '../../components/Quiz/questionPool/healthLevelQuestions';

/**
 * Hybrid Quiz Simulator
 *
 * Runs agent personas through the 4-stage hybrid quiz:
 * 1. Scenarios with ranking
 * 2. Forced-choice pairs
 * 3. Instinct paragraph ranking
 * 4. Health level Likert
 */

export interface HybridSimulationResult {
  agent: AgentPersona | WingAgent | SubtypeAgent;
  results: HybridQuizResults;
  correctType: boolean;
  correctWing: boolean;
  correctInstinct: boolean;
  questionsAnswered: number;
}

export interface HybridSimulationMetrics {
  totalAgents: number;
  typeAccuracy: number;
  wingAccuracy: number;
  instinctAccuracy: number;
  averageQuestions: number;
  averageConfidence: number;

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
// STAGE 1: Scenario Response Simulation
// ==========================================

/**
 * Centers mapping for resonance calculation
 */
const typeToCenter: Record<TypeNumber, 'gut' | 'heart' | 'head'> = {
  8: 'gut',
  9: 'gut',
  1: 'gut',
  2: 'heart',
  3: 'heart',
  4: 'heart',
  5: 'head',
  6: 'head',
  7: 'head',
};

// Reserved for future use
// const centerToTypes: Record<'gut' | 'heart' | 'head', TypeNumber[]> = {
//   gut: [8, 9, 1],
//   heart: [2, 3, 4],
//   head: [5, 6, 7],
// };

/**
 * Simulate an agent ranking scenario responses
 * Returns rankings (1 = most resonant, 3 = least resonant)
 */
function simulateScenarioAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  question: ScenarioQuestion
): Record<string, number> {
  const agentCenter = typeToCenter[agent.type];
  const scores: Record<string, number> = {};

  for (const response of question.responses) {
    let score = 0;

    if (question.targetDimension === 'center') {
      // For center-targeting questions, match based on center
      if (response.center === agentCenter) {
        score = agent.centerResonance[agentCenter] * 3;
      } else if (response.center) {
        score = agent.centerResonance[response.center] * 0.5;
      }
    }

    // Also check type scores for response
    if (response.typeScores) {
      for (const [type, typeScore] of Object.entries(response.typeScores)) {
        const typeNum = Number(type) as TypeNumber;
        if (typeNum === agent.type) {
          // Direct type match - strong boost
          score += typeScore * 2;
        } else if (typeToCenter[typeNum] === agentCenter) {
          // Same center - moderate boost
          score += typeScore * 0.5;
        }
      }
    }

    // Add slight randomness
    score += (Math.random() - 0.5) * 0.3;
    scores[response.id] = score;
  }

  // Convert scores to rankings (1, 2, 3)
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id);

  const rankings: Record<string, number> = {};
  sorted.forEach((id, index) => {
    rankings[id] = index + 1;
  });

  return rankings;
}

// ==========================================
// STAGE 2: Forced-Choice Simulation
// ==========================================

/**
 * Simulate an agent choosing between two options
 * Based on which type resonates more with the agent
 */
function simulateForcedChoiceAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  question: ForcedChoicePair
): 'A' | 'B' {
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

  // Calculate resonance with each type
  const resonanceA = agent.responsePatterns[typeKeyMap[question.typeA]] || 0.5;
  const resonanceB = agent.responsePatterns[typeKeyMap[question.typeB]] || 0.5;

  // Weight by option strength
  const scoreA = resonanceA * question.optionA.strength;
  const scoreB = resonanceB * question.optionB.strength;

  // Add center affinity bonus
  const agentCenter = typeToCenter[agent.type];
  const centerBonus = 0.15;
  const adjustedA =
    scoreA + (typeToCenter[question.typeA] === agentCenter ? centerBonus : 0);
  const adjustedB =
    scoreB + (typeToCenter[question.typeB] === agentCenter ? centerBonus : 0);

  // Add slight randomness to avoid deterministic patterns
  const noise = (Math.random() - 0.5) * 0.1;
  const finalA = adjustedA + noise;
  const finalB = adjustedB - noise;

  return finalA > finalB ? 'A' : 'B';
}

// ==========================================
// STAGE 3: Instinct Paragraph Simulation
// ==========================================

/**
 * Get instinct stack from agent (if available) or infer from patterns
 */
function getAgentInstinctPreferences(
  agent: AgentPersona | WingAgent | SubtypeAgent
): Record<InstinctType, number> {
  // If agent has explicit instinct info, use it
  if ('dominantInstinct' in agent) {
    const dominant = agent.dominantInstinct;
    const secondary = agent.secondaryInstinct;
    const blind = agent.blindSpot;

    return {
      [dominant]: 0.9,
      [secondary]: 0.5,
      [blind]: 0.1,
    } as Record<InstinctType, number>;
  }

  // Otherwise, infer from response patterns
  // SP: securitySeeking, peaceHarmony
  // SO: needToBeNeeded, achievementDrive
  // SX: experienceSeeking, identitySearch
  return {
    sp:
      (agent.responsePatterns.securitySeeking +
        agent.responsePatterns.peaceHarmony) /
      2,
    so:
      (agent.responsePatterns.needToBeNeeded +
        agent.responsePatterns.achievementDrive) /
      2,
    sx:
      (agent.responsePatterns.experienceSeeking +
        agent.responsePatterns.identitySearch) /
      2,
  };
}

/**
 * Simulate an agent ranking instinct paragraphs
 */
function simulateInstinctAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  _paragraphSet: InstinctParagraphSet
): Record<InstinctType, number> {
  const preferences = getAgentInstinctPreferences(agent);

  // Calculate scores for each paragraph
  const scores: Record<InstinctType, number> = {
    sp: preferences.sp + (Math.random() - 0.5) * 0.2,
    so: preferences.so + (Math.random() - 0.5) * 0.2,
    sx: preferences.sx + (Math.random() - 0.5) * 0.2,
  };

  // Convert to rankings (1 = most resonant)
  const sorted = (Object.entries(scores) as [InstinctType, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([instinct]) => instinct);

  return {
    [sorted[0]]: 1,
    [sorted[1]]: 2,
    [sorted[2]]: 3,
  } as Record<InstinctType, number>;
}

// ==========================================
// STAGE 4: Health Level Simulation
// ==========================================

/**
 * Simulate an agent answering health level questions
 * Base agents are at average health, variants may differ
 */
function simulateHealthAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  question: HealthQuestion
): number {
  // Health level simulation based on agent's general patterns
  // Counter-types might show more fixation patterns
  const isCountertype = 'isCountertype' in agent && agent.isCountertype;

  let baseAnswer: number;

  if (question.direction === 'fixation') {
    // Fixation questions: higher = more unhealthy
    // Base agents: moderate, counter-types: slightly higher
    baseAnswer = isCountertype ? 3.5 : 3.0;
  } else {
    // Growth questions: higher = healthier
    // Base agents: moderate, counter-types: slightly lower
    baseAnswer = isCountertype ? 2.8 : 3.2;
  }

  // Add noise
  const noise = (Math.random() - 0.5) * 1.5;
  return Math.max(1, Math.min(5, Math.round(baseAnswer + noise)));
}

// ==========================================
// Main Simulation Functions
// ==========================================

/**
 * Run a single agent through the hybrid quiz
 */
export function simulateHybridQuiz(
  agent: AgentPersona | WingAgent | SubtypeAgent
): HybridSimulationResult {
  let state = createHybridInitialState();
  state = startHybridQuiz(state);

  // Safety limit
  const maxIterations = 100;
  let iterations = 0;

  while (state.stage !== 'results' && iterations < maxIterations) {
    iterations++;
    const currentQuestion = getCurrentHybridQuestion(state);

    if (!currentQuestion) {
      // This shouldn't happen, but handle gracefully
      break;
    }

    switch (currentQuestion.type) {
      case 'scenario': {
        const scenario = currentQuestion.question as ScenarioQuestion;
        const rankings = simulateScenarioAnswer(agent, scenario);
        state = processScenarioAnswer(state, scenario.id, rankings);
        break;
      }

      case 'forced-choice': {
        const forcedChoice = currentQuestion.question as ForcedChoicePair;
        const choice = simulateForcedChoiceAnswer(agent, forcedChoice);
        state = processForcedChoiceAnswer(state, forcedChoice.id, choice);
        break;
      }

      case 'instinct': {
        const instinctSet = currentQuestion.question as InstinctParagraphSet;
        const rankings = simulateInstinctAnswer(agent, instinctSet);
        state = processInstinctAnswer(state, instinctSet.id, rankings);
        break;
      }

      case 'health': {
        const healthQ = currentQuestion.question as HealthQuestion;
        const answer = simulateHealthAnswer(agent, healthQ);
        state = processHealthAnswer(state, healthQ.id, answer);
        break;
      }
    }
  }

  // Handle case where quiz didn't complete normally
  if (!state.results) {
    throw new Error(
      `Hybrid quiz did not complete for agent type ${agent.type} after ${iterations} iterations`
    );
  }

  const results = state.results;

  // Check correctness
  const correctType = results.primaryType === agent.type;

  // Check wing correctness
  let expectedWing: WingVariant | null = null;
  if ('wing' in agent) {
    expectedWing = agent.variant;
  }
  const correctWing = expectedWing ? results.wing === expectedWing : true;

  // Check instinct correctness
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
  };
}

/**
 * Run simulation on multiple agents
 */
export function runHybridSimulationBatch(
  agents: (AgentPersona | WingAgent | SubtypeAgent)[]
): HybridSimulationResult[] {
  return agents.map((agent) => simulateHybridQuiz(agent));
}

/**
 * Calculate comprehensive metrics from simulation results
 */
export function calculateHybridMetrics(
  results: HybridSimulationResult[]
): HybridSimulationMetrics {
  const totalAgents = results.length;

  // Overall accuracy
  const typeCorrect = results.filter((r) => r.correctType).length;
  const wingCorrect = results.filter((r) => r.correctWing).length;
  const instinctCorrect = results.filter((r) => r.correctInstinct).length;

  // Average questions and confidence
  const avgQuestions =
    results.reduce((sum, r) => sum + r.questionsAnswered, 0) / totalAgents;
  const avgConfidence =
    results.reduce((sum, r) => sum + r.results.confidence, 0) / totalAgents;

  // Confusion matrix
  const confusionMatrix: Record<TypeNumber, Record<TypeNumber, number>> =
    {} as any;
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

    // Find most common mistype
    let commonMistype: TypeNumber | null = null;
    let maxMiscount = 0;
    for (let other = 1; other <= 9; other++) {
      if (
        other !== type &&
        confusionMatrix[typeNum][other as TypeNumber] > maxMiscount
      ) {
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
          ? typeResults.reduce((sum, r) => sum + r.results.confidence, 0) /
            typeResults.length
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
    confusionMatrix,
    typeBreakdown,
  };
}

/**
 * Format metrics as a readable report
 */
export function formatHybridMetricsReport(
  metrics: HybridSimulationMetrics
): string {
  let report = '=== HYBRID QUIZ SIMULATION REPORT ===\n\n';

  report += '📊 OVERALL METRICS\n';
  report += `Total agents tested: ${metrics.totalAgents}\n`;
  report += `Type accuracy: ${(metrics.typeAccuracy * 100).toFixed(1)}%\n`;
  report += `Wing accuracy: ${(metrics.wingAccuracy * 100).toFixed(1)}%\n`;
  report += `Instinct accuracy: ${(metrics.instinctAccuracy * 100).toFixed(1)}%\n`;
  report += `Average questions: ${metrics.averageQuestions.toFixed(1)}\n`;
  report += `Average confidence: ${metrics.averageConfidence.toFixed(1)}%\n\n`;

  report += '📋 PER-TYPE BREAKDOWN\n';
  for (let type = 1; type <= 9; type++) {
    const typeNum = type as TypeNumber;
    const data = metrics.typeBreakdown[typeNum];
    const accuracyPct = (data.accuracy * 100).toFixed(0);
    const status =
      data.accuracy >= 0.85 ? '✅' : data.accuracy >= 0.6 ? '⚠️' : '❌';

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
 * Run full validation suite for hybrid quiz
 */
export function runHybridValidation(): {
  baseMetrics: HybridSimulationMetrics;
  wingMetrics: HybridSimulationMetrics;
  counterTypeMetrics: HybridSimulationMetrics;
  combinedMetrics: HybridSimulationMetrics;
} {
  // Test base agents (9)
  const baseAgents = getAllBaseAgents();
  const baseResults = runHybridSimulationBatch(baseAgents);
  const baseMetrics = calculateHybridMetrics(baseResults);

  // Test wing agents (18)
  const wingAgents = getAllWingAgents();
  const wingResults = runHybridSimulationBatch(wingAgents);
  const wingMetrics = calculateHybridMetrics(wingResults);

  // Test counter-type agents (9)
  const counterAgents = getCounterTypeAgents();
  const counterResults = runHybridSimulationBatch(counterAgents);
  const counterTypeMetrics = calculateHybridMetrics(counterResults);

  // Combined metrics
  const allResults = [...baseResults, ...wingResults, ...counterResults];
  const combinedMetrics = calculateHybridMetrics(allResults);

  return {
    baseMetrics,
    wingMetrics,
    counterTypeMetrics,
    combinedMetrics,
  };
}
