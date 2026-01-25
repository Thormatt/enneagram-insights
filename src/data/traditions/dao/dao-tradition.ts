/**
 * The Dao Tradition
 *
 * Integration of Taoist philosophy with the Enneagram, based on:
 * - David Hiley's "The Enneagram and the Tao Te Ching" (2019)
 * - Dr. David Daniels' Three Life Energies framework
 * - Classical Taoist teachings on Wu Wei and the Tao Te Ching
 */

import type {
  DaoTradition,
  DaoOverview,
  DaoTypeProfile,
  WuWeiPractice,
  HexadJourneyStep,
} from './types';

const overview: DaoOverview = {
  title: 'The Way of Return',
  introduction: `The Tao Te Ching and the Enneagram share a profound insight: our suffering comes from forgetting our true nature and acting against the natural flow of life.

In Taoist terms, each Enneagram type represents a specific way that the effortless action of Wu Wei becomes distorted into striving, grasping, and resistance. The nine types are nine ways of forgetting the Tao.

David Hiley's groundbreaking work reveals that the 81 chapters of the Tao Te Ching are structured as a 9×9 matrix that mirrors the Enneagram. The hexad path (1→4→2→8→5→7) represents the mechanical flow of energy through the chapters, while the inner triangle (3-6-9) represents the foundational qualities of the Tao itself.

Return to the Tao is not about becoming someone different. It is about releasing the grip of your type's striving pattern and allowing effortless action to emerge.`,

  threeEnergies: {
    yin: {
      types: [4, 5, 9],
      quality: 'Receptive',
      description: `Yin energy is receptive, inward-flowing, and contemplative. Types 4, 5, and 9 lead with this withdrawing energy. When balanced, Yin manifests as deep presence, wisdom, and openness. When contracted, it becomes withdrawal, stagnation, and disconnection.

The Yin types' path to Wu Wei involves developing constructive assertiveness while honoring their natural depth. They must learn to flow outward without losing their center.`,
    },
    yang: {
      types: [3, 7, 8],
      quality: 'Assertive',
      description: `Yang energy is assertive, outward-flowing, and action-oriented. Types 3, 7, and 8 lead with this expansive energy. When balanced, Yang manifests as effective action, vitality, and presence. When contracted, it becomes aggression, overextension, and domination.

The Yang types' path to Wu Wei involves developing receptivity and stillness while honoring their natural power. They must learn to flow inward without losing their effectiveness.`,
    },
    yinYang: {
      types: [1, 2, 6],
      quality: 'Harmonizing',
      description: `Yin-Yang energy seeks to balance and harmonize opposites. Types 1, 2, and 6 lead with this compliant, mediating energy. When balanced, it manifests as integrity, care, and loyalty. When contracted, it becomes rigidity, people-pleasing, and anxiety.

The Yin-Yang types' path to Wu Wei involves relaxing their compliance patterns and allowing natural reciprocity to emerge. They must learn to let go of controlling outcomes.`,
    },
  },

  hexadPath: `The hexad sequence 1→4→2→8→5→7 reveals how energy mechanically circulates through the Enneagram when we are unconscious. This same path appears in the structure of the Tao Te Ching:

• Chapters 1-10 (Point 1): Foundational principles, the One
• Chapters 11-20 (Point 4): Individuality, uniqueness, self-cultivation
• Chapters 21-30 (Point 2): Relationality, compassion, yielding
• Chapters 31-40 (Point 8): Power, restraint, the ruler's role
• Chapters 41-50 (Point 5): Knowledge, understanding, mystery
• Chapters 51-60 (Point 7): Freedom, release, non-action
• Chapters 61-81: Return to Unity, synthesis

Reading the Tao Te Ching in order is a journey through the hexad—a path of awakening encoded in the ancient text.`,

  innerTriangle: `Points 3, 6, and 9 form the inner triangle—the shock points where conscious effort can interrupt mechanical patterns. In the Tao Te Ching, these points represent the essential qualities of the Tao itself:

• Point 9 (Holy Love): Undifferentiated unity, the source and return
• Point 3 (Holy Hope): Effective action, the Tao in motion
• Point 6 (Holy Faith): Grounded loyalty, trust in the Way

The inner triangle is the stable ground from which the hexad's movement can be observed and transcended.`,

  wuWeiEssence: `Wu Wei (無為) is often translated as "non-action," but this misses its depth. Wu Wei is effortless action—action that arises from alignment with the Tao rather than from ego striving.

Your Enneagram type is your specific pattern of acting against Wu Wei. Each type has its own way of forcing, resisting, and grasping. The path to Wu Wei is not the same for each type:

• For Yang types (3, 7, 8): Wu Wei means learning to receive, to be still, to let go of control
• For Yin types (4, 5, 9): Wu Wei means learning to engage, to assert, to move into the world
• For Yin-Yang types (1, 2, 6): Wu Wei means relaxing the need to harmonize, to allow natural flow

True Wu Wei is not passivity. It is the effortless effectiveness that arises when you stop fighting the river of life.`,
};

const typeProfiles: DaoTypeProfile[] = [
  {
    typeNumber: 1,
    energy: 'yin-yang',
    energyDescription: 'The One leads with Yin-Yang energy, seeking to harmonize reality with an ideal of perfection. This creates a pattern of forceful correction.',
    coreChallenge: 'Excessive Yang (rigidity, judgment, harshness) masquerading as balance',
    wuWeiPath: 'Practice letting go of the need for everything to be "right." Allow imperfection to exist without correction.',
    yinQuality: 'Softness, acceptance, patience',
    yangQuality: 'Discernment, integrity, precision',
    balancePractice: 'Integrate the critical voice with gentle self-compassion. Action for justice should stem from natural compassion (Te), not rigid rules.',
    ttcChapters: [1, 10, 19, 28, 37, 46, 55, 64, 73],
    keyTeaching: '"The Tao does nothing, yet nothing is left undone." Let perfection emerge rather than forcing it.',
  },
  {
    typeNumber: 2,
    energy: 'yin-yang',
    energyDescription: 'The Two leads with Yin-Yang energy, seeking to harmonize relationships through giving. This creates a pattern of forced connection.',
    coreChallenge: 'Excessive giving without receiving, neglecting self, manufacturing love',
    wuWeiPath: 'Learn to receive. Allow connection to flow naturally without manufacturing it.',
    yinQuality: 'Receptivity, self-care, healthy boundaries',
    yangQuality: 'Generosity, warmth, attunement',
    balancePractice: 'Let love flow outward without demanding a specific response. Cultivate self-love as the source of giving.',
    ttcChapters: [2, 11, 20, 29, 38, 47, 56, 65, 74],
    keyTeaching: '"The sage does not compete, and therefore no one can compete with him." Give without keeping score.',
  },
  {
    typeNumber: 3,
    energy: 'yang',
    energyDescription: 'The Three leads with Yang energy, flowing outward into achievement and image. This creates a pattern of performance over presence.',
    coreChallenge: 'Disconnect from authentic feelings, chasing external validation, constant adaptation',
    wuWeiPath: 'Find action that aligns with inner purpose, not just external goals. Embrace stillness and non-performance.',
    yinQuality: 'Authenticity, introspection, vulnerability',
    yangQuality: 'Effectiveness, adaptability, inspiration',
    balancePractice: 'Practice being rather than doing. Connect with genuine feelings beneath the performance.',
    ttcChapters: [3, 12, 21, 30, 39, 48, 57, 66, 75],
    keyTeaching: '"Those who know do not speak; those who speak do not know." True value needs no advertisement.',
  },
  {
    typeNumber: 4,
    energy: 'yin',
    energyDescription: 'The Four leads with Yin energy, flowing inward toward depth and uniqueness. This creates a pattern of longing and resistance to the ordinary.',
    coreChallenge: 'Excessive focus on difference and lack, self-absorption, resistance to "ordinary" life',
    wuWeiPath: 'Accept the ordinary as part of life\'s flow. Authenticity comes from accepting the present moment, not seeking the exotic.',
    yinQuality: 'Depth, emotional honesty, creativity',
    yangQuality: 'Presence, engagement, appreciation of simplicity',
    balancePractice: 'Flow with experience rather than against it. Reduce resistance to what is.',
    ttcChapters: [4, 13, 22, 31, 40, 49, 58, 67, 76],
    keyTeaching: '"Be content with what you have; rejoice in the way things are." The extraordinary is hidden in the ordinary.',
  },
  {
    typeNumber: 5,
    energy: 'yin',
    energyDescription: 'The Five leads with Yin energy, withdrawing into observation and knowledge. This creates a pattern of hoarding and isolation.',
    coreChallenge: 'Excessive withdrawal, emotional coldness, accumulating rather than engaging',
    wuWeiPath: 'Engage with the world mindfully. Share knowledge freely rather than hoarding it.',
    yinQuality: 'Wisdom, observation, depth of understanding',
    yangQuality: 'Engagement, sharing, participation',
    balancePractice: 'Act from understanding, not just accumulation. Flow through the need to know everything before acting.',
    ttcChapters: [5, 14, 23, 32, 41, 50, 59, 68, 77],
    keyTeaching: '"In the pursuit of learning, every day something is acquired. In the pursuit of Tao, every day something is dropped." Wisdom is letting go.',
  },
  {
    typeNumber: 6,
    energy: 'yin-yang',
    energyDescription: 'The Six leads with Yin-Yang energy, seeking to harmonize safety through vigilance. This creates a pattern of anxiety and doubt.',
    coreChallenge: 'Excessive anxiety, suspicion, resistance to uncertainty, seeking external security',
    wuWeiPath: 'Learn to be present with uncertainty. Trust the natural flow of life as much as possible.',
    yinQuality: 'Trust, receptivity, inner calm',
    yangQuality: 'Commitment, courage, loyalty',
    balancePractice: 'Act guided by inner wisdom, not external pressure. Accept impermanence without panic.',
    ttcChapters: [6, 15, 24, 33, 42, 51, 60, 69, 78],
    keyTeaching: '"The Tao is called the Great Mother: empty yet inexhaustible." Trust the ground beneath your feet.',
  },
  {
    typeNumber: 7,
    energy: 'yang',
    energyDescription: 'The Seven leads with Yang energy, flowing outward into possibilities and pleasures. This creates a pattern of escape and scatteredness.',
    coreChallenge: 'Excessive craving for stimulation, avoidance of pain, lack of depth',
    wuWeiPath: 'Find stillness and contentment in the present moment. Enjoy experiences without needing the next one.',
    yinQuality: 'Stillness, depth, acceptance of pain',
    yangQuality: 'Joy, vision, enthusiasm',
    balancePractice: 'Practice presence and non-striving. Appreciate the "here and now" rather than chasing the next experience.',
    ttcChapters: [7, 16, 25, 34, 43, 52, 61, 70, 79],
    keyTeaching: '"Knowing others is intelligence; knowing yourself is true wisdom." The deepest adventure is within.',
  },
  {
    typeNumber: 8,
    energy: 'yang',
    energyDescription: 'The Eight leads with Yang energy, flowing outward into control and protection. This creates a pattern of domination and hardness.',
    coreChallenge: 'Excessive force, control, resistance to vulnerability',
    wuWeiPath: 'Practice effective action through strength and softness. Embrace vulnerability without losing integrity.',
    yinQuality: 'Vulnerability, receptivity, trust',
    yangQuality: 'Strength, protection, directness',
    balancePractice: 'Use influence gently. Allow others their autonomy. Connect with the power of yielding.',
    ttcChapters: [8, 17, 26, 35, 44, 53, 62, 71, 80],
    keyTeaching: '"Water is the softest thing, yet it can penetrate mountains and earth." True strength yields.',
  },
  {
    typeNumber: 9,
    energy: 'yin',
    energyDescription: 'The Nine leads with Yin energy, merging with the environment to maintain peace. This creates a pattern of self-forgetting and inertia.',
    coreChallenge: 'Excessive passivity, avoidance of conflict, losing sense of self',
    wuWeiPath: 'Find authentic expression without forcing conflict. Learn to be strong in gentle ways.',
    yinQuality: 'Peace, acceptance, harmony',
    yangQuality: 'Presence, assertion, self-remembering',
    balancePractice: 'Nurture your own needs as part of harmony. Action arises from inner alignment, not just appeasement.',
    ttcChapters: [9, 18, 27, 36, 45, 54, 63, 72, 81],
    keyTeaching: '"The highest good is like water. Water benefits all things and does not compete." Your peace is your power.',
  },
];

const wuWeiPractices: WuWeiPractice[] = [
  {
    typeNumber: 1,
    corePractice: 'Release the Grip of Rightness',
    description: 'Notice when you are about to correct something—a person, a situation, yourself. Pause. Ask: "Can I let this be imperfect right now?" Feel the physical tension of needing to fix. Then consciously release it, even if just for one breath.',
    challenge: 'Your instinct says that letting imperfection stand is wrong, even dangerous. But the Tao teaches that reality is already perfect in its imperfection. Your corrections often add more disturbance than they solve.',
    yinYangBalance: 'Cultivate Yin (softness, acceptance) to balance your dominant Yang (correction, control). Practice saying "This is enough" and meaning it.',
    dailyPractice: 'Choose one thing each day that you would normally correct, and consciously let it remain as it is. Observe what happens—both externally and in your own body.',
    quote: '"The Master does nothing, yet he leaves nothing undone." — Tao Te Ching, Ch. 37',
  },
  {
    typeNumber: 2,
    corePractice: 'Receive Before You Give',
    description: 'Before offering help, pause and receive. Receive the moment. Receive your own feelings. Receive what the other person is actually asking for (which may be nothing). Let love flow through you rather than from you.',
    challenge: 'Your instinct says that your worth comes from being needed. But the Tao teaches that love flows freely when not forced. Your giving often comes with invisible strings.',
    yinYangBalance: 'Cultivate Yin (receiving, self-care) to balance your dominant Yang (giving, doing for others). Practice receiving compliments without deflecting.',
    dailyPractice: 'Once each day, when you feel the urge to help, pause for three breaths instead. Ask yourself: "What do I need right now?" Attend to that first.',
    quote: '"The sage does not accumulate. The more he does for others, the more he has." — Tao Te Ching, Ch. 81',
  },
  {
    typeNumber: 3,
    corePractice: 'Be Without Performing',
    description: 'Notice when you are adjusting your image, your words, your energy to achieve an effect. Pause. Let the mask drop, even slightly. Ask: "Who am I when no one is watching?" Rest in that.',
    challenge: 'Your instinct says that you must constantly produce, achieve, and shine to have value. But the Tao teaches that true value is inherent, not earned. Your performances often disconnect you from your own heart.',
    yinYangBalance: 'Cultivate Yin (stillness, authenticity, interiority) to balance your dominant Yang (achievement, image, performance). Practice doing nothing productive for 10 minutes.',
    dailyPractice: 'Spend time each day in an activity where no one can see you and there is no achievement possible. Notice what arises.',
    quote: '"Those who know do not speak. Those who speak do not know." — Tao Te Ching, Ch. 56',
  },
  {
    typeNumber: 4,
    corePractice: 'Embrace the Ordinary',
    description: 'When you feel the pull toward intensity, drama, or special significance, pause. Look around at the ordinary moment you\'re in. Find three things that are simply, quietly good. Rest in the unremarkable.',
    challenge: 'Your instinct says that the ordinary is not enough, that depth requires intensity. But the Tao teaches that the extraordinary is hidden within the ordinary. Your longing often blinds you to what is already here.',
    yinYangBalance: 'Cultivate Yang (engagement, action, presence in the world) to balance your dominant Yin (withdrawal into feeling, longing for the missing). Practice simple tasks with full attention.',
    dailyPractice: 'Do one mundane task (washing dishes, walking) with complete presence. Notice the life in the ordinary.',
    quote: '"Be content with what you have; rejoice in the way things are." — Tao Te Ching, Ch. 44',
  },
  {
    typeNumber: 5,
    corePractice: 'Share Before You\'re Ready',
    description: 'When you feel the urge to withdraw into observation, to gather more information before engaging, pause. Offer something—a thought, a feeling, your presence—before you feel fully prepared. Trust that you have enough.',
    challenge: 'Your instinct says that you need to understand completely before acting, that engagement depletes you. But the Tao teaches that wisdom comes through participation, not accumulation. Your hoarding often leaves you more empty.',
    yinYangBalance: 'Cultivate Yang (engagement, sharing, action) to balance your dominant Yin (withdrawal, observation, accumulation). Practice being in groups without retreating.',
    dailyPractice: 'Share one thought or feeling with another person before you feel ready. Notice that sharing often creates energy rather than depleting it.',
    quote: '"In the pursuit of Tao, every day something is dropped." — Tao Te Ching, Ch. 48',
  },
  {
    typeNumber: 6,
    corePractice: 'Trust the Ground',
    description: 'When anxiety arises, when you\'re scanning for threats or seeking reassurance, pause. Feel your feet on the ground. Feel your breath. The ground has always been there. You have survived every moment until now. Rest in that.',
    challenge: 'Your instinct says you must anticipate every danger, question every certainty, prepare for every contingency. But the Tao teaches that security comes from within, from trusting the ground of being. Your vigilance often creates the very instability you fear.',
    yinYangBalance: 'Cultivate Yin (trust, calm, receptivity) to balance your dominant Yin-Yang pattern (vigilance, questioning, seeking external anchors). Practice sitting with uncertainty without resolving it.',
    dailyPractice: 'When you notice worry or doubt, place your feet firmly on the ground. Say: "In this moment, I am okay." Let the ground hold you.',
    quote: '"The Tao is called the Great Mother: empty yet inexhaustible." — Tao Te Ching, Ch. 6',
  },
  {
    typeNumber: 7,
    corePractice: 'Stay With What Is',
    description: 'When you feel the pull toward the next thing—the next plan, the next pleasure, the next possibility—pause. Stay exactly where you are. Let this moment be enough. Feel the subtle discomfort of not escaping.',
    challenge: 'Your instinct says that pain should be avoided, that more options mean more freedom, that the next experience will finally satisfy. But the Tao teaches that freedom comes from stillness, that depth comes from staying. Your constant motion often leaves you more empty.',
    yinYangBalance: 'Cultivate Yin (stillness, depth, acceptance of pain) to balance your dominant Yang (movement, options, avoidance). Practice sitting still when restless.',
    dailyPractice: 'When you feel the urge to plan, distract, or escape, pause for 60 seconds. Stay with whatever feeling is present. Let it move through you.',
    quote: '"Knowing others is intelligence; knowing yourself is true wisdom." — Tao Te Ching, Ch. 33',
  },
  {
    typeNumber: 8,
    corePractice: 'Yield to Win',
    description: 'When you feel the urge to push, control, or dominate, pause. Consider: what if you yielded here? What if you let the other person be right, be strong, be in charge? Feel the vulnerability of not being on top.',
    challenge: 'Your instinct says that yielding is weakness, that you must control to be safe, that vulnerability will be exploited. But the Tao teaches that water—the softest element—carves mountains. Your hardness often creates the very resistance you fight.',
    yinYangBalance: 'Cultivate Yin (vulnerability, receptivity, trust) to balance your dominant Yang (control, strength, domination). Practice asking for help.',
    dailyPractice: 'Once each day, consciously yield in a situation where you would normally assert. Notice what happens. Notice that you survive.',
    quote: '"Water is the softest thing, yet it can penetrate mountains and earth." — Tao Te Ching, Ch. 78',
  },
  {
    typeNumber: 9,
    corePractice: 'Remember Yourself',
    description: 'When you feel yourself merging with others, going along, disappearing into comfort or routine, pause. Ask: "What do I want right now? What do I feel? What is my position?" Speak it, even if quietly. You matter.',
    challenge: 'Your instinct says that your needs are less important, that conflict should be avoided, that peace requires self-erasure. But the Tao teaches that true harmony includes all voices—especially yours. Your disappearing often creates the very disharmony you fear.',
    yinYangBalance: 'Cultivate Yang (assertion, presence, action) to balance your dominant Yin (merging, peace-keeping, withdrawal). Practice expressing preferences, even small ones.',
    dailyPractice: 'Make one choice today based on what you actually want—not what\'s easy, not what keeps peace, but what you genuinely prefer. Speak it aloud.',
    quote: '"The highest good is like water. Water benefits all things and does not compete." — Tao Te Ching, Ch. 8',
  },
];

const hexadJourney: HexadJourneyStep[] = [
  {
    position: 1,
    chapterRange: 'Chapters 1-10',
    theme: 'Foundational Principles: The One',
    teaching: `The journey begins with the Tao itself—the unnamed source of all things. These chapters establish the cosmic order: the relationship between being and non-being, the paradox of the Tao that cannot be spoken, the ideal of the sage who acts without acting.

For Type One, these chapters speak directly to the longing for perfection. Chapter 1 reveals that true perfection cannot be named or fixed. Chapter 8 offers water as the model: benefiting all things without competing.`,
    transition: 'From the perfection of the One, we descend into the longing of the Four...',
  },
  {
    position: 4,
    chapterRange: 'Chapters 11-20',
    theme: 'Individuality & Uniqueness',
    teaching: `The journey enters the realm of the individual self—its uniqueness, its depth, its inevitable separation from the whole. These chapters explore the value of emptiness (Chapter 11), the senses and their limitations (Chapter 12), and the precious nature of the self (Chapter 13).

For Type Four, these chapters honor the depth while pointing beyond it. Chapter 20 speaks of being different from others, yet finding this difference in the "nursing mother" of the Tao—the source that nourishes all unique expressions.`,
    transition: 'From the uniqueness of the Four, we move into the relationality of the Two...',
  },
  {
    position: 2,
    chapterRange: 'Chapters 21-30',
    theme: 'Relationality & Compassion',
    teaching: `The journey enters the realm of relationship—giving, receiving, and the flow of compassion. These chapters explore the formless form of virtue (Chapter 21), the power of yielding (Chapter 22), and the sage's relationship to the world (Chapter 27).

For Type Two, these chapters reveal that true giving is effortless. Chapter 27 describes the sage who "saves all people" not through trying but through being. Chapter 30 warns against forcing outcomes even in service.`,
    transition: 'From the yielding of the Two, we encounter the power of the Eight...',
  },
  {
    position: 8,
    chapterRange: 'Chapters 31-40',
    theme: 'Power, Restraint & Leadership',
    teaching: `The journey enters the realm of power—its proper use, its dangers, and its ultimate surrender to the Tao. These chapters include teachings on weapons and war (Chapter 31), the ruler who leads by yielding (Chapter 37), and the return as the movement of the Tao (Chapter 40).

For Type Eight, these chapters offer the path of power through softness. Chapter 36 teaches "if you want to shrink something, you must first allow it to expand." Chapter 40 reveals that "returning is the movement of the Tao; yielding is the way of the Tao."`,
    transition: 'From the power of the Eight, we enter the knowledge of the Five...',
  },
  {
    position: 5,
    chapterRange: 'Chapters 41-50',
    theme: 'Knowledge, Understanding & Mystery',
    teaching: `The journey enters the realm of wisdom—the limits of knowledge, the depths of mystery, and the paradox of knowing by unknowing. Chapter 41 describes how the wise hear of the Tao and laugh. Chapter 47 reveals that one can know the whole world without leaving home.

For Type Five, these chapters transform the relationship to knowledge. Chapter 48 teaches: "In the pursuit of learning, every day something is acquired. In the pursuit of Tao, every day something is dropped." True wisdom is letting go.`,
    transition: 'From the wisdom of the Five, we discover the freedom of the Seven...',
  },
  {
    position: 7,
    chapterRange: 'Chapters 51-60',
    theme: 'Freedom, Release & Non-Action',
    teaching: `The journey enters the realm of liberation—freedom from striving, release of control, and the effortless action of Wu Wei. Chapter 52 speaks of returning to the source. Chapter 57 teaches ruling through non-interference. Chapter 60 compares governing to cooking small fish—don't overdo it.

For Type Seven, these chapters reveal true freedom. Chapter 52: "Block the passages, shut the doors, and till the end your strength won't fail." Freedom is found not in more experiences but in the source itself.`,
    transition: 'From the freedom of the Seven, the path returns to unity...',
  },
];

export const daoTradition: DaoTradition = {
  id: 'dao',
  name: 'The Dao Path',
  overview,
  typeProfiles,
  wuWeiPractices,
  ttcChapters: [], // Will be populated with full 81 chapters in separate file
  hexadJourney,
};

export const getDaoOverview = (): DaoOverview => overview;
export const getDaoTypeProfile = (typeNumber: number): DaoTypeProfile | undefined =>
  typeProfiles.find(p => p.typeNumber === typeNumber);
export const getWuWeiPractice = (typeNumber: number): WuWeiPractice | undefined =>
  wuWeiPractices.find(p => p.typeNumber === typeNumber);
export const getHexadJourney = (): HexadJourneyStep[] => hexadJourney;
export const getDaoTradition = (): DaoTradition => daoTradition;
