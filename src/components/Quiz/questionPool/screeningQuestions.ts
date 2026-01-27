import type { TypeNumber } from '../../../types';

/**
 * Screening Questions
 *
 * High-discrimination questions designed to quickly identify:
 * - Center (Gut/Heart/Head)
 * - Harmonic Group (Positive Outlook/Competency/Reactive)
 * - Hornevian Group (Assertive/Compliant/Withdrawn)
 *
 * These questions efficiently eliminate unlikely types early in the quiz.
 */

export interface ScreeningQuestion {
  id: string;
  text: string;
  category: 'center' | 'harmonic' | 'hornevian' | 'core_motivation';
  // Primary types this question helps identify
  primaryTargets: TypeNumber[];
  // Types this question helps rule out
  exclusions: TypeNumber[];
  // Scoring: how much each type scores when answered positively (1-5 Likert)
  typeScores: Partial<Record<TypeNumber, number>>;
  // Groups this question targets
  groupTargets?: {
    center?: 'gut' | 'heart' | 'head';
    harmonic?: 'positive_outlook' | 'competency' | 'reactive';
    hornevian?: 'assertive' | 'compliant' | 'withdrawn';
  };
}

export const screeningQuestions: ScreeningQuestion[] = [
  // ═══════════════════════════════════════════════════════════════
  // CENTER-BASED SCREENING (Gut: 8,9,1 | Heart: 2,3,4 | Head: 5,6,7)
  // ═══════════════════════════════════════════════════════════════

  // Gut Center - Anger/Instinct focus
  // Type 5 gets strong negative - head types analyze, don't use gut instinct
  {
    id: 'screen-gut-1',
    text: 'I tend to make decisions based on an immediate gut sense rather than analyzing options at length.',
    category: 'center',
    primaryTargets: [8, 9, 1],
    exclusions: [5, 6, 7],
    typeScores: { 8: 3, 9: 2, 1: 3, 5: -3, 6: -1, 7: -1 },
    groupTargets: { center: 'gut' },
  },
  // Type 5 gets strong negative - 5s detach from frustration, don't feel it strongly
  {
    id: 'screen-gut-2',
    text: 'I often feel an undercurrent of frustration or irritation, even when I try to suppress it.',
    category: 'center',
    primaryTargets: [8, 1, 9],
    exclusions: [2, 3, 4, 5],
    typeScores: { 1: 3, 8: 3, 9: 2, 5: -2, 2: -1, 3: -2, 7: -2 },
    groupTargets: { center: 'gut' },
  },
  // Type 5 gets strong negative - 5s analyze right/wrong, don't "just know"
  {
    id: 'screen-gut-3',
    text: 'My sense of right and wrong is clear and immediate - I just know when something is off.',
    category: 'center',
    primaryTargets: [1, 8],
    exclusions: [5, 7],
    typeScores: { 1: 3, 8: 2, 9: 1, 5: -2, 7: -2, 3: -1 },
    groupTargets: { center: 'gut' },
  },

  // Heart Center - Shame/Image focus
  {
    id: 'screen-heart-1',
    text: 'How others perceive me significantly affects how I feel about myself.',
    category: 'center',
    primaryTargets: [2, 3, 4],
    exclusions: [5, 8],
    typeScores: { 3: 3, 2: 3, 4: 2, 5: -2, 8: -2, 9: -1, 1: -1 },
    groupTargets: { center: 'heart' },
  },
  {
    id: 'screen-heart-2',
    text: 'I often adjust who I am or how I present myself depending on the social context.',
    category: 'center',
    primaryTargets: [3, 2],
    exclusions: [5, 8, 1],
    typeScores: { 3: 3, 2: 2, 4: 1, 5: -2, 8: -2, 1: -2, 9: -1 },
    groupTargets: { center: 'heart' },
  },
  // Type 9 scores negative - they numb out rather than engage with emotional complexity
  {
    id: 'screen-heart-3',
    text: 'My emotional life is rich and complex, and understanding my feelings is important to me.',
    category: 'center',
    primaryTargets: [4, 2],
    exclusions: [5, 8, 9],
    typeScores: { 4: 3, 2: 2, 3: 1, 5: -1, 8: -2, 1: -1, 9: -2 },
    groupTargets: { center: 'heart' },
  },

  // Head Center - Fear/Security focus
  // Type 1 negative - gut types act from instinct, not lengthy analysis
  {
    id: 'screen-head-1',
    text: 'I spend a lot of time thinking, analyzing, and preparing before taking action.',
    category: 'center',
    primaryTargets: [5, 6, 7],
    exclusions: [8, 3, 1],
    typeScores: { 5: 3, 6: 3, 7: 2, 8: -2, 3: -1, 9: -1, 1: -1 },
    groupTargets: { center: 'head' },
  },
  // Type 1 negative - 1s anticipate from moral sense, not fear
  {
    id: 'screen-head-2',
    text: 'I often anticipate what could go wrong and plan accordingly.',
    category: 'center',
    primaryTargets: [6, 5],
    exclusions: [7, 9, 1],
    typeScores: { 6: 3, 5: 2, 7: -2, 9: -2, 3: -1, 1: -1 },
    groupTargets: { center: 'head' },
  },
  // Type 1 negative - 1s commit based on rightness, not understanding
  {
    id: 'screen-head-3',
    text: 'I prefer to understand something thoroughly before committing to it.',
    category: 'center',
    primaryTargets: [5, 6],
    exclusions: [7, 3, 1],
    typeScores: { 5: 3, 6: 2, 7: -1, 3: -2, 8: -1, 1: -1 },
    groupTargets: { center: 'head' },
  },

  // ═══════════════════════════════════════════════════════════════
  // HARMONIC GROUP SCREENING (How we cope with problems)
  // Positive Outlook (2,7,9) | Competency (1,3,5) | Reactive (4,6,8)
  // ═══════════════════════════════════════════════════════════════

  // Positive Outlook Group
  // Type 6 gets strong negative - reactive types don't look for silver linings
  {
    id: 'screen-pos-1',
    text: 'When things go wrong, I naturally look for the silver lining or a positive reframe.',
    category: 'harmonic',
    primaryTargets: [7, 9, 2],
    exclusions: [4, 6, 8],
    typeScores: { 7: 3, 9: 3, 2: 2, 4: -2, 6: -3, 8: -1, 1: -1 },
    groupTargets: { harmonic: 'positive_outlook' },
  },
  // Type 6 negative - reactive types focus on problems, don't downplay them
  {
    id: 'screen-pos-2',
    text: 'I tend to downplay problems or avoid dwelling on negative feelings.',
    category: 'harmonic',
    primaryTargets: [7, 9],
    exclusions: [4, 6, 2],
    typeScores: { 7: 3, 9: 3, 2: -1, 4: -2, 6: -3, 1: -2, 8: -1 },
    groupTargets: { harmonic: 'positive_outlook' },
  },

  // Competency Group
  // Type 6 negative - reactive types don't purely rely on competence
  {
    id: 'screen-comp-1',
    text: 'I believe most problems can be solved through competence, logic, and proper methods.',
    category: 'harmonic',
    primaryTargets: [1, 3, 5],
    exclusions: [4, 8, 9, 6],
    typeScores: { 5: 3, 1: 3, 3: 2, 4: -2, 8: -1, 9: -2, 2: -1, 6: -2 },
    groupTargets: { harmonic: 'competency' },
  },
  // Type 6 negative - reactive types don't set aside emotions
  {
    id: 'screen-comp-2',
    text: 'I set aside my emotions to focus on what needs to be done effectively.',
    category: 'harmonic',
    primaryTargets: [3, 5, 1],
    exclusions: [2, 4, 8, 6],
    typeScores: { 3: 3, 5: 3, 1: 2, 2: -2, 4: -2, 8: -1, 6: -2 },
    groupTargets: { harmonic: 'competency' },
  },

  // Reactive Group
  // Increase Type 6 score, add Type 2 negative (positive outlook, doesn't react emotionally like this)
  {
    id: 'screen-react-1',
    text: 'I have strong emotional reactions and I need others to know how I feel.',
    category: 'harmonic',
    primaryTargets: [4, 6, 8],
    exclusions: [3, 5, 9, 2],
    typeScores: { 4: 3, 8: 2, 6: 3, 3: -2, 5: -2, 9: -2, 1: -1, 2: -1 },
    groupTargets: { harmonic: 'reactive' },
  },
  // Strengthen Type 2 negative - positive outlook types move to helping, not validation
  {
    id: 'screen-react-2',
    text: 'I want to be understood and validated before moving to solutions.',
    category: 'harmonic',
    primaryTargets: [4, 6],
    exclusions: [3, 7, 5, 2],
    typeScores: { 4: 3, 6: 3, 8: 1, 3: -2, 7: -2, 5: -2, 1: -1, 2: -2 },
    groupTargets: { harmonic: 'reactive' },
  },

  // ═══════════════════════════════════════════════════════════════
  // HORNEVIAN GROUP SCREENING (Social style / stance)
  // Assertive (3,7,8) | Compliant (1,2,6) | Withdrawn (4,5,9)
  // ═══════════════════════════════════════════════════════════════

  // Assertive Group
  // Type 1, 2, 6 get negative - compliant types don't go after things directly
  {
    id: 'screen-assert-1',
    text: 'I go after what I want directly and expect others to do the same.',
    category: 'hornevian',
    primaryTargets: [8, 3, 7],
    exclusions: [4, 5, 9, 6, 1, 2],
    typeScores: { 8: 3, 3: 3, 7: 2, 4: -2, 5: -2, 9: -2, 1: -2, 2: -1, 6: -2 },
    groupTargets: { hornevian: 'assertive' },
  },
  // Type 1, 2, 6 get negative - compliant types don't move toward challenges
  {
    id: 'screen-assert-2',
    text: 'I naturally move toward challenges and opportunities rather than waiting.',
    category: 'hornevian',
    primaryTargets: [3, 7, 8],
    exclusions: [5, 9, 6, 1, 2],
    typeScores: { 3: 3, 7: 3, 8: 3, 5: -2, 9: -2, 4: -1, 6: -2, 1: -1, 2: -1 },
    groupTargets: { hornevian: 'assertive' },
  },

  // Compliant Group
  // Type 3 and 8 get negative - assertive types don't put others' needs first
  {
    id: 'screen-comply-1',
    text: 'I frequently prioritize what others need over my own wants or preferences.',
    category: 'hornevian',
    primaryTargets: [2, 6],
    exclusions: [8, 7, 9, 3],
    typeScores: { 2: 3, 6: 2, 1: 1, 8: -3, 7: -2, 3: -2, 5: -1, 9: -1 },
    groupTargets: { hornevian: 'compliant' },
  },
  // Type 3 and 8 get strong negative - assertive types don't look to external authorities
  {
    id: 'screen-comply-2',
    text: 'I look to established standards, rules, or authorities to guide my behavior.',
    category: 'hornevian',
    primaryTargets: [6, 1],
    exclusions: [8, 7, 5, 2, 3],
    typeScores: { 6: 3, 1: 3, 2: 0, 8: -3, 7: -2, 3: -2, 4: -1, 5: -2 },
    groupTargets: { hornevian: 'compliant' },
  },

  // Withdrawn Group
  // Type 2 and Type 6 negative - compliant types don't withdraw, they seek connection
  {
    id: 'screen-withdraw-1',
    text: 'I need time alone to process my thoughts and feelings before engaging with the world.',
    category: 'hornevian',
    primaryTargets: [5, 4, 9],
    exclusions: [3, 7, 8, 2, 6],
    typeScores: { 5: 3, 4: 2, 9: 2, 3: -2, 7: -2, 8: -2, 2: -2, 6: -1 },
    groupTargets: { hornevian: 'withdrawn' },
  },
  // Type 6 negative - 6s don't hold back, they seek support and alliance
  {
    id: 'screen-withdraw-2',
    text: 'I often hold back from direct engagement, preferring to observe or stay in my own world.',
    category: 'hornevian',
    primaryTargets: [5, 9, 4],
    exclusions: [3, 8, 2, 6],
    typeScores: { 5: 3, 9: 3, 4: 2, 3: -2, 8: -2, 7: -1, 2: -2, 1: -1, 6: -2 },
    groupTargets: { hornevian: 'withdrawn' },
  },

  // ═══════════════════════════════════════════════════════════════
  // COMPLIANT GROUP DISCRIMINATION (1, 2, 6)
  // Critical for distinguishing within the compliant triad
  // ═══════════════════════════════════════════════════════════════

  // Type 1 vs 3: Gut resentment vs Heart achievement
  // Type 3 negative - 3s don't feel resentment about incorrectness, they focus on success
  {
    id: 'screen-comply-diff-1',
    text: 'I feel more resentment about things being done incorrectly than about not being appreciated or successful.',
    category: 'core_motivation',
    primaryTargets: [1],
    exclusions: [2, 7, 3],
    typeScores: { 1: 3, 3: -2, 2: -2, 6: 0, 7: -1, 9: -1 },
  },
  // Type 2 vs others: Relationship focus, helping others
  // Negatives: Type 7 (fun-seeking, not helping), Type 9 (passive merging), Type 5 (withdrawn)
  {
    id: 'screen-comply-diff-2',
    text: 'I feel most fulfilled when I can see that someone genuinely needs my help and support.',
    category: 'core_motivation',
    primaryTargets: [2],
    exclusions: [5, 1, 7, 9],
    typeScores: { 2: 3, 7: -2, 9: -2, 1: -1, 5: -2, 8: -1 },
  },
  // Type 6 vs 1: External doubt vs Internal standards
  {
    id: 'screen-comply-diff-3',
    text: 'I frequently question myself and look to trusted authorities or systems for guidance.',
    category: 'core_motivation',
    primaryTargets: [6],
    exclusions: [8, 1],
    typeScores: { 6: 3, 1: -2, 8: -2, 7: -1 },
  },
  // Type 1 vs 6: Anger at imperfection vs Fear of consequences
  {
    id: 'screen-comply-diff-4',
    text: 'When something goes wrong, my first reaction is anger at the mistake rather than worry about what might happen.',
    category: 'core_motivation',
    primaryTargets: [1, 8],
    exclusions: [6, 9],
    typeScores: { 1: 3, 8: 2, 6: -2, 9: -2, 2: -1 },
  },

  // Type 1 vs 3: Inner critic about morality vs achievement
  {
    id: 'screen-comply-diff-5',
    text: 'My inner critic focuses more on whether I am a good person than on whether I am successful.',
    category: 'core_motivation',
    primaryTargets: [1],
    exclusions: [3, 7],
    typeScores: { 1: 3, 3: -2, 7: -1, 8: -1 },
  },

  // ═══════════════════════════════════════════════════════════════
  // CORE MOTIVATION SCREENING (Primary type markers)
  // ═══════════════════════════════════════════════════════════════

  // Type 1 - Inner Critic / Perfectionism
  // Negatives: Type 3 (inner critic about success, not morals), Type 5 (analyzes, no critic), Type 8 (no inner critic)
  {
    id: 'screen-core-1',
    text: 'I have a strong inner voice that constantly points out how I could do better.',
    category: 'core_motivation',
    primaryTargets: [1],
    exclusions: [7, 9, 5, 2, 6, 8, 3],
    typeScores: { 1: 4, 3: -2, 5: -2, 8: -3, 2: -1, 6: -1, 7: -2 },
  },

  // Type 2 - Being Needed
  // Negatives: Type 7 (seeks fun, not helping), Type 9 (merges passively), Type 5 (withdrawn), Type 6 (seeks help, not gives)
  {
    id: 'screen-core-2',
    text: 'I feel most alive and valuable when I\'m helping someone who truly needs me.',
    category: 'core_motivation',
    primaryTargets: [2],
    exclusions: [5, 8, 9, 1, 6, 7],
    typeScores: { 2: 4, 7: -2, 6: -2, 9: -2, 5: -2, 1: -1 },
  },

  // Type 3 - Achievement / Image
  // Negatives: Type 1 (cares about being right, not appearing successful), Type 7 (avoids "success" focus), Type 9 (no drive)
  {
    id: 'screen-core-3',
    text: 'My worth feels connected to my accomplishments and how successful I appear to others.',
    category: 'core_motivation',
    primaryTargets: [3],
    exclusions: [9, 5, 7, 1],
    typeScores: { 3: 4, 1: -2, 7: -2, 9: -2, 5: -1 },
  },

  // Type 4 - Identity / Significance
  {
    id: 'screen-core-4',
    text: 'I often feel like something essential is missing in me that others seem to have.',
    category: 'core_motivation',
    primaryTargets: [4],
    exclusions: [3, 7, 9],
    typeScores: { 4: 4 },
  },

  // Type 5 - Understanding / Competence (withdraw to conserve)
  // Negatives: Type 1 (driven by internal standards, not knowledge), Type 6 (seeks safety through support)
  {
    id: 'screen-core-5',
    text: 'I feel safe when I understand things deeply and have accumulated enough knowledge.',
    category: 'core_motivation',
    primaryTargets: [5],
    exclusions: [2, 7, 1, 6],
    typeScores: { 5: 4, 1: -2, 6: -2, 7: -1 },
  },

  // Type 6 - Security / Support (vigilance and doubt)
  // Negatives: Type 2 (gives support, doesn't need it), Type 5 (prefers independence), Type 8 (doesn't need support)
  {
    id: 'screen-core-6',
    text: 'I frequently scan for potential problems and need to feel I have reliable support systems.',
    category: 'core_motivation',
    primaryTargets: [6],
    exclusions: [7, 8, 5, 1, 2],
    typeScores: { 6: 4, 2: -2, 5: -2, 1: -1, 8: -1 },
  },

  // Type 7 - Freedom / Options
  // Negatives: Type 3 (commits to achievement), Type 1 (commits to standards), Type 5 (goes deep not wide)
  {
    id: 'screen-core-7',
    text: 'I feel uncomfortable when locked into a single path - I prefer to keep multiple options available.',
    category: 'core_motivation',
    primaryTargets: [7],
    exclusions: [1, 5, 3],
    typeScores: { 7: 4, 3: -2, 1: -2, 5: -1 },
  },

  // Type 8 - Control / Autonomy
  // Negatives: Type 6 (seeks support), Type 2 (gives power away), Type 9 (merges)
  // Note: Type 1 also values autonomy, so don't penalize them
  {
    id: 'screen-core-8',
    text: 'I strongly prefer to make my own decisions and resist being directed or managed by others.',
    category: 'core_motivation',
    primaryTargets: [8],
    exclusions: [2, 9, 6],
    typeScores: { 8: 4, 6: -2, 2: -2, 9: -2 },
  },

  // Type 9 - Peace / Harmony (self-forgetting)
  // Add negative scores for 2 (actively helps, doesn't merge) and 8 (very assertive)
  {
    id: 'screen-core-9',
    text: 'I often lose track of my own priorities because I merge with what others want.',
    category: 'core_motivation',
    primaryTargets: [9],
    exclusions: [8, 3, 2],
    typeScores: { 9: 4, 2: -2, 8: -2, 3: -1 },
  },
];

/**
 * Get screening questions for a specific center
 */
export function getScreeningByCenter(center: 'gut' | 'heart' | 'head'): ScreeningQuestion[] {
  return screeningQuestions.filter(q => q.groupTargets?.center === center);
}

/**
 * Get screening questions for specific groups
 */
export function getScreeningByHarmonic(group: 'positive_outlook' | 'competency' | 'reactive'): ScreeningQuestion[] {
  return screeningQuestions.filter(q => q.groupTargets?.harmonic === group);
}

export function getScreeningByHornevian(group: 'assertive' | 'compliant' | 'withdrawn'): ScreeningQuestion[] {
  return screeningQuestions.filter(q => q.groupTargets?.hornevian === group);
}

/**
 * Get high-discrimination core motivation questions
 */
export function getCoreMotivationScreening(): ScreeningQuestion[] {
  return screeningQuestions.filter(q => q.category === 'core_motivation');
}
