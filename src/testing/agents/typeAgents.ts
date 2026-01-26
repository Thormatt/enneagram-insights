import type { TypeNumber, InstinctType, WingVariant } from '../../types';

/**
 * Agent Persona - Represents a psychological profile for quiz simulation
 * Each agent embodies their type's core psychology and answers questions
 * based on their characteristic patterns of thinking/feeling/behaving
 */
export interface AgentPersona {
  type: TypeNumber;
  name: string;

  // Core Psychology
  coreFear: string;
  coreDesire: string;
  fixation: string;
  innerVoice: string;

  // Behavioral Markers
  responsePatterns: {
    // How strongly they respond to questions about certain themes (0-1)
    fearOfCorruption: number;      // Type 1
    needToBeNeeded: number;        // Type 2
    achievementDrive: number;      // Type 3
    identitySearch: number;        // Type 4
    knowledgeAccumulation: number; // Type 5
    securitySeeking: number;       // Type 6
    experienceSeeking: number;     // Type 7
    controlAssertiveness: number;  // Type 8
    peaceHarmony: number;          // Type 9
  };

  // Center resonance (how much they relate to center-specific themes)
  centerResonance: {
    gut: number;    // Action, anger, instinct
    heart: number;  // Image, shame, feelings
    head: number;   // Security, fear, thinking
  };

  // Harmonic group behavior (how they deal with problems)
  harmonicStyle: 'positive_outlook' | 'competency' | 'reactive';

  // Hornevian stance (how they move in the world)
  hornevianStance: 'assertive' | 'compliant' | 'withdrawn';
}

/**
 * Wing-Modified Agent - Agent with wing influence
 */
export interface WingAgent extends AgentPersona {
  wing: TypeNumber;
  wingInfluence: number; // 0.2-0.5 typically
  variant: WingVariant;
}

/**
 * Subtype Agent - Agent with instinct stack
 */
export interface SubtypeAgent extends AgentPersona {
  dominantInstinct: InstinctType;
  secondaryInstinct: InstinctType;
  blindSpot: InstinctType;
  isCountertype: boolean;
}

/**
 * Full Variant Agent - Complete agent with wing and instinct
 */
export interface FullVariantAgent extends AgentPersona {
  wing: TypeNumber;
  wingInfluence: number;
  variant: WingVariant;
  dominantInstinct: InstinctType;
  secondaryInstinct: InstinctType;
  blindSpot: InstinctType;
  isCountertype: boolean;
}

// Base Type Agent Personas
export const typeAgents: Record<TypeNumber, AgentPersona> = {
  1: {
    type: 1,
    name: 'The Reformer',
    coreFear: 'Being corrupt, evil, or defective',
    coreDesire: 'To be good, right, and have integrity',
    fixation: 'Resentment',
    innerVoice: 'I must be perfect. Everything should be done right.',
    responsePatterns: {
      fearOfCorruption: 0.95,
      needToBeNeeded: 0.35,
      achievementDrive: 0.55,
      identitySearch: 0.25,
      knowledgeAccumulation: 0.30, // Lowered - 1s aren't knowledge hoarders like 5s
      securitySeeking: 0.45,       // Slightly lowered
      experienceSeeking: 0.20,
      controlAssertiveness: 0.60,  // Increased - 1s have strong convictions
      peaceHarmony: 0.35,          // Lowered - 1s have active inner critic
    },
    centerResonance: { gut: 0.90, heart: 0.25, head: 0.30 }, // Stronger gut, weaker head
    harmonicStyle: 'competency',
    hornevianStance: 'compliant',
  },

  2: {
    type: 2,
    name: 'The Helper',
    coreFear: 'Being unwanted, unworthy of being loved',
    coreDesire: 'To feel loved and appreciated',
    fixation: 'Flattery',
    innerVoice: 'I must be needed. If I help enough, I will be loved.',
    responsePatterns: {
      fearOfCorruption: 0.20,     // Much lower - 2s aren't focused on correctness like 1s
      needToBeNeeded: 0.95,       // Core motivation
      achievementDrive: 0.50,     // Moderate - 2s want to be seen as successful helpers
      identitySearch: 0.35,       // Slightly higher - 2s have image concerns
      knowledgeAccumulation: 0.15, // Very low - 2s don't hoard knowledge
      securitySeeking: 0.30,      // Lower - 2s focus on relationships, not security
      experienceSeeking: 0.50,    // Higher - 2s are social and experience-oriented
      controlAssertiveness: 0.35, // Moderate - 2s influence through helping, not control
      peaceHarmony: 0.30,         // Low - 2s actively engage, not passive like 9s
    },
    centerResonance: { gut: 0.25, heart: 0.95, head: 0.15 }, // Stronger heart, weaker gut (not anger-based)
    harmonicStyle: 'positive_outlook',
    hornevianStance: 'compliant',
  },

  3: {
    type: 3,
    name: 'The Achiever',
    coreFear: 'Being worthless or without inherent value',
    coreDesire: 'To feel valuable and worthwhile',
    fixation: 'Vanity',
    innerVoice: 'I am my accomplishments. I must succeed to have value.',
    responsePatterns: {
      fearOfCorruption: 0.30,
      needToBeNeeded: 0.40,
      achievementDrive: 0.95,
      identitySearch: 0.50,
      knowledgeAccumulation: 0.40,
      securitySeeking: 0.35,
      experienceSeeking: 0.50,
      controlAssertiveness: 0.60,
      peaceHarmony: 0.30,
    },
    centerResonance: { gut: 0.40, heart: 0.85, head: 0.35 },
    harmonicStyle: 'competency',
    hornevianStance: 'assertive',
  },

  4: {
    type: 4,
    name: 'The Individualist',
    coreFear: 'Having no identity or personal significance',
    coreDesire: 'To find themselves and their significance',
    fixation: 'Melancholy',
    innerVoice: 'Something essential is missing in me. I am fundamentally different.',
    responsePatterns: {
      fearOfCorruption: 0.30,
      needToBeNeeded: 0.45,     // 4s want to be understood, not needed like 2s
      achievementDrive: 0.30,   // Lower - 4s aren't achievement-focused like 3s
      identitySearch: 0.95,     // Core motivation
      knowledgeAccumulation: 0.40,
      securitySeeking: 0.25,    // Lower - 4s aren't security-focused like 6s
      experienceSeeking: 0.60,  // Higher - 4s seek intense experiences
      controlAssertiveness: 0.30,
      peaceHarmony: 0.20,       // Much lower - 4s embrace intensity, not peace like 9s
    },
    centerResonance: { gut: 0.20, heart: 0.95, head: 0.35 }, // Very strong heart, very low gut
    harmonicStyle: 'reactive',
    hornevianStance: 'withdrawn',
  },

  5: {
    type: 5,
    name: 'The Investigator',
    coreFear: 'Being useless, helpless, or overwhelmed',
    coreDesire: 'To be capable and competent',
    fixation: 'Stinginess',
    innerVoice: 'Resources are scarce. I must conserve and not be depleted.',
    responsePatterns: {
      fearOfCorruption: 0.35,
      needToBeNeeded: 0.20,
      achievementDrive: 0.40,
      identitySearch: 0.45,
      knowledgeAccumulation: 0.95,
      securitySeeking: 0.55,
      experienceSeeking: 0.30,
      controlAssertiveness: 0.25,
      peaceHarmony: 0.45,
    },
    centerResonance: { gut: 0.25, heart: 0.30, head: 0.90 },
    harmonicStyle: 'competency',
    hornevianStance: 'withdrawn',
  },

  6: {
    type: 6,
    name: 'The Loyalist',
    coreFear: 'Being without support and guidance',
    coreDesire: 'To have security and support',
    fixation: 'Cowardice',
    innerVoice: 'The world is dangerous. I cannot trust myself to handle it.',
    responsePatterns: {
      fearOfCorruption: 0.50,      // Higher - 6s have moral concerns about loyalty
      needToBeNeeded: 0.55,        // Moderate - 6s seek connection but not like 2s
      achievementDrive: 0.30,      // Lower - 6s aren't achievement-focused
      identitySearch: 0.35,        // Lower - 6s focus on security, not identity
      knowledgeAccumulation: 0.25, // Much lower - 6s don't hoard knowledge like 5s
      securitySeeking: 0.95,       // Core motivation
      experienceSeeking: 0.20,     // Very low - 6s are cautious, avoid risky experiences
      controlAssertiveness: 0.50,  // Moderate - counterphobic aspect
      peaceHarmony: 0.45,          // Moderate - 6s can be anxious, not peaceful
    },
    centerResonance: { gut: 0.55, heart: 0.50, head: 0.75 }, // More balanced, less purely head-focused
    harmonicStyle: 'reactive',
    hornevianStance: 'compliant',
  },

  7: {
    type: 7,
    name: 'The Enthusiast',
    coreFear: 'Being deprived and trapped in pain',
    coreDesire: 'To be satisfied, content, and fulfilled',
    fixation: 'Planning',
    innerVoice: 'Pain must be avoided. Happiness is in the next experience.',
    responsePatterns: {
      fearOfCorruption: 0.20,     // Low - 7s aren't concerned with moral correctness
      needToBeNeeded: 0.30,       // Low - 7s focus on experiences, not being needed
      achievementDrive: 0.55,     // Moderate - 7s want success for freedom
      identitySearch: 0.35,       // Lower - 7s don't dwell on identity like 4s
      knowledgeAccumulation: 0.40, // Moderate - 7s learn for stimulation
      securitySeeking: 0.20,      // Very low - 7s seek freedom, not security like 6s
      experienceSeeking: 0.95,    // Core motivation
      controlAssertiveness: 0.60, // Higher - 7s are assertive about getting what they want
      peaceHarmony: 0.50,         // Moderate - 7s reframe positively but aren't passive
    },
    centerResonance: { gut: 0.50, heart: 0.35, head: 0.80 }, // More gut (assertive), less heart
    harmonicStyle: 'positive_outlook',
    hornevianStance: 'assertive',
  },

  8: {
    type: 8,
    name: 'The Challenger',
    coreFear: 'Being harmed or controlled by others',
    coreDesire: 'To protect themselves and determine their own path',
    fixation: 'Vengeance',
    innerVoice: 'I must be strong. Weakness will be exploited. Justice must be enforced.',
    responsePatterns: {
      fearOfCorruption: 0.40,
      needToBeNeeded: 0.30,
      achievementDrive: 0.55,
      identitySearch: 0.30,
      knowledgeAccumulation: 0.35,
      securitySeeking: 0.45,
      experienceSeeking: 0.55,
      controlAssertiveness: 0.95,
      peaceHarmony: 0.25,
    },
    centerResonance: { gut: 0.90, heart: 0.30, head: 0.35 },
    harmonicStyle: 'reactive',
    hornevianStance: 'assertive',
  },

  9: {
    type: 9,
    name: 'The Peacemaker',
    coreFear: 'Loss, separation, and fragmentation',
    coreDesire: 'To have inner stability and peace of mind',
    fixation: 'Indolence',
    innerVoice: 'My presence doesn\'t really matter. It\'s easier to go along.',
    responsePatterns: {
      fearOfCorruption: 0.30,
      needToBeNeeded: 0.45,
      achievementDrive: 0.25,
      identitySearch: 0.35,
      knowledgeAccumulation: 0.35,
      securitySeeking: 0.55,
      experienceSeeking: 0.35,
      controlAssertiveness: 0.20,
      peaceHarmony: 0.95,
    },
    centerResonance: { gut: 0.75, heart: 0.40, head: 0.45 },
    harmonicStyle: 'positive_outlook',
    hornevianStance: 'withdrawn',
  },
};

/**
 * Create a wing-modified agent
 */
export function createWingAgent(
  baseType: TypeNumber,
  wing: TypeNumber,
  wingInfluence: number = 0.35
): WingAgent {
  const base = typeAgents[baseType];
  const wingAgent = typeAgents[wing];

  // Blend response patterns
  const blendedPatterns = { ...base.responsePatterns };
  for (const key of Object.keys(blendedPatterns) as Array<keyof typeof blendedPatterns>) {
    blendedPatterns[key] = base.responsePatterns[key] * (1 - wingInfluence) +
                          wingAgent.responsePatterns[key] * wingInfluence;
  }

  // Blend center resonance
  const blendedCenter = {
    gut: base.centerResonance.gut * (1 - wingInfluence) + wingAgent.centerResonance.gut * wingInfluence,
    heart: base.centerResonance.heart * (1 - wingInfluence) + wingAgent.centerResonance.heart * wingInfluence,
    head: base.centerResonance.head * (1 - wingInfluence) + wingAgent.centerResonance.head * wingInfluence,
  };

  return {
    ...base,
    responsePatterns: blendedPatterns,
    centerResonance: blendedCenter,
    wing,
    wingInfluence,
    variant: `${baseType}w${wing}` as WingVariant,
  };
}

// Counter-type configurations (subtypes that look different from their core type)
const counterTypes: Record<TypeNumber, InstinctType> = {
  1: 'sx',  // SX-1 is most emotional/intense
  2: 'sp',  // SP-2 is most focused on own needs
  3: 'sp',  // SP-3 is most modest
  4: 'sp',  // SP-4 is most stoic
  5: 'sx',  // SX-5 is most relational
  6: 'sx',  // SX-6 is counterphobic
  7: 'so',  // SO-7 is most service-oriented
  8: 'so',  // SO-8 is most protective of others
  9: 'sx',  // SX-9 is most merged with partner
};

/**
 * Create a subtype-modified agent
 */
export function createSubtypeAgent(
  baseType: TypeNumber,
  dominant: InstinctType,
  secondary: InstinctType
): SubtypeAgent {
  const base = typeAgents[baseType];
  const instincts: InstinctType[] = ['sp', 'so', 'sx'];
  const blindSpot = instincts.find(i => i !== dominant && i !== secondary)!;
  const isCountertype = counterTypes[baseType] === dominant;

  // Subtypes modify the response patterns
  const modifiedPatterns = { ...base.responsePatterns };

  // Instinct-specific modifiers
  const instinctModifiers = {
    sp: {
      securitySeeking: 0.15,
      experienceSeeking: -0.10,
      peaceHarmony: 0.10,
    },
    so: {
      needToBeNeeded: 0.10,
      achievementDrive: 0.10,
      securitySeeking: 0.05,
    },
    sx: {
      experienceSeeking: 0.15,
      identitySearch: 0.10,
      controlAssertiveness: 0.05,
    },
  };

  // Apply dominant instinct modifier
  const dominantMod = instinctModifiers[dominant];
  for (const [key, value] of Object.entries(dominantMod)) {
    modifiedPatterns[key as keyof typeof modifiedPatterns] = Math.min(1, Math.max(0,
      modifiedPatterns[key as keyof typeof modifiedPatterns] + value
    ));
  }

  // Counter-types have modified center resonance and patterns
  if (isCountertype) {
    // Counter-types often look less like their core type
    const typeKey = getTypeResponseKey(baseType);
    modifiedPatterns[typeKey] = modifiedPatterns[typeKey] * 0.85;
  }

  return {
    ...base,
    responsePatterns: modifiedPatterns,
    dominantInstinct: dominant,
    secondaryInstinct: secondary,
    blindSpot,
    isCountertype,
  };
}

/**
 * Create a full variant agent with both wing and instinct
 */
export function createFullVariantAgent(
  baseType: TypeNumber,
  wing: TypeNumber,
  dominant: InstinctType,
  secondary: InstinctType,
  wingInfluence: number = 0.35
): FullVariantAgent {
  const wingAgent = createWingAgent(baseType, wing, wingInfluence);
  const subtypeAgent = createSubtypeAgent(baseType, dominant, secondary);

  // Combine both modifications
  const combinedPatterns = { ...wingAgent.responsePatterns };
  for (const key of Object.keys(combinedPatterns) as Array<keyof typeof combinedPatterns>) {
    // Average the wing and subtype modifications
    combinedPatterns[key] = (wingAgent.responsePatterns[key] + subtypeAgent.responsePatterns[key]) / 2;
  }

  return {
    ...subtypeAgent,
    responsePatterns: combinedPatterns,
    centerResonance: wingAgent.centerResonance,
    wing,
    wingInfluence,
    variant: wingAgent.variant,
  };
}

/**
 * Get the primary response key for a type
 */
function getTypeResponseKey(type: TypeNumber): keyof AgentPersona['responsePatterns'] {
  const keyMap: Record<TypeNumber, keyof AgentPersona['responsePatterns']> = {
    1: 'fearOfCorruption',
    2: 'needToBeNeeded',
    3: 'achievementDrive',
    4: 'identitySearch',
    5: 'knowledgeAccumulation',
    6: 'securitySeeking',
    7: 'experienceSeeking',
    8: 'controlAssertiveness',
    9: 'peaceHarmony',
  };
  return keyMap[type];
}

/**
 * Generate all base type agents
 */
export function getAllBaseAgents(): AgentPersona[] {
  return Object.values(typeAgents);
}

/**
 * Generate all wing variant agents (18 total)
 */
export function getAllWingAgents(): WingAgent[] {
  const agents: WingAgent[] = [];
  const wingPairs: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
    1: [9, 2], 2: [1, 3], 3: [2, 4], 4: [3, 5], 5: [4, 6],
    6: [5, 7], 7: [6, 8], 8: [7, 9], 9: [8, 1],
  };

  for (const type of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    const [w1, w2] = wingPairs[type];
    agents.push(createWingAgent(type, w1));
    agents.push(createWingAgent(type, w2));
  }

  return agents;
}

/**
 * Generate all subtype agents (27 total)
 */
export function getAllSubtypeAgents(): SubtypeAgent[] {
  const agents: SubtypeAgent[] = [];

  for (const type of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    // Just dominant instinct variants for basic testing
    agents.push(createSubtypeAgent(type, 'sp', 'so'));
    agents.push(createSubtypeAgent(type, 'so', 'sp'));
    agents.push(createSubtypeAgent(type, 'sx', 'sp'));
  }

  return agents;
}

/**
 * Generate counter-type agents specifically
 */
export function getCounterTypeAgents(): SubtypeAgent[] {
  const agents: SubtypeAgent[] = [];

  for (const [type, instinct] of Object.entries(counterTypes)) {
    const typeNum = Number(type) as TypeNumber;
    const secondary: InstinctType = instinct === 'sp' ? 'so' : 'sp';
    agents.push(createSubtypeAgent(typeNum, instinct, secondary));
  }

  return agents;
}
