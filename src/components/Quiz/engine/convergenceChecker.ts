import type { TypeNumber } from '../../../types';
import type { TypeProbabilities, InstinctProbabilities } from './scoreCalculator';
import {
  calculateEntropy,
  getLeadingType,
  getViableCandidates,
} from './scoreCalculator';

/**
 * Convergence Checker
 *
 * Determines when the quiz should stop based on convergence criteria.
 * The goal is to stop early when we have sufficient confidence, while
 * avoiding premature conclusions.
 */

export interface ConvergenceStatus {
  hasConverged: boolean;
  reason: ConvergenceReason | null;
  confidence: number;
  questionCount: number;
  details: ConvergenceDetails;
}

export type ConvergenceReason =
  | 'high_confidence'      // Top type > 85% and 15+ questions
  | 'large_margin'         // Margin > 30% and 18+ questions
  | 'max_questions'        // Reached maximum question limit
  | 'stable_ranking'       // Rankings haven't changed in N questions
  | 'minimum_questions';   // Met minimum but not max

export interface ConvergenceDetails {
  topType: TypeNumber;
  topProbability: number;
  marginOverSecond: number;
  entropy: number;
  viableCandidates: number;
}

export interface ConvergenceConfig {
  // Minimum questions before allowing convergence
  minQuestions: number;
  // Maximum questions (hard stop)
  maxQuestions: number;
  // High confidence threshold (probability)
  highConfidenceThreshold: number;
  // Margin threshold (difference from second place)
  marginThreshold: number;
  // Questions required for high confidence convergence
  questionsForHighConfidence: number;
  // Questions required for margin-based convergence
  questionsForMargin: number;
  // Entropy threshold for convergence
  entropyThreshold: number;
}

/**
 * Default convergence configuration
 */
export const DEFAULT_CONVERGENCE_CONFIG: ConvergenceConfig = {
  minQuestions: 12,
  maxQuestions: 25,
  highConfidenceThreshold: 0.85,
  marginThreshold: 0.30,
  questionsForHighConfidence: 15,
  questionsForMargin: 18,
  entropyThreshold: 0.35,
};

/**
 * Check if the quiz has converged
 */
export function checkConvergence(
  probs: TypeProbabilities,
  config: ConvergenceConfig = DEFAULT_CONVERGENCE_CONFIG
): ConvergenceStatus {
  const { type, probability, marginOverSecond, confidence } = getLeadingType(probs);
  const entropy = calculateEntropy(probs);
  const viableCandidates = getViableCandidates(probs, 0.05).length;
  const questionCount = probs.questionCount;

  const details: ConvergenceDetails = {
    topType: type,
    topProbability: probability,
    marginOverSecond,
    entropy,
    viableCandidates,
  };

  // Hard stop: maximum questions reached
  if (questionCount >= config.maxQuestions) {
    return {
      hasConverged: true,
      reason: 'max_questions',
      confidence,
      questionCount,
      details,
    };
  }

  // Not enough questions yet
  if (questionCount < config.minQuestions) {
    return {
      hasConverged: false,
      reason: null,
      confidence,
      questionCount,
      details,
    };
  }

  // High confidence convergence
  if (
    probability >= config.highConfidenceThreshold &&
    questionCount >= config.questionsForHighConfidence &&
    entropy <= config.entropyThreshold
  ) {
    return {
      hasConverged: true,
      reason: 'high_confidence',
      confidence,
      questionCount,
      details,
    };
  }

  // Large margin convergence
  if (
    marginOverSecond >= config.marginThreshold &&
    questionCount >= config.questionsForMargin
  ) {
    return {
      hasConverged: true,
      reason: 'large_margin',
      confidence,
      questionCount,
      details,
    };
  }

  return {
    hasConverged: false,
    reason: null,
    confidence,
    questionCount,
    details,
  };
}

/**
 * Get progress towards convergence (0-1)
 */
export function getConvergenceProgress(
  probs: TypeProbabilities,
  config: ConvergenceConfig = DEFAULT_CONVERGENCE_CONFIG
): number {
  const status = checkConvergence(probs, config);

  if (status.hasConverged) return 1;

  const { topProbability, marginOverSecond, entropy } = status.details;
  const questionCount = probs.questionCount;

  // Progress components
  const questionProgress = Math.min(1, questionCount / config.minQuestions);
  const confidenceProgress = topProbability / config.highConfidenceThreshold;
  const marginProgress = marginOverSecond / config.marginThreshold;
  const entropyProgress = 1 - (entropy / 1); // Lower entropy = more progress

  // Weighted combination
  return Math.min(1,
    questionProgress * 0.3 +
    confidenceProgress * 0.3 +
    marginProgress * 0.2 +
    entropyProgress * 0.2
  );
}

/**
 * Check convergence for instinct determination
 */
export function checkInstinctConvergence(
  probs: InstinctProbabilities,
  minQuestions: number = 8
): boolean {
  if (probs.questionCount < minQuestions) return false;

  // Check if dominant instinct is clear
  const sorted = Object.entries(probs.probabilities)
    .sort((a, b) => b[1] - a[1]);

  const topProb = sorted[0][1];
  const secondProb = sorted[1][1];

  // Need clear winner
  return topProb > 0.45 && (topProb - secondProb) > 0.15;
}

/**
 * Estimate remaining questions needed
 */
export function estimateRemainingQuestions(
  probs: TypeProbabilities,
  config: ConvergenceConfig = DEFAULT_CONVERGENCE_CONFIG
): { minimum: number; expected: number; maximum: number } {
  const questionCount = probs.questionCount;
  const progress = getConvergenceProgress(probs, config);

  // Minimum is to reach minQuestions
  const toMinimum = Math.max(0, config.minQuestions - questionCount);

  // Maximum is the hard cap
  const toMaximum = config.maxQuestions - questionCount;

  // Expected is based on progress rate
  const remaining = toMinimum + (1 - progress) * (toMaximum - toMinimum);

  return {
    minimum: toMinimum,
    expected: Math.round(remaining),
    maximum: toMaximum,
  };
}

/**
 * Get human-readable status message
 */
export function getConvergenceMessage(status: ConvergenceStatus): string {
  if (!status.hasConverged) {
    const { topType: _topType, viableCandidates } = status.details;

    if (viableCandidates > 5) {
      return 'Exploring your personality patterns...';
    } else if (viableCandidates > 3) {
      return `Narrowing down to ${viableCandidates} potential types...`;
    } else {
      return `Differentiating between your top candidates...`;
    }
  }

  switch (status.reason) {
    case 'high_confidence':
      return 'High confidence result reached!';
    case 'large_margin':
      return 'Clear differentiation achieved!';
    case 'max_questions':
      return 'Assessment complete.';
    default:
      return 'Assessment complete.';
  }
}
