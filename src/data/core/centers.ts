import type { Center } from '../../types';

export const centers: Center[] = [
  {
    name: 'gut',
    displayName: 'Body/Gut Center',
    types: [8, 9, 1],
    coreEmotion: 'anger',
    focus: 'Autonomy, instinct, and boundaries',
    description: `The Body Center is concerned with maintaining a sense of independence,
autonomy, and control over one's life and environment. Types in this center have
issues with anger and aggression—Type 8 expresses it outwardly, Type 1 represses
and redirects it through perfectionism, and Type 9 goes to sleep to their anger,
numbing out. These types rely heavily on instinctual knowing and gut feelings.
They are concerned with issues of justice, fairness, and resistance versus
accommodation to their environment.`
  },
  {
    name: 'heart',
    displayName: 'Heart/Feeling Center',
    types: [2, 3, 4],
    coreEmotion: 'shame',
    focus: 'Image, value, and attachment',
    description: `The Heart Center is concerned with identity, image, and self-worth derived
from relationships with others. Types in this center have issues with shame and
self-image—Type 2 seeks worth through being needed, Type 3 through achievement
and success, and Type 4 through being unique and authentic. These types are
highly attuned to how others perceive them and often struggle with questions of
authentic versus constructed identity. Emotional intelligence and relational
dynamics are their primary mode of engaging with the world.`
  },
  {
    name: 'head',
    displayName: 'Head/Thinking Center',
    types: [5, 6, 7],
    coreEmotion: 'fear',
    focus: 'Security, anticipation, and planning',
    description: `The Head Center is concerned with security, guidance, and managing anxiety
about the future. Types in this center have issues with fear and anxiety—Type 5
withdraws and hoards resources/knowledge, Type 6 directly wrestles with fear
through vigilance and seeking support, and Type 7 avoids fear through optimism
and distraction. These types rely heavily on mental analysis, planning, and
strategic thinking. They often struggle with overthinking and disconnection
from bodily sensations and emotions.`
  }
];

export const getCenterByName = (name: 'gut' | 'heart' | 'head'): Center | undefined => {
  return centers.find(c => c.name === name);
};

export const getCenterByType = (typeNumber: number): Center | undefined => {
  return centers.find(c => c.types.includes(typeNumber as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9));
};

export const getCenterColor = (center: 'gut' | 'heart' | 'head'): string => {
  // Warm Editorial palette - muted, earthy tones
  const colors = {
    gut: '#8C3A2B',    // Iron Oxide - earthy, grounded
    heart: '#2D5A52',  // Deep Verdigris - emotional depth
    head: '#364C63'    // Storm Slate - clarity, wisdom
  };
  return colors[center];
};
