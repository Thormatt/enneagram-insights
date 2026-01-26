import type { TypeNumber } from '../../../types';

/**
 * Differentiator Questions
 *
 * Pair-specific questions designed to discriminate between commonly confused types.
 * These are used in the differentiation phase when candidates are narrowed to 2-3 types.
 *
 * Based on baseline testing, the most confused pairs are:
 * - 5 vs 6: Both head types, security-focused
 * - 1 vs 6: Both rule-following, anxiety-prone
 * - 9 vs 6: Both avoidant of conflict, seeking stability
 * - 8 vs 6: 8 can look like counterphobic 6
 * - 7 vs 6: 6w7 can look like 7, both planning-oriented
 * - 4 vs 5: Both withdrawn, introspective
 * - 3 vs 7: Both optimistic, achievement-focused
 * - 3 vs 8: Both assertive, goal-oriented
 * - 2 vs 9: Both accommodating, relationship-focused
 */

export interface DifferentiatorQuestion {
  id: string;
  text: string;
  pair: [TypeNumber, TypeNumber]; // The two types this distinguishes
  // Score for each type (first type gets positive direction, second gets negative)
  direction: {
    positive: TypeNumber; // High answer (4-5) suggests this type
    negative: TypeNumber; // Low answer (1-2) suggests this type
  };
  // Rationale for why this question differentiates
  rationale: string;
}

export const differentiatorQuestions: DifferentiatorQuestion[] = [
  // ═══════════════════════════════════════════════════════════════
  // TYPE 5 vs TYPE 6 (100% confusion in baseline)
  // Both are head types but 5 withdraws to observe, 6 scans for danger
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-5v6-1',
    text: 'When faced with uncertainty, I prefer to retreat and gather more information rather than seek support from others.',
    pair: [5, 6],
    direction: { positive: 5, negative: 6 },
    rationale: '5s withdraw to understand; 6s seek allies and support systems',
  },
  {
    id: 'diff-5v6-2',
    text: 'I often question my own ability to handle situations, looking for someone or something to rely on.',
    pair: [5, 6],
    direction: { positive: 6, negative: 5 },
    rationale: '6s doubt themselves and seek external support; 5s trust their own competence',
  },
  {
    id: 'diff-5v6-3',
    text: 'My anxiety tends to push me toward action and vigilance rather than withdrawal and observation.',
    pair: [5, 6],
    direction: { positive: 6, negative: 5 },
    rationale: '6s are vigilant and prepare for threats; 5s detach and minimize engagement',
  },
  {
    id: 'diff-5v6-4',
    text: 'I accumulate knowledge primarily to understand the world, not to protect myself from threats.',
    pair: [5, 6],
    direction: { positive: 5, negative: 6 },
    rationale: '5s seek understanding for its own sake; 6s prepare knowledge as defense',
  },
  {
    id: 'diff-5v6-5',
    text: 'Loyalty to a group, organization, or authority figure is central to my sense of security.',
    pair: [5, 6],
    direction: { positive: 6, negative: 5 },
    rationale: '6s find security through allegiance; 5s prefer independence',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 1 vs TYPE 5 (Both competency types)
  // 1 is gut-centered (anger, perfectionism); 5 is head-centered (fear, knowledge)
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-1v5-1',
    text: 'I have a strong inner critic that judges me for not meeting my own moral standards.',
    pair: [1, 5],
    direction: { positive: 1, negative: 5 },
    rationale: '1s have an internalized critic about ethics; 5s focus on competence not morality',
  },
  {
    id: 'diff-1v5-2',
    text: 'I withdraw from the world to conserve my energy and resources.',
    pair: [1, 5],
    direction: { positive: 5, negative: 1 },
    rationale: '5s withdraw to conserve; 1s engage to improve',
  },
  {
    id: 'diff-1v5-3',
    text: 'I feel a constant undercurrent of anger or irritation at how things are done wrong.',
    pair: [1, 5],
    direction: { positive: 1, negative: 5 },
    rationale: '1s have suppressed anger as core emotion; 5s have fear and detachment',
  },
  {
    id: 'diff-1v5-4',
    text: 'I minimize my needs and try to be as self-sufficient as possible to avoid depending on others.',
    pair: [1, 5],
    direction: { positive: 5, negative: 1 },
    rationale: '5s minimize needs; 1s have clear standards about how needs should be met',
  },
  {
    id: 'diff-1v5-5',
    text: 'When something is done incorrectly, I feel compelled to fix it or point it out.',
    pair: [1, 5],
    direction: { positive: 1, negative: 5 },
    rationale: '1s feel obligated to correct; 5s prefer to observe without intervening',
  },
  {
    id: 'diff-1v5-6',
    text: 'I prefer to observe and understand from a distance rather than engage and improve.',
    pair: [1, 5],
    direction: { positive: 5, negative: 1 },
    rationale: '5s are observers; 1s are reformers',
  },
  {
    id: 'diff-1v5-7',
    text: 'I feel responsible for making things right and proper, not just understanding them.',
    pair: [1, 5],
    direction: { positive: 1, negative: 5 },
    rationale: '1s have moral responsibility; 5s have intellectual curiosity',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 1 vs TYPE 2 (Compliant group confusion)
  // Both are compliant but 1 focuses on correctness, 2 on relationships
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-1v2-1',
    text: 'My drive comes from wanting to be good and correct, not from wanting to be loved and needed.',
    pair: [1, 2],
    direction: { positive: 1, negative: 2 },
    rationale: '1s are motivated by internal standards; 2s are motivated by love and connection',
  },
  {
    id: 'diff-1v2-2',
    text: 'I focus more on how others feel about me than on whether I am doing things right.',
    pair: [1, 2],
    direction: { positive: 2, negative: 1 },
    rationale: '2s are heart-centered and relationship-focused; 1s are gut-centered and principle-focused',
  },
  {
    id: 'diff-1v2-3',
    text: 'When I help others, it is primarily because it is the right thing to do, not because I want them to need me.',
    pair: [1, 2],
    direction: { positive: 1, negative: 2 },
    rationale: '1s help from duty; 2s help to create emotional bonds',
  },
  {
    id: 'diff-1v2-4',
    text: 'I feel pride when others depend on me and turn to me for support.',
    pair: [1, 2],
    direction: { positive: 2, negative: 1 },
    rationale: '2s take pride in being needed; 1s take pride in being principled',
  },
  {
    id: 'diff-1v2-5',
    text: 'I experience more resentment about things being done wrong than about not being appreciated.',
    pair: [1, 2],
    direction: { positive: 1, negative: 2 },
    rationale: '1s resent imperfection; 2s resent lack of appreciation',
  },
  {
    id: 'diff-1v2-6',
    text: 'My emotional energy goes toward connecting with others rather than improving myself or systems.',
    pair: [1, 2],
    direction: { positive: 2, negative: 1 },
    rationale: '2s are externally focused on relationships; 1s are internally focused on self-improvement',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 1 vs TYPE 6 (70% confusion in baseline)
  // Both follow rules but 1 has internal standards, 6 seeks external guidance
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-1v6-1',
    text: 'My standards come from my own internal sense of right and wrong, not from external authorities.',
    pair: [1, 6],
    direction: { positive: 1, negative: 6 },
    rationale: '1s have internalized perfectionist standards; 6s look to authority for guidance',
  },
  {
    id: 'diff-1v6-2',
    text: 'I feel most anxious about whether I can trust the people and systems around me.',
    pair: [1, 6],
    direction: { positive: 6, negative: 1 },
    rationale: '6s focus on trust and security; 1s focus on correctness and standards',
  },
  {
    id: 'diff-1v6-3',
    text: 'When I make a mistake, I feel more self-critical anger than anxiety about consequences.',
    pair: [1, 6],
    direction: { positive: 1, negative: 6 },
    rationale: '1s experience resentment at imperfection; 6s experience fear of consequences',
  },
  {
    id: 'diff-1v6-4',
    text: 'I often feel paralyzed by doubt, questioning which action is the safest or most reliable.',
    pair: [1, 6],
    direction: { positive: 6, negative: 1 },
    rationale: '6s experience doubt and ambivalence; 1s know what\'s right but struggle to accept imperfection',
  },
  {
    id: 'diff-1v6-5',
    text: 'My frustration comes more from things not being done correctly than from feeling unsupported.',
    pair: [1, 6],
    direction: { positive: 1, negative: 6 },
    rationale: '1s are frustrated by imperfection; 6s are frustrated by unreliability',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 9 vs TYPE 6 (60% confusion in baseline)
  // Both avoid conflict but 9 merges/numbs, 6 is vigilant/anxious
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-9v6-1',
    text: 'I often lose track of what I actually want because I\'m so attuned to what others want.',
    pair: [9, 6],
    direction: { positive: 9, negative: 6 },
    rationale: '9s merge with others\' agendas; 6s maintain their own anxious awareness',
  },
  {
    id: 'diff-9v6-2',
    text: 'My mind is constantly alert, scanning for potential problems or threats.',
    pair: [9, 6],
    direction: { positive: 6, negative: 9 },
    rationale: '6s are vigilant and anxious; 9s numb out and avoid awareness',
  },
  {
    id: 'diff-9v6-3',
    text: 'I tend to numb out or distract myself rather than actively worrying about what might go wrong.',
    pair: [9, 6],
    direction: { positive: 9, negative: 6 },
    rationale: '9s use numbing as defense; 6s use vigilance as defense',
  },
  {
    id: 'diff-9v6-4',
    text: 'I seek peace through avoidance and going along, not through preparation and loyalty.',
    pair: [9, 6],
    direction: { positive: 9, negative: 6 },
    rationale: '9s find peace through withdrawal; 6s find security through alliance',
  },
  {
    id: 'diff-9v6-5',
    text: 'When stressed, I become more stubborn and passive-resistant rather than more anxious and reactive.',
    pair: [9, 6],
    direction: { positive: 9, negative: 6 },
    rationale: '9s resist through passivity; 6s become more anxious and vigilant',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 8 vs TYPE 6 (40% confusion in baseline)
  // Counterphobic 6 can look like 8, but core motivation differs
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-8v6-1',
    text: 'My toughness comes from genuine confidence in my own strength, not from hiding vulnerability.',
    pair: [8, 6],
    direction: { positive: 8, negative: 6 },
    rationale: '8s have real confidence; counterphobic 6s project strength to mask fear',
  },
  {
    id: 'diff-8v6-2',
    text: 'Deep down, I struggle with self-doubt and question whether I can really handle things.',
    pair: [8, 6],
    direction: { positive: 6, negative: 8 },
    rationale: '6s have core self-doubt; 8s generally trust their own power',
  },
  {
    id: 'diff-8v6-3',
    text: 'I confront danger to prove I\'m not afraid, to overcome my inner fear.',
    pair: [8, 6],
    direction: { positive: 6, negative: 8 },
    rationale: 'Counterphobic 6s fight fear; 8s simply don\'t experience as much fear',
  },
  {
    id: 'diff-8v6-4',
    text: 'I need to be the one in charge, protecting others from weakness and exploitation.',
    pair: [8, 6],
    direction: { positive: 8, negative: 6 },
    rationale: '8s protect through control; 6s seek protection through allies',
  },
  {
    id: 'diff-8v6-5',
    text: 'I am more concerned with being strong and in control than with being safe and supported.',
    pair: [8, 6],
    direction: { positive: 8, negative: 6 },
    rationale: '8s prioritize power; 6s prioritize security',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 7 vs TYPE 6 (33% confusion in baseline)
  // 6w7 can look like 7; both are head types
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-7v6-1',
    text: 'My planning is focused on exciting possibilities, not on preparing for potential problems.',
    pair: [7, 6],
    direction: { positive: 7, negative: 6 },
    rationale: '7s plan for pleasure; 6s plan for security',
  },
  {
    id: 'diff-7v6-2',
    text: 'I use optimism and reframing to escape anxiety rather than to stay positive naturally.',
    pair: [7, 6],
    direction: { positive: 6, negative: 7 },
    rationale: '6w7 uses positivity defensively; 7s are naturally optimistic',
  },
  {
    id: 'diff-7v6-3',
    text: 'I experience a deep undercurrent of anxiety that I constantly try to manage or escape.',
    pair: [7, 6],
    direction: { positive: 6, negative: 7 },
    rationale: '6s are fundamentally anxious; 7s avoid pain but aren\'t as anxious',
  },
  {
    id: 'diff-7v6-4',
    text: 'I seek new experiences primarily for the joy they bring, not to distract from worry.',
    pair: [7, 6],
    direction: { positive: 7, negative: 6 },
    rationale: '7s seek pleasure; 6s seek escape from anxiety',
  },
  {
    id: 'diff-7v6-5',
    text: 'I rarely question whether the exciting opportunity might be too good to be true.',
    pair: [7, 6],
    direction: { positive: 7, negative: 6 },
    rationale: '7s embrace opportunities; 6s are skeptical and cautious',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 3 vs TYPE 1 (Both competency types, goal-oriented)
  // 3 focuses on achievement and image; 1 focuses on correctness and principles
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-3v1-1',
    text: 'I care more about achieving impressive results than about doing things the "right" way.',
    pair: [3, 1],
    direction: { positive: 3, negative: 1 },
    rationale: '3s prioritize achievement; 1s prioritize correctness',
  },
  {
    id: 'diff-3v1-2',
    text: 'I have a strong inner critic that tells me when I\'m not meeting my moral standards.',
    pair: [3, 1],
    direction: { positive: 1, negative: 3 },
    rationale: '1s have an internal critic focused on ethics; 3s focus on performance',
  },
  {
    id: 'diff-3v1-3',
    text: 'I adapt my presentation and behavior to match what will be most successful in each situation.',
    pair: [3, 1],
    direction: { positive: 3, negative: 1 },
    rationale: '3s adapt for success; 1s maintain consistent principles',
  },
  {
    id: 'diff-3v1-4',
    text: 'I feel resentment and frustration when people don\'t follow proper procedures or standards.',
    pair: [3, 1],
    direction: { positive: 1, negative: 3 },
    rationale: '1s feel anger at impropriety; 3s are more focused on results',
  },
  {
    id: 'diff-3v1-5',
    text: 'Being seen as successful and admirable matters more to me than being seen as ethical and principled.',
    pair: [3, 1],
    direction: { positive: 3, negative: 1 },
    rationale: '3s want admiration for achievement; 1s want recognition of integrity',
  },
  {
    id: 'diff-3v1-6',
    text: 'I experience a constant undercurrent of anger or irritation at imperfection.',
    pair: [3, 1],
    direction: { positive: 1, negative: 3 },
    rationale: '1s have suppressed anger as core emotion; 3s suppress feelings for efficiency',
  },
  {
    id: 'diff-3v1-7',
    text: 'I would take a shortcut if it achieved a better outcome, even if it wasn\'t the "correct" process.',
    pair: [3, 1],
    direction: { positive: 3, negative: 1 },
    rationale: '3s are pragmatic about methods; 1s are principled about process',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 4 vs TYPE 5 (Commonly confused)
  // Both withdrawn, introspective; 4 focuses on feelings, 5 on understanding
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-4v5-1',
    text: 'My inner life is dominated more by intense emotions than by thoughts and analysis.',
    pair: [4, 5],
    direction: { positive: 4, negative: 5 },
    rationale: '4s are emotion-centered; 5s are thought-centered',
  },
  {
    id: 'diff-4v5-2',
    text: 'I withdraw to conserve energy and resources, not to process my emotional intensity.',
    pair: [4, 5],
    direction: { positive: 5, negative: 4 },
    rationale: '5s withdraw for economy; 4s withdraw for emotional processing',
  },
  {
    id: 'diff-4v5-3',
    text: 'I long to be truly understood by others, even though I also feel fundamentally different from them.',
    pair: [4, 5],
    direction: { positive: 4, negative: 5 },
    rationale: '4s want connection despite difference; 5s prefer detachment',
  },
  {
    id: 'diff-4v5-4',
    text: 'I minimize my emotional needs and try to be as self-sufficient as possible.',
    pair: [4, 5],
    direction: { positive: 5, negative: 4 },
    rationale: '5s minimize needs; 4s intensify emotional experience',
  },
  {
    id: 'diff-4v5-5',
    text: 'I am envious of what others have that I lack, especially a sense of belonging or normalcy.',
    pair: [4, 5],
    direction: { positive: 4, negative: 5 },
    rationale: '4s experience envy centrally; 5s are more detached',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 5 vs TYPE 7 (Both head types, but opposite energy directions)
  // 5 withdraws/conserves; 7 expands/seeks stimulation
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-5v7-1',
    text: 'I withdraw from the world to conserve my energy and resources.',
    pair: [5, 7],
    direction: { positive: 5, negative: 7 },
    rationale: '5s withdraw and conserve; 7s move toward experiences',
  },
  {
    id: 'diff-5v7-2',
    text: 'I seek out new experiences and stimulation to feel fully alive.',
    pair: [5, 7],
    direction: { positive: 7, negative: 5 },
    rationale: '7s seek stimulation; 5s minimize engagement',
  },
  {
    id: 'diff-5v7-3',
    text: 'I feel depleted by too much interaction and need time alone to recharge.',
    pair: [5, 7],
    direction: { positive: 5, negative: 7 },
    rationale: '5s are drained by engagement; 7s are energized by it',
  },
  {
    id: 'diff-5v7-4',
    text: 'I reframe negative situations to find the positive and keep my spirits up.',
    pair: [5, 7],
    direction: { positive: 7, negative: 5 },
    rationale: '7s reframe to avoid pain; 5s accept reality detachedly',
  },
  {
    id: 'diff-5v7-5',
    text: 'I prefer depth of understanding in a few areas over breadth of experience.',
    pair: [5, 7],
    direction: { positive: 5, negative: 7 },
    rationale: '5s go deep and narrow; 7s go broad and varied',
  },
  {
    id: 'diff-5v7-6',
    text: 'I feel trapped and anxious when my options are limited or I am confined.',
    pair: [5, 7],
    direction: { positive: 7, negative: 5 },
    rationale: '7s fear limitation; 5s fear depletion',
  },
  {
    id: 'diff-5v7-7',
    text: 'I minimize my needs and try to be as self-sufficient as possible.',
    pair: [5, 7],
    direction: { positive: 5, negative: 7 },
    rationale: '5s minimize needs; 7s maximize experiences',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 3 vs TYPE 7 (Both assertive, optimistic)
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-3v7-1',
    text: 'I am more focused on achieving specific goals than on keeping my options open.',
    pair: [3, 7],
    direction: { positive: 3, negative: 7 },
    rationale: '3s focus on achievement; 7s want freedom and options',
  },
  {
    id: 'diff-3v7-2',
    text: 'I would rather be seen as successful than be happy and free.',
    pair: [3, 7],
    direction: { positive: 3, negative: 7 },
    rationale: '3s prioritize image; 7s prioritize experience',
  },
  {
    id: 'diff-3v7-3',
    text: 'I can commit fully to one path if it leads to recognition and success.',
    pair: [3, 7],
    direction: { positive: 3, negative: 7 },
    rationale: '3s can focus for success; 7s struggle with limitation',
  },
  {
    id: 'diff-3v7-4',
    text: 'I avoid pain and limitation more than I pursue achievement and status.',
    pair: [3, 7],
    direction: { positive: 7, negative: 3 },
    rationale: '7s are pain-avoidant; 3s are achievement-driven',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 3 vs TYPE 8 (Both assertive, powerful)
  // 8 is gut-centered (control/power); 3 is heart-centered (image/success)
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-3v8-1',
    text: 'I shape myself to meet others\' expectations of success rather than being authentically myself.',
    pair: [3, 8],
    direction: { positive: 3, negative: 8 },
    rationale: '3s adapt to succeed; 8s refuse to adapt',
  },
  {
    id: 'diff-3v8-2',
    text: 'Being respected for my strength matters more than being admired for my achievements.',
    pair: [3, 8],
    direction: { positive: 8, negative: 3 },
    rationale: '8s want respect; 3s want admiration',
  },
  {
    id: 'diff-3v8-3',
    text: 'I will confront and challenge others directly, even if it damages my image.',
    pair: [3, 8],
    direction: { positive: 8, negative: 3 },
    rationale: '8s are confrontational; 3s protect their image',
  },
  {
    id: 'diff-3v8-4',
    text: 'I adjust my personality to fit different audiences and maximize my success.',
    pair: [3, 8],
    direction: { positive: 3, negative: 8 },
    rationale: '3s are chameleons; 8s are consistently themselves',
  },
  {
    id: 'diff-8v3-5',
    text: 'I have an instinctive, gut-level sense of power and control in situations.',
    pair: [8, 3],
    direction: { positive: 8, negative: 3 },
    rationale: '8s operate from gut instinct; 3s operate from image awareness',
  },
  {
    id: 'diff-8v3-6',
    text: 'I am quick to anger and confrontation when I perceive injustice or weakness being exploited.',
    pair: [8, 3],
    direction: { positive: 8, negative: 3 },
    rationale: '8s have immediate anger response; 3s control emotions for effectiveness',
  },
  {
    id: 'diff-8v3-7',
    text: 'I care more about how things look to others than about having raw power over situations.',
    pair: [8, 3],
    direction: { positive: 3, negative: 8 },
    rationale: '3s prioritize appearance; 8s prioritize substance and control',
  },
  {
    id: 'diff-8v3-8',
    text: 'Vulnerability feels like weakness to me, and I rarely show it even to those closest to me.',
    pair: [8, 3],
    direction: { positive: 8, negative: 3 },
    rationale: '8s deny vulnerability as core defense; 3s hide true self behind image',
  },
  {
    id: 'diff-8v3-9',
    text: 'I want to protect the underdog and fight against those who abuse power.',
    pair: [8, 3],
    direction: { positive: 8, negative: 3 },
    rationale: '8s have strong justice orientation; 3s are more focused on personal success',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 2 vs TYPE 9 (Both accommodating, relationship-focused)
  // 2 is heart-centered (need to be needed); 9 is gut-centered (merging/peace)
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-2v9-1',
    text: 'I actively seek out opportunities to help others, rather than just going along with what they want.',
    pair: [2, 9],
    direction: { positive: 2, negative: 9 },
    rationale: '2s actively help; 9s passively accommodate',
  },
  {
    id: 'diff-2v9-2',
    text: 'I often feel resentful when my help isn\'t appreciated or reciprocated.',
    pair: [2, 9],
    direction: { positive: 2, negative: 9 },
    rationale: '2s feel entitled to appreciation; 9s avoid conflict about needs',
  },
  {
    id: 'diff-2v9-3',
    text: 'I lose myself in others\' priorities rather than positioning myself as indispensable to them.',
    pair: [2, 9],
    direction: { positive: 9, negative: 2 },
    rationale: '9s merge; 2s maintain self through helping',
  },
  {
    id: 'diff-2v9-4',
    text: 'I feel more invisible and unimportant than needed and appreciated.',
    pair: [2, 9],
    direction: { positive: 9, negative: 2 },
    rationale: '9s feel invisible; 2s make themselves needed',
  },
  {
    id: 'diff-9v2-5',
    text: 'I tend to numb out, zone out, or lose track of what I actually want for myself.',
    pair: [9, 2],
    direction: { positive: 9, negative: 2 },
    rationale: '9s use numbing as defense; 2s stay aware of others\' needs',
  },
  {
    id: 'diff-9v2-6',
    text: 'I take pride in being the person others turn to when they need help.',
    pair: [9, 2],
    direction: { positive: 2, negative: 9 },
    rationale: '2s have pride in helpfulness; 9s don\'t seek this role',
  },
  {
    id: 'diff-9v2-7',
    text: 'When there\'s conflict, my instinct is to avoid it entirely rather than try to smooth it over by helping.',
    pair: [9, 2],
    direction: { positive: 9, negative: 2 },
    rationale: '9s withdraw from conflict; 2s engage through helpfulness',
  },
  {
    id: 'diff-9v2-8',
    text: 'I often don\'t realize how angry I am until much later, if at all.',
    pair: [9, 2],
    direction: { positive: 9, negative: 2 },
    rationale: '9s have "forgotten" anger; 2s repress needs but have more access to anger',
  },
  {
    id: 'diff-9v2-9',
    text: 'I want to be loved for who I am, not for what I do for others.',
    pair: [9, 2],
    direction: { positive: 9, negative: 2 },
    rationale: '9s want to be valued intrinsically; 2s link love to helpfulness',
  },
  {
    id: 'diff-9v2-10',
    text: 'I can be assertive about getting my emotional needs met, especially when I feel unappreciated.',
    pair: [9, 2],
    direction: { positive: 2, negative: 9 },
    rationale: '2s can become demanding; 9s rarely assert their needs',
  },

  // ═══════════════════════════════════════════════════════════════
  // TYPE 2 vs TYPE 7 (Both positive outlook, but different centers and stances)
  // 2 is heart-centered/compliant (helping); 7 is head-centered/assertive (options)
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'diff-2v7-1',
    text: 'My positivity comes from my relationships and helping others, not from seeking exciting experiences.',
    pair: [2, 7],
    direction: { positive: 2, negative: 7 },
    rationale: '2s find joy in relationships; 7s find joy in experiences and options',
  },
  {
    id: 'diff-2v7-2',
    text: 'I go after what I want directly rather than positioning myself as helpful to get my needs met.',
    pair: [2, 7],
    direction: { positive: 7, negative: 2 },
    rationale: '7s are assertive; 2s are compliant and indirect about needs',
  },
  {
    id: 'diff-2v7-3',
    text: 'I focus more on what others need than on keeping my options open and having fun.',
    pair: [2, 7],
    direction: { positive: 2, negative: 7 },
    rationale: '2s are other-focused; 7s are self-focused on experiences',
  },
  {
    id: 'diff-2v7-4',
    text: 'I feel limited and trapped when I cannot pursue new experiences and opportunities.',
    pair: [2, 7],
    direction: { positive: 7, negative: 2 },
    rationale: '7s fear limitation; 2s fear being unloved',
  },
  {
    id: 'diff-2v7-5',
    text: 'I want to be loved and needed more than I want to be free and have fun.',
    pair: [2, 7],
    direction: { positive: 2, negative: 7 },
    rationale: '2s core desire is to be loved; 7s core desire is freedom',
  },
  {
    id: 'diff-2v7-6',
    text: 'I reframe negative situations to stay positive and avoid pain rather than to help others feel better.',
    pair: [2, 7],
    direction: { positive: 7, negative: 2 },
    rationale: '7s reframe for self-protection; 2s nurture others',
  },
];

/**
 * Get differentiator questions for a specific type pair
 */
export function getDifferentiatorsForPair(
  type1: TypeNumber,
  type2: TypeNumber
): DifferentiatorQuestion[] {
  return differentiatorQuestions.filter(
    q =>
      (q.pair[0] === type1 && q.pair[1] === type2) ||
      (q.pair[0] === type2 && q.pair[1] === type1)
  );
}

/**
 * Get all pairs that have differentiator questions
 */
export function getAvailablePairs(): Array<[TypeNumber, TypeNumber]> {
  const pairs = new Set<string>();
  for (const q of differentiatorQuestions) {
    const sorted = [...q.pair].sort((a, b) => a - b);
    pairs.add(`${sorted[0]}-${sorted[1]}`);
  }
  return Array.from(pairs).map(p => {
    const [a, b] = p.split('-').map(Number);
    return [a, b] as [TypeNumber, TypeNumber];
  });
}

/**
 * Score an answer for a differentiator question
 * Returns positive score for positive direction type, negative for the other
 */
export function scoreDifferentiator(
  question: DifferentiatorQuestion,
  answer: number // 1-5 Likert
): { [key in TypeNumber]?: number } {
  // Center the answer around 0 (-2 to +2)
  const centered = answer - 3;

  // Map to types
  return {
    [question.direction.positive]: centered * 2,
    [question.direction.negative]: -centered * 2,
  };
}
