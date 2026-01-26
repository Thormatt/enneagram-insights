/**
 * Question Pool Module
 *
 * Contains all quiz questions organized by purpose:
 * - Screening: Quick identification of center/harmonic/hornevian groups
 * - Differentiator: Pair-specific questions for confused types
 * - Wing: Expanded wing determination (6-9 questions per type)
 * - Instinct: Instinct stack questions (existing + expansions)
 */

export {
  screeningQuestions,
  getScreeningByCenter,
  getScreeningByHarmonic,
  getScreeningByHornevian,
  getCoreMotivationScreening,
  type ScreeningQuestion,
} from './screeningQuestions';

export {
  differentiatorQuestions,
  getDifferentiatorsForPair,
  getAvailablePairs,
  scoreDifferentiator,
  type DifferentiatorQuestion,
} from './differentiatorQuestions';

export {
  expandedWingQuestions,
  getWingQuestionsForType,
  calculateExpandedWingScores,
  type WingQuestion,
} from './expandedWingQuestions';
