/**
 * Integration Level Questions
 *
 * These questions assess whether the user is functioning at a healthy,
 * average, or unhealthy level of integration for their type.
 */

export interface IntegrationLevelQuestion {
  id: string;
  text: string;
  direction: 'healthy' | 'unhealthy';
  weight: number; // 1-3, how strongly this indicates the direction
}

export const integrationLevelQuestions: IntegrationLevelQuestion[] = [
  // Healthy indicators
  {
    id: 'int-h1',
    text: 'I generally feel at peace with myself and accepting of my limitations.',
    direction: 'healthy',
    weight: 3,
  },
  {
    id: 'int-h2',
    text: 'I can acknowledge my mistakes without becoming overly self-critical.',
    direction: 'healthy',
    weight: 2,
  },
  {
    id: 'int-h3',
    text: 'I am able to be present and engaged even in difficult situations.',
    direction: 'healthy',
    weight: 2,
  },
  {
    id: 'int-h4',
    text: 'I can express my needs clearly while remaining open to others\' perspectives.',
    direction: 'healthy',
    weight: 2,
  },
  {
    id: 'int-h5',
    text: 'I find it easy to access joy and gratitude in daily life.',
    direction: 'healthy',
    weight: 3,
  },

  // Unhealthy indicators
  {
    id: 'int-u1',
    text: 'I often feel stuck in repetitive negative thought patterns.',
    direction: 'unhealthy',
    weight: 2,
  },
  {
    id: 'int-u2',
    text: 'I frequently react automatically rather than responding thoughtfully.',
    direction: 'unhealthy',
    weight: 2,
  },
  {
    id: 'int-u3',
    text: 'I tend to blame others or circumstances for my difficulties.',
    direction: 'unhealthy',
    weight: 2,
  },
  {
    id: 'int-u4',
    text: 'I often feel disconnected from my body and physical sensations.',
    direction: 'unhealthy',
    weight: 1,
  },
  {
    id: 'int-u5',
    text: 'My relationships frequently feel draining or conflictual.',
    direction: 'unhealthy',
    weight: 3,
  },
];

export type IntegrationLevel = 'healthy' | 'average' | 'unhealthy';
export type HealthLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * Calculate integration level from question answers
 */
export function calculateIntegrationLevel(
  answers: Record<string, number>
): {
  level: IntegrationLevel;
  healthLevel: HealthLevel;
  healthyScore: number;
  unhealthyScore: number;
  normalized: number; // -1 to 1
} {
  let healthyScore = 0;
  let unhealthyScore = 0;
  let maxHealthy = 0;
  let maxUnhealthy = 0;

  for (const question of integrationLevelQuestions) {
    const answer = answers[question.id];
    if (answer === undefined) continue;

    // Convert 1-5 scale to weighted score
    // Agree (4-5) = positive contribution, Disagree (1-2) = negative
    const adjustedAnswer = answer - 3; // -2 to +2

    if (question.direction === 'healthy') {
      healthyScore += adjustedAnswer * question.weight;
      maxHealthy += 2 * question.weight; // Max possible score
    } else {
      unhealthyScore += adjustedAnswer * question.weight;
      maxUnhealthy += 2 * question.weight;
    }
  }

  // Calculate net score
  const maxPossible = maxHealthy + maxUnhealthy;
  const netScore = healthyScore - unhealthyScore;
  const normalized = maxPossible > 0 ? netScore / maxPossible : 0;

  // Determine level
  let level: IntegrationLevel;
  let healthLevel: HealthLevel;

  if (normalized > 0.3) {
    level = 'healthy';
    // Map to levels 1-3
    healthLevel = normalized > 0.6 ? 1 : normalized > 0.45 ? 2 : 3;
  } else if (normalized > -0.3) {
    level = 'average';
    // Map to levels 4-6
    healthLevel = normalized > 0.1 ? 4 : normalized > -0.1 ? 5 : 6;
  } else {
    level = 'unhealthy';
    // Map to levels 7-9
    healthLevel = normalized > -0.5 ? 7 : normalized > -0.7 ? 8 : 9;
  }

  return {
    level,
    healthLevel,
    healthyScore,
    unhealthyScore,
    normalized,
  };
}

/**
 * Get questions to intersperse during instinct stage
 * Returns a subset of questions based on current instinct question index
 */
export function getIntegrationQuestionsForInstinctStage(
  instinctQuestionIndex: number,
  answeredIntegrationIds: Set<string>
): IntegrationLevelQuestion | null {
  // Insert integration questions at specific intervals
  // After instinct questions 3, 6, 9, 12
  const insertionPoints = [2, 5, 8, 11];

  if (!insertionPoints.includes(instinctQuestionIndex)) {
    return null;
  }

  // Alternate between healthy and unhealthy questions for balance
  const healthyQuestions = integrationLevelQuestions.filter(
    q => q.direction === 'healthy' && !answeredIntegrationIds.has(q.id)
  );
  const unhealthyQuestions = integrationLevelQuestions.filter(
    q => q.direction === 'unhealthy' && !answeredIntegrationIds.has(q.id)
  );

  // Alternate: even index = healthy, odd = unhealthy
  const insertionIndex = insertionPoints.indexOf(instinctQuestionIndex);
  const pool = insertionIndex % 2 === 0 ? healthyQuestions : unhealthyQuestions;

  return pool[0] || null;
}
