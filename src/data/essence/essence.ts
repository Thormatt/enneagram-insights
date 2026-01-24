import type { TypeNumber } from '../../types';

export interface EssenceQuality {
  type: TypeNumber;
  essenceQuality: string;
  essenceDescription: string;
  beforeConditioning: string;
  howYouForgot: string;
  returnPath: string;
  essenceContact: string;
  allTypesIntegration: {
    type: TypeNumber;
    quality: string;
    practice: string;
  }[];
}

export const essenceQualities: EssenceQuality[] = [
  {
    type: 1,
    essenceQuality: 'Serenity & Wholeness',
    essenceDescription: `Your essence is already perfect. Before the world told you that you needed to improve, fix, and correct, you simply were—complete, serene, at peace with existence. The relentless inner critic is not who you are; it's a pattern you developed to survive in a world that seemed imperfect and unsafe.`,
    beforeConditioning: `As a child, you naturally embodied serenity and acceptance. You didn't judge reality—you participated in it. You could play freely without needing everything to be "right." Your essential nature was (and is) already whole, already perfect in its being.`,
    howYouForgot: `Somewhere along the way, you received the message that the world was wrong and needed your correction. Perhaps you were criticized or made to feel that your natural impulses were "bad." You learned to suppress anger, to channel it into righteous improvement, to earn love through being good. The critic inside you became your constant companion—a survival strategy that promised safety through perfection.`,
    returnPath: `The path back to essence isn't about becoming perfect—it's about recognizing that you already are. When you can hold your anger with compassion instead of repression, when you can say "good enough" and mean it, when you can accept yourself and reality as it is right now—you're touching essence. Serenity arises not from finally getting everything right, but from releasing the need to.`,
    essenceContact: `You're in contact with essence when: you feel deep inner peace regardless of external imperfection, you can laugh at your own mistakes, you experience "rightness" in simply being rather than doing, you feel spacious acceptance rather than tight judgment, you act from clarity rather than compulsion.`,
    allTypesIntegration: [
      { type: 2, quality: 'Genuine warmth', practice: 'Give help without any expectation of gratitude' },
      { type: 3, quality: 'Effective action', practice: 'Take action without needing it to be perfect first' },
      { type: 4, quality: 'Emotional depth', practice: 'Allow yourself to feel fully, even messy emotions' },
      { type: 5, quality: 'Detached observation', practice: 'Step back and observe without immediately judging' },
      { type: 6, quality: 'Loyal commitment', practice: 'Trust your community even when they disappoint you' },
      { type: 7, quality: 'Joyful spontaneity', practice: 'Do something impractical just for the joy of it' },
      { type: 8, quality: 'Direct power', practice: 'Express anger directly rather than through resentment' },
      { type: 9, quality: 'Peaceful acceptance', practice: 'Let go of trying to fix something and just be with it' }
    ]
  },
  {
    type: 2,
    essenceQuality: 'Unconditional Love & Freedom',
    essenceDescription: `Your essence is love itself—not the love that gives to get, but the love that flows freely without agenda. Before you learned to earn love through helping others, you simply were loved, and you were love. The compulsion to be needed is not who you are; it's a pattern that developed when you forgot your own inherent worth.`,
    beforeConditioning: `As a child, you naturally embodied open-hearted love without strategy. You could receive as freely as you gave. You didn't need to be needed—you simply were, and that was enough. Your essential nature radiates warmth without depletion because it flows from an infinite source.`,
    howYouForgot: `Somewhere along the way, you received the message that love must be earned, that you're only valuable when useful to others. Perhaps your needs were overlooked unless you were caring for someone. You learned to find yourself through others' eyes, to feel significant only when indispensable. The helper became your identity—a strategy that promised love in exchange for service.`,
    returnPath: `The path back to essence isn't about becoming more loving—it's about discovering that you ARE love, and don't need to do anything to deserve it. When you can receive without guilt, when you can acknowledge your own needs without shame, when you can love without any expectation of return—you're touching essence. True love flows when you stop trying to control its direction.`,
    essenceContact: `You're in contact with essence when: you feel worthy without doing anything for anyone, you receive love and care without needing to reciprocate immediately, you can say "no" with love, you feel your own needs as valid and important, you give from overflow rather than depletion.`,
    allTypesIntegration: [
      { type: 1, quality: 'Principled boundaries', practice: 'Say no to a request that doesn\'t serve you' },
      { type: 3, quality: 'Self-focus', practice: 'Pursue your own goal without explaining how it helps others' },
      { type: 4, quality: 'Emotional authenticity', practice: 'Express what you actually feel, not what others want' },
      { type: 5, quality: 'Personal space', practice: 'Take time alone without guilt or explanation' },
      { type: 6, quality: 'Questioning', practice: 'Question whether someone really needs you or just prefers you' },
      { type: 7, quality: 'Self-fulfillment', practice: 'Do something purely for your own enjoyment' },
      { type: 8, quality: 'Direct power', practice: 'Assert your needs directly without softening them' },
      { type: 9, quality: 'Self-priority', practice: 'Put your agenda first without feeling selfish' }
    ]
  },
  {
    type: 3,
    essenceQuality: 'Authentic Value & Being',
    essenceDescription: `Your essence has inherent value—not earned through achievement, but simply given in your existence. Before the world taught you that worth comes from success, you simply were, and that being was valuable. The driven performer is not who you are; it's a pattern that emerged when you forgot that you matter apart from what you accomplish.`,
    beforeConditioning: `As a child, you naturally embodied authentic self-expression without concern for how it looked or whether it succeeded. You could fail freely and still feel okay. You didn't need admiration—your being was its own reward. Your essential nature shines with value that needs no external confirmation.`,
    howYouForgot: `Somewhere along the way, you received the message that you're valuable for what you achieve, not who you are. Perhaps love and attention came with success and vanished with failure. You learned to shape yourself to whatever image gained approval, to perform rather than be. Achievement became your identity—a strategy that promised love through winning.`,
    returnPath: `The path back to essence isn't about achieving more—it's about discovering that you had value before any accomplishment. When you can fail publicly and still feel whole, when you can be seen struggling without shame, when you can rest in being rather than doing—you're touching essence. Your value was never something to earn; it was always the ground you stood on.`,
    essenceContact: `You're in contact with essence when: you feel valuable while doing absolutely nothing, you can share a failure without spinning it as a learning experience, you don't know what people think of you and feel okay with that, you act from truth rather than image, you experience the quiet joy of simply being.`,
    allTypesIntegration: [
      { type: 1, quality: 'Integrity over image', practice: 'Do the right thing even when no one will know' },
      { type: 2, quality: 'Genuine connection', practice: 'Connect with someone without impressing them' },
      { type: 4, quality: 'Authentic feeling', practice: 'Let yourself feel sad or lost without fixing it' },
      { type: 5, quality: 'Inner life', practice: 'Spend time in reflection without producing anything' },
      { type: 6, quality: 'Trust', practice: 'Trust someone else to succeed without your involvement' },
      { type: 7, quality: 'Unproductive joy', practice: 'Do something enjoyable that accomplishes nothing' },
      { type: 8, quality: 'Real vulnerability', practice: 'Admit weakness without reframing it as strength' },
      { type: 9, quality: 'Non-striving', practice: 'Spend a day without any goals or achievements' }
    ]
  },
  {
    type: 4,
    essenceQuality: 'Wholeness & Equanimity',
    essenceDescription: `Your essence is complete—nothing is missing, nothing was ever lost. Before the world convinced you that you were somehow deficient, you were whole. The longing romantic is not who you are; it's a pattern that developed when you forgot that you already have everything you need to be yourself.`,
    beforeConditioning: `As a child, you naturally embodied equanimity and presence. You could feel deeply without being consumed by feeling. You didn't need to be special—you simply were yourself, and that was extraordinary. Your essential nature is whole, connected to the source of all being, lacking nothing.`,
    howYouForgot: `Somewhere along the way, you received the message that something was wrong with you, that you were missing something others had. Perhaps you felt abandoned or different in ways that seemed like defects. You learned to seek yourself in intensity and uniqueness, to long for what might complete you. The wounded romantic became your identity—a strategy that promised to find the missing piece.`,
    returnPath: `The path back to essence isn't about finding what's missing—it's about recognizing that nothing ever was. When you can feel ordinary and okay with it, when you can experience contentment without calling it boring, when you can be present rather than longing—you're touching essence. The wound you've been nursing isn't a door to your depth; releasing it is.`,
    essenceContact: `You're in contact with essence when: you feel complete exactly as you are right now, you experience joy in simple ordinary moments, you feel connected to others without needing to be different from them, you can be in the present without longing for something else, your feelings flow through you without defining you.`,
    allTypesIntegration: [
      { type: 1, quality: 'Practical action', practice: 'Complete a mundane task without needing it to be meaningful' },
      { type: 2, quality: 'Others-focus', practice: 'Focus on someone else\'s story without relating it to yourself' },
      { type: 3, quality: 'Forward momentum', practice: 'Take action on a goal without waiting to feel inspired' },
      { type: 5, quality: 'Detachment', practice: 'Observe your feelings without identifying with them' },
      { type: 6, quality: 'Practical loyalty', practice: 'Show up consistently even when you don\'t feel connected' },
      { type: 7, quality: 'Lightness', practice: 'Find humor and play in your situation' },
      { type: 8, quality: 'Direct power', practice: 'Take charge of something without processing it first' },
      { type: 9, quality: 'Contentment', practice: 'Practice gratitude for what is, rather than longing for what isn\'t' }
    ]
  },
  {
    type: 5,
    essenceQuality: 'Engaged Omniscience & Abundance',
    essenceDescription: `Your essence knows that the universe is abundant, that engagement fills rather than depletes. Before the world seemed overwhelming and intrusive, you participated freely in life. The withdrawn observer is not who you are; it's a pattern that developed when you felt that the world demanded more than you had to give.`,
    beforeConditioning: `As a child, you naturally engaged with life without fear of depletion. You could share freely, be present fully, participate without calculating the cost. You didn't need to hoard knowledge or retreat—life itself sustained you. Your essential nature is connected to infinite knowing that comes through participation, not isolation.`,
    howYouForgot: `Somewhere along the way, you received the message that the world was overwhelming, that others would drain you, that you needed to withdraw to survive. Perhaps your boundaries were violated or you felt intruded upon. You learned to conserve yourself through detachment, to find safety in observation rather than participation. The isolated thinker became your identity—a strategy that promised survival through withdrawal.`,
    returnPath: `The path back to essence isn't about knowing more—it's about engaging before you feel ready. When you can share without fear of depletion, when you can be present in your body and emotions, when you can participate in life without exhaustion—you're touching essence. Knowledge comes through living, not just observing. The abundance you seek is found by giving, not conserving.`,
    essenceContact: `You're in contact with essence when: you feel energized rather than drained by connection, you can engage without knowing everything first, you feel abundance rather than scarcity, you experience knowledge flowing through participation, you feel fully present in your body and the world.`,
    allTypesIntegration: [
      { type: 1, quality: 'Engaged improvement', practice: 'Fix something in the world rather than just understanding it' },
      { type: 2, quality: 'Active generosity', practice: 'Give your time and presence, not just your knowledge' },
      { type: 3, quality: 'Visible action', practice: 'Put yourself out there before feeling ready' },
      { type: 4, quality: 'Emotional depth', practice: 'Feel your emotions fully rather than analyzing them' },
      { type: 6, quality: 'Trust', practice: 'Trust others and commit without having all the information' },
      { type: 7, quality: 'Spontaneous engagement', practice: 'Say yes to an invitation without planning first' },
      { type: 8, quality: 'Direct impact', practice: 'Take powerful action in the world' },
      { type: 9, quality: 'Relaxed presence', practice: 'Be present with others without agenda or analysis' }
    ]
  },
  {
    type: 6,
    essenceQuality: 'Courageous Faith & Self-Trust',
    essenceDescription: `Your essence is grounded in an unshakeable inner knowing—a faith that doesn't need external validation. Before the world seemed dangerous and untrustworthy, you moved through it with natural confidence. The anxious loyalist is not who you are; it's a pattern that developed when you forgot that you can trust yourself and life.`,
    beforeConditioning: `As a child, you naturally embodied courage and self-trust. You could act without endless contingency planning, believe without constant doubt, commit without fear of betrayal. You didn't need external authority—your own inner guidance was sufficient. Your essential nature is grounded in faith that transcends circumstances.`,
    howYouForgot: `Somewhere along the way, you received the message that the world was dangerous and you couldn't trust your own judgment. Perhaps authority figures were unreliable, or you were punished for trusting wrongly. You learned to scan for danger, to question everything, to seek external validation for every decision. The vigilant doubter became your identity—a strategy that promised safety through suspicion.`,
    returnPath: `The path back to essence isn't about finding something trustworthy outside yourself—it's about discovering the authority within. When you can act without certainty, when you can trust your first instinct, when you can face fear without being controlled by it—you're touching essence. The security you seek isn't found in guarantees; it's in the courage to move forward anyway.`,
    essenceContact: `You're in contact with essence when: you feel grounded and secure within yourself, you can make decisions without seeking validation, you trust your own perceptions, you feel courage rather than anxiety facing uncertainty, you experience inner peace regardless of external circumstances.`,
    allTypesIntegration: [
      { type: 1, quality: 'Inner authority', practice: 'Decide what\'s right without seeking consensus' },
      { type: 2, quality: 'Trust in connection', practice: 'Trust that you\'re loved without testing it' },
      { type: 3, quality: 'Confident action', practice: 'Act on your vision without waiting for approval' },
      { type: 4, quality: 'Emotional trust', practice: 'Trust your feelings as valid data' },
      { type: 5, quality: 'Independent knowing', practice: 'Trust what you know without needing more research' },
      { type: 7, quality: 'Optimistic leaping', practice: 'Focus on what could go right, then leap' },
      { type: 8, quality: 'Direct confrontation', practice: 'Face fear directly rather than preparing for it' },
      { type: 9, quality: 'Peaceful trust', practice: 'Relax into uncertainty, trusting it will work out' }
    ]
  },
  {
    type: 7,
    essenceQuality: 'Present Joy & Sobriety',
    essenceDescription: `Your essence is joy—not the scattered excitement of the next thing, but the deep satisfaction of this moment. Before the world seemed limiting and painful, you could be fully present. The scattered enthusiast is not who you are; it's a pattern that developed when you learned to escape the present through anticipation.`,
    beforeConditioning: `As a child, you naturally embodied present-moment joy without needing to escape or reframe. You could feel pain and sadness without fleeing, could commit to one thing without fearing limitation. You didn't need endless options—presence itself was fulfilling. Your essential nature is grounded in a joy that doesn't depend on circumstances.`,
    howYouForgot: `Somewhere along the way, you received the message that the present moment wasn't enough, that pain must be avoided at all costs. Perhaps you experienced loss or limitation that felt unbearable. You learned to stay in the future, to reframe everything positively, to keep options open to avoid being trapped. The eternal optimist became your identity—a strategy that promised freedom through escape.`,
    returnPath: `The path back to essence isn't about finding more joy—it's about staying present long enough to receive the joy that's here. When you can sit with discomfort, when you can commit without escape hatches, when you can be still without restlessness—you're touching essence. The fulfillment you seek isn't in the next experience; it's in the depth of this one.`,
    essenceContact: `You're in contact with essence when: you feel complete in this moment without anticipating the next, you can stay with difficult feelings without escaping, you experience joy that doesn't need stimulation, you feel satisfied without needing more, you experience depth rather than breadth of experience.`,
    allTypesIntegration: [
      { type: 1, quality: 'Disciplined focus', practice: 'Complete one thing fully before starting another' },
      { type: 2, quality: 'Present caring', practice: 'Be fully present with someone\'s pain without fixing it' },
      { type: 3, quality: 'Dedicated follow-through', practice: 'Finish a project even when it becomes boring' },
      { type: 4, quality: 'Depth of feeling', practice: 'Let yourself feel sadness, grief, or loss fully' },
      { type: 5, quality: 'Focused depth', practice: 'Go deep into one subject rather than skimming many' },
      { type: 6, quality: 'Committed loyalty', practice: 'Stay committed even when a shinier option appears' },
      { type: 8, quality: 'Grounded power', practice: 'Take a firm stand rather than keeping options open' },
      { type: 9, quality: 'Peaceful stillness', practice: 'Be still and present without needing stimulation' }
    ]
  },
  {
    type: 8,
    essenceQuality: 'Tender Strength & Innocence',
    essenceDescription: `Your essence is powerful AND vulnerable—strength that includes tenderness. Before the world taught you that vulnerability meant weakness, you could be both powerful and soft. The armored challenger is not who you are; it's a pattern that developed when you learned to protect your innocence through force.`,
    beforeConditioning: `As a child, you naturally embodied both strength and tenderness. You could be powerful without dominating, vulnerable without being destroyed. You didn't need armor—your innocence was protected by truth, not force. Your essential nature is a rare combination of immense power and deep sensitivity.`,
    howYouForgot: `Somewhere along the way, you received the message that vulnerability was dangerous, that the world would hurt you if you showed softness. Perhaps you were betrayed or saw the innocent harmed. You learned to armor yourself, to never show weakness, to take control before being controlled. The invulnerable protector became your identity—a strategy that promised safety through domination.`,
    returnPath: `The path back to essence isn't about becoming stronger—it's about discovering that true strength includes vulnerability. When you can show hurt without fear, when you can love without possessing, when you can be tender without losing power—you're touching essence. The innocence you protect in others is the innocence you're trying to recover in yourself.`,
    essenceContact: `You're in contact with essence when: you feel powerful AND vulnerable at the same time, you can show tenderness without feeling weak, you experience trust without needing control, you feel your innocence beneath the armor, you can love fully without fear of betrayal.`,
    allTypesIntegration: [
      { type: 1, quality: 'Principled restraint', practice: 'Follow a principle even when you have the power not to' },
      { type: 2, quality: 'Tender nurturing', practice: 'Care for someone gently without taking charge' },
      { type: 3, quality: 'Aligned achievement', practice: 'Work toward a goal without dominating the process' },
      { type: 4, quality: 'Emotional vulnerability', practice: 'Share your hurt and fear, not just your anger' },
      { type: 5, quality: 'Reflective withdrawal', practice: 'Step back and reflect before acting' },
      { type: 6, quality: 'Loyal trust', practice: 'Trust others to handle things without your control' },
      { type: 7, quality: 'Light playfulness', practice: 'Be playful without any power dynamic' },
      { type: 9, quality: 'Yielding peace', practice: 'Let go of control and yield to the flow' }
    ]
  },
  {
    type: 9,
    essenceQuality: 'Engaged Love & Presence',
    essenceDescription: `Your essence is presence that matters—a being that the universe wants here, engaged, participating. Before the world taught you that your presence was less important than others', you knew your significance. The withdrawn peacemaker is not who you are; it's a pattern that developed when you forgot that you are essential.`,
    beforeConditioning: `As a child, you naturally embodied engaged presence. You knew what you wanted, could assert your needs, felt that your being mattered. You didn't need to merge with others or disappear—your unique presence was a gift. Your essential nature is deeply significant, loved, and called to full participation.`,
    howYouForgot: `Somewhere along the way, you received the message that your presence didn't matter, that keeping peace was more important than being yourself. Perhaps your needs were overlooked or conflict felt threatening to survival. You learned to merge, accommodate, and disappear to keep harmony. The invisible peacemaker became your identity—a strategy that promised love through self-erasure.`,
    returnPath: `The path back to essence isn't about being more peaceful—it's about waking up to your own significance. When you can assert yourself without guilt, when you can disagree without fear, when you can show up fully as yourself—you're touching essence. The love you seek flows THROUGH you when you stop hiding. Your presence isn't optional; it's essential.`,
    essenceContact: `You're in contact with essence when: you feel significant and present, you can assert your desires without guilt, you experience your own aliveness and energy, you know your opinion matters and share it, you feel that the universe wants you here, engaged, participating fully.`,
    allTypesIntegration: [
      { type: 1, quality: 'Principled stand', practice: 'Take a moral stance even if it creates conflict' },
      { type: 2, quality: 'Assertive giving', practice: 'Give from your own desire, not just others\' requests' },
      { type: 3, quality: 'Visible achievement', practice: 'Pursue and claim your own success' },
      { type: 4, quality: 'Unique expression', practice: 'Express what makes you different and special' },
      { type: 5, quality: 'Clear opinion', practice: 'Share your perspective as valuable, not just information' },
      { type: 6, quality: 'Decisive commitment', practice: 'Make a decision and commit without hedging' },
      { type: 7, quality: 'Energized pursuit', practice: 'Pursue what excites you with full energy' },
      { type: 8, quality: 'Direct assertion', practice: 'Assert your needs directly and powerfully' }
    ]
  }
];

export const getEssenceByType = (typeNumber: TypeNumber): EssenceQuality | undefined => {
  return essenceQualities.find(e => e.type === typeNumber);
};

export const getAllTypesIntegration = (typeNumber: TypeNumber): EssenceQuality['allTypesIntegration'] => {
  return essenceQualities.find(e => e.type === typeNumber)?.allTypesIntegration ?? [];
};
