import type { DisintegrationPath, TypeNumber } from '../../types';

export const disintegrationPaths: DisintegrationPath[] = [
  {
    type: 1,
    movesTo: 4,
    exhibits: [
      'Melancholy and self-pity',
      'Feeling misunderstood',
      'Emotional volatility',
      'Envy of others\' freedom',
      'Withdrawal and brooding'
    ],
    description: `Under stress, Ones become like unhealthy Fours. Their usual self-control breaks down
into emotional volatility. They feel misunderstood, envious of others who seem free from their
burden of responsibility. Self-pity replaces self-discipline. They may become withdrawn, moody,
and dramatically lament how hard they work while others don't appreciate them.`,
    warningSigns: [
      'Feeling increasingly resentful and unappreciated',
      'Comparing yourself unfavorably to others',
      'Becoming dramatically emotional about injustice',
      'Withdrawing from responsibilities',
      'Indulging in self-pity'
    ]
  },
  {
    type: 2,
    movesTo: 8,
    exhibits: [
      'Aggression and demanding behavior',
      'Direct confrontation',
      'Anger and resentment',
      'Controlling behavior',
      'Blaming others for not reciprocating'
    ],
    description: `Under stress, Twos become like unhealthy Eights. Their hidden needs erupt as aggressive
demands. They become controlling, confrontational, and openly angry at those who don't appreciate
their sacrifices. The pride that kept needs hidden flips into direct assertion: "After all I've
done for you!" They may become dominating and punishing.`,
    warningSigns: [
      'Keeping score of what you\'ve given',
      'Feeling increasingly resentful',
      'Making demands instead of requests',
      'Becoming controlling in relationships',
      'Expressing anger at being unappreciated'
    ]
  },
  {
    type: 3,
    movesTo: 9,
    exhibits: [
      'Disengagement and apathy',
      'Numbing out',
      'Loss of motivation',
      'Passive-aggressive behavior',
      'Going through the motions'
    ],
    description: `Under stress, Threes become like unhealthy Nines. Their drive evaporates into numbing
disengagement. They lose touch with goals, go through the motions, and become strangely passive.
Achievement feels pointless. They may zone out with distractions, avoid decisions, and become
stubbornly inert. The busy producer becomes the checked-out non-participant.`,
    warningSigns: [
      'Losing interest in goals that used to motivate',
      'Feeling like nothing matters',
      'Numbing out with distractions',
      'Avoiding decisions and commitments',
      'Feeling disconnected from purpose'
    ]
  },
  {
    type: 4,
    movesTo: 2,
    exhibits: [
      'Clingy and dependent behavior',
      'Over-involvement in others\' lives',
      'Manipulation through guilt',
      'Martyrdom',
      'Emotional coercion'
    ],
    description: `Under stress, Fours become like unhealthy Twos. Their independence crumbles into
desperate dependency. They become clingy, intrusive, and emotionally demanding. They may try to
extract love through guilt or martyrdom. The withdrawn individualist becomes the suffocating
over-giver who won't leave you alone. Their needs become demands.`,
    warningSigns: [
      'Becoming obsessively focused on one relationship',
      'Feeling desperate for connection',
      'Using guilt to get attention',
      'Over-giving with strings attached',
      'Becoming intrusive or possessive'
    ]
  },
  {
    type: 5,
    movesTo: 7,
    exhibits: [
      'Scattered and escapist behavior',
      'Impulsive actions',
      'Hyperactivity and excess',
      'Losing intellectual focus',
      'Gluttony for distraction'
    ],
    description: `Under stress, Fives become like unhealthy Sevens. Their focused analysis scatters into
frantic distraction. They may become impulsive, seeking stimulation instead of depth. Their usual
detachment flips into anxious hyperactivity. They escape through excess—binge-watching,
compulsive consumption, anything to avoid the fear they usually intellectualize.`,
    warningSigns: [
      'Difficulty focusing on one thing',
      'Seeking constant distraction',
      'Making impulsive decisions',
      'Feeling anxious and scattered',
      'Avoiding depth for breadth'
    ]
  },
  {
    type: 6,
    movesTo: 3,
    exhibits: [
      'Competitive and image-focused behavior',
      'Arrogance and dismissiveness',
      'Overwork to prove worth',
      'Dismissing others to feel secure',
      'Posturing and inauthenticity'
    ],
    description: `Under stress, Sixes become like unhealthy Threes. Their loyalty and team-orientation
flip into competitive self-promotion. They become arrogant, dismissive, and focused on appearing
successful. They may work frantically to prove their worth, becoming superficial and inauthentic.
The anxious questioner becomes the defensive performer.`,
    warningSigns: [
      'Becoming competitive and comparing yourself to others',
      'Overworking to prove competence',
      'Dismissing others\' opinions',
      'Focusing on image over substance',
      'Feeling like you must succeed to be safe'
    ]
  },
  {
    type: 7,
    movesTo: 1,
    exhibits: [
      'Critical and perfectionist behavior',
      'Anger and irritability',
      'Rigid thinking',
      'Self-criticism',
      'Obsessive focus on what\'s wrong'
    ],
    description: `Under stress, Sevens become like unhealthy Ones. Their optimism sours into criticism
and anger. They become rigid, perfectionistic, and focused on what's wrong instead of what's
possible. Their usual flexibility hardens into dogmatic positions. The playful enthusiast becomes
the irritable critic. Fun gives way to frustrated fault-finding.`,
    warningSigns: [
      'Becoming increasingly critical of self and others',
      'Feeling angry and irritable',
      'Obsessing over imperfections',
      'Losing flexibility and playfulness',
      'Rigid insistence on being right'
    ]
  },
  {
    type: 8,
    movesTo: 5,
    exhibits: [
      'Withdrawal and secretiveness',
      'Paranoid thinking',
      'Hoarding resources',
      'Isolation and detachment',
      'Cynical observation'
    ],
    description: `Under stress, Eights become like unhealthy Fives. Their expansive confidence contracts
into suspicious withdrawal. They become secretive, paranoid, and isolating. They hoard resources
and information, trusting no one. The powerful commander becomes the hidden schemer, observing
from the shadows and planning revenge. Engagement becomes detachment.`,
    warningSigns: [
      'Withdrawing from relationships',
      'Becoming secretive about plans',
      'Feeling paranoid about others\' motives',
      'Hoarding information or resources',
      'Isolating to conserve power'
    ]
  },
  {
    type: 9,
    movesTo: 6,
    exhibits: [
      'Anxiety and suspicion',
      'Worst-case thinking',
      'Passive-aggressive resistance',
      'Worry and indecision',
      'Seeking external support frantically'
    ],
    description: `Under stress, Nines become like unhealthy Sixes. Their peaceful acceptance curdles into
anxiety and suspicion. They become worried, indecisive, and frantically seek reassurance. Their
easy-going nature becomes defensive and reactive. The calm acceptor becomes the worried doubter,
seeing threats everywhere and unable to find inner peace.`,
    warningSigns: [
      'Feeling increasingly anxious and worried',
      'Seeking constant reassurance',
      'Becoming suspicious of others\' motives',
      'Difficulty making any decisions',
      'Passive-aggressive resistance'
    ]
  }
];

export const getDisintegrationPath = (typeNumber: TypeNumber): DisintegrationPath | undefined => {
  return disintegrationPaths.find(dp => dp.type === typeNumber);
};

export const getStressTarget = (typeNumber: TypeNumber): TypeNumber | undefined => {
  return disintegrationPaths.find(dp => dp.type === typeNumber)?.movesTo;
};

export const disintegrationMap: Record<TypeNumber, TypeNumber> = {
  1: 4,
  2: 8,
  3: 9,
  4: 2,
  5: 7,
  6: 3,
  7: 1,
  8: 5,
  9: 6
};
