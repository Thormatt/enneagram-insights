
import type { Misidentification } from '../../types';

export const misidentifications: Misidentification[] = [
  {
    type: 1,
    oftenConfusedWith: [3, 5, 6],
    keyDifferences: {
      3: [
        '1s want to be "right"; 3s want to be "successful".',
        '1s are driven by internal standards; 3s by external validation.',
        '1s suppress anger; 3s suppress feelings that slow them down.'
      ],
      5: [
        '1s are action-oriented and reforming; 5s are withdrawn and observing.',
        '1s focus on rules/ethics; 5s focus on logic/competence.',
        '1s engage to fix things; 5s withdraw to understand things.'
      ],
      6: [
        '1s are confident in their judgment; 6s doubt themselves.',
        '1s fear being "bad/corrupt"; 6s fear being unsafe/unsupported.',
        '1s have an internal authority; 6s look for external authority.'
      ]
    }
  },
  {
    type: 2,
    oftenConfusedWith: [7, 9, 1],
    keyDifferences: {
      7: [
        '2s focus on others; 7s focus on self/pleasure.',
        '2s help to be loved; 7s enjoy company for fun.',
        '2s can be intrusive; 7s respect freedom (theirs and yours).'
      ],
      9: [
        '2s move toward people actively; 9s are more passive/receptive.',
        '2s have a stronger sense of self-pride; 9s are self-effacing.',
        '2s help to get love; 9s go along to avoid conflict.'
      ],
      1: [
        '2s are emotional and personal; 1s are objective and principled.',
        '2s focus on relationships; 1s focus on rules/tasks.',
        '2s break rules for love; 1s follow rules for integrity.'
      ]
    }
  },
  {
    type: 3,
    oftenConfusedWith: [1, 7, 8],
    keyDifferences: {
      1: [
        '3s cut corners for results; 1s never compromise standards.',
        '3s are pragmatic chameleons; 1s are consistent and rigid.',
        '3s want admiration; 1s want to be correct.'
      ],
      7: [
        '3s finish what they start; 7s often don\'t.',
        '3s care about image/prestige; 7s care about fun/experience.',
        '3s are disciplined workaholics; 7s avoid boredom.'
      ],
      8: [
        '3s want to be admired; 8s want to be in control.',
        '3s smooth over conflict; 8s invite conflict.',
        '3s perform feelings; 8s deny vulnerability.'
      ]
    }
  },
  {
    type: 4,
    oftenConfusedWith: [9, 5, 2],
    keyDifferences: {
      9: [
        '4s dwell on negative emotions; 9s avoid them.',
        '4s highlight differences; 9s highlight similarities.',
        '4s are intense/dramatic; 9s are steady/easygoing.'
      ],
      5: [
        '4s are emotional/feeling-centered; 5s are mental/thinking-centered.',
        '4s withdraw to process feelings; 5s withdraw to process thoughts.',
        '4s want a rescuer; 5s want to be left alone.'
      ],
      2: [
        '4s are self-absorbed; 2s are other-absorbed.',
        '4s withdraw when hurt; 2s pursue when hurt.',
        '4s rescue themselves through depth; 2s rescue others.'
      ]
    }
  },
  {
    type: 5,
    oftenConfusedWith: [1, 4, 9],
    keyDifferences: {
      1: [
        '5s are curious observers; 1s are moral judges.',
        '5s live in the head; 1s live in the gut/action.',
        '5s accumulate knowledge; 1s try to fix the world.'
      ],
      4: [
        '5s detach from emotions; 4s immerse in them.',
        '5s are dry/analytical; 4s are wet/emotional.',
        '5s fear incompetence; 4s fear being ordinary/defective.'
      ],
      9: [
        '5s are intellectually intense; 9s are mentally diffuse.',
        '5s have sharp boundaries; 9s merge with others.',
        '5s investigate; 9s accommodate.'
      ]
    }
  },
  {
    type: 6,
    oftenConfusedWith: [1, 2, 8],
    keyDifferences: {
      1: [
        '6s follow rules out of fear; 1s out of principle.',
        '6s are indecisive; 1s are certain.',
        '6s ask "what if?"; 1s ask "what is right?".'
      ],
      2: [
        '6s serve for security/alliance; 2s for love/approval.',
        '6s are anxious/vigilant; 2s are warm/flattering.',
        '6s test people; 2s seduce people.'
      ],
      8: [
        '6s (counterphobic) fight from fear; 8s fight from anger/power.',
        '6s are reactive/anxious; 8s are solid/grounded.',
        '6s need allies; 8s are lone wolves.'
      ]
    }
  },
  {
    type: 7,
    oftenConfusedWith: [2, 3, 9],
    keyDifferences: {
      2: [
        '7s are self-referencing; 2s are other-referencing.',
        '7s help if it\'s fun; 2s help to be loved.',
        '7s move away from heavy emotions; 2s move toward people.'
      ],
      3: [
        '7s do it for the experience; 3s for the achievement.',
        '7s have many started projects; 3s have many finished ones.',
        '7s are scattered; 3s are focused.'
      ],
      9: [
        '7s are active/high-energy; 9s are passive/slower-paced.',
        '7s avoid pain through distraction; 9s through numbing.',
        '7s assert their desires; 9s go along with others.'
      ]
    }
  },
  {
    type: 8,
    oftenConfusedWith: [1, 3, 6],
    keyDifferences: {
      1: [
        '8s make their own rules; 1s follow universal rules.',
        '8s are lusty/indulgent; 1s are disciplined/restrained.',
        '8s want power; 1s want perfection.'
      ],
      3: [
        '8s don\'t care what you think; 3s care deeply about image.',
        '8s are raw/unpolished; 3s are polished/chameleons.',
        '8s lead through force; 3s through example/charm.'
      ],
      6: [
        '8s are self-assured; 6s are anxious (even when hiding it).',
        '8s trust their gut instantly; 6s second-guess.',
        '8s protect the weak; 6s seek protection/alliance.'
      ]
    }
  },
  {
    type: 9,
    oftenConfusedWith: [2, 4, 5],
    keyDifferences: {
      2: [
        '9s are passive helpers; 2s are active helpers.',
        '9s have difficulty knowing their needs; 2s suppress them.',
        '9s withdraw under stress; 2s get clingy/demanding.'
      ],
      4: [
        '9s numb feelings; 4s amplify them.',
        '9s are optimistic/easygoing; 4s are melancholic/intense.',
        '9s feel like "nobody special"; 4s feel "different/special".'
      ],
      5: [
        '9s withdraw into comfort/numbing; 5s into mind/analysis.',
        '9s are soft/diffuse; 5s are sharp/focused.',
        '9s relate through merging; 5s through detaching.'
      ]
    }
  }
];

export const getMisidentification = (type: number): Misidentification | undefined => {
  return misidentifications.find(m => m.type === type);
};
