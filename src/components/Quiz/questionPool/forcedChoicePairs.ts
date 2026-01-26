import type { TypeNumber } from '../../../types';

/**
 * Stage 2: Forced-Choice Pairs
 *
 * These questions force users to choose between two equally desirable
 * statements that differentiate commonly confused type pairs.
 *
 * Key benefits:
 * - Eliminates acquiescence bias (can't agree with both)
 * - Forces prioritization of core motivations
 * - Specifically targets look-alike type pairs
 * - Reduces social desirability effects (both options are positive)
 */

export interface ForcedChoicePair {
  id: string;
  typeA: TypeNumber;
  typeB: TypeNumber;
  // The question/context (optional framing)
  prompt?: string;
  optionA: {
    text: string;
    // How strongly this indicates typeA (0-1)
    strength: number;
  };
  optionB: {
    text: string;
    strength: number;
  };
  // What psychological dimension this targets
  dimension: 'motivation' | 'fear' | 'behavior' | 'attention' | 'defense';
}

/**
 * Commonly Confused Type Pairs
 * Based on empirical data and Enneagram theory
 */
export const confusedPairs: Array<[TypeNumber, TypeNumber]> = [
  [1, 6], // Both compliant, rule-following
  [3, 7], // Both optimistic, fast-paced
  [4, 9], // Both withdrawn, can seem passive
  [5, 4], // Both withdrawn, introspective
  [5, 6], // Both head types, analytical
  [9, 2], // Both accommodating, people-pleasing
  [3, 8], // Both assertive, competitive
  [1, 3], // Both competent, improvement-focused
  [6, 9], // Both compliant, can seem passive
  [2, 4], // Both feeling-oriented, relationship-focused
];

/**
 * Forced-Choice Questions for Each Confused Pair
 */
export const forcedChoiceQuestions: ForcedChoicePair[] = [
  // ═══════════════════════════════════════════════════════════════
  // 1 vs 6: The Rule-Followers
  // 1 follows internal standards, 6 follows external authority/group
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fc-1v6-1',
    typeA: 1,
    typeB: 6,
    prompt: "When making an important decision:",
    optionA: {
      text: "I trust my own judgment of what's right, even if others disagree - I have clear internal standards",
      strength: 0.9,
    },
    optionB: {
      text: "I seek input from trusted sources and consider potential risks - going it alone feels reckless",
      strength: 0.9,
    },
    dimension: 'motivation',
  },
  {
    id: 'fc-1v6-2',
    typeA: 1,
    typeB: 6,
    prompt: "My relationship with rules and authority:",
    optionA: {
      text: "I follow rules because they align with what's correct - if a rule is wrong, I'll work to reform it",
      strength: 0.85,
    },
    optionB: {
      text: "I'm both drawn to and wary of authority - I need to test if they're trustworthy before committing",
      strength: 0.85,
    },
    dimension: 'behavior',
  },
  {
    id: 'fc-1v6-3',
    typeA: 1,
    typeB: 6,
    prompt: "When things feel uncertain:",
    optionA: {
      text: "I focus on doing what's right regardless - uncertainty doesn't change what's correct",
      strength: 0.8,
    },
    optionB: {
      text: "I scan for dangers and prepare contingencies - uncertainty means I need to be more vigilant",
      strength: 0.85,
    },
    dimension: 'fear',
  },

  // ═══════════════════════════════════════════════════════════════
  // 3 vs 7: The Optimists
  // 3 optimizes for success/image, 7 optimizes for experience/options
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fc-3v7-1',
    typeA: 3,
    typeB: 7,
    prompt: "What drives your energy and enthusiasm:",
    optionA: {
      text: "Achieving goals and being recognized for excellence - I thrive on accomplishment and success",
      strength: 0.9,
    },
    optionB: {
      text: "Exploring possibilities and having exciting experiences - I thrive on variety and stimulation",
      strength: 0.9,
    },
    dimension: 'motivation',
  },
  {
    id: 'fc-3v7-2',
    typeA: 3,
    typeB: 7,
    prompt: "When a project isn't going well:",
    optionA: {
      text: "I adapt my approach to still achieve a successful outcome - failure isn't an option",
      strength: 0.85,
    },
    optionB: {
      text: "I reframe it positively or pivot to something more promising - why stay stuck?",
      strength: 0.85,
    },
    dimension: 'defense',
  },
  {
    id: 'fc-3v7-3',
    typeA: 3,
    typeB: 7,
    prompt: "How others would describe you:",
    optionA: {
      text: "Driven, polished, and accomplished - someone who gets things done impressively",
      strength: 0.8,
    },
    optionB: {
      text: "Enthusiastic, versatile, and fun - someone who brings energy and possibilities",
      strength: 0.8,
    },
    dimension: 'behavior',
  },

  // ═══════════════════════════════════════════════════════════════
  // 4 vs 9: The Withdrawn
  // 4 withdraws into emotional depth, 9 withdraws into comfortable merging
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fc-4v9-1',
    typeA: 4,
    typeB: 9,
    prompt: "When you withdraw from the world:",
    optionA: {
      text: "I dive into my feelings and search for what's authentic - even painful emotions feel meaningful",
      strength: 0.9,
    },
    optionB: {
      text: "I find peace in simple comforts and routines - I just want harmony and to avoid being disturbed",
      strength: 0.9,
    },
    dimension: 'behavior',
  },
  {
    id: 'fc-4v9-2',
    typeA: 4,
    typeB: 9,
    prompt: "Your relationship with your own identity:",
    optionA: {
      text: "I'm constantly exploring who I am - my identity feels complex, sometimes painfully unique",
      strength: 0.85,
    },
    optionB: {
      text: "I'm not sure who I am separate from others - I often blend in or go along to keep peace",
      strength: 0.85,
    },
    dimension: 'attention',
  },
  {
    id: 'fc-4v9-3',
    typeA: 4,
    typeB: 9,
    prompt: "When there's conflict in a relationship:",
    optionA: {
      text: "I want to go deep into it - even painful authenticity is better than superficial peace",
      strength: 0.85,
    },
    optionB: {
      text: "I tend to minimize it or see both sides - direct conflict feels too disruptive",
      strength: 0.85,
    },
    dimension: 'defense',
  },

  // ═══════════════════════════════════════════════════════════════
  // 5 vs 4: The Withdrawn Introspectives
  // 5 withdraws into thinking, 4 withdraws into feeling
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fc-5v4-1',
    typeA: 5,
    typeB: 4,
    prompt: "When processing a difficult experience:",
    optionA: {
      text: "I detach and analyze it objectively - understanding helps me manage my limited energy",
      strength: 0.9,
    },
    optionB: {
      text: "I immerse in the feelings fully - emotional intensity makes me feel alive and authentic",
      strength: 0.9,
    },
    dimension: 'defense',
  },
  {
    id: 'fc-5v4-2',
    typeA: 5,
    typeB: 4,
    prompt: "What you most fear being seen as:",
    optionA: {
      text: "Incompetent or unprepared - I need to have sufficient knowledge before engaging",
      strength: 0.85,
    },
    optionB: {
      text: "Ordinary or insignificant - I need to express what makes me uniquely me",
      strength: 0.85,
    },
    dimension: 'fear',
  },
  {
    id: 'fc-5v4-3',
    typeA: 5,
    typeB: 4,
    prompt: "Your creative/intellectual pursuits:",
    optionA: {
      text: "Driven by curiosity and mastery - I want to understand how things work deeply",
      strength: 0.8,
    },
    optionB: {
      text: "Driven by self-expression and meaning - I want to create something that reflects my inner world",
      strength: 0.8,
    },
    dimension: 'motivation',
  },

  // ═══════════════════════════════════════════════════════════════
  // 5 vs 6: The Head Types
  // 5 trusts their own analysis, 6 doubts and seeks external validation
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fc-5v6-1',
    typeA: 5,
    typeB: 6,
    prompt: "How you relate to knowledge and expertise:",
    optionA: {
      text: "I trust my own analysis - once I've studied something thoroughly, I'm confident in my conclusions",
      strength: 0.9,
    },
    optionB: {
      text: "I question even my own conclusions - what if I'm missing something? I check with others",
      strength: 0.9,
    },
    dimension: 'attention',
  },
  {
    id: 'fc-5v6-2',
    typeA: 5,
    typeB: 6,
    prompt: "Your relationship with groups and authority:",
    optionA: {
      text: "I prefer independence - groups drain my energy and I don't need external validation",
      strength: 0.85,
    },
    optionB: {
      text: "I'm drawn to groups for security but also skeptical - I test before trusting fully",
      strength: 0.85,
    },
    dimension: 'behavior',
  },

  // ═══════════════════════════════════════════════════════════════
  // 9 vs 2: The Accommodators
  // 9 merges to avoid conflict, 2 gives to be needed
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fc-9v2-1',
    typeA: 9,
    typeB: 2,
    prompt: "Why you tend to put others' needs first:",
    optionA: {
      text: "It keeps the peace and avoids conflict - my own needs don't feel that important anyway",
      strength: 0.9,
    },
    optionB: {
      text: "It makes me feel valued and connected - I want to be needed and appreciated",
      strength: 0.9,
    },
    dimension: 'motivation',
  },
  {
    id: 'fc-9v2-2',
    typeA: 9,
    typeB: 2,
    prompt: "When someone you care about is upset with you:",
    optionA: {
      text: "I tend to go along with them or withdraw - conflict is too disruptive to my inner peace",
      strength: 0.85,
    },
    optionB: {
      text: "I feel hurt that my caring isn't recognized - don't they see how much I've given?",
      strength: 0.85,
    },
    dimension: 'fear',
  },

  // ═══════════════════════════════════════════════════════════════
  // 3 vs 8: The Assertives
  // 3 asserts to succeed, 8 asserts to control/protect
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fc-3v8-1',
    typeA: 3,
    typeB: 8,
    prompt: "What drives your competitive nature:",
    optionA: {
      text: "I want to be the best and be recognized for excellence - winning proves my worth",
      strength: 0.9,
    },
    optionB: {
      text: "I want power and control over my domain - I won't let anyone push me around",
      strength: 0.9,
    },
    dimension: 'motivation',
  },
  {
    id: 'fc-3v8-2',
    typeA: 3,
    typeB: 8,
    prompt: "How you present yourself to the world:",
    optionA: {
      text: "Polished, adaptable, successful - I adjust my image to what works in each situation",
      strength: 0.85,
    },
    optionB: {
      text: "Direct, powerful, take-it-or-leave-it - I don't hide who I am or soften my presence",
      strength: 0.85,
    },
    dimension: 'behavior',
  },

  // ═══════════════════════════════════════════════════════════════
  // 1 vs 3: The Competents
  // 1 driven by internal standards, 3 driven by external success
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fc-1v3-1',
    typeA: 1,
    typeB: 3,
    prompt: "What 'doing well' means to you:",
    optionA: {
      text: "Doing things correctly and ethically - even if no one notices, I know I did it right",
      strength: 0.9,
    },
    optionB: {
      text: "Achieving measurable success - results and recognition show that I've truly excelled",
      strength: 0.9,
    },
    dimension: 'motivation',
  },
  {
    id: 'fc-1v3-2',
    typeA: 1,
    typeB: 3,
    prompt: "Your inner critic focuses on:",
    optionA: {
      text: "Whether I'm being good enough - am I meeting my standards of integrity and correctness?",
      strength: 0.85,
    },
    optionB: {
      text: "Whether I'm succeeding enough - am I achieving at the level I should be?",
      strength: 0.85,
    },
    dimension: 'fear',
  },

  // ═══════════════════════════════════════════════════════════════
  // 6 vs 9: The Compliant-Passive
  // 6 complies due to anxiety, 9 complies to maintain peace
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fc-6v9-1',
    typeA: 6,
    typeB: 9,
    prompt: "Why you might hesitate to take a strong position:",
    optionA: {
      text: "I'm considering what could go wrong - every option has risks I need to think through",
      strength: 0.9,
    },
    optionB: {
      text: "I can see merit in different views - why create conflict when all perspectives have value?",
      strength: 0.9,
    },
    dimension: 'defense',
  },
  {
    id: 'fc-6v9-2',
    typeA: 6,
    typeB: 9,
    prompt: "Your experience of anxiety:",
    optionA: {
      text: "Anxiety is familiar - my mind is often scanning for problems and preparing for them",
      strength: 0.85,
    },
    optionB: {
      text: "I don't feel particularly anxious - I tend to stay comfortable and avoid what disturbs peace",
      strength: 0.85,
    },
    dimension: 'attention',
  },

  // ═══════════════════════════════════════════════════════════════
  // 2 vs 4: The Feeling-Focused
  // 2 focuses on others' feelings, 4 focuses on own feelings
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'fc-2v4-1',
    typeA: 2,
    typeB: 4,
    prompt: "In relationships, your attention naturally goes to:",
    optionA: {
      text: "What the other person needs and how I can help - I sense their feelings intuitively",
      strength: 0.9,
    },
    optionB: {
      text: "The emotional depth and authenticity of the connection - is this relationship truly special?",
      strength: 0.9,
    },
    dimension: 'attention',
  },
  {
    id: 'fc-2v4-2',
    typeA: 2,
    typeB: 4,
    prompt: "What you secretly fear about yourself:",
    optionA: {
      text: "That I'm not truly lovable unless I'm giving - that my needs are too much",
      strength: 0.85,
    },
    optionB: {
      text: "That I'm fundamentally flawed or missing something others have - that I'm deficient",
      strength: 0.85,
    },
    dimension: 'fear',
  },
];

/**
 * Get forced-choice questions for a specific type pair
 */
export function getForcedChoiceForPair(
  typeA: TypeNumber,
  typeB: TypeNumber
): ForcedChoicePair[] {
  return forcedChoiceQuestions.filter(
    q => (q.typeA === typeA && q.typeB === typeB) ||
         (q.typeA === typeB && q.typeB === typeA)
  );
}

/**
 * Get forced-choice questions targeting a specific type
 */
export function getForcedChoiceForType(type: TypeNumber): ForcedChoicePair[] {
  return forcedChoiceQuestions.filter(
    q => q.typeA === type || q.typeB === type
  );
}

/**
 * Score a forced-choice answer
 * Returns score adjustments for both types in the pair
 */
export function scoreForcedChoice(
  question: ForcedChoicePair,
  chosenOption: 'A' | 'B'
): { typeA: number; typeB: number } {
  if (chosenOption === 'A') {
    return {
      typeA: question.optionA.strength,
      typeB: -question.optionB.strength * 0.5, // Slight negative for unchosen
    };
  } else {
    return {
      typeA: -question.optionA.strength * 0.5,
      typeB: question.optionB.strength,
    };
  }
}

/**
 * Get all unique confused pairs from the questions
 */
export function getConfusedTypePairs(): Array<[TypeNumber, TypeNumber]> {
  return confusedPairs;
}
