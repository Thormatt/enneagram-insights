/**
 * Adaptive Quiz Engine
 *
 * Core components for the adaptive quiz system:
 * - Score Calculator: Bayesian probability updates
 * - Question Selector: Information gain-based selection
 * - Convergence Checker: Stopping rules
 * - Adaptive Engine: Main orchestration
 */

// Score Calculator
export {
  initializeTypeProbabilities,
  initializeInstinctProbabilities,
  updateTypeProbabilities,
  updateInstinctProbabilities,
  getTopTypes,
  getLeadingType,
  getInstinctStack,
  getTypeResonanceDistribution,
  calculateEntropy,
  getViableCandidates,
  areTypesConfused,
  type TypeProbabilities,
  type InstinctProbabilities,
} from './scoreCalculator';

// Question Selector
export {
  determinePhase,
  selectNextQuestion,
  selectNextQuestions,
  type QuizPhase,
  type QuestionCandidate,
} from './questionSelector';

// Convergence Checker
export {
  checkConvergence,
  checkInstinctConvergence,
  getConvergenceProgress,
  estimateRemainingQuestions,
  getConvergenceMessage,
  DEFAULT_CONVERGENCE_CONFIG,
  type ConvergenceStatus,
  type ConvergenceReason,
  type ConvergenceDetails,
  type ConvergenceConfig,
} from './convergenceChecker';

// Adaptive Engine
export {
  createInitialState,
  startQuiz,
  processAnswer,
  getProgress,
  getCurrentRankings,
  type AdaptiveQuizStage,
  type AdaptiveQuizState,
  type AdaptiveQuizResults,
  type AnyQuestion,
} from './adaptiveEngine';
