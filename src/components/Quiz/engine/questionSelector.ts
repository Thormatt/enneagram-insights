import type { TypeNumber } from '../../../types';
import type { TypeProbabilities } from './scoreCalculator';
import { calculateEntropy, getViableCandidates, areTypesConfused } from './scoreCalculator';
import {
  screeningQuestions,
  type ScreeningQuestion,
} from '../questionPool/screeningQuestions';
import {
  getDifferentiatorsForPair,
  type DifferentiatorQuestion,
} from '../questionPool/differentiatorQuestions';
import { coreTypeQuestions, type TypeQuestion } from '../quizData';

/**
 * Question Selector
 *
 * Selects the next question based on information gain.
 * The goal is to maximize reduction in entropy (uncertainty) about the user's type.
 */

export type QuizPhase = 'screening' | 'refinement' | 'differentiation';

export interface QuestionCandidate {
  question: ScreeningQuestion | TypeQuestion | DifferentiatorQuestion;
  expectedInformationGain: number;
  relevance: number; // How relevant to current candidates
  phase: QuizPhase;
}

/**
 * Determine the current quiz phase based on probability distribution
 */
export function determinePhase(probs: TypeProbabilities): QuizPhase {
  const candidates = getViableCandidates(probs, 0.05);
  const entropy = calculateEntropy(probs);

  // Screening: Many candidates, high entropy
  if (candidates.length >= 6 || entropy > 0.7) {
    return 'screening';
  }

  // Differentiation: 2-3 close candidates
  if (candidates.length <= 3 && entropy < 0.5) {
    return 'differentiation';
  }

  // Refinement: Middle ground
  return 'refinement';
}

/**
 * Calculate expected information gain for a question
 *
 * Information gain = current entropy - expected entropy after answer
 * We estimate expected entropy by simulating possible answers
 */
function calculateInformationGain(
  question: ScreeningQuestion | TypeQuestion | DifferentiatorQuestion,
  probs: TypeProbabilities
): number {
  const currentEntropy = calculateEntropy(probs);
  const typeScores = getTypeScoresFromQuestion(question);

  // Simulate expected entropy across possible answer distributions
  // Weight by how likely each answer is given current candidate probabilities
  let expectedEntropy = 0;
  const answerDistribution = estimateAnswerDistribution(typeScores, probs);

  for (const [answer, probability] of Object.entries(answerDistribution)) {
    if (probability > 0.01) {
      const hypotheticalProbs = simulateUpdate(probs, typeScores, Number(answer));
      const newEntropy = calculateEntropy(hypotheticalProbs);
      expectedEntropy += probability * newEntropy;
    }
  }

  return currentEntropy - expectedEntropy;
}

/**
 * Extract type scores from any question type
 */
function getTypeScoresFromQuestion(
  question: ScreeningQuestion | TypeQuestion | DifferentiatorQuestion
): Partial<Record<TypeNumber, number>> {
  if ('typeScores' in question) {
    return question.typeScores;
  }

  if ('direction' in question) {
    // Differentiator question - create synthetic scores
    const diff = question as DifferentiatorQuestion;
    return {
      [diff.direction.positive]: 2,
      [diff.direction.negative]: -2,
    };
  }

  return {};
}

/**
 * Estimate distribution of answers based on current type probabilities
 */
function estimateAnswerDistribution(
  typeScores: Partial<Record<TypeNumber, number>>,
  probs: TypeProbabilities
): Record<number, number> {
  // For each type, estimate what answer they'd give
  // Then weight by probability of being that type
  const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    const typeProb = probs.probabilities[t];
    if (typeProb < 0.01) continue;

    const typeScore = typeScores[t] || 0;

    // Estimate answer based on type score
    // High positive score -> agree (4-5)
    // Zero/low score -> neutral (2-3)
    // Negative score -> disagree (1-2)
    let expectedAnswer: number;
    if (typeScore >= 2) {
      expectedAnswer = 4.5;
    } else if (typeScore >= 1) {
      expectedAnswer = 4;
    } else if (typeScore === 0) {
      expectedAnswer = 3;
    } else {
      expectedAnswer = 2;
    }

    // Distribute probability around expected answer
    const roundedAnswer = Math.round(expectedAnswer);
    distribution[roundedAnswer] += typeProb * 0.6;
    if (roundedAnswer > 1) distribution[roundedAnswer - 1] += typeProb * 0.2;
    if (roundedAnswer < 5) distribution[roundedAnswer + 1] += typeProb * 0.2;
  }

  // Normalize
  const sum = Object.values(distribution).reduce((a, b) => a + b, 0);
  for (const key of Object.keys(distribution)) {
    distribution[Number(key)] /= sum;
  }

  return distribution;
}

/**
 * Simulate a probability update without mutating state
 */
function simulateUpdate(
  probs: TypeProbabilities,
  typeScores: Partial<Record<TypeNumber, number>>,
  answer: number
): TypeProbabilities {
  const newScores = { ...probs.rawScores };
  const answerWeight = answer - 3;

  for (const [type, score] of Object.entries(typeScores)) {
    const typeNum = Number(type) as TypeNumber;
    newScores[typeNum] += (score || 0) * answerWeight;
  }

  // Convert to probabilities (simplified softmax)
  const maxScore = Math.max(...Object.values(newScores));
  const newProbs: Record<TypeNumber, number> = {} as Record<TypeNumber, number>;
  let sumExp = 0;

  for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    const exp = Math.exp((newScores[t] - maxScore) / 2.0);
    newProbs[t] = exp;
    sumExp += exp;
  }

  for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    newProbs[t] /= sumExp;
  }

  return {
    probabilities: newProbs,
    rawScores: newScores,
    questionCount: probs.questionCount + 1,
  };
}

/**
 * Calculate relevance of a question to current candidates
 */
function calculateRelevance(
  question: ScreeningQuestion | TypeQuestion | DifferentiatorQuestion,
  candidates: TypeNumber[]
): number {
  const typeScores = getTypeScoresFromQuestion(question);
  const scoredTypes = Object.keys(typeScores).map(Number) as TypeNumber[];

  // Count how many scored types are in our candidate set
  const relevantTypes = scoredTypes.filter(t => candidates.includes(t));

  if (scoredTypes.length === 0) return 0;
  return relevantTypes.length / scoredTypes.length;
}

/**
 * Select the next best question based on current state
 */
export function selectNextQuestion(
  probs: TypeProbabilities,
  answeredQuestions: Set<string>,
  phase?: QuizPhase
): QuestionCandidate | null {
  const currentPhase = phase || determinePhase(probs);
  const candidates = getViableCandidates(probs, 0.05);

  // Get available questions based on phase
  let questionPool: Array<ScreeningQuestion | TypeQuestion | DifferentiatorQuestion>;

  switch (currentPhase) {
    case 'screening':
      // Use screening questions first, then core questions
      questionPool = [
        ...screeningQuestions,
        ...coreTypeQuestions,
      ];
      break;

    case 'differentiation':
      // Use differentiator questions for confused pairs
      questionPool = [];
      for (let i = 0; i < candidates.length; i++) {
        for (let j = i + 1; j < candidates.length; j++) {
          if (areTypesConfused(probs, candidates[i], candidates[j], 0.15)) {
            questionPool.push(...getDifferentiatorsForPair(candidates[i], candidates[j]));
          }
        }
      }
      // Fall back to core questions if no differentiators
      if (questionPool.length === 0) {
        questionPool = coreTypeQuestions;
      }
      break;

    case 'refinement':
    default:
      // Use core questions with highest relevance
      questionPool = coreTypeQuestions;
      break;
  }

  // Filter out already-answered questions
  const availableQuestions = questionPool.filter(q => !answeredQuestions.has(q.id));

  if (availableQuestions.length === 0) {
    return null;
  }

  // Score all questions
  const scoredQuestions: QuestionCandidate[] = availableQuestions.map(q => {
    const infoGain = calculateInformationGain(q, probs);
    const relevance = calculateRelevance(q, candidates);

    return {
      question: q,
      expectedInformationGain: infoGain,
      relevance,
      phase: currentPhase,
    };
  });

  // Sort by combined score and return the best
  scoredQuestions.sort((a, b) =>
    (b.expectedInformationGain * (0.5 + b.relevance * 0.5)) -
    (a.expectedInformationGain * (0.5 + a.relevance * 0.5))
  );

  return scoredQuestions[0];
}

/**
 * Get a batch of next questions (useful for prefetching)
 */
export function selectNextQuestions(
  probs: TypeProbabilities,
  answeredQuestions: Set<string>,
  count: number = 3
): QuestionCandidate[] {
  const results: QuestionCandidate[] = [];
  const tempAnswered = new Set(answeredQuestions);

  for (let i = 0; i < count; i++) {
    const next = selectNextQuestion(probs, tempAnswered);
    if (next) {
      results.push(next);
      tempAnswered.add(next.question.id);
    } else {
      break;
    }
  }

  return results;
}
