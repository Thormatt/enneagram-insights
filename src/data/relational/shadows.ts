import type { Shadow, TypeNumber } from '../../types';

export const shadows: Shadow[] = [
  {
    type: 1,
    deniedAspects: [
      'Anger and resentment',
      'Desire for spontaneity and pleasure',
      'Impulses that seem "wrong" or "bad"',
      'Their own imperfection',
      'Enjoyment without purpose'
    ],
    projectsOntoOthers: 'Others are lazy, unethical, careless, or doing things wrong. "Why doesn\'t anyone else care about doing things right?"',
    innerCritique: 'The inner critic constantly evaluates: "You should have done that better. That wasn\'t good enough. You made a mistake."',
    shadowWork: [
      'Notice when criticizing others for what you deny in yourself',
      'Allow yourself to do something "imperfect" on purpose',
      'Express anger directly rather than through resentment',
      'Explore what "bad" impulses you\'re suppressing',
      'Practice saying "good enough" without adding qualifications'
    ]
  },
  {
    type: 2,
    deniedAspects: [
      'Personal needs and desires',
      'Self-interest and selfishness',
      'Anger at not being appreciated',
      'Their own manipulation',
      'Desire for independence'
    ],
    projectsOntoOthers: 'Others are needy, ungrateful, or using them. "I give so much and nobody appreciates it. Everyone takes but nobody gives to me."',
    innerCritique: 'The inner critic says: "You should be more loving. You\'re being selfish. They need you—don\'t think about yourself."',
    shadowWork: [
      'Practice asking directly for what you need',
      'Notice when you give with strings attached',
      'Allow yourself to be "selfish" sometimes',
      'Explore who you are when not helping',
      'Notice when you resent someone and why'
    ]
  },
  {
    type: 3,
    deniedAspects: [
      'Vulnerability and weakness',
      'Failure and inadequacy',
      'Authentic feelings that don\'t serve the image',
      'Parts of self that aren\'t successful',
      'Need for genuine connection over admiration'
    ],
    projectsOntoOthers: 'Others are inefficient, lazy, or losers. "Why can\'t they get their act together? They\'re wasting their potential."',
    innerCritique: 'The inner critic says: "You\'re not achieving enough. That failure reflects poorly on you. Keep performing."',
    shadowWork: [
      'Share a failure or vulnerability with someone trusted',
      'Notice when you\'re performing rather than being authentic',
      'Explore who you are apart from achievements',
      'Practice doing nothing and noticing how it feels',
      'Allow yourself to be seen struggling'
    ]
  },
  {
    type: 4,
    deniedAspects: [
      'Ordinariness and normalcy',
      'Contentment with what is',
      'Their own role in creating suffering',
      'Positive qualities others see in them',
      'Simple happiness'
    ],
    projectsOntoOthers: 'Others are shallow, ordinary, or don\'t understand. "Nobody gets me. They\'re all superficial and don\'t see the depths."',
    innerCritique: 'The inner critic says: "Something is wrong with you. You\'re not special enough. You\'ll never be complete."',
    shadowWork: [
      'Practice gratitude for ordinary things',
      'Notice when you create drama to feel special',
      'Accept a compliment without deflecting',
      'Explore what you have rather than what\'s missing',
      'Find meaning in simple, everyday activities'
    ]
  },
  {
    type: 5,
    deniedAspects: [
      'Emotional needs and dependencies',
      'Desire for connection',
      'Their own aggression and power',
      'Need for others',
      'Physical and emotional vitality'
    ],
    projectsOntoOthers: 'Others are intrusive, demanding, or overwhelming. "People want too much. They drain my energy with their needs."',
    innerCritique: 'The inner critic says: "You don\'t know enough yet. You\'re not ready to engage. You need to understand more first."',
    shadowWork: [
      'Express an emotional need directly',
      'Notice when you\'re withdrawing to avoid feeling',
      'Engage before you feel completely ready',
      'Allow yourself to need and depend on someone',
      'Practice being in your body, not just your head'
    ]
  },
  {
    type: 6,
    deniedAspects: [
      'Inner authority and self-trust',
      'Their own power and capability',
      'Positive expectations',
      'Faith in themselves',
      'The aggression behind their fear'
    ],
    projectsOntoOthers: 'Others are threatening, untrustworthy, or have hidden agendas. "You can\'t trust anyone. People will let you down or betray you."',
    innerCritique: 'The inner critic says: "You should be more careful. What if something goes wrong? You can\'t trust your own judgment."',
    shadowWork: [
      'Make a decision without seeking external validation',
      'Notice when fear is masquerading as prudence',
      'Trust your first instinct without second-guessing',
      'Take a risk and notice what happens',
      'Explore what would happen if the worst case occurred'
    ]
  },
  {
    type: 7,
    deniedAspects: [
      'Pain, sadness, and grief',
      'Limitations and constraints',
      'Depth of commitment',
      'Their own anxiety and fear',
      'Boredom and emptiness'
    ],
    projectsOntoOthers: 'Others are downers, limiting, or boring. "They\'re so negative! Why can\'t people be more positive and fun?"',
    innerCritique: 'The inner critic says: "You shouldn\'t feel sad. Find the silver lining. There must be something better."',
    shadowWork: [
      'Stay with a painful feeling without reframing it',
      'Complete something boring before starting something new',
      'Sit in silence without stimulation',
      'Allow yourself to feel sad or scared',
      'Explore what you\'re running from'
    ]
  },
  {
    type: 8,
    deniedAspects: [
      'Vulnerability and tenderness',
      'Need for others',
      'Fear and hurt beneath anger',
      'Softness and sensitivity',
      'Their own capacity to harm'
    ],
    projectsOntoOthers: 'Others are weak, manipulative, or untrustworthy. "People are weak and will take advantage if you show any vulnerability."',
    innerCritique: 'The inner critic says: "Don\'t be weak. Don\'t let them see you hurt. Showing softness is dangerous."',
    shadowWork: [
      'Share vulnerability with someone you trust',
      'Allow yourself to cry or feel tender',
      'Notice the hurt beneath your anger',
      'Ask for help instead of demanding or doing it yourself',
      'Explore what you\'re protecting by being tough'
    ]
  },
  {
    type: 9,
    deniedAspects: [
      'Anger and assertiveness',
      'Their own desires and priorities',
      'Their impact and presence',
      'Conflict and disagreement',
      'Their own importance'
    ],
    projectsOntoOthers: 'Others are aggressive, demanding, or making unnecessary conflict. "Why does everyone have to be so intense? Can\'t we all just get along?"',
    innerCritique: 'The inner critic says: "Don\'t rock the boat. Your needs aren\'t important. It\'s easier to go along."',
    shadowWork: [
      'Express a strong preference or opinion',
      'Notice when you\'re going along to avoid conflict',
      'Allow yourself to feel and express anger',
      'Pursue something just for yourself',
      'Recognize that your presence matters'
    ]
  }
];

export const getShadowByType = (typeNumber: TypeNumber): Shadow | undefined => {
  return shadows.find(s => s.type === typeNumber);
};

export const getShadowWorkByType = (typeNumber: TypeNumber): string[] => {
  return shadows.find(s => s.type === typeNumber)?.shadowWork ?? [];
};

export const getProjectionByType = (typeNumber: TypeNumber): string | undefined => {
  return shadows.find(s => s.type === typeNumber)?.projectsOntoOthers;
};
