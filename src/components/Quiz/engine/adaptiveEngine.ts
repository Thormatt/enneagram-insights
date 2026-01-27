import type { TypeNumber, InstinctType, WingVariant } from '../../../types';
import {
  initializeTypeProbabilities,
  initializeInstinctProbabilities,
  updateTypeProbabilities,
  updateInstinctProbabilities,
  getTopTypes,
  getLeadingType,
  getInstinctStack,
  getTypeResonanceDistribution,
  calculateEntropy as _calculateEntropy,
  type TypeProbabilities,
  type InstinctProbabilities,
} from './scoreCalculator';
import {
  selectNextQuestion,
  determinePhase,
  type QuizPhase,
  type QuestionCandidate as _QuestionCandidate,
} from './questionSelector';
import {
  checkConvergence,
  checkInstinctConvergence,
  getConvergenceProgress,
  estimateRemainingQuestions,
  getConvergenceMessage,
  type ConvergenceStatus,
  type ConvergenceConfig,
  DEFAULT_CONVERGENCE_CONFIG,
} from './convergenceChecker';
import { screeningQuestions as _screeningQuestions, type ScreeningQuestion } from '../questionPool/screeningQuestions';
import { differentiatorQuestions as _differentiatorQuestions, type DifferentiatorQuestion } from '../questionPool/differentiatorQuestions';
import {
  expandedWingQuestions,
  calculateExpandedWingScores,
  type WingQuestion,
} from '../questionPool/expandedWingQuestions';
import { coreTypeQuestions as _coreTypeQuestions, instinctQuestions, type TypeQuestion, type InstinctQuestion } from '../quizData';
import { getIntegrationPath } from '../../../data/dynamics/integration';
import { getDisintegrationPath } from '../../../data/dynamics/disintegration';
import {
  getAttentionCheckForPosition,
  evaluateAttentionChecks,
  type AttentionCheckQuestion,
} from '../questionPool/attentionCheckQuestions';
import {
  calculateIntegrationLevel,
  getIntegrationQuestionsForInstinctStage,
  type IntegrationLevelQuestion,
  type IntegrationLevel,
  type HealthLevel,
} from '../questionPool/integrationLevelQuestions';
import {
  getForcedChoiceForPair,
  shouldTriggerForcedChoice,
  applyForcedChoiceScore,
  type ForcedChoicePair,
} from '../questionPool/forcedChoiceQuestions';
import { getLevel as getLevelData } from '../../../data/development/levels';

/**
 * Adaptive Engine
 *
 * Main orchestration layer for the adaptive quiz.
 * Manages state, question selection, and convergence detection.
 */

export type AdaptiveQuizStage = 'intro' | 'type' | 'forcedChoice' | 'wing' | 'instinct' | 'results';

export type AnyQuestion = ScreeningQuestion | TypeQuestion | DifferentiatorQuestion | WingQuestion | InstinctQuestion | AttentionCheckQuestion | IntegrationLevelQuestion | ForcedChoicePair;

export interface AdaptiveQuizState {
  stage: AdaptiveQuizStage;
  phase: QuizPhase;

  // Type determination
  typeProbabilities: TypeProbabilities;
  typeConvergence: ConvergenceStatus;

  // Wing determination
  wingAnswers: Record<string, number>;
  wingResult: {
    variant: WingVariant;
    balance: number; // -1 to 1
    wingAScore: number;
    wingBScore: number;
  } | null;

  // Instinct determination
  instinctProbabilities: InstinctProbabilities;
  instinctConverged: boolean;

  // Attention checks
  attentionCheckAnswers: Record<string, number>;
  pendingAttentionCheck: AttentionCheckQuestion | null;

  // Integration level
  integrationLevelAnswers: Record<string, number>;

  // Forced choice disambiguation
  forcedChoiceAnswers: Record<string, TypeNumber>; // questionId -> chosen type
  confusedPairs: [TypeNumber, TypeNumber][];
  currentForcedChoicePairIndex: number;

  // Progress tracking
  currentQuestion: AnyQuestion | null;
  answeredQuestions: Set<string>;
  questionHistory: Array<{
    question: AnyQuestion;
    answer: number;
    timestamp: number;
  }>;

  // Final results
  results: AdaptiveQuizResults | null;
}

export interface AdaptiveQuizResults {
  primaryType: TypeNumber;
  typeConfidence: number;
  topThreeTypes: Array<{
    type: TypeNumber;
    probability: number;
    score: number;
  }>;
  // All 9 types with percentages
  allTypeScores: Array<{
    type: TypeNumber;
    probability: number;
    percentage: number;
  }>;
  // Tritype: top type from each center
  tritype: {
    gut: TypeNumber; // 8, 9, or 1
    heart: TypeNumber; // 2, 3, or 4
    head: TypeNumber; // 5, 6, or 7
    code: string; // e.g., "479" or "925"
  };
  wing: WingVariant;
  wingBalance: number;
  instinctStack: [InstinctType, InstinctType, InstinctType];
  questionsAnswered: number;
  convergenceReason: string | null;
  // Growth/Stress Arrows
  growthArrow: {
    targetType: TypeNumber;
    gains: string[];
    practices: string[];
    description: string;
  };
  stressArrow: {
    targetType: TypeNumber;
    exhibits: string[];
    warningSigns: string[];
    description: string;
  };
  // Attention check results
  attentionChecksPassed: boolean;
  attentionChecksScore: {
    passed: number;
    failed: string[];
    total: number;
    passRate: number;
  };
  // Integration level results
  integrationLevel: {
    level: IntegrationLevel;
    healthLevel: HealthLevel;
    normalized: number;
    levelTitle: string;
    levelDescription: string;
  };
  // Inconclusive result detection
  isInconclusive: boolean;
  inconclusiveReason: string | null;
}

/**
 * Create initial adaptive quiz state
 */
export function createInitialState(): AdaptiveQuizState {
  const typeProbabilities = initializeTypeProbabilities();
  return {
    stage: 'intro',
    phase: 'screening',
    typeProbabilities,
    typeConvergence: checkConvergence(typeProbabilities),
    wingAnswers: {},
    wingResult: null,
    instinctProbabilities: initializeInstinctProbabilities(),
    instinctConverged: false,
    attentionCheckAnswers: {},
    pendingAttentionCheck: null,
    integrationLevelAnswers: {},
    forcedChoiceAnswers: {},
    confusedPairs: [],
    currentForcedChoicePairIndex: 0,
    currentQuestion: null,
    answeredQuestions: new Set(),
    questionHistory: [],
    results: null,
  };
}

/**
 * Start the quiz (transition from intro to type stage)
 */
export function startQuiz(state: AdaptiveQuizState): AdaptiveQuizState {
  const nextQuestion = selectNextQuestion(
    state.typeProbabilities,
    state.answeredQuestions
  );

  return {
    ...state,
    stage: 'type',
    currentQuestion: nextQuestion?.question || null,
    phase: determinePhase(state.typeProbabilities),
  };
}

/**
 * Check if question is an attention check
 */
function isAttentionCheck(question: AnyQuestion): question is AttentionCheckQuestion {
  return 'expectedAnswer' in question && 'tolerance' in question;
}

/**
 * Check if question is an integration level question
 */
function isIntegrationLevelQuestion(question: AnyQuestion): question is IntegrationLevelQuestion {
  return 'direction' in question && ('healthy' === (question as IntegrationLevelQuestion).direction || 'unhealthy' === (question as IntegrationLevelQuestion).direction) && 'weight' in question;
}

/**
 * Check if question is a forced choice pair
 */
function isForcedChoicePair(question: AnyQuestion): question is ForcedChoicePair {
  return 'pair' in question && 'optionA' in question && 'optionB' in question;
}

/**
 * Process an answer and return updated state
 */
export function processAnswer(
  state: AdaptiveQuizState,
  answer: number,
  config: ConvergenceConfig = DEFAULT_CONVERGENCE_CONFIG
): AdaptiveQuizState {
  if (!state.currentQuestion) return state;

  const question = state.currentQuestion;
  const newAnsweredQuestions = new Set(state.answeredQuestions);
  newAnsweredQuestions.add(question.id);

  const newHistory = [
    ...state.questionHistory,
    { question, answer, timestamp: Date.now() },
  ];

  // Handle attention check questions
  if (isAttentionCheck(question)) {
    const newAttentionCheckAnswers = {
      ...state.attentionCheckAnswers,
      [question.id]: answer,
    };

    // Get next regular question (attention checks don't affect type probabilities)
    const nextQuestion = selectNextQuestion(
      state.typeProbabilities,
      newAnsweredQuestions,
      state.phase
    );

    return {
      ...state,
      attentionCheckAnswers: newAttentionCheckAnswers,
      pendingAttentionCheck: null,
      answeredQuestions: newAnsweredQuestions,
      questionHistory: newHistory,
      currentQuestion: nextQuestion?.question || null,
    };
  }

  // Handle integration level questions
  if (isIntegrationLevelQuestion(question)) {
    const newIntegrationLevelAnswers = {
      ...state.integrationLevelAnswers,
      [question.id]: answer,
    };

    // Get next instinct question
    const nextInstinctQuestion = instinctQuestions.find(q => !newAnsweredQuestions.has(q.id));

    // If no more instinct questions, calculate final results
    const answeredInstinctCount = instinctQuestions.filter(q =>
      newAnsweredQuestions.has(q.id)
    ).length;
    const instinctComplete = answeredInstinctCount >= instinctQuestions.length ||
      (state.instinctConverged && answeredInstinctCount >= 10);

    if (instinctComplete) {
      const results = calculateFinalResults(
        { ...state, integrationLevelAnswers: newIntegrationLevelAnswers },
        state.instinctProbabilities
      );

      return {
        ...state,
        integrationLevelAnswers: newIntegrationLevelAnswers,
        answeredQuestions: newAnsweredQuestions,
        questionHistory: newHistory,
        stage: 'results',
        currentQuestion: null,
        results,
      };
    }

    return {
      ...state,
      integrationLevelAnswers: newIntegrationLevelAnswers,
      answeredQuestions: newAnsweredQuestions,
      questionHistory: newHistory,
      currentQuestion: nextInstinctQuestion || null,
    };
  }

  // Process based on current stage
  switch (state.stage) {
    case 'type':
      return processTypeAnswer(state, question, answer, newAnsweredQuestions, newHistory, config);

    case 'forcedChoice':
      return processForcedChoiceAnswer(state, question, answer, newAnsweredQuestions, newHistory);

    case 'wing':
      return processWingAnswer(state, question, answer, newAnsweredQuestions, newHistory);

    case 'instinct':
      return processInstinctAnswer(state, question, answer, newAnsweredQuestions, newHistory);

    default:
      return state;
  }
}

/**
 * Process a type-determination answer
 */
function processTypeAnswer(
  state: AdaptiveQuizState,
  question: AnyQuestion,
  answer: number,
  answeredQuestions: Set<string>,
  history: AdaptiveQuizState['questionHistory'],
  config: ConvergenceConfig
): AdaptiveQuizState {
  // Get type scores from the question
  let typeScores: Partial<Record<TypeNumber, number>> = {};

  if ('typeScores' in question) {
    typeScores = question.typeScores;
  } else if ('direction' in question) {
    // Differentiator question
    const diff = question as DifferentiatorQuestion;
    typeScores = {
      [diff.direction.positive]: 2,
      [diff.direction.negative]: -2,
    };
  }

  // Update probabilities
  const newTypeProbabilities = updateTypeProbabilities(
    state.typeProbabilities,
    typeScores,
    answer
  );

  // Check convergence
  const convergence = checkConvergence(newTypeProbabilities, config);
  const phase = determinePhase(newTypeProbabilities);

  // If converged, check for forced-choice or move to wing stage
  if (convergence.hasConverged) {
    const topTypes = getTopTypes(newTypeProbabilities, 3);

    // Check if we should trigger forced-choice disambiguation
    const forcedChoiceCheck = shouldTriggerForcedChoice(topTypes);

    if (forcedChoiceCheck.trigger && forcedChoiceCheck.pairs.length > 0) {
      // Enter forced-choice stage
      const firstPair = forcedChoiceCheck.pairs[0];
      const forcedChoiceQuestions = getForcedChoiceForPair(firstPair[0], firstPair[1]);

      if (forcedChoiceQuestions.length > 0) {
        return {
          ...state,
          typeProbabilities: newTypeProbabilities,
          typeConvergence: convergence,
          answeredQuestions,
          questionHistory: history,
          stage: 'forcedChoice',
          phase,
          currentQuestion: forcedChoiceQuestions[0],
          confusedPairs: forcedChoiceCheck.pairs,
          currentForcedChoicePairIndex: 0,
        };
      }
    }

    // No forced-choice needed, proceed to wing stage
    const determinedType = getLeadingType(newTypeProbabilities).type;
    const wingQuestions = expandedWingQuestions[determinedType] || [];
    const firstWingQuestion = wingQuestions[0];

    // If no wing questions available (shouldn't happen), skip to instinct
    if (!firstWingQuestion) {
      const firstInstinctQuestion = instinctQuestions[0];
      return {
        ...state,
        typeProbabilities: newTypeProbabilities,
        typeConvergence: convergence,
        answeredQuestions,
        questionHistory: history,
        stage: 'instinct',
        phase,
        currentQuestion: firstInstinctQuestion || null,
        wingResult: {
          variant: `${determinedType}w${determinedType === 9 ? 1 : determinedType + 1}` as WingVariant,
          balance: 0,
          wingAScore: 0,
          wingBScore: 0,
        },
      };
    }

    return {
      ...state,
      typeProbabilities: newTypeProbabilities,
      typeConvergence: convergence,
      answeredQuestions,
      questionHistory: history,
      stage: 'wing',
      phase,
      currentQuestion: firstWingQuestion,
    };
  }

  // Check if we should insert an attention check
  // Count only type questions answered (not attention checks)
  const typeQuestionsAnswered = history.filter(h => !isAttentionCheck(h.question)).length;
  const usedAttentionChecks = new Set(Object.keys(state.attentionCheckAnswers));
  const pendingCheck = getAttentionCheckForPosition(typeQuestionsAnswered, usedAttentionChecks);

  if (pendingCheck) {
    return {
      ...state,
      typeProbabilities: newTypeProbabilities,
      typeConvergence: convergence,
      answeredQuestions,
      questionHistory: history,
      phase,
      currentQuestion: pendingCheck,
      pendingAttentionCheck: pendingCheck,
    };
  }

  // Otherwise, select next question
  const nextQuestion = selectNextQuestion(newTypeProbabilities, answeredQuestions, phase);

  return {
    ...state,
    typeProbabilities: newTypeProbabilities,
    typeConvergence: convergence,
    answeredQuestions,
    questionHistory: history,
    phase,
    currentQuestion: nextQuestion?.question || null,
  };
}

/**
 * Process a wing-determination answer
 */
function processWingAnswer(
  state: AdaptiveQuizState,
  question: AnyQuestion,
  answer: number,
  answeredQuestions: Set<string>,
  history: AdaptiveQuizState['questionHistory']
): AdaptiveQuizState {
  const determinedType = getLeadingType(state.typeProbabilities).type;
  const wingQuestions = expandedWingQuestions[determinedType] || [];

  const newWingAnswers = {
    ...state.wingAnswers,
    [question.id]: answer,
  };

  // Check if we've answered enough wing questions
  const answeredWingCount = wingQuestions.filter(q => newWingAnswers[q.id] !== undefined).length;
  const wingComplete = answeredWingCount >= 6; // Minimum 6 wing questions

  if (wingComplete) {
    // Calculate wing result
    const wingScores = calculateExpandedWingScores(determinedType, newWingAnswers);
    const wing = wingScores.balance >= 0
      ? `${determinedType}w${wingScores.wingAType}` as WingVariant
      : `${determinedType}w${wingScores.wingBType}` as WingVariant;

    // Move to instinct stage
    const firstInstinctQuestion = instinctQuestions[0];

    return {
      ...state,
      wingAnswers: newWingAnswers,
      wingResult: {
        variant: wing,
        balance: wingScores.balance,
        wingAScore: wingScores.wingA,
        wingBScore: wingScores.wingB,
      },
      answeredQuestions,
      questionHistory: history,
      stage: 'instinct',
      currentQuestion: firstInstinctQuestion,
    };
  }

  // Find next unanswered wing question
  const nextWingQuestion = wingQuestions.find(q => newWingAnswers[q.id] === undefined);

  return {
    ...state,
    wingAnswers: newWingAnswers,
    answeredQuestions,
    questionHistory: history,
    currentQuestion: nextWingQuestion || null,
  };
}

/**
 * Process a forced-choice disambiguation answer
 */
function processForcedChoiceAnswer(
  state: AdaptiveQuizState,
  question: AnyQuestion,
  answer: number,
  answeredQuestions: Set<string>,
  history: AdaptiveQuizState['questionHistory']
): AdaptiveQuizState {
  if (!isForcedChoicePair(question)) {
    return state;
  }

  // Determine which type was chosen (1 = optionA, 2 = optionB)
  const chosenType = answer === 1 ? question.optionA.type : question.optionB.type;
  const unchosenType = answer === 1 ? question.optionB.type : question.optionA.type;

  // Apply score adjustment to raw scores
  const rawScores: Record<TypeNumber, number> = {} as Record<TypeNumber, number>;
  for (let i = 1; i <= 9; i++) {
    rawScores[i as TypeNumber] = state.typeProbabilities.rawScores[i as TypeNumber] || 0;
  }
  const adjustedScores = applyForcedChoiceScore(rawScores, chosenType, unchosenType);

  // Recalculate probabilities using softmax on adjusted scores
  const newTypeProbabilities = {
    ...state.typeProbabilities,
    rawScores: adjustedScores,
  };

  // Reapply softmax to get new probabilities
  const maxScore = Math.max(...Object.values(adjustedScores));
  const expScores: Record<TypeNumber, number> = {} as Record<TypeNumber, number>;
  let expSum = 0;

  for (let i = 1; i <= 9; i++) {
    const typeNum = i as TypeNumber;
    expScores[typeNum] = Math.exp(adjustedScores[typeNum] - maxScore);
    expSum += expScores[typeNum];
  }

  for (let i = 1; i <= 9; i++) {
    const typeNum = i as TypeNumber;
    newTypeProbabilities.probabilities[typeNum] = expScores[typeNum] / expSum;
  }

  // Track the answer
  const newForcedChoiceAnswers = {
    ...state.forcedChoiceAnswers,
    [question.id]: chosenType,
  };

  // Get all questions for the current confused pair
  const currentPair = state.confusedPairs[state.currentForcedChoicePairIndex];
  const currentPairQuestions = getForcedChoiceForPair(currentPair[0], currentPair[1]);

  // Find the next unanswered question in this pair
  const nextQuestionInPair = currentPairQuestions.find(q => !newForcedChoiceAnswers[q.id]);

  if (nextQuestionInPair) {
    // More questions in this pair
    return {
      ...state,
      typeProbabilities: newTypeProbabilities,
      forcedChoiceAnswers: newForcedChoiceAnswers,
      answeredQuestions,
      questionHistory: history,
      currentQuestion: nextQuestionInPair,
    };
  }

  // Check if there are more confused pairs to process
  const nextPairIndex = state.currentForcedChoicePairIndex + 1;

  if (nextPairIndex < state.confusedPairs.length) {
    const nextPair = state.confusedPairs[nextPairIndex];
    const nextPairQuestions = getForcedChoiceForPair(nextPair[0], nextPair[1]);
    const firstQuestion = nextPairQuestions[0];

    if (firstQuestion) {
      return {
        ...state,
        typeProbabilities: newTypeProbabilities,
        forcedChoiceAnswers: newForcedChoiceAnswers,
        answeredQuestions,
        questionHistory: history,
        currentQuestion: firstQuestion,
        currentForcedChoicePairIndex: nextPairIndex,
      };
    }
  }

  // All forced-choice pairs complete, move to wing stage
  const determinedType = getLeadingType(newTypeProbabilities).type;
  const wingQuestions = expandedWingQuestions[determinedType] || [];
  const firstWingQuestion = wingQuestions[0];

  if (!firstWingQuestion) {
    // No wing questions, skip to instinct
    const firstInstinctQuestion = instinctQuestions[0];
    return {
      ...state,
      typeProbabilities: newTypeProbabilities,
      forcedChoiceAnswers: newForcedChoiceAnswers,
      answeredQuestions,
      questionHistory: history,
      stage: 'instinct',
      currentQuestion: firstInstinctQuestion || null,
      wingResult: {
        variant: `${determinedType}w${determinedType === 9 ? 1 : determinedType + 1}` as WingVariant,
        balance: 0,
        wingAScore: 0,
        wingBScore: 0,
      },
    };
  }

  return {
    ...state,
    typeProbabilities: newTypeProbabilities,
    forcedChoiceAnswers: newForcedChoiceAnswers,
    answeredQuestions,
    questionHistory: history,
    stage: 'wing',
    currentQuestion: firstWingQuestion,
  };
}

/**
 * Process an instinct-determination answer
 */
function processInstinctAnswer(
  state: AdaptiveQuizState,
  question: AnyQuestion,
  answer: number,
  answeredQuestions: Set<string>,
  history: AdaptiveQuizState['questionHistory']
): AdaptiveQuizState {
  // Get instinct scores
  let instinctScores: Record<InstinctType, number> = { sp: 0, so: 0, sx: 0 };

  if ('instinctScores' in question) {
    instinctScores = (question as InstinctQuestion).instinctScores;
  }

  // Update probabilities
  const newInstinctProbabilities = updateInstinctProbabilities(
    state.instinctProbabilities,
    instinctScores,
    answer
  );

  // Check convergence
  const instinctConverged = checkInstinctConvergence(newInstinctProbabilities);
  const answeredInstinctCount = instinctQuestions.filter(q =>
    answeredQuestions.has(q.id)
  ).length;

  // Complete after all instinct questions or convergence with minimum
  const instinctComplete = answeredInstinctCount >= instinctQuestions.length ||
    (instinctConverged && answeredInstinctCount >= 10);

  if (instinctComplete) {
    // Calculate final results
    const results = calculateFinalResults(state, newInstinctProbabilities);

    return {
      ...state,
      instinctProbabilities: newInstinctProbabilities,
      instinctConverged,
      answeredQuestions,
      questionHistory: history,
      stage: 'results',
      currentQuestion: null,
      results,
    };
  }

  // Check if we should insert an integration level question
  const answeredIntegrationIds = new Set(Object.keys(state.integrationLevelAnswers));
  const pendingIntegrationQuestion = getIntegrationQuestionsForInstinctStage(
    answeredInstinctCount,
    answeredIntegrationIds
  );

  if (pendingIntegrationQuestion) {
    return {
      ...state,
      instinctProbabilities: newInstinctProbabilities,
      instinctConverged,
      answeredQuestions,
      questionHistory: history,
      currentQuestion: pendingIntegrationQuestion,
    };
  }

  // Find next instinct question
  const nextInstinctQuestion = instinctQuestions.find(q => !answeredQuestions.has(q.id));

  return {
    ...state,
    instinctProbabilities: newInstinctProbabilities,
    instinctConverged,
    answeredQuestions,
    questionHistory: history,
    currentQuestion: nextInstinctQuestion || null,
  };
}

/**
 * Calculate final quiz results
 */
function calculateFinalResults(
  state: AdaptiveQuizState,
  instinctProbabilities: InstinctProbabilities
): AdaptiveQuizResults {
  const { type, probability, confidence: _confidence } = getLeadingType(state.typeProbabilities);
  const topThree = getTopTypes(state.typeProbabilities, 3);
  const allTypes = getTopTypes(state.typeProbabilities, 9);
  const instinctStack = getInstinctStack(instinctProbabilities);

  // Calculate tritype (top type from each center)
  const tritype = calculateTritype(allTypes);

  // Use resonance distribution for display (spreads percentages more meaningfully)
  const resonance = getTypeResonanceDistribution(state.typeProbabilities);
  const allTypeScores = resonance.map(r => ({
    type: r.type,
    probability: allTypes.find(t => t.type === r.type)?.probability || 0,
    percentage: r.percentage,
  }));

  // Get growth/stress arrow data
  const integrationPath = getIntegrationPath(type);
  const disintegrationPath = getDisintegrationPath(type);

  const growthArrow = {
    targetType: integrationPath?.movesTo || ((type % 9) + 1) as TypeNumber,
    gains: integrationPath?.gains || [],
    practices: integrationPath?.practices || [],
    description: integrationPath?.description || '',
  };

  const stressArrow = {
    targetType: disintegrationPath?.movesTo || ((type % 9) + 1) as TypeNumber,
    exhibits: disintegrationPath?.exhibits || [],
    warningSigns: disintegrationPath?.warningSigns || [],
    description: disintegrationPath?.description || '',
  };

  // Evaluate attention checks
  const attentionChecksScore = evaluateAttentionChecks(state.attentionCheckAnswers);
  const attentionChecksPassed = attentionChecksScore.passRate >= 0.5; // Pass if at least half correct

  // Calculate integration level
  const integrationCalc = calculateIntegrationLevel(state.integrationLevelAnswers);
  const levelData = getLevelData(type, integrationCalc.healthLevel);
  const integrationLevel = {
    level: integrationCalc.level,
    healthLevel: integrationCalc.healthLevel,
    normalized: integrationCalc.normalized,
    levelTitle: levelData?.title || `Level ${integrationCalc.healthLevel}`,
    levelDescription: levelData?.description || '',
  };

  // Determine if result is inconclusive
  const typeConfidenceValue = Math.round(probability * 100);
  const gap = topThree.length >= 2 ? topThree[0].probability - topThree[1].probability : 1;
  const isInconclusive = typeConfidenceValue < 40 || gap < 0.1;
  const inconclusiveReason = isInconclusive
    ? typeConfidenceValue < 40
      ? 'Low overall confidence - results may need more exploration'
      : 'Top types are very close - consider exploring both possibilities'
    : null;

  return {
    primaryType: type,
    typeConfidence: typeConfidenceValue,
    topThreeTypes: topThree,
    allTypeScores,
    tritype,
    wing: state.wingResult?.variant || `${type}w${type === 9 ? 8 : type + 1}` as WingVariant,
    wingBalance: state.wingResult?.balance || 0,
    instinctStack,
    questionsAnswered: state.questionHistory.length,
    convergenceReason: state.typeConvergence.reason,
    growthArrow,
    stressArrow,
    attentionChecksPassed,
    attentionChecksScore,
    integrationLevel,
    isInconclusive,
    inconclusiveReason,
  };
}

/**
 * Calculate tritype from all type scores
 * Tritype = top scoring type from each center (Gut/Heart/Head)
 */
function calculateTritype(allTypes: Array<{ type: TypeNumber; probability: number; score: number }>): {
  gut: TypeNumber;
  heart: TypeNumber;
  head: TypeNumber;
  code: string;
} {
  const GUT_TYPES: TypeNumber[] = [8, 9, 1];
  const HEART_TYPES: TypeNumber[] = [2, 3, 4];
  const HEAD_TYPES: TypeNumber[] = [5, 6, 7];

  // Find highest scoring type in each center
  const gut = allTypes
    .filter(t => GUT_TYPES.includes(t.type))
    .sort((a, b) => b.probability - a.probability)[0].type;

  const heart = allTypes
    .filter(t => HEART_TYPES.includes(t.type))
    .sort((a, b) => b.probability - a.probability)[0].type;

  const head = allTypes
    .filter(t => HEAD_TYPES.includes(t.type))
    .sort((a, b) => b.probability - a.probability)[0].type;

  // Determine tritype code order (primary type's center first)
  const primaryType = allTypes[0].type;
  let code: string;

  if (GUT_TYPES.includes(primaryType)) {
    code = `${gut}${heart}${head}`;
  } else if (HEART_TYPES.includes(primaryType)) {
    code = `${heart}${gut}${head}`;
  } else {
    code = `${head}${gut}${heart}`;
  }

  return { gut, heart, head, code };
}

/**
 * Get progress information for UI
 */
export function getProgress(state: AdaptiveQuizState): {
  stage: AdaptiveQuizStage;
  phase: QuizPhase;
  convergenceProgress: number;
  questionsAnswered: number;
  estimatedRemaining: { minimum: number; expected: number; maximum: number };
  message: string;
} {
  const convergenceProgress = getConvergenceProgress(state.typeProbabilities);
  const estimatedRemaining = estimateRemainingQuestions(state.typeProbabilities);
  const message = getConvergenceMessage(state.typeConvergence);

  return {
    stage: state.stage,
    phase: state.phase,
    convergenceProgress,
    questionsAnswered: state.questionHistory.length,
    estimatedRemaining,
    message,
  };
}

/**
 * Get current type rankings for display
 */
export function getCurrentRankings(state: AdaptiveQuizState): Array<{
  type: TypeNumber;
  probability: number;
  percentDisplay: string;
}> {
  return getTopTypes(state.typeProbabilities, 9).map(t => ({
    type: t.type,
    probability: t.probability,
    percentDisplay: `${Math.round(t.probability * 100)}%`,
  }));
}
