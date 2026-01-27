/**
 * Quiz Engine System
 *
 * CANONICAL ENGINE: mergedEngine.ts
 * The merged engine combines the best of adaptive + hybrid approaches
 * and should be used for production. It provides:
 * - Scenario-based screening for quick center identification
 * - Bayesian probability updates with softmax normalization
 * - Forced-choice disambiguation for confused type pairs
 * - Ipsative instinct ranking
 * - Health level assessment
 * - Inconclusive result detection
 *
 * OTHER ENGINES:
 * - adaptiveEngine.ts: Original adaptive approach (kept for backward compatibility)
 * - hybridEngine.ts: Experimental (deprecated - use merged instead)
 *
 * SHARED UTILITIES:
 * - scoreCalculator.ts: Bayesian probability updates
 * - questionSelector.ts: Information gain-based selection
 * - convergenceChecker.ts: Stopping rules
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

// Adaptive Engine (original - kept for backward compatibility)
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

// Merged Engine (CANONICAL - use this for new implementations)
export {
  createMergedInitialState,
  startMergedQuiz,
  processMergedAnswer,
  getMergedProgress,
  type MergedQuizState,
  type MergedQuizResults,
  type MergedQuizStage,
} from './mergedEngine';

// Results Synthesis
export {
  type SynthesizedResults,
  getSubtypeProfile,
  calculateCenterBalance,
  getHarmonicGroup,
  getHornevianGroup,
  findConfusionCandidates,
  getTritypeArchetype,
  analyzeAnswerPatterns,
  generateGrowthSummary,
  synthesizeResults,
  CENTER_TYPES,
  HARMONIC_GROUPS,
  HORNEVIAN_GROUPS,
  SUBTYPE_PROFILES,
  TRITYPE_ARCHETYPES,
} from './resultsSynthesis';
