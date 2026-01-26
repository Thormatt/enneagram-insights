import type { TypeNumber } from '../../../types';

/**
 * Stage 1: Scenario-Based Questions with Ranking
 *
 * These questions present real-life situations and ask users to rank
 * their likely responses. This format:
 * - Quickly identifies Center (Gut/Heart/Head)
 * - More engaging than abstract statements
 * - Reveals unconscious motivations through behavioral choices
 * - Reduces social desirability bias
 */

export interface ScenarioQuestion {
  id: string;
  scenario: string; // The situation description
  responses: ScenarioResponse[];
  targetDimension: 'center' | 'hornevian' | 'harmonic';
}

export interface ScenarioResponse {
  id: string;
  text: string;
  // Which types this response indicates (with weights)
  typeScores: Partial<Record<TypeNumber, number>>;
  // Which center this primarily indicates
  center?: 'gut' | 'heart' | 'head';
}

/**
 * Center Identification Scenarios
 * These quickly partition users into Gut (8,9,1), Heart (2,3,4), or Head (5,6,7)
 */
export const centerScenarios: ScenarioQuestion[] = [
  {
    id: 'scenario-center-1',
    scenario: "You're in a meeting and someone presents an idea you strongly disagree with. What's your instinctive first reaction?",
    targetDimension: 'center',
    responses: [
      {
        id: 'sc1-gut',
        text: "Feel a flash of irritation or resistance rise in your body - you want to push back or take control of the situation",
        center: 'gut',
        typeScores: { 8: 3, 1: 2, 9: 1 },
      },
      {
        id: 'sc1-heart',
        text: "Notice how this affects the room's dynamics and people's feelings - you're aware of how you'll be perceived if you speak up",
        center: 'heart',
        typeScores: { 2: 2, 3: 3, 4: 2 },
      },
      {
        id: 'sc1-head',
        text: "Start mentally analyzing the flaws in their logic - you're already formulating counterarguments or questions",
        center: 'head',
        typeScores: { 5: 3, 6: 2, 7: 2 },
      },
    ],
  },
  {
    id: 'scenario-center-2',
    scenario: "You receive unexpected criticism about something you worked hard on. What happens internally?",
    targetDimension: 'center',
    responses: [
      {
        id: 'sc2-gut',
        text: "Anger or defensiveness rises quickly - how dare they question this? You feel the urge to defend your position or dismiss their view",
        center: 'gut',
        typeScores: { 8: 3, 1: 3, 9: 1 },
      },
      {
        id: 'sc2-heart',
        text: "You feel hurt or ashamed - the criticism feels personal, affecting how you see yourself or how others see you",
        center: 'heart',
        typeScores: { 2: 2, 3: 2, 4: 3 },
      },
      {
        id: 'sc2-head',
        text: "Your mind races to understand why - is the criticism valid? What did you miss? You need to figure this out",
        center: 'head',
        typeScores: { 5: 2, 6: 3, 7: 2 },
      },
    ],
  },
  {
    id: 'scenario-center-3',
    scenario: "A close friend is going through a difficult time and asks for your support. What do you naturally offer first?",
    targetDimension: 'center',
    responses: [
      {
        id: 'sc3-gut',
        text: "Practical action and protection - you want to fix the situation, confront whoever caused it, or create stability",
        center: 'gut',
        typeScores: { 8: 3, 1: 2, 9: 2 },
      },
      {
        id: 'sc3-heart',
        text: "Emotional presence and empathy - you connect with their feelings, show you care, and make them feel seen",
        center: 'heart',
        typeScores: { 2: 3, 3: 1, 4: 3 },
      },
      {
        id: 'sc3-head',
        text: "Analysis and perspective - you help them think through options, understand the situation, or see different angles",
        center: 'head',
        typeScores: { 5: 3, 6: 2, 7: 2 },
      },
    ],
  },
  {
    id: 'scenario-center-4',
    scenario: "You're about to start a challenging new project. What's your primary concern?",
    targetDimension: 'center',
    responses: [
      {
        id: 'sc4-gut',
        text: "Having autonomy and control over how it's done - you don't want interference or to compromise your approach",
        center: 'gut',
        typeScores: { 8: 3, 1: 2, 9: 1 },
      },
      {
        id: 'sc4-heart',
        text: "How the outcome will reflect on you - will it showcase your abilities, make you look good, or feel meaningful?",
        center: 'heart',
        typeScores: { 2: 1, 3: 3, 4: 2 },
      },
      {
        id: 'sc4-head',
        text: "Whether you have enough information and preparation - you want to understand it fully before committing",
        center: 'head',
        typeScores: { 5: 3, 6: 3, 7: 1 },
      },
    ],
  },
  {
    id: 'scenario-center-5',
    scenario: "You're at a social gathering where you don't know many people. What's your internal experience?",
    targetDimension: 'center',
    responses: [
      {
        id: 'sc5-gut',
        text: "You assess the room for where you fit - who has power, who's worth engaging, or how to maintain your space",
        center: 'gut',
        typeScores: { 8: 3, 1: 1, 9: 2 },
      },
      {
        id: 'sc5-heart',
        text: "You're attuned to impressions - how do you come across? Are people responding well? How can you connect?",
        center: 'heart',
        typeScores: { 2: 2, 3: 3, 4: 2 },
      },
      {
        id: 'sc5-head',
        text: "You observe and analyze from a slight distance - gathering information before deciding how to engage",
        center: 'head',
        typeScores: { 5: 3, 6: 2, 7: 2 },
      },
    ],
  },
];

/**
 * Type-Specific Scenarios
 * These help narrow down within a center to specific types
 */
export const typeScenarios: ScenarioQuestion[] = [
  // Gut Center Differentiation (8 vs 9 vs 1)
  {
    id: 'scenario-gut-diff',
    scenario: "Someone does something that violates your sense of what's right. How do you typically respond?",
    targetDimension: 'center',
    responses: [
      {
        id: 'sgd-8',
        text: "Confront it directly and forcefully - you won't let injustice stand, and people need to know where you stand",
        typeScores: { 8: 4, 1: 1, 9: -1 },
      },
      {
        id: 'sgd-1',
        text: "Feel internal tension between speaking up correctly and controlling your resentment - you want to reform, not destroy",
        typeScores: { 1: 4, 8: 1, 9: 0 },
      },
      {
        id: 'sgd-9',
        text: "Feel uncomfortable but tend to minimize it or see multiple sides - direct confrontation feels too disruptive",
        typeScores: { 9: 4, 1: 0, 8: -1 },
      },
    ],
  },
  // Heart Center Differentiation (2 vs 3 vs 4)
  {
    id: 'scenario-heart-diff',
    scenario: "You achieve something significant. What matters most to you about this success?",
    targetDimension: 'center',
    responses: [
      {
        id: 'shd-2',
        text: "That it helps others or strengthens your relationships - success feels hollow if it doesn't benefit people you care about",
        typeScores: { 2: 4, 3: 0, 4: 1 },
      },
      {
        id: 'shd-3',
        text: "The recognition and advancement it brings - you've proven your competence and worth through tangible achievement",
        typeScores: { 3: 4, 2: 0, 4: -1 },
      },
      {
        id: 'shd-4',
        text: "That it expresses something authentic about who you are - success means nothing if it doesn't feel true to your identity",
        typeScores: { 4: 4, 2: 1, 3: -1 },
      },
    ],
  },
  // Head Center Differentiation (5 vs 6 vs 7)
  {
    id: 'scenario-head-diff',
    scenario: "You're facing an uncertain situation with incomplete information. What's your approach?",
    targetDimension: 'center',
    responses: [
      {
        id: 'shd-5',
        text: "Withdraw to research and think - you need to understand it fully before engaging, and prefer to conserve your resources",
        typeScores: { 5: 4, 6: 1, 7: -1 },
      },
      {
        id: 'shd-6',
        text: "Scan for potential problems and seek reliable guidance - you want to anticipate what could go wrong and have backup plans",
        typeScores: { 6: 4, 5: 1, 7: 0 },
      },
      {
        id: 'shd-7',
        text: "Reframe it as an opportunity and explore possibilities - uncertainty means freedom and potential for something exciting",
        typeScores: { 7: 4, 5: -1, 6: 0 },
      },
    ],
  },
];

/**
 * Get all scenario questions for the quiz
 */
export function getAllScenarioQuestions(): ScenarioQuestion[] {
  return [...centerScenarios, ...typeScenarios];
}

/**
 * Calculate type scores from scenario rankings
 * Rankings are 1 (most like me) to 3 (least like me)
 */
export function scoreScenarioRankings(
  scenario: ScenarioQuestion,
  rankings: Record<string, number> // response id -> rank (1, 2, or 3)
): Partial<Record<TypeNumber, number>> {
  const scores: Partial<Record<TypeNumber, number>> = {};

  for (const response of scenario.responses) {
    const rank = rankings[response.id];
    if (rank === undefined) continue;

    // Convert rank to weight: 1st = 1.0, 2nd = 0.5, 3rd = 0.0
    const weight = rank === 1 ? 1.0 : rank === 2 ? 0.5 : 0.0;

    for (const [type, score] of Object.entries(response.typeScores)) {
      const typeNum = Number(type) as TypeNumber;
      scores[typeNum] = (scores[typeNum] || 0) + score * weight;
    }
  }

  return scores;
}
