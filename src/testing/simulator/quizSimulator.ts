import type { TypeNumber, InstinctType, WingVariant } from '../../types';
import type { AgentPersona, WingAgent, SubtypeAgent } from '../agents/typeAgents';
import {
  coreTypeQuestions,
  wingQuestions,
  instinctQuestions,
  calculateTypeScores,
  calculateWingScores,
  calculateInstinctScores,
  getTopType,
  getInstinctStack,
  type TypeQuestion,
  type WingQuestion,
  type InstinctQuestion,
} from '../../components/Quiz/quizData';

/**
 * Quiz Result from a simulated run
 */
export interface SimulationResult {
  agent: AgentPersona | WingAgent | SubtypeAgent;
  expectedType: TypeNumber;
  resultType: TypeNumber;
  typeScores: Record<TypeNumber, number>;
  typeConfidence: number;
  marginOverSecond: number;
  expectedWing?: WingVariant;
  resultWing?: WingVariant;
  wingCorrect?: boolean;
  expectedInstinctDominant?: InstinctType;
  resultInstinctDominant?: InstinctType;
  instinctCorrect?: boolean;
  isCorrect: boolean;
  answers: Record<string, number>;
}

/**
 * Metrics from a batch of simulations
 */
export interface SimulationMetrics {
  totalAgents: number;
  correctType: number;
  typeAccuracy: number;
  averageConfidence: number;
  averageMargin: number;
  correctWing: number;
  wingAccuracy: number;
  correctInstinct: number;
  instinctAccuracy: number;
  confusionMatrix: Record<TypeNumber, Record<TypeNumber, number>>;
  typeBreakdown: Record<TypeNumber, {
    total: number;
    correct: number;
    accuracy: number;
    commonMistypes: Array<{ type: TypeNumber; count: number }>;
  }>;
}

/**
 * Question discrimination analysis
 */
export interface QuestionAnalysis {
  questionId: string;
  questionText: string;
  discriminationIndex: number; // How well it separates types (0-1)
  typeCorrelations: Record<TypeNumber, number>;
  averageResponse: number;
  responseVariance: number;
  targetTypes: TypeNumber[]; // Types this question is designed to identify
}

/**
 * Simulate an agent answering a single question
 * Uses the agent's response patterns to generate realistic answers
 */
function simulateAnswer(
  agent: AgentPersona,
  question: TypeQuestion | InstinctQuestion
): number {
  // Base response influenced by random variation
  let baseResponse = 3; // Neutral starting point

  if ('typeScores' in question) {
    // Core type question - use response patterns to determine answer
    const typeQ = question as TypeQuestion;
    let resonance = 0;

    for (const [type, score] of Object.entries(typeQ.typeScores)) {
      const typeNum = Number(type) as TypeNumber;
      const pattern = getPatternForType(agent, typeNum);
      resonance += pattern * (score || 0);
    }

    // Normalize and convert to 1-5 scale
    // Higher resonance = stronger agreement
    const normalizedResonance = Math.max(0, Math.min(1, resonance / 3));
    baseResponse = 1 + normalizedResonance * 4;

    // Add center-based modulation
    if (question.category === 'fear') {
      // Fear questions resonate more with head types
      baseResponse += (agent.centerResonance.head - 0.5) * 0.5;
    } else if (question.category === 'desire') {
      // Desire questions resonate more with heart types
      baseResponse += (agent.centerResonance.heart - 0.5) * 0.5;
    } else if (question.category === 'behavior') {
      // Behavior questions resonate more with gut types
      baseResponse += (agent.centerResonance.gut - 0.5) * 0.5;
    }
  } else if ('instinctScores' in question) {
    // Instinct question
    const instQ = question as InstinctQuestion;
    const subtypeAgent = agent as SubtypeAgent;

    if ('dominantInstinct' in subtypeAgent) {
      // Subtype agent - use instinct preferences
      const dominant = subtypeAgent.dominantInstinct;
      const secondary = subtypeAgent.secondaryInstinct;
      const blind = subtypeAgent.blindSpot;

      let resonance = 0;
      resonance += instQ.instinctScores[dominant] * 1.0;
      resonance += instQ.instinctScores[secondary] * 0.6;
      resonance += instQ.instinctScores[blind] * 0.2;

      const normalizedResonance = Math.max(0, Math.min(1, resonance / 3));
      baseResponse = 1 + normalizedResonance * 4;
    } else {
      // Base agent without instinct - use balanced responses
      const avgInstinct = (instQ.instinctScores.sp + instQ.instinctScores.so + instQ.instinctScores.sx) / 3;
      baseResponse = 2.5 + avgInstinct * 0.8;
    }
  }

  // Add realistic noise (humans don't answer perfectly consistently)
  const noise = (Math.random() - 0.5) * 0.8;
  baseResponse += noise;

  // Clamp to valid range and round
  return Math.round(Math.max(1, Math.min(5, baseResponse)));
}

/**
 * Get the response pattern value for a specific type
 */
function getPatternForType(agent: AgentPersona, type: TypeNumber): number {
  const patternMap: Record<TypeNumber, keyof AgentPersona['responsePatterns']> = {
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
  return agent.responsePatterns[patternMap[type]];
}

/**
 * Simulate wing question answer
 */
function simulateWingAnswer(
  agent: AgentPersona | WingAgent,
  question: WingQuestion
): number {
  let preference = 0;

  if ('wing' in agent) {
    // Wing agent - strongly prefer their wing
    const wingAgent = agent as WingAgent;
    if (question.wingA.wing === wingAgent.wing) {
      preference = 0.75;
    } else if (question.wingB.wing === wingAgent.wing) {
      preference = -0.75;
    }
  } else {
    // Base agent - use response patterns to infer wing preference
    const patternA = getPatternForType(agent, question.wingA.wing);
    const patternB = getPatternForType(agent, question.wingB.wing);
    preference = (patternA - patternB) * 0.5;
  }

  // Convert preference to 1-5 scale
  // Positive preference = higher score (agrees with wingA direction)
  const baseResponse = 3 + preference * 2;

  // Add noise
  const noise = (Math.random() - 0.5) * 0.6;

  return Math.round(Math.max(1, Math.min(5, baseResponse + noise)));
}

/**
 * Run a complete quiz simulation for a single agent
 */
export function simulateQuiz(agent: AgentPersona | WingAgent | SubtypeAgent): SimulationResult {
  const answers: Record<string, number> = {};

  // Phase 1: Core type questions
  for (const question of coreTypeQuestions) {
    answers[question.id] = simulateAnswer(agent, question);
  }

  // Calculate core type results
  const typeScores = calculateTypeScores(answers);
  const resultType = getTopType(typeScores);

  // Calculate confidence and margin
  const sortedScores = Object.entries(typeScores)
    .sort((a, b) => b[1] - a[1]) as [string, number][];
  const topScore = sortedScores[0][1];
  const secondScore = sortedScores[1][1];
  const maxPossible = coreTypeQuestions.length * 3 * 5;
  const typeConfidence = Math.min(100, Math.round((topScore / (maxPossible / 9)) * 100));
  const marginOverSecond = topScore - secondScore;

  // Phase 2: Wing questions (if applicable)
  let resultWing: WingVariant | undefined;
  let expectedWing: WingVariant | undefined;
  let wingCorrect: boolean | undefined;

  if ('wing' in agent) {
    const wingAgent = agent as WingAgent;
    expectedWing = wingAgent.variant;

    // Answer wing questions for the detected type
    const typeWingQuestions = wingQuestions[resultType] || [];
    for (const question of typeWingQuestions) {
      answers[question.id] = simulateWingAnswer(agent, question);
    }

    const wingScores = calculateWingScores(resultType, answers);
    const wings = getWingsForType(resultType);
    resultWing = wingScores.wingA >= wingScores.wingB
      ? `${resultType}w${wings[0]}` as WingVariant
      : `${resultType}w${wings[1]}` as WingVariant;

    wingCorrect = resultWing === expectedWing;
  }

  // Phase 3: Instinct questions (if applicable)
  let resultInstinctDominant: InstinctType | undefined;
  let expectedInstinctDominant: InstinctType | undefined;
  let instinctCorrect: boolean | undefined;

  if ('dominantInstinct' in agent) {
    const subtypeAgent = agent as SubtypeAgent;
    expectedInstinctDominant = subtypeAgent.dominantInstinct;

    for (const question of instinctQuestions) {
      answers[question.id] = simulateAnswer(agent, question);
    }

    const instinctScores = calculateInstinctScores(answers);
    const stack = getInstinctStack(instinctScores);
    resultInstinctDominant = stack[0];

    instinctCorrect = resultInstinctDominant === expectedInstinctDominant;
  }

  const isCorrect = resultType === agent.type;

  return {
    agent,
    expectedType: agent.type,
    resultType,
    typeScores,
    typeConfidence,
    marginOverSecond,
    expectedWing,
    resultWing,
    wingCorrect,
    expectedInstinctDominant,
    resultInstinctDominant,
    instinctCorrect,
    isCorrect,
    answers,
  };
}

/**
 * Run simulations for multiple agents and calculate metrics
 */
export function runSimulationBatch(
  agents: Array<AgentPersona | WingAgent | SubtypeAgent>
): SimulationMetrics {
  const results = agents.map(simulateQuiz);

  // Initialize metrics
  const confusionMatrix: Record<TypeNumber, Record<TypeNumber, number>> = {} as any;
  const typeBreakdown: Record<TypeNumber, {
    total: number;
    correct: number;
    accuracy: number;
    commonMistypes: Array<{ type: TypeNumber; count: number }>;
  }> = {} as any;

  for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    confusionMatrix[t] = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    typeBreakdown[t] = { total: 0, correct: 0, accuracy: 0, commonMistypes: [] };
  }

  // Calculate metrics
  let correctType = 0;
  let totalConfidence = 0;
  let totalMargin = 0;
  let wingAgentCount = 0;
  let correctWing = 0;
  let instinctAgentCount = 0;
  let correctInstinct = 0;

  for (const result of results) {
    // Update confusion matrix
    confusionMatrix[result.expectedType][result.resultType]++;

    // Update type breakdown
    typeBreakdown[result.expectedType].total++;
    if (result.isCorrect) {
      typeBreakdown[result.expectedType].correct++;
      correctType++;
    }

    totalConfidence += result.typeConfidence;
    totalMargin += result.marginOverSecond;

    // Wing accuracy
    if (result.wingCorrect !== undefined) {
      wingAgentCount++;
      if (result.wingCorrect) correctWing++;
    }

    // Instinct accuracy
    if (result.instinctCorrect !== undefined) {
      instinctAgentCount++;
      if (result.instinctCorrect) correctInstinct++;
    }
  }

  // Calculate accuracies and find common mistypes
  for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    const breakdown = typeBreakdown[t];
    breakdown.accuracy = breakdown.total > 0 ? breakdown.correct / breakdown.total : 0;

    // Find common mistypes
    const mistypes: Array<{ type: TypeNumber; count: number }> = [];
    for (const r of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
      if (r !== t && confusionMatrix[t][r] > 0) {
        mistypes.push({ type: r, count: confusionMatrix[t][r] });
      }
    }
    breakdown.commonMistypes = mistypes.sort((a, b) => b.count - a.count);
  }

  return {
    totalAgents: agents.length,
    correctType,
    typeAccuracy: correctType / agents.length,
    averageConfidence: totalConfidence / agents.length,
    averageMargin: totalMargin / agents.length,
    correctWing,
    wingAccuracy: wingAgentCount > 0 ? correctWing / wingAgentCount : 0,
    correctInstinct,
    instinctAccuracy: instinctAgentCount > 0 ? correctInstinct / instinctAgentCount : 0,
    confusionMatrix,
    typeBreakdown,
  };
}

/**
 * Analyze question discrimination power
 */
export function analyzeQuestionDiscrimination(
  results: SimulationResult[]
): QuestionAnalysis[] {
  const analyses: QuestionAnalysis[] = [];

  for (const question of coreTypeQuestions) {
    const responsesByType: Record<TypeNumber, number[]> = {
      1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []
    };

    // Group responses by agent type
    for (const result of results) {
      const answer = result.answers[question.id];
      if (answer !== undefined) {
        responsesByType[result.expectedType].push(answer);
      }
    }

    // Calculate correlations and variance
    const typeCorrelations: Record<TypeNumber, number> = {} as any;
    const allResponses: number[] = [];

    for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
      const responses = responsesByType[t];
      allResponses.push(...responses);
      if (responses.length > 0) {
        const avg = responses.reduce((a, b) => a + b, 0) / responses.length;
        typeCorrelations[t] = avg;
      } else {
        typeCorrelations[t] = 3;
      }
    }

    // Calculate average and variance
    const averageResponse = allResponses.length > 0
      ? allResponses.reduce((a, b) => a + b, 0) / allResponses.length
      : 3;

    const responseVariance = allResponses.length > 0
      ? allResponses.reduce((sum, r) => sum + Math.pow(r - averageResponse, 2), 0) / allResponses.length
      : 0;

    // Calculate discrimination index (difference between target types and non-target types)
    const targetTypes = Object.keys(question.typeScores).map(Number) as TypeNumber[];
    const targetAvg = targetTypes.length > 0
      ? targetTypes.reduce((sum, t) => sum + typeCorrelations[t], 0) / targetTypes.length
      : 3;
    const nonTargetTypes = ([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[])
      .filter(t => !targetTypes.includes(t));
    const nonTargetAvg = nonTargetTypes.length > 0
      ? nonTargetTypes.reduce((sum, t) => sum + typeCorrelations[t], 0) / nonTargetTypes.length
      : 3;

    const discriminationIndex = Math.abs(targetAvg - nonTargetAvg) / 4; // Normalize to 0-1

    analyses.push({
      questionId: question.id,
      questionText: question.text,
      discriminationIndex,
      typeCorrelations,
      averageResponse,
      responseVariance,
      targetTypes,
    });
  }

  return analyses.sort((a, b) => b.discriminationIndex - a.discriminationIndex);
}

/**
 * Helper to get wings for a type
 */
function getWingsForType(type: TypeNumber): [TypeNumber, TypeNumber] {
  const wings: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
    1: [9, 2], 2: [1, 3], 3: [2, 4], 4: [3, 5], 5: [4, 6],
    6: [5, 7], 7: [6, 8], 8: [7, 9], 9: [8, 1],
  };
  return wings[type];
}

/**
 * Format metrics for display
 */
export function formatMetricsReport(metrics: SimulationMetrics): string {
  const lines: string[] = [
    '═══════════════════════════════════════════════════',
    '         ENNEAGRAM QUIZ VALIDATION REPORT',
    '═══════════════════════════════════════════════════',
    '',
    '📊 OVERALL METRICS',
    '───────────────────────────────────────────────────',
    `Total Agents Tested: ${metrics.totalAgents}`,
    `Type Accuracy: ${(metrics.typeAccuracy * 100).toFixed(1)}% (${metrics.correctType}/${metrics.totalAgents})`,
    `Wing Accuracy: ${(metrics.wingAccuracy * 100).toFixed(1)}%`,
    `Instinct Accuracy: ${(metrics.instinctAccuracy * 100).toFixed(1)}%`,
    `Average Confidence: ${metrics.averageConfidence.toFixed(1)}%`,
    `Average Margin: ${metrics.averageMargin.toFixed(1)} points`,
    '',
    '📈 TYPE-BY-TYPE BREAKDOWN',
    '───────────────────────────────────────────────────',
  ];

  for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    const breakdown = metrics.typeBreakdown[t];
    const mistypes = breakdown.commonMistypes
      .slice(0, 2)
      .map(m => `Type ${m.type}`)
      .join(', ') || 'none';

    lines.push(
      `Type ${t}: ${(breakdown.accuracy * 100).toFixed(0)}% (${breakdown.correct}/${breakdown.total}) | Confused with: ${mistypes}`
    );
  }

  lines.push(
    '',
    '🔄 CONFUSION MATRIX',
    '───────────────────────────────────────────────────',
    '    Expected →',
    '    1   2   3   4   5   6   7   8   9  ← Predicted',
  );

  for (const p of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    const row = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      .map((e: number) => {
        const count = metrics.confusionMatrix[e as TypeNumber][p];
        return count.toString().padStart(3);
      })
      .join(' ');
    lines.push(`${p}:  ${row}`);
  }

  lines.push('═══════════════════════════════════════════════════');

  return lines.join('\n');
}
