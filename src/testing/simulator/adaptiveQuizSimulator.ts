import type { TypeNumber, InstinctType, WingVariant } from '../../types';
import type { AgentPersona, WingAgent, SubtypeAgent } from '../agents/typeAgents';
import {
  getAllBaseAgents,
  getAllWingAgents,
  getCounterTypeAgents,
} from '../agents/typeAgents';
import {
  createInitialState,
  startQuiz,
  processAnswer,
  type AdaptiveQuizResults,
} from '../../components/Quiz/engine/adaptiveEngine';

/**
 * Adaptive Quiz Simulator
 *
 * Runs agent personas through the adaptive quiz engine and measures accuracy.
 */

export interface AdaptiveSimulationResult {
  agent: AgentPersona | WingAgent | SubtypeAgent;
  results: AdaptiveQuizResults;
  correctType: boolean;
  correctWing: boolean;
  correctInstinct: boolean;
  questionsAnswered: number;
  convergenceReason: string | null;
}

export interface AdaptiveSimulationMetrics {
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
  typeBreakdown: Record<TypeNumber, {
    correct: number;
    total: number;
    accuracy: number;
    avgConfidence: number;
    commonMistype: TypeNumber | null;
  }>;
}

/**
 * Simulate an agent answering a question based on their psychology
 *
 * The agent answers based on how much THEY identify with the statement.
 * If their type is explicitly scored, they answer strongly in that direction.
 * If not, they use center/harmonic resonance as secondary signal.
 */
function simulateAgentAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  questionTypeScores: Partial<Record<TypeNumber, number>>
): number {
  // The agent answers based on how much THEY resonate with the question
  const agentTypeKey = getTypeResponseKey(agent.type);
  const agentCoreResonance = agent.responsePatterns[agentTypeKey];

  // Check if this question explicitly scores the agent's type
  const agentTypeScore = questionTypeScores[agent.type] || 0;

  let baseAnswer: number;

  if (agentTypeScore >= 2) {
    // This question strongly targets agent's type - they should agree
    baseAnswer = 4 + (agentCoreResonance * 0.5); // 4.0 to 4.5
  } else if (agentTypeScore >= 1) {
    // Moderately targets agent's type
    baseAnswer = 3.5 + (agentCoreResonance * 0.5); // 3.5 to 4.0
  } else if (agentTypeScore <= -2) {
    // Question is against agent's type - they should disagree
    baseAnswer = 2 - (agentCoreResonance * 0.5); // 1.5 to 2.0
  } else if (agentTypeScore <= -1) {
    // Moderately against agent's type
    baseAnswer = 2.5 - (agentCoreResonance * 0.3); // 2.2 to 2.5
  } else {
    // Neutral for agent's type - use center resonance
    const centerMatch = calculateCenterResonance(agent, questionTypeScores);
    baseAnswer = 3 + centerMatch; // 2.0 to 4.0
  }

  // Add noise to simulate human imperfection
  // Reduced to 0.15 for more consistent testing behavior
  const noise = (Math.random() - 0.5) * 0.15;
  const adjustedAnswer = Math.max(1, Math.min(5, baseAnswer + noise));

  return Math.round(adjustedAnswer);
}

/**
 * Calculate center-based resonance (-1 to 1)
 */
function calculateCenterResonance(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  questionTypeScores: Partial<Record<TypeNumber, number>>
): number {
  // Centers: Gut (8,9,1), Heart (2,3,4), Head (5,6,7)
  const typeToCenter: Record<TypeNumber, 'gut' | 'heart' | 'head'> = {
    8: 'gut', 9: 'gut', 1: 'gut',
    2: 'heart', 3: 'heart', 4: 'heart',
    5: 'head', 6: 'head', 7: 'head',
  };

  // Calculate scores per center
  let gutScore = 0, heartScore = 0, headScore = 0;
  for (const [type, score] of Object.entries(questionTypeScores)) {
    const typeNum = Number(type) as TypeNumber;
    const center = typeToCenter[typeNum];
    if (center === 'gut') gutScore += score || 0;
    else if (center === 'heart') heartScore += score || 0;
    else if (center === 'head') headScore += score || 0;
  }

  // Agent's center determines their resonance
  const agentCenter = typeToCenter[agent.type];

  if (agentCenter === 'gut' && gutScore > 0) {
    return agent.centerResonance.gut * 0.8;
  } else if (agentCenter === 'heart' && heartScore > 0) {
    return agent.centerResonance.heart * 0.8;
  } else if (agentCenter === 'head' && headScore > 0) {
    return agent.centerResonance.head * 0.8;
  }

  // Cross-center: use weighted difference
  const myScore = agentCenter === 'gut' ? gutScore :
                  agentCenter === 'heart' ? heartScore : headScore;
  const otherScore = (gutScore + heartScore + headScore) - myScore;

  if (otherScore > 0 && myScore <= 0) {
    // Question targets other centers, not mine
    return -0.3; // Slight disagreement
  }

  return 0; // Neutral
}

/**
 * Simulate an agent answering a wing question
 */
function simulateWingAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  wingA: TypeNumber,
  wingB: TypeNumber
): number {
  const responseKeyA = getTypeResponseKey(wingA);
  const responseKeyB = getTypeResponseKey(wingB);

  const resonanceA = agent.responsePatterns[responseKeyA];
  const resonanceB = agent.responsePatterns[responseKeyB];

  // If agent has wing info, use it
  if ('wing' in agent) {
    if (agent.wing === wingA) {
      return Math.random() > 0.3 ? 5 : 4; // Lean toward wingA
    } else {
      return Math.random() > 0.3 ? 1 : 2; // Lean toward wingB
    }
  }

  // Otherwise use response patterns
  const diff = resonanceA - resonanceB;
  const noise = (Math.random() - 0.5) * 0.15;
  const adjustedDiff = Math.max(-1, Math.min(1, diff + noise));

  return Math.round(3 + adjustedDiff * 2);
}

/**
 * Simulate an agent answering an instinct question
 */
function simulateInstinctAnswer(
  agent: AgentPersona | WingAgent | SubtypeAgent,
  instinctScores: Record<InstinctType, number>
): number {
  let resonance = 0;

  // If agent has instinct info, use it
  if ('dominantInstinct' in agent) {
    const dominant = agent.dominantInstinct;
    const blind = agent.blindSpot;

    // Strong agreement with dominant, strong disagreement with blind spot
    resonance += (instinctScores[dominant] || 0) * 0.8;
    resonance -= (instinctScores[blind] || 0) * 0.4;
  } else {
    // Use response patterns as proxy
    // SP correlates with securitySeeking, SO with needToBeNeeded, SX with experienceSeeking
    const spScore = agent.responsePatterns.securitySeeking;
    const soScore = agent.responsePatterns.needToBeNeeded;
    const sxScore = agent.responsePatterns.experienceSeeking;

    resonance += (instinctScores.sp || 0) * spScore;
    resonance += (instinctScores.so || 0) * soScore;
    resonance += (instinctScores.sx || 0) * sxScore;
  }

  // Add noise
  const noise = (Math.random() - 0.5) * 0.2;
  const normalizedResonance = Math.max(-1, Math.min(1, resonance + noise));

  return Math.round(3 + normalizedResonance * 2);
}

/**
 * Get the response key for a type
 */
function getTypeResponseKey(type: TypeNumber): keyof AgentPersona['responsePatterns'] {
  const keyMap: Record<TypeNumber, keyof AgentPersona['responsePatterns']> = {
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
  return keyMap[type];
}

/**
 * Run a single agent through the adaptive quiz
 */
export function simulateAdaptiveQuiz(
  agent: AgentPersona | WingAgent | SubtypeAgent
): AdaptiveSimulationResult {
  let state = createInitialState();
  state = startQuiz(state);

  // Safety limit to prevent infinite loops
  const maxIterations = 100;
  let iterations = 0;

  while (state.stage !== 'results' && state.currentQuestion && iterations < maxIterations) {
    iterations++;
    const question = state.currentQuestion;
    let answer: number;

    // Determine answer based on question type and stage
    if (state.stage === 'type') {
      // Type determination question
      let typeScores: Partial<Record<TypeNumber, number>> = {};

      if ('typeScores' in question) {
        typeScores = question.typeScores;
      } else if ('direction' in question) {
        // Differentiator question
        typeScores = {
          [(question as any).direction.positive]: 2,
          [(question as any).direction.negative]: -2,
        };
      }

      answer = simulateAgentAnswer(agent, typeScores);
    } else if (state.stage === 'wing') {
      // Wing question - get primary type from probabilities
      const primaryType = Object.entries(state.typeProbabilities.probabilities)
        .sort((a, b) => b[1] - a[1])[0][0] as unknown as TypeNumber || agent.type;

      const wingPairs: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
        1: [9, 2], 2: [1, 3], 3: [2, 4], 4: [3, 5], 5: [4, 6],
        6: [5, 7], 7: [6, 8], 8: [7, 9], 9: [8, 1],
      };
      const [wingA, wingB] = wingPairs[primaryType] || [1, 2];

      answer = simulateWingAnswer(agent, wingA, wingB);
    } else if (state.stage === 'instinct') {
      // Instinct question
      const instinctScores = 'instinctScores' in question ?
        (question as any).instinctScores :
        { sp: 0, so: 0, sx: 0 };

      answer = simulateInstinctAnswer(agent, instinctScores);
    } else {
      answer = 3; // Neutral default
    }

    state = processAnswer(state, answer);
  }

  // Extract results - handle case where quiz didn't complete normally
  if (!state.results) {
    // Create fallback results from current state
    const topTypes = Object.entries(state.typeProbabilities.probabilities)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([type, prob]) => ({
        type: Number(type) as TypeNumber,
        probability: prob,
        score: state.typeProbabilities.rawScores[Number(type) as TypeNumber],
      }));

    const instinctProbs = state.instinctProbabilities.probabilities;
    const instinctStack = Object.entries(instinctProbs)
      .sort((a, b) => b[1] - a[1])
      .map(([inst]) => inst as InstinctType) as [InstinctType, InstinctType, InstinctType];

    // Calculate all type scores
    const allTypeScores = Object.entries(state.typeProbabilities.probabilities)
      .map(([type, prob]) => ({
        type: Number(type) as TypeNumber,
        probability: prob,
        percentage: Math.round(prob * 100),
      }))
      .sort((a, b) => b.probability - a.probability);

    // Calculate tritype
    const GUT_TYPES = [8, 9, 1] as TypeNumber[];
    const HEART_TYPES = [2, 3, 4] as TypeNumber[];
    const HEAD_TYPES = [5, 6, 7] as TypeNumber[];

    const gutType = allTypeScores.find(t => GUT_TYPES.includes(t.type))!.type;
    const heartType = allTypeScores.find(t => HEART_TYPES.includes(t.type))!.type;
    const headType = allTypeScores.find(t => HEAD_TYPES.includes(t.type))!.type;

    const primaryType = topTypes[0].type;
    let tritypeCode: string;
    if (GUT_TYPES.includes(primaryType)) {
      tritypeCode = `${gutType}${heartType}${headType}`;
    } else if (HEART_TYPES.includes(primaryType)) {
      tritypeCode = `${heartType}${gutType}${headType}`;
    } else {
      tritypeCode = `${headType}${gutType}${heartType}`;
    }

    state.results = {
      primaryType: topTypes[0].type,
      typeConfidence: Math.round(topTypes[0].probability * 100),
      topThreeTypes: topTypes,
      allTypeScores,
      tritype: {
        gut: gutType,
        heart: heartType,
        head: headType,
        code: tritypeCode,
      },
      wing: state.wingResult?.variant || `${topTypes[0].type}w${topTypes[0].type === 9 ? 8 : (topTypes[0].type % 9) + 1}` as WingVariant,
      wingBalance: state.wingResult?.balance || 0,
      instinctStack,
      questionsAnswered: state.questionHistory.length,
      convergenceReason: 'fallback',
      // Simulator stub values for new fields
      growthArrow: {
        targetType: ((topTypes[0].type % 9) + 1) as TypeNumber,
        gains: [],
        practices: [],
        description: '',
      },
      stressArrow: {
        targetType: ((topTypes[0].type % 9) + 1) as TypeNumber,
        exhibits: [],
        warningSigns: [],
        description: '',
      },
      attentionChecksPassed: true,
      attentionChecksScore: { passed: 0, failed: [], total: 0, passRate: 1 },
      integrationLevel: {
        level: 'average',
        healthLevel: 5 as const,
        normalized: 0,
        levelTitle: 'Average',
        levelDescription: '',
      },
    };
  }

  const results = state.results;
  if (!results) {
    throw new Error('Results should not be null after simulation');
  }

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
  const correctInstinct = expectedInstinct ? results.instinctStack[0] === expectedInstinct : true;

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
export function runAdaptiveSimulationBatch(
  agents: (AgentPersona | WingAgent | SubtypeAgent)[]
): AdaptiveSimulationResult[] {
  return agents.map(agent => simulateAdaptiveQuiz(agent));
}

/**
 * Calculate comprehensive metrics from simulation results
 */
export function calculateAdaptiveMetrics(
  results: AdaptiveSimulationResult[]
): AdaptiveSimulationMetrics {
  const totalAgents = results.length;

  // Overall accuracy
  const typeCorrect = results.filter(r => r.correctType).length;
  const wingCorrect = results.filter(r => r.correctWing).length;
  const instinctCorrect = results.filter(r => r.correctInstinct).length;

  // Average questions and confidence
  const avgQuestions = results.reduce((sum, r) => sum + r.questionsAnswered, 0) / totalAgents;
  const avgConfidence = results.reduce((sum, r) => sum + r.results.typeConfidence, 0) / totalAgents;

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
    const typeResults = results.filter(r => r.agent.type === typeNum);
    const correct = typeResults.filter(r => r.correctType).length;
    const total = typeResults.length;

    // Find most common mistype
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
      avgConfidence: typeResults.length > 0
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
 * Format metrics as a readable report
 */
export function formatAdaptiveMetricsReport(metrics: AdaptiveSimulationMetrics): string {
  let report = '=== ADAPTIVE QUIZ SIMULATION REPORT ===\n\n';

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
    const status = data.accuracy >= 0.85 ? '✅' : data.accuracy >= 0.60 ? '⚠️' : '❌';

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
export function runAdaptiveValidation(): {
  baseMetrics: AdaptiveSimulationMetrics;
  wingMetrics: AdaptiveSimulationMetrics;
  counterTypeMetrics: AdaptiveSimulationMetrics;
  combinedMetrics: AdaptiveSimulationMetrics;
} {
  // Test base agents (9)
  const baseAgents = getAllBaseAgents();
  const baseResults = runAdaptiveSimulationBatch(baseAgents);
  const baseMetrics = calculateAdaptiveMetrics(baseResults);

  // Test wing agents (18)
  const wingAgents = getAllWingAgents();
  const wingResults = runAdaptiveSimulationBatch(wingAgents);
  const wingMetrics = calculateAdaptiveMetrics(wingResults);

  // Test counter-type agents (9)
  const counterAgents = getCounterTypeAgents();
  const counterResults = runAdaptiveSimulationBatch(counterAgents);
  const counterTypeMetrics = calculateAdaptiveMetrics(counterResults);

  // Combined metrics
  const allResults = [...baseResults, ...wingResults, ...counterResults];
  const combinedMetrics = calculateAdaptiveMetrics(allResults);

  return {
    baseMetrics,
    wingMetrics,
    counterTypeMetrics,
    combinedMetrics,
  };
}
