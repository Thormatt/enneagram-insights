import type { TypeNumber, InstinctType, WingVariant } from '../../../types';
import {
  initializeTypeProbabilities,
  initializeInstinctProbabilities,
  updateTypeProbabilities,
  updateInstinctProbabilities,
  getTopTypes,
  getLeadingType,
  getInstinctStack,
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

/**
 * Adaptive Engine
 *
 * Main orchestration layer for the adaptive quiz.
 * Manages state, question selection, and convergence detection.
 */

export type AdaptiveQuizStage = 'intro' | 'type' | 'wing' | 'instinct' | 'results';

export type AnyQuestion = ScreeningQuestion | TypeQuestion | DifferentiatorQuestion | WingQuestion | InstinctQuestion;

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
  wing: WingVariant;
  wingBalance: number;
  instinctStack: [InstinctType, InstinctType, InstinctType];
  questionsAnswered: number;
  convergenceReason: string | null;
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

  // Process based on current stage
  switch (state.stage) {
    case 'type':
      return processTypeAnswer(state, question, answer, newAnsweredQuestions, newHistory, config);

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

  // If converged, move to wing stage
  if (convergence.hasConverged) {
    const determinedType = getLeadingType(newTypeProbabilities).type;
    const wingQuestions = expandedWingQuestions[determinedType];
    const firstWingQuestion = wingQuestions?.[0] || null;

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
  const instinctStack = getInstinctStack(instinctProbabilities);

  return {
    primaryType: type,
    typeConfidence: Math.round(probability * 100),
    topThreeTypes: topThree,
    wing: state.wingResult?.variant || `${type}w${type === 9 ? 8 : type + 1}` as WingVariant,
    wingBalance: state.wingResult?.balance || 0,
    instinctStack,
    questionsAnswered: state.questionHistory.length,
    convergenceReason: state.typeConvergence.reason,
  };
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
