import type { TypeNumber } from '../../../types';

/**
 * Expanded Wing Questions
 *
 * Enhanced wing determination with 6-9 questions per type instead of 3.
 * Questions target the specific psychological flavors each wing adds.
 *
 * Wing questions work differently than core type questions:
 * - They assume the core type is already determined
 * - They measure the relative pull toward each adjacent type
 * - High scores indicate leaning toward that wing
 */

export interface WingQuestion {
  id: string;
  text: string;
  forType: TypeNumber;
  wingA: { wing: TypeNumber; score: number }; // Lower number wing
  wingB: { wing: TypeNumber; score: number }; // Higher number wing
  // Optional: which psychological dimension this targets
  dimension?: 'energy' | 'social_style' | 'emotional_tone' | 'motivation' | 'behavior';
}

/**
 * Wing pairs for each type
 */
const wingPairs: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
  1: [9, 2], 2: [1, 3], 3: [2, 4], 4: [3, 5],
  5: [4, 6], 6: [5, 7], 7: [6, 8], 8: [7, 9], 9: [8, 1],
};

export const expandedWingQuestions: Record<TypeNumber, WingQuestion[]> = {
  // ═══════════════════════════════════════════════════════════════
  // TYPE 1: 1w9 (The Idealist) vs 1w2 (The Advocate)
  // 1w9: More reserved, philosophical, detached from anger
  // 1w2: More interpersonal, helpful, expressive with criticism
  // ═══════════════════════════════════════════════════════════════
  1: [
    {
      id: '1-wing-1',
      text: 'I prefer to work quietly behind the scenes rather than directly confronting people.',
      forType: 1,
      wingA: { wing: 9, score: 3 },
      wingB: { wing: 2, score: 0 },
      dimension: 'social_style',
    },
    {
      id: '1-wing-2',
      text: 'I feel compelled to actively help others improve, not just set a good example.',
      forType: 1,
      wingA: { wing: 9, score: 0 },
      wingB: { wing: 2, score: 3 },
      dimension: 'motivation',
    },
    {
      id: '1-wing-3',
      text: 'My anger tends to simmer beneath the surface rather than being expressed through correction.',
      forType: 1,
      wingA: { wing: 9, score: 3 },
      wingB: { wing: 2, score: 0 },
      dimension: 'emotional_tone',
    },
    {
      id: '1-wing-4',
      text: 'I am more idealistic and dreamy than practical and action-oriented.',
      forType: 1,
      wingA: { wing: 9, score: 3 },
      wingB: { wing: 2, score: 0 },
      dimension: 'energy',
    },
    {
      id: '1-wing-5',
      text: 'I am warm and engaging when helping others meet standards.',
      forType: 1,
      wingA: { wing: 9, score: 0 },
      wingB: { wing: 2, score: 3 },
      dimension: 'social_style',
    },
    {
      id: '1-wing-6',
      text: 'I often take on a teaching or mentoring role with others.',
      forType: 1,
      wingA: { wing: 9, score: 1 },
      wingB: { wing: 2, score: 2 },
      dimension: 'behavior',
    },
    {
      id: '1-wing-7',
      text: 'I can be quite critical of others when they don\'t do things right.',
      forType: 1,
      wingA: { wing: 9, score: 0 },
      wingB: { wing: 2, score: 3 },
      dimension: 'behavior',
    },
    {
      id: '1-wing-8',
      text: 'I have a philosophical, contemplative side that values inner peace.',
      forType: 1,
      wingA: { wing: 9, score: 3 },
      wingB: { wing: 2, score: 0 },
      dimension: 'motivation',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 2: 2w1 (The Servant) vs 2w3 (The Host)
  // 2w1: More principled, critical, duty-focused
  // 2w3: More charming, ambitious, image-conscious
  // ═══════════════════════════════════════════════════════════════
  2: [
    {
      id: '2-wing-1',
      text: 'I have strong principles about the right way to help others.',
      forType: 2,
      wingA: { wing: 1, score: 3 },
      wingB: { wing: 3, score: 0 },
      dimension: 'motivation',
    },
    {
      id: '2-wing-2',
      text: 'I enjoy being seen as successful and attractive when I help.',
      forType: 2,
      wingA: { wing: 1, score: 0 },
      wingB: { wing: 3, score: 3 },
      dimension: 'motivation',
    },
    {
      id: '2-wing-3',
      text: 'I can be critical of myself and others when help isn\'t given properly.',
      forType: 2,
      wingA: { wing: 1, score: 3 },
      wingB: { wing: 3, score: 0 },
      dimension: 'emotional_tone',
    },
    {
      id: '2-wing-4',
      text: 'I am warm and charming, easily making connections with people.',
      forType: 2,
      wingA: { wing: 1, score: 0 },
      wingB: { wing: 3, score: 3 },
      dimension: 'social_style',
    },
    {
      id: '2-wing-5',
      text: 'I am quietly devoted rather than flashy about my helpfulness.',
      forType: 2,
      wingA: { wing: 1, score: 3 },
      wingB: { wing: 3, score: 0 },
      dimension: 'behavior',
    },
    {
      id: '2-wing-6',
      text: 'I am ambitious about my relationships and social standing.',
      forType: 2,
      wingA: { wing: 1, score: 0 },
      wingB: { wing: 3, score: 3 },
      dimension: 'energy',
    },
    {
      id: '2-wing-7',
      text: 'I am more reserved and self-controlled than effusive and outgoing.',
      forType: 2,
      wingA: { wing: 1, score: 3 },
      wingB: { wing: 3, score: 0 },
      dimension: 'energy',
    },
    {
      id: '2-wing-8',
      text: 'I adapt my helping style to what will be most effective and well-received.',
      forType: 2,
      wingA: { wing: 1, score: 0 },
      wingB: { wing: 3, score: 3 },
      dimension: 'behavior',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 3: 3w2 (The Charmer) vs 3w4 (The Professional)
  // 3w2: More interpersonal, charming, people-focused
  // 3w4: More introspective, artistic, emotionally aware
  // ═══════════════════════════════════════════════════════════════
  3: [
    {
      id: '3-wing-1',
      text: 'I use charm and warmth to connect with others and build my network.',
      forType: 3,
      wingA: { wing: 2, score: 3 },
      wingB: { wing: 4, score: 0 },
      dimension: 'social_style',
    },
    {
      id: '3-wing-2',
      text: 'I have a creative, artistic side that I value.',
      forType: 3,
      wingA: { wing: 2, score: 0 },
      wingB: { wing: 4, score: 3 },
      dimension: 'motivation',
    },
    {
      id: '3-wing-3',
      text: 'Success means being admired and popular with others.',
      forType: 3,
      wingA: { wing: 2, score: 3 },
      wingB: { wing: 4, score: 0 },
      dimension: 'motivation',
    },
    {
      id: '3-wing-4',
      text: 'I am more introspective and emotionally complex than outwardly focused.',
      forType: 3,
      wingA: { wing: 2, score: 0 },
      wingB: { wing: 4, score: 3 },
      dimension: 'emotional_tone',
    },
    {
      id: '3-wing-5',
      text: 'I can feel melancholic or like something is missing despite my success.',
      forType: 3,
      wingA: { wing: 2, score: 0 },
      wingB: { wing: 4, score: 3 },
      dimension: 'emotional_tone',
    },
    {
      id: '3-wing-6',
      text: 'I am generous with my time and attention to help others succeed.',
      forType: 3,
      wingA: { wing: 2, score: 3 },
      wingB: { wing: 4, score: 0 },
      dimension: 'behavior',
    },
    {
      id: '3-wing-7',
      text: 'I want my work to be meaningful and express who I really am.',
      forType: 3,
      wingA: { wing: 2, score: 0 },
      wingB: { wing: 4, score: 3 },
      dimension: 'motivation',
    },
    {
      id: '3-wing-8',
      text: 'I am more focused on building relationships than on personal achievement.',
      forType: 3,
      wingA: { wing: 2, score: 3 },
      wingB: { wing: 4, score: 0 },
      dimension: 'behavior',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 4: 4w3 (The Aristocrat) vs 4w5 (The Bohemian)
  // 4w3: More ambitious, competitive, image-conscious
  // 4w5: More withdrawn, intellectual, unconventional
  // ═══════════════════════════════════════════════════════════════
  4: [
    {
      id: '4-wing-1',
      text: 'I often achieve success through my creative work.',
      forType: 4,
      wingA: { wing: 3, score: 3 },
      wingB: { wing: 5, score: 0 },
      dimension: 'behavior',
    },
    {
      id: '4-wing-2',
      text: 'I prefer intellectual depth and solitude to social recognition.',
      forType: 4,
      wingA: { wing: 3, score: 0 },
      wingB: { wing: 5, score: 3 },
      dimension: 'motivation',
    },
    {
      id: '4-wing-3',
      text: 'I want my unique vision to be recognized and appreciated by others.',
      forType: 4,
      wingA: { wing: 3, score: 3 },
      wingB: { wing: 5, score: 0 },
      dimension: 'motivation',
    },
    {
      id: '4-wing-4',
      text: 'I am more eccentric and unconventional than polished and sophisticated.',
      forType: 4,
      wingA: { wing: 3, score: 0 },
      wingB: { wing: 5, score: 3 },
      dimension: 'social_style',
    },
    {
      id: '4-wing-5',
      text: 'I care about my image and how others perceive my uniqueness.',
      forType: 4,
      wingA: { wing: 3, score: 3 },
      wingB: { wing: 5, score: 0 },
      dimension: 'motivation',
    },
    {
      id: '4-wing-6',
      text: 'I am drawn to intellectual and abstract pursuits.',
      forType: 4,
      wingA: { wing: 3, score: 0 },
      wingB: { wing: 5, score: 3 },
      dimension: 'behavior',
    },
    {
      id: '4-wing-7',
      text: 'I can be competitive and envious of others\' success.',
      forType: 4,
      wingA: { wing: 3, score: 3 },
      wingB: { wing: 5, score: 0 },
      dimension: 'emotional_tone',
    },
    {
      id: '4-wing-8',
      text: 'I withdraw into my own world rather than pursuing recognition.',
      forType: 4,
      wingA: { wing: 3, score: 0 },
      wingB: { wing: 5, score: 3 },
      dimension: 'behavior',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 5: 5w4 (The Iconoclast) vs 5w6 (The Problem-Solver)
  // 5w4: More emotional, artistic, unconventional
  // 5w6: More loyal, practical, systematic
  // ═══════════════════════════════════════════════════════════════
  5: [
    {
      id: '5-wing-1',
      text: 'I have a rich inner emotional life that I keep private.',
      forType: 5,
      wingA: { wing: 4, score: 3 },
      wingB: { wing: 6, score: 0 },
      dimension: 'emotional_tone',
    },
    {
      id: '5-wing-2',
      text: 'I like to solve practical problems and be useful to my group.',
      forType: 5,
      wingA: { wing: 4, score: 0 },
      wingB: { wing: 6, score: 3 },
      dimension: 'motivation',
    },
    {
      id: '5-wing-3',
      text: 'I am drawn to unconventional ideas and artistic expression.',
      forType: 5,
      wingA: { wing: 4, score: 3 },
      wingB: { wing: 6, score: 0 },
      dimension: 'behavior',
    },
    {
      id: '5-wing-4',
      text: 'I value loyalty and reliable systems over creativity and uniqueness.',
      forType: 5,
      wingA: { wing: 4, score: 0 },
      wingB: { wing: 6, score: 3 },
      dimension: 'motivation',
    },
    {
      id: '5-wing-5',
      text: 'I sometimes feel like a misunderstood outsider.',
      forType: 5,
      wingA: { wing: 4, score: 3 },
      wingB: { wing: 6, score: 0 },
      dimension: 'emotional_tone',
    },
    {
      id: '5-wing-6',
      text: 'I prefer systematic, methodical approaches to intuitive leaps.',
      forType: 5,
      wingA: { wing: 4, score: 0 },
      wingB: { wing: 6, score: 3 },
      dimension: 'behavior',
    },
    {
      id: '5-wing-7',
      text: 'My interests tend toward the dark, mysterious, or esoteric.',
      forType: 5,
      wingA: { wing: 4, score: 3 },
      wingB: { wing: 6, score: 0 },
      dimension: 'motivation',
    },
    {
      id: '5-wing-8',
      text: 'I feel more anxious and concerned about security than melancholic.',
      forType: 5,
      wingA: { wing: 4, score: 0 },
      wingB: { wing: 6, score: 3 },
      dimension: 'emotional_tone',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 6: 6w5 (The Defender) vs 6w7 (The Buddy)
  // 6w5: More introverted, analytical, reserved
  // 6w7: More extroverted, optimistic, playful
  // ═══════════════════════════════════════════════════════════════
  6: [
    {
      id: '6-wing-1',
      text: 'I am more intellectual and reserved than warm and outgoing.',
      forType: 6,
      wingA: { wing: 5, score: 3 },
      wingB: { wing: 7, score: 0 },
      dimension: 'social_style',
    },
    {
      id: '6-wing-2',
      text: 'I use humor and positivity to cope with my anxieties.',
      forType: 6,
      wingA: { wing: 5, score: 0 },
      wingB: { wing: 7, score: 3 },
      dimension: 'behavior',
    },
    {
      id: '6-wing-3',
      text: 'I prefer to analyze situations carefully before taking action.',
      forType: 6,
      wingA: { wing: 5, score: 3 },
      wingB: { wing: 7, score: 0 },
      dimension: 'behavior',
    },
    {
      id: '6-wing-4',
      text: 'I am energetic, sociable, and enjoy having fun with others.',
      forType: 6,
      wingA: { wing: 5, score: 0 },
      wingB: { wing: 7, score: 3 },
      dimension: 'energy',
    },
    {
      id: '6-wing-5',
      text: 'I tend to withdraw when stressed rather than seek distraction.',
      forType: 6,
      wingA: { wing: 5, score: 3 },
      wingB: { wing: 7, score: 0 },
      dimension: 'behavior',
    },
    {
      id: '6-wing-6',
      text: 'I often look for the bright side or a fun escape from worry.',
      forType: 6,
      wingA: { wing: 5, score: 0 },
      wingB: { wing: 7, score: 3 },
      dimension: 'emotional_tone',
    },
    {
      id: '6-wing-7',
      text: 'I am drawn to expertise and mastery rather than variety and options.',
      forType: 6,
      wingA: { wing: 5, score: 3 },
      wingB: { wing: 7, score: 0 },
      dimension: 'motivation',
    },
    {
      id: '6-wing-8',
      text: 'My friendships are characterized by warmth, fun, and shared adventures.',
      forType: 6,
      wingA: { wing: 5, score: 0 },
      wingB: { wing: 7, score: 3 },
      dimension: 'social_style',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 7: 7w6 (The Entertainer) vs 7w8 (The Realist)
  // 7w6: More anxious, loyal, group-oriented
  // 7w8: More assertive, independent, action-oriented
  // ═══════════════════════════════════════════════════════════════
  7: [
    {
      id: '7-wing-1',
      text: 'I enjoy being part of a group and value loyalty to friends.',
      forType: 7,
      wingA: { wing: 6, score: 3 },
      wingB: { wing: 8, score: 0 },
      dimension: 'social_style',
    },
    {
      id: '7-wing-2',
      text: 'I am more assertive and focused on getting what I want.',
      forType: 7,
      wingA: { wing: 6, score: 0 },
      wingB: { wing: 8, score: 3 },
      dimension: 'behavior',
    },
    {
      id: '7-wing-3',
      text: 'I sometimes struggle with commitment and anxiety about decisions.',
      forType: 7,
      wingA: { wing: 6, score: 3 },
      wingB: { wing: 8, score: 0 },
      dimension: 'emotional_tone',
    },
    {
      id: '7-wing-4',
      text: 'I am bold, direct, and not afraid to push for what I want.',
      forType: 7,
      wingA: { wing: 6, score: 0 },
      wingB: { wing: 8, score: 3 },
      dimension: 'energy',
    },
    {
      id: '7-wing-5',
      text: 'I am more playful and scattered than focused and powerful.',
      forType: 7,
      wingA: { wing: 6, score: 3 },
      wingB: { wing: 8, score: 0 },
      dimension: 'energy',
    },
    {
      id: '7-wing-6',
      text: 'I prefer to take charge and make things happen rather than wait.',
      forType: 7,
      wingA: { wing: 6, score: 0 },
      wingB: { wing: 8, score: 3 },
      dimension: 'behavior',
    },
    {
      id: '7-wing-7',
      text: 'I tend to check in with others before making major decisions.',
      forType: 7,
      wingA: { wing: 6, score: 3 },
      wingB: { wing: 8, score: 0 },
      dimension: 'behavior',
    },
    {
      id: '7-wing-8',
      text: 'I can be quite intimidating and forceful when pursuing my goals.',
      forType: 7,
      wingA: { wing: 6, score: 0 },
      wingB: { wing: 8, score: 3 },
      dimension: 'social_style',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 8: 8w7 (The Maverick) vs 8w9 (The Bear)
  // 8w7: More energetic, adventurous, quick to act
  // 8w9: More grounded, patient, steady
  // ═══════════════════════════════════════════════════════════════
  8: [
    {
      id: '8-wing-1',
      text: 'I enjoy excitement, adventure, and taking risks.',
      forType: 8,
      wingA: { wing: 7, score: 3 },
      wingB: { wing: 9, score: 0 },
      dimension: 'motivation',
    },
    {
      id: '8-wing-2',
      text: 'I prefer a steady, grounded approach over constant activity.',
      forType: 8,
      wingA: { wing: 7, score: 0 },
      wingB: { wing: 9, score: 3 },
      dimension: 'energy',
    },
    {
      id: '8-wing-3',
      text: 'I can be patient and receptive when the situation calls for it.',
      forType: 8,
      wingA: { wing: 7, score: 0 },
      wingB: { wing: 9, score: 3 },
      dimension: 'behavior',
    },
    {
      id: '8-wing-4',
      text: 'I am quick, energetic, and always looking for the next challenge.',
      forType: 8,
      wingA: { wing: 7, score: 3 },
      wingB: { wing: 9, score: 0 },
      dimension: 'energy',
    },
    {
      id: '8-wing-5',
      text: 'I am more easygoing and slow to anger than explosive.',
      forType: 8,
      wingA: { wing: 7, score: 0 },
      wingB: { wing: 9, score: 3 },
      dimension: 'emotional_tone',
    },
    {
      id: '8-wing-6',
      text: 'I get bored easily and need constant stimulation.',
      forType: 8,
      wingA: { wing: 7, score: 3 },
      wingB: { wing: 9, score: 0 },
      dimension: 'motivation',
    },
    {
      id: '8-wing-7',
      text: 'I am a solid, dependable presence that others can rely on.',
      forType: 8,
      wingA: { wing: 7, score: 0 },
      wingB: { wing: 9, score: 3 },
      dimension: 'social_style',
    },
    {
      id: '8-wing-8',
      text: 'I am restless and always looking for new territories to conquer.',
      forType: 8,
      wingA: { wing: 7, score: 3 },
      wingB: { wing: 9, score: 0 },
      dimension: 'behavior',
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // TYPE 9: 9w8 (The Referee) vs 9w1 (The Dreamer)
  // 9w8: More assertive, grounded, protective
  // 9w1: More idealistic, principled, self-critical
  // ═══════════════════════════════════════════════════════════════
  9: [
    {
      id: '9-wing-1',
      text: 'I can be assertive and forceful when protecting others.',
      forType: 9,
      wingA: { wing: 8, score: 3 },
      wingB: { wing: 1, score: 0 },
      dimension: 'behavior',
    },
    {
      id: '9-wing-2',
      text: 'I have strong ideals about how things should be done.',
      forType: 9,
      wingA: { wing: 8, score: 0 },
      wingB: { wing: 1, score: 3 },
      dimension: 'motivation',
    },
    {
      id: '9-wing-3',
      text: 'I prefer to keep the peace rather than confront problems directly.',
      forType: 9,
      wingA: { wing: 8, score: 0 },
      wingB: { wing: 1, score: 2 },
      dimension: 'behavior',
    },
    {
      id: '9-wing-4',
      text: 'I have a stubborn, immovable quality when pushed too hard.',
      forType: 9,
      wingA: { wing: 8, score: 3 },
      wingB: { wing: 1, score: 1 },
      dimension: 'energy',
    },
    {
      id: '9-wing-5',
      text: 'I am more critical and judgmental than easy-going.',
      forType: 9,
      wingA: { wing: 8, score: 0 },
      wingB: { wing: 1, score: 3 },
      dimension: 'emotional_tone',
    },
    {
      id: '9-wing-6',
      text: 'I have a grounded, earthy presence and physical strength.',
      forType: 9,
      wingA: { wing: 8, score: 3 },
      wingB: { wing: 1, score: 0 },
      dimension: 'energy',
    },
    {
      id: '9-wing-7',
      text: 'I am more idealistic and improvement-focused than accepting.',
      forType: 9,
      wingA: { wing: 8, score: 0 },
      wingB: { wing: 1, score: 3 },
      dimension: 'motivation',
    },
    {
      id: '9-wing-8',
      text: 'I can be surprisingly direct and powerful when roused.',
      forType: 9,
      wingA: { wing: 8, score: 3 },
      wingB: { wing: 1, score: 0 },
      dimension: 'behavior',
    },
  ],
};

/**
 * Get wing questions for a specific type
 */
export function getWingQuestionsForType(type: TypeNumber): WingQuestion[] {
  return expandedWingQuestions[type] || [];
}

/**
 * Calculate wing scores from answers
 */
export function calculateExpandedWingScores(
  type: TypeNumber,
  answers: Record<string, number>
): { wingA: number; wingB: number; wingAType: TypeNumber; wingBType: TypeNumber; balance: number } {
  const questions = expandedWingQuestions[type] || [];
  const [wingAType, wingBType] = wingPairs[type];

  let wingAScore = 0;
  let wingBScore = 0;

  for (const question of questions) {
    const answer = answers[question.id];
    if (answer !== undefined) {
      wingAScore += question.wingA.score * answer;
      wingBScore += question.wingB.score * answer;
    }
  }

  // Calculate balance: positive = wingA, negative = wingB
  const total = wingAScore + wingBScore;
  const balance = total > 0 ? (wingAScore - wingBScore) / total : 0;

  return {
    wingA: wingAScore,
    wingB: wingBScore,
    wingAType,
    wingBType,
    balance, // -1 to 1, where -1 is pure wingB, 1 is pure wingA
  };
}
