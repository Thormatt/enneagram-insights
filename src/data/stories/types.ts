import type { TypeNumber, InstinctType } from '../../types';

export interface SubtypeStory {
  type: TypeNumber;
  instinct: InstinctType;
  title: string;
  subtitle: string;
  narrative: string;
  somaticMarker: string;
  hiddenLogic: string;
  reflection: string;
}

export interface TypeStories {
  type: TypeNumber;
  stories: {
    sp: SubtypeStory;
    so: SubtypeStory;
    sx: SubtypeStory;
  };
}
