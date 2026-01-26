import type { TypeNumber } from '../../../types';

/**
 * Stage 4: Health Level Assessment (Minimal Likert)
 *
 * These questions measure intensity of:
 * - Fixation behaviors (unhealthy patterns)
 * - Growth behaviors (healthy patterns)
 *
 * Used AFTER type is determined to assess health level.
 * Kept minimal (4-6 questions) since we're fine-tuning, not determining type.
 */

export type HealthLevel = 'healthy' | 'average' | 'unhealthy';

export interface HealthQuestion {
  id: string;
  text: string;
  forType: TypeNumber;
  // Whether this indicates fixation (-) or growth (+)
  direction: 'fixation' | 'growth';
  // What aspect of the type this measures
  aspect: 'core_fear' | 'defense_mechanism' | 'integration' | 'passion' | 'virtue';
}

/**
 * Health Level Questions by Type
 * Each type has both fixation and growth questions
 */
export const healthQuestions: Record<TypeNumber, HealthQuestion[]> = {
  // ═══════════════════════════════════════════════════════════════
  // TYPE 1: Fixation = Resentment/Rigidity, Growth = Serenity/Acceptance
  // ═══════════════════════════════════════════════════════════════
  1: [
    {
      id: 'health-1-fix-1',
      text: "I often feel resentful that I'm working hard to do things right while others seem to get away with less effort.",
      forType: 1,
      direction: 'fixation',
      aspect: 'passion',
    },
    {
      id: 'health-1-fix-2',
      text: "My inner critic is harsh and relentless - I'm rarely satisfied with myself or my work.",
      forType: 1,
      direction: 'fixation',
      aspect: 'core_fear',
    },
    {
      id: 'health-1-grow-1',
      text: "I can accept that imperfection is part of life and find peace with 'good enough'.",
      forType: 1,
      direction: 'growth',
      aspect: 'virtue',
    },
    {
      id: 'health-1-grow-2',
      text: "I've learned to be gentle with myself and others when mistakes happen.",
      forType: 1,
      direction: 'growth',
      aspect: 'integration',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 2: Fixation = Pride/Manipulation, Growth = Humility/Self-care
  // ═══════════════════════════════════════════════════════════════
  2: [
    {
      id: 'health-2-fix-1',
      text: "I sometimes feel hurt or angry when my help isn't appreciated enough.",
      forType: 2,
      direction: 'fixation',
      aspect: 'passion',
    },
    {
      id: 'health-2-fix-2',
      text: "I have trouble acknowledging my own needs - it feels selfish to focus on myself.",
      forType: 2,
      direction: 'fixation',
      aspect: 'core_fear',
    },
    {
      id: 'health-2-grow-1',
      text: "I can receive help and care from others without feeling weak or obligated.",
      forType: 2,
      direction: 'growth',
      aspect: 'virtue',
    },
    {
      id: 'health-2-grow-2',
      text: "I've learned to care for myself as genuinely as I care for others.",
      forType: 2,
      direction: 'growth',
      aspect: 'integration',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 3: Fixation = Deceit/Image-focus, Growth = Authenticity/Truth
  // ═══════════════════════════════════════════════════════════════
  3: [
    {
      id: 'health-3-fix-1',
      text: "I often adjust who I appear to be based on what will be most impressive in each situation.",
      forType: 3,
      direction: 'fixation',
      aspect: 'defense_mechanism',
    },
    {
      id: 'health-3-fix-2',
      text: "I feel anxious when I'm not achieving or being productive - rest feels like failure.",
      forType: 3,
      direction: 'fixation',
      aspect: 'core_fear',
    },
    {
      id: 'health-3-grow-1',
      text: "I can be honest about my struggles and failures without feeling worthless.",
      forType: 3,
      direction: 'growth',
      aspect: 'virtue',
    },
    {
      id: 'health-3-grow-2',
      text: "I know my value doesn't depend on my achievements or others' admiration.",
      forType: 3,
      direction: 'growth',
      aspect: 'integration',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 4: Fixation = Envy/Melancholy, Growth = Equanimity/Presence
  // ═══════════════════════════════════════════════════════════════
  4: [
    {
      id: 'health-4-fix-1',
      text: "I often feel that others have something I'm missing - their lives seem easier or more complete.",
      forType: 4,
      direction: 'fixation',
      aspect: 'passion',
    },
    {
      id: 'health-4-fix-2',
      text: "I can get stuck in melancholy, almost preferring to feel sad because it feels more authentic.",
      forType: 4,
      direction: 'fixation',
      aspect: 'defense_mechanism',
    },
    {
      id: 'health-4-grow-1',
      text: "I can appreciate what I have without constantly longing for what's missing.",
      forType: 4,
      direction: 'growth',
      aspect: 'virtue',
    },
    {
      id: 'health-4-grow-2',
      text: "I've learned that I'm complete as I am - my value doesn't depend on being unique.",
      forType: 4,
      direction: 'growth',
      aspect: 'integration',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 5: Fixation = Avarice/Withdrawal, Growth = Non-attachment/Engagement
  // ═══════════════════════════════════════════════════════════════
  5: [
    {
      id: 'health-5-fix-1',
      text: "I hoard my time, energy, and resources - engagement with the world depletes me.",
      forType: 5,
      direction: 'fixation',
      aspect: 'passion',
    },
    {
      id: 'health-5-fix-2',
      text: "I retreat into my mind rather than dealing with emotional or physical demands.",
      forType: 5,
      direction: 'fixation',
      aspect: 'defense_mechanism',
    },
    {
      id: 'health-5-grow-1',
      text: "I can engage fully with life without fearing I'll be depleted.",
      forType: 5,
      direction: 'growth',
      aspect: 'virtue',
    },
    {
      id: 'health-5-grow-2',
      text: "I've learned that sharing knowledge and connection actually energizes rather than drains me.",
      forType: 5,
      direction: 'growth',
      aspect: 'integration',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 6: Fixation = Fear/Doubt, Growth = Courage/Trust
  // ═══════════════════════════════════════════════════════════════
  6: [
    {
      id: 'health-6-fix-1',
      text: "I'm constantly scanning for potential problems and dangers - my mind rarely rests.",
      forType: 6,
      direction: 'fixation',
      aspect: 'passion',
    },
    {
      id: 'health-6-fix-2',
      text: "I doubt my own judgment and often seek reassurance from others before deciding.",
      forType: 6,
      direction: 'fixation',
      aspect: 'core_fear',
    },
    {
      id: 'health-6-grow-1',
      text: "I can trust myself and move forward even when I'm not completely certain.",
      forType: 6,
      direction: 'growth',
      aspect: 'virtue',
    },
    {
      id: 'health-6-grow-2',
      text: "I've learned that my courage comes from within, not from external security.",
      forType: 6,
      direction: 'growth',
      aspect: 'integration',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 7: Fixation = Gluttony/Escapism, Growth = Sobriety/Presence
  // ═══════════════════════════════════════════════════════════════
  7: [
    {
      id: 'health-7-fix-1',
      text: "I often escape into planning future experiences or pleasures to avoid present discomfort.",
      forType: 7,
      direction: 'fixation',
      aspect: 'defense_mechanism',
    },
    {
      id: 'health-7-fix-2',
      text: "I have trouble staying with difficult emotions - I quickly reframe or move on to something positive.",
      forType: 7,
      direction: 'fixation',
      aspect: 'passion',
    },
    {
      id: 'health-7-grow-1',
      text: "I can sit with discomfort and pain without needing to escape or reframe it immediately.",
      forType: 7,
      direction: 'growth',
      aspect: 'virtue',
    },
    {
      id: 'health-7-grow-2',
      text: "I've learned that depth and commitment bring more satisfaction than endless options.",
      forType: 7,
      direction: 'growth',
      aspect: 'integration',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 8: Fixation = Lust/Excess, Growth = Innocence/Vulnerability
  // ═══════════════════════════════════════════════════════════════
  8: [
    {
      id: 'health-8-fix-1',
      text: "I push hard, take up space, and can be excessive in pursuing what I want.",
      forType: 8,
      direction: 'fixation',
      aspect: 'passion',
    },
    {
      id: 'health-8-fix-2',
      text: "I deny my own vulnerability - showing weakness feels dangerous and unacceptable.",
      forType: 8,
      direction: 'fixation',
      aspect: 'core_fear',
    },
    {
      id: 'health-8-grow-1',
      text: "I can let myself be vulnerable and open without feeling threatened.",
      forType: 8,
      direction: 'growth',
      aspect: 'virtue',
    },
    {
      id: 'health-8-grow-2',
      text: "I've learned that gentleness and restraint can be forms of true strength.",
      forType: 8,
      direction: 'growth',
      aspect: 'integration',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 9: Fixation = Sloth/Self-forgetting, Growth = Right Action/Presence
  // ═══════════════════════════════════════════════════════════════
  9: [
    {
      id: 'health-9-fix-1',
      text: "I tend to go along with others' agendas while neglecting my own priorities and desires.",
      forType: 9,
      direction: 'fixation',
      aspect: 'passion',
    },
    {
      id: 'health-9-fix-2',
      text: "I numb out through comfort activities rather than facing conflicts or making hard choices.",
      forType: 9,
      direction: 'fixation',
      aspect: 'defense_mechanism',
    },
    {
      id: 'health-9-grow-1',
      text: "I can assert my own needs and opinions even when it might cause conflict.",
      forType: 9,
      direction: 'growth',
      aspect: 'virtue',
    },
    {
      id: 'health-9-grow-2',
      text: "I've learned that my presence and voice matter - I don't have to disappear to maintain peace.",
      forType: 9,
      direction: 'growth',
      aspect: 'integration',
    },
  ],
};

/**
 * Calculate health level from question responses
 * Answers are 1-5 Likert scale
 */
export function calculateHealthLevel(
  type: TypeNumber,
  answers: Record<string, number>
): {
  level: HealthLevel;
  score: number; // -100 (very unhealthy) to +100 (very healthy)
  fixationScore: number;
  growthScore: number;
  interpretation: string;
} {
  const questions = healthQuestions[type];
  if (!questions) {
    return {
      level: 'average',
      score: 0,
      fixationScore: 0,
      growthScore: 0,
      interpretation: 'Unable to assess',
    };
  }

  let fixationTotal = 0;
  let fixationCount = 0;
  let growthTotal = 0;
  let growthCount = 0;

  for (const q of questions) {
    const answer = answers[q.id];
    if (answer === undefined) continue;

    if (q.direction === 'fixation') {
      fixationTotal += answer;
      fixationCount++;
    } else {
      growthTotal += answer;
      growthCount++;
    }
  }

  // Calculate averages (1-5 scale)
  const fixationAvg = fixationCount > 0 ? fixationTotal / fixationCount : 3;
  const growthAvg = growthCount > 0 ? growthTotal / growthCount : 3;

  // Convert to -100 to +100 score
  // High fixation = negative, high growth = positive
  const fixationScore = ((fixationAvg - 3) / 2) * -100; // 1 = +100, 5 = -100
  const growthScore = ((growthAvg - 3) / 2) * 100; // 1 = -100, 5 = +100
  const overallScore = (fixationScore + growthScore) / 2;

  // Determine level
  let level: HealthLevel;
  let interpretation: string;

  if (overallScore > 30) {
    level = 'healthy';
    interpretation = `You show strong integration patterns for Type ${type}. You've developed healthy ways to work with your type's tendencies and are moving toward growth.`;
  } else if (overallScore < -30) {
    level = 'unhealthy';
    interpretation = `You're currently experiencing significant stress patterns for Type ${type}. Your type's fixations are active. Self-compassion and support may help you move toward balance.`;
  } else {
    level = 'average';
    interpretation = `You show a typical mix of healthy and stressed patterns for Type ${type}. Like most people, you move between growth and fixation depending on circumstances.`;
  }

  return {
    level,
    score: Math.round(overallScore),
    fixationScore: Math.round(fixationScore),
    growthScore: Math.round(growthScore),
    interpretation,
  };
}

/**
 * Get health questions for a specific type
 */
export function getHealthQuestionsForType(type: TypeNumber): HealthQuestion[] {
  return healthQuestions[type] || [];
}
