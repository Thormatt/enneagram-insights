import type { TypeNumber } from '../../types';

export interface RelationshipArchetype {
  type1: TypeNumber;
  type2: TypeNumber;
  archetype: string;
  tagline: string;
  dynamicSummary: string;
}

// All 45 unique type pair archetypes (including same-type pairings)
export const relationshipArchetypes: RelationshipArchetype[] = [
  // Same-type pairings (9 pairs)
  {
    type1: 1, type2: 1,
    archetype: 'The Mirror of Standards',
    tagline: 'Two perfectionists finding grace together',
    dynamicSummary: 'When two Ones pair, they share an unspoken understanding of the inner critic and the drive for improvement. The challenge is avoiding mutual criticism; the gift is finally finding someone who truly gets the weight of responsibility.'
  },
  {
    type1: 2, type2: 2,
    archetype: 'The Giving Dance',
    tagline: 'Hearts that struggle to receive',
    dynamicSummary: 'Two Twos create abundant warmth but may compete for the helper role. Growth comes when both practice receiving and learn to ask directly for what they need.'
  },
  {
    type1: 3, type2: 3,
    archetype: 'The Power Couple',
    tagline: 'Achievement meets its match',
    dynamicSummary: 'This dynamic pairing achieves impressive results but risks competing for spotlight. True connection requires showing failures, not just wins.'
  },
  {
    type1: 4, type2: 4,
    archetype: 'The Depth Explorers',
    tagline: 'Two souls searching for what\'s missing',
    dynamicSummary: 'Deep emotional understanding but risk of competitive melancholy. Growth happens when they celebrate the ordinary together instead of longing for the extraordinary.'
  },
  {
    type1: 5, type2: 5,
    archetype: 'The Inner Worlds',
    tagline: 'Parallel universes finding overlap',
    dynamicSummary: 'Mutual respect for space and intellectual partnership, but both tend to withdraw. Connection requires intentional engagement and sharing feelings, not just ideas.'
  },
  {
    type1: 6, type2: 6,
    archetype: 'The Trust Builders',
    tagline: 'Finding security in each other\'s loyalty',
    dynamicSummary: 'Deep loyalty and understanding of anxiety, but fears can amplify between them. Strength comes from grounding each other in present reality rather than worst-case scenarios.'
  },
  {
    type1: 7, type2: 7,
    archetype: 'The Adventure Partners',
    tagline: 'Endless enthusiasm, endless possibilities',
    dynamicSummary: 'Multiplied positive energy and creative brainstorming, but neither wants to deal with problems. Depth comes from staying with difficult emotions together.'
  },
  {
    type1: 8, type2: 8,
    archetype: 'The Titans',
    tagline: 'Strength recognizing strength',
    dynamicSummary: 'Mutual respect and direct communication, but power struggles are inevitable. The breakthrough is showing vulnerability to each other.'
  },
  {
    type1: 9, type2: 9,
    archetype: 'The Peaceful Harbor',
    tagline: 'Two souls at rest together',
    dynamicSummary: 'Easy acceptance and comfortable companionship, but neither initiates. Growth requires expressing real preferences and addressing conflicts before they fester.'
  },

  // Integration line pairs (growth partners)
  {
    type1: 1, type2: 7,
    archetype: 'The Balance Keepers',
    tagline: 'Discipline meets spontaneity',
    dynamicSummary: 'A powerful growth partnership where One\'s structure balances Seven\'s spontaneity. Seven helps One relax; One helps Seven follow through. Each holds what the other needs to integrate.'
  },
  {
    type1: 2, type2: 4,
    archetype: 'The Heart Bridge',
    tagline: 'Giving meets feeling',
    dynamicSummary: 'Integration partners in the heart center. Two learns self-awareness from Four; Four learns to receive care graciously. Both access deeper emotional authenticity together.'
  },
  {
    type1: 3, type2: 6,
    archetype: 'The Trust Achievers',
    tagline: 'Image meets authenticity',
    dynamicSummary: 'Three provides confidence, Six provides loyalty. Growth line partners who help each other find genuine self-worth beyond performance or anxiety.'
  },
  {
    type1: 4, type2: 1,
    archetype: 'The Feeling-Doing Alliance',
    tagline: 'Emotion meets discipline',
    dynamicSummary: 'Four accesses One\'s discipline when integrating; One accesses Four\'s emotional depth. Together they balance feeling with action, depth with structure.'
  },
  {
    type1: 5, type2: 8,
    archetype: 'The Mind-Power Union',
    tagline: 'Knowledge meets confidence',
    dynamicSummary: 'Integration partners where Five gains Eight\'s decisive confidence and Eight gains Five\'s strategic insight. A formidable combination of thinking and doing.'
  },
  {
    type1: 6, type2: 9,
    archetype: 'The Steady Ground',
    tagline: 'Vigilance finds peace',
    dynamicSummary: 'Six finds the inner peace they seek in Nine; Nine finds engagement through Six. Growth line partners who ground each other beautifully.'
  },
  {
    type1: 7, type2: 5,
    archetype: 'The Depth-Breadth Exchange',
    tagline: 'Ideas finding focus',
    dynamicSummary: 'Both love ideas but from opposite directions. Seven brings enthusiasm; Five brings depth. Integration partners who teach each other balance.'
  },
  {
    type1: 8, type2: 2,
    archetype: 'The Power & Heart',
    tagline: 'Strength protecting tenderness',
    dynamicSummary: 'Eight\'s power protects Two\'s heart; Two\'s warmth opens Eight\'s heart. Integration partners who help each other access vulnerability through safety.'
  },
  {
    type1: 9, type2: 3,
    archetype: 'The Awakening Partners',
    tagline: 'Peace meets purpose',
    dynamicSummary: 'Nine gains Three\'s focus when integrating; Three gains Nine\'s acceptance. Together they balance achievement with being, doing with presence.'
  },

  // Cross-center dynamic pairs
  {
    type1: 1, type2: 2,
    archetype: 'The Service Alliance',
    tagline: 'Principles meet compassion',
    dynamicSummary: 'Both driven to do right, but differently—One through ethics, Two through care. When they align on shared values, their combined service is powerful and grounded.'
  },
  {
    type1: 1, type2: 3,
    archetype: 'The Excellence Pursuit',
    tagline: 'Integrity meets achievement',
    dynamicSummary: 'Both value doing things well, but One prioritizes ethics while Three prioritizes results. The tension between process and outcome can be creative or conflicting.'
  },
  {
    type1: 1, type2: 5,
    archetype: 'The Principled Scholars',
    tagline: 'Standards meet expertise',
    dynamicSummary: 'Both value competence and doing things right. Their shared intellectual rigor can create a thoughtful partnership, though warmth may need cultivation.'
  },
  {
    type1: 1, type2: 6,
    archetype: 'The Responsible Guardians',
    tagline: 'Duty meeting duty',
    dynamicSummary: 'Both responsible and dutiful, creating reliable partnership. One\'s certainty can ground Six\'s doubt; Six\'s caution can temper One\'s rigidity.'
  },
  {
    type1: 1, type2: 8,
    archetype: 'The Righteous Force',
    tagline: 'Principle meets power',
    dynamicSummary: 'Gut center allies who share commitment to justice but express it differently. One brings moral precision; Eight brings unstoppable force. Power struggles possible but mutual respect likely.'
  },
  {
    type1: 1, type2: 9,
    archetype: 'The Acceptance Teachers',
    tagline: 'Perfection learning peace',
    dynamicSummary: 'Adjacent types with complementary gifts. Nine\'s acceptance soothes One\'s inner critic; One\'s engagement activates Nine\'s dormant will. A naturally balancing pair.'
  },
  {
    type1: 2, type2: 3,
    archetype: 'The Heart Performers',
    tagline: 'Love seeking recognition',
    dynamicSummary: 'Heart center neighbors who understand image and connection. Both avoid vulnerability; growth comes through practicing authenticity instead of charm.'
  },
  {
    type1: 2, type2: 5,
    archetype: 'The Connection Paradox',
    tagline: 'Warmth meets withdrawal',
    dynamicSummary: 'Opposing needs for closeness create tension. Two wants more connection; Five needs more space. Success requires negotiating intimacy without overwhelming or abandoning.'
  },
  {
    type1: 2, type2: 6,
    archetype: 'The Loyal Hearts',
    tagline: 'Care meets commitment',
    dynamicSummary: 'Both value loyalty and connection deeply. Two provides warmth; Six provides stability. Trust builds slowly but creates lasting bonds.'
  },
  {
    type1: 2, type2: 7,
    archetype: 'The Joyful Helpers',
    tagline: 'Care meets adventure',
    dynamicSummary: 'Both positive and people-oriented. Seven\'s independence challenges Two\'s need for closeness, but Seven\'s lightness can free Two from over-responsibility.'
  },
  {
    type1: 2, type2: 9,
    archetype: 'The Harmonizers',
    tagline: 'Two accommodators finding voice',
    dynamicSummary: 'Both accommodating and harmony-seeking, risking mutual silencing of needs. Growth requires both to practice direct communication and honest preference-sharing.'
  },
  {
    type1: 3, type2: 4,
    archetype: 'The Image-Depth Tension',
    tagline: 'Achievement meets authenticity',
    dynamicSummary: 'Complementary heart types with different values. Three admires Four\'s authenticity; Four admires Three\'s competence. The creative tension can be generative or divisive.'
  },
  {
    type1: 3, type2: 5,
    archetype: 'The Strategy Partners',
    tagline: 'Action meets analysis',
    dynamicSummary: 'Efficient problem-solving together, but different values around visibility. Three acts; Five analyzes. Combining execution with strategy creates powerful results.'
  },
  {
    type1: 3, type2: 7,
    archetype: 'The Dynamic Duo',
    tagline: 'Achievement meets enthusiasm',
    dynamicSummary: 'Both energetic and optimistic, creating momentum. The risk is avoiding depth together; the gift is mutual enthusiasm for ambitious projects.'
  },
  {
    type1: 3, type2: 8,
    archetype: 'The Power Players',
    tagline: 'Image meets impact',
    dynamicSummary: 'Both action-oriented and powerful. Competition for leadership possible, but when aligned they\'re formidable. Eight values authenticity; Three can learn from this.'
  },
  {
    type1: 4, type2: 5,
    archetype: 'The Deep Divers',
    tagline: 'Heart and mind intertwined',
    dynamicSummary: 'Deep intellectual and emotional connection with mutual respect for individuality. Both withdraw, so intentional engagement is essential. Creative potential is enormous.'
  },
  {
    type1: 4, type2: 6,
    archetype: 'The Anxious Authentics',
    tagline: 'Feeling meets fearing',
    dynamicSummary: 'Both emotionally attuned and prone to anxiety. Shared appreciation for authenticity creates depth, but spiraling into negativity together is a risk.'
  },
  {
    type1: 4, type2: 7,
    archetype: 'The Light-Shadow Dance',
    tagline: 'Depth meets levity',
    dynamicSummary: 'Creative opposites: Seven lightens Four\'s heaviness; Four adds depth to Seven\'s breadth. Integration of shadow and light is the gift if they don\'t dismiss each other.'
  },
  {
    type1: 4, type2: 8,
    archetype: 'The Intensity Partners',
    tagline: 'Depth meets power',
    dynamicSummary: 'Both intense and authentic, refusing superficiality. Eight\'s directness can hurt Four; Four\'s sensitivity can frustrate Eight. But mutual respect for depth creates powerful connection.'
  },
  {
    type1: 4, type2: 9,
    archetype: 'The Acceptance Seekers',
    tagline: 'Longing meets peace',
    dynamicSummary: 'Nine\'s unconditional acceptance is healing for Four; Four\'s passion can awaken Nine. The risk is Four feeling unseen by Nine\'s calm.'
  },
  {
    type1: 5, type2: 6,
    archetype: 'The Careful Analysts',
    tagline: 'Two heads seeking certainty',
    dynamicSummary: 'Both head types who value understanding. Five\'s detachment can stabilize Six\'s anxiety; Six\'s loyalty provides security Five secretly needs.'
  },
  {
    type1: 5, type2: 7,
    archetype: 'The Curious Minds',
    tagline: 'Depth meets breadth',
    dynamicSummary: 'Both love ideas but differently. Seven energizes Five; Five grounds Seven. Integration line partners with complementary intellectual styles.'
  },
  {
    type1: 5, type2: 9,
    archetype: 'The Quiet Companions',
    tagline: 'Space honoring space',
    dynamicSummary: 'Non-demanding companionship with mutual respect for solitude. But both withdraw, risking connection loss. Shared activities build the bridge.'
  },
  {
    type1: 6, type2: 7,
    archetype: 'The Caution-Optimism Bridge',
    tagline: 'Worry meets wonder',
    dynamicSummary: 'Adjacent types with opposite responses to anxiety. Seven\'s optimism can lift Six; Six\'s realism can ground Seven. Balance of planning and spontaneity.'
  },
  {
    type1: 6, type2: 8,
    archetype: 'The Protection Pact',
    tagline: 'Loyalty meets strength',
    dynamicSummary: 'Eight provides security Six craves; Six\'s loyalty matches Eight\'s protection. Trust takes time but creates an unshakeable alliance once established.'
  },
  {
    type1: 7, type2: 8,
    archetype: 'The High Energy Alliance',
    tagline: 'Adventure meets assertion',
    dynamicSummary: 'Both assertive and energetic, sharing love of adventure. Competition for control possible, but their combined energy is unstoppable when aligned.'
  },
  {
    type1: 7, type2: 9,
    archetype: 'The Easy Flow',
    tagline: 'Enthusiasm meets acceptance',
    dynamicSummary: 'Both positive and easygoing. Seven energizes Nine; Nine calms Seven. Neither addresses problems directly, which is both comfortable and dangerous.'
  },
  {
    type1: 8, type2: 9,
    archetype: 'The Power-Peace Paradox',
    tagline: 'Force meets flow',
    dynamicSummary: 'Gut center neighbors with opposite expressions. Eight brings energy; Nine brings calm. Eight may overwhelm; Nine may frustrate with passivity. Balance requires mutual respect.'
  }
];

export const getRelationshipArchetype = (
  type1: TypeNumber,
  type2: TypeNumber
): RelationshipArchetype | undefined => {
  // Normalize to check both orderings
  return relationshipArchetypes.find(
    ra =>
      (ra.type1 === type1 && ra.type2 === type2) ||
      (ra.type1 === type2 && ra.type2 === type1)
  );
};

export const getArchetypeName = (
  type1: TypeNumber,
  type2: TypeNumber
): string | undefined => {
  return getRelationshipArchetype(type1, type2)?.archetype;
};

export const getArchetypeTagline = (
  type1: TypeNumber,
  type2: TypeNumber
): string | undefined => {
  return getRelationshipArchetype(type1, type2)?.tagline;
};
