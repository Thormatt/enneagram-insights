import type { TypeNumber, InstinctType } from '../../../types';

/**
 * Score Calculator
 *
 * Implements Bayesian-style score updating for adaptive quiz.
 * Maintains probability distributions over types rather than raw scores.
 */

export interface TypeProbabilities {
  probabilities: Record<TypeNumber, number>;
  rawScores: Record<TypeNumber, number>;
  questionCount: number;
}

export interface InstinctProbabilities {
  probabilities: Record<InstinctType, number>;
  rawScores: Record<InstinctType, number>;
  questionCount: number;
}

/**
 * Initialize uniform type probabilities (prior)
 */
export function initializeTypeProbabilities(): TypeProbabilities {
  return {
    probabilities: {
      1: 1/9, 2: 1/9, 3: 1/9, 4: 1/9, 5: 1/9,
      6: 1/9, 7: 1/9, 8: 1/9, 9: 1/9,
    },
    rawScores: {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
      6: 0, 7: 0, 8: 0, 9: 0,
    },
    questionCount: 0,
  };
}

/**
 * Initialize uniform instinct probabilities
 */
export function initializeInstinctProbabilities(): InstinctProbabilities {
  return {
    probabilities: {
      sp: 1/3, so: 1/3, sx: 1/3,
    },
    rawScores: {
      sp: 0, so: 0, sx: 0,
    },
    questionCount: 0,
  };
}

/**
 * Update type probabilities based on a question response
 *
 * Uses a Bayesian-inspired update:
 * - Each question provides evidence for/against certain types
 * - Higher answers (4-5) are stronger evidence for high-scoring types
 * - Lower answers (1-2) are evidence against
 * - Probabilities are normalized after each update
 *
 * @param current Current probability distribution
 * @param typeScores Question's scoring weights per type
 * @param answer User's answer (1-5 Likert scale)
 * @returns Updated probability distribution
 */
export function updateTypeProbabilities(
  current: TypeProbabilities,
  typeScores: Partial<Record<TypeNumber, number>>,
  answer: number
): TypeProbabilities {
  const newScores = { ...current.rawScores };
  const newProbabilities = { ...current.probabilities };

  // Center the answer: 3 = neutral, <3 = disagree, >3 = agree
  const answerWeight = answer - 3; // -2 to +2

  // Update raw scores based on answer
  for (const [type, score] of Object.entries(typeScores)) {
    const typeNum = Number(type) as TypeNumber;
    const scoreValue = score || 0;

    // Score contribution: scoreValue * answerWeight
    // This is the standard Bayesian-inspired update
    // For questions with direction (differentiators):
    // - Positive type: high answer = boost, low answer = reduce
    // - Negative type: high answer = reduce, low answer = boost
    // The math works out correctly: (-2) * (-1) = +2 for disagreeing with negative type
    newScores[typeNum] += scoreValue * answerWeight;
  }

  // Convert scores to probabilities using softmax
  // This ensures probabilities sum to 1 and handles negative scores
  const maxScore = Math.max(...Object.values(newScores));
  const expScores: Record<TypeNumber, number> = {} as Record<TypeNumber, number>;
  let sumExp = 0;

  for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    // Temperature parameter controls how "peaked" the distribution is
    // Lower temperature = more confident, higher = more uniform
    const temperature = 2.0;
    expScores[t] = Math.exp((newScores[t] - maxScore) / temperature);
    sumExp += expScores[t];
  }

  for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    newProbabilities[t] = expScores[t] / sumExp;
  }

  return {
    probabilities: newProbabilities,
    rawScores: newScores,
    questionCount: current.questionCount + 1,
  };
}

/**
 * Update instinct probabilities based on a question response
 */
export function updateInstinctProbabilities(
  current: InstinctProbabilities,
  instinctScores: Record<InstinctType, number>,
  answer: number
): InstinctProbabilities {
  const newScores = { ...current.rawScores };
  const newProbabilities = { ...current.probabilities };

  // Instinct questions are usually positive (high score = resonates with instinct)
  // So we use answer directly rather than centering
  const answerWeight = answer / 5; // 0.2 to 1.0

  for (const instinct of ['sp', 'so', 'sx'] as InstinctType[]) {
    newScores[instinct] += instinctScores[instinct] * answerWeight;
  }

  // Softmax for probabilities
  const maxScore = Math.max(...Object.values(newScores));
  const expScores: Record<InstinctType, number> = {} as Record<InstinctType, number>;
  let sumExp = 0;

  for (const i of ['sp', 'so', 'sx'] as InstinctType[]) {
    const temperature = 1.5;
    expScores[i] = Math.exp((newScores[i] - maxScore) / temperature);
    sumExp += expScores[i];
  }

  for (const i of ['sp', 'so', 'sx'] as InstinctType[]) {
    newProbabilities[i] = expScores[i] / sumExp;
  }

  return {
    probabilities: newProbabilities,
    rawScores: newScores,
    questionCount: current.questionCount + 1,
  };
}

/**
 * Get the top N types by probability
 */
export function getTopTypes(
  probs: TypeProbabilities,
  n: number = 3
): Array<{ type: TypeNumber; probability: number; score: number }> {
  return Object.entries(probs.probabilities)
    .map(([type, prob]) => ({
      type: Number(type) as TypeNumber,
      probability: prob,
      score: probs.rawScores[Number(type) as TypeNumber],
    }))
    .sort((a, b) => b.probability - a.probability)
    .slice(0, n);
}

/**
 * Get type resonance distribution for display purposes
 * Uses a higher temperature softmax to show meaningful secondary type percentages
 * instead of the peaked distribution used for convergence
 */
export function getTypeResonanceDistribution(
  probs: TypeProbabilities
): Array<{ type: TypeNumber; percentage: number; rank: number }> {
  const scores = probs.rawScores;

  // Shift scores to be positive (add offset so minimum is 0)
  const minScore = Math.min(...Object.values(scores));
  const shiftedScores: Record<TypeNumber, number> = {} as Record<TypeNumber, number>;

  for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    // Shift and add small base value so no type is ever truly 0
    shiftedScores[t] = scores[t] - minScore + 1;
  }

  // Use softmax with higher temperature (8.0) for more spread distribution
  const maxShifted = Math.max(...Object.values(shiftedScores));
  const temperature = 8.0; // Higher = more uniform distribution
  const expScores: Record<TypeNumber, number> = {} as Record<TypeNumber, number>;
  let sumExp = 0;

  for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    expScores[t] = Math.exp((shiftedScores[t] - maxShifted) / temperature);
    sumExp += expScores[t];
  }

  // Convert to percentages and sort
  const results = Object.entries(expScores)
    .map(([type, exp]) => ({
      type: Number(type) as TypeNumber,
      percentage: Math.round((exp / sumExp) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage);

  // Ensure percentages sum to 100 (adjust top type for rounding)
  const sum = results.reduce((acc, r) => acc + r.percentage, 0);
  if (sum !== 100) {
    results[0].percentage += (100 - sum);
  }

  // Add rank
  return results.map((r, idx) => ({ ...r, rank: idx + 1 }));
}

/**
 * Get the leading type and confidence metrics
 */
export function getLeadingType(probs: TypeProbabilities): {
  type: TypeNumber;
  probability: number;
  marginOverSecond: number;
  confidence: number;
} {
  const sorted = getTopTypes(probs, 2);
  const top = sorted[0];
  const second = sorted[1];

  // Margin is the difference between top and second
  const marginOverSecond = top.probability - second.probability;

  // Confidence is a combination of absolute probability and margin
  // High confidence = high probability AND significant margin
  const confidence = top.probability * (1 + marginOverSecond);

  return {
    type: top.type,
    probability: top.probability,
    marginOverSecond,
    confidence: Math.min(1, confidence), // Cap at 1
  };
}

/**
 * Get instinct stack from probabilities
 */
export function getInstinctStack(
  probs: InstinctProbabilities
): [InstinctType, InstinctType, InstinctType] {
  const sorted = Object.entries(probs.probabilities)
    .sort((a, b) => b[1] - a[1])
    .map(([instinct]) => instinct as InstinctType);

  return [sorted[0], sorted[1], sorted[2]];
}

/**
 * Calculate entropy of the probability distribution
 * Lower entropy = more certainty
 */
export function calculateEntropy(probs: TypeProbabilities): number {
  let entropy = 0;

  for (const p of Object.values(probs.probabilities)) {
    if (p > 0) {
      entropy -= p * Math.log2(p);
    }
  }

  // Normalize by max entropy (uniform distribution)
  const maxEntropy = Math.log2(9);
  return entropy / maxEntropy; // 0 = certain, 1 = totally uncertain
}

/**
 * Get types that are still viable candidates (probability > threshold)
 */
export function getViableCandidates(
  probs: TypeProbabilities,
  threshold: number = 0.05
): TypeNumber[] {
  return Object.entries(probs.probabilities)
    .filter(([_, prob]) => prob > threshold)
    .map(([type]) => Number(type) as TypeNumber)
    .sort((a, b) =>
      probs.probabilities[b] - probs.probabilities[a]
    );
}

/**
 * Check if two types are "confused" (close in probability)
 */
export function areTypesConfused(
  probs: TypeProbabilities,
  type1: TypeNumber,
  type2: TypeNumber,
  threshold: number = 0.10
): boolean {
  const prob1 = probs.probabilities[type1];
  const prob2 = probs.probabilities[type2];
  return Math.abs(prob1 - prob2) < threshold;
}
