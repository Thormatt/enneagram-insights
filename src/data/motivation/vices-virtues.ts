import type { ViceVirtue, TypeNumber } from '../../types';

export const vicesVirtues: ViceVirtue[] = [
  {
    type: 1,
    vice: 'Anger',
    viceDescription: `Also called Resentment. Ones experience chronic low-grade anger that seeps out as
criticism, irritation, and moral indignation. This anger comes from perceiving the gap between how
things are and how they "should" be. Because anger is seen as a "bad" emotion, Ones often repress
it, leading to tension and self-righteousness.`,
    virtue: 'Serenity',
    virtueDescription: `When healthy, Ones develop serenity—accepting reality as it is without the need
to fix everything. They become patient with imperfection, including their own. This allows their
natural wisdom and discernment to flow without rigidity. They move from "I must make things right"
to "I can accept things and still work toward improvement."`
  },
  {
    type: 2,
    vice: 'Pride',
    viceDescription: `Twos have a subtle form of pride that says "I know what others need better than
they do" and "I am indispensable." This pride inflates their sense of being helpful while hiding
their own neediness. It manifests as overgiving, intrusiveness, and an inability to admit their own
needs or accept help.`,
    virtue: 'Humility',
    virtueDescription: `When healthy, Twos develop genuine humility—acknowledging that they have needs
too, and that love doesn't have to be earned through helpfulness. They can receive as well as give,
and recognize that others are capable of caring for themselves. Their giving becomes unconditional
rather than transactional.`
  },
  {
    type: 3,
    vice: 'Deceit',
    viceDescription: `Also called Vanity. Threes deceive themselves and others by identifying completely
with their image of success. They shape-shift to become what will be admired, losing touch with
their authentic feelings and needs. This self-deception isn't malicious but comes from believing
"I am my achievements and image."`,
    virtue: 'Authenticity',
    virtueDescription: `Also called Truthfulness or Veracity. When healthy, Threes develop authenticity—
showing up as they truly are rather than as what will impress. They connect with genuine feelings,
acknowledge failures without shame, and value being over doing. Success becomes an expression of
who they are rather than a substitute for identity.`
  },
  {
    type: 4,
    vice: 'Envy',
    viceDescription: `Fours experience chronic envy—the painful feeling that others have something
essential that they lack. This manifests as longing, comparison, and a focus on what's missing.
Envy keeps them stuck in a cycle of wanting what they don't have while devaluing what they do
have. It reinforces the belief "I am fundamentally flawed."`,
    virtue: 'Equanimity',
    virtueDescription: `Also called Emotional Balance. When healthy, Fours develop equanimity—a stable
sense of inner completeness regardless of external circumstances. They stop the endless pursuit of
the missing piece and recognize that nothing essential is lacking. Emotions flow through without
overwhelming or defining identity.`
  },
  {
    type: 5,
    vice: 'Avarice',
    viceDescription: `Fives experience avarice not primarily with money but with time, energy, and
personal resources. They hoard knowledge, withdraw to conserve energy, and minimize needs. This
comes from a deep sense that the world demands too much and offers too little, that resources
(internal and external) are scarce.`,
    virtue: 'Non-Attachment',
    virtueDescription: `Also called Detachment or Generosity. When healthy, Fives develop non-attachment—
recognizing that giving doesn't deplete them and that abundance exists. They share freely, engage
with life directly rather than observing from distance, and trust that they have enough resources
to handle what life brings.`
  },
  {
    type: 6,
    vice: 'Fear',
    viceDescription: `Also called Anxiety or Cowardice. Sixes live with chronic anxiety and worst-case
thinking. This fear may manifest as paralysis or as counterphobic aggression (fighting the fear).
Either way, the inner experience is one of scanning for threats, doubting self and others, and
feeling unsafe in an uncertain world.`,
    virtue: 'Courage',
    virtueDescription: `When healthy, Sixes develop courage—not the absence of fear but acting in spite
of it, trusting themselves. They develop faith in their own inner guidance, stop looking outside
for security, and recognize that most feared scenarios don't materialize. They become genuinely
brave, grounded in self-trust.`
  },
  {
    type: 7,
    vice: 'Gluttony',
    viceDescription: `Sevens experience gluttony not just for food but for experiences, options, ideas,
and stimulation. This insatiable appetite drives constant seeking of the next exciting thing while
avoiding discomfort. It manifests as scattered attention, excessive planning, and difficulty
staying present with difficult feelings.`,
    virtue: 'Sobriety',
    virtueDescription: `When healthy, Sevens develop sobriety—the ability to be present with whatever
arises, including pain and limitation. They find depth in simplicity, satisfaction in what is, and
can complete experiences rather than always seeking new ones. They discover that presence brings
more joy than constant stimulation.`
  },
  {
    type: 8,
    vice: 'Lust',
    viceDescription: `Eights experience lust not just sexually but as intensity and excess in all areas—
for power, impact, and life itself. They push against limits, consume experiences fully, and
dominate space. This comes from a drive to avoid vulnerability and feel alive through force and
intensity.`,
    virtue: 'Innocence',
    virtueDescription: `When healthy, Eights develop innocence—a return to openheartedness without
defenses. They can be vulnerable without fear, trust without suspicion, and meet life with wonder
rather than aggression. Their natural power becomes protective and nurturing rather than
dominating. Strength includes tenderness.`
  },
  {
    type: 9,
    vice: 'Sloth',
    viceDescription: `Also called Acedia or Self-Forgetting. Nines experience a particular kind of
laziness—not physical but spiritual. They "go to sleep" to their own priorities, desires, and
presence. This manifests as numbing out, merging with others, avoiding conflict, and substituting
inessential activities for essential ones.`,
    virtue: 'Right Action',
    virtueDescription: `When healthy, Nines develop Right Action—claiming their presence and engaging
with life directly. They show up fully, express their own positions, and take meaningful action on
their own behalf. They realize their presence matters and stop hiding from life through merger and
numbing.`
  }
];

export const getViceVirtueByType = (typeNumber: TypeNumber): ViceVirtue | undefined => {
  return vicesVirtues.find(vv => vv.type === typeNumber);
};

export const getViceByType = (typeNumber: TypeNumber): string | undefined => {
  return vicesVirtues.find(vv => vv.type === typeNumber)?.vice;
};

export const getVirtueByType = (typeNumber: TypeNumber): string | undefined => {
  return vicesVirtues.find(vv => vv.type === typeNumber)?.virtue;
};
