import type { ObjectRelationsInfo, ObjectRelationsTriad, TypeNumber } from '../../types';

export const objectRelationsTriads: ObjectRelationsInfo[] = [
  {
    name: 'frustration',
    displayName: 'Frustration Triad',
    types: [1, 4, 7],
    earlyPattern: 'Needs were blocked, so they seek an ideal to fulfill them',
    description: `The Frustration Triad experienced early needs as blocked or not adequately met, leading
to chronic frustration and a focus on what's missing or ideal. These types compensate by pursuing
ideals—the perfect way (1), the ideal love/identity (4), or the ideal experience (7). They are
never quite satisfied because reality never matches the ideal.`,
    compensatoryBehavior: `These types seek to fulfill unmet needs through idealized visions:
Type 1 seeks the ideal of perfection and right action, Type 4 seeks the ideal of authentic identity
and perfect love, Type 7 seeks the ideal of happiness and perfect experience. All struggle with
chronic dissatisfaction when reality falls short.`
  },
  {
    name: 'rejection',
    displayName: 'Rejection Triad',
    types: [2, 5, 8],
    earlyPattern: 'Felt rejected by nurturing figure, so they compensate by becoming self-sufficient or denying needs',
    description: `The Rejection Triad experienced early rejection or not being nurtured adequately by
the nurturing figure. These types compensate by either becoming the nurturer themselves (2),
withdrawing and becoming self-sufficient (5), or becoming powerful enough that they can't be hurt
by rejection (8). They struggle with feeling unwanted or invaded.`,
    compensatoryBehavior: `These types compensate for early rejection differently:
Type 2 becomes the nurturing figure they wanted, giving to get love, Type 5 withdraws into
self-sufficiency, minimizing needs so rejection can't hurt, Type 8 becomes powerful enough that no
one can reject or hurt them. All have difficulty with vulnerable neediness.`
  },
  {
    name: 'attachment',
    displayName: 'Attachment Triad',
    types: [3, 6, 9],
    earlyPattern: 'Fear abandonment, so they adapt to secure connection',
    description: `The Attachment Triad is most concerned with maintaining connection and fears
abandonment. These types adapted to their environment to secure attachment—Type 3 by becoming
whatever is valued, Type 6 by becoming loyal and questioning, Type 9 by merging and not rocking
the boat. They have difficulty with separation and individuation.`,
    compensatoryBehavior: `These types adapt to secure attachment in different ways:
Type 3 becomes what will be valued and admired, Type 6 becomes loyal, dutiful, and seeks guidance
from authority, Type 9 merges with others and environment to maintain peace. All struggle with
individuation and fear of abandonment.`
  }
];

export const getObjectRelationsTriad = (name: ObjectRelationsTriad): ObjectRelationsInfo | undefined => {
  return objectRelationsTriads.find(ort => ort.name === name);
};

export const getObjectRelationsByType = (typeNumber: TypeNumber): ObjectRelationsInfo | undefined => {
  return objectRelationsTriads.find(ort => ort.types.includes(typeNumber));
};

export const getObjectRelationsName = (typeNumber: TypeNumber): ObjectRelationsTriad | undefined => {
  return objectRelationsTriads.find(ort => ort.types.includes(typeNumber))?.name;
};

export const objectRelationsMap: Record<TypeNumber, ObjectRelationsTriad> = {
  1: 'frustration',
  2: 'rejection',
  3: 'attachment',
  4: 'frustration',
  5: 'rejection',
  6: 'attachment',
  7: 'frustration',
  8: 'rejection',
  9: 'attachment'
};
