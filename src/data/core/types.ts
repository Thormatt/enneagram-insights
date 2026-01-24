import type { EnneagramType } from '../../types';

export const enneagramTypes: EnneagramType[] = [
  {
    number: 1,
    name: 'The Reformer',
    coreFear: 'Being corrupt, evil, or defective',
    coreDesire: 'To be good, to have integrity, to be balanced',
    center: 'gut',
    briefDescription: 'The rational, idealistic type. Principled, purposeful, self-controlled, and perfectionistic.',
    keyMotivations: [
      'Want to be right',
      'To strive higher and improve everything',
      'To be consistent with their ideals',
      'To justify themselves',
      'To be beyond criticism'
    ]
  },
  {
    number: 2,
    name: 'The Helper',
    coreFear: 'Being unwanted, unworthy of being loved',
    coreDesire: 'To feel loved and appreciated',
    center: 'heart',
    briefDescription: 'The caring, interpersonal type. Demonstrative, generous, people-pleasing, and possessive.',
    keyMotivations: [
      'Want to be loved',
      'To express their feelings for others',
      'To be needed and appreciated',
      'To get others to respond to them',
      'To vindicate their claims about themselves'
    ]
  },
  {
    number: 3,
    name: 'The Achiever',
    coreFear: 'Being worthless or without inherent value',
    coreDesire: 'To feel valuable and worthwhile',
    center: 'heart',
    briefDescription: 'The success-oriented, pragmatic type. Adaptive, excelling, driven, and image-conscious.',
    keyMotivations: [
      'Want to be affirmed',
      'To distinguish themselves from others',
      'To have attention',
      'To be admired',
      'To impress others'
    ]
  },
  {
    number: 4,
    name: 'The Individualist',
    coreFear: 'Having no identity or personal significance',
    coreDesire: 'To find themselves and their significance',
    center: 'heart',
    briefDescription: 'The sensitive, withdrawn type. Expressive, dramatic, self-absorbed, and temperamental.',
    keyMotivations: [
      'Want to express themselves and their individuality',
      'To create and surround themselves with beauty',
      'To maintain certain moods and feelings',
      'To withdraw to protect their self-image',
      'To take care of emotional needs before anything else'
    ]
  },
  {
    number: 5,
    name: 'The Investigator',
    coreFear: 'Being useless, helpless, or overwhelmed',
    coreDesire: 'To be capable and competent',
    center: 'head',
    briefDescription: 'The intense, cerebral type. Perceptive, innovative, secretive, and isolated.',
    keyMotivations: [
      'Want to possess knowledge',
      'To understand the environment',
      'To have everything figured out as a way of defending the self from threats',
      'To be left alone',
      'To not have demands placed on them'
    ]
  },
  {
    number: 6,
    name: 'The Loyalist',
    coreFear: 'Being without support and guidance',
    coreDesire: 'To have security and support',
    center: 'head',
    briefDescription: 'The committed, security-oriented type. Engaging, responsible, anxious, and suspicious.',
    keyMotivations: [
      'Want to have security',
      'To feel supported by others',
      'To have certitude and reassurance',
      'To test the attitudes of others toward them',
      'To fight against anxiety and insecurity'
    ]
  },
  {
    number: 7,
    name: 'The Enthusiast',
    coreFear: 'Being deprived and trapped in pain',
    coreDesire: 'To be satisfied, content, and fulfilled',
    center: 'head',
    briefDescription: 'The busy, fun-loving type. Spontaneous, versatile, distractible, and scattered.',
    keyMotivations: [
      'Want to maintain their freedom and happiness',
      'To avoid missing out on worthwhile experiences',
      'To keep themselves excited and occupied',
      'To avoid and discharge pain',
      'To have more of everything'
    ]
  },
  {
    number: 8,
    name: 'The Challenger',
    coreFear: 'Being harmed or controlled by others',
    coreDesire: 'To protect themselves and determine their own path',
    center: 'gut',
    briefDescription: 'The powerful, dominating type. Self-confident, decisive, willful, and confrontational.',
    keyMotivations: [
      'Want to be self-reliant',
      'To prove their strength and resist weakness',
      'To be important in their world',
      'To dominate the environment',
      'To stay in control of their situation'
    ]
  },
  {
    number: 9,
    name: 'The Peacemaker',
    coreFear: 'Loss, separation, and fragmentation',
    coreDesire: 'To have inner stability and peace of mind',
    center: 'gut',
    briefDescription: 'The easygoing, self-effacing type. Receptive, reassuring, agreeable, and complacent.',
    keyMotivations: [
      'Want to create harmony in their environment',
      'To avoid conflicts and tension',
      'To preserve things as they are',
      'To resist whatever would upset or disturb them',
      'To ignore anything that would be upsetting'
    ]
  }
];

export const getAllTypes = (): EnneagramType[] => {
  return enneagramTypes;
};

export const getTypeByNumber = (num: number): EnneagramType | undefined => {
  return enneagramTypes.find(t => t.number === num);
};

export const getTypesByCenter = (center: 'gut' | 'heart' | 'head'): EnneagramType[] => {
  return enneagramTypes.filter(t => t.center === center);
};
