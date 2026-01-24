import type { Fixation, TypeNumber } from '../../types';

export const fixations: Fixation[] = [
  {
    type: 1,
    name: 'Resentment',
    cognitiveDistortion: 'Judging reality against an internal standard of perfection',
    innerVoice: 'I must be perfect. Everything should be done right.',
    description: `Ones fixate on comparing reality to ideal standards, constantly noticing flaws and
imperfections. This cognitive pattern creates chronic inner tension between what is and what
"should" be. The mind becomes a constant judge, evaluating self and others against impossible
standards. This fixation drives both the relentless inner critic and the drive toward improvement,
but at the cost of acceptance and peace.`
  },
  {
    type: 2,
    name: 'Flattery',
    cognitiveDistortion: 'Repressing own needs while amplifying attunement to others\' needs',
    innerVoice: 'I must be needed. If I help enough, I will be loved.',
    description: `Twos fixate on gaining approval and love through meeting others' needs. This involves
both genuine empathy and a subtle manipulation—unconsciously giving to get. The mind constantly
scans for what others need and how to become indispensable. Own needs are repressed or expressed
indirectly. This fixation drives helpfulness but obscures authentic connection and self-care.`
  },
  {
    type: 3,
    name: 'Vanity',
    cognitiveDistortion: 'Believing self-worth equals achievement and image',
    innerVoice: 'I am my accomplishments. I must succeed to have value.',
    description: `Threes fixate on achievement and image as sources of worth. The cognitive pattern
involves constantly crafting and monitoring a successful persona while disconnecting from authentic
feelings that might interfere with performance. The mind becomes a marketing department, always
packaging and positioning. This fixation drives success but at the cost of authenticity.`
  },
  {
    type: 4,
    name: 'Melancholy',
    cognitiveDistortion: 'Focusing on what is missing, unavailable, or lost',
    innerVoice: 'Something essential is missing in me. I am fundamentally different.',
    description: `Fours fixate on what is absent rather than present—the lost ideal, the unattainable
beloved, the missing piece that would make them whole. This cognitive pattern creates chronic
longing and dissatisfaction. The mind romanticizes the past or future while devaluing the present.
This fixation drives depth and creativity but perpetuates a sense of deficiency.`
  },
  {
    type: 5,
    name: 'Stinginess',
    cognitiveDistortion: 'Withdrawing and hoarding resources (time, energy, knowledge)',
    innerVoice: 'Resources are scarce. I must conserve and not be depleted.',
    description: `Fives fixate on conserving energy and maintaining boundaries against a seemingly
demanding world. The cognitive pattern involves withdrawal, minimizing needs, and accumulating
knowledge as a substitute for direct engagement. The mind becomes a fortress of understanding,
observing from a safe distance. This fixation protects but isolates.`
  },
  {
    type: 6,
    name: 'Cowardice',
    cognitiveDistortion: 'Scanning for threats and questioning one\'s own perceptions',
    innerVoice: 'The world is dangerous. I cannot trust myself to handle it.',
    description: `Sixes fixate on anticipating danger and securing themselves against it. The cognitive
pattern involves worst-case thinking, vigilance, and either seeking authority or rebelling against
it. Self-doubt and questioning of perceptions are constant. This fixation may produce either
paralysis (phobic) or aggressive confrontation (counterphobic). It drives preparedness but
perpetuates anxiety.`
  },
  {
    type: 7,
    name: 'Planning',
    cognitiveDistortion: 'Escaping the present through anticipation of future pleasures',
    innerVoice: 'Pain must be avoided. Happiness is in the next experience.',
    description: `Sevens fixate on maintaining positive states through future-oriented planning and
reframing. The cognitive pattern involves constant option-generation, rationalization of desires,
and avoidance of limitation or darkness. The mind becomes an anticipation machine, always looking
ahead. This fixation drives enthusiasm but prevents depth and completion.`
  },
  {
    type: 8,
    name: 'Vengeance',
    cognitiveDistortion: 'Viewing the world through a lens of power and potential betrayal',
    innerVoice: 'I must be strong. Weakness will be exploited. Justice must be enforced.',
    description: `Eights fixate on power dynamics and potential threats to their autonomy. The cognitive
pattern involves asserting dominance, demanding honesty, and preparing to punish betrayal. The mind
divides the world into strong and weak, trustworthy and treacherous. This fixation drives
protection and leadership but prevents vulnerability and true intimacy.`
  },
  {
    type: 9,
    name: 'Indolence',
    cognitiveDistortion: 'Numbing out, avoiding priorities, and merging with others\' agendas',
    innerVoice: 'My presence doesn\'t really matter. It\'s easier to go along.',
    description: `Nines fixate on maintaining inner peace through avoidance, numbing, and merger. The
cognitive pattern involves forgetting self-priorities, seeing all perspectives equally, and
substituting inessential for essential activities. The mind diffuses attention to avoid
uncomfortable choices. This fixation maintains harmony but at the cost of genuine engagement.`
  }
];

export const getFixationByType = (typeNumber: TypeNumber): Fixation | undefined => {
  return fixations.find(f => f.type === typeNumber);
};

export const getInnerVoiceByType = (typeNumber: TypeNumber): string | undefined => {
  return fixations.find(f => f.type === typeNumber)?.innerVoice;
};
