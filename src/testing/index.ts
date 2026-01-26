/**
 * Enneagram Quiz Testing Module
 *
 * This module provides:
 * - Agent personas that simulate each Enneagram type
 * - Quiz simulation capabilities
 * - Metrics calculation and analysis
 * - Baseline testing for quiz validation
 */

// Agent exports
export {
  typeAgents,
  getAllBaseAgents,
  getAllWingAgents,
  getAllSubtypeAgents,
  getCounterTypeAgents,
  createWingAgent,
  createSubtypeAgent,
  createFullVariantAgent,
  type AgentPersona,
  type WingAgent,
  type SubtypeAgent,
  type FullVariantAgent,
} from './agents/typeAgents';

// Simulator exports
export {
  simulateQuiz,
  runSimulationBatch,
  analyzeQuestionDiscrimination,
  formatMetricsReport,
  type SimulationResult,
  type SimulationMetrics,
  type QuestionAnalysis,
} from './simulator/quizSimulator';

// Test runner exports
export {
  runBaselineTests,
  printBaselineReport,
  exportResultsAsJson,
  type BaselineTestResults,
} from './runBaselineTest';

// Adaptive simulator exports
export {
  simulateAdaptiveQuiz,
  runAdaptiveSimulationBatch,
  calculateAdaptiveMetrics,
  formatAdaptiveMetricsReport,
  runAdaptiveValidation,
  type AdaptiveSimulationResult,
  type AdaptiveSimulationMetrics,
} from './simulator/adaptiveQuizSimulator';
