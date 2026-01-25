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
  },

  // === SAME-TYPE RELATIONSHIPS ===
  {
    type1: 3, type2: 3, overallScore: 6,
    strengths: ['Mutual understanding of achievement drive', 'Shared ambition and efficiency', 'Can build impressive partnerships together'],
    challenges: ['Competition for spotlight', 'Both avoid authentic vulnerability', 'Image management prevents true intimacy'],
    growthOpportunities: ['Practice showing real feelings', 'Support each other\'s failures as well as successes', 'Learn that being loved doesn\'t require performing'],
    communicationTips: ['Share fears and failures, not just wins', 'Appreciate each other without comparing achievements', 'Create space for "unproductive" connection time']
  },
  {
    type1: 4, type2: 4, overallScore: 5,
    strengths: ['Deep emotional understanding', 'Appreciation for authenticity and depth', 'Creative synergy and artistic connection'],
    challenges: ['Competitive melancholy', 'Both feel misunderstood even by each other', 'Emotional intensity can spiral'],
    growthOpportunities: ['Practice presence over longing', 'Appreciate what is rather than what\'s missing', 'Ground each other in the ordinary'],
    communicationTips: ['Don\'t compete over who suffers more', 'Celebrate ordinary moments together', 'Balance intensity with lightness']
  },
  {
    type1: 5, type2: 5, overallScore: 6,
    strengths: ['Mutual respect for privacy and space', 'Intellectual partnership', 'No pressure for emotional performance'],
    challenges: ['Both withdraw under stress', 'Relationship may lack warmth', 'Neither initiates connection'],
    growthOpportunities: ['Practice initiating contact', 'Share feelings not just ideas', 'Build consistent connection rituals'],
    communicationTips: ['Schedule regular check-ins', 'Share one feeling per conversation', 'Appreciate each other\'s expertise']
  },
  {
    type1: 6, type2: 6, overallScore: 6,
    strengths: ['Deep loyalty and commitment', 'Mutual understanding of anxiety', 'Strong troubleshooting partnership'],
    challenges: ['Anxiety can amplify between them', 'Suspicion may turn on each other', 'Decision paralysis'],
    growthOpportunities: ['Build trust through consistency', 'Practice taking action despite fear', 'Ground each other in present reality'],
    communicationTips: ['Reassure without feeding anxiety', 'Celebrate brave actions', 'Don\'t catastrophize together']
  },
  {
    type1: 7, type2: 7, overallScore: 7,
    strengths: ['Endless enthusiasm and adventure', 'Positive energy multiplied', 'Creative brainstorming partners'],
    challenges: ['Neither wants to deal with problems', 'Commitment may feel limiting', 'Avoiding depth together'],
    growthOpportunities: ['Practice staying with difficult emotions', 'Follow through on plans together', 'Find depth in commitment'],
    communicationTips: ['Balance adventure with presence', 'Complete projects before starting new ones', 'Make space for harder conversations']
  },
  {
    type1: 8, type2: 8, overallScore: 6,
    strengths: ['Mutual respect for strength', 'Direct and honest communication', 'Powerful partnership when aligned'],
    challenges: ['Power struggles and control battles', 'Neither backs down easily', 'Intensity can be destructive'],
    growthOpportunities: ['Practice vulnerability with each other', 'Learn to yield without losing face', 'Protect each other\'s softness'],
    communicationTips: ['Define territories clearly', 'Compete against external challenges, not each other', 'Show tenderness in private']
  },
  {
    type1: 9, type2: 9, overallScore: 6,
    strengths: ['Harmonious and peaceful connection', 'Easy acceptance of each other', 'Comfortable companionship'],
    challenges: ['Neither initiates or decides', 'Issues get buried not resolved', 'Relationship may stagnate'],
    growthOpportunities: ['Practice expressing preferences', 'Take turns initiating activities', 'Address conflicts before they fester'],
    communicationTips: ['Ask "What do YOU want?"', 'Don\'t merge—maintain separate identities', 'Make decisions even when both are fine with anything']
  },

  // === TYPE 1 CROSS-CENTER RELATIONSHIPS ===
  {
    type1: 1, type2: 2, overallScore: 7,
    strengths: ['Shared sense of responsibility and service', '1 admires 2\'s warmth, 2 admires 1\'s integrity', 'Both want to do the right thing'],
    challenges: ['1 may seem cold to 2', '2 may seem manipulative to 1', 'Different views on expressing care'],
    growthOpportunities: ['1 learns warmth and flexibility', '2 learns boundaries and self-care', 'Balance principles with compassion'],
    communicationTips: ['1s: Appreciate 2\'s help without critiquing methods', '2s: Respect 1\'s need for fairness', 'Find shared causes to serve together']
  },
  {
    type1: 1, type2: 3, overallScore: 6,
    strengths: ['Both value competence and doing well', 'Mutual respect for hard work', 'Goal-oriented partnership'],
    challenges: ['1 values ethics over image, 3 values results over process', '1 may see 3 as cutting corners', '3 may see 1 as rigid'],
    growthOpportunities: ['1 learns efficiency and pragmatism', '3 learns integrity and depth', 'Balance excellence with authenticity'],
    communicationTips: ['Align on shared values first', '1s: Appreciate 3\'s achievements', '3s: Honor 1\'s principles']
  },
  {
    type1: 1, type2: 4, overallScore: 6,
    strengths: ['Disintegration line connection—understand each other\'s shadow', 'Both care about meaning and authenticity', 'Creative tension can produce depth'],
    challenges: ['1 may see 4 as self-indulgent', '4 may see 1 as repressed', 'Different relationships with emotion'],
    growthOpportunities: ['1 learns to access emotions', '4 learns discipline and structure', 'Integration of feeling and doing'],
    communicationTips: ['1s: Allow space for 4\'s feelings', '4s: Appreciate 1\'s practical support', 'Find creative projects together']
  },
  {
    type1: 1, type2: 5, overallScore: 7,
    strengths: ['Both value competence and doing things right', 'Respect for each other\'s expertise', 'Thoughtful, principled partnership'],
    challenges: ['Both can be rigid and detached', '1 wants action, 5 wants more research', 'Emotional connection may lack'],
    growthOpportunities: ['Build warmth into shared structure', '1 learns depth, 5 learns application', 'Practice emotional sharing'],
    communicationTips: ['Create structured time for connection', 'Value both principles and knowledge', 'Express appreciation directly']
  },
  {
    type1: 1, type2: 6, overallScore: 7,
    strengths: ['Both responsible and dutiful', 'Shared commitment to doing right', 'Strong troubleshooting partnership'],
    challenges: ['1\'s certainty may threaten 6', '6\'s doubt may frustrate 1', 'Both can be anxious about mistakes'],
    growthOpportunities: ['1 learns flexibility', '6 gains confidence from 1\'s clarity', 'Build trust through reliability'],
    communicationTips: ['1s: Validate 6\'s concerns before solving', '6s: Trust 1\'s judgment', 'Focus on solutions together']
  },

  // === TYPE 2 CROSS-CENTER RELATIONSHIPS ===
  {
    type1: 2, type2: 5, overallScore: 5,
    strengths: ['Complementary—2 brings warmth, 5 brings depth', 'Both appreciate being seen for who they are', 'Growth potential in opposite directions'],
    challenges: ['2 wants more connection than 5 can give', '5 feels overwhelmed by 2\'s needs', 'Very different social energy'],
    growthOpportunities: ['2 learns healthy detachment', '5 learns to engage emotionally', 'Finding middle ground on intimacy'],
    communicationTips: ['2s: Give 5s space without taking it personally', '5s: Express appreciation verbally', 'Agree on connection frequency']
  },
  {
    type1: 2, type2: 6, overallScore: 7,
    strengths: ['Both value loyalty and connection', '2 provides warmth, 6 provides stability', 'Strong supportive partnership'],
    challenges: ['6 may suspect 2\'s motives', '2 may feel untrusted', 'Both can be anxious about rejection'],
    growthOpportunities: ['Build trust through consistency', '6 learns to receive care', '2 learns secure attachment'],
    communicationTips: ['Be reliable and consistent', '6s: Accept help graciously', '2s: Be transparent about needs']
  },
  {
    type1: 2, type2: 7, overallScore: 6,
    strengths: ['Both positive and people-oriented', '2 grounds 7, 7 lightens 2', 'Social and fun partnership'],
    challenges: ['7 may avoid 2\'s emotional needs', '2 may feel abandoned by 7\'s independence', 'Different needs for depth'],
    growthOpportunities: ['7 learns commitment and depth', '2 learns self-sufficiency', 'Balance togetherness and freedom'],
    communicationTips: ['7s: Follow through on emotional promises', '2s: Give 7s freedom without guilt', 'Plan adventures that include connection']
  },
  {
    type1: 2, type2: 9, overallScore: 7,
    strengths: ['Both accommodating and harmonious', 'Gentle, caring connection', 'Mutual desire for peaceful relationship'],
    challenges: ['Neither expresses own needs', 'Passive-aggressive patterns possible', 'Important issues may be avoided'],
    growthOpportunities: ['Both practice direct communication', 'Identify and voice own needs', 'Create safety for conflict'],
    communicationTips: ['Ask each other "What do you really want?"', 'Don\'t assume the other is fine', 'Schedule check-ins about the relationship']
  },

  // === TYPE 3 CROSS-CENTER RELATIONSHIPS ===
  {
    type1: 3, type2: 5, overallScore: 5,
    strengths: ['3 brings action, 5 brings analysis', 'Mutual respect for competence', 'Efficient problem-solving together'],
    challenges: ['3 may seem superficial to 5', '5 may seem impractical to 3', 'Different values around visibility'],
    growthOpportunities: ['3 learns depth and reflection', '5 learns presentation and action', 'Balance doing and thinking'],
    communicationTips: ['3s: Value 5\'s ideas even without visible output', '5s: Appreciate 3\'s execution', 'Combine strategy with implementation']
  },
  {
    type1: 3, type2: 7, overallScore: 7,
    strengths: ['Both energetic and optimistic', 'Shared enthusiasm for achievement', 'Dynamic, productive partnership'],
    challenges: ['Neither slows down for depth', 'Avoiding difficult emotions together', 'Competition for attention'],
    growthOpportunities: ['Practice presence and depth', 'Face failures together', 'Balance achievement with being'],
    communicationTips: ['Slow down sometimes', 'Share vulnerabilities not just wins', 'Support each other\'s failures']
  },
  {
    type1: 3, type2: 8, overallScore: 7,
    strengths: ['Both action-oriented and powerful', 'Mutual respect for strength', 'Formidable partnership when aligned'],
    challenges: ['Competition for leadership', '8 may see 3 as image-focused', '3 may feel overwhelmed by 8'],
    growthOpportunities: ['3 learns authenticity from 8', '8 learns adaptability from 3', 'Building genuine power together'],
    communicationTips: ['Define roles clearly', 'Be direct and honest', 'Unite against external challenges']
  },

  // === TYPE 4 CROSS-CENTER RELATIONSHIPS ===
  {
    type1: 4, type2: 6, overallScore: 6,
    strengths: ['Both emotionally attuned and loyal', 'Shared appreciation for authenticity', 'Deep, meaningful conversations'],
    challenges: ['Both prone to anxiety and doubt', '4\'s intensity may overwhelm 6', '6 may seem conventional to 4'],
    growthOpportunities: ['Ground each other in present reality', '4 learns security, 6 learns self-expression', 'Face fears together'],
    communicationTips: ['Don\'t spiral into negativity together', 'Appreciate each other\'s uniqueness', 'Build trust through consistency']
  },
  {
    type1: 4, type2: 7, overallScore: 5,
    strengths: ['Creative opposites attract', '7 lightens 4\'s heaviness', '4 adds depth to 7\'s breadth'],
    challenges: ['Very different emotional styles', '4 feels dismissed by 7\'s positivity', '7 feels drained by 4\'s melancholy'],
    growthOpportunities: ['4 learns joy and lightness', '7 learns depth and presence', 'Integration of shadow and light'],
    communicationTips: ['4s: Don\'t assume 7 is avoiding', '7s: Stay present with 4\'s feelings', 'Balance depth with adventure']
  },
  {
    type1: 4, type2: 8, overallScore: 6,
    strengths: ['Both intense and authentic', 'Mutual respect for depth', 'Neither settles for superficial'],
    challenges: ['Power struggles possible', '8\'s directness may hurt 4', '4\'s sensitivity may frustrate 8'],
    growthOpportunities: ['4 learns strength and action', '8 learns emotional nuance', 'Powerful creative partnership'],
    communicationTips: ['8s: Be gentle with 4\'s feelings', '4s: Appreciate 8\'s protection', 'Channel intensity productively']
  },
  {
    type1: 4, type2: 9, overallScore: 6,
    strengths: ['Both seek harmony and depth', '9 accepts 4 unconditionally', '4 brings passion, 9 brings peace'],
    challenges: ['4 may feel 9 doesn\'t see their uniqueness', '9 may feel overwhelmed by 4\'s emotions', 'Different energy levels'],
    growthOpportunities: ['4 learns contentment', '9 learns emotional engagement', 'Balance intensity with acceptance'],
    communicationTips: ['9s: Show 4 they\'re truly seen', '4s: Appreciate 9\'s steadiness', 'Don\'t mistake calm for indifference']
  },

  // === REMAINING HEAD/GUT/CROSS RELATIONSHIPS ===
  {
    type1: 5, type2: 9, overallScore: 6,
    strengths: ['Both value peace and space', 'Non-demanding companionship', 'Comfortable silence together'],
    challenges: ['Both withdraw and avoid', 'Neither initiates engagement', 'Relationship may lack energy'],
    growthOpportunities: ['Practice engagement together', 'Build shared activities', 'Express needs and preferences'],
    communicationTips: ['Schedule active time together', 'Check in regularly', 'Don\'t assume comfort means connection']
  },
  {
    type1: 6, type2: 8, overallScore: 7,
    strengths: ['8 provides security 6 craves', '6\'s loyalty matches 8\'s protection', 'Strong alliance when trust is built'],
    challenges: ['6 may fear 8\'s intensity', '8 may be frustrated by 6\'s doubt', 'Trust takes time to build'],
    growthOpportunities: ['6 learns confidence from 8', '8 learns to temper power', 'Building unshakeable trust'],
    communicationTips: ['8s: Be patient with 6\'s process', '6s: Don\'t test 8\'s loyalty', 'Build trust through actions']
  },
  {
    type1: 7, type2: 8, overallScore: 7,
    strengths: ['Both assertive and energetic', 'Shared love of adventure', 'Powerful, dynamic partnership'],
    challenges: ['Competition for control', '7 may avoid conflict 8 wants to address', 'Intensity can escalate'],
    growthOpportunities: ['7 learns to face problems', '8 learns to lighten up', 'Channeling energy constructively'],
    communicationTips: ['Allow each other leadership turns', 'Don\'t let conflicts fester', 'Adventure together with purpose']
  },
  {
    type1: 7, type2: 9, overallScore: 7,
    strengths: ['Both positive and easygoing', '9 provides calm to 7\'s energy', '7 energizes 9'],
    challenges: ['Neither addresses problems', '7 may leave 9 behind', '9 may feel overwhelmed by 7\'s pace'],
    growthOpportunities: ['Face difficulties together', '9 learns engagement from 7', '7 learns presence from 9'],
    communicationTips: ['Slow down for 9 sometimes', '9s: Express preferences', 'Balance activity with rest']
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
