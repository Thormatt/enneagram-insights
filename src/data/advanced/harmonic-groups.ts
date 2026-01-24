import type { HarmonicGroupInfo, HarmonicGroup, TypeNumber } from '../../types';

export const harmonicGroups: HarmonicGroupInfo[] = [
  {
    name: 'positive_outlook',
    displayName: 'Positive Outlook Group',
    types: [7, 9, 2],
    responseToProblems: 'Reframe problems positively, focus on the bright side, avoid negativity',
    description: `The Positive Outlook Group responds to problems by reframing them optimistically,
focusing on what's good, and avoiding negativity. When difficulties arise, these types look for
silver linings, try to stay positive, and may minimize or deny problems to maintain a positive
self-image and worldview. They have difficulty facing and staying with painful emotions.`,
    characteristics: [
      'Avoid or reframe negative emotions',
      'Focus on possibilities and positive aspects',
      'May deny or minimize problems',
      'Maintain optimistic outlook even in difficulty',
      'Struggle to stay with painful experiences',
      'Can appear unrealistically positive',
      'Use positivity as a defense mechanism'
    ]
  },
  {
    name: 'competency',
    displayName: 'Competency Group',
    types: [1, 3, 5],
    responseToProblems: 'Solve problems logically, suppress emotions, focus on competence',
    description: `The Competency Group responds to problems by putting aside emotions and solving them
logically and objectively. When difficulties arise, these types apply their skills, analyze
situations, and focus on being competent and effective. They may detach from feelings they see as
getting in the way of solving problems.`,
    characteristics: [
      'Emphasize logic over emotion',
      'Focus on being competent and effective',
      'Suppress or set aside feelings',
      'Apply skills and knowledge to solve problems',
      'Value objectivity and analysis',
      'Can seem cold or detached in crisis',
      'May miss emotional dimensions of problems'
    ]
  },
  {
    name: 'reactive',
    displayName: 'Reactive Group',
    types: [4, 6, 8],
    responseToProblems: 'React emotionally, express feelings, want to be heard and understood',
    description: `The Reactive Group responds to problems with strong emotional reactions and a need to
express and be heard. When difficulties arise, these types feel their emotions intensely and need
to process them through expression. They want others to understand their experience and may become
upset if their feelings are dismissed.`,
    characteristics: [
      'React emotionally to problems',
      'Express feelings openly and intensely',
      'Need to be heard and understood',
      'Process through emotional expression',
      'May seem dramatic or overreactive',
      'Trust emotional truth',
      'Can struggle with emotional regulation'
    ]
  }
];

export const getHarmonicGroup = (groupName: HarmonicGroup): HarmonicGroupInfo | undefined => {
  return harmonicGroups.find(hg => hg.name === groupName);
};

export const getHarmonicGroupByType = (typeNumber: TypeNumber): HarmonicGroupInfo | undefined => {
  return harmonicGroups.find(hg => hg.types.includes(typeNumber));
};

export const getHarmonicGroupName = (typeNumber: TypeNumber): HarmonicGroup | undefined => {
  return harmonicGroups.find(hg => hg.types.includes(typeNumber))?.name;
};

export const harmonicGroupMap: Record<TypeNumber, HarmonicGroup> = {
  1: 'competency',
  2: 'positive_outlook',
  3: 'competency',
  4: 'reactive',
  5: 'competency',
  6: 'reactive',
  7: 'positive_outlook',
  8: 'reactive',
  9: 'positive_outlook'
};
