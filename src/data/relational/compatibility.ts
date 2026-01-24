import type { TypeCompatibility, TypeNumber } from '../../types';

// Generate compatibility data for key pairings
// Full 81 combinations (9x9) would be extensive; here we provide a subset of notable pairings
// with a function to calculate compatibility for any pair

export const compatibilityData: TypeCompatibility[] = [
  // Same-type relationships
  {
    type1: 1, type2: 1, overallScore: 6,
    strengths: ['Shared values and standards', 'Mutual understanding of the inner critic', 'Reliability and commitment'],
    challenges: ['Competing standards of "right"', 'Double inner critics', 'Mutual judgmentalism'],
    growthOpportunities: ['Learning acceptance together', 'Relaxing standards in safe company', 'Practicing "good enough"'],
    communicationTips: ['Avoid competing over who is more right', 'Appreciate efforts without critiquing', 'Schedule time for non-productive play']
  },
  {
    type1: 2, type2: 2, overallScore: 6,
    strengths: ['Mutual nurturing', 'Deep empathy', 'Generous giving'],
    challenges: ['Competition for helping', 'Neither acknowledges own needs', 'Indirect communication'],
    growthOpportunities: ['Learning to receive together', 'Practicing direct needs expression', 'Supporting each other\'s boundaries'],
    communicationTips: ['Practice asking "What do YOU need?"', 'Allow each other to help', 'Be direct about your own needs']
  },

  // Classic complementary pairs
  {
    type1: 1, type2: 7, overallScore: 8,
    strengths: ['Balance of discipline and joy', 'Growth line connection (integration)', '1 provides structure, 7 provides spontaneity'],
    challenges: ['1 may see 7 as irresponsible', '7 may feel criticized by 1', 'Different approaches to planning'],
    growthOpportunities: ['1 learns to relax and enjoy', '7 learns focus and follow-through', 'Both balance each other\'s extremes'],
    communicationTips: ['1s: Appreciate 7\'s enthusiasm before critiquing', '7s: Follow through on commitments with 1', 'Plan spontaneous adventures together']
  },
  {
    type1: 2, type2: 8, overallScore: 7,
    strengths: ['Complementary strength and nurturing', 'Mutual intensity', '8 appreciates 2\'s warmth, 2 appreciates 8\'s strength'],
    challenges: ['Power struggles possible', '2 may feel overwhelmed by 8\'s intensity', '8 may feel manipulated by 2\'s indirectness'],
    growthOpportunities: ['2 learns to be direct', '8 learns to soften', 'Both access vulnerability together'],
    communicationTips: ['2s: Be direct, 8s respect that', '8s: Let 2s help you', 'Both practice vulnerability']
  },
  {
    type1: 4, type2: 5, overallScore: 7,
    strengths: ['Deep intellectual and emotional connection', 'Respect for individuality', 'Creative partnership potential'],
    challenges: ['Both tend to withdraw', '4 wants more emotion, 5 wants more space', 'Communication styles differ'],
    growthOpportunities: ['4 learns detachment, 5 learns emotional depth', 'Both practice engagement', 'Creative collaboration'],
    communicationTips: ['Schedule regular connection time', '4s: Give 5s processing space', '5s: Express feelings, not just thoughts']
  },
  {
    type1: 3, type2: 6, overallScore: 7,
    strengths: ['Growth line connection', '3 provides confidence, 6 provides loyalty', 'Complementary skills'],
    challenges: ['3 may dismiss 6\'s worries', '6 may doubt 3\'s authenticity', 'Different relationships with anxiety'],
    growthOpportunities: ['3 learns depth and loyalty', '6 learns confidence and action', 'Both develop authenticity'],
    communicationTips: ['3s: Be patient with 6\'s concerns', '6s: Trust 3\'s competence', 'Build trust gradually']
  },
  {
    type1: 5, type2: 8, overallScore: 7,
    strengths: ['Growth line connection', 'Both value independence', '5 provides strategy, 8 provides action'],
    challenges: ['Different energy levels', '8 may overwhelm 5', '5 may seem weak to 8'],
    growthOpportunities: ['5 learns to act with confidence', '8 learns strategic thinking', 'Powerful partnership when aligned'],
    communicationTips: ['8s: Give 5s space to think', '5s: Engage more directly', 'Respect each other\'s autonomy']
  },
  {
    type1: 6, type2: 9, overallScore: 8,
    strengths: ['Growth line connection', 'Complementary energies', '9 provides calm, 6 provides engagement'],
    challenges: ['6 may push 9 too hard', '9\'s passivity may frustrate 6', 'Both avoid direct conflict'],
    growthOpportunities: ['6 learns trust and peace', '9 learns engagement and focus', 'Mutual grounding'],
    communicationTips: ['6s: Don\'t mistake 9\'s calm for uncaring', '9s: Show up and engage', 'Practice direct communication']
  },
  {
    type1: 9, type2: 3, overallScore: 7,
    strengths: ['Growth line connection', '3 energizes 9, 9 calms 3', 'Complementary strengths'],
    challenges: ['9 may feel pushed by 3', '3 may be frustrated by 9\'s pace', 'Different relationships with goals'],
    growthOpportunities: ['9 learns focus and achievement', '3 learns acceptance and being', 'Balance of doing and being'],
    communicationTips: ['3s: Appreciate 9\'s steady presence', '9s: Set and share personal goals', 'Celebrate achievements together']
  },

  // Heart-center relationships
  {
    type1: 2, type2: 3, overallScore: 6,
    strengths: ['Both heart types, understand image', 'Mutual charm and social skill', '2 supports 3\'s goals'],
    challenges: ['Both avoid vulnerability', 'Competition for attention', '3 may dismiss 2\'s needs'],
    growthOpportunities: ['Practice authenticity together', 'Learn to receive as well as give', 'Support each other\'s true self'],
    communicationTips: ['Be authentic, not impressive', 'Appreciate genuine moments', 'Share feelings, not just image']
  },
  {
    type1: 2, type2: 4, overallScore: 7,
    strengths: ['Growth line connection', 'Deep emotional understanding', 'Both value connection'],
    challenges: ['2 may feel rejected by 4\'s withdrawal', '4 may feel smothered by 2', 'Different needs for space'],
    growthOpportunities: ['2 learns self-awareness', '4 learns to receive care', 'Emotional depth together'],
    communicationTips: ['4s: Receive 2\'s care graciously', '2s: Don\'t take 4\'s moods personally', 'Balance giving and receiving']
  },
  {
    type1: 3, type2: 4, overallScore: 6,
    strengths: ['Complementary within heart center', '3 admires 4\'s authenticity, 4 admires 3\'s competence', 'Creative potential'],
    challenges: ['3 seems inauthentic to 4', '4 seems ineffective to 3', 'Different values around image'],
    growthOpportunities: ['3 learns depth and authenticity', '4 learns practical action', 'Balance feeling and doing'],
    communicationTips: ['3s: Show real feelings', '4s: Appreciate 3\'s efforts', 'Respect different approaches to identity']
  },

  // Head-center relationships
  {
    type1: 5, type2: 6, overallScore: 7,
    strengths: ['Both head types, analytical', 'Shared interest in understanding', '5 provides expertise, 6 provides loyalty'],
    challenges: ['Both can overthink', '6\'s anxiety may overwhelm 5', '5\'s detachment may unsettle 6'],
    growthOpportunities: ['Build trust gradually', 'Balance analysis with action', 'Learn from each other\'s fears'],
    communicationTips: ['Share thinking processes', 'Be patient with different worry styles', 'Ground analysis in action']
  },
  {
    type1: 5, type2: 7, overallScore: 6,
    strengths: ['Growth line connection', 'Both love ideas and possibilities', '7 energizes 5, 5 grounds 7'],
    challenges: ['5 may feel overwhelmed by 7', '7 may feel limited by 5', 'Different energy needs'],
    growthOpportunities: ['5 learns enthusiasm', '7 learns depth', 'Balance breadth and depth'],
    communicationTips: ['7s: Go deep with 5s', '5s: Try new experiences with 7s', 'Alternate adventure and retreat']
  },
  {
    type1: 6, type2: 7, overallScore: 7,
    strengths: ['Adjacent types, understand each other', 'Balance caution and enthusiasm', 'Complementary approaches to fear'],
    challenges: ['6 may dampen 7\'s optimism', '7 may dismiss 6\'s concerns', 'Different responses to anxiety'],
    growthOpportunities: ['6 learns optimism', '7 learns realistic planning', 'Face fear together'],
    communicationTips: ['6s: Enjoy 7\'s enthusiasm', '7s: Validate 6\'s concerns', 'Balance planning and spontaneity']
  },

  // Gut-center relationships
  {
    type1: 8, type2: 9, overallScore: 7,
    strengths: ['Complementary gut types', '8 brings energy, 9 brings calm', 'Both value autonomy'],
    challenges: ['8 may overwhelm 9', '9 may frustrate 8 with passivity', 'Different relationships with anger'],
    growthOpportunities: ['8 learns acceptance', '9 learns assertion', 'Balance power and peace'],
    communicationTips: ['8s: Soften intensity with 9s', '9s: Express preferences directly', 'Make space for both energies']
  },
  {
    type1: 8, type2: 1, overallScore: 7,
    strengths: ['Both gut types, action-oriented', 'Mutual respect for strength', 'Shared commitment to justice'],
    challenges: ['Power struggles over control', 'Different approaches to right and wrong', 'Both can be rigid'],
    growthOpportunities: ['Learn from each other\'s moral framework', 'Balance passion and principle', 'Practice flexibility'],
    communicationTips: ['Respect each other\'s convictions', 'Find shared values', 'Avoid power struggles']
  },
  {
    type1: 9, type2: 1, overallScore: 7,
    strengths: ['Adjacent types with growth potential', '9 calms 1, 1 activates 9', 'Complementary strengths'],
    challenges: ['1 may be critical of 9', '9 may passively resist 1', 'Different approaches to conflict'],
    growthOpportunities: ['1 learns acceptance', '9 learns engagement', 'Balance action and peace'],
    communicationTips: ['1s: Appreciate 9\'s calming presence', '9s: Take stands with 1', 'Be direct about needs']
  }
];

export const getCompatibility = (type1: TypeNumber, type2: TypeNumber): TypeCompatibility | undefined => {
  return compatibilityData.find(
    c => (c.type1 === type1 && c.type2 === type2) || (c.type1 === type2 && c.type2 === type1)
  );
};

// Calculate a basic compatibility score based on Enneagram theory
export const calculateCompatibilityScore = (type1: TypeNumber, type2: TypeNumber): number => {
  // Check if we have explicit data
  const explicit = getCompatibility(type1, type2);
  if (explicit) return explicit.overallScore;

  // Calculate based on theory
  let score = 5; // Base score

  // Same center types can understand each other but may compete
  const centers: Record<TypeNumber, string> = {
    1: 'gut', 2: 'heart', 3: 'heart', 4: 'heart',
    5: 'head', 6: 'head', 7: 'head', 8: 'gut', 9: 'gut'
  };
  if (centers[type1] === centers[type2]) {
    score += 0.5; // Understanding
  }

  // Growth/stress line connections are significant
  const integrationMap: Record<TypeNumber, TypeNumber> = {
    1: 7, 2: 4, 3: 6, 4: 1, 5: 8, 6: 9, 7: 5, 8: 2, 9: 3
  };
  const disintegrationMap: Record<TypeNumber, TypeNumber> = {
    1: 4, 2: 8, 3: 9, 4: 2, 5: 7, 6: 3, 7: 1, 8: 5, 9: 6
  };

  if (integrationMap[type1] === type2 || integrationMap[type2] === type1) {
    score += 1.5; // Growth potential
  }
  if (disintegrationMap[type1] === type2 || disintegrationMap[type2] === type1) {
    score += 0.5; // Understanding of shadow
  }

  // Adjacent types (wings) have natural understanding
  const isAdjacent = (a: TypeNumber, b: TypeNumber) => {
    return Math.abs(a - b) === 1 || (a === 1 && b === 9) || (a === 9 && b === 1);
  };
  if (isAdjacent(type1, type2)) {
    score += 0.5;
  }

  return Math.min(10, Math.max(1, Math.round(score)));
};

export const getCompatibilityDescription = (type1: TypeNumber, type2: TypeNumber): string => {
  const score = calculateCompatibilityScore(type1, type2);
  if (score >= 8) return 'Excellent potential for growth and connection';
  if (score >= 6) return 'Good compatibility with complementary strengths';
  if (score >= 4) return 'Moderate compatibility with some challenges';
  return 'Significant differences require conscious work';
};
