import type { TypeNumber, PrimaryCenter } from '../../types';

/**
 * Tritype Descriptions
 *
 * Each tritype combines one type from each center:
 * - Gut Center (Body): 8, 9, 1
 * - Heart Center: 2, 3, 4
 * - Head Center: 5, 6, 7
 *
 * The tritype code is ordered by the primary type's center.
 */

export type InstinctualSubtype = 'sp' | 'so' | 'sx';

export interface SubtypeVariation {
  title: string;
  focus: string;
  blindspot: string;
  relationships: string;
  stressLoop: string;
}

export interface TritypeInfo {
  code: string;
  name: string;
  archetype: string;
  description: string;
  strengths: string[];
  challenges: string[];
  innerExperience: string;
  subtypes?: Record<InstinctualSubtype, SubtypeVariation>;
}

// Center groupings
export const CENTERS = {
  gut: [8, 9, 1] as TypeNumber[],
  heart: [2, 3, 4] as TypeNumber[],
  head: [5, 6, 7] as TypeNumber[],
};

export const CENTER_NAMES: Record<string, string> = {
  gut: 'Body/Gut',
  heart: 'Heart',
  head: 'Head',
};

const getPrimaryCenterByType = (type: TypeNumber): PrimaryCenter | null => {
  if (CENTERS.gut.includes(type)) return 'gut';
  if (CENTERS.heart.includes(type)) return 'heart';
  if (CENTERS.head.includes(type)) return 'head';
  return null;
};

const buildTritypeSequence = (
  gut: TypeNumber,
  heart: TypeNumber,
  head: TypeNumber,
  primaryCenter: PrimaryCenter
): TypeNumber[] => {
  switch (primaryCenter) {
    case 'gut':
      return [gut, heart, head];
    case 'heart':
      return [heart, gut, head];
    case 'head':
      return [head, gut, heart];
    default:
      return [gut, heart, head];
  }
};

// Generate a unique key from tritype components (primary center first)
export function getTritypeKey(
  gut: TypeNumber,
  heart: TypeNumber,
  head: TypeNumber,
  primaryCenter: PrimaryCenter = 'gut'
): string {
  return buildTritypeSequence(gut, heart, head, primaryCenter).join('-');
}

// Generate the display code from tritype components (primary center first)
export function getTritypeCode(
  gut: TypeNumber,
  heart: TypeNumber,
  head: TypeNumber,
  primaryCenter: PrimaryCenter = 'gut'
): string {
  return buildTritypeSequence(gut, heart, head, primaryCenter).join('');
}

// All 81 tritype descriptions
export const tritypeDescriptions: Record<string, TritypeInfo> = {
  // ============ GUT-LED TRITYPES (8, 9, 1 primary) ============

  // 8-2-5
  '8-2-5': {
    code: '825',
    name: 'The Strategist',
    archetype: 'Powerful Protector',
    description:
      'Combines the strength and directness of 8, the warmth of 2, and the analytical depth of 5. You protect and provide for those you care about while maintaining your independence.',
    strengths: ['Protective leadership', 'Strategic thinking', 'Emotional intelligence'],
    challenges: ['Vulnerability avoidance', 'Over-control', 'Isolation when stressed'],
    innerExperience:
      'You feel most alive when championing causes and people you believe in. Your mind constantly strategizes how to protect and provide, while part of you quietly observes from a safe distance.',
    subtypes: {
      sp: {
        title: 'The Provider',
        focus: 'Building material security and resources to protect loved ones',
        blindspot: 'May equate love with providing, neglecting emotional presence',
        relationships: 'Shows care through practical support and resource sharing',
        stressLoop: 'Withdraws into work and acquisition when feeling vulnerable'
      },
      so: {
        title: 'The Protector Chief',
        focus: 'Building alliances and protecting community interests',
        blindspot: 'May over-identify with leadership role, losing personal boundaries',
        relationships: 'Creates loyal inner circles, fierce about group welfare',
        stressLoop: 'Becomes suspicious of outsiders and overly controlling of group dynamics'
      },
      sx: {
        title: 'The Passionate Guardian',
        focus: 'Intense one-on-one bonds with fierce protective energy',
        blindspot: 'May become possessive or overwhelming in close relationships',
        relationships: 'Deep, intense connections with chosen few; all-or-nothing loyalty',
        stressLoop: 'Oscillates between smothering protection and cold withdrawal'
      }
    }
  },
  '8-2-6': {
    code: '826',
    name: 'The Guardian',
    archetype: 'Loyal Protector',
    description:
      'Combines the power of 8, the care of 2, and the loyalty of 6. You fiercely protect your inner circle and remain vigilant against threats.',
    strengths: ['Fierce loyalty', 'Protective instincts', 'Community building'],
    challenges: ['Suspicion of outsiders', 'Over-protection', 'Anxiety about threats'],
    innerExperience:
      'You carry a deep sense of responsibility for the safety and wellbeing of your people. Your strength is in service of love, though trust must be earned.',
    subtypes: {
      sp: {
        title: 'The Fortress Builder',
        focus: 'Creating secure environments and reliable systems for loved ones',
        blindspot: 'May become rigid about routines and overly focused on worst-case scenarios',
        relationships: 'Demonstrates love through preparation and protection of home base',
        stressLoop: 'Hoards resources and becomes increasingly controlling about safety'
      },
      so: {
        title: 'The Tribal Defender',
        focus: 'Building strong communities and defending group values',
        blindspot: 'May create us-vs-them dynamics and become paranoid about group threats',
        relationships: 'Deeply invested in group loyalty; expects reciprocal commitment',
        stressLoop: 'Becomes hypervigilant about loyalty and tests others constantly'
      },
      sx: {
        title: 'The Fierce Ally',
        focus: 'Intense protective bonds with chosen individuals',
        blindspot: 'May become jealous or possessive, demanding exclusive loyalty',
        relationships: 'All-consuming devotion to partner; fights fiercely for the relationship',
        stressLoop: 'Alternates between clingy protection and suspicious withdrawal'
      }
    }
  },
  '8-2-7': {
    code: '827',
    name: 'The Maverick',
    archetype: 'Charismatic Powerhouse',
    description:
      'Combines the intensity of 8, the people focus of 2, and the enthusiasm of 7. You lead with charisma and create exciting experiences for those around you.',
    strengths: ['Magnetic presence', 'Inspiring energy', 'Generous spirit'],
    challenges: ['Impulsivity', 'Avoiding deeper pain', 'Dominating conversations'],
    innerExperience:
      'Life feels like an adventure to share with others. You want to lead people toward joy and freedom, protecting them from anything that would diminish their spark.',
    subtypes: {
      sp: {
        title: 'The Generous Host',
        focus: 'Creating abundance and comfort for others to enjoy',
        blindspot: 'May overextend resources seeking to impress or provide',
        relationships: 'Shows love through experiences, gifts, and shared pleasures',
        stressLoop: 'Overworks to maintain lifestyle, crashes into hedonistic escape'
      },
      so: {
        title: 'The Social Catalyst',
        focus: 'Energizing groups and creating memorable collective experiences',
        blindspot: 'May dominate social situations or spread too thin across relationships',
        relationships: 'The life of the party who brings people together',
        stressLoop: 'Becomes manic about social activity to avoid feeling alone'
      },
      sx: {
        title: 'The Magnetic Lover',
        focus: 'Intense romantic adventures and passionate connections',
        blindspot: 'May confuse intensity with intimacy, seeking constant excitement',
        relationships: 'Sweeps partners into grand romantic adventures',
        stressLoop: 'Chases new excitement when current relationship feels routine'
      }
    }
  },
  '8-3-5': {
    code: '835',
    name: 'The Executive',
    archetype: 'Strategic Achiever',
    description:
      'Combines the power of 8, the ambition of 3, and the analysis of 5. You pursue goals with intensity while maintaining strategic distance.',
    strengths: ['Decisive leadership', 'Goal achievement', 'Intellectual rigor'],
    challenges: ['Workaholism', 'Emotional distance', 'Impatience with others'],
    innerExperience:
      'Success and competence drive you. You see opportunities others miss and have the power to seize them, though you may struggle to slow down.',
    subtypes: {
      sp: {
        title: 'The Empire Builder',
        focus: 'Building wealth, assets, and material success',
        blindspot: 'May reduce life to acquisitions, neglecting relationships entirely',
        relationships: 'Partners must fit the success narrative; practical over romantic',
        stressLoop: 'Works obsessively, treating exhaustion as weakness'
      },
      so: {
        title: 'The Power Player',
        focus: 'Climbing hierarchies and gaining institutional influence',
        blindspot: 'May sacrifice authenticity for political positioning',
        relationships: 'Networks strategically; values connections that advance goals',
        stressLoop: 'Becomes paranoid about reputation and competitors'
      },
      sx: {
        title: 'The Dominant Achiever',
        focus: 'Being the most impressive person in intimate contexts',
        blindspot: 'May compete with partners or need to always be "the successful one"',
        relationships: 'Intense focus on partner but still achievement-oriented',
        stressLoop: 'Withdraws into work when intimacy feels threatening'
      }
    }
  },
  '8-3-6': {
    code: '836',
    name: 'The General',
    archetype: 'Commanding Leader',
    description:
      'Combines the strength of 8, the achievement of 3, and the loyalty of 6. You lead teams toward success while building secure structures.',
    strengths: ['Team leadership', 'Results-driven', 'Builds strong systems'],
    challenges: ['Control issues', 'Image management', 'Anxiety under pressure'],
    innerExperience:
      'You need to win, but not alone—you build armies. Success means nothing without loyal people beside you, but trusting fully is hard.',
    subtypes: {
      sp: {
        title: 'The Operations Commander',
        focus: 'Building secure, efficient systems that deliver results',
        blindspot: 'May become rigid about processes, micromanaging for security',
        relationships: 'Reliable but may prioritize stability over emotional connection',
        stressLoop: 'Doubles down on control when feeling anxious about outcomes'
      },
      so: {
        title: 'The Coalition Leader',
        focus: 'Building winning teams and organizational success',
        blindspot: 'May become overly political or anxious about group perception',
        relationships: 'Invests heavily in team loyalty; expects commitment',
        stressLoop: 'Becomes suspicious of disloyalty and over-monitors team'
      },
      sx: {
        title: 'The Champion Partner',
        focus: 'Achieving success together with chosen partner or ally',
        blindspot: 'May need partner to validate success or share exactly their goals',
        relationships: 'Power couple dynamic; intense joint ambition',
        stressLoop: 'Projects anxieties onto partner, becoming controlling'
      }
    }
  },
  '8-3-7': {
    code: '837',
    name: 'The Entrepreneur',
    archetype: 'Dynamic Achiever',
    description:
      'Combines the power of 8, the drive of 3, and the vision of 7. You pursue success with boundless energy and see possibilities everywhere.',
    strengths: ['Visionary leadership', 'Infectious enthusiasm', 'Bold action'],
    challenges: ['Over-extension', 'Impatience', 'Avoiding failure feelings'],
    innerExperience:
      'The world is full of opportunities waiting to be seized. You move fast, think big, and bring others along for the ride.',
    subtypes: {
      sp: {
        title: 'The Venture Builder',
        focus: 'Creating multiple streams of income and material opportunity',
        blindspot: 'May chase too many opportunities, finishing none',
        relationships: 'Partner must support the entrepreneurial lifestyle',
        stressLoop: 'Starts new projects to avoid facing failures in current ones'
      },
      so: {
        title: 'The Influencer',
        focus: 'Building public success and inspiring others to action',
        blindspot: 'May prioritize image over substance, chasing clout',
        relationships: 'Networks constantly; everyone is a potential opportunity',
        stressLoop: 'Becomes frantic about maintaining public momentum'
      },
      sx: {
        title: 'The Passionate Visionary',
        focus: 'Pursuing grand dreams with intense personal investment',
        blindspot: 'May become obsessed with "the next big thing" in relationships too',
        relationships: 'Needs partner who shares the vision and matches the energy',
        stressLoop: 'Jumps between intense focuses, burning out partners'
      }
    }
  },
  '8-4-5': {
    code: '845',
    name: 'The Alchemist',
    archetype: 'Intense Transformer',
    description:
      'Combines the intensity of 8, the depth of 4, and the insight of 5. You transform pain into power through deep understanding.',
    strengths: ['Emotional intensity', 'Profound insight', 'Transformative presence'],
    challenges: ['Isolation', 'Intensity overwhelms others', 'Difficulty with lightness'],
    innerExperience:
      'You feel everything deeply and need to understand it completely. Your power comes from transmuting darkness into something meaningful.',
    subtypes: {
      sp: {
        title: 'The Solitary Transformer',
        focus: 'Mastering survival through deep self-knowledge and resources',
        blindspot: 'May become isolated, hoarding both knowledge and material security',
        relationships: 'Few but profound connections; needs much alone time',
        stressLoop: 'Withdraws completely, building fortress of solitude'
      },
      so: {
        title: 'The Dark Prophet',
        focus: 'Transforming collective pain through insight and expression',
        blindspot: 'May feel perpetually misunderstood or like an outsider',
        relationships: 'Seeks recognition for unique perspective; feels alien in groups',
        stressLoop: 'Alternates between trying to connect and bitter withdrawal'
      },
      sx: {
        title: 'The Intense Mystic',
        focus: 'Deep transformation through intense one-on-one connection',
        blindspot: 'May overwhelm partners with emotional intensity and demands',
        relationships: 'Seeks soul-merging depth; surface connection is intolerable',
        stressLoop: 'Cycles through intense connection and devastating withdrawal'
      }
    }
  },
  '8-4-6': {
    code: '846',
    name: 'The Rebel',
    archetype: 'Passionate Fighter',
    description:
      'Combines the defiance of 8, the authenticity of 4, and the questioning of 6. You fight against injustice and inauthenticity.',
    strengths: ['Authentic expression', 'Courage under fire', 'Fights for underdogs'],
    challenges: ['Reactivity', 'Distrust', 'Self-doubt mixed with defiance'],
    innerExperience:
      "You see through facades and can't stomach pretense. Your anger rises against anything false, even as part of you questions your own standing.",
    subtypes: {
      sp: {
        title: 'The Survivalist Rebel',
        focus: 'Fighting for material security and authentic self-reliance',
        blindspot: 'May become paranoid about resources and overly defensive',
        relationships: 'Needs partner who proves loyalty through action',
        stressLoop: 'Hoards resources while raging against "the system"'
      },
      so: {
        title: 'The Revolutionary',
        focus: 'Challenging social injustice and institutional hypocrisy',
        blindspot: 'May alienate allies through uncompromising stands',
        relationships: 'Bonds over shared causes; tests loyalty constantly',
        stressLoop: 'Becomes increasingly suspicious of group motives'
      },
      sx: {
        title: 'The Passionate Insurgent',
        focus: 'Intense personal battles and one-on-one authenticity demands',
        blindspot: 'May create conflict to test partner loyalty',
        relationships: 'Push-pull intensity; craves authenticity but fears vulnerability',
        stressLoop: 'Oscillates between fierce attachment and suspicious rejection'
      }
    }
  },
  '8-4-7': {
    code: '847',
    name: 'The Phoenix',
    archetype: 'Intense Visionary',
    description:
      'Combines the power of 8, the emotional depth of 4, and the optimism of 7. You rise from darkness toward light with fierce determination.',
    strengths: ['Resilience', 'Creative vision', 'Passionate expression'],
    challenges: ['Emotional volatility', 'Restlessness', 'Difficulty with routine'],
    innerExperience:
      'You contain multitudes—intense depths and soaring heights. You refuse to be limited by pain and always seek the next transformation.',
    subtypes: {
      sp: {
        title: 'The Creative Survivor',
        focus: 'Building security through creative work and self-reinvention',
        blindspot: 'May swing between depressive isolation and manic creation',
        relationships: 'Needs grounding partner; cycles of intensity and withdrawal',
        stressLoop: 'Throws self into projects to escape emotional pain'
      },
      so: {
        title: 'The Dramatic Visionary',
        focus: 'Inspiring others through personal transformation story',
        blindspot: 'May dramatize struggles for recognition or validation',
        relationships: 'Needs audience for emotional expression; charismatic but volatile',
        stressLoop: 'Becomes theatrical about pain when feeling unseen'
      },
      sx: {
        title: 'The Transformative Lover',
        focus: 'Intense romantic connections as vehicle for rebirth',
        blindspot: 'May use relationships as escape or transformation vehicle',
        relationships: 'All-consuming passion; needs partner who can handle intensity',
        stressLoop: 'Seeks new relationships for the transformation high'
      }
    }
  },

  // 9-led tritypes
  '9-2-5': {
    code: '925',
    name: 'The Healer',
    archetype: 'Gentle Sage',
    description:
      'Combines the peace of 9, the warmth of 2, and the wisdom of 5. You create healing spaces through quiet presence and deep understanding.',
    strengths: ['Calming presence', 'Empathic wisdom', 'Non-judgmental listening'],
    challenges: ['Passivity', 'Neglecting own needs', 'Withdrawal under stress'],
    innerExperience:
      'You sense the suffering in others and want to soothe it without intrusion. Knowledge and love flow through you best when you remain still.',
    subtypes: {
      sp: {
        title: 'The Sanctuary Keeper',
        focus: 'Creating safe, comfortable spaces for healing and rest',
        blindspot: 'May merge with home environment, becoming too comfortable to grow',
        relationships: 'Creates nurturing home base; shows love through domestic comfort',
        stressLoop: 'Retreats into comfortable routines, numbing out with food or media'
      },
      so: {
        title: 'The Community Healer',
        focus: 'Bringing peace and understanding to groups and communities',
        blindspot: 'May lose self in group needs, becoming invisible helper',
        relationships: 'Deeply attuned to group dynamics; struggles with own needs',
        stressLoop: 'Over-gives to community while becoming increasingly depleted'
      },
      sx: {
        title: 'The Intimate Healer',
        focus: 'Deep one-on-one healing connections and merging',
        blindspot: 'May lose identity in partner, becoming who they need',
        relationships: 'Profound intimacy but risks complete self-abandonment',
        stressLoop: 'Merges completely with partner, losing all sense of self'
      }
    }
  },
  '9-2-6': {
    code: '926',
    name: 'The Supporter',
    archetype: 'Steady Caregiver',
    description:
      'Combines the harmony of 9, the helpfulness of 2, and the loyalty of 6. You create stable, supportive environments for others.',
    strengths: ['Reliable support', 'Community harmony', 'Steady presence'],
    challenges: ['Over-accommodation', 'Anxiety suppression', 'Losing self in others'],
    innerExperience:
      "You want everyone to feel safe and cared for. Your own needs often feel less important than keeping the peace and helping others.",
    subtypes: {
      sp: {
        title: 'The Homemaker',
        focus: 'Creating secure, comfortable environments for family',
        blindspot: 'May sacrifice all personal needs for household stability',
        relationships: 'Shows love through reliable care; struggles to ask for help',
        stressLoop: 'Becomes anxiously focused on domestic security details'
      },
      so: {
        title: 'The Community Pillar',
        focus: 'Being the reliable supporter everyone can count on',
        blindspot: 'May become anxious about group acceptance and belonging',
        relationships: 'Invests heavily in being needed; fears abandonment by group',
        stressLoop: 'Over-commits to others, becoming resentful but unable to say no'
      },
      sx: {
        title: 'The Devoted Partner',
        focus: 'Complete dedication to significant other',
        blindspot: 'May lose all identity in partnership, becoming anxiously attached',
        relationships: 'Total devotion; needs constant reassurance of bond',
        stressLoop: 'Becomes clingy and anxious when partner needs space'
      }
    }
  },
  '9-2-7': {
    code: '927',
    name: 'The Peacemaker',
    archetype: 'Harmonious Optimist',
    description:
      'Combines the peace of 9, the warmth of 2, and the positivity of 7. You bring lightness and harmony wherever you go.',
    strengths: ['Positive mediation', 'Genuine warmth', 'Adaptable ease'],
    challenges: ['Conflict avoidance', 'Glossing over problems', 'Scattered attention'],
    innerExperience:
      "Life feels best when everyone is happy and connected. You'd rather find common ground than dwell on what divides.",
    subtypes: {
      sp: {
        title: 'The Comfort Creator',
        focus: 'Building pleasant environments and enjoyable routines',
        blindspot: 'May use comfort and pleasure to avoid deeper issues',
        relationships: 'Makes life pleasant for others; avoids "heavy" conversations',
        stressLoop: 'Escapes into comfort eating, entertainment, or sleep'
      },
      so: {
        title: 'The Social Harmonizer',
        focus: 'Creating fun, connected group experiences',
        blindspot: 'May keep things superficial to maintain group harmony',
        relationships: 'Everyone\'s friend; struggles with deeper individual connections',
        stressLoop: 'Spreads too thin socially, becoming exhausted and withdrawn'
      },
      sx: {
        title: 'The Enchanting Partner',
        focus: 'Creating magical, positive romantic connections',
        blindspot: 'May avoid relationship problems through charm and positivity',
        relationships: 'Brings lightness and joy; struggles when things get heavy',
        stressLoop: 'Distracts from relationship issues with fun activities'
      }
    }
  },
  '9-3-5': {
    code: '935',
    name: 'The Chameleon',
    archetype: 'Adaptive Achiever',
    description:
      'Combines the adaptability of 9, the success-focus of 3, and the competence of 5. You achieve quietly while maintaining inner peace.',
    strengths: ['Calm competence', 'Adaptive success', 'Efficient execution'],
    challenges: ['Identity confusion', 'Procrastination', 'Emotional detachment'],
    innerExperience:
      'You can succeed without the drama. Your path is quieter—achieving through understanding rather than force.',
    subtypes: {
      sp: {
        title: 'The Quiet Achiever',
        focus: 'Building material security through steady, competent work',
        blindspot: 'May disconnect from ambition, settling for comfortable mediocrity',
        relationships: 'Reliable provider but emotionally distant',
        stressLoop: 'Procrastinates on growth, numbing out in comfortable routines'
      },
      so: {
        title: 'The Adaptive Professional',
        focus: 'Succeeding by fitting into organizational expectations',
        blindspot: 'May completely lose sense of self in professional role',
        relationships: 'Performs relationship roles well but struggles with authenticity',
        stressLoop: 'Becomes a people-pleasing shell, unsure of own desires'
      },
      sx: {
        title: 'The Mirroring Partner',
        focus: 'Being the perfect partner by adapting to their desires',
        blindspot: 'May become whoever partner needs, losing all identity',
        relationships: 'Chameleons to partner\'s preferences; struggles with own wants',
        stressLoop: 'Completely merges with partner\'s identity and goals'
      }
    }
  },
  '9-3-6': {
    code: '936',
    name: 'The Mediator',
    archetype: 'Diplomatic Achiever',
    description:
      'Combines the harmony of 9, the achievement of 3, and the loyalty of 6. You succeed by bringing people together.',
    strengths: ['Diplomatic skill', 'Team harmony', 'Reliable performance'],
    challenges: ['People-pleasing', 'Avoiding confrontation', 'Self-doubt'],
    innerExperience:
      'Success means nothing if people are unhappy. You work hard while keeping everyone on the same page.',
    subtypes: {
      sp: {
        title: 'The Steady Performer',
        focus: 'Reliable achievement that maintains security and stability',
        blindspot: 'May stay in unfulfilling situations for safety',
        relationships: 'Dependable but may struggle to express deeper needs',
        stressLoop: 'Works anxiously while avoiding any rocking of the boat'
      },
      so: {
        title: 'The Team Player',
        focus: 'Achieving through group harmony and collaborative success',
        blindspot: 'May suppress own ambitions to keep group happy',
        relationships: 'Invested in being valued team member; fears exclusion',
        stressLoop: 'Becomes anxiously compliant, losing all sense of direction'
      },
      sx: {
        title: 'The Supportive Partner',
        focus: 'Achieving success together with significant other',
        blindspot: 'May make partner\'s success their entire identity',
        relationships: 'Devoted supporter who may neglect own achievements',
        stressLoop: 'Becomes anxiously focused on partner\'s approval'
      }
    }
  },
  '9-3-7': {
    code: '937',
    name: 'The Ambassador',
    archetype: 'Charming Peacemaker',
    description:
      'Combines the ease of 9, the charm of 3, and the enthusiasm of 7. You make success look effortless and enjoyable.',
    strengths: ['Social grace', 'Effortless charm', 'Positive energy'],
    challenges: ['Superficiality', 'Avoiding depth', 'Identity diffusion'],
    innerExperience:
      'Why make things hard when they can be pleasant? You flow toward success while keeping things light.',
    subtypes: {
      sp: {
        title: 'The Comfortable Achiever',
        focus: 'Success that maintains pleasant lifestyle and comfort',
        blindspot: 'May avoid challenging growth that disrupts comfort',
        relationships: 'Easy-going partner focused on maintaining pleasant life',
        stressLoop: 'Escapes into consumption and comfort when stressed'
      },
      so: {
        title: 'The Social Star',
        focus: 'Charming success in social and professional networks',
        blindspot: 'May be all surface, avoiding any depth or conflict',
        relationships: 'Popular and charming but struggles with intimacy',
        stressLoop: 'Spreads thin across social obligations, losing self'
      },
      sx: {
        title: 'The Charming Lover',
        focus: 'Creating exciting, successful partnerships',
        blindspot: 'May avoid relationship depth through charm and distraction',
        relationships: 'Magnetic and fun but struggles when things get serious',
        stressLoop: 'Uses charm to deflect from real issues in relationship'
      }
    }
  },
  '9-4-5': {
    code: '945',
    name: 'The Contemplative',
    archetype: 'Introspective Dreamer',
    description:
      'Combines the withdrawal of 9, the depth of 4, and the analysis of 5. You live in a rich inner world of meaning and thought.',
    strengths: ['Deep introspection', 'Creative insight', 'Unique perspective'],
    challenges: ['Paralysis', 'Isolation', 'Difficulty with action'],
    innerExperience:
      'Your inner world is vast and meaningful. Outer demands often feel like interruptions to something more important happening inside.',
    subtypes: {
      sp: {
        title: 'The Hermit Artist',
        focus: 'Creating meaningful work in solitary, comfortable environments',
        blindspot: 'May become completely isolated, lost in inner world',
        relationships: 'Needs much alone time; struggles to engage consistently',
        stressLoop: 'Withdraws completely into fantasy and comfort'
      },
      so: {
        title: 'The Philosophical Observer',
        focus: 'Understanding group dynamics from a contemplative distance',
        blindspot: 'May feel alien to groups while longing to belong',
        relationships: 'Observes from edges; struggles to fully participate',
        stressLoop: 'Becomes melancholic about social disconnection'
      },
      sx: {
        title: 'The Deep Romantic',
        focus: 'Profound intimate connections that honor inner depth',
        blindspot: 'May idealize relationships while struggling with real intimacy',
        relationships: 'Seeks soul-deep connection but may withdraw when found',
        stressLoop: 'Alternates between longing for connection and withdrawing'
      }
    }
  },
  '9-4-6': {
    code: '946',
    name: 'The Seeker',
    archetype: 'Searching Soul',
    description:
      'Combines the merging of 9, the longing of 4, and the doubt of 6. You seek meaning while questioning everything.',
    strengths: ['Authentic seeking', 'Emotional honesty', 'Loyal to values'],
    challenges: ['Self-doubt', 'Melancholy', 'Decision paralysis'],
    innerExperience:
      "Something is missing and you're not sure what. You search for meaning while doubting whether you'll ever find it.",
    subtypes: {
      sp: {
        title: 'The Tenacious Doubter',
        focus: 'Finding security through meaning and emotional grounding',
        blindspot: 'May become paralyzed by anxiety about survival and identity',
        relationships: 'Seeks stable partner who provides emotional anchor',
        stressLoop: 'Withdraws into anxious rumination about security'
      },
      so: {
        title: 'The Community Seeker',
        focus: 'Finding identity and meaning through group belonging',
        blindspot: 'May feel perpetually like an outsider despite longing to belong',
        relationships: 'Seeks tribe but constantly questions if they truly fit',
        stressLoop: 'Becomes anxiously focused on social acceptance'
      },
      sx: {
        title: 'The Intense Searcher',
        focus: 'Finding "the One" who will complete and understand them',
        blindspot: 'May idealize partners then feel disappointed by reality',
        relationships: 'Deep longing for soul connection; push-pull dynamics',
        stressLoop: 'Oscillates between clinging and withdrawing from partner'
      }
    }
  },
  '9-4-7': {
    code: '947',
    name: 'The Dreamer',
    archetype: 'Imaginative Idealist',
    description:
      'Combines the imagination of 9, the creativity of 4, and the vision of 7. You dream beautiful futures while staying present.',
    strengths: ['Creative vision', 'Gentle optimism', 'Artistic sensitivity'],
    challenges: ['Fantasy escape', 'Difficulty with reality', 'Scattered focus'],
    innerExperience:
      'The world could be so beautiful. You dream of possibilities while sometimes forgetting to take the steps to get there.',
    subtypes: {
      sp: {
        title: 'The Comfortable Dreamer',
        focus: 'Creating beautiful, comfortable spaces for imagination',
        blindspot: 'May escape into fantasy to avoid practical demands',
        relationships: 'Brings creativity to domestic life; avoids mundane reality',
        stressLoop: 'Retreats into comfort and daydreaming when stressed'
      },
      so: {
        title: 'The Visionary Artist',
        focus: 'Sharing creative visions with the world',
        blindspot: 'May feel unappreciated for unique perspective',
        relationships: 'Seeks community of fellow dreamers and creatives',
        stressLoop: 'Becomes melancholic when visions aren\'t recognized'
      },
      sx: {
        title: 'The Romantic Dreamer',
        focus: 'Creating magical, transformative romantic connections',
        blindspot: 'May prefer fantasy of relationship to reality',
        relationships: 'Brings poetry and magic; struggles with mundane partnership',
        stressLoop: 'Escapes into romantic fantasy when reality disappoints'
      }
    }
  },

  // 1-led tritypes
  '1-2-5': {
    code: '125',
    name: 'The Mentor',
    archetype: 'Principled Teacher',
    description:
      'Combines the standards of 1, the care of 2, and the knowledge of 5. You improve others through wise and principled guidance.',
    strengths: ['Ethical teaching', 'Genuine care', 'Deep knowledge'],
    challenges: ['Perfectionism', 'Over-helping', 'Critical judgment'],
    innerExperience:
      "You see how things could be better and feel compelled to help others get there. Your standards come from love, even when they feel harsh.",
    subtypes: {
      sp: {
        title: 'The Practical Mentor',
        focus: 'Teaching practical skills and self-sufficiency',
        blindspot: 'May become rigid about "right" ways to do things',
        relationships: 'Shows care through teaching and correcting',
        stressLoop: 'Becomes increasingly critical when help isn\'t "properly" received'
      },
      so: {
        title: 'The Community Educator',
        focus: 'Improving groups through principled teaching',
        blindspot: 'May become self-righteous about community standards',
        relationships: 'Invests in group improvement; can be preachy',
        stressLoop: 'Becomes frustrated when others don\'t meet standards'
      },
      sx: {
        title: 'The Devoted Guide',
        focus: 'Deep mentoring relationships with chosen individuals',
        blindspot: 'May become possessive or controlling in close bonds',
        relationships: 'Intensely invested in partner\'s improvement',
        stressLoop: 'Criticizes partner "for their own good"'
      }
    }
  },
  '1-2-6': {
    code: '126',
    name: 'The Supporter',
    archetype: 'Dutiful Helper',
    description:
      'Combines the duty of 1, the service of 2, and the loyalty of 6. You serve others with principled dedication.',
    strengths: ['Reliable service', 'Principled care', 'Community dedication'],
    challenges: ['Rigidity', 'Anxiety about doing right', 'Over-responsibility'],
    innerExperience:
      'Doing the right thing for the right people matters deeply. You serve tirelessly while worrying if it\'s enough.',
    subtypes: {
      sp: {
        title: 'The Dutiful Caretaker',
        focus: 'Providing practical support and security for loved ones',
        blindspot: 'May become anxiously rigid about household duties',
        relationships: 'Shows love through reliable service; worries about doing enough',
        stressLoop: 'Becomes obsessive about responsibilities when anxious'
      },
      so: {
        title: 'The Community Servant',
        focus: 'Serving group needs with principled dedication',
        blindspot: 'May become martyred or resentful about group duties',
        relationships: 'Deeply invested in community; anxious about standing',
        stressLoop: 'Over-commits to group while worrying about belonging'
      },
      sx: {
        title: 'The Loyal Partner',
        focus: 'Devoted service to significant other',
        blindspot: 'May become anxiously controlling in relationships',
        relationships: 'Total dedication to partner; needs reassurance',
        stressLoop: 'Becomes increasingly worried about relationship security'
      }
    }
  },
  '1-2-7': {
    code: '127',
    name: 'The Crusader',
    archetype: 'Idealistic Advocate',
    description:
      'Combines the idealism of 1, the warmth of 2, and the enthusiasm of 7. You advocate for better futures with infectious energy.',
    strengths: ['Inspiring advocacy', 'Warm idealism', 'Positive change-making'],
    challenges: ['Frustration with imperfection', 'Over-extension', 'Impatience'],
    innerExperience:
      'The world should be better, and you want to help make it so—joyfully, energetically, with everyone included.',
    subtypes: {
      sp: {
        title: 'The Practical Idealist',
        focus: 'Creating better systems and environments',
        blindspot: 'May become frustrated when practical improvements don\'t happen fast enough',
        relationships: 'Brings enthusiasm to domestic improvement',
        stressLoop: 'Starts many improvement projects, finishes few'
      },
      so: {
        title: 'The Social Reformer',
        focus: 'Championing causes and inspiring collective change',
        blindspot: 'May become preachy or burn out on causes',
        relationships: 'Bonds over shared ideals; can neglect individual connections',
        stressLoop: 'Becomes frustrated when groups don\'t embrace vision'
      },
      sx: {
        title: 'The Passionate Advocate',
        focus: 'Transforming people through enthusiasm and idealism',
        blindspot: 'May try to "fix" partners or become disappointed in them',
        relationships: 'Intense desire to help partner grow; can be overwhelming',
        stressLoop: 'Becomes critical when partner doesn\'t share enthusiasm'
      }
    }
  },
  '1-3-5': {
    code: '135',
    name: 'The Expert',
    archetype: 'Competent Perfectionist',
    description:
      'Combines the standards of 1, the achievement of 3, and the analysis of 5. You pursue excellence through deep expertise.',
    strengths: ['Mastery pursuit', 'Efficient excellence', 'Objective standards'],
    challenges: ['Perfectionism', 'Emotional distance', 'Over-work'],
    innerExperience:
      'Excellence requires discipline and knowledge. You hold yourself to standards others might find exhausting.',
    subtypes: {
      sp: {
        title: 'The Technical Master',
        focus: 'Achieving excellence through specialized expertise',
        blindspot: 'May become isolated in pursuit of mastery',
        relationships: 'Values competent partners; struggles with emotional intimacy',
        stressLoop: 'Withdraws into work when personal life feels chaotic'
      },
      so: {
        title: 'The Professional Expert',
        focus: 'Being recognized as the authority in their field',
        blindspot: 'May become overly focused on professional reputation',
        relationships: 'Networks for professional advancement; struggles with vulnerability',
        stressLoop: 'Works obsessively to maintain expert status'
      },
      sx: {
        title: 'The Exacting Partner',
        focus: 'Excellence in intimate relationships and chosen pursuits',
        blindspot: 'May hold partners to impossible standards',
        relationships: 'Seeks highly competent partners; can be critical',
        stressLoop: 'Becomes coldly critical when intimacy feels imperfect'
      }
    }
  },
  '1-3-6': {
    code: '136',
    name: 'The Taskmaster',
    archetype: 'Efficient Organizer',
    description:
      'Combines the structure of 1, the drive of 3, and the security-focus of 6. You achieve through systematic excellence.',
    strengths: ['Organized achievement', 'Reliable results', 'Strong work ethic'],
    challenges: ['Rigidity', 'Workaholism', 'Fear of failure'],
    innerExperience:
      'Success comes from doing things right. You build structures that work and worry when they don\'t.',
    subtypes: {
      sp: {
        title: 'The Systems Builder',
        focus: 'Creating secure, efficient structures for success',
        blindspot: 'May become rigidly attached to systems and routines',
        relationships: 'Provides stability but may be inflexible',
        stressLoop: 'Becomes anxiously controlling about processes'
      },
      so: {
        title: 'The Organizational Leader',
        focus: 'Building successful teams through structure and accountability',
        blindspot: 'May become obsessed with organizational politics and standing',
        relationships: 'Invested in team success; expects loyalty and results',
        stressLoop: 'Becomes paranoid about team performance and loyalty'
      },
      sx: {
        title: 'The Achievement Partner',
        focus: 'Building success together with significant other',
        blindspot: 'May pressure partner to achieve or maintain standards',
        relationships: 'Power couple dynamic; can become anxiously critical',
        stressLoop: 'Projects work anxiety onto relationship'
      }
    }
  },
  '1-3-7': {
    code: '137',
    name: 'The Achiever',
    archetype: 'Optimistic Perfectionist',
    description:
      'Combines the standards of 1, the ambition of 3, and the optimism of 7. You pursue success with principled enthusiasm.',
    strengths: ['Driven idealism', 'Positive achievement', 'Energetic improvement'],
    challenges: ['Perfectionism', 'Over-commitment', 'Difficulty with failure'],
    innerExperience:
      'You can have excellence AND enjoyment. Why settle for anything less than the best possible outcome?',
    subtypes: {
      sp: {
        title: 'The Lifestyle Perfectionist',
        focus: 'Creating the perfect life through achievement and optimization',
        blindspot: 'May chase perfection in lifestyle at expense of depth',
        relationships: 'Wants the "perfect" relationship; may seem superficial',
        stressLoop: 'Jumps to new self-improvement when current efforts feel imperfect'
      },
      so: {
        title: 'The Success Influencer',
        focus: 'Achieving and inspiring success in social spheres',
        blindspot: 'May prioritize appearance of success over substance',
        relationships: 'Charismatic networker; struggles with authentic connection',
        stressLoop: 'Becomes frantic about maintaining successful image'
      },
      sx: {
        title: 'The Dynamic Partner',
        focus: 'Creating exciting, successful partnerships',
        blindspot: 'May expect partner to match their drive and optimism',
        relationships: 'Enthusiastic about shared achievements; impatient with flaws',
        stressLoop: 'Becomes critical when relationship doesn\'t meet ideals'
      }
    }
  },
  '1-4-5': {
    code: '145',
    name: 'The Philosopher',
    archetype: 'Principled Individualist',
    description:
      'Combines the ideals of 1, the depth of 4, and the insight of 5. You pursue profound truths with rigorous authenticity.',
    strengths: ['Intellectual depth', 'Authentic principles', 'Unique perspective'],
    challenges: ['Isolation', 'Critical melancholy', 'Difficulty with imperfection'],
    innerExperience:
      "Truth and meaning aren't optional—they're essential. You search for what's real with uncompromising honesty.",
    subtypes: {
      sp: {
        title: 'The Scholarly Hermit',
        focus: 'Pursuing truth through solitary, rigorous study',
        blindspot: 'May become completely isolated in intellectual pursuits',
        relationships: 'Needs much solitude; struggles with practical intimacy',
        stressLoop: 'Withdraws into critical analysis of self and world'
      },
      so: {
        title: 'The Cultural Critic',
        focus: 'Analyzing and critiquing collective values and meanings',
        blindspot: 'May feel perpetually alienated from mainstream culture',
        relationships: 'Seeks intellectual equals; feels misunderstood by groups',
        stressLoop: 'Becomes increasingly critical and withdrawn from society'
      },
      sx: {
        title: 'The Intense Seeker',
        focus: 'Deep truth-seeking through intimate intellectual connection',
        blindspot: 'May overwhelm partners with intensity and standards',
        relationships: 'Seeks profound meeting of minds; impatient with superficiality',
        stressLoop: 'Becomes critically disappointed in intimate connections'
      }
    }
  },
  '1-4-6': {
    code: '146',
    name: 'The Questioner',
    archetype: 'Conscientious Individualist',
    description:
      'Combines the conscience of 1, the depth of 4, and the doubt of 6. You question everything in pursuit of authentic truth.',
    strengths: ['Moral depth', 'Authentic questioning', 'Loyal to values'],
    challenges: ['Self-criticism', 'Anxiety', 'Difficulty trusting'],
    innerExperience:
      'Something isn\'t right—either in you or the world. You question endlessly, seeking the truth that would settle your soul.',
    subtypes: {
      sp: {
        title: 'The Anxious Perfectionist',
        focus: 'Finding security through moral correctness and self-improvement',
        blindspot: 'May become paralyzed by self-criticism and doubt',
        relationships: 'Seeks stable partner but constantly questions worthiness',
        stressLoop: 'Spirals into anxious self-criticism about everything'
      },
      so: {
        title: 'The Moral Critic',
        focus: 'Questioning social norms and collective ethics',
        blindspot: 'May become alienated through constant criticism',
        relationships: 'Bonds over shared values; anxious about group acceptance',
        stressLoop: 'Becomes increasingly critical of groups while longing to belong'
      },
      sx: {
        title: 'The Doubting Romantic',
        focus: 'Seeking authentic connection while questioning its possibility',
        blindspot: 'May sabotage relationships through doubt and criticism',
        relationships: 'Intense longing mixed with fear; tests partners',
        stressLoop: 'Oscillates between idealizing and criticizing partner'
      }
    }
  },
  '1-4-7': {
    code: '147',
    name: 'The Idealist',
    archetype: 'Creative Perfectionist',
    description:
      'Combines the ideals of 1, the creativity of 4, and the vision of 7. You envision perfect beauty and seek to create it.',
    strengths: ['Creative vision', 'Aesthetic standards', 'Inspiring idealism'],
    challenges: ['Frustration with reality', 'Emotional intensity', 'Scattered focus'],
    innerExperience:
      'Beauty and perfection are possible—you can see them. The gap between vision and reality is where you live.',
    subtypes: {
      sp: {
        title: 'The Aesthetic Creator',
        focus: 'Creating beautiful environments and objects',
        blindspot: 'May become frustrated when reality doesn\'t match vision',
        relationships: 'Brings beauty to daily life; can be demanding about aesthetics',
        stressLoop: 'Escapes into new creative projects when current ones feel flawed'
      },
      so: {
        title: 'The Visionary Artist',
        focus: 'Sharing creative visions that inspire collective beauty',
        blindspot: 'May feel unappreciated for their unique contributions',
        relationships: 'Seeks community of fellow creatives; can feel misunderstood',
        stressLoop: 'Becomes melancholic when visions aren\'t recognized'
      },
      sx: {
        title: 'The Romantic Idealist',
        focus: 'Creating perfect beauty in intimate connections',
        blindspot: 'May idealize relationships then feel disappointed',
        relationships: 'Brings poetry and vision; struggles when romance fades',
        stressLoop: 'Chases the ideal relationship while criticizing the real one'
      }
    }
  },

  // ============ HEART-LED TRITYPES (2, 3, 4 primary) ============

  // 2-led tritypes
  '2-8-5': {
    code: '285',
    name: 'The Strategist',
    archetype: 'Powerful Helper',
    description:
      'Combines the care of 2, the strength of 8, and the wisdom of 5. You help through strategic protection and knowledge.',
    strengths: ['Protective care', 'Strategic support', 'Insightful helping'],
    challenges: ['Control through helping', 'Emotional boundaries', 'Pride in strength'],
    innerExperience:
      'You love through protection and provision. Your strength serves your caring, and your knowledge guides both.',
    subtypes: {
      sp: {
        title: 'The Resource Provider',
        focus: 'Helping through material provision and practical protection',
        blindspot: 'May control through resources, creating dependency',
        relationships: 'Shows love through providing; can be dominating',
        stressLoop: 'Withdraws into strategic planning when help isn\'t appreciated'
      },
      so: {
        title: 'The Power Connector',
        focus: 'Helping others gain influence and connections',
        blindspot: 'May build power networks disguised as friendship',
        relationships: 'Connects people strategically; expects loyalty in return',
        stressLoop: 'Becomes manipulative when feeling unappreciated'
      },
      sx: {
        title: 'The Fierce Protector',
        focus: 'Intense protection of chosen partner',
        blindspot: 'May become possessive or overwhelming in care',
        relationships: 'All-consuming devotion; fights fiercely for partner',
        stressLoop: 'Smothers partner with protective intensity'
      }
    }
  },
  '2-8-6': {
    code: '286',
    name: 'The Champion',
    archetype: 'Protective Advocate',
    description:
      'Combines the warmth of 2, the power of 8, and the loyalty of 6. You champion causes and people with fierce dedication.',
    strengths: ['Fierce advocacy', 'Loyal protection', 'Strong community bonds'],
    challenges: ['Over-protection', 'Us-vs-them thinking', 'Anxiety about loved ones'],
    innerExperience:
      'Your people are your people, and you\'ll fight for them. Love and loyalty drive your strength.',
    subtypes: {
      sp: {
        title: 'The Family Defender',
        focus: 'Fierce protection of home and family security',
        blindspot: 'May become anxiously controlling about family safety',
        relationships: 'Devoted family protector; can be overbearing',
        stressLoop: 'Becomes paranoid about threats to loved ones'
      },
      so: {
        title: 'The Tribal Champion',
        focus: 'Fighting for community and group causes',
        blindspot: 'May create enemies to unite the group',
        relationships: 'Builds loyal tribes; fierce about group boundaries',
        stressLoop: 'Becomes suspicious of outsiders and loyalty'
      },
      sx: {
        title: 'The Devoted Warrior',
        focus: 'Fierce loyalty and protection in intimate bonds',
        blindspot: 'May test partner\'s loyalty through conflict',
        relationships: 'Intense devotion; ready to fight for relationship',
        stressLoop: 'Becomes jealous and anxiously protective'
      }
    }
  },
  '2-8-7': {
    code: '287',
    name: 'The Entertainer',
    archetype: 'Generous Powerhouse',
    description:
      'Combines the generosity of 2, the intensity of 8, and the fun of 7. You create joy and abundance for those you love.',
    strengths: ['Generous energy', 'Joyful giving', 'Magnetic warmth'],
    challenges: ['Over-giving', 'Avoiding deeper needs', 'Exhaustion'],
    innerExperience:
      'Love means giving people the best experience possible. Your energy is for sharing, your strength for celebration.',
    subtypes: {
      sp: {
        title: 'The Abundant Host',
        focus: 'Creating material abundance and comfort for others',
        blindspot: 'May overextend financially to maintain generous image',
        relationships: 'Shows love through lavish giving and hosting',
        stressLoop: 'Exhausts resources trying to provide abundance'
      },
      so: {
        title: 'The Party Leader',
        focus: 'Creating exciting social experiences for groups',
        blindspot: 'May dominate social situations with their energy',
        relationships: 'The magnetic center of social gatherings',
        stressLoop: 'Becomes manic about social activity when feeling unappreciated'
      },
      sx: {
        title: 'The Grand Romantic',
        focus: 'Sweeping partners off their feet with intense generosity',
        blindspot: 'May overwhelm partners with grand gestures',
        relationships: 'Creates exciting romantic adventures; needs constant engagement',
        stressLoop: 'Becomes demanding when intensity isn\'t matched'
      }
    }
  },
  '2-9-5': {
    code: '295',
    name: 'The Counselor',
    archetype: 'Gentle Advisor',
    description:
      'Combines the care of 2, the peace of 9, and the insight of 5. You help through quiet understanding and patient presence.',
    strengths: ['Patient support', 'Deep listening', 'Wise counsel'],
    challenges: ['Passivity', 'Losing self in helping', 'Emotional merging'],
    innerExperience:
      'Being present for others is how you love. You listen deeply, understand quietly, and offer what wisdom you have.',
    subtypes: {
      sp: {
        title: 'The Quiet Helper',
        focus: 'Practical support offered with gentle wisdom',
        blindspot: 'May become invisible, helping without recognition',
        relationships: 'Steady, undemanding presence; may neglect own needs',
        stressLoop: 'Withdraws into numbing comfort when depleted'
      },
      so: {
        title: 'The Community Counselor',
        focus: 'Bringing peace and understanding to groups',
        blindspot: 'May lose self completely in group needs',
        relationships: 'Everyone\'s confidant; struggles with own boundaries',
        stressLoop: 'Becomes passive and invisible when overwhelmed'
      },
      sx: {
        title: 'The Devoted Listener',
        focus: 'Deep, healing presence in intimate relationships',
        blindspot: 'May merge completely with partner\'s needs',
        relationships: 'Profound attunement; risks losing self entirely',
        stressLoop: 'Becomes passive and self-abandoning in relationships'
      }
    }
  },
  '2-9-6': {
    code: '296',
    name: 'The Comforter',
    archetype: 'Steady Supporter',
    description:
      'Combines the warmth of 2, the stability of 9, and the loyalty of 6. You provide steady, reliable comfort to your people.',
    strengths: ['Reliable warmth', 'Peaceful support', 'Loyal caregiving'],
    challenges: ['Over-accommodation', 'Anxiety about relationships', 'Self-neglect'],
    innerExperience:
      'You want to be the safe harbor for others. Your love is steady and your loyalty unwavering, even when you worry.',
    subtypes: {
      sp: {
        title: 'The Nurturing Anchor',
        focus: 'Creating stable, comfortable environments for loved ones',
        blindspot: 'May sacrifice all personal needs for others\' comfort',
        relationships: 'Reliable caregiver; struggles to receive care',
        stressLoop: 'Becomes anxiously accommodating, losing all boundaries'
      },
      so: {
        title: 'The Group Caretaker',
        focus: 'Being the reliable supporter everyone can count on',
        blindspot: 'May become anxious about group belonging',
        relationships: 'Invested in being needed; fears abandonment',
        stressLoop: 'Over-gives to group while becoming increasingly anxious'
      },
      sx: {
        title: 'The Devoted Companion',
        focus: 'Steady, loyal devotion to significant other',
        blindspot: 'May become anxiously attached, losing all independence',
        relationships: 'Complete dedication; needs constant reassurance',
        stressLoop: 'Becomes clingy and self-abandoning when insecure'
      }
    }
  },
  '2-9-7': {
    code: '297',
    name: 'The Sunshine',
    archetype: 'Warm Optimist',
    description:
      'Combines the warmth of 2, the ease of 9, and the joy of 7. You spread light and warmth wherever you go.',
    strengths: ['Infectious warmth', 'Easy generosity', 'Positive presence'],
    challenges: ['Avoiding conflict', 'Superficial connections', 'Neglecting self'],
    innerExperience:
      'Why not make everyone happy? Your love flows easily, your joy naturally includes others.',
    subtypes: {
      sp: {
        title: 'The Comfortable Giver',
        focus: 'Creating pleasant, comfortable experiences for others',
        blindspot: 'May avoid depth through pleasant distractions',
        relationships: 'Makes life pleasant; struggles with heavy emotions',
        stressLoop: 'Numbs out in comfort when things get difficult'
      },
      so: {
        title: 'The Social Sunshine',
        focus: 'Bringing warmth and positivity to groups',
        blindspot: 'May stay superficial to avoid group conflict',
        relationships: 'Everyone\'s friend; struggles with deep connection',
        stressLoop: 'Spreads too thin socially, losing sense of self'
      },
      sx: {
        title: 'The Joyful Lover',
        focus: 'Bringing lightness and warmth to intimate bonds',
        blindspot: 'May avoid relationship problems through positivity',
        relationships: 'Creates fun, warm connection; avoids difficult conversations',
        stressLoop: 'Distracts from issues with pleasant activities'
      }
    }
  },
  '2-1-5': {
    code: '215',
    name: 'The Mentor',
    archetype: 'Principled Caregiver',
    description:
      'Combines the help of 2, the standards of 1, and the knowledge of 5. You improve lives through principled, informed guidance.',
    strengths: ['Ethical care', 'Knowledgeable helping', 'Principled service'],
    challenges: ['Critical helping', 'Perfectionism in care', 'Emotional distance'],
    innerExperience:
      'Helping means helping correctly. Your standards guide your care, your knowledge informs your love.',
    subtypes: {
      sp: {
        title: 'The Practical Advisor',
        focus: 'Teaching practical skills with principled guidance',
        blindspot: 'May become critical when help isn\'t received "properly"',
        relationships: 'Shows love through teaching; can feel cold',
        stressLoop: 'Withdraws into knowledge when care isn\'t appreciated'
      },
      so: {
        title: 'The Community Educator',
        focus: 'Improving groups through principled teaching',
        blindspot: 'May become preachy or self-righteous about standards',
        relationships: 'Invests in group improvement; can be judgmental',
        stressLoop: 'Becomes frustrated when others don\'t improve'
      },
      sx: {
        title: 'The Devoted Mentor',
        focus: 'Deep teaching relationships with chosen individuals',
        blindspot: 'May become controlling about partner\'s improvement',
        relationships: 'Intensely invested in helping partner grow',
        stressLoop: 'Criticizes partner "for their own good"'
      }
    }
  },
  '2-1-6': {
    code: '216',
    name: 'The Servant',
    archetype: 'Dutiful Helper',
    description:
      'Combines the service of 2, the duty of 1, and the loyalty of 6. You serve with principled dedication to those you love.',
    strengths: ['Devoted service', 'Reliable care', 'Principled loyalty'],
    challenges: ['Martyrdom', 'Anxiety about doing enough', 'Rigid expectations'],
    innerExperience:
      'Service is sacred. You give according to your principles to those who deserve your loyalty.',
    subtypes: {
      sp: {
        title: 'The Dutiful Provider',
        focus: 'Reliable service that maintains security and standards',
        blindspot: 'May become martyred about sacrifices made',
        relationships: 'Shows love through reliable service; worries constantly',
        stressLoop: 'Becomes anxiously obsessive about doing enough'
      },
      so: {
        title: 'The Community Servant',
        focus: 'Dedicated service to group and community',
        blindspot: 'May become resentful when service isn\'t recognized',
        relationships: 'Deeply invested in group; anxious about standing',
        stressLoop: 'Over-commits while becoming increasingly anxious'
      },
      sx: {
        title: 'The Devoted Partner',
        focus: 'Principled dedication to significant other',
        blindspot: 'May become anxiously controlling in relationships',
        relationships: 'Total loyalty; needs reassurance of being valued',
        stressLoop: 'Becomes worried about relationship worthiness'
      }
    }
  },
  '2-1-7': {
    code: '217',
    name: 'The Advocate',
    archetype: 'Enthusiastic Helper',
    description:
      'Combines the care of 2, the ideals of 1, and the optimism of 7. You help with enthusiasm toward a better world.',
    strengths: ['Inspiring help', 'Idealistic care', 'Energetic service'],
    challenges: ['Over-extension', 'Frustration with imperfection', 'Avoidance of pain'],
    innerExperience:
      'Helping should be joyful AND meaningful. You want to improve lives while enjoying the process.',
    subtypes: {
      sp: {
        title: 'The Practical Improver',
        focus: 'Enthusiastic help that creates practical improvements',
        blindspot: 'May start many helping projects, finish few',
        relationships: 'Brings energy to domestic improvement',
        stressLoop: 'Becomes frustrated when improvements don\'t happen fast'
      },
      so: {
        title: 'The Cause Champion',
        focus: 'Inspiring others toward meaningful causes',
        blindspot: 'May burn out on causes or become preachy',
        relationships: 'Bonds over shared ideals; can neglect individuals',
        stressLoop: 'Becomes frustrated when groups don\'t embrace vision'
      },
      sx: {
        title: 'The Enthusiastic Partner',
        focus: 'Helping partner grow with enthusiasm and idealism',
        blindspot: 'May try to "fix" partner or become disappointed',
        relationships: 'Intense desire to help partner improve',
        stressLoop: 'Becomes critical when partner doesn\'t match enthusiasm'
      }
    }
  },

  // 3-led tritypes
  '3-8-5': {
    code: '385',
    name: 'The Executive',
    archetype: 'Strategic Achiever',
    description:
      'Combines the drive of 3, the power of 8, and the analysis of 5. You achieve through strategic dominance and expertise.',
    strengths: ['Strategic mastery', 'Decisive achievement', 'Competent leadership'],
    challenges: ['Workaholism', 'Emotional unavailability', 'Dominating style'],
    innerExperience:
      'Success requires power and knowledge. You pursue both relentlessly, measuring yourself by results.',
    subtypes: {
      sp: {
        title: 'The Empire Builder',
        focus: 'Creating financial security and material success through strategic expertise',
        blindspot: 'May equate self-worth entirely with net worth and status symbols',
        relationships: 'Shows care through providing resources and building secure foundations for others',
        stressLoop: 'Overworks to exhaustion, retreating into analysis when overwhelmed'
      },
      so: {
        title: 'The Power Broker',
        focus: 'Building institutional influence and being recognized as a capable leader',
        blindspot: 'May sacrifice personal connections for professional reputation',
        relationships: 'Connects through professional networks and demonstrating competence publicly',
        stressLoop: 'Becomes domineering when status feels threatened, pushing away supporters'
      },
      sx: {
        title: 'The Magnetic Achiever',
        focus: 'Captivating specific individuals through intense competence and personal power',
        blindspot: 'May use expertise and dominance as tools for seduction rather than connection',
        relationships: 'Creates intense bonds through demonstrating capability and protective strength',
        stressLoop: 'Becomes coldly analytical and controlling when feeling rejected'
      }
    }
  },
  '3-8-6': {
    code: '386',
    name: 'The General',
    archetype: 'Commanding Achiever',
    description:
      'Combines the ambition of 3, the strength of 8, and the loyalty of 6. You achieve by building powerful, loyal teams.',
    strengths: ['Team leadership', 'Protective achievement', 'Loyal drive'],
    challenges: ['Control needs', 'Image as strength', 'Anxiety about threats'],
    innerExperience:
      'Winning means nothing alone. You build armies of loyal people and lead them to success.',
    subtypes: {
      sp: {
        title: 'The Garrison Commander',
        focus: 'Building secure teams and reliable systems that protect resources',
        blindspot: 'May over-prepare and create fortress mentality that limits growth',
        relationships: 'Shows loyalty through reliable provision and protective leadership',
        stressLoop: 'Becomes paranoid about threats to security, micromanaging to feel safe'
      },
      so: {
        title: 'The Coalition Builder',
        focus: 'Creating powerful alliances and being recognized as a strong leader',
        blindspot: 'May prioritize appearing strong over showing vulnerability even to allies',
        relationships: 'Builds networks of mutual loyalty and strategic partnerships',
        stressLoop: 'Worries excessively about reputation while becoming controlling of group'
      },
      sx: {
        title: 'The Devoted Champion',
        focus: 'Protecting and empowering chosen individuals with fierce dedication',
        blindspot: 'May become possessive of key relationships, testing loyalty obsessively',
        relationships: 'Forms intense bonds of mutual protection and shared ambition',
        stressLoop: 'Becomes demanding and suspicious when feeling betrayed or unappreciated'
      }
    }
  },
  '3-8-7': {
    code: '387',
    name: 'The Mogul',
    archetype: 'Dynamic Achiever',
    description:
      'Combines the success drive of 3, the power of 8, and the vision of 7. You achieve big with bold moves and endless energy.',
    strengths: ['Bold vision', 'Powerful execution', 'Magnetic success'],
    challenges: ['Overreach', 'Avoidance of failure', 'Image obsession'],
    innerExperience:
      'Go big or go home. Success should be spectacular, powerful, and just a little bit fun.',
    subtypes: {
      sp: {
        title: 'The Venture Builder',
        focus: 'Creating abundant resources and lifestyle freedom through bold enterprises',
        blindspot: 'May pursue material expansion endlessly, never feeling "enough"',
        relationships: 'Shows love through providing exciting experiences and financial abundance',
        stressLoop: 'Takes on too many ventures simultaneously, spreading resources thin'
      },
      so: {
        title: 'The Influencer',
        focus: 'Building a powerful public presence and being seen as dynamic and successful',
        blindspot: 'May sacrifice authenticity for social image and broad appeal',
        relationships: 'Connects through shared excitement and public partnerships',
        stressLoop: 'Becomes image-obsessed and superficial when relevance feels threatened'
      },
      sx: {
        title: 'The Charismatic Force',
        focus: 'Captivating chosen individuals through powerful personal magnetism and vision',
        blindspot: 'May use charm and intensity manipulatively to maintain admiration',
        relationships: 'Creates whirlwind connections full of excitement and grand gestures',
        stressLoop: 'Becomes domineering and restless when partner shows independence'
      }
    }
  },
  '3-9-5': {
    code: '395',
    name: 'The Professional',
    archetype: 'Composed Achiever',
    description:
      'Combines the achievement of 3, the calm of 9, and the competence of 5. You achieve through quiet expertise and steady progress.',
    strengths: ['Calm competence', 'Steady achievement', 'Professional poise'],
    challenges: ['Passive ambition', 'Identity diffusion', 'Avoiding conflict'],
    innerExperience:
      'Success doesn\'t require drama. You achieve through quiet mastery and steady progress.',
    subtypes: {
      sp: {
        title: 'The Quiet Accumulator',
        focus: 'Building steady security through competent, low-drama work',
        blindspot: 'May become so comfortable that ambition fades into complacency',
        relationships: 'Shows care through reliable presence and practical competence',
        stressLoop: 'Withdraws into routines and study when pressure mounts'
      },
      so: {
        title: 'The Respected Expert',
        focus: 'Being valued within professional communities for knowledge and composure',
        blindspot: 'May merge with institutional identity, losing personal voice',
        relationships: 'Connects through professional contexts and shared expertise',
        stressLoop: 'Becomes passive-aggressive when not receiving expected recognition'
      },
      sx: {
        title: 'The Calm Enigma',
        focus: 'Attracting chosen others through mysterious competence and quiet depth',
        blindspot: 'May remain emotionally distant even in intimate relationships',
        relationships: 'Creates intrigue through composed presence and selective revelation',
        stressLoop: 'Detaches completely when emotional demands feel overwhelming'
      }
    }
  },
  '3-9-6': {
    code: '396',
    name: 'The Team Player',
    archetype: 'Harmonious Achiever',
    description:
      'Combines the drive of 3, the harmony of 9, and the loyalty of 6. You achieve by bringing people together.',
    strengths: ['Collaborative success', 'Team harmony', 'Reliable performance'],
    challenges: ['Indecision', 'People-pleasing', 'Avoiding necessary conflict'],
    innerExperience:
      'Success feels hollow without everyone on board. You achieve while keeping the peace.',
    subtypes: {
      sp: {
        title: 'The Steady Provider',
        focus: 'Creating safe, harmonious environments through reliable achievement',
        blindspot: 'May avoid risk entirely to maintain security and approval',
        relationships: 'Shows care through consistency, reliability, and keeping peace',
        stressLoop: 'Becomes anxiously indecisive when demands conflict with harmony'
      },
      so: {
        title: 'The Consensus Builder',
        focus: 'Achieving recognition by bringing groups together successfully',
        blindspot: 'May dilute own goals to accommodate everyone, pleasing no one fully',
        relationships: 'Connects by facilitating group success and maintaining harmony',
        stressLoop: 'Worries excessively about group opinion while avoiding personal stance'
      },
      sx: {
        title: 'The Devoted Partner',
        focus: 'Creating success that honors commitment to chosen individuals',
        blindspot: 'May lose self in partner\'s goals while seeking approval',
        relationships: 'Forms loyal bonds through reliable presence and shared achievement',
        stressLoop: 'Becomes anxiously accommodating, abandoning own needs for security'
      }
    }
  },
  '3-9-7': {
    code: '397',
    name: 'The Charmer',
    archetype: 'Effortless Achiever',
    description:
      'Combines the success of 3, the ease of 9, and the optimism of 7. You make achievement look effortless and enjoyable.',
    strengths: ['Effortless charm', 'Smooth success', 'Positive momentum'],
    challenges: ['Avoiding depth', 'Surface relationships', 'Running from failure'],
    innerExperience:
      'Why struggle when you can flow? Success comes easier when you keep things pleasant.',
    subtypes: {
      sp: {
        title: 'The Pleasant Life',
        focus: 'Creating comfortable abundance with minimal friction or stress',
        blindspot: 'May avoid challenges that would deepen skills or character',
        relationships: 'Shows care through maintaining pleasant, easy-going atmosphere',
        stressLoop: 'Numbs out with comfort and distraction when facing difficulty'
      },
      so: {
        title: 'The Social Butterfly',
        focus: 'Being liked and admired across many social circles effortlessly',
        blindspot: 'May spread too thin, lacking depth in any relationship or achievement',
        relationships: 'Connects through charm and keeping interactions light and fun',
        stressLoop: 'Becomes scattered and superficial when popularity feels at risk'
      },
      sx: {
        title: 'The Enchanter',
        focus: 'Captivating specific individuals with effortless charm and optimism',
        blindspot: 'May avoid emotional depth that would make relationship truly intimate',
        relationships: 'Creates magical-feeling connections full of lightness and fun',
        stressLoop: 'Flees into new attractions when current relationship requires work'
      }
    }
  },
  '3-1-5': {
    code: '315',
    name: 'The Expert',
    archetype: 'Competent Achiever',
    description:
      'Combines the success drive of 3, the standards of 1, and the knowledge of 5. You achieve through principled expertise.',
    strengths: ['Expert achievement', 'High standards', 'Intellectual mastery'],
    challenges: ['Perfectionism', 'Cold efficiency', 'Achievement addiction'],
    innerExperience:
      'Real success requires real excellence. You pursue both knowledge and achievement with rigorous standards.',
    subtypes: {
      sp: {
        title: 'The Technical Master',
        focus: 'Building security through demonstrable expertise and high standards',
        blindspot: 'May become so focused on competence that life becomes sterile and joyless',
        relationships: 'Shows care through teaching, improving, and maintaining standards',
        stressLoop: 'Perfects endlessly, withdrawing when work never meets impossible standards'
      },
      so: {
        title: 'The Thought Leader',
        focus: 'Being recognized as an authority through principled expertise',
        blindspot: 'May prioritize appearing right over genuine connection or learning',
        relationships: 'Connects through intellectual discourse and shared high standards',
        stressLoop: 'Becomes rigidly critical and withdrawn when expertise is questioned'
      },
      sx: {
        title: 'The Excellence Seeker',
        focus: 'Attracting chosen others through demonstrated mastery and refinement',
        blindspot: 'May use standards as barrier to intimacy, always finding fault',
        relationships: 'Creates bonds through mutual pursuit of excellence and growth',
        stressLoop: 'Becomes coldly critical and withdrawn when partner disappoints'
      }
    }
  },
  '3-1-6': {
    code: '316',
    name: 'The Taskmaster',
    archetype: 'Organized Achiever',
    description:
      'Combines the ambition of 3, the structure of 1, and the diligence of 6. You achieve through systematic excellence.',
    strengths: ['Organized success', 'Dutiful achievement', 'Reliable excellence'],
    challenges: ['Rigidity', 'Fear of failure', 'Work as worth'],
    innerExperience:
      'Success comes from doing things right, every time. You build achievement on a foundation of structure.',
    subtypes: {
      sp: {
        title: 'The Reliable Producer',
        focus: 'Building security through disciplined work and proven systems',
        blindspot: 'May become rigid and anxious, over-preparing for unlikely scenarios',
        relationships: 'Shows care through reliability, preparation, and maintaining structure',
        stressLoop: 'Doubles down on rules and procedures when feeling unsafe or uncertain'
      },
      so: {
        title: 'The Model Employee',
        focus: 'Being recognized for dutiful excellence within organizational hierarchies',
        blindspot: 'May over-identify with institutional roles, losing personal identity',
        relationships: 'Connects through shared duties, professional obligations, and protocols',
        stressLoop: 'Becomes rigidly rule-bound and anxious when structures are questioned'
      },
      sx: {
        title: 'The Devoted Perfectionist',
        focus: 'Achieving excellence to prove worthy of chosen relationship',
        blindspot: 'May use perfectionism as anxiety management in intimate bonds',
        relationships: 'Shows devotion through reliability, improvement, and dutiful care',
        stressLoop: 'Becomes critical and anxious when partner doesn\'t share standards'
      }
    }
  },
  '3-1-7': {
    code: '317',
    name: 'The Visionary',
    archetype: 'Inspiring Achiever',
    description:
      'Combines the drive of 3, the ideals of 1, and the vision of 7. You achieve by inspiring others toward an ideal future.',
    strengths: ['Inspiring vision', 'Principled success', 'Optimistic drive'],
    challenges: ['Frustration with reality', 'Over-promising', 'Image management'],
    innerExperience:
      'Success should serve a higher purpose. You pursue achievement that makes the world better.',
    subtypes: {
      sp: {
        title: 'The Principled Entrepreneur',
        focus: 'Building resources and security while pursuing idealistic goals',
        blindspot: 'May oscillate between practical concerns and idealistic vision',
        relationships: 'Shows care through building better futures and providing for ideals',
        stressLoop: 'Becomes frustrated and preachy when reality doesn\'t match vision'
      },
      so: {
        title: 'The Inspirational Leader',
        focus: 'Being recognized as someone who achieves meaningful change',
        blindspot: 'May prioritize appearing visionary over doing hard reform work',
        relationships: 'Connects through shared ideals and collective improvement projects',
        stressLoop: 'Becomes self-righteous and scattered when not getting recognition'
      },
      sx: {
        title: 'The Passionate Idealist',
        focus: 'Inspiring chosen individuals through principled vision and optimism',
        blindspot: 'May project impossible ideals onto partners, setting up disappointment',
        relationships: 'Creates intense bonds around shared dreams and improvement goals',
        stressLoop: 'Becomes critical and restless when partner doesn\'t match vision'
      }
    }
  },

  // 4-led tritypes
  '4-8-5': {
    code: '485',
    name: 'The Alchemist',
    archetype: 'Intense Transformer',
    description:
      'Combines the depth of 4, the intensity of 8, and the insight of 5. You transform darkness into power through understanding.',
    strengths: ['Transformative power', 'Emotional depth', 'Penetrating insight'],
    challenges: ['Isolation', 'Overwhelming intensity', 'Difficulty with lightness'],
    innerExperience:
      'You feel everything intensely and need to understand it completely. Pain becomes power through alchemy.',
    subtypes: {
      sp: {
        title: 'The Fortress Builder',
        focus: 'Creating physical and resource security to support intense inner work',
        blindspot: 'May become too self-sufficient, isolating in protective environments',
        relationships: 'Shows care through deep loyalty and protecting shared space',
        stressLoop: 'Retreats completely into self-sufficiency when feeling vulnerable'
      },
      so: {
        title: 'The Dark Prophet',
        focus: 'Being recognized for unique insights into shadow and transformation',
        blindspot: 'May cultivate outsider identity to avoid genuine belonging',
        relationships: 'Connects through shared intensity and transformative communities',
        stressLoop: 'Becomes more isolated and misunderstood when group rejects depth'
      },
      sx: {
        title: 'The Intense Bond',
        focus: 'Creating profound one-to-one connections through shared transformation',
        blindspot: 'May overwhelm partners with intensity and demand for depth',
        relationships: 'Forms consuming bonds of mutual exploration and transmutation',
        stressLoop: 'Becomes controlling and overwhelming when connection feels threatened'
      }
    }
  },
  '4-8-6': {
    code: '486',
    name: 'The Rebel',
    archetype: 'Passionate Fighter',
    description:
      'Combines the authenticity of 4, the defiance of 8, and the questioning of 6. You fight for what\'s real against what\'s false.',
    strengths: ['Authentic power', 'Courage in adversity', 'Loyal to truth'],
    challenges: ['Reactivity', 'Distrust', 'Emotional volatility'],
    innerExperience:
      'Authenticity is worth fighting for. You see through facades and can\'t stomach pretense.',
    subtypes: {
      sp: {
        title: 'The Survivalist',
        focus: 'Protecting resources and security while fighting for authenticity',
        blindspot: 'May become defensive and mistrustful, seeing threats everywhere',
        relationships: 'Shows care through fierce protection and loyalty in adversity',
        stressLoop: 'Becomes paranoid and reactive when security feels threatened'
      },
      so: {
        title: 'The Revolutionary',
        focus: 'Fighting for causes and being recognized for authentic defiance',
        blindspot: 'May define self primarily through opposition, needing enemies',
        relationships: 'Connects through shared causes and mutual questioning of authority',
        stressLoop: 'Becomes more reactive and volatile when group doesn\'t validate fight'
      },
      sx: {
        title: 'The Fierce Loyalist',
        focus: 'Creating intense bonds through mutual authenticity and shared battles',
        blindspot: 'May test relationships through conflict to prove loyalty',
        relationships: 'Forms passionate bonds around shared defiance and truth-seeking',
        stressLoop: 'Becomes volatile and testing when partner loyalty feels uncertain'
      }
    }
  },
  '4-8-7': {
    code: '487',
    name: 'The Phoenix',
    archetype: 'Intense Visionary',
    description:
      'Combines the depth of 4, the power of 8, and the optimism of 7. You rise from darkness toward possibility.',
    strengths: ['Resilient transformation', 'Creative power', 'Passionate vision'],
    challenges: ['Emotional extremes', 'Restlessness', 'Difficulty with stability'],
    innerExperience:
      'You contain both darkness and light, and refuse to be limited by either. Transformation is your path.',
    subtypes: {
      sp: {
        title: 'The Resourceful Transformer',
        focus: 'Building resources to support creative vision and transformative pursuits',
        blindspot: 'May oscillate between scarcity fears and expansive spending',
        relationships: 'Shows care through providing experiences and creating abundant environments',
        stressLoop: 'Swings between intense withdrawal and restless expansion when destabilized'
      },
      so: {
        title: 'The Charismatic Outsider',
        focus: 'Being recognized as unique visionary who transforms communities',
        blindspot: 'May use charm and intensity to maintain special status while avoiding true belonging',
        relationships: 'Connects through inspiring others with transformative vision and energy',
        stressLoop: 'Becomes dramatic and scattered when specialness isn\'t acknowledged'
      },
      sx: {
        title: 'The Passionate Transformer',
        focus: 'Creating intense connections through shared transformation and possibility',
        blindspot: 'May overwhelm partners with emotional intensity and constant change',
        relationships: 'Forms consuming bonds that cycle through depth and lightness',
        stressLoop: 'Becomes emotionally volatile and restless when intimacy feels stale'
      }
    }
  },
  '4-9-5': {
    code: '495',
    name: 'The Contemplative',
    archetype: 'Introspective Artist',
    description:
      'Combines the depth of 4, the peace of 9, and the insight of 5. You live in a rich inner world of meaning.',
    strengths: ['Deep introspection', 'Peaceful creativity', 'Quiet insight'],
    challenges: ['Withdrawal', 'Inertia', 'Difficulty with action'],
    innerExperience:
      'Your inner world is vast and meaningful. Outer demands often feel like interruptions to inner truth.',
    subtypes: {
      sp: {
        title: 'The Hermit Artist',
        focus: 'Creating comfortable solitude for deep inner exploration and creative work',
        blindspot: 'May withdraw so completely that practical needs go unmet',
        relationships: 'Shows care through quiet presence and sharing inner world selectively',
        stressLoop: 'Retreats into inner world when external demands feel overwhelming'
      },
      so: {
        title: 'The Quiet Observer',
        focus: 'Being valued in communities for unique perspective without being center of attention',
        blindspot: 'May remain on margins of groups, never fully belonging or engaging',
        relationships: 'Connects through shared contemplation and observational insights',
        stressLoop: 'Withdraws into melancholy when feeling invisible or unappreciated'
      },
      sx: {
        title: 'The Intimate Mystic',
        focus: 'Creating profound one-to-one connections through shared inner exploration',
        blindspot: 'May idealize connection while struggling to sustain real intimacy',
        relationships: 'Forms deep bonds through mutual introspection and soulful presence',
        stressLoop: 'Withdraws into fantasy of perfect connection when real relating disappoints'
      }
    }
  },
  '4-9-6': {
    code: '496',
    name: 'The Seeker',
    archetype: 'Melancholy Questioner',
    description:
      'Combines the longing of 4, the merging of 9, and the doubt of 6. You seek meaning while questioning everything.',
    strengths: ['Deep seeking', 'Authentic questioning', 'Emotional honesty'],
    challenges: ['Paralysis', 'Melancholy', 'Self-doubt'],
    innerExperience:
      'Something is missing and you\'re not sure what. The search continues, even as you doubt it.',
    subtypes: {
      sp: {
        title: 'The Anxious Artist',
        focus: 'Seeking security and meaning through authentic self-expression',
        blindspot: 'May become paralyzed by anxiety and self-doubt, unable to act',
        relationships: 'Shows care through loyal presence while seeking reassurance',
        stressLoop: 'Becomes immobilized by overlapping anxieties about identity and safety'
      },
      so: {
        title: 'The Searching Outsider',
        focus: 'Seeking belonging and meaning while questioning group values',
        blindspot: 'May feel perpetually excluded, questioning without committing',
        relationships: 'Connects through shared questioning and search for authentic community',
        stressLoop: 'Becomes melancholy and anxious when both unique and unbelonging'
      },
      sx: {
        title: 'The Longing Heart',
        focus: 'Seeking ideal connection while doubting whether it exists',
        blindspot: 'May idealize then doubt partners, unable to trust love',
        relationships: 'Forms intense bonds marked by longing and uncertainty',
        stressLoop: 'Oscillates between clinging and doubting when intimacy deepens'
      }
    }
  },
  '4-9-7': {
    code: '497',
    name: 'The Dreamer',
    archetype: 'Imaginative Romantic',
    description:
      'Combines the creativity of 4, the peace of 9, and the vision of 7. You dream beautiful futures.',
    strengths: ['Creative imagination', 'Gentle vision', 'Artistic dreaming'],
    challenges: ['Fantasy escape', 'Difficulty with reality', 'Inaction'],
    innerExperience:
      'Beauty and possibility live in your imagination. Reality sometimes struggles to keep up.',
    subtypes: {
      sp: {
        title: 'The Daydreamer',
        focus: 'Creating comfortable spaces for imaginative exploration and gentle living',
        blindspot: 'May escape into fantasy to avoid practical demands and discomfort',
        relationships: 'Shows care through creating pleasant environments and shared daydreams',
        stressLoop: 'Numbs out into fantasy and comfort when reality becomes demanding'
      },
      so: {
        title: 'The Gentle Visionary',
        focus: 'Sharing imaginative vision and being appreciated for creative contributions',
        blindspot: 'May avoid the work required to manifest dreams into reality',
        relationships: 'Connects through shared imagination and gentle social optimism',
        stressLoop: 'Becomes scattered between social options while avoiding commitment'
      },
      sx: {
        title: 'The Romantic Dreamer',
        focus: 'Creating magical connection through shared imagination and possibility',
        blindspot: 'May prefer fantasy of ideal romance to work of real relationship',
        relationships: 'Forms enchanting bonds full of shared dreams and gentle intensity',
        stressLoop: 'Flees into new romantic fantasies when current connection disappoints'
      }
    }
  },
  '4-1-5': {
    code: '415',
    name: 'The Philosopher',
    archetype: 'Principled Artist',
    description:
      'Combines the depth of 4, the standards of 1, and the analysis of 5. You pursue profound truth with rigorous authenticity.',
    strengths: ['Intellectual depth', 'Authentic standards', 'Principled creativity'],
    challenges: ['Self-criticism', 'Isolation', 'Impossible standards'],
    innerExperience:
      'Truth and beauty must meet rigorous standards. You create from depth, guided by principle.',
    subtypes: {
      sp: {
        title: 'The Austere Scholar',
        focus: 'Building secure foundations for deep study and principled creative work',
        blindspot: 'May become ascetic and self-denying, never allowing themselves pleasure',
        relationships: 'Shows care through teaching, improving, and sharing refined insights',
        stressLoop: 'Becomes increasingly isolated and self-critical when work doesn\'t meet standards'
      },
      so: {
        title: 'The Philosophical Voice',
        focus: 'Being recognized for principled authenticity and deep intellectual contributions',
        blindspot: 'May become rigidly righteous while feeling misunderstood by communities',
        relationships: 'Connects through intellectual discourse and shared pursuit of truth',
        stressLoop: 'Becomes defensive and withdrawn when ideas are criticized or ignored'
      },
      sx: {
        title: 'The Intense Perfectionist',
        focus: 'Creating deep bonds through shared pursuit of truth and authentic excellence',
        blindspot: 'May hold partners to impossible standards, always finding flaws',
        relationships: 'Forms intense connections around mutual improvement and depth',
        stressLoop: 'Becomes coldly critical and withdrawn when partner doesn\'t meet ideals'
      }
    }
  },
  '4-1-6': {
    code: '416',
    name: 'The Purist',
    archetype: 'Conscientious Artist',
    description:
      'Combines the authenticity of 4, the conscience of 1, and the doubt of 6. You question everything in pursuit of pure truth.',
    strengths: ['Moral authenticity', 'Deep conscience', 'Loyal to truth'],
    challenges: ['Self-criticism', 'Anxiety', 'Difficulty with imperfection'],
    innerExperience:
      'Something isn\'t right—either in you or the world. You search with conscience and doubt.',
    subtypes: {
      sp: {
        title: 'The Anxious Perfectionist',
        focus: 'Creating secure, principled foundations while doubting own worthiness',
        blindspot: 'May become paralyzed by combined anxiety, self-criticism, and scarcity',
        relationships: 'Shows care through reliability and conscience while seeking reassurance',
        stressLoop: 'Inner critic intensifies when security feels threatened'
      },
      so: {
        title: 'The Moral Witness',
        focus: 'Being recognized for authentic moral voice and principled questioning',
        blindspot: 'May feel perpetually disappointed with groups that don\'t meet standards',
        relationships: 'Connects through shared conscience and authentic community questioning',
        stressLoop: 'Becomes self-righteous and anxious when group lacks integrity'
      },
      sx: {
        title: 'The Devoted Critic',
        focus: 'Creating deep bonds through shared conscience and mutual improvement',
        blindspot: 'May combine criticism and anxiety to undermine intimacy',
        relationships: 'Forms intense connections around loyalty, standards, and doubt',
        stressLoop: 'Becomes anxiously critical when partner doesn\'t meet moral standards'
      }
    }
  },
  '4-1-7': {
    code: '417',
    name: 'The Idealist',
    archetype: 'Visionary Artist',
    description:
      'Combines the creativity of 4, the ideals of 1, and the optimism of 7. You envision and create beautiful possibilities.',
    strengths: ['Creative idealism', 'Inspired vision', 'Principled artistry'],
    challenges: ['Frustration with reality', 'Scattered intensity', 'Impossible ideals'],
    innerExperience:
      'Beauty and perfection are possible—you can see them clearly. Creating them is another matter.',
    subtypes: {
      sp: {
        title: 'The Practical Dreamer',
        focus: 'Building resources to support creative ideals and beautiful living',
        blindspot: 'May oscillate between practical concerns and idealistic frustration',
        relationships: 'Shows care through creating better environments and inspiring improvement',
        stressLoop: 'Becomes frustrated and self-critical when reality doesn\'t match vision'
      },
      so: {
        title: 'The Inspiring Idealist',
        focus: 'Being recognized for creative vision that serves higher ideals',
        blindspot: 'May become preachy about ideals while avoiding ground-level work',
        relationships: 'Connects through shared vision and inspiring collective improvement',
        stressLoop: 'Becomes scattered and self-righteous when community doesn\'t share ideals'
      },
      sx: {
        title: 'The Passionate Visionary',
        focus: 'Creating intense bonds through shared pursuit of ideal beauty and truth',
        blindspot: 'May project impossible ideals onto partners, always finding disappointment',
        relationships: 'Forms deep connections around mutual dreams and creative partnership',
        stressLoop: 'Becomes restless and critical when partner can\'t match idealistic vision'
      }
    }
  },

  // ============ HEAD-LED TRITYPES (5, 6, 7 primary) ============

  // 5-led tritypes
  '5-8-2': {
    code: '582',
    name: 'The Strategist',
    archetype: 'Protective Analyst',
    description:
      'Combines the insight of 5, the power of 8, and the warmth of 2. You protect through knowledge and strategic care.',
    strengths: ['Strategic protection', 'Insightful care', 'Powerful knowledge'],
    challenges: ['Control through knowledge', 'Selective vulnerability', 'Intensity'],
    innerExperience:
      'Knowledge is power, and power protects what you love. You strategize care from a safe distance.',
    subtypes: {
      sp: {
        title: 'The Resource Guardian',
        focus: 'Building secure foundations and protecting loved ones through strategic accumulation',
        blindspot: 'May become hoarding and controlling, equating love with provision',
        relationships: 'Shows care through protecting resources and strategic planning',
        stressLoop: 'Withdraws into fortress mentality, controlling through provision'
      },
      so: {
        title: 'The Strategic Leader',
        focus: 'Being recognized as knowledgeable protector and strategic guide for groups',
        blindspot: 'May use intellectual status to maintain power rather than genuine connection',
        relationships: 'Connects through offering expertise and protective guidance',
        stressLoop: 'Becomes domineering expert when group doesn\'t follow strategy'
      },
      sx: {
        title: 'The Intense Protector',
        focus: 'Protecting chosen individuals through deep understanding and powerful devotion',
        blindspot: 'May become possessively protective, overwhelming partners with intensity',
        relationships: 'Forms deep bonds through strategic care and protective knowledge',
        stressLoop: 'Becomes controlling and invasive when loved one seems threatened'
      }
    }
  },
  '5-8-3': {
    code: '583',
    name: 'The Mastermind',
    archetype: 'Strategic Achiever',
    description:
      'Combines the analysis of 5, the power of 8, and the drive of 3. You achieve through intellectual dominance.',
    strengths: ['Strategic mastery', 'Intellectual power', 'Driven analysis'],
    challenges: ['Isolation', 'Dominance', 'Emotional unavailability'],
    innerExperience:
      'Understanding gives you power, and power brings success. You pursue all three relentlessly.',
    subtypes: {
      sp: {
        title: 'The Empire Strategist',
        focus: 'Building wealth and power through analytical mastery and strategic execution',
        blindspot: 'May become ruthlessly efficient, neglecting all non-strategic relationships',
        relationships: 'Shows care through successful provision and strategic advancement',
        stressLoop: 'Overworks into isolation, using analysis to avoid emotional engagement'
      },
      so: {
        title: 'The Power Intellectual',
        focus: 'Achieving status and influence through demonstrated intellectual superiority',
        blindspot: 'May use knowledge competitively, seeing others as obstacles or tools',
        relationships: 'Connects through professional hierarchies and intellectual domination',
        stressLoop: 'Becomes coldly ambitious when intellectual status feels threatened'
      },
      sx: {
        title: 'The Magnetic Mind',
        focus: 'Captivating chosen individuals through powerful intellect and strategic intensity',
        blindspot: 'May use brilliance to control relationships, keeping partners impressed but distant',
        relationships: 'Forms intense bonds through intellectual seduction and powerful presence',
        stressLoop: 'Becomes domineering and emotionally unavailable when feeling vulnerable'
      }
    }
  },
  '5-8-4': {
    code: '584',
    name: 'The Iconoclast',
    archetype: 'Intense Analyst',
    description:
      'Combines the depth of 5, the intensity of 8, and the individuality of 4. You understand through transformative insight.',
    strengths: ['Penetrating insight', 'Intense understanding', 'Unique perspective'],
    challenges: ['Isolation', 'Overwhelming intensity', 'Difficulty with connection'],
    innerExperience:
      'Truth requires depth and power. You understand through intensity that others find overwhelming.',
    subtypes: {
      sp: {
        title: 'The Dark Scholar',
        focus: 'Building secure retreats for deep, intense exploration of dark territories',
        blindspot: 'May become increasingly isolated, preferring theories to human contact',
        relationships: 'Shows care through rare, deep sharing and protective distance',
        stressLoop: 'Retreats completely into dark analysis when overwhelmed by demands'
      },
      so: {
        title: 'The Provocative Thinker',
        focus: 'Being recognized for unique, intense insights that challenge conventions',
        blindspot: 'May cultivate outsider status to avoid real belonging and vulnerability',
        relationships: 'Connects through intellectual provocation and intense discourse',
        stressLoop: 'Becomes more isolated and intense when ideas aren\'t valued'
      },
      sx: {
        title: 'The Intense Mind',
        focus: 'Creating profound connections through shared exploration of depth and power',
        blindspot: 'May overwhelm partners with intensity while remaining emotionally guarded',
        relationships: 'Forms consuming bonds around mutual exploration of darkness and truth',
        stressLoop: 'Becomes controlling and overwhelming when intimacy threatens boundaries'
      }
    }
  },
  '5-9-2': {
    code: '592',
    name: 'The Advisor',
    archetype: 'Gentle Sage',
    description:
      'Combines the wisdom of 5, the peace of 9, and the care of 2. You help through quiet understanding.',
    strengths: ['Wise counsel', 'Peaceful insight', 'Gentle expertise'],
    challenges: ['Withdrawal', 'Passive helping', 'Avoiding engagement'],
    innerExperience:
      'Wisdom flows best through stillness. You understand quietly and offer what you know gently.',
    subtypes: {
      sp: {
        title: 'The Quiet Helper',
        focus: 'Creating comfortable, secure spaces from which to offer gentle wisdom',
        blindspot: 'May withdraw from needs while believing availability is help',
        relationships: 'Shows care through peaceful presence and unobtrusive support',
        stressLoop: 'Retreats into comfortable routine, offering less and less over time'
      },
      so: {
        title: 'The Community Sage',
        focus: 'Being valued in communities for wise, peaceful counsel and gentle expertise',
        blindspot: 'May remain too passive to take action when groups need leadership',
        relationships: 'Connects through sharing wisdom and supporting from the margins',
        stressLoop: 'Merges with group expectations while withdrawing actual contribution'
      },
      sx: {
        title: 'The Gentle Guide',
        focus: 'Creating deep one-to-one connections through quiet understanding and care',
        blindspot: 'May remain too passive in relationships, expecting intuitive understanding',
        relationships: 'Forms gentle bonds through peaceful presence and devoted attention',
        stressLoop: 'Withdraws into solitude while hoping partner intuits needs'
      }
    }
  },
  '5-9-3': {
    code: '593',
    name: 'The Professional',
    archetype: 'Composed Expert',
    description:
      'Combines the knowledge of 5, the calm of 9, and the achievement of 3. You succeed through quiet expertise.',
    strengths: ['Calm competence', 'Professional mastery', 'Steady achievement'],
    challenges: ['Passivity', 'Ambition avoidance', 'Emotional distance'],
    innerExperience:
      'Mastery speaks for itself. You achieve through understanding, without drama.',
    subtypes: {
      sp: {
        title: 'The Secure Expert',
        focus: 'Building financial security through steady expertise and calm competence',
        blindspot: 'May become so comfortable that growth stops and ambition fades',
        relationships: 'Shows care through reliable provision and competent presence',
        stressLoop: 'Withdraws into comfortable routine when pushed toward change'
      },
      so: {
        title: 'The Quiet Achiever',
        focus: 'Being recognized for calm competence within professional communities',
        blindspot: 'May merge with institutional identity while avoiding personal investment',
        relationships: 'Connects through professional contexts and shared expertise',
        stressLoop: 'Becomes passive-aggressive when not receiving expected recognition'
      },
      sx: {
        title: 'The Composed Partner',
        focus: 'Creating stable bonds through calm competence and quiet reliability',
        blindspot: 'May remain emotionally distant while appearing present',
        relationships: 'Forms steady connections through reliable presence and expertise',
        stressLoop: 'Detaches emotionally when intimacy demands feel overwhelming'
      }
    }
  },
  '5-9-4': {
    code: '594',
    name: 'The Hermit',
    archetype: 'Contemplative Sage',
    description:
      'Combines the withdrawal of 5, the peace of 9, and the depth of 4. You live in profound inner worlds.',
    strengths: ['Deep contemplation', 'Unique understanding', 'Quiet creativity'],
    challenges: ['Extreme withdrawal', 'Difficulty engaging', 'Isolation'],
    innerExperience:
      'The inner world is infinite and meaningful. Why venture out when so much waits within?',
    subtypes: {
      sp: {
        title: 'The Inner Castle',
        focus: 'Creating secure, comfortable retreats for endless inner exploration',
        blindspot: 'May withdraw so completely that practical life becomes neglected',
        relationships: 'Shows care through rare, deep sharing and protective solitude',
        stressLoop: 'Retreats into comfortable isolation, letting world fade away'
      },
      so: {
        title: 'The Contemplative Observer',
        focus: 'Being valued for unique insights while remaining on the margins of community',
        blindspot: 'May observe groups without ever truly joining or contributing',
        relationships: 'Connects through shared contemplation and observational depth',
        stressLoop: 'Withdraws into melancholy isolation when feeling misunderstood'
      },
      sx: {
        title: 'The Soulful Hermit',
        focus: 'Creating rare, deep connections through shared inner exploration',
        blindspot: 'May idealize connection while struggling to sustain real presence',
        relationships: 'Forms profound bonds through mutual contemplation and depth',
        stressLoop: 'Withdraws into fantasy of ideal connection when relating requires effort'
      }
    }
  },
  '5-1-2': {
    code: '512',
    name: 'The Teacher',
    archetype: 'Principled Expert',
    description:
      'Combines the knowledge of 5, the standards of 1, and the care of 2. You improve others through rigorous knowledge.',
    strengths: ['Expert teaching', 'Principled knowledge', 'Informed care'],
    challenges: ['Critical expertise', 'Perfectionism', 'Conditional helping'],
    innerExperience:
      'Knowledge should be accurate and useful. You share what you know with care and precision.',
    subtypes: {
      sp: {
        title: 'The Practical Instructor',
        focus: 'Building security through teaching valuable skills and useful knowledge',
        blindspot: 'May become rigidly focused on practical applications, missing bigger picture',
        relationships: 'Shows care through teaching, improving, and sharing useful expertise',
        stressLoop: 'Becomes critical and withholding when contributions aren\'t appreciated'
      },
      so: {
        title: 'The Expert Guide',
        focus: 'Being recognized as authoritative teacher who improves communities through knowledge',
        blindspot: 'May use expertise to feel needed while maintaining emotional distance',
        relationships: 'Connects through educational roles and sharing principled knowledge',
        stressLoop: 'Becomes critical and withdrawn when expertise isn\'t respected'
      },
      sx: {
        title: 'The Devoted Mentor',
        focus: 'Improving chosen individuals through dedicated teaching and principled care',
        blindspot: 'May become critical or conditional in close relationships',
        relationships: 'Forms deep bonds through mentorship and devoted intellectual care',
        stressLoop: 'Becomes critical and demanding when partner doesn\'t meet standards'
      }
    }
  },
  '5-1-3': {
    code: '513',
    name: 'The Technician',
    archetype: 'Expert Achiever',
    description:
      'Combines the analysis of 5, the precision of 1, and the drive of 3. You achieve through technical excellence.',
    strengths: ['Technical mastery', 'Precise achievement', 'Competent standards'],
    challenges: ['Perfectionism', 'Cold efficiency', 'Achievement through knowledge'],
    innerExperience:
      'Excellence requires knowledge and precision. You achieve through understanding, correctly.',
    subtypes: {
      sp: {
        title: 'The Technical Master',
        focus: 'Building security through demonstrated technical excellence and precise work',
        blindspot: 'May become rigidly focused on perfection, never feeling "good enough"',
        relationships: 'Shows care through reliable expertise and improving shared systems',
        stressLoop: 'Perfects endlessly in isolation when work doesn\'t meet impossible standards'
      },
      so: {
        title: 'The Expert Achiever',
        focus: 'Being recognized for technical excellence and principled achievement',
        blindspot: 'May prioritize appearing competent over genuine connection',
        relationships: 'Connects through professional excellence and demonstrated mastery',
        stressLoop: 'Becomes coldly efficient and withdrawn when competence is questioned'
      },
      sx: {
        title: 'The Excellence Partner',
        focus: 'Creating deep bonds through shared pursuit of technical mastery and standards',
        blindspot: 'May hold partners to impossible standards while remaining emotionally distant',
        relationships: 'Forms connections around mutual improvement and precise excellence',
        stressLoop: 'Becomes critical and perfectionistic when partner doesn\'t share standards'
      }
    }
  },
  '5-1-4': {
    code: '514',
    name: 'The Iconoclast',
    archetype: 'Principled Individualist',
    description:
      'Combines the insight of 5, the ideals of 1, and the depth of 4. You pursue unique truth with rigorous authenticity.',
    strengths: ['Principled insight', 'Unique standards', 'Deep understanding'],
    challenges: ['Isolation', 'Critical idealism', 'Impossible standards'],
    innerExperience:
      'Truth must be both accurate and meaningful. You pursue understanding that meets the highest standards.',
    subtypes: {
      sp: {
        title: 'The Solitary Philosopher',
        focus: 'Building secure foundations for deep, principled exploration of unique truth',
        blindspot: 'May become increasingly isolated, standards too high for any connection',
        relationships: 'Shows care through rare, deep sharing and principled authenticity',
        stressLoop: 'Withdraws into critical perfectionism when world doesn\'t meet standards'
      },
      so: {
        title: 'The Principled Voice',
        focus: 'Being recognized for unique insights and authentically principled perspective',
        blindspot: 'May feel perpetually misunderstood, standards too high for any community',
        relationships: 'Connects through intellectual depth and shared pursuit of meaningful truth',
        stressLoop: 'Becomes rigidly critical and isolated when ideas aren\'t valued'
      },
      sx: {
        title: 'The Intense Idealist',
        focus: 'Creating deep bonds through shared pursuit of authentic, principled truth',
        blindspot: 'May combine emotional intensity with critical standards, overwhelming partners',
        relationships: 'Forms profound connections around mutual depth and principled authenticity',
        stressLoop: 'Becomes coldly critical and withdrawn when partner doesn\'t match ideals'
      }
    }
  },

  // 6-led tritypes
  '6-8-2': {
    code: '682',
    name: 'The Guardian',
    archetype: 'Protective Loyalist',
    description:
      'Combines the loyalty of 6, the power of 8, and the care of 2. You protect your people with fierce devotion.',
    strengths: ['Protective loyalty', 'Fierce care', 'Strong devotion'],
    challenges: ['Over-protection', 'Anxiety about threats', 'Control through care'],
    innerExperience:
      'Your people must be protected. You stay vigilant, strong, and caring—always ready.',
    subtypes: {
      sp: {
        title: 'The Family Protector',
        focus: 'Building secure foundations and protecting loved ones through strength',
        blindspot: 'May over-prepare for threats, creating fortress mentality that limits freedom',
        relationships: 'Shows care through vigilant protection and resource provision',
        stressLoop: 'Becomes hypervigilant and controlling when security feels threatened'
      },
      so: {
        title: 'The Community Guardian',
        focus: 'Protecting group members and being recognized as reliable community defender',
        blindspot: 'May over-identify with protector role, losing own needs in service',
        relationships: 'Connects through duty to group and loyal, protective presence',
        stressLoop: 'Becomes anxiously controlling when community seems threatened'
      },
      sx: {
        title: 'The Fierce Devotee',
        focus: 'Protecting chosen individuals with intense loyalty and powerful devotion',
        blindspot: 'May become possessively protective, overwhelming partners',
        relationships: 'Forms intense bonds through fierce loyalty and devoted strength',
        stressLoop: 'Becomes controlling and suspicious when partner seems vulnerable or distant'
      }
    }
  },
  '6-8-3': {
    code: '683',
    name: 'The Enforcer',
    archetype: 'Powerful Loyalist',
    description:
      'Combines the loyalty of 6, the strength of 8, and the drive of 3. You achieve through loyal power.',
    strengths: ['Powerful loyalty', 'Driven protection', 'Strong achievement'],
    challenges: ['Control needs', 'Success anxiety', 'Dominance'],
    innerExperience:
      'Success serves security. You build power to protect, achieve to ensure safety.',
    subtypes: {
      sp: {
        title: 'The Security Builder',
        focus: 'Building material security through powerful achievement and loyal effort',
        blindspot: 'May equate success with safety, never feeling secure enough to rest',
        relationships: 'Shows care through achieving security and providing protection',
        stressLoop: 'Overworks anxiously, using achievement to manage security fears'
      },
      so: {
        title: 'The Institutional Force',
        focus: 'Achieving power within systems to create security for loyal groups',
        blindspot: 'May become rigidly hierarchical, conflating position with safety',
        relationships: 'Connects through institutional loyalty and protective leadership',
        stressLoop: 'Becomes controlling and anxious when organizational status feels threatened'
      },
      sx: {
        title: 'The Powerful Partner',
        focus: 'Creating security in chosen relationships through strength and achievement',
        blindspot: 'May use dominance and success to control intimate relationships',
        relationships: 'Forms intense bonds through protective strength and driven devotion',
        stressLoop: 'Becomes domineering and anxious when partner seems unreliable'
      }
    }
  },
  '6-8-4': {
    code: '684',
    name: 'The Warrior',
    archetype: 'Passionate Defender',
    description:
      'Combines the vigilance of 6, the intensity of 8, and the authenticity of 4. You defend truth with passionate intensity.',
    strengths: ['Passionate defense', 'Authentic vigilance', 'Intense loyalty'],
    challenges: ['Reactivity', 'Suspicion', 'Emotional intensity'],
    innerExperience:
      'Truth needs defending, and you feel everything intensely. Your vigilance has depth.',
    subtypes: {
      sp: {
        title: 'The Defensive Artist',
        focus: 'Building security through intense authenticity and defensive strength',
        blindspot: 'May become paranoid and reactive, seeing threats everywhere',
        relationships: 'Shows care through fierce protection and authentic defense',
        stressLoop: 'Becomes intensely reactive and suspicious when security feels threatened'
      },
      so: {
        title: 'The Truth Defender',
        focus: 'Defending authentic truth within groups with passionate vigilance',
        blindspot: 'May become combative outsider, always fighting but never belonging',
        relationships: 'Connects through shared causes and passionate authenticity',
        stressLoop: 'Becomes more reactive and suspicious when group seems inauthentic'
      },
      sx: {
        title: 'The Intense Defender',
        focus: 'Protecting chosen relationships through passionate intensity and loyalty',
        blindspot: 'May test relationships through conflict, never trusting stability',
        relationships: 'Forms volatile bonds through fierce devotion and emotional depth',
        stressLoop: 'Becomes suspicious and testing when intimacy feels uncertain'
      }
    }
  },
  '6-9-2': {
    code: '692',
    name: 'The Caretaker',
    archetype: 'Supportive Loyalist',
    description:
      'Combines the loyalty of 6, the harmony of 9, and the care of 2. You support through steady, peaceful devotion.',
    strengths: ['Steady support', 'Loyal harmony', 'Peaceful care'],
    challenges: ['Over-accommodation', 'Anxiety suppression', 'Self-neglect'],
    innerExperience:
      'Everyone needs someone steady. You provide calm support while managing your worries quietly.',
    subtypes: {
      sp: {
        title: 'The Steady Provider',
        focus: 'Creating secure, harmonious environments through reliable care',
        blindspot: 'May suppress own needs while anxiously maintaining comfort for others',
        relationships: 'Shows care through reliable presence and peaceful provision',
        stressLoop: 'Becomes passive and anxious while accommodating everyone\'s needs'
      },
      so: {
        title: 'The Community Support',
        focus: 'Being valued as reliable, peaceful helper within groups',
        blindspot: 'May lose self in group accommodation while harboring hidden anxiety',
        relationships: 'Connects through supportive presence and loyal belonging',
        stressLoop: 'Becomes anxiously over-committed when group harmony feels threatened'
      },
      sx: {
        title: 'The Devoted Companion',
        focus: 'Creating peaceful, secure bonds through steady devotion to chosen individuals',
        blindspot: 'May merge with partner\'s needs while suppressing own anxiety',
        relationships: 'Forms steady bonds through loyal presence and accommodating care',
        stressLoop: 'Becomes anxiously accommodating while losing sense of self'
      }
    }
  },
  '6-9-3': {
    code: '693',
    name: 'The Mediator',
    archetype: 'Harmonious Loyalist',
    description:
      'Combines the loyalty of 6, the peace of 9, and the achievement of 3. You achieve harmony through steady effort.',
    strengths: ['Diplomatic loyalty', 'Harmonious achievement', 'Reliable peacemaking'],
    challenges: ['Indecision', 'People-pleasing', 'Anxiety about success'],
    innerExperience:
      'Success should bring everyone together. You work for achievement that creates harmony.',
    subtypes: {
      sp: {
        title: 'The Safe Achiever',
        focus: 'Building security through harmonious achievement and steady success',
        blindspot: 'May avoid risks, choosing safe paths that don\'t threaten harmony',
        relationships: 'Shows care through reliable success and peaceful provision',
        stressLoop: 'Becomes anxiously indecisive when achievement threatens harmony'
      },
      so: {
        title: 'The Diplomatic Achiever',
        focus: 'Achieving recognition through bringing groups together successfully',
        blindspot: 'May achieve consensus at cost of authentic direction',
        relationships: 'Connects through facilitating group success and belonging',
        stressLoop: 'Becomes anxiously people-pleasing when group approval feels uncertain'
      },
      sx: {
        title: 'The Harmonious Partner',
        focus: 'Creating successful, harmonious bonds with chosen individuals',
        blindspot: 'May lose own goals while maintaining relationship harmony',
        relationships: 'Forms steady bonds through shared achievement and peaceful devotion',
        stressLoop: 'Becomes anxiously accommodating when partner shows displeasure'
      }
    }
  },
  '6-9-4': {
    code: '694',
    name: 'The Questioner',
    archetype: 'Thoughtful Loyalist',
    description:
      'Combines the doubt of 6, the withdrawal of 9, and the depth of 4. You question from a place of deep feeling.',
    strengths: ['Deep questioning', 'Emotional loyalty', 'Thoughtful doubt'],
    challenges: ['Paralysis', 'Melancholy anxiety', 'Withdrawal'],
    innerExperience:
      'Questions have depth and feeling. Your doubt searches for something meaningful.',
    subtypes: {
      sp: {
        title: 'The Contemplative Doubter',
        focus: 'Building security while questioning from a place of withdrawn depth',
        blindspot: 'May become paralyzed by combined anxiety, withdrawal, and emotional complexity',
        relationships: 'Shows care through loyal presence and thoughtful understanding',
        stressLoop: 'Withdraws into melancholy questioning when security feels uncertain'
      },
      so: {
        title: 'The Searching Outsider',
        focus: 'Seeking belonging while questioning group authenticity from emotional depth',
        blindspot: 'May feel perpetually excluded, too sensitive and doubtful to truly join',
        relationships: 'Connects through shared questioning and emotional understanding',
        stressLoop: 'Becomes melancholy and anxious when feeling both unique and excluded'
      },
      sx: {
        title: 'The Longing Questioner',
        focus: 'Creating deep bonds while questioning whether connection can be trusted',
        blindspot: 'May idealize then doubt partners, never trusting security in love',
        relationships: 'Forms intense bonds marked by both depth and uncertainty',
        stressLoop: 'Oscillates between clinging and withdrawing when intimacy feels unstable'
      }
    }
  },
  '6-1-2': {
    code: '612',
    name: 'The Servant',
    archetype: 'Dutiful Loyalist',
    description:
      'Combines the loyalty of 6, the duty of 1, and the service of 2. You serve with principled devotion.',
    strengths: ['Principled loyalty', 'Devoted service', 'Reliable duty'],
    challenges: ['Anxiety about doing right', 'Rigid devotion', 'Over-responsibility'],
    innerExperience:
      'Service is sacred duty. You give according to principles to those who earn your loyalty.',
    subtypes: {
      sp: {
        title: 'The Dutiful Provider',
        focus: 'Building security through principled service and reliable duty',
        blindspot: 'May become anxiously rigid, never feeling good enough in service',
        relationships: 'Shows care through reliable helping and principled devotion',
        stressLoop: 'Becomes anxiously over-responsible when duties feel uncertain'
      },
      so: {
        title: 'The Community Servant',
        focus: 'Being valued for principled service and dutiful contribution to groups',
        blindspot: 'May over-identify with institutional roles while anxiously doubting worth',
        relationships: 'Connects through shared duty and loyal, principled belonging',
        stressLoop: 'Becomes rigid and anxious when unable to fulfill group expectations'
      },
      sx: {
        title: 'The Devoted Helper',
        focus: 'Creating secure bonds through principled devotion and dutiful care',
        blindspot: 'May become anxiously over-responsible for partner\'s wellbeing',
        relationships: 'Forms loyal bonds through devoted service and principled caring',
        stressLoop: 'Becomes rigidly helpful and anxious when partner seems ungrateful'
      }
    }
  },
  '6-1-3': {
    code: '613',
    name: 'The Taskmaster',
    archetype: 'Organized Loyalist',
    description:
      'Combines the reliability of 6, the structure of 1, and the drive of 3. You achieve through dutiful organization.',
    strengths: ['Organized loyalty', 'Principled achievement', 'Reliable structure'],
    challenges: ['Rigidity', 'Anxiety about performance', 'Fear of failure'],
    innerExperience:
      'Success comes from doing things right, reliably. You build security through achievement.',
    subtypes: {
      sp: {
        title: 'The Structured Achiever',
        focus: 'Building security through organized achievement and reliable standards',
        blindspot: 'May become rigidly workaholic, equating productivity with safety',
        relationships: 'Shows care through reliable provision and structured excellence',
        stressLoop: 'Works anxiously to prove worth through perfect performance'
      },
      so: {
        title: 'The Organizational Star',
        focus: 'Achieving recognition within systems through principled, reliable excellence',
        blindspot: 'May over-identify with institutional success while fearing failure',
        relationships: 'Connects through professional hierarchies and dutiful achievement',
        stressLoop: 'Becomes rigidly anxious when organizational position feels threatened'
      },
      sx: {
        title: 'The Reliable Partner',
        focus: 'Creating secure bonds through structured achievement and principled effort',
        blindspot: 'May use achievement to prove worth in relationships, fearing rejection',
        relationships: 'Forms loyal bonds through reliable success and dutiful devotion',
        stressLoop: 'Becomes performance-anxious and rigid when partner seems critical'
      }
    }
  },
  '6-1-4': {
    code: '614',
    name: 'The Purist',
    archetype: 'Principled Questioner',
    description:
      'Combines the doubt of 6, the ideals of 1, and the authenticity of 4. You question in pursuit of authentic truth.',
    strengths: ['Principled questioning', 'Authentic ideals', 'Deep conscience'],
    challenges: ['Anxiety', 'Self-criticism', 'Impossible standards'],
    innerExperience:
      'Something isn\'t right, and you must find what is. Your questioning serves deeper truth.',
    subtypes: {
      sp: {
        title: 'The Anxious Perfectionist',
        focus: 'Building security through principled authenticity and careful standards',
        blindspot: 'May become paralyzed by combined anxiety, criticism, and depth',
        relationships: 'Shows care through conscientious concern and authentic devotion',
        stressLoop: 'Becomes increasingly anxious and self-critical when standards aren\'t met'
      },
      so: {
        title: 'The Moral Questioner',
        focus: 'Questioning group authenticity from principled, emotional perspective',
        blindspot: 'May feel perpetually disappointed, standards too high for any community',
        relationships: 'Connects through shared conscience and authentic questioning',
        stressLoop: 'Becomes anxiously critical when community lacks integrity'
      },
      sx: {
        title: 'The Intense Conscience',
        focus: 'Creating deep bonds through principled authenticity and conscientious depth',
        blindspot: 'May combine emotional intensity with criticism, testing partners',
        relationships: 'Forms profound bonds around shared ideals and authentic questioning',
        stressLoop: 'Becomes anxiously critical when partner doesn\'t meet moral standards'
      }
    }
  },

  // 7-led tritypes
  '7-8-2': {
    code: '782',
    name: 'The Entertainer',
    archetype: 'Generous Adventurer',
    description:
      'Combines the enthusiasm of 7, the power of 8, and the warmth of 2. You create joyful abundance for everyone.',
    strengths: ['Generous enthusiasm', 'Powerful warmth', 'Joyful giving'],
    challenges: ['Over-extension', 'Avoiding pain', 'Dominating fun'],
    innerExperience:
      'Life should be abundant and shared. Your energy creates experiences for everyone to enjoy.',
    subtypes: {
      sp: {
        title: 'The Abundant Provider',
        focus: 'Creating material abundance and exciting experiences for self and loved ones',
        blindspot: 'May over-extend resources in pursuit of pleasurable security',
        relationships: 'Shows care through generous provision and exciting experiences',
        stressLoop: 'Becomes scattered and controlling when abundance feels threatened'
      },
      so: {
        title: 'The Social Host',
        focus: 'Creating joyful experiences for groups and being seen as generous leader',
        blindspot: 'May sacrifice own needs while dominating group fun',
        relationships: 'Connects through hosting, entertaining, and generous social energy',
        stressLoop: 'Becomes over-extended and controlling when social influence wanes'
      },
      sx: {
        title: 'The Passionate Giver',
        focus: 'Creating exciting experiences for chosen individuals with intense generosity',
        blindspot: 'May overwhelm partners with aggressive giving and intensity',
        relationships: 'Forms intense bonds through passionate generosity and shared excitement',
        stressLoop: 'Becomes dominating and restless when partner doesn\'t match enthusiasm'
      }
    }
  },
  '7-8-3': {
    code: '783',
    name: 'The Mogul',
    archetype: 'Dynamic Achiever',
    description:
      'Combines the vision of 7, the power of 8, and the drive of 3. You pursue big success with bold enthusiasm.',
    strengths: ['Bold vision', 'Powerful drive', 'Dynamic success'],
    challenges: ['Overreach', 'Avoidance of failure', 'Dominance'],
    innerExperience:
      'Go big and make it happen. Success should be bold, powerful, and a little bit fun.',
    subtypes: {
      sp: {
        title: 'The Empire Builder',
        focus: 'Building material empires and abundant lifestyle through bold achievement',
        blindspot: 'May pursue endless expansion, never feeling satisfied with enough',
        relationships: 'Shows care through providing exciting lifestyle and bold success',
        stressLoop: 'Takes on too many ventures, spreading resources thin while avoiding pain'
      },
      so: {
        title: 'The Dynamic Leader',
        focus: 'Building powerful public presence and being seen as bold, successful leader',
        blindspot: 'May sacrifice authenticity for image and broad social influence',
        relationships: 'Connects through shared ambition and exciting group ventures',
        stressLoop: 'Becomes image-obsessed and dominating when relevance feels threatened'
      },
      sx: {
        title: 'The Charismatic Force',
        focus: 'Captivating chosen individuals through powerful vision and dynamic energy',
        blindspot: 'May use charm and power manipulatively to maintain admiration',
        relationships: 'Creates whirlwind connections full of excitement and grand gestures',
        stressLoop: 'Becomes domineering and restless when partner shows independence'
      }
    }
  },
  '7-8-4': {
    code: '784',
    name: 'The Maverick',
    archetype: 'Intense Adventurer',
    description:
      'Combines the freedom of 7, the intensity of 8, and the depth of 4. You pursue intense, meaningful experiences.',
    strengths: ['Intense adventure', 'Meaningful freedom', 'Passionate exploration'],
    challenges: ['Emotional intensity', 'Restlessness', 'Difficulty with stability'],
    innerExperience:
      'Experience should have depth and intensity. You refuse to settle for shallow adventure.',
    subtypes: {
      sp: {
        title: 'The Resourceful Explorer',
        focus: 'Building resources to support intense, meaningful experiences',
        blindspot: 'May oscillate between scarcity fears and dramatic expansion',
        relationships: 'Shows care through creating meaningful experiences and protecting freedom',
        stressLoop: 'Swings between intense exploration and restless dissatisfaction'
      },
      so: {
        title: 'The Intense Outsider',
        focus: 'Being recognized for unique depth while maintaining freedom from conformity',
        blindspot: 'May cultivate outsider status to avoid genuine belonging',
        relationships: 'Connects through shared intensity and meaningful adventure',
        stressLoop: 'Becomes more intense and restless when feeling misunderstood'
      },
      sx: {
        title: 'The Passionate Adventurer',
        focus: 'Creating intense one-to-one connections through shared depth and adventure',
        blindspot: 'May overwhelm partners with emotional intensity and restless demands',
        relationships: 'Forms consuming bonds through passionate exploration and depth',
        stressLoop: 'Becomes volatile and restless when connection feels shallow'
      }
    }
  },
  '7-9-2': {
    code: '792',
    name: 'The Peacemaker',
    archetype: 'Harmonious Optimist',
    description:
      'Combines the optimism of 7, the peace of 9, and the warmth of 2. You spread joy and harmony effortlessly.',
    strengths: ['Joyful harmony', 'Warm optimism', 'Peaceful enthusiasm'],
    challenges: ['Conflict avoidance', 'Superficiality', 'Scattered attention'],
    innerExperience:
      'Why not keep things pleasant? Your joy flows into creating harmony for everyone.',
    subtypes: {
      sp: {
        title: 'The Comfortable Host',
        focus: 'Creating pleasant, comfortable environments that meet everyone\'s needs',
        blindspot: 'May use comfort and hospitality to avoid deeper connection',
        relationships: 'Shows care through creating comfortable spaces and meeting practical needs',
        stressLoop: 'Becomes scattered and over-accommodating when anxious, neglecting own needs'
      },
      so: {
        title: 'The Social Harmonizer',
        focus: 'Creating joyful group experiences where everyone feels included',
        blindspot: 'May sacrifice authenticity to maintain pleasant group dynamics',
        relationships: 'Connects through cheerful inclusion and maintaining social harmony',
        stressLoop: 'Becomes more scattered and people-pleasing when group harmony feels threatened'
      },
      sx: {
        title: 'The Playful Companion',
        focus: 'Creating joyful, harmonious one-to-one connections through warmth and play',
        blindspot: 'May avoid depth in relationships by keeping things perpetually pleasant',
        relationships: 'Forms bonds through playful warmth and emotional attentiveness',
        stressLoop: 'Becomes passive and overly accommodating when connection feels at risk'
      }
    }
  },
  '7-9-3': {
    code: '793',
    name: 'The Performer',
    archetype: 'Charming Optimist',
    description:
      'Combines the enthusiasm of 7, the ease of 9, and the success of 3. You achieve with effortless charm.',
    strengths: ['Charming success', 'Easy enthusiasm', 'Pleasant achievement'],
    challenges: ['Avoiding depth', 'Surface success', 'Running from failure'],
    innerExperience:
      'Success should be enjoyable and effortless. Why struggle when you can flow?',
    subtypes: {
      sp: {
        title: 'The Comfortable Achiever',
        focus: 'Building material success while maintaining comfortable ease',
        blindspot: 'May coast on charm rather than developing deeper skills',
        relationships: 'Shows care through providing comfortable lifestyle and easy companionship',
        stressLoop: 'Becomes numbed out and over-focused on comfort when facing failure'
      },
      so: {
        title: 'The Charming Success',
        focus: 'Achieving social recognition while maintaining effortless likability',
        blindspot: 'May prioritize surface popularity over authentic achievement',
        relationships: 'Connects through charm, status, and making success look easy',
        stressLoop: 'Becomes more image-focused and scattered when social standing feels threatened'
      },
      sx: {
        title: 'The Magnetic Performer',
        focus: 'Captivating specific individuals through charm and effortless attractiveness',
        blindspot: 'May use performance to avoid authentic intimacy',
        relationships: 'Forms bonds through magnetic charm and making partners feel special',
        stressLoop: 'Becomes more performative and scattered when romantic interest wanes'
      }
    }
  },
  '7-9-4': {
    code: '794',
    name: 'The Dreamer',
    archetype: 'Imaginative Optimist',
    description:
      'Combines the vision of 7, the imagination of 9, and the creativity of 4. You dream beautiful possibilities.',
    strengths: ['Creative vision', 'Imaginative optimism', 'Artistic dreams'],
    challenges: ['Fantasy escape', 'Difficulty with reality', 'Scattered depth'],
    innerExperience:
      'Possibility and beauty live in imagination. The world of dreams is more interesting.',
    subtypes: {
      sp: {
        title: 'The Comfortable Dreamer',
        focus: 'Creating beautiful, comfortable environments that support creative imagination',
        blindspot: 'May use comfort and fantasy to avoid dealing with practical demands',
        relationships: 'Shows care through creating aesthetically pleasing, peaceful spaces',
        stressLoop: 'Retreats into fantasy and comfort when reality becomes too demanding'
      },
      so: {
        title: 'The Artistic Visionary',
        focus: 'Sharing creative vision with communities that appreciate unique imagination',
        blindspot: 'May feel perpetually misunderstood, using uniqueness as a barrier',
        relationships: 'Connects through shared aesthetic appreciation and imaginative exploration',
        stressLoop: 'Becomes withdrawn and melancholic when feeling unappreciated by groups'
      },
      sx: {
        title: 'The Romantic Dreamer',
        focus: 'Creating intense, imaginative connections through shared fantasy and beauty',
        blindspot: 'May idealize partners while avoiding real relationship challenges',
        relationships: 'Forms bonds through romantic imagination and aesthetic intimacy',
        stressLoop: 'Swings between idealization and melancholic withdrawal in relationships'
      }
    }
  },
  '7-1-2': {
    code: '712',
    name: 'The Enthusiast',
    archetype: 'Principled Optimist',
    description:
      'Combines the enthusiasm of 7, the ideals of 1, and the warmth of 2. You inspire improvement with joyful energy.',
    strengths: ['Inspiring improvement', 'Warm idealism', 'Principled enthusiasm'],
    challenges: ['Frustration with imperfection', 'Over-extension', 'Avoiding pain'],
    innerExperience:
      'Making things better should be enjoyable. You improve with enthusiasm and warmth.',
    subtypes: {
      sp: {
        title: 'The Practical Improver',
        focus: 'Creating well-organized, efficient systems that help people thrive',
        blindspot: 'May become critical when practical details don\'t meet standards',
        relationships: 'Shows care through practical help and improving others\' circumstances',
        stressLoop: 'Oscillates between scattered enthusiasm and critical perfectionism'
      },
      so: {
        title: 'The Community Uplifter',
        focus: 'Inspiring groups toward improvement through enthusiastic principled leadership',
        blindspot: 'May become preachy or moralistic when trying to help',
        relationships: 'Connects through shared causes and inspiring collective improvement',
        stressLoop: 'Becomes more rigid and critical when groups resist improvement'
      },
      sx: {
        title: 'The Passionate Mentor',
        focus: 'Inspiring specific individuals toward growth through warm, principled guidance',
        blindspot: 'May become disappointed when partners don\'t meet idealistic expectations',
        relationships: 'Forms bonds through passionate encouragement and belief in others\' potential',
        stressLoop: 'Swings between enthusiastic support and critical disappointment'
      }
    }
  },
  '7-1-3': {
    code: '713',
    name: 'The Achiever',
    archetype: 'Driven Optimist',
    description:
      'Combines the energy of 7, the standards of 1, and the success of 3. You pursue principled success with enthusiasm.',
    strengths: ['Principled achievement', 'Energetic excellence', 'Driven idealism'],
    challenges: ['Perfectionism', 'Workaholism disguised as fun', 'Image management'],
    innerExperience:
      'Excellence and enjoyment go together. You achieve according to high standards, enthusiastically.',
    subtypes: {
      sp: {
        title: 'The Polished Professional',
        focus: 'Building exemplary career success through disciplined excellence',
        blindspot: 'May become a workaholic while believing they\'re just having fun',
        relationships: 'Shows care through achievement and providing high-quality lifestyle',
        stressLoop: 'Oscillates between driven perfectionism and scattered avoidance'
      },
      so: {
        title: 'The Principled Leader',
        focus: 'Achieving recognition for excellence while maintaining high ethical standards',
        blindspot: 'May become rigidly focused on image of principled success',
        relationships: 'Connects through demonstrated competence and moral leadership',
        stressLoop: 'Becomes more image-conscious and critical when status feels threatened'
      },
      sx: {
        title: 'The Impressive Partner',
        focus: 'Being the best version of oneself to attract and maintain ideal relationships',
        blindspot: 'May perfect self-presentation rather than developing authentic intimacy',
        relationships: 'Forms bonds through being impressive and meeting high relationship standards',
        stressLoop: 'Swings between intense self-improvement and critical dissatisfaction'
      }
    }
  },
  '7-1-4': {
    code: '714',
    name: 'The Idealist',
    archetype: 'Visionary Optimist',
    description:
      'Combines the vision of 7, the ideals of 1, and the creativity of 4. You envision beautiful, principled futures.',
    strengths: ['Creative idealism', 'Principled vision', 'Inspiring creativity'],
    challenges: ['Frustration with reality', 'Scattered intensity', 'Impossible ideals'],
    innerExperience:
      'Beauty and principle should guide the future. Your vision sees what could be, perfectly.',
    subtypes: {
      sp: {
        title: 'The Artful Perfectionist',
        focus: 'Creating beautiful, well-crafted environments that reflect high aesthetic standards',
        blindspot: 'May become frustrated when reality doesn\'t match idealized vision',
        relationships: 'Shows care through creating beautiful, principled living spaces',
        stressLoop: 'Oscillates between creative enthusiasm and critical melancholy about imperfection'
      },
      so: {
        title: 'The Visionary Reformer',
        focus: 'Inspiring communities toward more beautiful, principled ways of being',
        blindspot: 'May become critical and withdrawn when society fails to meet ideals',
        relationships: 'Connects through shared vision of a more beautiful, ethical world',
        stressLoop: 'Becomes more frustrated and melancholic when groups resist idealistic change'
      },
      sx: {
        title: 'The Romantic Idealist',
        focus: 'Creating transcendent, beautiful connections that embody highest ideals',
        blindspot: 'May hold partners to impossible standards of beauty and principle',
        relationships: 'Forms bonds through shared aesthetic idealism and creative vision',
        stressLoop: 'Swings between passionate idealization and critical disappointment in love'
      }
    }
  },
};

/**
 * Get tritype info from tritype components
 */
export function getTritypeInfo(
  gut: TypeNumber,
  heart: TypeNumber,
  head: TypeNumber,
  primaryCenter: PrimaryCenter = 'gut'
): TritypeInfo | null {
  const key = getTritypeKey(gut, heart, head, primaryCenter);
  return tritypeDescriptions[key] || null;
}

/**
 * Get tritype info from tritype code (e.g., "479")
 */
export function getTritypeInfoFromCode(code: string): TritypeInfo | null {
  const digits = code.replace(/\D/g, '').split('').map(Number) as TypeNumber[];
  if (digits.length !== 3) return null;

  const primaryType = digits[0];
  const primaryCenter = getPrimaryCenterByType(primaryType);
  if (!primaryCenter) return null;

  let gut: TypeNumber | undefined;
  let heart: TypeNumber | undefined;
  let head: TypeNumber | undefined;

  for (const d of digits) {
    if (CENTERS.gut.includes(d)) gut = d;
    else if (CENTERS.heart.includes(d)) heart = d;
    else if (CENTERS.head.includes(d)) head = d;
  }

  if (!gut || !heart || !head) return null;

  return getTritypeInfo(gut, heart, head, primaryCenter);
}


// ============ TRI-FIX ALIASES (non-trademarked term) ============
// These are aliases for the tritype exports using the community-preferred "tri-fix" terminology

export type TriFixInfo = TritypeInfo;
export const triFixDescriptions = tritypeDescriptions;
export const getTriFixKey = getTritypeKey;
export const getTriFixInfo = getTritypeInfo;
export const getTriFixInfoFromCode = getTritypeInfoFromCode;
export const getTriFixCode = getTritypeCode;
