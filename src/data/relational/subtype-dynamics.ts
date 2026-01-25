import type { TypeNumber, InstinctType } from '../../types';

// How instinct pairings interact in relationships
export interface InstinctPairingDynamic {
  instinct1: InstinctType;
  instinct2: InstinctType;
  compatibility: 'high' | 'medium' | 'low';
  description: string;
  strengths: string[];
  challenges: string[];
  tips: string[];
}

// How each type's subtype variant shows up in relationships
export interface TypeSubtypeRelationshipStyle {
  type: TypeNumber;
  instinct: InstinctType;
  relationshipStyle: string;
  needsInRelationship: string[];
  givesInRelationship: string[];
  blindSpots: string[];
  idealPartnerQualities: string[];
}

// General instinct pairing dynamics (applies to any type combination)
export const instinctPairingDynamics: InstinctPairingDynamic[] = [
  // Same instinct pairings
  {
    instinct1: 'sp',
    instinct2: 'sp',
    compatibility: 'high',
    description: 'Two Self-Preservation types understand each other\'s focus on security, comfort, and practical needs. They naturally align on lifestyle priorities.',
    strengths: [
      'Shared focus on building a secure foundation',
      'Mutual understanding of resource management',
      'Aligned priorities around health, home, and finances',
      'Neither feels guilty about self-care needs'
    ],
    challenges: [
      'May become insular and isolated together',
      'Can reinforce each other\'s anxiety about security',
      'Risk of relationship becoming purely practical',
      'May neglect social connections and passion'
    ],
    tips: [
      'Intentionally cultivate social connections as a couple',
      'Balance security-building with spontaneous experiences',
      'Make sure comfort doesn\'t become stagnation',
      'Create rituals that include warmth and connection'
    ]
  },
  {
    instinct1: 'so',
    instinct2: 'so',
    compatibility: 'high',
    description: 'Two Social types thrive in community together. They understand each other\'s need for belonging, status, and social contribution.',
    strengths: [
      'Shared love of community involvement',
      'Natural hosting and networking partners',
      'Understand each other\'s social commitments',
      'Build extensive shared social world'
    ],
    challenges: [
      'May neglect private intimacy for social life',
      'Can compete for social position',
      'Risk of defining relationship by external validation',
      'May avoid one-on-one depth'
    ],
    tips: [
      'Protect private couple time from social obligations',
      'Support rather than compete with each other socially',
      'Define your relationship by internal values, not social perception',
      'Create intimacy rituals separate from your social identity'
    ]
  },
  {
    instinct1: 'sx',
    instinct2: 'sx',
    compatibility: 'high',
    description: 'Two Sexual/One-to-One types create intense, passionate bonds. They understand each other\'s need for depth, chemistry, and transformative connection.',
    strengths: [
      'Powerful chemistry and attraction',
      'Deep understanding of intensity needs',
      'Neither feels "too much" for the other',
      'Transformative, growth-oriented bond'
    ],
    challenges: [
      'Intensity can become consuming or destabilizing',
      'May neglect practical matters for passion',
      'Jealousy and possessiveness risks',
      'Can lose individual identity in merger'
    ],
    tips: [
      'Maintain individual interests and friendships',
      'Channel intensity into creative or growth pursuits',
      'Build practical foundations alongside passion',
      'Learn to tolerate "ordinary" moments together'
    ]
  },

  // Mixed instinct pairings
  {
    instinct1: 'sp',
    instinct2: 'so',
    compatibility: 'medium',
    description: 'Self-Preservation and Social types can complement each other—SP provides grounding while SO expands their world. Tension arises around privacy vs. social exposure.',
    strengths: [
      'SP grounds SO\'s social expansiveness',
      'SO brings SP out into the world',
      'Balance between private and public life',
      'Complementary skills in building life together'
    ],
    challenges: [
      'SP may feel drained by SO\'s social needs',
      'SO may feel limited by SP\'s desire for privacy',
      'Different priorities: security vs. belonging',
      'Conflict over how much to engage socially'
    ],
    tips: [
      'Negotiate social calendar together',
      'SP: Allow some social expansion without resentment',
      'SO: Protect SP\'s need for private recharge',
      'Find social activities that feel comfortable for both'
    ]
  },
  {
    instinct1: 'sp',
    instinct2: 'sx',
    compatibility: 'medium',
    description: 'Self-Preservation and Sexual types can create stable passion—SP provides security while SX provides intensity. Tension around intensity levels and risk tolerance.',
    strengths: [
      'SP provides stable foundation for SX\'s intensity',
      'SX brings passion and aliveness to SP',
      'Balance between security and excitement',
      'Can build something both stable and vital'
    ],
    challenges: [
      'SX may find SP too cautious or boring',
      'SP may find SX too intense or destabilizing',
      'Different needs for stimulation',
      'SP\'s boundaries may frustrate SX\'s merge impulse'
    ],
    tips: [
      'SX: Appreciate SP\'s grounding as love, not rejection',
      'SP: Allow some intensity without retreating',
      'Create "containers" for intensity within stability',
      'Balance adventure and security consciously'
    ]
  },
  {
    instinct1: 'so',
    instinct2: 'sx',
    compatibility: 'low',
    description: 'Social and Sexual types often struggle—SO distributes attention across many connections while SX wants exclusive intensity. This is often the most challenging pairing.',
    strengths: [
      'Can learn a lot from each other\'s worldview',
      'SO can help SX with social integration',
      'SX can deepen SO\'s connections',
      'Growth potential in opposite directions'
    ],
    challenges: [
      'SX feels neglected by SO\'s social distribution',
      'SO feels overwhelmed by SX\'s intensity demands',
      'Fundamental conflict: many vs. one',
      'SX may resent SO\'s social commitments'
    ],
    tips: [
      'Explicitly discuss different relating styles',
      'SO: Prioritize quality one-on-one time',
      'SX: Accept SO won\'t provide exclusive focus',
      'Find ways to be intense together within social contexts'
    ]
  }
];

// Type-specific subtype relationship styles
export const typeSubtypeStyles: TypeSubtypeRelationshipStyle[] = [
  // TYPE 1 SUBTYPES
  {
    type: 1,
    instinct: 'sp',
    relationshipStyle: 'The Anxious Perfectionist who expresses anger through worry about material security and doing things "the right way" practically. Least openly angry of the 1s.',
    needsInRelationship: ['Practical reliability', 'Shared standards around home and health', 'Partner who appreciates their efforts to get things right'],
    givesInRelationship: ['Conscientious care of shared resources', 'Reliable practical support', 'Attention to health and wellbeing'],
    blindSpots: ['Anxiety masks as practicality', 'Critical standards applied to domestic life', 'Difficulty relaxing at home'],
    idealPartnerQualities: ['Appreciates structure without rigidity', 'Helps them relax their standards', 'Reliable but not anxious']
  },
  {
    type: 1,
    instinct: 'so',
    relationshipStyle: 'The Non-Adaptable Teacher who holds strong opinions about how groups should operate. Most intellectual and preachy of the 1s.',
    needsInRelationship: ['Partner who shares their values', 'Respect for their principles', 'Intellectual engagement on ethics'],
    givesInRelationship: ['Strong moral compass for the couple', 'Social leadership and guidance', 'Commitment to shared causes'],
    blindSpots: ['Can be preachy or superior', 'Holds partner to group standards', 'Difficulty compromising on principles'],
    idealPartnerQualities: ['Shares core values but with flexibility', 'Respects their convictions', 'Adds warmth to their righteousness']
  },
  {
    type: 1,
    instinct: 'sx',
    relationshipStyle: 'The Zealous Reformer who focuses intensity on perfecting the relationship and their partner. Most likely to express anger directly.',
    needsInRelationship: ['Partner who can handle their intensity', 'Openness to growth and improvement together', 'Deep commitment to excellence'],
    givesInRelationship: ['Passionate commitment to relationship growth', 'Intense dedication to partner', 'Drive for continuous improvement'],
    blindSpots: ['Can try to "fix" their partner', 'Reforming zeal directed at relationship', 'Difficulty accepting partner as they are'],
    idealPartnerQualities: ['Welcomes growth without feeling criticized', 'Can match their intensity', 'Grounds their reforming energy with acceptance']
  },

  // TYPE 2 SUBTYPES
  {
    type: 2,
    instinct: 'sp',
    relationshipStyle: 'The Privilege Seeker who is more guarded and less openly giving than other 2s. Attracts others through appearing charming yet invulnerable.',
    needsInRelationship: ['Security and comfort', 'Appreciation without having to over-give', 'Permission to have their own needs'],
    givesInRelationship: ['Charming companionship', 'Practical support', 'Warmth within appropriate boundaries'],
    blindSpots: ['Childlike entitlement can emerge', 'Ambivalent about helping vs. being helped', 'Fear of showing vulnerability'],
    idealPartnerQualities: ['Provides security without requiring constant giving', 'Appreciates their charm', 'Invites but doesn\'t demand openness']
  },
  {
    type: 2,
    instinct: 'so',
    relationshipStyle: 'The Ambassador who serves groups and causes, seeking influence through being indispensable to important people and organizations.',
    needsInRelationship: ['Recognition for social contributions', 'Partner who values their network', 'Appreciation of their influential role'],
    givesInRelationship: ['Social connections and networking', 'Guidance and mentorship', 'Access to their sphere of influence'],
    blindSpots: ['Relationship may serve social ambition', 'Can neglect private intimacy for public role', 'Pride in social power'],
    idealPartnerQualities: ['Appreciates their social gifts', 'Maintains private connection', 'Doesn\'t feel overshadowed']
  },
  {
    type: 2,
    instinct: 'sx',
    relationshipStyle: 'The Seducer/Aggressive Lover who focuses all their giving on one special person. Most emotionally demanding and passionate of the 2s.',
    needsInRelationship: ['Exclusive deep connection', 'Being chosen and special', 'Intense emotional reciprocity'],
    givesInRelationship: ['Complete emotional devotion', 'Seductive attention', 'Making partner feel uniquely special'],
    blindSpots: ['Can be possessive or demanding', 'Giving with strings attached', 'Wild when needs aren\'t met'],
    idealPartnerQualities: ['Can receive intense devotion', 'Returns exclusivity', 'Maintains self while receiving']
  },

  // TYPE 3 SUBTYPES
  {
    type: 3,
    instinct: 'sp',
    relationshipStyle: 'The Workaholic who achieves security through tireless effort. Least vain of 3s, often doesn\'t look like a typical 3.',
    needsInRelationship: ['Appreciation for their hard work', 'Partner who shares practical goals', 'Acknowledgment of achievements'],
    givesInRelationship: ['Provider stability', 'Efficient partnership', 'Practical accomplishment'],
    blindSpots: ['Work can consume relationship time', 'May not appear successful but overworks', 'Difficulty being vs. doing'],
    idealPartnerQualities: ['Values effort over image', 'Creates space for rest', 'Appreciates substance over flash']
  },
  {
    type: 3,
    instinct: 'so',
    relationshipStyle: 'The Prestige Seeker who achieves through social influence, recognition, and climbing social ladders. Most image-conscious 3.',
    needsInRelationship: ['Partner who enhances their image', 'Social admiration together', 'Being a "power couple"'],
    givesInRelationship: ['Social capital and connections', 'Status elevation', 'Polished partnership presentation'],
    blindSpots: ['Relationship serves image', 'Partner chosen for how they look together', 'Authenticity sacrificed for appearance'],
    idealPartnerQualities: ['Authentic yet presentable', 'Helps them value inner worth', 'Comfortable in social spotlight']
  },
  {
    type: 3,
    instinct: 'sx',
    relationshipStyle: 'The Magnetic Achiever who achieves through personal charisma and being attractive. Focuses on being desirable to key individuals.',
    needsInRelationship: ['Being found irresistibly attractive', 'Deep admiration from partner', 'Being "the prize"'],
    givesInRelationship: ['Charismatic attention', 'Transformation assistance', 'Making partner feel they won someone special'],
    blindSpots: ['May collect admirers', 'Promotes others to promote self', 'Authenticity vs. charisma tension'],
    idealPartnerQualities: ['Sees through charisma to real self', 'Loves the person not the image', 'Doesn\'t threaten their appeal']
  },

  // TYPE 4 SUBTYPES
  {
    type: 4,
    instinct: 'sp',
    relationshipStyle: 'The Dauntless Sufferer who endures hardship with tenacity. Least outwardly dramatic 4—shows stoic endurance rather than emotional display.',
    needsInRelationship: ['Appreciation for their strength', 'Not having emotions demanded', 'Partner who sees their hidden depths'],
    givesInRelationship: ['Tenacious loyalty', 'Depth without drama', 'Resilient companionship'],
    blindSpots: ['Suffering silently rather than connecting', 'Masochistic endurance', 'Doesn\'t ask for help'],
    idealPartnerQualities: ['Sees beneath stoic surface', 'Creates safety for vulnerability', 'Offers help without pity']
  },
  {
    type: 4,
    instinct: 'so',
    relationshipStyle: 'The Outsider/Shame type who compares themselves unfavorably to others. Focuses on belonging vs. not belonging in groups.',
    needsInRelationship: ['Assurance of belonging', 'Partner who sees their unique value', 'Being included in partner\'s world'],
    givesInRelationship: ['Sensitivity to partner\'s social experience', 'Unique perspective', 'Artistic or cultural enrichment'],
    blindSpots: ['Comparing relationship to others', 'Shame about the relationship', 'Feeling "less than" other couples'],
    idealPartnerQualities: ['Makes them feel they belong', 'Doesn\'t compare', 'Celebrates their uniqueness']
  },
  {
    type: 4,
    instinct: 'sx',
    relationshipStyle: 'The Competitive Romantic who expresses envy as competition and intensity. Most emotionally expressive and demanding 4.',
    needsInRelationship: ['Intense emotional connection', 'Being truly seen and chosen', 'Passion and depth'],
    givesInRelationship: ['Deep emotional presence', 'Transformative intensity', 'Unwavering emotional honesty'],
    blindSpots: ['Can be demanding and competitive', 'Anger when needs unmet', 'Comparing partner to ideal'],
    idealPartnerQualities: ['Matches emotional intensity', 'Chooses them consistently', 'Doesn\'t abandon during storms']
  },

  // TYPE 5 SUBTYPES
  {
    type: 5,
    instinct: 'sp',
    relationshipStyle: 'The Castle Builder who retreats to well-defended private spaces. Most withdrawn 5—needs clear boundaries and personal sanctuary.',
    needsInRelationship: ['Respected personal space', 'Predictable demands', 'Partner who doesn\'t need constant contact'],
    givesInRelationship: ['Loyalty within boundaries', 'Practical expertise', 'Self-sufficient partnership'],
    blindSpots: ['Extreme withdrawal', 'Home becomes fortress', 'May share space but not intimacy'],
    idealPartnerQualities: ['Respects boundaries without feeling rejected', 'Independent yet available', 'Creates safety through predictability']
  },
  {
    type: 5,
    instinct: 'so',
    relationshipStyle: 'The Expert/Totem who connects through intellectual systems and being the knowledgeable one in groups.',
    needsInRelationship: ['Intellectual respect', 'Partner who values their expertise', 'Shared intellectual interests'],
    givesInRelationship: ['Knowledge and guidance', 'Systems thinking', 'Intellectual companionship'],
    blindSpots: ['Connection through ideas, not feelings', 'May intellectualize relationship', 'Expert role creates distance'],
    idealPartnerQualities: ['Appreciates their mind', 'Draws out their feelings', 'Doesn\'t compete intellectually']
  },
  {
    type: 5,
    instinct: 'sx',
    relationshipStyle: 'The Confidant who seeks one intensely intimate connection. Most emotionally available 5—shares secret inner world with chosen person.',
    needsInRelationship: ['One deep trusted connection', 'Exclusive intimacy', 'Partner worthy of their inner world'],
    givesInRelationship: ['Complete trust and openness', 'Intense private sharing', 'Loyalty to chosen one'],
    blindSpots: ['All eggs in one basket', 'High standards for partner', 'May share too much too intensely'],
    idealPartnerQualities: ['Worthy of their trust', 'Honors their openness', 'Doesn\'t require social expansion']
  },

  // TYPE 6 SUBTYPES
  {
    type: 6,
    instinct: 'sp',
    relationshipStyle: 'The Warmth Seeker who addresses fear through building security, alliances, and creating warm safe spaces.',
    needsInRelationship: ['Physical and emotional security', 'Reliable, trustworthy partner', 'Stable home base'],
    givesInRelationship: ['Loyal protectiveness', 'Practical security building', 'Warm, cozy partnership'],
    blindSpots: ['Anxiety about security', 'Testing partner\'s reliability', 'Fear can drive decisions'],
    idealPartnerQualities: ['Reliably present', 'Provides calm security', 'Doesn\'t trigger survival fears']
  },
  {
    type: 6,
    instinct: 'so',
    relationshipStyle: 'The Dutiful Loyalist who addresses fear through belonging to groups, systems, and doing their duty.',
    needsInRelationship: ['Clear expectations and roles', 'Partner who shares commitments', 'Alignment on group values'],
    givesInRelationship: ['Dedicated loyalty', 'Rule-following partnership', 'Commitment to shared duties'],
    blindSpots: ['Over-reliance on external authority', 'Fear of breaking rules', 'May prioritize duty over connection'],
    idealPartnerQualities: ['Reliable and dutiful', 'Shares their commitments', 'Provides leadership without domination']
  },
  {
    type: 6,
    instinct: 'sx',
    relationshipStyle: 'The Counterphobic Warrior who moves toward fear with strength and intimidation. Can be fierce, rebellious, contrarian.',
    needsInRelationship: ['Partner who can handle their intensity', 'Loyalty tests that are passed', 'Someone who won\'t abandon under fire'],
    givesInRelationship: ['Fierce protectiveness', 'Passionate loyalty', 'Courage to fight for relationship'],
    blindSpots: ['Testing partner aggressively', 'Provocation to check loyalty', 'Difficulty trusting peaceful times'],
    idealPartnerQualities: ['Strong and unintimidated', 'Passes loyalty tests gracefully', 'Provides security without controlling']
  },

  // TYPE 7 SUBTYPES
  {
    type: 7,
    instinct: 'sp',
    relationshipStyle: 'The Keeper of the Castle who creates networks of practical allies and ensures they\'ll always have enough.',
    needsInRelationship: ['Practical reliability', 'Partner who shares abundance mindset', 'Fun within structure'],
    givesInRelationship: ['Practical opportunism', 'Network of resources', 'Optimistic planning'],
    blindSpots: ['Using relationships for security', 'Friendly but calculating', 'Difficulty with pure intimacy'],
    idealPartnerQualities: ['Shares their resourcefulness', 'Reliable but fun', 'Doesn\'t restrict their networking']
  },
  {
    type: 7,
    instinct: 'so',
    relationshipStyle: 'The Sacrifice/Counter-Gluttony type who channels enthusiasm into serving groups and causes. Most idealistic 7.',
    needsInRelationship: ['Shared idealistic vision', 'Partner in service', 'Appreciation of their sacrifice'],
    givesInRelationship: ['Enthusiasm for shared causes', 'Idealistic partnership', 'Counter-cultural creativity'],
    blindSpots: ['Postponing personal pleasure for cause', 'Hidden agenda beneath sacrifice', 'Judging others\' commitment'],
    idealPartnerQualities: ['Shares their idealism', 'Appreciates their sacrifice', 'Keeps them connected to joy']
  },
  {
    type: 7,
    instinct: 'sx',
    relationshipStyle: 'The Fascinated Dreamer who seeks ultimate experience through people and ideas. Most prone to infatuation and fantasy.',
    needsInRelationship: ['Fascinating connection', 'Unlimited possibilities together', 'Partner who matches enthusiasm'],
    givesInRelationship: ['Infectious enthusiasm', 'Sense of unlimited possibility', 'Transformative vision'],
    blindSpots: ['Serial fascinations', 'Fantasy exceeds reality', 'Difficulty when ordinary'],
    idealPartnerQualities: ['Remains fascinating', 'Grounds without limiting', 'Tolerates enthusiasm swings']
  },

  // TYPE 8 SUBTYPES
  {
    type: 8,
    instinct: 'sp',
    relationshipStyle: 'The Survivalist who focuses power on ensuring material security. Most practical and least openly aggressive 8.',
    needsInRelationship: ['Material security', 'Partner who can be trusted with resources', 'Practical strength'],
    givesInRelationship: ['Provider protection', 'Resource generation', 'Practical power'],
    blindSpots: ['Satisfaction = survival, may miss relationship needs', 'Hoarding or excessive acquisition', 'Pragmatism over connection'],
    idealPartnerQualities: ['Appreciates their provision', 'Trustworthy with resources', 'Adds warmth to practicality']
  },
  {
    type: 8,
    instinct: 'so',
    relationshipStyle: 'The Social Protector who uses power in service of groups they belong to. Most intellectual and loyal 8.',
    needsInRelationship: ['Partner who shares their loyalties', 'Support for their protective role', 'Social alliance'],
    givesInRelationship: ['Protection of shared community', 'Loyal advocacy', 'Group leadership'],
    blindSpots: ['Antisocial in service of their group', 'Us vs. them thinking', 'Loyalty tests for outsiders'],
    idealPartnerQualities: ['Part of their inner circle', 'Shares their loyalties', 'Supports their protective role']
  },
  {
    type: 8,
    instinct: 'sx',
    relationshipStyle: 'The Possessive Rebel who channels intensity into passionate, sometimes overwhelming, intimate bonds.',
    needsInRelationship: ['Complete surrender of partner', 'Intense passionate bond', 'Permission to possess'],
    givesInRelationship: ['Overwhelming devotion', 'Protective intensity', 'Complete claiming'],
    blindSpots: ['Can be possessive or controlling', 'Rebellion against restraint', 'Intensity may overwhelm partner'],
    idealPartnerQualities: ['Can receive their intensity', 'Maintains self while surrendering', 'Matches passion without competing']
  },

  // TYPE 9 SUBTYPES
  {
    type: 9,
    instinct: 'sp',
    relationshipStyle: 'The Creature of Comfort who merges with physical routines and pleasures. Finds peace through appetite satisfaction.',
    needsInRelationship: ['Comfortable routines', 'Non-demanding partner', 'Shared simple pleasures'],
    givesInRelationship: ['Easy companionship', 'Comfortable presence', 'Accepting partnership'],
    blindSpots: ['Numbing through comfort', 'Stubbornness around routines', 'Physical instead of emotional presence'],
    idealPartnerQualities: ['Shares comfort without enabling', 'Gentle about changes', 'Appreciates simple presence']
  },
  {
    type: 9,
    instinct: 'so',
    relationshipStyle: 'The Community Builder who merges with groups and takes on group identity. Most outwardly energetic 9.',
    needsInRelationship: ['Shared community belonging', 'Partner active in groups together', 'Social harmony'],
    givesInRelationship: ['Social lubrication', 'Group facilitation', 'Harmonious partnership'],
    blindSpots: ['Loses self in group identity', 'Workaholism as self-forgetting', 'Relationship through social role'],
    idealPartnerQualities: ['Active in shared communities', 'Helps them maintain self', 'Values them beyond social role']
  },
  {
    type: 9,
    instinct: 'sx',
    relationshipStyle: 'The Merger who loses themselves completely in intimate union. Most intense and emotionally present 9.',
    needsInRelationship: ['Complete union with partner', 'Being known through merger', 'Intense but peaceful bond'],
    givesInRelationship: ['Complete presence', 'Union and acceptance', 'Going along wholeheartedly'],
    blindSpots: ['Loses self entirely in partner', 'Takes on partner\'s identity', 'Difficulty knowing own wants'],
    idealPartnerQualities: ['Maintains their selfhood', 'Invites 9\'s preferences', 'Doesn\'t take advantage of merger']
  }
];

// Helper functions
export const getInstinctPairingDynamic = (
  instinct1: InstinctType,
  instinct2: InstinctType
): InstinctPairingDynamic | undefined => {
  return instinctPairingDynamics.find(
    d => (d.instinct1 === instinct1 && d.instinct2 === instinct2) ||
         (d.instinct1 === instinct2 && d.instinct2 === instinct1)
  );
};

export const getTypeSubtypeStyle = (
  type: TypeNumber,
  instinct: InstinctType
): TypeSubtypeRelationshipStyle | undefined => {
  return typeSubtypeStyles.find(s => s.type === type && s.instinct === instinct);
};

// Get full subtype comparison between two specific subtype variants
export const getSubtypeComparison = (
  type1: TypeNumber,
  instinct1: InstinctType,
  type2: TypeNumber,
  instinct2: InstinctType
) => {
  const style1 = getTypeSubtypeStyle(type1, instinct1);
  const style2 = getTypeSubtypeStyle(type2, instinct2);
  const instinctDynamic = getInstinctPairingDynamic(instinct1, instinct2);

  return {
    type1Subtype: style1,
    type2Subtype: style2,
    instinctDynamic,
    combinedInsights: style1 && style2 ? {
      sharedNeeds: style1.needsInRelationship.filter(n =>
        style2.needsInRelationship.some(n2 =>
          n.toLowerCase().includes(n2.toLowerCase().split(' ')[0]) ||
          n2.toLowerCase().includes(n.toLowerCase().split(' ')[0])
        )
      ),
      complementaryGifts: {
        from1: style1.givesInRelationship,
        from2: style2.givesInRelationship
      },
      potentialFriction: [...style1.blindSpots, ...style2.blindSpots]
    } : null
  };
};
