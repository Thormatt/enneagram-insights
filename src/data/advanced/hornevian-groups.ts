import type { HornevianGroupInfo, HornevianGroup, TypeNumber } from '../../types';

export const hornevianGroups: HornevianGroupInfo[] = [
  {
    name: 'assertive',
    displayName: 'Assertive Group',
    types: [3, 7, 8],
    socialMovement: 'Move against others to get needs met',
    description: `The Assertive Group moves against others and demands that their needs be met. These
types are proactive, go after what they want directly, and expect the world to respond to them.
They are ego-expansive, confident, and may override others' boundaries in pursuit of their goals.
They believe the way to get needs met is to assert themselves strongly.`,
    characteristics: [
      'Move against or toward others to get needs met',
      'Proactive and direct in pursuing goals',
      'Confident and ego-expansive',
      'May override others\' boundaries',
      'Believe self-assertion gets results',
      'Tend to be dominant in interactions',
      'Can be insensitive to others\' needs',
      'Often unaware of how they affect others'
    ]
  },
  {
    name: 'compliant',
    displayName: 'Compliant Group',
    types: [1, 2, 6],
    socialMovement: 'Move toward others to earn acceptance',
    description: `The Compliant Group moves toward others and tries to earn acceptance by meeting
expectations. These types work to gain approval and connection through pleasing, supporting, or
doing what's right according to external standards. They often suppress their own desires to serve
what they perceive as expected of them.`,
    characteristics: [
      'Move toward others to earn acceptance',
      'Work to meet expectations',
      'Seek approval through duty, service, or being good',
      'May suppress personal desires',
      'Oriented toward rules, standards, or others\' needs',
      'Tend toward self-sacrifice',
      'Can be people-pleasing or rule-following',
      'Strong sense of obligation'
    ]
  },
  {
    name: 'withdrawn',
    displayName: 'Withdrawn Group',
    types: [4, 5, 9],
    socialMovement: 'Move away from others to find themselves',
    description: `The Withdrawn Group moves away from others and turns inward. These types deal with
life by retreating into their inner world—emotions, thoughts, or imagination. They need space and
time alone to process and may disengage from external demands to maintain their inner equilibrium.`,
    characteristics: [
      'Move away from others to process internally',
      'Turn inward to rich inner world',
      'Need solitude and space',
      'May disengage from external demands',
      'Process through emotion, thought, or imagination',
      'Less proactive about getting needs met',
      'Can seem disconnected or unavailable',
      'Find the outer world demanding'
    ]
  }
];

export const getHornevianGroup = (groupName: HornevianGroup): HornevianGroupInfo | undefined => {
  return hornevianGroups.find(hg => hg.name === groupName);
};

export const getHornevianGroupByType = (typeNumber: TypeNumber): HornevianGroupInfo | undefined => {
  return hornevianGroups.find(hg => hg.types.includes(typeNumber));
};

export const getHornevianGroupName = (typeNumber: TypeNumber): HornevianGroup | undefined => {
  return hornevianGroups.find(hg => hg.types.includes(typeNumber))?.name;
};

export const hornevianGroupMap: Record<TypeNumber, HornevianGroup> = {
  1: 'compliant',
  2: 'compliant',
  3: 'assertive',
  4: 'withdrawn',
  5: 'withdrawn',
  6: 'compliant',
  7: 'assertive',
  8: 'assertive',
  9: 'withdrawn'
};
