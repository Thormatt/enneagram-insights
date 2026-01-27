/**
 * Wisdom Lineage Data
 *
 * A map of wisdom traditions and their connections to the Enneagram's
 * understanding of ego, essence, and awakening.
 *
 * Historical Status (based on Delphi multi-model consensus research):
 * - 'verified': Historically documented with textual/archaeological evidence
 * - 'plausible': Scholarly support but debated or incomplete evidence
 * - 'modern-synthesis': 20th century creation, though may use ancient elements
 * - 'modern-insight': Contemporary analysis drawing valid parallels
 *
 * Note: The Enneagram SYMBOL has ancient roots in sacred geometry.
 * The Enneagram PERSONALITY SYSTEM is a 20th-century creation by Ichazo/Naranjo.
 * We distinguish between proven lineage and resonant parallels.
 */

export type ConnectionType = 'direct' | 'influenced' | 'parallel' | 'synthesized';
export type HistoricalStatus = 'verified' | 'plausible' | 'modern-synthesis' | 'modern-insight';

export interface HistoricalVerification {
  status: HistoricalStatus;
  summary: string;
  details: string;
  sources?: string[];
}

export interface WisdomTradition {
  id: string;
  name: string;
  subtitle: string;
  era: string;
  yearStart: number; // negative for BCE
  yearEnd: number | null; // null if ongoing
  region: string;
  symbol: string;
  color: string;

  // Historical verification (from Delphi consensus)
  historicalVerification: HistoricalVerification;

  // Core content
  coreInsight: string;
  keyTeaching: string;
  viewOfEgo: string;
  viewOfEssence: string;
  practiceApproach: string;

  // Key figures
  keyFigures: Array<{
    name: string;
    contribution: string;
  }>;

  // Connections
  connections: Array<{
    targetId: string;
    type: ConnectionType;
    description: string;
  }>;

  // Enneagram specific
  enneagramConnection: {
    strength: 'direct' | 'strong' | 'moderate' | 'analogical';
    description: string;
    sharedConcepts: string[];
    differences: string[];
  };

  // For depth
  keyTexts: string[];
  practices: string[];
  quote: {
    text: string;
    attribution: string;
  };
}

export const wisdomTraditions: WisdomTradition[] = [
  // ============================================
  // ANCIENT SOURCES
  // ============================================
  {
    id: 'mesopotamia',
    name: 'Mesopotamian Wisdom',
    subtitle: 'Sacred geometry and the mathematical cosmos',
    era: '3000-500 BCE',
    yearStart: -3000,
    yearEnd: -500,
    region: 'Iraq/Middle East',
    symbol: '𒀭',
    color: '#D4A574',

    historicalVerification: {
      status: 'plausible',
      summary: 'Ancient tradition with possible geometric influence',
      details: 'Sacred geometry and number mysticism are documented. Connection to Enneagram symbol is speculative but plausible given shared numerological interests.',
      sources: ['Babylonian astronomical tablets', 'Archaeological evidence'],
    },

    coreInsight: 'The cosmos operates according to mathematical and geometric principles that can be understood and aligned with.',
    keyTeaching: 'Numbers are not mere quantities but living principles. Sacred geometry reveals the hidden order of creation. The heavens mirror earthly patterns.',
    viewOfEgo: 'Not explicitly addressed in modern psychological terms, but the concept of personal destiny (shimtu) being misaligned with cosmic order.',
    viewOfEssence: 'The divine spark (ilum) within each person, connected to the gods and cosmic principles.',
    practiceApproach: 'Divination, ritual alignment with celestial cycles, temple practices.',

    keyFigures: [
      { name: 'Babylonian priests', contribution: 'Developed sophisticated astronomy and numerology' },
      { name: 'Chaldean magi', contribution: 'Preserved and transmitted esoteric mathematical knowledge' },
    ],

    connections: [
      { targetId: 'pythagoras', type: 'influenced', description: 'Pythagoras reportedly studied with Babylonian priests, absorbing their mathematical mysticism' },
      { targetId: 'egypt', type: 'parallel', description: 'Contemporary civilizations with shared esoteric interests' },
    ],

    enneagramConnection: {
      strength: 'analogical',
      description: 'The 9-pointed figure and numerological significance of 9 may have ancient roots in Babylonian number mysticism.',
      sharedConcepts: ['Sacred geometry', 'Significance of the number 9', 'Cosmic order reflected in human nature'],
      differences: ['No psychological typology', 'Focus on external cosmos rather than inner transformation'],
    },

    keyTexts: ['Enuma Elish', 'Babylonian astronomical tablets', 'Chaldean Oracles (later synthesis)'],
    practices: ['Astronomical observation', 'Numerical divination', 'Temple rituals'],
    quote: {
      text: 'As above, so below; as below, so above.',
      attribution: 'Hermetic principle (later formulation of ancient idea)',
    },
  },

  {
    id: 'egypt',
    name: 'Egyptian Mystery Schools',
    subtitle: 'Death, rebirth, and the immortal soul',
    era: '3000-300 BCE',
    yearStart: -3000,
    yearEnd: -300,
    region: 'Egypt',
    symbol: '𓂀',
    color: '#C9A227',

    historicalVerification: {
      status: 'plausible',
      summary: 'Ancient sources mention Greek philosophers studying here',
      details: 'Diogenes Laertius and other ancient writers mention Pythagoras studying in Egypt. Direct evidence is sparse but scholarly consensus considers it plausible.',
      sources: ['Diogenes Laertius - Lives of Eminent Philosophers', 'Walter Burkert - Greek Religion'],
    },

    coreInsight: 'The soul is immortal and must be prepared through initiation to navigate the afterlife and return to its divine source.',
    keyTeaching: 'Death is not an end but a transformation. The initiated can "die before dying" and awaken to eternal life while still embodied. The heart will be weighed against the feather of truth.',
    viewOfEgo: 'The "lower self" or earthly personality that must be purified and aligned with Ma\'at (cosmic truth/order).',
    viewOfEssence: 'The Ba (soul) and Ka (life force) that survive death; the Akh (enlightened spirit) that results from their union.',
    practiceApproach: 'Temple initiation, ritual death and rebirth, moral purification, study of sacred texts.',

    keyFigures: [
      { name: 'Thoth/Hermes', contribution: 'Mythical founder of esoteric wisdom, later associated with Hermeticism' },
      { name: 'Temple priests', contribution: 'Preserved and transmitted initiatory knowledge' },
    ],

    connections: [
      { targetId: 'pythagoras', type: 'influenced', description: 'Pythagoras reportedly spent 22 years studying in Egyptian temples' },
      { targetId: 'christianity', type: 'influenced', description: 'Early Christianity emerged in Alexandria where Egyptian and Greek thought merged' },
    ],

    enneagramConnection: {
      strength: 'analogical',
      description: 'The concept of the Ennead (nine gods) and the journey of the soul through transformation influenced later esoteric systems.',
      sharedConcepts: ['The Ennead (group of nine)', 'Death of ego for rebirth', 'Levels of consciousness'],
      differences: ['Focused on afterlife rather than this-life transformation', 'No personality typology'],
    },

    keyTexts: ['Book of the Dead', 'Pyramid Texts', 'Corpus Hermeticum (later synthesis)'],
    practices: ['Temple initiation', 'Meditation on death', 'Moral self-examination', 'Sacred ritual'],
    quote: {
      text: 'Know thyself, and thou shalt know the gods and the universe.',
      attribution: 'Temple of Luxor inscription',
    },
  },

  {
    id: 'vedic',
    name: 'Vedic/Hindu Tradition',
    subtitle: 'Atman, Brahman, and the illusion of separation',
    era: '1500 BCE - present',
    yearStart: -1500,
    yearEnd: null,
    region: 'India',
    symbol: 'ॐ',
    color: '#FF9933',

    historicalVerification: {
      status: 'verified',
      summary: 'Well-documented ancient tradition',
      details: 'Extensive textual and archaeological evidence. Buddhism emerged from this tradition. Concepts of Atman/ego are foundational to Eastern psychology.',
      sources: ['Upanishads', 'Bhagavad Gita', 'Archaeological evidence'],
    },

    coreInsight: 'Your true Self (Atman) is identical with ultimate Reality (Brahman). Suffering comes from forgetting this and identifying with the limited ego.',
    keyTeaching: 'Tat tvam asi — "Thou art That." You are not the body, not the mind, not the ego. You are pure awareness, identical with the infinite. Maya (illusion) makes you believe you are separate.',
    viewOfEgo: 'Ahamkara (the "I-maker") — a necessary function that becomes problematic when mistaken for the true Self. The ego is not evil but is like a mask that has forgotten it is a mask.',
    viewOfEssence: 'Atman — the eternal, unchanging Self that is one with Brahman (absolute reality). It was never born and never dies; it only appears to be bound.',
    practiceApproach: 'Multiple paths (yogas): Jnana (knowledge), Bhakti (devotion), Karma (action), Raja (meditation). Self-inquiry: "Who am I?"',

    keyFigures: [
      { name: 'Adi Shankara', contribution: 'Systematized Advaita Vedanta (non-dual teaching)' },
      { name: 'Patanjali', contribution: 'Codified Yoga Sutras' },
      { name: 'Ramana Maharshi', contribution: 'Modern master of self-inquiry' },
    ],

    connections: [
      { targetId: 'buddhism', type: 'direct', description: 'Buddhism emerged from the Vedic context, accepting some concepts while rejecting the Atman' },
      { targetId: 'sufism', type: 'influenced', description: 'Sufi masters in India engaged deeply with Vedantic ideas' },
      { targetId: 'gurdjieff', type: 'influenced', description: 'Gurdjieff studied Hindu teachings and incorporated concepts of essence' },
    ],

    enneagramConnection: {
      strength: 'strong',
      description: 'The Vedantic distinction between Atman (essence) and Ahamkara (ego) directly parallels the Enneagram\'s essence vs. personality framework.',
      sharedConcepts: ['Essence vs. ego distinction', 'Forgetting true nature', 'Multiple paths to awakening', 'Identification as root problem'],
      differences: ['No 9-fold typology', 'Metaphysical framework of Brahman', 'Reincarnation central'],
    },

    keyTexts: ['Upanishads', 'Bhagavad Gita', 'Yoga Sutras', 'Vivekachudamani'],
    practices: ['Self-inquiry (Atma Vichara)', 'Meditation', 'Yoga', 'Mantra', 'Devotional practice'],
    quote: {
      text: 'You are not a drop in the ocean. You are the entire ocean in a drop.',
      attribution: 'Rumi (expressing a Vedantic idea)',
    },
  },

  // ============================================
  // CHINESE TRADITIONS
  // ============================================
  {
    id: 'iching',
    name: 'I Ching',
    subtitle: 'The Book of Changes',
    era: '1200 BCE - present',
    yearStart: -1200,
    yearEnd: null,
    region: 'China',
    symbol: '☯',
    color: '#2D5A27',

    historicalVerification: {
      status: 'verified',
      summary: 'Archaeological evidence confirms ~3000 year antiquity',
      details: 'The Zhou Yi core text dates to the late 9th century BCE, with foundational elements (oracle bone divination) dating to the 12th century BCE. One of the oldest continuously used texts in human history.',
      sources: ['Zhou dynasty oracle bones (12th century BCE)', 'Richard Wilhelm translation (1923)', 'Edward Shaughnessy - I Ching: The Classic of Changes'],
    },

    coreInsight: 'Reality is constant change. Wisdom lies in understanding the patterns of change and aligning with them rather than resisting.',
    keyTeaching: 'The 64 hexagrams represent all possible situations in life, arising from the interplay of yin and yang. By understanding which phase you are in, you can act appropriately. The only constant is change itself.',
    viewOfEgo: 'Not explicitly addressed, but the concept of forcing outcomes vs. flowing with change implies ego as that which resists natural process.',
    viewOfEssence: 'The Tao that moves through all change — the unchanging principle behind all changing phenomena.',
    practiceApproach: 'Divination as a tool for self-reflection, study of the hexagrams, cultivating flexibility and responsiveness.',

    keyFigures: [
      { name: 'Fu Xi', contribution: 'Legendary creator of the eight trigrams' },
      { name: 'King Wen', contribution: 'Arranged the 64 hexagrams' },
      { name: 'Confucius', contribution: 'Added philosophical commentaries' },
    ],

    connections: [
      { targetId: 'taoism', type: 'direct', description: 'The I Ching is foundational to Taoist philosophy and practice' },
      { targetId: 'gurdjieff', type: 'parallel', description: 'Gurdjieff\'s Law of Seven and Law of Three echo the I Ching\'s understanding of process' },
    ],

    enneagramConnection: {
      strength: 'moderate',
      description: 'The 8 trigrams plus the center (Tai Chi) give 9 fundamental positions. The interplay of yin/yang parallels the Enneagram\'s dynamic movement.',
      sharedConcepts: ['9 as significant number (8+1)', 'Dynamic rather than static system', 'Patterns of change and development'],
      differences: ['Binary (yin/yang) vs. ternary (three centers)', 'Situational rather than typological', 'Divination-focused'],
    },

    keyTexts: ['I Ching (Zhouyi)', 'Ten Wings (commentaries)'],
    practices: ['Hexagram consultation', 'Contemplation of change', 'Study of yin-yang dynamics'],
    quote: {
      text: 'Heaven and earth are in accord, and all things are in harmony.',
      attribution: 'I Ching, Hexagram 11 (T\'ai / Peace)',
    },
  },

  {
    id: 'taoism',
    name: 'Taoism',
    subtitle: 'Wu Wei and the watercourse way',
    era: '500 BCE - present',
    yearStart: -500,
    yearEnd: null,
    region: 'China',
    symbol: '道',
    color: '#1A5F7A',

    historicalVerification: {
      status: 'verified',
      summary: 'Well-documented philosophical tradition',
      details: 'Tao Te Ching and other texts provide extensive documentation. Influenced by I Ching. Later interacted with Buddhism to create Chan/Zen.',
      sources: ['Tao Te Ching (4th century BCE)', 'Zhuangzi'],
    },

    coreInsight: 'The Tao (Way) flows through everything. Suffering comes from forcing, resisting, and acting against natural flow. Wisdom is Wu Wei — effortless action aligned with the Tao.',
    keyTeaching: 'Be like water — soft yet powerful, yielding yet persistent. The sage acts without forcing, teaches without speaking, accomplishes without claiming credit. Return to the "uncarved block" (Pu) — your original simplicity before conditioning.',
    viewOfEgo: 'The ego is that which forces, grasps, resists, and acts against the natural flow. It creates artificial distinctions and preferences that cause suffering.',
    viewOfEssence: 'Te (virtue/power) — your natural way of being when aligned with the Tao. Not a "self" to return to, but a flow to surrender into.',
    practiceApproach: 'Wu Wei (non-forcing action), simplicity, naturalness, meditation, qigong, observing nature.',

    keyFigures: [
      { name: 'Lao Tzu', contribution: 'Traditional author of the Tao Te Ching' },
      { name: 'Chuang Tzu', contribution: 'Expanded Taoist philosophy with humor and paradox' },
      { name: 'Lieh Tzu', contribution: 'Practical Taoist teachings' },
    ],

    connections: [
      { targetId: 'iching', type: 'direct', description: 'The I Ching provides the cosmological foundation for Taoist thought' },
      { targetId: 'buddhism', type: 'influenced', description: 'Buddhism and Taoism deeply influenced each other in China, producing Chan/Zen' },
      { targetId: 'gurdjieff', type: 'parallel', description: 'Gurdjieff\'s concept of flowing vs. forcing echoes Wu Wei' },
    ],

    enneagramConnection: {
      strength: 'strong',
      description: 'The Dao Path is already integrated into your app. Wu Wei offers a powerful framework for releasing type fixation — each type has a specific way of "forcing" that Taoism can address.',
      sharedConcepts: ['Return to original nature', 'Release of forcing/grasping', 'Three energies (yin, yang, balance)', 'Flow vs. fixation'],
      differences: ['No typology of ego patterns', 'Impersonal cosmic principle', 'Less psychological, more philosophical'],
    },

    keyTexts: ['Tao Te Ching', 'Chuang Tzu', 'Lieh Tzu', 'The Secret of the Golden Flower'],
    practices: ['Wu Wei (non-forcing)', 'Meditation', 'Qigong/Tai Chi', 'Simplification of life', 'Nature observation'],
    quote: {
      text: 'The softest thing in the universe overcomes the hardest thing in the universe.',
      attribution: 'Lao Tzu, Tao Te Ching',
    },
  },

  // ============================================
  // BUDDHISM
  // ============================================
  {
    id: 'buddhism',
    name: 'Buddhism',
    subtitle: 'The end of suffering through seeing clearly',
    era: '500 BCE - present',
    yearStart: -500,
    yearEnd: null,
    region: 'India, then Asia-wide',
    symbol: '☸',
    color: '#FFD700',

    historicalVerification: {
      status: 'verified',
      summary: 'Well-documented emergence from Vedic tradition',
      details: 'Buddhism emerged from Vedic traditions (6th century BCE). Extensive textual and archaeological evidence. Later spread to China and merged with Taoism to form Chan/Zen.',
      sources: ['Pali Canon', 'Rhys Davids - Buddhist India', 'Archaeological evidence'],
    },

    coreInsight: 'Suffering (dukkha) arises from craving and clinging, which arise from the illusion of a permanent self. There is no self to protect or enhance — seeing this clearly brings liberation.',
    keyTeaching: 'The Four Noble Truths: Life involves suffering; suffering arises from craving; suffering can end; the Eightfold Path leads to its end. Anatta (no-self): What you take to be "you" is a constantly changing process, not a fixed entity.',
    viewOfEgo: 'The ego is a useful fiction that becomes problematic when believed in absolutely. The "self" is actually five aggregates (skandhas) in constant flux — form, sensation, perception, mental formations, consciousness.',
    viewOfEssence: 'Here Buddhism diverges from other traditions: there is no eternal essence or true self to return to. Buddha-nature (in Mahayana) is not a "thing" but the inherent capacity for awakening — emptiness itself.',
    practiceApproach: 'Meditation (shamatha and vipassana), ethical conduct, wisdom study, mindfulness in daily life.',

    keyFigures: [
      { name: 'Gautama Buddha', contribution: 'Founded Buddhism, taught the Middle Way' },
      { name: 'Nagarjuna', contribution: 'Developed Madhyamaka (Middle Way) philosophy of emptiness' },
      { name: 'Bodhidharma', contribution: 'Brought Chan/Zen to China' },
    ],

    connections: [
      { targetId: 'vedic', type: 'direct', description: 'Buddhism emerged from the Vedic context but rejected the concept of Atman (eternal self)' },
      { targetId: 'taoism', type: 'influenced', description: 'Buddhism and Taoism merged in China to create Chan/Zen' },
      { targetId: 'gurdjieff', type: 'parallel', description: 'The "machine" metaphor and self-observation parallel Buddhist mindfulness' },
    ],

    enneagramConnection: {
      strength: 'strong',
      description: 'The three poisons (greed, hatred, delusion) map to the three Enneagram centers. Mindfulness provides a practice for observing type patterns without identification.',
      sharedConcepts: ['Three poisons ≈ three centers', 'Identification as root problem', 'Observation without judgment', 'Compassion for self and others'],
      differences: ['No "essence" to return to (anatta)', 'No permanent self at all', 'Less typological, more universal'],
    },

    keyTexts: ['Dhammapada', 'Heart Sutra', 'Diamond Sutra', 'Tibetan Book of the Dead'],
    practices: ['Vipassana (insight meditation)', 'Shamatha (calm abiding)', 'Mindfulness', 'Loving-kindness (metta)', 'Tonglen'],
    quote: {
      text: 'You yourself, as much as anybody in the entire universe, deserve your love and affection.',
      attribution: 'Buddha',
    },
  },

  // ============================================
  // GREEK PHILOSOPHY
  // ============================================
  {
    id: 'pythagoras',
    name: 'Pythagoreanism',
    subtitle: 'Number, harmony, and the music of the spheres',
    era: '570-490 BCE',
    yearStart: -570,
    yearEnd: -300,
    region: 'Greece/Southern Italy',
    symbol: '⍟',
    color: '#6B5B95',

    historicalVerification: {
      status: 'plausible',
      summary: 'Ancient figure with documented mathematical legacy',
      details: 'Pythagoras reportedly studied in Egypt and Babylon. Mathematical contributions are documented. Claims of esoteric teachings are plausible but harder to verify.',
      sources: ['Diogenes Laertius', 'Iamblichus - Life of Pythagoras'],
    },

    coreInsight: 'All is number. Mathematical relationships reveal the hidden harmony of the cosmos. The soul can be purified through understanding these principles.',
    keyTeaching: 'The universe is ordered by mathematical ratios (as in musical harmony). The soul is immortal and undergoes reincarnation. Through philosophical study and ethical living, the soul can purify itself and return to the divine.',
    viewOfEgo: 'The "lower soul" bound to bodily desires and the material world, which must be purified through discipline and philosophy.',
    viewOfEssence: 'The "higher soul" — rational, immortal, connected to cosmic harmony. The Ennead (9) as the number of completion and return.',
    practiceApproach: 'Mathematical study, musical harmony, ethical community living, vegetarianism, silence, self-examination.',

    keyFigures: [
      { name: 'Pythagoras', contribution: 'Founded the school, synthesized Egyptian and Babylonian wisdom' },
      { name: 'Philolaus', contribution: 'Preserved and transmitted Pythagorean teachings' },
    ],

    connections: [
      { targetId: 'mesopotamia', type: 'influenced', description: 'Pythagoras studied Babylonian mathematics and astronomy' },
      { targetId: 'egypt', type: 'influenced', description: 'Pythagoras reportedly spent 22 years in Egyptian temples' },
      { targetId: 'plato', type: 'direct', description: 'Plato was deeply influenced by Pythagorean ideas' },
    ],

    enneagramConnection: {
      strength: 'moderate',
      description: 'The Pythagorean Ennead (group of nine) and the mystical significance of 9 as the number of completion may be ancestral to the Enneagram symbol.',
      sharedConcepts: ['The Ennead (9)', 'Sacred geometry', 'Soul purification', 'Hidden order in personality'],
      differences: ['No psychological typology', 'Focus on mathematics rather than inner work', 'Less about ego observation'],
    },

    keyTexts: ['Golden Verses of Pythagoras', 'Fragments of Philolaus', 'Later Neoplatonic summaries'],
    practices: ['Mathematical contemplation', 'Musical study', 'Ethical self-examination', 'Community living'],
    quote: {
      text: 'Number is the ruler of forms and ideas, and the cause of gods and demons.',
      attribution: 'Pythagoras',
    },
  },

  {
    id: 'plato',
    name: 'Platonism & Neoplatonism',
    subtitle: 'The soul\'s ascent to the Good',
    era: '400 BCE - 500 CE',
    yearStart: -400,
    yearEnd: 500,
    region: 'Greece/Mediterranean',
    symbol: 'Φ',
    color: '#4A6FA5',

    historicalVerification: {
      status: 'verified',
      summary: 'Foundational Western philosophy with documented influence',
      details: 'Plotinus\'s Enneads (3rd century CE) shaped Kabbalah, Christian mysticism, and Sufism. Neoplatonic concepts like emanation are evident across these traditions.',
      sources: ['Plato - Republic, Phaedrus', 'Plotinus - Enneads', 'Moshe Idel - Kabbalah: New Perspectives'],
    },

    coreInsight: 'The visible world is a shadow of higher reality (the Forms). The soul has fallen from divine contemplation into material existence and can ascend back through philosophy.',
    keyTeaching: 'The soul has three parts: reason, spirit, and appetite (head, heart, gut). Virtue is the harmony of these parts under reason\'s guidance. The philosopher\'s task is to remember (anamnesis) what the soul knew before birth.',
    viewOfEgo: 'The lower parts of the soul (appetite, unexamined spirit) that pull us toward material concerns and away from truth.',
    viewOfEssence: 'The rational soul that can contemplate the Forms, especially the Form of the Good. In Neoplatonism: the One from which all emanates and to which all returns.',
    practiceApproach: 'Philosophical dialogue, contemplation of beauty and truth, ethical living, mathematical study.',

    keyFigures: [
      { name: 'Plato', contribution: 'Developed the theory of Forms and tripartite soul' },
      { name: 'Plotinus', contribution: 'Founded Neoplatonism, described the soul\'s ascent to the One' },
      { name: 'Proclus', contribution: 'Systematized Neoplatonic philosophy' },
    ],

    connections: [
      { targetId: 'pythagoras', type: 'direct', description: 'Plato was deeply influenced by Pythagorean mathematics and mysticism' },
      { targetId: 'christianity', type: 'influenced', description: 'Christian theology heavily incorporated Neoplatonic ideas' },
      { targetId: 'sufism', type: 'influenced', description: 'Islamic philosophy preserved and developed Neoplatonic thought' },
    ],

    enneagramConnection: {
      strength: 'strong',
      description: 'Plato\'s tripartite soul (reason, spirit, appetite) directly maps to the Enneagram\'s three centers (head, heart, gut).',
      sharedConcepts: ['Three centers/parts of soul', 'Fall and return', 'Higher and lower self', 'Virtue as integration'],
      differences: ['No 9-fold typology', 'More metaphysical than psychological', 'Reason privileged over other centers'],
    },

    keyTexts: ['Republic', 'Phaedrus', 'Symposium', 'Plotinus\'s Enneads'],
    practices: ['Philosophical dialogue', 'Contemplation', 'Study of mathematics', 'Ethical self-examination'],
    quote: {
      text: 'The soul takes nothing with her to the other world but her education and culture.',
      attribution: 'Plato',
    },
  },

  // ============================================
  // STOICISM
  // ============================================
  {
    id: 'stoicism',
    name: 'Stoicism',
    subtitle: 'Virtue, equanimity, and what is up to us',
    era: '300 BCE - 200 CE (+ modern revival)',
    yearStart: -300,
    yearEnd: null,
    region: 'Greece/Rome',
    symbol: 'Σ',
    color: '#5C6B73',

    historicalVerification: {
      status: 'verified',
      summary: 'Well-documented philosophical school',
      details: 'Extensive primary sources from Marcus Aurelius, Seneca, Epictetus. Clear philosophical lineage. Parallel insights to Enneagram about passion/virtue, not direct connection.',
      sources: ['Marcus Aurelius - Meditations', 'Seneca - Letters', 'Epictetus - Discourses'],
    },

    coreInsight: 'We suffer not from events but from our judgments about them. Focus on what is "up to us" (our responses) and accept what is not (external events). Virtue is the only true good.',
    keyTeaching: 'The dichotomy of control: some things are in our power (opinions, impulses, desires) and some are not (body, reputation, status). Freedom comes from focusing only on what is ours to control. Live according to nature (reason/logos).',
    viewOfEgo: 'The undisciplined mind that attaches to externals, is enslaved by passions, and makes faulty judgments. Not inherently evil, but untrained.',
    viewOfEssence: 'The ruling faculty (hegemonikon) — the rational soul that can align with universal reason (Logos). Not a hidden self to discover, but a capacity to develop.',
    practiceApproach: 'Daily self-examination, negative visualization, reframing judgments, practicing discomfort, journaling.',

    keyFigures: [
      { name: 'Zeno of Citium', contribution: 'Founded Stoicism' },
      { name: 'Epictetus', contribution: 'Taught that philosophy is practice, not theory' },
      { name: 'Marcus Aurelius', contribution: 'Applied Stoicism while ruling an empire' },
      { name: 'Seneca', contribution: 'Made Stoicism practical and accessible' },
    ],

    connections: [
      { targetId: 'plato', type: 'influenced', description: 'Stoics engaged with and modified Platonic ideas' },
      { targetId: 'christianity', type: 'influenced', description: 'Early Christianity absorbed Stoic ethics and terminology' },
      { targetId: 'gurdjieff', type: 'parallel', description: 'Self-observation and "not identifying" echo Stoic practice' },
    ],

    enneagramConnection: {
      strength: 'moderate',
      description: 'Stoic practice of observing judgments and not identifying with passions parallels Enneagram work. The vice-virtue framework resonates with Stoic ethics.',
      sharedConcepts: ['Passions as root of suffering', 'Virtue as goal', 'Self-observation', 'Non-identification with reactions'],
      differences: ['No typology', 'Less about transformation, more about management', 'Accepts the self as rational agent'],
    },

    keyTexts: ['Meditations (Marcus Aurelius)', 'Enchiridion (Epictetus)', 'Letters (Seneca)', 'Discourses (Epictetus)'],
    practices: ['Morning/evening review', 'Negative visualization', 'View from above', 'Journaling', 'Voluntary discomfort'],
    quote: {
      text: 'It is not things that disturb us, but our judgments about things.',
      attribution: 'Epictetus',
    },
  },

  // ============================================
  // CHRISTIAN MYSTICISM
  // ============================================
  {
    id: 'christianity',
    name: 'Christian Mysticism',
    subtitle: 'Death of the ego, union with God',
    era: '200 CE - present',
    yearStart: 200,
    yearEnd: null,
    region: 'Mediterranean, then global',
    symbol: '☦',
    color: '#8B0000',

    historicalVerification: {
      status: 'verified',
      summary: 'Documented Neoplatonic influence',
      details: 'Early Christianity shaped by Neoplatonism (Pseudo-Dionysius, Augustine). Evagrius Ponticus (4th century) developed the Eight Logismoi - foundational to later vice/virtue frameworks. Well-documented mystical tradition.',
      sources: ['Pseudo-Dionysius', 'Meister Eckhart', 'Cloud of Unknowing', 'Evagrius Ponticus'],
    },

    coreInsight: 'The false self must die so the true self in Christ can live. Through surrender, contemplation, and grace, the soul can achieve union with God.',
    keyTeaching: 'Kenosis (self-emptying) following Christ\'s example. The "old man" (ego, false self) must be crucified so the "new man" can arise. "Not I, but Christ in me." The Dark Night of the Soul purifies attachment.',
    viewOfEgo: 'The "old Adam," the fallen self that is prideful, self-centered, and separated from God. Not the true self, but a distortion caused by sin/forgetting.',
    viewOfEssence: 'The imago Dei (image of God) in every person, obscured but not destroyed by the fall. The true self is found in union with Christ/God.',
    practiceApproach: 'Contemplative prayer, lectio divina, surrender, service, participation in sacraments.',

    keyFigures: [
      { name: 'Desert Fathers (Evagrius)', contribution: 'Identified 8 deadly thoughts, precursor to the passions' },
      { name: 'Meister Eckhart', contribution: 'Taught radical letting go (Gelassenheit)' },
      { name: 'John of the Cross', contribution: 'Mapped the Dark Night of the Soul' },
      { name: 'Thomas Merton', contribution: 'Bridged contemplative Christianity with Eastern wisdom' },
    ],

    connections: [
      { targetId: 'plato', type: 'influenced', description: 'Neoplatonism deeply shaped Christian theology and mysticism' },
      { targetId: 'sufism', type: 'parallel', description: 'Christian and Sufi mystics developed similar practices and language' },
      { targetId: 'gurdjieff', type: 'influenced', description: 'Gurdjieff drew on Eastern Orthodox and esoteric Christian sources' },
    ],

    enneagramConnection: {
      strength: 'direct',
      description: 'The Desert Fathers\' 8 deadly thoughts became the 7 deadly sins, which became the 9 Enneagram passions. This is one of the clearest historical connections.',
      sharedConcepts: ['Passions/vices', 'Virtues as goal', 'Death of ego for rebirth', 'Levels of spiritual development'],
      differences: ['Theistic framework', 'Grace as necessary (not just effort)', 'Less typological, more universal path'],
    },

    keyTexts: ['Philokalia', 'The Cloud of Unknowing', 'Dark Night of the Soul', 'Meister Eckhart\'s sermons'],
    practices: ['Centering prayer', 'Lectio divina', 'Examen', 'Contemplation', 'Jesus prayer'],
    quote: {
      text: 'God is at home; it is we who have gone out for a walk.',
      attribution: 'Meister Eckhart',
    },
  },

  // ============================================
  // SUFISM
  // ============================================
  {
    id: 'sufism',
    name: 'Sufism',
    subtitle: 'Remembrance, longing, and union with the Beloved',
    era: '800 CE - present',
    yearStart: 800,
    yearEnd: null,
    region: 'Middle East, Central Asia, global',
    symbol: '☪',
    color: '#006400',

    historicalVerification: {
      status: 'verified',
      summary: 'Well-documented mystical tradition; Enneagram personality link is plausible but debated',
      details: 'Sufism as a tradition is well-documented. The "nafs" (ego states) concept exists but typically has 3-7 stages, NOT 9 types. Claims of transmitting nine personality types to Gurdjieff/Ichazo are unverified. Gurdjieff likely incorporated Sufi IDEAS (not personality types) into his work.',
      sources: ['Ibn Arabi - Fusus al-Hikam', 'Rumi - Masnavi', 'Al-Ghazali'],
    },

    coreInsight: 'You have forgotten your true nature and your origin in the Divine. The path is one of remembrance (dhikr), purifying the ego (nafs), and returning to union with the Beloved.',
    keyTeaching: 'The human soul has descended from divine unity into the illusion of separation. The nafs (ego) has multiple levels, from commanding evil to being at peace. Through practices of remembrance and surrender, the veils fall away and union is revealed.',
    viewOfEgo: 'The nafs — the commanding self that creates the illusion of separation from God. It has seven levels, from base (nafs al-ammara) to purified (nafs al-safiya).',
    viewOfEssence: 'The ruh (spirit) — the divine breath in each person, always already connected to Allah. Fitra — the original nature, the innate knowledge of God.',
    practiceApproach: 'Dhikr (remembrance), muraqaba (meditation), service to a sheikh, poetry and music, whirling, breath practices.',

    keyFigures: [
      { name: 'Rumi', contribution: 'Expressed Sufi love mysticism through poetry' },
      { name: 'Ibn Arabi', contribution: 'Developed the metaphysics of unity of being' },
      { name: 'Al-Ghazali', contribution: 'Integrated Sufism with mainstream Islam' },
      { name: 'Gurdjieff\'s teachers', contribution: 'Possibly transmitted the Enneagram symbol' },
    ],

    connections: [
      { targetId: 'plato', type: 'influenced', description: 'Sufis preserved and developed Neoplatonic philosophy' },
      { targetId: 'vedic', type: 'influenced', description: 'Sufi masters in India engaged with Vedantic ideas' },
      { targetId: 'gurdjieff', type: 'direct', description: 'Gurdjieff almost certainly encountered Sufi teachings; the Enneagram may have Sufi origins' },
    ],

    enneagramConnection: {
      strength: 'direct',
      description: 'The most likely direct ancestor of the Enneagram. The 9 points may represent divine attributes. The nafs levels parallel integration levels. Gurdjieff\'s source was probably Sufi.',
      sharedConcepts: ['9 points/attributes', 'Levels of ego (nafs)', 'Remembrance vs. forgetting', 'Inner work in community'],
      differences: ['Islamic theological context', 'Devotional/love-centered', 'Sheikh-student relationship central'],
    },

    keyTexts: ['Masnavi (Rumi)', 'Fusus al-Hikam (Ibn Arabi)', 'Conference of the Birds (Attar)'],
    practices: ['Dhikr (remembrance)', 'Muraqaba (meditation)', 'Sama (sacred music/dance)', 'Service', 'Breath practices'],
    quote: {
      text: 'Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.',
      attribution: 'Rumi',
    },
  },

  // ============================================
  // KABBALAH
  // ============================================
  {
    id: 'kabbalah',
    name: 'Kabbalah',
    subtitle: 'The Tree of Life and return to Ein Sof',
    era: '1200 CE - present',
    yearStart: 1200,
    yearEnd: null,
    region: 'Spain, then global Jewish diaspora',
    symbol: '✡',
    color: '#4169E1',

    historicalVerification: {
      status: 'verified',
      summary: 'Documented Neoplatonic influence',
      details: 'Kabbalah shows clear Neoplatonic influence (via Isaac the Blind, 13th century). The Tree of Life (10 Sefirot) has structural parallels to Enneagram but is a different system. Ichazo referenced Kabbalah in his synthesis.',
      sources: ['Zohar', 'Sefer Yetzirah', 'Moshe Idel - Kabbalah: New Perspectives'],
    },

    coreInsight: 'Creation emanated from the infinite (Ein Sof) through ten sefirot. The soul has descended through these levels and can ascend back through contemplation and righteous action.',
    keyTeaching: 'The Tree of Life maps the structure of reality and the soul. Each of the 10 sefirot represents a divine attribute and a level of consciousness. Through tikkun (repair), we restore the sparks of divine light scattered in creation.',
    viewOfEgo: 'The klipot (shells/husks) that obscure the divine light within. The yetzer hara (evil inclination) that pulls toward selfishness.',
    viewOfEssence: 'The neshamah — the divine soul, a spark of Ein Sof. Always connected to the infinite, even when obscured.',
    practiceApproach: 'Study of Torah and Kabbalistic texts, meditation on the sefirot, ethical action, prayer.',

    keyFigures: [
      { name: 'Isaac Luria', contribution: 'Developed Lurianic Kabbalah and the concept of tikkun' },
      { name: 'Moses de Leon', contribution: 'Compiled/wrote the Zohar' },
      { name: 'Abraham Abulafia', contribution: 'Developed ecstatic/prophetic Kabbalah' },
    ],

    connections: [
      { targetId: 'plato', type: 'influenced', description: 'Kabbalah incorporated Neoplatonic emanation theory' },
      { targetId: 'sufism', type: 'parallel', description: 'Kabbalah and Sufism developed in dialogue in medieval Spain' },
      { targetId: 'gurdjieff', type: 'parallel', description: 'The Tree of Life and Enneagram are sometimes compared as maps of consciousness' },
    ],

    enneagramConnection: {
      strength: 'moderate',
      description: 'Both are geometric maps of consciousness with numbered points. Some teachers have mapped the sefirot to Enneagram points, though this is modern synthesis, not historical.',
      sharedConcepts: ['Numbered map of consciousness', 'Levels of soul', 'Descent and return', 'Inner geometric symbolism'],
      differences: ['10 sefirot vs. 9 points', 'Jewish theological context', 'Less typological, more cosmological'],
    },

    keyTexts: ['Zohar', 'Sefer Yetzirah', 'Tanya', 'Writings of Isaac Luria'],
    practices: ['Meditation on sefirot', 'Torah study', 'Ethical action', 'Prayer with kavvanah (intention)'],
    quote: {
      text: 'Every blade of grass has its angel that bends over it and whispers, "Grow, grow."',
      attribution: 'Talmud (Kabbalistic interpretation)',
    },
  },

  // ============================================
  // FOURTH WAY / GURDJIEFF
  // ============================================
  {
    id: 'gurdjieff',
    name: 'Fourth Way / Gurdjieff',
    subtitle: 'Waking up from the machine',
    era: '1910-1949',
    yearStart: 1910,
    yearEnd: 1949,
    region: 'Russia, France, global',
    symbol: '⬡',
    color: '#8B4513',

    historicalVerification: {
      status: 'plausible',
      summary: 'Introduced symbol to West; used for cosmic processes, NOT personality',
      details: 'Gurdjieff introduced the 9-pointed Enneagram symbol to the West (circa 1916). He taught it as representing the Law of Three and Law of Seven - cosmic/process models. He NEVER used it for personality typing. His claims of learning from Sufi brotherhoods are unverifiable.',
      sources: ['Gurdjieff - All and Everything', 'P.D. Ouspensky - In Search of the Miraculous'],
    },

    coreInsight: 'Man is a machine — asleep, reactive, mechanical. But a machine that can know it is a machine can cease to be a machine. Self-observation reveals our mechanicalness; self-remembering awakens essence.',
    keyTeaching: 'We have no unified "I" — just many contradictory "I\'s" that take turns. Personality (acquired) has buried essence (innate). Through the "work" — self-observation, self-remembering, intentional suffering — we can awaken.',
    viewOfEgo: 'Personality — the false self acquired through conditioning. Not bad in itself, but mistaken for who we are. Made up of many contradictory "I\'s" with no real unity.',
    viewOfEssence: 'What we were born with before conditioning — our real nature, capacities, type. Usually undeveloped because personality took over. The "real I" that can be developed through work.',
    practiceApproach: 'Self-observation, self-remembering, movements/sacred dances, intentional suffering, work in groups.',

    keyFigures: [
      { name: 'G.I. Gurdjieff', contribution: 'Brought the teaching to the West, possibly introduced the Enneagram symbol' },
      { name: 'P.D. Ouspensky', contribution: 'Systematized and wrote about Gurdjieff\'s ideas' },
      { name: 'J.G. Bennett', contribution: 'Developed the teaching further, explored Sufi connections' },
    ],

    connections: [
      { targetId: 'sufism', type: 'direct', description: 'Gurdjieff almost certainly studied with Sufi masters; the Enneagram symbol may be Sufi in origin' },
      { targetId: 'vedic', type: 'influenced', description: 'Gurdjieff incorporated Hindu concepts of essence and centers' },
      { targetId: 'christianity', type: 'influenced', description: 'Gurdjieff drew on Eastern Orthodox and esoteric Christian sources' },
      { targetId: 'ichazo', type: 'direct', description: 'Ichazo took the Enneagram symbol and developed the psychological typology' },
    ],

    enneagramConnection: {
      strength: 'direct',
      description: 'Gurdjieff introduced the Enneagram symbol to the West. His distinction between essence and personality is foundational to Enneagram work. He used the symbol for cosmic laws, not types.',
      sharedConcepts: ['The Enneagram symbol itself', 'Essence vs. personality', 'Three centers', 'Levels of consciousness', 'Mechanicalness'],
      differences: ['Gurdjieff didn\'t use it for personality types', 'More focus on Law of Seven and Law of Three', 'Demanding group work context'],
    },

    keyTexts: ['In Search of the Miraculous (Ouspensky)', 'Beelzebub\'s Tales', 'Meetings with Remarkable Men'],
    practices: ['Self-observation', 'Self-remembering', 'Movements/sacred dances', 'Sensing exercises', 'Group work'],
    quote: {
      text: 'Man is a machine, but a very peculiar machine. He is a machine which, in right circumstances, and with right treatment, can know that he is a machine, and having fully realized this, he may find the ways to cease to be a machine.',
      attribution: 'G.I. Gurdjieff',
    },
  },

  // ============================================
  // MODERN ENNEAGRAM
  // ============================================
  {
    id: 'ichazo',
    name: 'Arica / Ichazo',
    subtitle: 'The Enneagram of Personality emerges',
    era: '1960s-present',
    yearStart: 1960,
    yearEnd: null,
    region: 'Chile, then global',
    symbol: '⬡',
    color: '#9370DB',

    historicalVerification: {
      status: 'modern-synthesis',
      summary: 'Created the personality typology in the 1960s',
      details: 'Oscar Ichazo developed the Enneagram of Personality Types in the 1960s. He synthesized Gurdjieff\'s symbol with elements from Kabbalah, Greek philosophy, and his own insights. His claims of Sufi transmission are unverified and he gave conflicting accounts. Claudio Naranjo further developed the psychological descriptions using Freudian concepts and DSM categories.',
      sources: ['Arica School documents', 'Claudio Naranjo - Character and Neurosis'],
    },

    coreInsight: 'Each person has a specific "ego fixation" — one of nine ways that essence became obscured. By recognizing your fixation, you can dissolve it and return to essence.',
    keyTeaching: 'The nine points represent nine ego types, each with a passion (emotional driver), fixation (cognitive distortion), holy idea (essential truth), and virtue (liberated state). We fell from essence into ego; the work is to return.',
    viewOfEgo: 'One of nine specific fixations — predictable patterns of thought, feeling, and behavior that developed in childhood and now run automatically. A survival mechanism that became a prison.',
    viewOfEssence: 'Our original nature before the ego fixation developed. Contains all nine holy ideas in balance. Never actually lost, only obscured.',
    practiceApproach: 'Recognition of fixation, meditation, working with the body, group process.',

    keyFigures: [
      { name: 'Oscar Ichazo', contribution: 'Mapped the 9 fixations, passions, and virtues onto the Enneagram' },
      { name: 'Claudio Naranjo', contribution: 'Brought the Enneagram to psychology and the West Coast' },
      { name: 'Don Riso & Russ Hudson', contribution: 'Developed levels of development and detailed type descriptions' },
    ],

    connections: [
      { targetId: 'gurdjieff', type: 'direct', description: 'Ichazo took the symbol from Gurdjieff tradition and applied it to personality' },
      { targetId: 'sufism', type: 'influenced', description: 'Ichazo studied various esoteric traditions including Sufism' },
      { targetId: 'buddhism', type: 'influenced', description: 'Naranjo integrated Buddhist psychology with the Enneagram' },
    ],

    enneagramConnection: {
      strength: 'direct',
      description: 'This IS the modern Enneagram. Ichazo created the personality typology; Naranjo and others developed it further.',
      sharedConcepts: ['The complete system as we know it'],
      differences: ['N/A - this is the source'],
    },

    keyTexts: ['Character and Neurosis (Naranjo)', 'Personality Types (Riso/Hudson)', 'The Wisdom of the Enneagram'],
    practices: ['Type recognition', 'Observing fixation patterns', 'Working with passions and virtues', 'Integration practices'],
    quote: {
      text: 'The Enneagram is not a parlor game or a way to put people in boxes. It is a profound map of human consciousness and a guide to awakening.',
      attribution: 'Oscar Ichazo (paraphrased)',
    },
  },
];

// Helper functions
export function getTraditionById(id: string): WisdomTradition | undefined {
  return wisdomTraditions.find(t => t.id === id);
}

export function getTraditionsByEra(startYear: number, endYear: number): WisdomTradition[] {
  return wisdomTraditions.filter(t =>
    t.yearStart <= endYear && (t.yearEnd === null || t.yearEnd >= startYear)
  );
}

export function getDirectLineage(): WisdomTradition[] {
  // The traditions with direct historical connection to modern Enneagram
  return ['sufism', 'gurdjieff', 'ichazo'].map(id =>
    wisdomTraditions.find(t => t.id === id)!
  );
}

export function getConnectionsForTradition(id: string): Array<{
  tradition: WisdomTradition;
  connection: WisdomTradition['connections'][0];
}> {
  const tradition = getTraditionById(id);
  if (!tradition) return [];

  return tradition.connections
    .map(conn => ({
      tradition: getTraditionById(conn.targetId)!,
      connection: conn,
    }))
    .filter(c => c.tradition);
}
