import type { Wing, TypeNumber, WingVariant } from '../../types';

export const wings: Wing[] = [
  // Type 1 Wings
  {
    type: 1,
    wing: 9,
    variant: '1w9',
    name: 'The Idealist',
    description: 'More introverted, detached, and relaxed than 1w2. Combines the principled nature of Type 1 with the calm, accepting qualities of Type 9.',
    characteristics: [
      'More philosophical and contemplative',
      'Less openly critical, more quietly judgmental',
      'Struggles between action and withdrawal',
      'More objective and emotionally controlled',
      'Can appear cooler and more detached'
    ]
  },
  {
    type: 1,
    wing: 2,
    variant: '1w2',
    name: 'The Advocate',
    description: 'More extroverted, empathic, and action-oriented than 1w9. Combines principled idealism with the warmth and helpfulness of Type 2.',
    characteristics: [
      'More passionate about helping others',
      'Stronger interpersonal focus',
      'Can be more controlling and critical of others',
      'More emotionally expressive',
      'Often drawn to advocacy and activism'
    ]
  },
  // Type 2 Wings
  {
    type: 2,
    wing: 1,
    variant: '2w1',
    name: 'The Servant',
    description: 'More idealistic, objective, and principled than 2w3. Combines the helpfulness of Type 2 with the ethical standards of Type 1.',
    characteristics: [
      'More critical and less emotionally demonstrative',
      'Stronger sense of duty and moral obligation',
      'More controlled in expressing needs',
      'Can be judgmental while helping',
      'Often drawn to service-oriented work'
    ]
  },
  {
    type: 2,
    wing: 3,
    variant: '2w3',
    name: 'The Host/Hostess',
    description: 'More ambitious, image-conscious, and charming than 2w1. Combines nurturing with the drive for success and recognition.',
    characteristics: [
      'More concerned with appearances',
      'Socially adept and charming',
      'More competitive and driven',
      'Seeks appreciation through accomplishments',
      'Can be seductive and manipulative'
    ]
  },
  // Type 3 Wings
  {
    type: 3,
    wing: 2,
    variant: '3w2',
    name: 'The Charmer',
    description: 'More interpersonal, charming, and emotionally available than 3w4. Combines achievement drive with warmth and people skills.',
    characteristics: [
      'More socially oriented and personable',
      'Seeks validation through relationships',
      'More emotionally expressive',
      'Can be manipulative to win approval',
      'Often very attractive and charismatic'
    ]
  },
  {
    type: 3,
    wing: 4,
    variant: '3w4',
    name: 'The Professional',
    description: 'More introverted, serious, and artistic than 3w2. Combines drive for success with depth and authenticity concerns.',
    characteristics: [
      'More introspective and emotionally complex',
      'Concerned with being authentic while successful',
      'More prone to self-doubt',
      'Often drawn to creative professional fields',
      'Can be moody and competitive'
    ]
  },
  // Type 4 Wings
  {
    type: 4,
    wing: 3,
    variant: '4w3',
    name: 'The Aristocrat',
    description: 'More ambitious, sociable, and image-conscious than 4w5. Combines emotional depth with drive for recognition and success.',
    characteristics: [
      'More outgoing and competitive',
      'Wants to be both unique and successful',
      'More concerned with social image',
      'Can be dramatic and attention-seeking',
      'Often drawn to performing arts'
    ]
  },
  {
    type: 4,
    wing: 5,
    variant: '4w5',
    name: 'The Bohemian',
    description: 'More withdrawn, intellectual, and unconventional than 4w3. Combines emotional depth with analytical detachment.',
    characteristics: [
      'More introverted and cerebral',
      'Highly creative and original',
      'More eccentric and unconventional',
      'Can be dark and nihilistic',
      'Often drawn to avant-garde art and ideas'
    ]
  },
  // Type 5 Wings
  {
    type: 5,
    wing: 4,
    variant: '5w4',
    name: 'The Iconoclast',
    description: 'More creative, introspective, and emotionally intense than 5w6. Combines analytical thinking with emotional depth.',
    characteristics: [
      'More creative and unconventional',
      'Deeper emotional life',
      'More self-absorbed and eccentric',
      'Often drawn to artistic or philosophical pursuits',
      'Can be moody and withdrawn'
    ]
  },
  {
    type: 5,
    wing: 6,
    variant: '5w6',
    name: 'The Problem Solver',
    description: 'More practical, loyal, and anxious than 5w4. Combines analytical ability with concern for security and belonging.',
    characteristics: [
      'More oriented toward practical applications',
      'Stronger need for security and certainty',
      'More socially anxious but also more engaged',
      'Often drawn to science and technical fields',
      'Can be skeptical and defensive'
    ]
  },
  // Type 6 Wings
  {
    type: 6,
    wing: 5,
    variant: '6w5',
    name: 'The Defender',
    description: 'More introverted, analytical, and independent than 6w7. Combines loyalty with intellectual rigor.',
    characteristics: [
      'More withdrawn and private',
      'Stronger analytical skills',
      'More skeptical and cautious',
      'Often drawn to technical or analytical work',
      'Can be more pessimistic and detached'
    ]
  },
  {
    type: 6,
    wing: 7,
    variant: '6w7',
    name: 'The Buddy',
    description: 'More outgoing, playful, and optimistic than 6w5. Combines need for security with enthusiasm and sociability.',
    characteristics: [
      'More extroverted and engaging',
      'Uses humor to manage anxiety',
      'More optimistic and adventurous',
      'Often drawn to team-oriented activities',
      'Can be scattered and reactive'
    ]
  },
  // Type 7 Wings
  {
    type: 7,
    wing: 6,
    variant: '7w6',
    name: 'The Entertainer',
    description: 'More loyal, engaging, and anxiety-aware than 7w8. Combines enthusiasm with need for security and connection.',
    characteristics: [
      'More relationship-oriented',
      'More aware of anxieties beneath optimism',
      'Funnier and more entertaining',
      'Often drawn to performing and comedy',
      'Can be more self-doubting'
    ]
  },
  {
    type: 7,
    wing: 8,
    variant: '7w8',
    name: 'The Realist',
    description: 'More assertive, materialistic, and aggressive than 7w6. Combines enthusiasm with power and directness.',
    characteristics: [
      'More aggressive and competitive',
      'Stronger will and determination',
      'More focused on material success',
      'Often drawn to business and entrepreneurship',
      'Can be more confrontational and dominating'
    ]
  },
  // Type 8 Wings
  {
    type: 8,
    wing: 7,
    variant: '8w7',
    name: 'The Maverick',
    description: 'More extroverted, enterprising, and energetic than 8w9. Combines power with enthusiasm and adventure.',
    characteristics: [
      'More entrepreneurial and risk-taking',
      'Highly energetic and charismatic',
      'More interested in pleasure and variety',
      'Often drawn to bold ventures',
      'Can be excessive and impulsive'
    ]
  },
  {
    type: 8,
    wing: 9,
    variant: '8w9',
    name: 'The Bear',
    description: 'More grounded, receptive, and patient than 8w7. Combines power with calm presence and acceptance.',
    characteristics: [
      'More quietly powerful',
      'Slower to anger but more stubborn',
      'More receptive and laid-back',
      'Often natural leaders through presence',
      'Can be complacent and quietly dominating'
    ]
  },
  // Type 9 Wings
  {
    type: 9,
    wing: 8,
    variant: '9w8',
    name: 'The Referee',
    description: 'More assertive, grounded, and direct than 9w1. Combines peace-seeking with strength and directness.',
    characteristics: [
      'More assertive and outspoken',
      'Stronger sense of personal power',
      'More comfortable with conflict when necessary',
      'Often natural mediators',
      'Can be stubborn and confrontational'
    ]
  },
  {
    type: 9,
    wing: 1,
    variant: '9w1',
    name: 'The Dreamer',
    description: 'More idealistic, orderly, and principled than 9w8. Combines peace-seeking with ethical standards.',
    characteristics: [
      'More idealistic and principled',
      'Stronger sense of right and wrong',
      'More orderly and contained',
      'Often drawn to teaching and counseling',
      'Can be more critical and judgmental'
    ]
  }
];

export const getWingsByType = (typeNumber: TypeNumber): Wing[] => {
  return wings.filter(w => w.type === typeNumber);
};

export const getWingByVariant = (variant: WingVariant): Wing | undefined => {
  return wings.find(w => w.variant === variant);
};

export const getAdjacentTypes = (typeNumber: TypeNumber): [TypeNumber, TypeNumber] => {
  const adjacents: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
    1: [9, 2],
    2: [1, 3],
    3: [2, 4],
    4: [3, 5],
    5: [4, 6],
    6: [5, 7],
    7: [6, 8],
    8: [7, 9],
    9: [8, 1]
  };
  return adjacents[typeNumber];
};
