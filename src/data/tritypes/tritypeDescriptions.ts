import type { TypeNumber } from '../../types';

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

export interface TritypeInfo {
  code: string;
  name: string;
  archetype: string;
  description: string;
  strengths: string[];
  challenges: string[];
  innerExperience: string;
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

// Generate a unique key from tritype components
export function getTritypeKey(gut: TypeNumber, heart: TypeNumber, head: TypeNumber): string {
  return `${gut}-${heart}-${head}`;
}

// All 27 tritype descriptions
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
  },
};

/**
 * Get tritype info from tritype components
 */
export function getTritypeInfo(gut: TypeNumber, heart: TypeNumber, head: TypeNumber): TritypeInfo | null {
  const key = getTritypeKey(gut, heart, head);
  return tritypeDescriptions[key] || null;
}

/**
 * Get tritype info from tritype code (e.g., "479")
 */
export function getTritypeInfoFromCode(code: string): TritypeInfo | null {
  // The code is ordered by primary type's center, but we need to find the right key
  // Try all permutations to find the match
  const digits = code.split('').map(Number) as TypeNumber[];
  if (digits.length !== 3) return null;

  // Find which digit belongs to which center
  let gut: TypeNumber | undefined;
  let heart: TypeNumber | undefined;
  let head: TypeNumber | undefined;

  for (const d of digits) {
    if (CENTERS.gut.includes(d)) gut = d;
    else if (CENTERS.heart.includes(d)) heart = d;
    else if (CENTERS.head.includes(d)) head = d;
  }

  if (!gut || !heart || !head) return null;

  return getTritypeInfo(gut, heart, head);
}
