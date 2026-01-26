/**
 * Forced-Choice Pair Questions
 *
 * These questions are used to disambiguate between commonly confused type pairs.
 * Each question presents two options, one characteristic of each type.
 * The user must choose which resonates more strongly.
 */

import type { TypeNumber } from '../../../types';

export interface ForcedChoicePair {
  id: string;
  pair: [TypeNumber, TypeNumber];
  optionA: {
    text: string;
    type: TypeNumber;
  };
  optionB: {
    text: string;
    type: TypeNumber;
  };
}

/**
 * All forced-choice questions organized by type pair
 */
export const forcedChoiceQuestions: ForcedChoicePair[] = [
  // Type 5 vs Type 6 - Both head types, both security-focused
  {
    id: 'fc-5v6-1',
    pair: [5, 6],
    optionA: {
      text: 'When uncertain, I withdraw to think things through independently before acting.',
      type: 5,
    },
    optionB: {
      text: 'When uncertain, I seek input from trusted people or authorities before acting.',
      type: 6,
    },
  },
  {
    id: 'fc-5v6-2',
    pair: [5, 6],
    optionA: {
      text: 'I feel most secure when I have comprehensive knowledge and understand systems deeply.',
      type: 5,
    },
    optionB: {
      text: 'I feel most secure when I have reliable support systems and know who I can count on.',
      type: 6,
    },
  },

  // Type 1 vs Type 6 - Both rule-following, conscientious
  {
    id: 'fc-1v6-1',
    pair: [1, 6],
    optionA: {
      text: 'I follow rules because I believe there is a right way to do things.',
      type: 1,
    },
    optionB: {
      text: 'I follow rules because they provide structure and security in an uncertain world.',
      type: 6,
    },
  },
  {
    id: 'fc-1v6-2',
    pair: [1, 6],
    optionA: {
      text: 'My inner critic is my harshest judge - I always know when I have fallen short.',
      type: 1,
    },
    optionB: {
      text: 'My inner doubter questions everything - I often second-guess my decisions.',
      type: 6,
    },
  },

  // Type 9 vs Type 6 - Both conflict avoidant, accommodating
  {
    id: 'fc-9v6-1',
    pair: [9, 6],
    optionA: {
      text: 'I avoid conflict to maintain inner peace and harmony with others.',
      type: 9,
    },
    optionB: {
      text: 'I avoid conflict because I worry about potential negative consequences.',
      type: 6,
    },
  },
  {
    id: 'fc-9v6-2',
    pair: [9, 6],
    optionA: {
      text: 'I sometimes lose track of what I personally want because I merge with others\' agendas.',
      type: 9,
    },
    optionB: {
      text: 'I sometimes overthink decisions because I see too many potential problems.',
      type: 6,
    },
  },

  // Type 4 vs Type 5 - Both withdrawn, introspective
  {
    id: 'fc-4v5-1',
    pair: [4, 5],
    optionA: {
      text: 'I withdraw to process my deep feelings and emotional experiences.',
      type: 4,
    },
    optionB: {
      text: 'I withdraw to think, analyze, and conserve my energy.',
      type: 5,
    },
  },
  {
    id: 'fc-4v5-2',
    pair: [4, 5],
    optionA: {
      text: 'I often feel that something essential is missing from my life.',
      type: 4,
    },
    optionB: {
      text: 'I often feel that I need more knowledge before I can engage fully.',
      type: 5,
    },
  },

  // Type 3 vs Type 7 - Both optimistic, high-energy achievers
  {
    id: 'fc-3v7-1',
    pair: [3, 7],
    optionA: {
      text: 'I am driven by the desire to succeed and be recognized for my accomplishments.',
      type: 3,
    },
    optionB: {
      text: 'I am driven by the desire for new experiences and exciting possibilities.',
      type: 7,
    },
  },
  {
    id: 'fc-3v7-2',
    pair: [3, 7],
    optionA: {
      text: 'I adapt my image and approach to be effective in different situations.',
      type: 3,
    },
    optionB: {
      text: 'I reframe negative situations to find the positive and keep my options open.',
      type: 7,
    },
  },

  // Type 3 vs Type 8 - Both assertive, powerful leaders
  {
    id: 'fc-3v8-1',
    pair: [3, 8],
    optionA: {
      text: 'I lead by inspiring others with my competence and track record of success.',
      type: 3,
    },
    optionB: {
      text: 'I lead by being direct about what needs to happen and taking decisive action.',
      type: 8,
    },
  },
  {
    id: 'fc-3v8-2',
    pair: [3, 8],
    optionA: {
      text: 'I am concerned about how I appear to others and my reputation.',
      type: 3,
    },
    optionB: {
      text: 'I am concerned about being in control and not being vulnerable.',
      type: 8,
    },
  },

  // Type 2 vs Type 9 - Both accommodating, relationship-focused
  {
    id: 'fc-2v9-1',
    pair: [2, 9],
    optionA: {
      text: 'I help others because I genuinely enjoy being needed and making a difference.',
      type: 2,
    },
    optionB: {
      text: 'I go along with others because it keeps things harmonious and avoids conflict.',
      type: 9,
    },
  },
  {
    id: 'fc-2v9-2',
    pair: [2, 9],
    optionA: {
      text: 'I sometimes feel resentful when my efforts for others aren\'t appreciated.',
      type: 2,
    },
    optionB: {
      text: 'I sometimes feel like my own needs and preferences get overlooked.',
      type: 9,
    },
  },
];

/**
 * Commonly confused type pairs and their threshold for triggering forced-choice
 */
export const CONFUSED_PAIRS: [TypeNumber, TypeNumber][] = [
  [5, 6],
  [1, 6],
  [9, 6],
  [4, 5],
  [3, 7],
  [3, 8],
  [2, 9],
];

/**
 * Get forced-choice questions for a specific type pair
 */
export function getForcedChoiceForPair(
  typeA: TypeNumber,
  typeB: TypeNumber
): ForcedChoicePair[] {
  return forcedChoiceQuestions.filter(
    q => (q.pair[0] === typeA && q.pair[1] === typeB) ||
         (q.pair[0] === typeB && q.pair[1] === typeA)
  );
}

/**
 * Check if two types are a commonly confused pair
 */
export function isConfusedPair(typeA: TypeNumber, typeB: TypeNumber): boolean {
  return CONFUSED_PAIRS.some(
    pair => (pair[0] === typeA && pair[1] === typeB) ||
            (pair[0] === typeB && pair[1] === typeA)
  );
}

/**
 * Determine if forced-choice stage should be triggered
 */
export function shouldTriggerForcedChoice(
  topTypes: Array<{ type: TypeNumber; probability: number }>,
  threshold: number = 0.15 // Trigger when top types are within 15%
): { trigger: boolean; pairs: [TypeNumber, TypeNumber][] } {
  if (topTypes.length < 2) {
    return { trigger: false, pairs: [] };
  }

  const pairs: [TypeNumber, TypeNumber][] = [];

  // Check top 3 types for confused pairs
  for (let i = 0; i < Math.min(3, topTypes.length); i++) {
    for (let j = i + 1; j < Math.min(3, topTypes.length); j++) {
      const gap = topTypes[i].probability - topTypes[j].probability;

      if (gap < threshold && isConfusedPair(topTypes[i].type, topTypes[j].type)) {
        pairs.push([topTypes[i].type, topTypes[j].type]);
      }
    }
  }

  return {
    trigger: pairs.length > 0,
    pairs,
  };
}

/**
 * Score adjustment for forced-choice answers
 */
export const FORCED_CHOICE_SCORE_DELTA = 4;

/**
 * Apply forced-choice answer to type scores
 */
export function applyForcedChoiceScore(
  rawScores: Record<TypeNumber, number>,
  chosenType: TypeNumber,
  unchosenType: TypeNumber
): Record<TypeNumber, number> {
  return {
    ...rawScores,
    [chosenType]: rawScores[chosenType] + FORCED_CHOICE_SCORE_DELTA,
    [unchosenType]: rawScores[unchosenType] - FORCED_CHOICE_SCORE_DELTA,
  };
}
