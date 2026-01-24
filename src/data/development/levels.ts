import type { LevelOfDevelopment, TypeNumber, HealthLevel, HealthState } from '../../types';

// Comprehensive levels data - summarized for each type
// Full descriptions available in Riso-Hudson materials

export const levelsOfDevelopment: LevelOfDevelopment[] = [
  // TYPE 1 LEVELS
  {
    level: 1, state: 'healthy', type: 1,
    title: 'The Wise Realist',
    description: 'Accepting, wise, and discerning. Able to see the perfection in reality as it is.',
    characteristics: ['Accepting of self and others', 'Wise and discerning', 'Realistic idealism', 'Serene'],
    innerExperience: 'Reality is perfect as it is. I can accept myself and the world.'
  },
  {
    level: 2, state: 'healthy', type: 1,
    title: 'The Reasonable Person',
    description: 'Conscientious, ethical, and fair. Strong sense of right and wrong, truth and justice.',
    characteristics: ['Highly ethical', 'Fair and objective', 'Seeks truth', 'Personal integrity'],
    innerExperience: 'I want to do what is right and be a person of integrity.'
  },
  {
    level: 3, state: 'healthy', type: 1,
    title: 'The Principled Teacher',
    description: 'Orderly, self-disciplined, and purposeful. Works to improve themselves and the world.',
    characteristics: ['Self-disciplined', 'Purposeful action', 'Improves systems', 'Teaches by example'],
    innerExperience: 'I can work steadily to improve things through disciplined effort.'
  },
  {
    level: 4, state: 'average', type: 1,
    title: 'The Idealistic Reformer',
    description: 'Strives to be ideal, perfect. Fears being "bad" so becomes rigid about standards.',
    characteristics: ['Idealistic expectations', 'Obligated and dutiful', 'Beginning rigidity', 'Self-controlled'],
    innerExperience: 'I must try harder to be good enough. Standards matter.'
  },
  {
    level: 5, state: 'average', type: 1,
    title: 'The Orderly Person',
    description: 'Rigid, impersonal, and emotionally constricted. Organizes everything precisely.',
    characteristics: ['Rigid standards', 'Impersonal manner', 'Emotionally constricted', 'Workaholic'],
    innerExperience: 'Everything must be in order. I cannot let go or I will lose control.'
  },
  {
    level: 6, state: 'average', type: 1,
    title: 'The Judgmental Perfectionist',
    description: 'Critical, judgmental, and perfectionistic. Nothing is ever good enough.',
    characteristics: ['Highly critical', 'Perfectionistic', 'Scolding others', 'Tense and irritable'],
    innerExperience: 'Why can\'t others see what\'s wrong? Everything is flawed.'
  },
  {
    level: 7, state: 'unhealthy', type: 1,
    title: 'The Intolerant Misanthrope',
    description: 'Inflexible, self-righteous, and intolerant. Sees self as the arbiter of truth.',
    characteristics: ['Self-righteous', 'Intolerant', 'Inflexible', 'Vindictive'],
    innerExperience: 'I am right and everyone else is wrong. They deserve punishment.'
  },
  {
    level: 8, state: 'unhealthy', type: 1,
    title: 'The Obsessive Hypocrite',
    description: 'Obsessive, contradictory actions. Condemns others for what they do themselves.',
    characteristics: ['Obsessive', 'Hypocritical', 'Contradictory', 'Compulsive actions'],
    innerExperience: 'I am compelled to do what I know is wrong but cannot stop.'
  },
  {
    level: 9, state: 'unhealthy', type: 1,
    title: 'The Punitive Avenger',
    description: 'Cruel, punitive, and potentially violent. May destroy themselves to punish others.',
    characteristics: ['Cruel', 'Punitive', 'Self-destructive', 'Potential violence'],
    innerExperience: 'Everything must be destroyed and purified. Justice demands it.'
  },

  // TYPE 2 LEVELS
  {
    level: 1, state: 'healthy', type: 2,
    title: 'The Unconditionally Loving',
    description: 'Deeply unselfish, altruistic, and unconditional in their love. Humble and gracious.',
    characteristics: ['Unconditional love', 'Deeply altruistic', 'Humble', 'Nurturing without need'],
    innerExperience: 'Love flows through me freely. I love without needing anything back.'
  },
  {
    level: 2, state: 'healthy', type: 2,
    title: 'The Caring Person',
    description: 'Empathetic, compassionate, and feeling for others. Genuinely helpful and supportive.',
    characteristics: ['Deeply empathetic', 'Genuinely helpful', 'Warm and supportive', 'Good listener'],
    innerExperience: 'I feel others\' feelings and want to help ease their pain.'
  },
  {
    level: 3, state: 'healthy', type: 2,
    title: 'The Nurturing Helper',
    description: 'Encouraging, appreciative, and giving. Helps others grow and flourish.',
    characteristics: ['Encouraging', 'Appreciative of others', 'Generous', 'Helps others succeed'],
    innerExperience: 'I love helping others grow. Their success is my joy.'
  },
  {
    level: 4, state: 'average', type: 2,
    title: 'The Effusive Friend',
    description: 'Wants to be closer to others, so becomes people-pleasing and overly friendly.',
    characteristics: ['People-pleasing', 'Overly friendly', 'Talks about relationships', 'Flattering'],
    innerExperience: 'I want to be close to you. How can I make you need me?'
  },
  {
    level: 5, state: 'average', type: 2,
    title: 'The Possessive Intimate',
    description: 'Becomes possessive of loved ones, intrusive, and overly involved in others\' lives.',
    characteristics: ['Possessive', 'Intrusive', 'Needs to be needed', 'Smothering'],
    innerExperience: 'You need me. Let me show you how much I can do for you.'
  },
  {
    level: 6, state: 'average', type: 2,
    title: 'The Self-Important Saint',
    description: 'Entitled and self-satisfied about their helpfulness. Expects appreciation.',
    characteristics: ['Self-important', 'Entitled', 'Martyred', 'Self-satisfied'],
    innerExperience: 'After all I\'ve done! They should appreciate me more.'
  },
  {
    level: 7, state: 'unhealthy', type: 2,
    title: 'The Self-Deceptive Manipulator',
    description: 'Manipulative, guilt-tripping others. Cannot admit own needs but acts them out.',
    characteristics: ['Manipulative', 'Guilt-tripping', 'Coercive giving', 'Self-deceptive'],
    innerExperience: 'If they really loved me, they would give me what I need without asking.'
  },
  {
    level: 8, state: 'unhealthy', type: 2,
    title: 'The Coercive Dominator',
    description: 'Dominating and controlling, feels entitled to others\' lives. Obsessed with targets.',
    characteristics: ['Dominating', 'Controlling', 'Obsessive', 'Entitled'],
    innerExperience: 'They belong to me. I made them what they are.'
  },
  {
    level: 9, state: 'unhealthy', type: 2,
    title: 'The Psychosomatic Victim',
    description: 'Physical illness from repressed needs. May sabotage others if feeling rejected.',
    characteristics: ['Psychosomatic illness', 'Victim mentality', 'Potential sabotage', 'Breakdown'],
    innerExperience: 'No one loves me. I\'ve given everything and have nothing.'
  },

  // TYPE 3 LEVELS (condensed pattern continues)
  {
    level: 1, state: 'healthy', type: 3,
    title: 'The Authentic Self',
    description: 'Self-accepting and authentic, with genuine self-esteem. Inner-directed and charitable.',
    characteristics: ['Authentic', 'Self-accepting', 'Modest', 'Inner-directed'],
    innerExperience: 'I am valuable just as I am, regardless of achievements.'
  },
  {
    level: 2, state: 'healthy', type: 3,
    title: 'The Self-Assured Person',
    description: 'Self-assured, adaptable, and competent. Admirable qualities that inspire others.',
    characteristics: ['Self-assured', 'Adaptable', 'Genuinely competent', 'Inspiring'],
    innerExperience: 'I can adapt to achieve while staying true to myself.'
  },
  {
    level: 3, state: 'healthy', type: 3,
    title: 'The Outstanding Achiever',
    description: 'Ambitious, effective, and goal-oriented. Develops themselves and creates real value.',
    characteristics: ['Ambitious', 'Effective', 'Self-improving', 'Creates value'],
    innerExperience: 'I love developing my potential and creating excellence.'
  },
  {
    level: 4, state: 'average', type: 3,
    title: 'The Success-Oriented Performer',
    description: 'Concerned with performance and image. Begins to compare self with others.',
    characteristics: ['Performance-focused', 'Comparing', 'Image-conscious', 'Competitive'],
    innerExperience: 'How am I doing compared to others? Am I impressive enough?'
  },
  {
    level: 5, state: 'average', type: 3,
    title: 'The Image-Oriented Pragmatist',
    description: 'Pragmatic and efficient but increasingly focused on appearance over substance.',
    characteristics: ['Pragmatic', 'Efficient', 'Image-crafting', 'Superficial connections'],
    innerExperience: 'I need to look successful. Perception is reality.'
  },
  {
    level: 6, state: 'average', type: 3,
    title: 'The Self-Promoting Narcissist',
    description: 'Self-promoting, boastful, and grandiose. Arrogant and contemptuous of others.',
    characteristics: ['Self-promoting', 'Boastful', 'Grandiose', 'Arrogant'],
    innerExperience: 'I am special. Others should recognize my superiority.'
  },
  {
    level: 7, state: 'unhealthy', type: 3,
    title: 'The Exploitative Opportunist',
    description: 'Exploitative and deceptive. Will do whatever it takes to maintain success image.',
    characteristics: ['Exploitative', 'Deceptive', 'Opportunistic', 'Devious'],
    innerExperience: 'I\'ll do whatever it takes. Ethics are for losers.'
  },
  {
    level: 8, state: 'unhealthy', type: 3,
    title: 'The Malicious Deceiver',
    description: 'Duplicitous and malicious. May destroy others to preserve own image.',
    characteristics: ['Duplicitous', 'Malicious', 'Betraying', 'Sabotaging'],
    innerExperience: 'They cannot find out the truth. I\'ll destroy anyone who threatens my image.'
  },
  {
    level: 9, state: 'unhealthy', type: 3,
    title: 'The Monomaniacal Psychopath',
    description: 'Vindictive, relentless in destruction. Complete identity collapse possible.',
    characteristics: ['Vindictive', 'Relentless', 'Potentially violent', 'Complete breakdown'],
    innerExperience: 'Without my success, I am nothing. I must destroy all evidence of failure.'
  },

  // TYPE 4 LEVELS
  {
    level: 1, state: 'healthy', type: 4,
    title: 'The Inspired Creator',
    description: 'Profoundly creative and inspired. Transforms personal experience into universal art.',
    characteristics: ['Profoundly creative', 'Self-renewing', 'Universal vision', 'Inspired'],
    innerExperience: 'I can transform my experience into something beautiful and universal.'
  },
  {
    level: 2, state: 'healthy', type: 4,
    title: 'The Self-Aware Intuitive',
    description: 'Self-aware and introspective, honest about self. Sensitive and emotionally honest.',
    characteristics: ['Deeply self-aware', 'Emotionally honest', 'Intuitive', 'Authentic'],
    innerExperience: 'I know myself deeply and can be honest about what I find.'
  },
  {
    level: 3, state: 'healthy', type: 4,
    title: 'The Individualistic Creator',
    description: 'Creative, personal, and individualistic. Creates from personal experience.',
    characteristics: ['Highly creative', 'Individualistic', 'Personal expression', 'Aesthetic'],
    innerExperience: 'I create beauty from my unique inner world and experience.'
  },
  {
    level: 4, state: 'average', type: 4,
    title: 'The Imaginative Aesthete',
    description: 'Aesthetically oriented, lives in imagination. Withdraws to protect sensitivity.',
    characteristics: ['Highly imaginative', 'Aesthetically focused', 'Withdrawn', 'Romantic'],
    innerExperience: 'The inner world is more beautiful than external reality.'
  },
  {
    level: 5, state: 'average', type: 4,
    title: 'The Self-Absorbed Romantic',
    description: 'Self-absorbed and moody. Indulges in fantasies, melancholy, and longing.',
    characteristics: ['Self-absorbed', 'Moody', 'Longing', 'Melancholic'],
    innerExperience: 'Something essential is missing. I long for what I cannot have.'
  },
  {
    level: 6, state: 'average', type: 4,
    title: 'The Self-Indulgent Exception',
    description: 'Feels exempt from ordinary ways. Self-indulgent, temperamental, and hypersensitive.',
    characteristics: ['Self-indulgent', 'Temperamental', 'Feels exempt', 'Hypersensitive'],
    innerExperience: 'I am too special/damaged for ordinary rules to apply to me.'
  },
  {
    level: 7, state: 'unhealthy', type: 4,
    title: 'The Alienated Depressive',
    description: 'Depressed, alienated, and inhibited. Blocked and paralyzed, full of self-pity.',
    characteristics: ['Depressed', 'Alienated', 'Paralyzed', 'Self-pitying'],
    innerExperience: 'I am fundamentally defective and no one can understand my pain.'
  },
  {
    level: 8, state: 'unhealthy', type: 4,
    title: 'The Emotionally Tormented',
    description: 'Hate themselves and are ashamed of self. Self-destructive, tormented.',
    characteristics: ['Self-hating', 'Ashamed', 'Self-destructive', 'Tormented'],
    innerExperience: 'I hate what I am. I deserve to suffer for my defectiveness.'
  },
  {
    level: 9, state: 'unhealthy', type: 4,
    title: 'The Self-Destructive Person',
    description: 'Despairing, hopeless, and self-destructive. Complete despair and emotional collapse.',
    characteristics: ['Despairing', 'Hopeless', 'Suicidal', 'Complete collapse'],
    innerExperience: 'Life is unbearable. I am too damaged to exist.'
  },

  // TYPE 5 LEVELS
  {
    level: 1, state: 'healthy', type: 5,
    title: 'The Pioneering Visionary',
    description: 'Visionary, pioneering, and ahead of time. Sees reality with extraordinary depth.',
    characteristics: ['Visionary', 'Pioneering', 'Profound insight', 'Revolutionary'],
    innerExperience: 'I see into the nature of things with clarity and can share my vision.'
  },
  {
    level: 2, state: 'healthy', type: 5,
    title: 'The Perceptive Observer',
    description: 'Observant, perceptive, and curious. Concentrates deeply on areas of interest.',
    characteristics: ['Perceptive', 'Observant', 'Curious', 'Concentrated'],
    innerExperience: 'I love understanding how things work at a deep level.'
  },
  {
    level: 3, state: 'healthy', type: 5,
    title: 'The Focused Innovator',
    description: 'Innovative, analytical, and expert. Creates original work through focused attention.',
    characteristics: ['Innovative', 'Expert', 'Analytical', 'Original'],
    innerExperience: 'I can master complex systems and contribute original understanding.'
  },
  {
    level: 4, state: 'average', type: 5,
    title: 'The Studious Expert',
    description: 'Begins to specialize, becomes the expert. Increasingly detached from life.',
    characteristics: ['Specializing', 'Analytical', 'Detached', 'Collecting knowledge'],
    innerExperience: 'I need to know more before I can participate fully.'
  },
  {
    level: 5, state: 'average', type: 5,
    title: 'The Intense Conceptualizer',
    description: 'Preoccupied with visions and interpretations. Lives increasingly in the mind.',
    characteristics: ['Preoccupied', 'Interpreting', 'Disconnected', 'Provocative ideas'],
    innerExperience: 'The mind is safer than the world. I understand better than I engage.'
  },
  {
    level: 6, state: 'average', type: 5,
    title: 'The Provocative Cynic',
    description: 'Antagonistic, cynical, and argumentative. Reduces reality to abstractions.',
    characteristics: ['Cynical', 'Argumentative', 'Antagonistic', 'Reductionist'],
    innerExperience: 'Everyone is wrong and I can prove it. Nothing deserves respect.'
  },
  {
    level: 7, state: 'unhealthy', type: 5,
    title: 'The Isolated Nihilist',
    description: 'Isolating, eccentric, and nihilistic. Rejects all connection to reality.',
    characteristics: ['Isolated', 'Eccentric', 'Nihilistic', 'Rejecting'],
    innerExperience: 'Nothing is real or meaningful. I cut all ties with the world.'
  },
  {
    level: 8, state: 'unhealthy', type: 5,
    title: 'The Terrified Schizoid',
    description: 'Horrified by reality, terrified. May become schizoid, losing touch.',
    characteristics: ['Terrified', 'Schizoid', 'Phobic', 'Deranged'],
    innerExperience: 'Reality is hostile and overwhelming. I must hide or be destroyed.'
  },
  {
    level: 9, state: 'unhealthy', type: 5,
    title: 'The Imploding Person',
    description: 'Complete withdrawal from reality. Psychotic break or suicide possible.',
    characteristics: ['Complete withdrawal', 'Psychotic', 'Self-destructive', 'Annihilation'],
    innerExperience: 'I cannot exist in this reality. I must disappear completely.'
  },

  // TYPE 6 LEVELS
  {
    level: 1, state: 'healthy', type: 6,
    title: 'The Courageous Hero',
    description: 'Self-affirming, courageous, and independent. Trusts self and life deeply.',
    characteristics: ['Courageous', 'Self-affirming', 'Independent', 'Trusting'],
    innerExperience: 'I trust myself and life. I can handle whatever comes.'
  },
  {
    level: 2, state: 'healthy', type: 6,
    title: 'The Engaging Friend',
    description: 'Engaging, trustworthy, and responsible. Builds genuine security through connection.',
    characteristics: ['Trustworthy', 'Engaging', 'Responsible', 'Committed'],
    innerExperience: 'I can be relied upon. Connection with others creates real security.'
  },
  {
    level: 3, state: 'healthy', type: 6,
    title: 'The Committed Worker',
    description: 'Committed, hardworking, and cooperative. Dedicated to causes and people.',
    characteristics: ['Committed', 'Hardworking', 'Cooperative', 'Dedicated'],
    innerExperience: 'I am dedicated to what I believe in and the people I love.'
  },
  {
    level: 4, state: 'average', type: 6,
    title: 'The Dutiful Loyalist',
    description: 'Dutiful and compliant, but beginning to fear making decisions alone.',
    characteristics: ['Dutiful', 'Compliant', 'Seeks guidance', 'Hesitant'],
    innerExperience: 'I should follow the rules and check with authority to be sure.'
  },
  {
    level: 5, state: 'average', type: 6,
    title: 'The Ambivalent Pessimist',
    description: 'Ambivalent, indecisive, and pessimistic. Doubts self and others.',
    characteristics: ['Ambivalent', 'Indecisive', 'Pessimistic', 'Doubting'],
    innerExperience: 'I\'m not sure I can trust anyone, including myself.'
  },
  {
    level: 6, state: 'average', type: 6,
    title: 'The Authoritarian Rebel',
    description: 'Authoritarian or rebellious. Reacts against what threatens security.',
    characteristics: ['Authoritarian', 'Rebellious', 'Defensive', 'Aggressive'],
    innerExperience: 'Something is threatening me. I must submit or fight.'
  },
  {
    level: 7, state: 'unhealthy', type: 6,
    title: 'The Dependent Paranoid',
    description: 'Insecure, dependent, and paranoid. Sees threats everywhere.',
    characteristics: ['Insecure', 'Paranoid', 'Dependent', 'Panicking'],
    innerExperience: 'Everyone is against me. I cannot trust anyone or anything.'
  },
  {
    level: 8, state: 'unhealthy', type: 6,
    title: 'The Hysterical Persecutor',
    description: 'Hysterical, lashing out at perceived threats. May become the persecutor.',
    characteristics: ['Hysterical', 'Persecuting', 'Fanatic', 'Irrational'],
    innerExperience: 'They are all enemies. I must strike before they strike me.'
  },
  {
    level: 9, state: 'unhealthy', type: 6,
    title: 'The Self-Destroying Person',
    description: 'Self-punishing, masochistic. May bring about the very thing feared.',
    characteristics: ['Self-punishing', 'Masochistic', 'Suicidal', 'Self-fulfilling fears'],
    innerExperience: 'I deserve punishment. I have brought this on myself.'
  },

  // TYPE 7 LEVELS
  {
    level: 1, state: 'healthy', type: 7,
    title: 'The Ecstatic Appreciator',
    description: 'Profoundly grateful and appreciative. Finds wonder in simple things.',
    characteristics: ['Ecstatic', 'Grateful', 'Appreciative', 'Present'],
    innerExperience: 'Life is wonderful right now. Every moment is a gift.'
  },
  {
    level: 2, state: 'healthy', type: 7,
    title: 'The Free-Spirited Optimist',
    description: 'Responsive, enthusiastic, and spontaneous. Finds joy in experiences.',
    characteristics: ['Enthusiastic', 'Responsive', 'Spontaneous', 'Joyful'],
    innerExperience: 'I can respond to life with enthusiasm and genuine joy.'
  },
  {
    level: 3, state: 'healthy', type: 7,
    title: 'The Accomplished Generalist',
    description: 'Accomplished, versatile, and prolific. Creates valuable experiences.',
    characteristics: ['Accomplished', 'Versatile', 'Prolific', 'Productive'],
    innerExperience: 'I can accomplish many things and create real value.'
  },
  {
    level: 4, state: 'average', type: 7,
    title: 'The Experienced Sophisticate',
    description: 'Sophisticated and worldly, but beginning to seek constant stimulation.',
    characteristics: ['Sophisticated', 'Worldly', 'Consuming', 'Seeking variety'],
    innerExperience: 'There\'s so much to experience! I don\'t want to miss anything.'
  },
  {
    level: 5, state: 'average', type: 7,
    title: 'The Hyperactive Extrovert',
    description: 'Hyperactive, uninhibited, and scattered. Cannot settle or commit.',
    characteristics: ['Hyperactive', 'Uninhibited', 'Scattered', 'Non-committal'],
    innerExperience: 'I need more stimulation. Commitment feels like a trap.'
  },
  {
    level: 6, state: 'average', type: 7,
    title: 'The Excessive Hedonist',
    description: 'Excessive, self-centered, and demanding. Wants more of everything.',
    characteristics: ['Excessive', 'Self-centered', 'Demanding', 'Insatiable'],
    innerExperience: 'I need more! Nothing is enough. Give me what I want.'
  },
  {
    level: 7, state: 'unhealthy', type: 7,
    title: 'The Impulsive Escapist',
    description: 'Impulsive, infantile, and escapist. Cannot face reality or pain.',
    characteristics: ['Impulsive', 'Infantile', 'Escapist', 'Addictive'],
    innerExperience: 'I cannot face this pain. I must escape at any cost.'
  },
  {
    level: 8, state: 'unhealthy', type: 7,
    title: 'The Manic Compulsive',
    description: 'Manic, compulsive, and panic-stricken. Out of control in pursuit of escape.',
    characteristics: ['Manic', 'Compulsive', 'Panic-stricken', 'Out of control'],
    innerExperience: 'I\'m terrified. Must keep moving. Cannot stop or face myself.'
  },
  {
    level: 9, state: 'unhealthy', type: 7,
    title: 'The Overwhelmed Hysteric',
    description: 'Overwhelmed, hysterical, and desperate. Complete breakdown or reckless actions.',
    characteristics: ['Overwhelmed', 'Hysterical', 'Desperate', 'Destructive'],
    innerExperience: 'There\'s no way out. I am trapped in my own hell.'
  },

  // TYPE 8 LEVELS
  {
    level: 1, state: 'healthy', type: 8,
    title: 'The Magnanimous Heart',
    description: 'Magnanimous, heroic, and self-mastering. Uses power to protect and empower others.',
    characteristics: ['Magnanimous', 'Heroic', 'Self-mastering', 'Empowering'],
    innerExperience: 'My strength serves others. I can be vulnerable and still strong.'
  },
  {
    level: 2, state: 'healthy', type: 8,
    title: 'The Self-Confident Person',
    description: 'Self-confident, resourceful, and decisive. Leads by inspiring others.',
    characteristics: ['Self-confident', 'Resourceful', 'Decisive', 'Inspiring leader'],
    innerExperience: 'I can take charge and make things happen. Others can trust me.'
  },
  {
    level: 3, state: 'healthy', type: 8,
    title: 'The Constructive Leader',
    description: 'Constructive, enterprising, and honorable. Builds and creates through action.',
    characteristics: ['Constructive', 'Enterprising', 'Honorable', 'Protective'],
    innerExperience: 'I can build something important and protect what matters.'
  },
  {
    level: 4, state: 'average', type: 8,
    title: 'The Self-Sufficient Person',
    description: 'Self-sufficient and independent, but beginning to guard against vulnerability.',
    characteristics: ['Self-sufficient', 'Independent', 'Guarded', 'Pragmatic'],
    innerExperience: 'I don\'t need anyone. I can handle everything myself.'
  },
  {
    level: 5, state: 'average', type: 8,
    title: 'The Dominating Power',
    description: 'Dominating, confrontational, and aggressive. Expands control over environment.',
    characteristics: ['Dominating', 'Confrontational', 'Aggressive', 'Expansive'],
    innerExperience: 'I must control the situation before it controls me.'
  },
  {
    level: 6, state: 'average', type: 8,
    title: 'The Combative Antagonist',
    description: 'Combative, antagonistic, and intimidating. Creates adversaries to feel powerful.',
    characteristics: ['Combative', 'Antagonistic', 'Intimidating', 'Ruthless'],
    innerExperience: 'Everyone is a potential enemy. I must dominate or be dominated.'
  },
  {
    level: 7, state: 'unhealthy', type: 8,
    title: 'The Ruthless Tyrant',
    description: 'Ruthless, dictatorial, and potentially violent. Terrorizes others into submission.',
    characteristics: ['Ruthless', 'Dictatorial', 'Terrorizing', 'Destroying'],
    innerExperience: 'No one can stop me. I will crush anyone who opposes me.'
  },
  {
    level: 8, state: 'unhealthy', type: 8,
    title: 'The Megalomaniac',
    description: 'Megalomaniac, reckless, and destructive. Feels all-powerful and invincible.',
    characteristics: ['Megalomaniac', 'Reckless', 'Delusional', 'Omnipotent'],
    innerExperience: 'I am all-powerful. Rules don\'t apply to me.'
  },
  {
    level: 9, state: 'unhealthy', type: 8,
    title: 'The Violent Destroyer',
    description: 'Violent, murderous, and sociopathic. Complete destruction or self-destruction.',
    characteristics: ['Violent', 'Murderous', 'Sociopathic', 'Annihilating'],
    innerExperience: 'Destroy everything. If I go down, I take everyone with me.'
  },

  // TYPE 9 LEVELS
  {
    level: 1, state: 'healthy', type: 9,
    title: 'The Self-Possessed Guide',
    description: 'Self-possessed, present, and dynamic. Brings true peace and unity to situations.',
    characteristics: ['Self-possessed', 'Present', 'Dynamic', 'Unifying'],
    innerExperience: 'I am here, fully present. My presence brings peace.'
  },
  {
    level: 2, state: 'healthy', type: 9,
    title: 'The Receptive Person',
    description: 'Receptive, accepting, and trusting. Creates harmony through deep acceptance.',
    characteristics: ['Receptive', 'Accepting', 'Trusting', 'Optimistic'],
    innerExperience: 'I can receive life fully and accept what comes.'
  },
  {
    level: 3, state: 'healthy', type: 9,
    title: 'The Supportive Peacemaker',
    description: 'Supportive, patient, and unself-conscious. Genuinely supports and harmonizes.',
    characteristics: ['Supportive', 'Patient', 'Harmonizing', 'Unselfconscious'],
    innerExperience: 'I can support others and create real harmony.'
  },
  {
    level: 4, state: 'average', type: 9,
    title: 'The Accommodating Role-Player',
    description: 'Accommodating and agreeable, but beginning to subordinate self to keep peace.',
    characteristics: ['Accommodating', 'Agreeable', 'Subordinating self', 'Idealizing'],
    innerExperience: 'I should go along. It\'s easier not to make waves.'
  },
  {
    level: 5, state: 'average', type: 9,
    title: 'The Disengaged Participant',
    description: 'Disengaged, passive, and inattentive. Goes through motions without real presence.',
    characteristics: ['Disengaged', 'Passive', 'Inattentive', 'Uncommitted'],
    innerExperience: 'Nothing really matters. I\'ll just go through the motions.'
  },
  {
    level: 6, state: 'average', type: 9,
    title: 'The Resigned Fatalist',
    description: 'Resigned, stubborn, and neglectful. Passively resists and neglects self and others.',
    characteristics: ['Resigned', 'Stubborn', 'Neglectful', 'Minimizing'],
    innerExperience: 'What\'s the point? Nothing I do matters anyway.'
  },
  {
    level: 7, state: 'unhealthy', type: 9,
    title: 'The Denying Doormat',
    description: 'Repressed, underdeveloped, and ineffective. Denies problems completely.',
    characteristics: ['Repressed', 'Underdeveloped', 'Ineffective', 'Denying'],
    innerExperience: 'There is no problem. Everything is fine. I don\'t want to know.'
  },
  {
    level: 8, state: 'unhealthy', type: 9,
    title: 'The Dissociated Zombie',
    description: 'Dissociated, disoriented, and depersonalized. Barely functioning.',
    characteristics: ['Dissociated', 'Disoriented', 'Depersonalized', 'Numb'],
    innerExperience: 'I am not really here. Nothing is real.'
  },
  {
    level: 9, state: 'unhealthy', type: 9,
    title: 'The Disappearing Person',
    description: 'Abandoning self completely. May become catatonic or suicidal.',
    characteristics: ['Self-abandoning', 'Catatonic', 'Dissociating', 'Disappearing'],
    innerExperience: 'I do not exist. I am disappearing.'
  }
];

export const getLevelsByType = (typeNumber: TypeNumber): LevelOfDevelopment[] => {
  return levelsOfDevelopment.filter(l => l.type === typeNumber);
};

export const getLevel = (typeNumber: TypeNumber, level: HealthLevel): LevelOfDevelopment | undefined => {
  return levelsOfDevelopment.find(l => l.type === typeNumber && l.level === level);
};

export const getLevelsByHealthState = (typeNumber: TypeNumber, state: HealthState): LevelOfDevelopment[] => {
  return levelsOfDevelopment.filter(l => l.type === typeNumber && l.state === state);
};

export const getHealthyLevels = (typeNumber: TypeNumber): LevelOfDevelopment[] => {
  return getLevelsByHealthState(typeNumber, 'healthy');
};

export const getAverageLevels = (typeNumber: TypeNumber): LevelOfDevelopment[] => {
  return getLevelsByHealthState(typeNumber, 'average');
};

export const getUnhealthyLevels = (typeNumber: TypeNumber): LevelOfDevelopment[] => {
  return getLevelsByHealthState(typeNumber, 'unhealthy');
};
