/**
 * Results Synthesis
 *
 * Calculates derived insights from quiz results for richer display:
 * - Subtype profile (type + instinct combination)
 * - Center balance across all answers
 * - Harmonic & Hornevian group identification
 * - Confusion candidates (close-scoring types)
 * - Tritype archetype names
 * - Answer pattern analysis
 * - Personalized growth summary
 */

import type { TypeNumber, InstinctType } from '../../../types';

// ═══════════════════════════════════════════════════════════════
// TYPE GROUPINGS
// ═══════════════════════════════════════════════════════════════

export const CENTER_TYPES = {
  gut: [8, 9, 1] as TypeNumber[],
  heart: [2, 3, 4] as TypeNumber[],
  head: [5, 6, 7] as TypeNumber[],
};

export const HARMONIC_GROUPS = {
  positive_outlook: [7, 9, 2] as TypeNumber[], // Reframe positively
  competency: [1, 3, 5] as TypeNumber[],       // Solve through logic/skill
  reactive: [4, 6, 8] as TypeNumber[],         // React emotionally first
};

export const HORNEVIAN_GROUPS = {
  assertive: [3, 7, 8] as TypeNumber[],   // Move toward/against
  compliant: [1, 2, 6] as TypeNumber[],   // Earn belonging
  withdrawn: [4, 5, 9] as TypeNumber[],   // Pull back/inward
};

// ═══════════════════════════════════════════════════════════════
// SUBTYPE PROFILES (Short summaries for results page)
// ═══════════════════════════════════════════════════════════════

export const SUBTYPE_PROFILES: Record<TypeNumber, Record<InstinctType, {
  name: string;
  tagline: string;
  isCounterType: boolean;
  briefDescription: string;
}>> = {
  1: {
    sp: { name: 'SP-1', tagline: 'The Worrier', isCounterType: false, briefDescription: 'Channels perfectionism into practical matters, managing anxiety through order and preparation.' },
    so: { name: 'SO-1', tagline: 'The Reformer', isCounterType: false, briefDescription: 'The classic One - focused on social/moral standards, can be the critical teacher or ethical leader.' },
    sx: { name: 'SX-1', tagline: 'The Zealot', isCounterType: true, briefDescription: 'Intense focus on perfecting relationships; more passionate and less patient than other Ones.' },
  },
  2: {
    sp: { name: 'SP-2', tagline: 'The Charmer', isCounterType: true, briefDescription: 'Less overtly helpful; seeks to be cared for by being lovable rather than indispensable.' },
    so: { name: 'SO-2', tagline: 'The Ambassador', isCounterType: false, briefDescription: 'Gains influence through strategic helping; the "power behind the throne."' },
    sx: { name: 'SX-2', tagline: 'The Seducer', isCounterType: false, briefDescription: 'Intensely focused on one-on-one connection; uses attractiveness and charm to create bonds.' },
  },
  3: {
    sp: { name: 'SP-3', tagline: 'The Achiever', isCounterType: true, briefDescription: 'Works hard without seeking spotlight; focused on security through competence and efficiency.' },
    so: { name: 'SO-3', tagline: 'The Star', isCounterType: false, briefDescription: 'Classic Three - success-oriented, image-conscious, climbs social ladders with charm.' },
    sx: { name: 'SX-3', tagline: 'The Catch', isCounterType: false, briefDescription: 'Focuses on being attractive and desirable; success measured by relationship appeal.' },
  },
  4: {
    sp: { name: 'SP-4', tagline: 'The Stoic', isCounterType: true, briefDescription: 'Internalizes suffering without drama; tenacious and long-suffering, may seem less emotional.' },
    so: { name: 'SO-4', tagline: 'The Outsider', isCounterType: true, briefDescription: 'Compares self to others and feels inferior; ashamed of envy but struggles with it publicly.' },
    sx: { name: 'SX-4', tagline: 'The Romantic', isCounterType: false, briefDescription: 'Classic Four - expressive, dramatic, seeks intense emotional connection and uniqueness.' },
  },
  5: {
    sp: { name: 'SP-5', tagline: 'The Castle', isCounterType: false, briefDescription: 'Protects boundaries strongly; minimizes needs and withdraws to preserve limited energy.' },
    so: { name: 'SO-5', tagline: 'The Expert', isCounterType: false, briefDescription: 'Connects through specialized knowledge; the intellectual who gains status through expertise.' },
    sx: { name: 'SX-5', tagline: 'The Iconoclast', isCounterType: true, briefDescription: 'Most emotionally intense Five; seeks one special person to share their inner world.' },
  },
  6: {
    sp: { name: 'SP-6', tagline: 'The Guardian', isCounterType: false, briefDescription: 'Seeks security through warmth and alliance; friendly, cautious, builds safety networks.' },
    so: { name: 'SO-6', tagline: 'The Loyalist', isCounterType: false, briefDescription: 'Classic Six - looks to groups, rules, and authorities for guidance and security.' },
    sx: { name: 'SX-6', tagline: 'The Warrior', isCounterType: true, briefDescription: 'Counter-phobic; confronts fear head-on, may appear aggressive or rebellious.' },
  },
  7: {
    sp: { name: 'SP-7', tagline: 'The Keeper', isCounterType: true, briefDescription: 'More grounded and practical; creates networks for security, less scattered than other Sevens.' },
    so: { name: 'SO-7', tagline: 'The Utopian', isCounterType: false, briefDescription: 'Sacrifices for idealistic causes; less self-focused, more socially conscious Seven.' },
    sx: { name: 'SX-7', tagline: 'The Adventurer', isCounterType: false, briefDescription: 'Classic Seven - seeks intense experiences, fascinated by people and possibilities.' },
  },
  8: {
    sp: { name: 'SP-8', tagline: 'The Survivor', isCounterType: false, briefDescription: 'Focused on getting material needs met; direct, practical, no-nonsense about survival.' },
    so: { name: 'SO-8', tagline: 'The Leader', isCounterType: true, briefDescription: 'Protects the group; uses power to champion others, may seem less aggressive.' },
    sx: { name: 'SX-8', tagline: 'The Provocateur', isCounterType: false, briefDescription: 'Classic Eight - intense, rebellious, tests relationships through provocation and passion.' },
  },
  9: {
    sp: { name: 'SP-9', tagline: 'The Comfort Seeker', isCounterType: false, briefDescription: 'Merges with physical comfort and routines; finds peace through familiar pleasures.' },
    so: { name: 'SO-9', tagline: 'The Mediator', isCounterType: false, briefDescription: 'Merges with groups and communities; works hard for belonging, often self-sacrificing.' },
    sx: { name: 'SX-9', tagline: 'The Merger', isCounterType: true, briefDescription: 'Merges with one special person; loses self in relationships, most intense Nine.' },
  },
};

// ═══════════════════════════════════════════════════════════════
// TRITYPE ARCHETYPES
// ═══════════════════════════════════════════════════════════════

export const TRITYPE_ARCHETYPES: Record<string, { name: string; description: string }> = {
  // 1xx tritypes
  '125': { name: 'The Mentor', description: 'Principled helper who guides through wisdom and care.' },
  '126': { name: 'The Supporter', description: 'Dedicated to helping others while maintaining high standards.' },
  '127': { name: 'The Teacher', description: 'Shares knowledge with enthusiasm and moral purpose.' },
  '135': { name: 'The Technical Expert', description: 'Achieves through precise knowledge and principled action.' },
  '136': { name: 'The Taskmaster', description: 'Drives results through discipline and reliability.' },
  '137': { name: 'The Systems Builder', description: 'Creates efficient structures with optimistic energy.' },
  '145': { name: 'The Philosopher', description: 'Seeks deep truth with principled introspection.' },
  '146': { name: 'The Questioner', description: 'Challenges assumptions with both conviction and doubt.' },
  '147': { name: 'The Visionary', description: 'Idealistic reformer with creative possibilities.' },

  // 2xx tritypes
  '258': { name: 'The Strategist', description: 'Combines heart, mind, and power for influence.' },
  '259': { name: 'The Peacekeeper', description: 'Gentle wisdom with caring and acceptance.' },
  '268': { name: 'The Rescuer', description: 'Protective helper who fights for those in need.' },
  '269': { name: 'The Good Samaritan', description: 'Supportive, loyal, and peace-seeking helper.' },
  '278': { name: 'The Free Spirit', description: 'Adventurous helper with bold generosity.' },
  '279': { name: 'The Peacemaker', description: 'Optimistic, friendly, and harmonizing presence.' },

  // 3xx tritypes
  '358': { name: 'The Solution Master', description: 'Achieves through knowledge and decisive action.' },
  '359': { name: 'The Thinker', description: 'Calm achiever who succeeds through quiet competence.' },
  '368': { name: 'The Justice Fighter', description: 'Achieves while protecting and questioning authority.' },
  '369': { name: 'The Chameleon', description: 'Adapts seamlessly to achieve harmony and success.' },
  '378': { name: 'The Mover & Shaker', description: 'Dynamic achiever who creates bold opportunities.' },
  '379': { name: 'The Ambassador', description: 'Charming, optimistic achiever who builds bridges.' },

  // 4xx tritypes
  '458': { name: 'The Scholar', description: 'Deep thinker with emotional intensity and strength.' },
  '459': { name: 'The Contemplative', description: 'Introspective soul seeking meaning and peace.' },
  '468': { name: 'The Truth Teller', description: 'Emotionally honest, questions reality, stands ground.' },
  '469': { name: 'The Seeker', description: 'Searches for identity through belonging and meaning.' },
  '478': { name: 'The Messenger', description: 'Creative provocateur who challenges through vision.' },
  '479': { name: 'The Gentle Spirit', description: 'Idealistic dreamer with optimistic depth.' },

  // 5xx tritypes
  '582': { name: 'The Strategist', description: 'Powerful thinker who connects through selective caring.' },
  '583': { name: 'The Scientist', description: 'Achieves through methodical expertise and analysis.' },
  '584': { name: 'The Iconoclast', description: 'Independent thinker with emotional depth and force.' },
  '592': { name: 'The Problem Solver', description: 'Wise observer who helps through understanding.' },
  '593': { name: 'The Professional', description: 'Competent, measured achiever through expertise.' },
  '594': { name: 'The Philosopher', description: 'Contemplative mind seeking deep meaning.' },

  // 6xx tritypes
  '612': { name: 'The Supporter', description: 'Loyal helper who builds secure relationships.' },
  '613': { name: 'The Administrator', description: 'Reliable achiever who creates stable success.' },
  '614': { name: 'The Philosopher', description: 'Loyal questioner exploring identity and meaning.' },
  '621': { name: 'The Rescuer', description: 'Protective helper with high standards.' },
  '631': { name: 'The Loyalist', description: 'Dependable achiever with principled commitment.' },
  '641': { name: 'The Individualist', description: 'Unique loyalist with strong convictions.' },

  // 7xx tritypes
  '712': { name: 'The Encourager', description: 'Enthusiastic helper who uplifts through optimism.' },
  '713': { name: 'The Promoter', description: 'Dynamic achiever who sells vision with energy.' },
  '714': { name: 'The Enthusiast', description: 'Creative optimist exploring depth and possibility.' },
  '728': { name: 'The Maverick', description: 'Bold adventurer who helps and challenges.' },
  '729': { name: 'The Harmonizer', description: 'Joyful peacemaker spreading lightness.' },
  '731': { name: 'The Innovator', description: 'Principled optimist creating better systems.' },

  // 8xx tritypes
  '825': { name: 'The Strategist', description: 'Powerful protector with knowledge and heart.' },
  '826': { name: 'The Defender', description: 'Loyal protector who fights for the vulnerable.' },
  '827': { name: 'The Free Spirit', description: 'Bold adventurer with generous heart.' },
  '835': { name: 'The Executive', description: 'Powerful achiever through knowledge and force.' },
  '836': { name: 'The Leader', description: 'Loyal achiever who takes charge decisively.' },
  '837': { name: 'The Entrepreneur', description: 'Dynamic achiever creating bold opportunities.' },

  // 9xx tritypes
  '925': { name: 'The Thinker', description: 'Peaceful observer with caring wisdom.' },
  '926': { name: 'The Supporter', description: 'Gentle soul offering steady, loyal presence.' },
  '927': { name: 'The Peacemaker', description: 'Optimistic harmonizer spreading warmth.' },
  '935': { name: 'The Professional', description: 'Calm achiever through quiet competence.' },
  '936': { name: 'The Mediator', description: 'Steady presence achieving through consensus.' },
  '937': { name: 'The Ambassador', description: 'Harmonizing achiever with easy charm.' },
  '945': { name: 'The Contemplative', description: 'Deep thinker seeking peace and meaning.' },
  '946': { name: 'The Seeker', description: 'Searching for identity within peaceful belonging.' },
  '947': { name: 'The Gentle Spirit', description: 'Creative dreamer with peaceful optimism.' },
};

// ═══════════════════════════════════════════════════════════════
// SYNTHESIS FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Get the subtype profile for a type + instinct combination
 */
export function getSubtypeProfile(type: TypeNumber, dominantInstinct: InstinctType) {
  return SUBTYPE_PROFILES[type][dominantInstinct];
}

/**
 * Calculate center balance from all type scores
 */
export function calculateCenterBalance(
  allTypeScores: Array<{ type: TypeNumber; percentage: number }>
): { gut: number; heart: number; head: number } {
  const scores = { gut: 0, heart: 0, head: 0 };

  for (const { type, percentage } of allTypeScores) {
    if (CENTER_TYPES.gut.includes(type)) scores.gut += percentage;
    else if (CENTER_TYPES.heart.includes(type)) scores.heart += percentage;
    else if (CENTER_TYPES.head.includes(type)) scores.head += percentage;
  }

  // Normalize to 100%
  const total = scores.gut + scores.heart + scores.head;
  if (total > 0) {
    scores.gut = Math.round((scores.gut / total) * 100);
    scores.heart = Math.round((scores.heart / total) * 100);
    scores.head = Math.round((scores.head / total) * 100);
  }

  return scores;
}

/**
 * Get harmonic group for a type
 */
export function getHarmonicGroup(type: TypeNumber): {
  group: 'positive_outlook' | 'competency' | 'reactive';
  name: string;
  description: string;
} {
  if (HARMONIC_GROUPS.positive_outlook.includes(type)) {
    return {
      group: 'positive_outlook',
      name: 'Positive Outlook',
      description: 'Tends to reframe problems positively and avoid negative feelings.',
    };
  } else if (HARMONIC_GROUPS.competency.includes(type)) {
    return {
      group: 'competency',
      name: 'Competency',
      description: 'Handles problems through logic, expertise, and objective analysis.',
    };
  } else {
    return {
      group: 'reactive',
      name: 'Reactive',
      description: 'Has strong emotional reactions and needs acknowledgment before solutions.',
    };
  }
}

/**
 * Get Hornevian group for a type
 */
export function getHornevianGroup(type: TypeNumber): {
  group: 'assertive' | 'compliant' | 'withdrawn';
  name: string;
  description: string;
} {
  if (HORNEVIAN_GROUPS.assertive.includes(type)) {
    return {
      group: 'assertive',
      name: 'Assertive',
      description: 'Moves toward goals and people with directness and energy.',
    };
  } else if (HORNEVIAN_GROUPS.compliant.includes(type)) {
    return {
      group: 'compliant',
      name: 'Compliant',
      description: 'Earns belonging through meeting expectations and being responsible.',
    };
  } else {
    return {
      group: 'withdrawn',
      name: 'Withdrawn',
      description: 'Pulls back to process internally before engaging with the world.',
    };
  }
}

/**
 * Find types that scored close to the primary type (confusion candidates)
 */
export function findConfusionCandidates(
  primaryType: TypeNumber,
  allTypeScores: Array<{ type: TypeNumber; percentage: number }>,
  threshold: number = 10
): Array<{ type: TypeNumber; percentage: number; differentiator: string }> {
  const primaryScore = allTypeScores.find(t => t.type === primaryType)?.percentage || 0;

  return allTypeScores
    .filter(t => t.type !== primaryType && primaryScore - t.percentage <= threshold)
    .map(t => ({
      type: t.type,
      percentage: t.percentage,
      differentiator: getKeyDifference(primaryType, t.type),
    }));
}

/**
 * Get the key difference between two commonly confused types
 */
function getKeyDifference(type1: TypeNumber, type2: TypeNumber): string {
  const pair = [Math.min(type1, type2), Math.max(type1, type2)].join('-');

  const differences: Record<string, string> = {
    '1-6': '1s have internal standards; 6s look to external authorities.',
    '1-3': '1s care about being right; 3s care about being successful.',
    '2-9': '2s actively help to feel needed; 9s merge to avoid conflict.',
    '3-7': '3s focus on achievement; 7s focus on experience and options.',
    '3-8': '3s adapt image for success; 8s project strength regardless.',
    '4-5': '4s withdraw into emotions; 5s withdraw into thinking.',
    '4-6': '4s feel fundamentally different; 6s feel fundamentally anxious.',
    '5-6': '5s retreat to think; 6s scan for support and danger.',
    '5-7': '5s go deep into few topics; 7s go wide across many.',
    '5-9': '5s actively detach; 9s passively merge.',
    '6-9': '6s are anxiously vigilant; 9s avoid anxiety through numbing.',
    '7-9': '7s seek stimulation; 9s seek peace and routine.',
    '8-3': '8s seek control; 3s seek recognition.',
    '9-2': '9s merge passively; 2s help actively.',
  };

  return differences[pair] || `Explore both Type ${type1} and Type ${type2} to see which core motivation resonates.`;
}

/**
 * Get tritype archetype info
 */
export function getTritypeArchetype(tritypeCode: string): { name: string; description: string } | null {
  // Normalize the tritype code (e.g., "9-5-4" -> "954", then sort within centers)
  const digits = tritypeCode.replace(/\D/g, '');
  if (digits.length !== 3) return null;

  // Try different orderings since our lookup might use different center orders
  const orderings = [
    digits,
    `${digits[0]}${digits[2]}${digits[1]}`,
    `${digits[1]}${digits[0]}${digits[2]}`,
    `${digits[1]}${digits[2]}${digits[0]}`,
    `${digits[2]}${digits[0]}${digits[1]}`,
    `${digits[2]}${digits[1]}${digits[0]}`,
  ];

  for (const code of orderings) {
    if (TRITYPE_ARCHETYPES[code]) {
      return TRITYPE_ARCHETYPES[code];
    }
  }

  // Fallback: generate a basic description
  return {
    name: `The ${digits} Tritype`,
    description: `Combines the core motivations of Types ${digits[0]}, ${digits[1]}, and ${digits[2]}.`,
  };
}

/**
 * Analyze answer patterns from quiz responses
 */
export function analyzeAnswerPatterns(
  answers: Record<string, number>
): {
  totalAnswers: number;
  neutralPercentage: number;
  strongOpinionPercentage: number;
  pattern: 'decisive' | 'balanced' | 'uncertain';
  insight: string;
} {
  const values = Object.values(answers);
  const total = values.length;

  if (total === 0) {
    return {
      totalAnswers: 0,
      neutralPercentage: 0,
      strongOpinionPercentage: 0,
      pattern: 'balanced',
      insight: 'No answers recorded.',
    };
  }

  const neutralCount = values.filter(v => v === 3).length;
  const strongCount = values.filter(v => v === 1 || v === 5).length;

  const neutralPct = Math.round((neutralCount / total) * 100);
  const strongPct = Math.round((strongCount / total) * 100);

  let pattern: 'decisive' | 'balanced' | 'uncertain';
  let insight: string;

  if (strongPct >= 50) {
    pattern = 'decisive';
    insight = 'You showed strong preferences, indicating clear self-knowledge about your patterns.';
  } else if (neutralPct >= 40) {
    pattern = 'uncertain';
    insight = 'You answered many questions neutrally, which may indicate uncertainty or genuine balance across options.';
  } else {
    pattern = 'balanced';
    insight = 'Your answers show a balanced mix of preferences, typical of thoughtful self-reflection.';
  }

  return {
    totalAnswers: total,
    neutralPercentage: neutralPct,
    strongOpinionPercentage: strongPct,
    pattern,
    insight,
  };
}

/**
 * Generate personalized growth summary combining type, health level, and growth arrow
 */
export function generateGrowthSummary(
  type: TypeNumber,
  healthLevel: 'healthy' | 'average' | 'unhealthy',
  growthArrowType: TypeNumber
): string {
  const typeNames: Record<TypeNumber, string> = {
    1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five',
    6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine',
  };

  const growthQualities: Record<TypeNumber, string> = {
    1: 'spontaneity and acceptance of imperfection',
    2: 'self-care and acknowledging your own needs',
    3: 'authenticity over image and honest self-expression',
    4: 'objective action and practical engagement',
    5: 'confidence and decisive action in the world',
    6: 'inner calm and trusting your own authority',
    7: 'depth, focus, and staying with difficult feelings',
    8: 'vulnerability and caring for others gently',
    9: 'self-assertion and pursuing your own goals',
  };

  const healthPrefixes: Record<string, string> = {
    healthy: `As a healthy Type ${typeNames[type]}, you're already accessing many of your type's gifts. To continue growing, lean into`,
    average: `As a Type ${typeNames[type]} at an average level of functioning, your growth path involves accessing more`,
    unhealthy: `You may be experiencing some stress patterns of Type ${typeNames[type]}. Your healing path begins with accessing`,
  };

  return `${healthPrefixes[healthLevel]} Type ${growthArrowType}'s ${growthQualities[growthArrowType]}. This doesn't mean becoming a ${typeNames[growthArrowType]}, but integrating their healthy qualities into your own type's expression.`;
}

/**
 * Full synthesis of quiz results
 */
export interface SynthesizedResults {
  subtypeProfile: {
    name: string;
    tagline: string;
    isCounterType: boolean;
    briefDescription: string;
  };
  centerBalance: {
    gut: number;
    heart: number;
    head: number;
    dominant: 'gut' | 'heart' | 'head';
  };
  harmonicGroup: {
    group: string;
    name: string;
    description: string;
  };
  hornevianGroup: {
    group: string;
    name: string;
    description: string;
  };
  confusionCandidates: Array<{
    type: TypeNumber;
    percentage: number;
    differentiator: string;
  }>;
  tritypeArchetype: {
    name: string;
    description: string;
  } | null;
  answerPatterns: {
    totalAnswers: number;
    neutralPercentage: number;
    strongOpinionPercentage: number;
    pattern: string;
    insight: string;
  };
  growthSummary: string;
}

export function synthesizeResults(
  primaryType: TypeNumber,
  dominantInstinct: InstinctType,
  allTypeScores: Array<{ type: TypeNumber; percentage: number }>,
  tritypeCode: string,
  healthLevel: 'healthy' | 'average' | 'unhealthy',
  growthArrowType: TypeNumber,
  answers: Record<string, number>
): SynthesizedResults {
  const centerBalance = calculateCenterBalance(allTypeScores);
  const dominant = centerBalance.gut >= centerBalance.heart && centerBalance.gut >= centerBalance.head
    ? 'gut'
    : centerBalance.heart >= centerBalance.head
    ? 'heart'
    : 'head';

  return {
    subtypeProfile: getSubtypeProfile(primaryType, dominantInstinct),
    centerBalance: { ...centerBalance, dominant },
    harmonicGroup: getHarmonicGroup(primaryType),
    hornevianGroup: getHornevianGroup(primaryType),
    confusionCandidates: findConfusionCandidates(primaryType, allTypeScores),
    tritypeArchetype: getTritypeArchetype(tritypeCode),
    answerPatterns: analyzeAnswerPatterns(answers),
    growthSummary: generateGrowthSummary(primaryType, healthLevel, growthArrowType),
  };
}
