import type { IntegrationPath, TypeNumber } from '../../types';

export const integrationPaths: IntegrationPath[] = [
  {
    type: 1,
    movesTo: 7,
    gains: [
      'Spontaneity and joy',
      'Ability to relax and play',
      'Acceptance of imperfection',
      'Lightheartedness',
      'Flexibility and openness to possibilities'
    ],
    description: `When Ones integrate toward Seven, they access a lightness and joy that balances their
usual seriousness. They learn to relax their inner critic, embrace spontaneity, and find pleasure
in the moment. They discover that not everything needs to be perfect to be enjoyed. Life becomes
an adventure rather than a constant improvement project.`,
    practices: [
      'Schedule unstructured play time',
      'Say yes to spontaneous invitations',
      'Practice improv or comedy',
      'Travel without rigid itineraries',
      'Celebrate small pleasures without guilt'
    ]
  },
  {
    type: 2,
    movesTo: 4,
    gains: [
      'Self-awareness and depth',
      'Ability to acknowledge own needs',
      'Authentic emotional expression',
      'Healthy boundaries',
      'Creative self-expression'
    ],
    description: `When Twos integrate toward Four, they turn attention inward and connect with their own
feelings and needs. They develop a richer inner life and can express their authentic emotions
rather than constantly focusing on others. They learn that taking care of themselves isn't selfish
and that their own depths matter.`,
    practices: [
      'Keep a feelings journal',
      'Practice saying "I need..."',
      'Spend time alone without helping others',
      'Explore creative self-expression',
      'Notice when you\'re giving to get'
    ]
  },
  {
    type: 3,
    movesTo: 6,
    gains: [
      'Loyalty and commitment',
      'Deeper connections',
      'Ability to be vulnerable',
      'Team orientation over solo achievement',
      'Authenticity over image'
    ],
    description: `When Threes integrate toward Six, they slow down from constant achievement to build
genuine connections. They become more loyal, committed, and team-oriented. They learn that value
comes from being, not just doing, and that vulnerability strengthens rather than weakens
relationships. Success becomes shared rather than solo.`,
    practices: [
      'Admit fears and doubts to trusted others',
      'Invest in long-term relationships',
      'Support others\' success without competing',
      'Practice showing up without performing',
      'Ask for help instead of proving capability'
    ]
  },
  {
    type: 4,
    movesTo: 1,
    gains: [
      'Discipline and structure',
      'Objectivity about emotions',
      'Ability to take practical action',
      'Self-regulation',
      'Principled consistency'
    ],
    description: `When Fours integrate toward One, they balance their emotional intensity with structure
and discipline. They learn to take action even when not inspired, to be objective about their
feelings, and to channel their depth into principled work. They move from "I feel" to "I do" and
discover that action can be as transformative as emotion.`,
    practices: [
      'Establish daily routines',
      'Complete projects rather than abandoning them',
      'Practice emotional regulation techniques',
      'Set and keep commitments',
      'Focus on what\'s present, not what\'s missing'
    ]
  },
  {
    type: 5,
    movesTo: 8,
    gains: [
      'Confidence and decisiveness',
      'Ability to take action',
      'Direct engagement with life',
      'Leadership and assertion',
      'Trust in own power'
    ],
    description: `When Fives integrate toward Eight, they move from observation to action. They access
their own power and confidence, engaging directly with life rather than withdrawing to analyze it.
They learn that they have enough energy and resources to handle what comes, and that influence
requires participation, not just understanding.`,
    practices: [
      'Make decisions faster with less information',
      'Express opinions publicly',
      'Take on leadership roles',
      'Engage physically (exercise, sports)',
      'Practice saying what you want directly'
    ]
  },
  {
    type: 6,
    movesTo: 9,
    gains: [
      'Inner peace and relaxation',
      'Trust in self and others',
      'Ability to let go of vigilance',
      'Acceptance of uncertainty',
      'Groundedness'
    ],
    description: `When Sixes integrate toward Nine, they find the inner peace they've been seeking
externally. They learn to relax their vigilance, trust themselves, and accept uncertainty without
panic. The world becomes less threatening as they access their own grounded stability. Anxiety
gives way to calm presence.`,
    practices: [
      'Practice meditation and relaxation',
      'Notice when vigilance is unnecessary',
      'Trust your first instinct instead of doubting',
      'Spend time in nature',
      'Practice accepting uncertainty as normal'
    ]
  },
  {
    type: 7,
    movesTo: 5,
    gains: [
      'Focus and depth',
      'Ability to be present with difficulty',
      'Completion of projects',
      'Inner richness through reflection',
      'Comfort with solitude'
    ],
    description: `When Sevens integrate toward Five, they develop focus and depth. They learn to stay
with one thing instead of constantly seeking new stimulation. They discover that presence is more
fulfilling than anticipation, and that the inner world offers riches that don't require constant
external input. Depth replaces breadth.`,
    practices: [
      'Complete one project before starting another',
      'Practice sustained attention meditation',
      'Sit with uncomfortable feelings without escaping',
      'Spend time in solitude and reflection',
      'Go deep into one subject rather than sampling many'
    ]
  },
  {
    type: 8,
    movesTo: 2,
    gains: [
      'Openheartedness and warmth',
      'Ability to nurture',
      'Vulnerability as strength',
      'Caring for others\' needs',
      'Softness alongside power'
    ],
    description: `When Eights integrate toward Two, they open their hearts and let others in. They
discover that vulnerability isn't weakness and that caring for others expands rather than
diminishes their power. Their natural protectiveness becomes warm nurturing. Strength softens into
love, and control relaxes into care.`,
    practices: [
      'Express care and affection openly',
      'Ask others what they need',
      'Allow yourself to need others',
      'Practice gentle touch and presence',
      'Show vulnerability to those you trust'
    ]
  },
  {
    type: 9,
    movesTo: 3,
    gains: [
      'Assertiveness and focus',
      'Ability to pursue goals',
      'Energy and vitality',
      'Presence and engagement',
      'Clear sense of own priorities'
    ],
    description: `When Nines integrate toward Three, they wake up to their own desires and pursue them
actively. They become more assertive, focused, and energized. They discover that their presence
matters and that achieving things feels good. They move from passive accommodation to active
engagement with life.`,
    practices: [
      'Set and pursue personal goals',
      'Practice saying what you want',
      'Take credit for accomplishments',
      'Engage in physical activity',
      'Make decisions based on your preferences'
    ]
  }
];

export const getIntegrationPath = (typeNumber: TypeNumber): IntegrationPath | undefined => {
  return integrationPaths.find(ip => ip.type === typeNumber);
};

export const getIntegrationTarget = (typeNumber: TypeNumber): TypeNumber | undefined => {
  return integrationPaths.find(ip => ip.type === typeNumber)?.movesTo;
};

export const integrationMap: Record<TypeNumber, TypeNumber> = {
  1: 7,
  2: 4,
  3: 6,
  4: 1,
  5: 8,
  6: 9,
  7: 5,
  8: 2,
  9: 3
};
