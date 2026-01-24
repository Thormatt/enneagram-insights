import type { Tritype, TritypeCode, TypeNumber } from '../../types';

// Key tritype archetypes (27 core tritypes, showing representative examples)
// Order is: Head-Heart-Gut for clarity, though actual tritype order varies by dominance

export const tritypes: Tritype[] = [
  // Type 1 dominant tritypes
  {
    code: '125',
    headType: 5,
    heartType: 2,
    gutType: 1,
    archetype: 'The Mentor',
    description: 'Combines principled ethics with desire to help and analytical depth. A reforming, caring, perceptive type who helps others through knowledge and guidance.',
    coreDrivers: ['Being good and right', 'Being helpful and needed', 'Understanding deeply']
  },
  {
    code: '126',
    headType: 6,
    heartType: 2,
    gutType: 1,
    archetype: 'The Supporter',
    description: 'Combines principled ethics with desire to help and need for security. A responsible, caring, loyal type who supports systems and people.',
    coreDrivers: ['Being good and right', 'Being helpful and needed', 'Being secure and supported']
  },
  {
    code: '135',
    headType: 5,
    heartType: 3,
    gutType: 1,
    archetype: 'The Technical Expert',
    description: 'Combines principled ethics with drive for success and analytical depth. A competent, achieving, knowledgeable type who masters systems.',
    coreDrivers: ['Being good and right', 'Being successful and valuable', 'Understanding deeply']
  },
  {
    code: '145',
    headType: 5,
    heartType: 4,
    gutType: 1,
    archetype: 'The Researcher',
    description: 'Combines principled ethics with desire for authenticity and analytical depth. An ethical, individualistic, investigative type who seeks truth.',
    coreDrivers: ['Being good and right', 'Being authentic and unique', 'Understanding deeply']
  },

  // Type 2 dominant tritypes
  {
    code: '269',
    headType: 6,
    heartType: 2,
    gutType: 9,
    archetype: 'The Good Samaritan',
    description: 'Combines caring with loyalty and peacemaking. A devoted, supportive, harmonious type who serves others and communities.',
    coreDrivers: ['Being loved and needed', 'Being secure and loyal', 'Maintaining peace']
  },
  {
    code: '278',
    headType: 7,
    heartType: 2,
    gutType: 8,
    archetype: 'The Free Spirit',
    description: 'Combines caring with enthusiasm and power. An energetic, generous, assertive type who helps through action and positivity.',
    coreDrivers: ['Being loved and needed', 'Being happy and free', 'Being strong and independent']
  },

  // Type 3 dominant tritypes
  {
    code: '317',
    headType: 7,
    heartType: 3,
    gutType: 1,
    archetype: 'The Entrepreneur',
    description: 'Combines achievement drive with enthusiasm and principled ethics. A driven, optimistic, ethical achiever who creates success.',
    coreDrivers: ['Being successful and valuable', 'Being happy and stimulated', 'Being good and right']
  },
  {
    code: '358',
    headType: 5,
    heartType: 3,
    gutType: 8,
    archetype: 'The Solution Master',
    description: 'Combines achievement with analysis and power. A competent, strategic, powerful type who solves problems and leads.',
    coreDrivers: ['Being successful and valuable', 'Understanding and mastering', 'Being strong and in control']
  },
  {
    code: '369',
    headType: 6,
    heartType: 3,
    gutType: 9,
    archetype: 'The Chameleon',
    description: 'Combines achievement with loyalty and peacemaking. The most adaptive tritype, excelling at fitting in and succeeding in any context.',
    coreDrivers: ['Being successful and valuable', 'Being secure and supported', 'Maintaining peace and harmony']
  },

  // Type 4 dominant tritypes
  {
    code: '458',
    headType: 5,
    heartType: 4,
    gutType: 8,
    archetype: 'The Scholar',
    description: 'Combines emotional depth with analysis and power. An intense, intellectual, forceful type who probes deeply and asserts truth.',
    coreDrivers: ['Being authentic and unique', 'Understanding deeply', 'Being strong and independent']
  },
  {
    code: '469',
    headType: 6,
    heartType: 4,
    gutType: 9,
    archetype: 'The Seeker',
    description: 'Combines emotional depth with anxiety and peacemaking. A sensitive, questioning, accepting type who seeks meaning.',
    coreDrivers: ['Being authentic and unique', 'Being secure and certain', 'Maintaining inner peace']
  },
  {
    code: '478',
    headType: 7,
    heartType: 4,
    gutType: 8,
    archetype: 'The Messenger',
    description: 'Combines emotional depth with enthusiasm and power. An expressive, adventurous, assertive type who communicates intensely.',
    coreDrivers: ['Being authentic and unique', 'Being happy and free', 'Being strong and impactful']
  },

  // Type 5 dominant tritypes
  {
    code: '512',
    headType: 5,
    heartType: 2,
    gutType: 1,
    archetype: 'The Problem Solver',
    description: 'Combines analytical depth with desire to help and principled ethics. A knowledgeable, caring, ethical type who helps through expertise.',
    coreDrivers: ['Understanding and competence', 'Being helpful', 'Being right and good']
  },
  {
    code: '548',
    headType: 5,
    heartType: 4,
    gutType: 8,
    archetype: 'The Iconoclast',
    description: 'Combines analytical depth with emotional authenticity and power. An intense, original, forceful intellectual who challenges conventions.',
    coreDrivers: ['Understanding and competence', 'Being unique and authentic', 'Being strong and independent']
  },
  {
    code: '593',
    headType: 5,
    heartType: 3,
    gutType: 9,
    archetype: 'The Thinker',
    description: 'Combines analytical depth with achievement drive and peacemaking. A competent, adaptable, calm type who achieves through knowledge.',
    coreDrivers: ['Understanding and competence', 'Being successful', 'Maintaining peace and stability']
  },

  // Type 6 dominant tritypes
  {
    code: '612',
    headType: 6,
    heartType: 2,
    gutType: 1,
    archetype: 'The Guardian',
    description: 'Combines security-seeking with desire to help and principled ethics. A loyal, caring, ethical type who protects and serves.',
    coreDrivers: ['Being secure and supported', 'Being helpful and needed', 'Being good and right']
  },
  {
    code: '648',
    headType: 6,
    heartType: 4,
    gutType: 8,
    archetype: 'The Defender',
    description: 'Combines security-seeking with emotional depth and power. A loyal, intense, strong type who defends what matters.',
    coreDrivers: ['Being secure and certain', 'Being authentic', 'Being strong and in control']
  },
  {
    code: '693',
    headType: 6,
    heartType: 3,
    gutType: 9,
    archetype: 'The Loyalist',
    description: 'Combines security-seeking with achievement and peacemaking. A reliable, successful, harmonious type who fits in and contributes.',
    coreDrivers: ['Being secure and supported', 'Being valuable and successful', 'Maintaining harmony']
  },

  // Type 7 dominant tritypes
  {
    code: '729',
    headType: 7,
    heartType: 2,
    gutType: 9,
    archetype: 'The Peacemaker',
    description: 'Combines enthusiasm with caring and peace-seeking. An upbeat, warm, harmonious type who brings positivity.',
    coreDrivers: ['Being happy and free', 'Being loved and loving', 'Maintaining peace']
  },
  {
    code: '748',
    headType: 7,
    heartType: 4,
    gutType: 8,
    archetype: 'The Innovator',
    description: 'Combines enthusiasm with emotional depth and power. An adventurous, expressive, forceful type who creates and impacts.',
    coreDrivers: ['Being happy and stimulated', 'Being unique and authentic', 'Being strong and impactful']
  },
  {
    code: '783',
    headType: 7,
    heartType: 3,
    gutType: 8,
    archetype: 'The Mover & Shaker',
    description: 'Combines enthusiasm with achievement and power. An energetic, successful, assertive type who makes things happen.',
    coreDrivers: ['Being happy and free', 'Being successful and admired', 'Being strong and in control']
  },

  // Type 8 dominant tritypes
  {
    code: '825',
    headType: 5,
    heartType: 2,
    gutType: 8,
    archetype: 'The Protector',
    description: 'Combines power with caring and analysis. A strong, nurturing, strategic type who protects through strength and wisdom.',
    coreDrivers: ['Being strong and independent', 'Being loving and helpful', 'Understanding and competence']
  },
  {
    code: '836',
    headType: 6,
    heartType: 3,
    gutType: 8,
    archetype: 'The Justice Fighter',
    description: 'Combines power with achievement and loyalty. A strong, successful, committed type who fights for causes.',
    coreDrivers: ['Being strong and in control', 'Being successful', 'Being secure and loyal']
  },
  {
    code: '874',
    headType: 7,
    heartType: 4,
    gutType: 8,
    archetype: 'The Maverick',
    description: 'Combines power with enthusiasm and emotional depth. An intense, adventurous, expressive type who lives boldly.',
    coreDrivers: ['Being strong and independent', 'Being happy and free', 'Being authentic and unique']
  },

  // Type 9 dominant tritypes
  {
    code: '926',
    headType: 6,
    heartType: 2,
    gutType: 9,
    archetype: 'The Healer',
    description: 'Combines peacemaking with caring and security-seeking. A harmonious, supportive, stable type who heals through presence.',
    coreDrivers: ['Peace and harmony', 'Being helpful and loved', 'Security and belonging']
  },
  {
    code: '953',
    headType: 5,
    heartType: 3,
    gutType: 9,
    archetype: 'The Contemplative',
    description: 'Combines peacemaking with analysis and achievement. A calm, competent, successful type who achieves through steadiness.',
    coreDrivers: ['Peace and stability', 'Understanding', 'Being valuable']
  },
  {
    code: '974',
    headType: 7,
    heartType: 4,
    gutType: 9,
    archetype: 'The Gentle Spirit',
    description: 'Combines peacemaking with enthusiasm and emotional depth. A peaceful, positive, sensitive type who brings harmony and meaning.',
    coreDrivers: ['Peace and harmony', 'Happiness and possibilities', 'Authenticity and depth']
  }
];

export const getTritype = (code: TritypeCode): Tritype | undefined => {
  return tritypes.find(t => t.code === code);
};

export const getTritypesByDominant = (dominant: TypeNumber): Tritype[] => {
  return tritypes.filter(t => t.code.startsWith(dominant.toString()));
};

export const generateTritypeCode = (
  headType: TypeNumber,
  heartType: TypeNumber,
  gutType: TypeNumber
): TritypeCode => {
  // Validate that types are from correct centers
  const headTypes: TypeNumber[] = [5, 6, 7];
  const heartTypes: TypeNumber[] = [2, 3, 4];
  const gutTypes: TypeNumber[] = [8, 9, 1];

  if (!headTypes.includes(headType) || !heartTypes.includes(heartType) || !gutTypes.includes(gutType)) {
    throw new Error('Invalid tritype: each center must have one type');
  }

  return `${headType}${heartType}${gutType}` as TritypeCode;
};

export const parseTritypeCode = (code: TritypeCode): {
  headType: TypeNumber;
  heartType: TypeNumber;
  gutType: TypeNumber;
} => {
  return {
    headType: parseInt(code[0]) as TypeNumber,
    heartType: parseInt(code[1]) as TypeNumber,
    gutType: parseInt(code[2]) as TypeNumber
  };
};
