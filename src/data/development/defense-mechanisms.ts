import type { DefenseMechanism, TypeNumber } from '../../types';

export const defenseMechanisms: DefenseMechanism[] = [
  {
    type: 1,
    name: 'Reaction Formation',
    description: `Ones transform unacceptable impulses (especially anger and "bad" desires) into their
opposite. If they feel angry, they become extra nice. If they want to be lazy, they become
compulsively hardworking. This allows them to maintain their self-image as good while denying
unacceptable parts of themselves.`,
    example: `A One who feels intense rage at a coworker becomes overly polite and helpful to them,
while unconsciously seething inside. Or a One who desires luxury becomes aggressively frugal
and self-denying.`,
    inAction: `Watch for excessive virtue that seems forced, or righteousness that has an edge of
suppressed energy. When Ones are being "extra good," ask what impulse might be underneath.`
  },
  {
    type: 2,
    name: 'Repression',
    description: `Twos repress their own needs, feelings, and self-interest, pushing them out of
consciousness. By not being aware of their needs, they can maintain the self-image of being
selfless givers who only want to help. Their needs leak out indirectly through expectation,
resentment, or physical symptoms.`,
    example: `A Two who is exhausted and needs rest continues helping others, genuinely unaware of
their own fatigue. Later they become irritable or sick, still unable to recognize the
unmet need that was causing the symptoms.`,
    inAction: `Notice when Twos seem unaware of obvious needs or dismiss any focus on themselves.
Ask directly: "What do YOU need right now?" and observe the discomfort this creates.`
  },
  {
    type: 3,
    name: 'Identification',
    description: `Threes identify with their role, achievements, and image so completely that they lose
touch with their authentic self. They become what they do rather than who they are. By merging
with a successful persona, they avoid the vulnerability of their actual feelings and needs.`,
    example: `A Three who is a successful executive cannot separate themselves from that identity.
Without the job, they wouldn't know who they are. They identify so completely with the role
that authentic emotions are suppressed in favor of what the role requires.`,
    inAction: `Notice when Threes describe themselves entirely in terms of achievements or roles.
Ask about experiences outside of accomplishment and observe the difficulty in responding.`
  },
  {
    type: 4,
    name: 'Introjection',
    description: `Fours internalize external experiences and criticisms, making them part of their
identity. They absorb others' negativity and take it personally. This allows them to maintain
their self-image as fundamentally flawed while giving a sense of control—if the problem is
within, maybe it can be fixed through self-work.`,
    example: `A Four whose relationship ends becomes convinced they are unlovable, taking in the
rejection as proof of their inherent defect rather than understanding it as a situation
involving two people with different needs.`,
    inAction: `Notice when Fours personalize external events or take on others' judgments as truth
about their essential nature. Ask whose voice they're hearing when they criticize themselves.`
  },
  {
    type: 5,
    name: 'Isolation',
    description: `Fives separate thinking from feeling, and withdraw emotionally while analyzing
objectively. They isolate themselves physically and psychologically to conserve energy and
maintain a safe distance. By disconnecting emotion from thought, they can observe without
being overwhelmed.`,
    example: `A Five receives devastating news and begins calmly analyzing the implications, not
feeling the emotional impact until much later (if ever). They retreat to their room to
"process" but actually just think about it intellectually.`,
    inAction: `Notice when Fives are intellectualizing emotional situations or withdrawing when
engagement is needed. Ask what they're feeling (not thinking) and observe the difficulty.`
  },
  {
    type: 6,
    name: 'Projection',
    description: `Sixes attribute their own unacceptable impulses, feelings, or thoughts to others.
Especially their anxiety, hostility, and distrust are projected outward. By seeing danger and
hostility in others, they can react to it without owning it. This maintains hyper-vigilance
but at the cost of accurate perception.`,
    example: `A Six who feels hostile toward their boss becomes convinced the boss is out to get
them. They project their own aggression outward and then defend against the threat they've
created. Or they project their own capability and trust it in authority instead of
themselves.`,
    inAction: `Notice when Sixes are very certain about others' negative intentions. Ask for
evidence and observe whether the certainty is based in projection or perception.`
  },
  {
    type: 7,
    name: 'Rationalization',
    description: `Sevens reframe negative experiences positively and justify pursuit of pleasure as
reasonable. They explain away pain, limitation, and commitment with logical-sounding reasons.
By reframing, they can avoid confronting difficult emotions and maintain their positive
outlook.`,
    example: `A Seven who commits to a project but then wants to leave explains that they're
actually doing everyone a favor by going—their energy wasn't right for it, they'll be more
helpful elsewhere, the project needs fresh blood. The pain of confinement is rationalized
into positive choice.`,
    inAction: `Notice when Sevens are explaining away commitments or finding silver linings that
seem too convenient. Ask what they would feel if they couldn't reframe it positively.`
  },
  {
    type: 8,
    name: 'Denial',
    description: `Eights refuse to acknowledge weakness, vulnerability, or painful feelings. They deny
that anything hurts or that they need others. By denying vulnerability, they can maintain
their self-image as strong and invulnerable. This protects them from perceived exploitation
but at the cost of intimacy.`,
    example: `An Eight who is deeply hurt by betrayal acts as if nothing happened, or converts the
pain immediately to anger. They deny being affected: "I don't care what they do." Meanwhile
the hurt drives their behavior without being acknowledged.`,
    inAction: `Notice when Eights dismiss hurt with "it doesn't bother me" or convert all emotions
to anger. Ask gently about the feeling underneath and observe the resistance.`
  },
  {
    type: 9,
    name: 'Narcotization',
    description: `Nines numb themselves through routine, comfort, and merging to avoid priorities and
conflict. They narcotize with food, TV, tasks, or other people's agendas—anything that keeps
them from having to show up. By numbing out, they maintain peace but lose themselves.`,
    example: `A Nine facing an important decision about their career spends the evening binge-
watching TV, then can't understand why they feel vaguely dissatisfied. The numbing prevents
them from feeling the tension that would motivate action.`,
    inAction: `Notice when Nines are very busy with unimportant things while avoiding important
ones. Ask about their priorities and observe the subtle deflection or going-to-sleep.`
  }
];

export const getDefenseMechanism = (typeNumber: TypeNumber): DefenseMechanism | undefined => {
  return defenseMechanisms.find(dm => dm.type === typeNumber);
};

export const getDefenseMechanismName = (typeNumber: TypeNumber): string | undefined => {
  return defenseMechanisms.find(dm => dm.type === typeNumber)?.name;
};
