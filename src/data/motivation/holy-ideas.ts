import type { HolyIdea, TypeNumber } from '../../types';

export const holyIdeas: HolyIdea[] = [
  {
    type: 1,
    name: 'Holy Perfection',
    liberatingTruth: 'Reality is already perfect as it is',
    description: `The recognition that existence itself is inherently perfect—not according to human
standards or ideals, but in its fundamental nature. Things are exactly as they need to be in this
moment, even as they change. This isn't passive acceptance of wrongdoing but a deeper seeing that
reality, including its imperfections, is whole.`,
    realization: `When Ones realize Holy Perfection, they stop trying to fix everything. They recognize
that their compulsive judgment was a veil obscuring the inherent rightness of being. They can still
work toward improvement without the desperate inner pressure. Serenity arises from seeing that
existence doesn't need their approval to be valid.`
  },
  {
    type: 2,
    name: 'Holy Will',
    liberatingTruth: 'Love flows freely without need for manipulation or earning',
    description: `Also called Holy Freedom. The recognition that true love and nurturing don't require
effort to extract or control—they flow naturally when the heart is open. There is a loving
intelligence in the universe that operates without ego intervention. We cannot make others love us
or force love to flow.`,
    realization: `When Twos realize Holy Will, they stop trying to earn or manipulate love. They
recognize that their worth doesn't depend on being needed. They can love freely without
expectation, and receive love without having to prove they deserve it. The desperate attempt to
control love relaxes into natural giving and receiving.`
  },
  {
    type: 3,
    name: 'Holy Hope',
    liberatingTruth: 'Being has inherent value independent of achievement',
    description: `Also called Holy Law. The recognition that existence itself is valuable—not for what it
produces or achieves, but simply because it is. Value is not earned through accomplishment but is
intrinsic to being. The cosmos operates according to laws that don't require our striving.`,
    realization: `When Threes realize Holy Hope, they stop chasing validation through achievement. They
recognize that they had value before any accomplishment and will have it regardless of success or
failure. The frantic performing relaxes into authentic presence. They can do without being defined
by doing.`
  },
  {
    type: 4,
    name: 'Holy Origin',
    liberatingTruth: 'Nothing essential is missing; you are complete as you are',
    description: `The recognition that one's fundamental nature is complete and whole—nothing has been
lost, nothing is missing. The sense of deficiency was a misperception. We all come from the same
source and carry that source within us. Identity isn't found through uniqueness but through
connection to origin.`,
    realization: `When Fours realize Holy Origin, the chronic sense of lack dissolves. They stop
searching for the missing piece because they recognize nothing was ever lost. Their uniqueness
becomes an expression of wholeness rather than a compensation for deficiency. Longing transforms
into gratitude for what is.`
  },
  {
    type: 5,
    name: 'Holy Omniscience',
    liberatingTruth: 'Abundance exists; knowledge and resources are unlimited',
    description: `Also called Holy Transparency. The recognition that reality is ultimately knowable and
that understanding flows naturally when the mind is open. Resources are not scarce but abundant.
One doesn't need to hoard knowledge or withdraw to conserve energy because participation in life
doesn't deplete.`,
    realization: `When Fives realize Holy Omniscience, they stop hoarding and withdrawing. They recognize
that engaging with life doesn't empty them—it fills them. Knowledge comes through participation,
not just observation. They can share freely, knowing that giving doesn't diminish them. The world
becomes abundant rather than demanding.`
  },
  {
    type: 6,
    name: 'Holy Faith',
    liberatingTruth: 'Inner guidance exists and can be trusted',
    description: `The recognition that there is a trustworthy inner knowing—not external authority but
internal guidance that can navigate uncertainty. The universe, despite appearances, operates
according to a benevolent intelligence. We can trust ourselves and the ground we stand on.`,
    realization: `When Sixes realize Holy Faith, the chronic anxiety dissolves. They stop looking outside
for security and trust their own perceptions. They recognize that most feared scenarios don't
materialize, and even if they do, inner resources exist to meet them. Doubt transforms into
grounded self-trust.`
  },
  {
    type: 7,
    name: 'Holy Wisdom',
    liberatingTruth: 'The present moment is sufficient; nothing needs to be added',
    description: `Also called Holy Work or Holy Plan. The recognition that fulfillment is not in the next
experience but in the depth of this moment. There is a natural unfolding that doesn't require our
constant planning. Wisdom comes from presence, not accumulation of experiences.`,
    realization: `When Sevens realize Holy Wisdom, the frantic seeking stops. They discover that depth is
more satisfying than breadth, that being present is more joyful than anticipating. They can stay
with difficult emotions rather than escaping. Completion replaces constant beginning. The joy they
sought was always here.`
  },
  {
    type: 8,
    name: 'Holy Truth',
    liberatingTruth: 'Vulnerability is strength; truth protects better than force',
    description: `The recognition that real power comes from truth and openness, not control and
domination. Vulnerability isn't weakness but courage. The universe operates according to truth that
doesn't require enforcement. Justice emerges naturally when we're aligned with what is.`,
    realization: `When Eights realize Holy Truth, they stop armoring against vulnerability. They
recognize that true strength includes softness, that protecting others doesn't require dominating
them. Their intensity becomes warmth rather than force. They can trust without requiring control,
love without possessing.`
  },
  {
    type: 9,
    name: 'Holy Love',
    liberatingTruth: 'Your presence matters; you are here to act and engage',
    description: `The recognition that one's being is loved and essential to the whole—not
dispensable or unimportant. Love calls us to show up, not merge and disappear. Our particular
presence is needed and valued. Engagement is love in action.`,
    realization: `When Nines realize Holy Love, they wake up to their own significance. They stop hiding
in merger and comfort. They recognize that their voice, their position, their action matters to the
whole. The sloth dissolves into meaningful engagement. They discover that showing up fully is how
love moves through them.`
  }
];

export const getHolyIdeaByType = (typeNumber: TypeNumber): HolyIdea | undefined => {
  return holyIdeas.find(hi => hi.type === typeNumber);
};

export const getLiberatingTruthByType = (typeNumber: TypeNumber): string | undefined => {
  return holyIdeas.find(hi => hi.type === typeNumber)?.liberatingTruth;
};
