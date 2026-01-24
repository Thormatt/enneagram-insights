/**
 * Type 0 / Transcendence
 *
 * The Enneagram is not ultimately about personality typing—it's a map of return to essence.
 * "Type 0" or "Point 9/0" represents the undifferentiated wholeness before ego-fixation,
 * the ground of being from which all nine types emerge, and the destination of the spiritual journey.
 *
 * Your type is not who you ARE—it's your pattern of forgetting who you are.
 */

export interface TranscendenceTeaching {
  id: string;
  title: string;
  source: string;
  teaching: string;
  practice?: string;
}

export interface TypeZeroData {
  concept: string;
  description: string;
  gurdjieffTeaching: string;
  ichazoTeaching: string;
  sufiOrigins: string;
  essenceVsPersonality: {
    essence: string[];
    personality: string[];
  };
  signsOfAwakening: string[];
  universalPractices: {
    practice: string;
    description: string;
  }[];
  teachings: TranscendenceTeaching[];
  theInnerTriangle: {
    description: string;
    nine: string;
    three: string;
    six: string;
    movement: string;
  };
  theHexad: {
    description: string;
    movement: string;
    meaning: string;
  };
}

export const typeZero: TypeZeroData = {
  concept: 'Type 0 / Point Zero / Essence',

  description: `The Enneagram symbol contains a profound teaching often overlooked in personality-focused approaches: the point at the center—Type 0, or the return to essence. This is not another type but the ground of being from which all nine types emerge and to which they return.

Your Enneagram type describes your particular pattern of forgetting who you are. It's the specific way your essential nature got obscured by conditioning. True integration isn't about becoming a "healthy version" of your type—it's about transcending type fixation altogether, returning to the wholeness you never actually lost.

In this understanding, the Enneagram is not a personality system but a map of consciousness transformation. The nine points represent nine different ways essence gets filtered through ego, and the center represents essence itself—pure being, undifferentiated, whole.`,

  gurdjieffTeaching: `George Gurdjieff, who brought the Enneagram to the West in the early 20th century, distinguished between "essence" and "personality":

ESSENCE is who you were born as—your authentic nature, your being before conditioning. It is real, connected to something greater, and holds your genuine capabilities and possibilities.

PERSONALITY is what was added through upbringing, culture, education, and experience. It is not inherently bad, but it is borrowed, mechanical, and often becomes mistaken for our true self.

Gurdjieff taught that most people are "asleep"—identified with personality and cut off from essence. The Work is about "waking up," recognizing our mechanicalness, and returning to conscious essence. As he said: "Man is a machine, but a machine that can know it is a machine—and only then can it cease to be a machine."

The Enneagram, in Gurdjieff's teaching, was not primarily about types but about the laws of world-creation and world-maintenance—cosmic principles reflected in human psychology. Each type represents a specific way that consciousness becomes distorted when identified with personality.`,

  ichazoTeaching: `Oscar Ichazo, who developed the modern psychological Enneagram at his Arica school in the 1960s-70s, taught that each type represents a "fixation" or "ego trap"—a specific way that pure consciousness becomes distorted.

According to Ichazo, we are all born in essence—undivided, whole, directly perceiving reality. But early in life, we experience a "fall" from this essential state. The ego develops as a survival mechanism, and we lose contact with our essential nature.

Each Enneagram type has:
- A PASSION (vice): The emotional fuel of ego
- A FIXATION: The cognitive distortion that maintains ego
- A HOLY IDEA: The essential truth obscured by fixation
- A VIRTUE: The emotional state when fixation releases

The path of return involves recognizing and releasing these patterns until we return to essence—not as a point we reach, but as what we always already are when the veils fall away.

Ichazo's "Protoanalysis" aimed at exactly this: dissolving ego fixations to restore contact with essence. The goal was not to become a better version of your type but to transcend type altogether.`,

  sufiOrigins: `The Enneagram symbol itself has roots in ancient wisdom traditions, particularly Sufism. The nine-pointed figure appears in Sufi teachings as a representation of the divine attributes and the journey of the soul.

In Sufi understanding, the human condition is one of "forgetting"—we have forgotten our true nature, our origin in the Divine. The spiritual path is one of "remembrance" (dhikr)—returning to awareness of what we always were.

The nine points can be understood as the "Faces of God" or divine qualities that become distorted when filtered through ego. In essence, we embody all nine qualities in harmony. In ego-identification, one quality becomes dominant and distorted, becoming a compensation for the loss of wholeness.

The circle itself represents Unity—the one Reality from which all apparent multiplicity arises. The inner lines show the dynamic movement of consciousness—how we can get trapped in mechanical patterns (the hexad) or access the transformative potential of the inner triangle (3-6-9).

True Sufi teaching holds that we are never actually separate from the Divine—separation is an illusion maintained by ego. Awakening doesn't create union; it reveals that union was never broken.`,

  essenceVsPersonality: {
    essence: [
      'Present before conditioning',
      'Authentic, real, connected to source',
      'Spacious, responsive, alive',
      'Experiences all nine qualities in balance',
      'Knows itself without needing definition',
      'Acts from wisdom, love, and presence',
      'Feels whole, complete, at peace',
      'Connected to the sacred in all things',
      'Time feels eternal—the present is enough',
      'Identity is fluid, open, undefined'
    ],
    personality: [
      'Developed through conditioning',
      'Constructed, borrowed, mechanical',
      'Contracted, reactive, defended',
      'Fixated on one quality, avoiding others',
      'Needs constant self-definition and validation',
      'Acts from fear, desire, and automation',
      'Feels lacking, incomplete, anxious',
      'Experiences separation and struggle',
      'Time feels pressing—never enough',
      'Identity is fixed, defended, labeled'
    ]
  },

  signsOfAwakening: [
    'You can observe your type pattern without being controlled by it',
    'You feel equally comfortable expressing qualities from all nine types',
    'Your sense of self becomes less defined, more spacious',
    'Life feels less like a problem to solve and more like a mystery to participate in',
    'You can hold multiple perspectives simultaneously without needing to choose',
    'Emotional reactions arise and pass without leaving a lasting sense of identity',
    'You experience connection with others beyond personality differences',
    'The search for "who you are" naturally quiets',
    'You feel presence and aliveness independent of circumstances',
    'Compassion arises naturally for yourself and others caught in ego patterns',
    'Time feels less urgent; the present moment is complete',
    'You can be with difficult experiences without needing to escape or fix them'
  ],

  universalPractices: [
    {
      practice: 'Self-Observation Without Judgment',
      description: `Simply observe your patterns—thoughts, feelings, reactions—without trying to change them. This is the foundation of all inner work. The observer is not the pattern being observed; in the gap between them, essence can be discovered. Watch how your type's fixation operates: the automatic reactions, the stories, the strategies. Don't try to be different; just see.`
    },
    {
      practice: 'The Pause',
      description: `Before reacting from your habitual pattern, pause. In that pause, essence has room to act. The mechanical reactions of type operate faster than consciousness; by pausing, you interrupt the machine and create space for something authentic. This is Gurdjieff's "stop exercise"—using deliberate pauses to create moments of self-remembering.`
    },
    {
      practice: 'Self-Remembering',
      description: `Gurdjieff's central practice: Remember yourself while engaging with the world. Most moments, we forget ourselves entirely—attention flows outward and we become lost in external experience. Or attention flows inward and we become lost in internal drama. Self-remembering is divided attention: aware of both the world and yourself simultaneously.`
    },
    {
      practice: 'Welcoming All Parts',
      description: `Instead of trying to overcome your type's pattern, welcome it. Your type developed to protect essence; hating it creates more separation. Can you feel compassion for the child who developed these strategies? Can you hold your own patterns with the same tenderness you would hold a frightened child? Integration happens through acceptance, not rejection.`
    },
    {
      practice: 'Sensing the Body',
      description: `Essence is accessed through presence, and presence is anchored in the body. Feel your body from the inside—the sensations, the aliveness, the energy. Personality lives in thought; essence lives in embodied presence. Regular practice of sensing the body—feet on the ground, breath moving, life pulsing—brings you home to essence.`
    },
    {
      practice: 'The Holy Ideas Meditation',
      description: `Contemplate the liberating truth of your type's Holy Idea. This isn't intellectual understanding but direct recognition. For example, a One might rest in the felt sense that reality is already perfect as it is. Let the Holy Idea penetrate beyond concept into direct experience. This is the medicine for your specific fixation.`
    },
    {
      practice: 'Shadow Integration',
      description: `Your type rejects certain qualities and projects them onto others. These rejected parts are not gone—they're in shadow. Embracing what your type denies brings you toward wholeness. A Two might explore selfishness with curiosity. An Eight might explore tenderness. What does your type most avoid? That's your doorway.`
    },
    {
      practice: 'Practicing Your Opposite',
      description: `Deliberately practice behaviors associated with types you find most foreign or uncomfortable. If you're a withdrawn type, practice assertion. If you're an assertive type, practice receiving. This isn't about becoming another type but about reclaiming the full spectrum of human capacities that essence naturally possesses.`
    }
  ],

  teachings: [
    {
      id: 'gurdjieff-machine',
      title: 'Man is a Machine',
      source: 'G.I. Gurdjieff',
      teaching: `"A man can be born, but in order to be born he must first die, and in order to die he must first awake."

"Man has no individual 'I.' Instead, there are hundreds of separate small 'I's, often unknown to each other, and frequently incompatible. At one moment an 'I' is there, at the next moment another 'I.' Man is a machine controlled by external influences."

"The first reason for man's inner slavery is his ignorance, and above all, his ignorance of himself. Without self-knowledge, without understanding the working and functions of his machine, man cannot be free."`,
      practice: 'Observe how different "I"s take over throughout your day. Notice how contradictory desires and attitudes each claim to be "you." Can you find the observer behind all these changing states?'
    },
    {
      id: 'ichazo-fixation',
      title: 'Ego Fixation',
      source: 'Oscar Ichazo',
      teaching: `The ego is not inherently evil—it's a survival mechanism that has outlived its usefulness. We developed it as children to cope with a world that seemed threatening. But the ego became a prison when we forgot it was a strategy, not an identity.

Each Enneagram type represents a specific "ego fixation"—a pattern of contraction around a particular wound. The passion is the emotional energy that fuels it. The fixation is the mental pattern that maintains it. Together they create a self-reinforcing loop that feels like self but is actually a construction.

Liberation comes not from destroying the ego but from seeing through it. When you truly see that the fixation is not you—is just a pattern, a habit, a strategy—it begins to lose its grip. Essence, which was always there, shines through.`,
      practice: 'Identify your type\'s core fixation. Notice how it operates in your daily life—the thoughts that reinforce it, the emotions that fuel it. Don\'t fight it; simply illuminate it with awareness.'
    },
    {
      id: 'sufi-remembrance',
      title: 'The Path of Return',
      source: 'Sufi Tradition',
      teaching: `"I was a hidden treasure and I loved to be known, so I created the world."

The soul's journey is circular: from unity, through apparent separation, back to unity. But the return is not the same as the beginning—it carries the gift of self-knowledge, the treasure of consciousness aware of itself.

Your personality, with all its patterns and suffering, is not a mistake. It's the necessary veil through which consciousness becomes aware of itself. The wound of separation creates the longing for return, and that longing is the vehicle of awakening.

Don't try to skip the journey. The descent into type, into ego, into suffering, is part of the path. Honor it. But know that it is not the destination. You are always on your way home, even when it feels like exile.`,
      practice: 'Practice dhikr (remembrance): Throughout your day, remember that you are not the pattern. You are the awareness in which the pattern appears. "La ilaha illallah"—there is no reality but Reality.'
    },
    {
      id: 'naranjo-character',
      title: 'Character and Essence',
      source: 'Claudio Naranjo',
      teaching: `Character structure is what remains when essence is lost. Each type is like a shell that forms around the absence of essential qualities. The Type One shell forms around the absence of Holy Perfection. The Type Four shell forms around the absence of Holy Origin. Each type is essentially a case of mistaken identity.

But the shell is not worthless—it contains the seed of return. Within every fixation is the distorted echo of an essential quality. The One's perfectionism contains the echo of actual perfection. The Four's longing contains the echo of actual connection. The neurosis points toward the cure.

The work is to follow the suffering back to its source—not to escape the suffering, but to let it guide you to what was lost. Your greatest pain points to your greatest gift.`,
      practice: 'What does your type most long for? Trace that longing to its essence. The longing itself is the doorway—not the object of the longing, but the longing itself. Rest in the longing, and see what opens.'
    },
    {
      id: 'riso-hudson-presence',
      title: 'Presence and Transformation',
      source: 'Don Riso & Russ Hudson',
      teaching: `Real transformation happens not by trying to change our personality, but by becoming more present. In presence, we naturally begin to disidentify from our type patterns. We become the awareness that observes the pattern rather than the pattern itself.

The three centers—head, heart, body—are gateways to presence. Each type tends to be cut off from one or two centers. A complete human being has access to all three: the wisdom of the head, the love of the heart, the power of the body. Integration is the restoration of all three centers working in harmony.

At the highest levels of development, type almost disappears. Not because it's been overcome, but because it's become transparent. The pattern remains, but it no longer obscures essence. Like a window that was dirty and is now clean—the glass is still there, but now it lets light through.`,
      practice: 'Notice which of your three centers you have easiest access to. Practice bringing awareness to the centers you neglect. If you live in your head, drop into your body. If you live in your heart, engage your thinking. Balance restores wholeness.'
    },
    {
      id: 'almaas-diamond',
      title: 'The Point of Existence',
      source: 'A.H. Almaas (Hameed Ali)',
      teaching: `The Enneagram describes nine "holy ideas"—nine facets of objective reality. When we lose contact with our holy idea, we develop a specific ego fixation as compensation. But the ego can never truly substitute for essence—hence the endless seeking, the chronic dissatisfaction.

Each type is looking for its essence in the wrong place. The One seeks perfection in making things right, but Holy Perfection recognizes that reality IS perfect. The Five hoards knowledge seeking holy omniscience, but Holy Omniscience is accessed through participation, not accumulation.

The Diamond Approach recognizes that essence has many qualities—strength, compassion, joy, peace, power, will. A complete human being has access to all of them. Type fixation blocks access to certain qualities while overemphasizing others. Integration is the recovery of the full palette of essential qualities.`,
      practice: 'What essential quality does your type most lack? Compassion? Strength? Joy? Allow yourself to feel the lack without trying to fill it. In fully experiencing the absence, you create space for essence to emerge.'
    }
  ],

  theInnerTriangle: {
    description: `The inner triangle connecting points 9, 3, and 6 represents a special potential in the Enneagram. These three points are connected by the "shock points"—places where conscious effort can introduce new influences into an otherwise mechanical process.`,

    nine: `Point 9 is at the top, representing undifferentiated unity—the source and the return. It's associated with Holy Love: the recognition that being itself is loved and essential. Type Nine's gift is natural connection to this unity, though the pattern of self-forgetting can also obscure it.`,

    three: `Point 3 is where the triangle meets the practical world of manifestation. It's associated with Holy Hope: the recognition that existence has inherent value. Type Three's gift is bringing essence into form, though the pattern of image-making can distort this into performance.`,

    six: `Point 6 is where the triangle grounds in loyalty and commitment. It's associated with Holy Faith: the recognition of trustworthy inner guidance. Type Six's gift is grounded, committed presence, though the pattern of doubt can distort this into anxiety.`,

    movement: `The triangle moves: 9 → 3 → 6 → 9. This represents a potential path of conscious evolution: from undifferentiated unity (9), through manifestation in the world (3), to committed grounded faith (6), returning to higher unity (9). This is not automatic—it requires conscious work at each shock point.`
  },

  theHexad: {
    description: `The irregular hexagon connecting points 1-4-2-8-5-7 (and back to 1) represents the "law of seven"—the way energy naturally moves through processes. Unlike the triangle, the hexad shows mechanical movement that happens without conscious intervention.`,

    movement: `The sequence 1 → 4 → 2 → 8 → 5 → 7 → 1 comes from dividing 1 by 7, which produces the infinitely repeating decimal 0.142857... This mathematical relationship was important to Gurdjieff as showing universal laws of process.`,

    meaning: `The hexad shows how we can get stuck in mechanical loops—how a One's perfectionism (1) can become a Four's sense of deficiency (4), which becomes a Two's need to please (2), which becomes an Eight's control (8), which becomes a Five's withdrawal (5), which becomes a Seven's escape (7), which returns to the One's need to fix things.

Understanding these connections helps us see how patterns perpetuate themselves. The way out is through the triangle—the shock points where conscious effort can redirect mechanical flow.`
  }
};

export const getTypeZeroData = (): TypeZeroData => typeZero;

export const getUniversalPractices = (): TypeZeroData['universalPractices'] => typeZero.universalPractices;

export const getTeachings = (): TranscendenceTeaching[] => typeZero.teachings;
