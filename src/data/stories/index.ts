import type { SubtypeStory } from './types';
import type { TypeNumber, InstinctType } from '../../types';

import { type1Stories } from './type1-stories';
import { type2Stories } from './type2-stories';
import { type3Stories } from './type3-stories';
import { type4Stories } from './type4-stories';
import { type5Stories } from './type5-stories';
import { type6Stories } from './type6-stories';
import { type7Stories } from './type7-stories';
import { type8Stories } from './type8-stories';
import { type9Stories } from './type9-stories';

export type { SubtypeStory } from './types';

type StoryCollection = { sp: SubtypeStory; so: SubtypeStory; sx: SubtypeStory };

const allStories: Record<TypeNumber, StoryCollection> = {
  1: type1Stories,
  2: type2Stories,
  3: type3Stories,
  4: type4Stories,
  5: type5Stories,
  6: type6Stories,
  7: type7Stories,
  8: type8Stories,
  9: type9Stories,
};

export const getStory = (type: TypeNumber, instinct: InstinctType): SubtypeStory => {
  return allStories[type][instinct];
};

export const getStoriesForType = (type: TypeNumber): StoryCollection => {
  return allStories[type];
};

export const getAllStories = (): SubtypeStory[] => {
  const stories: SubtypeStory[] = [];
  const instincts: InstinctType[] = ['sp', 'so', 'sx'];

  for (let type = 1; type <= 9; type++) {
    for (const instinct of instincts) {
      stories.push(allStories[type as TypeNumber][instinct]);
    }
  }

  return stories;
};
