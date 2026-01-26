import type { TypeNumber } from '../../types';

/**
 * Type Essence Vignettes
 *
 * Short (60-100 word) inner voice narratives designed for type disambiguation.
 * Each vignette captures the core motivation and fear of a type through
 * first-person internal experience, not external behaviors.
 *
 * Based on Delphi multi-model consensus recommendations:
 * - Grade 6-7 readability level
 * - Focus on WHY (motivation/fear), not WHAT (behaviors)
 * - Present tense, emotional resonance
 */

export interface TypeEssenceVignette {
  type: TypeNumber;
  title: string;
  innerVoice: string;
  coreQuestion: string; // The fundamental question this type asks themselves
}

export const typeEssenceVignettes: Record<TypeNumber, TypeEssenceVignette> = {
  1: {
    type: 1,
    title: 'The Inner Critic',
    innerVoice: `There's always a voice inside me pointing out what could be better. When I see something wrong, I can't just ignore it—it bothers me until it's fixed. I hold myself to high standards, and honestly, I'm my own harshest judge. Deep down, I fear being flawed or corrupt. I believe things should be done right, and I feel responsible for making them so. When I'm hard on others, it's because I'm even harder on myself.`,
    coreQuestion: 'Am I good? Am I doing this the right way?',
  },

  2: {
    type: 2,
    title: 'The Heart That Gives',
    innerVoice: `I notice what people need, often before they do. There's a warmth that flows through me when I can help someone or make their day easier. I want to matter to people, to be someone they turn to. Deep down, I worry that if I'm not giving, I'm not lovable. It's hard for me to ask for help—I'd rather be the one helping. When I feel unappreciated, it hurts more than I show.`,
    coreQuestion: 'Am I wanted? Am I loved for who I am?',
  },

  3: {
    type: 3,
    title: "The Achiever's Drive",
    innerVoice: `I'm always aware of how things look and whether I'm measuring up. Success matters to me—not just having it, but being seen as someone who has it. I adapt easily, becoming what each situation needs. Deep down, I fear being worthless or a failure. Sometimes I lose track of what I actually want versus what will impress others. I keep moving, achieving, because stopping feels dangerous.`,
    coreQuestion: 'Am I successful? Do people admire me?',
  },

  4: {
    type: 4,
    title: 'The Depth Seeker',
    innerVoice: `I feel things deeply—beauty, pain, longing. There's something missing that I can't quite name, something others seem to have that I don't. I'm drawn to what's authentic and meaningful, and I can't stand anything fake or shallow. Deep down, I fear I'm fundamentally flawed in a way no one else is. My emotions are intense and I need to express them. I want to be truly seen and understood.`,
    coreQuestion: 'Who am I? What makes me significant?',
  },

  5: {
    type: 5,
    title: "The Observer's Mind",
    innerVoice: `I need to understand before I engage. My mind is always working—analyzing, connecting, figuring things out. I pull back from the world to think, to protect my energy and my space. Deep down, I fear being useless or incapable, overwhelmed by demands I can't meet. Knowledge feels like safety. I'd rather watch and understand than jump in unprepared. Emotions can feel like too much, so I retreat into my head.`,
    coreQuestion: 'Do I understand? Am I capable enough?',
  },

  6: {
    type: 6,
    title: 'The Vigilant Mind',
    innerVoice: `My mind is always scanning—what could go wrong, who can I trust, what's the hidden agenda? I question things, including myself. I want security and certainty, but I also doubt them when I find them. Deep down, I fear being without support or guidance, abandoned to face danger alone. I'm loyal to those who've earned my trust. When anxious, I either freeze up or charge straight at what scares me.`,
    coreQuestion: 'Can I trust this? Am I safe and supported?',
  },

  7: {
    type: 7,
    title: 'The Possibility Seeker',
    innerVoice: `There's so much to experience, so many options ahead. My mind races with ideas and plans—what's next, what could be. I reframe the negative into positive because dwelling in pain feels unbearable. Deep down, I fear being trapped in suffering or deprivation, missing out on life's goodness. I keep things light and moving forward. Sitting with difficult feelings is hard; I'd rather find the silver lining and go.`,
    coreQuestion: 'Will I be satisfied? What else is possible?',
  },

  8: {
    type: 8,
    title: "The Protector's Strength",
    innerVoice: `I know my own power and I'm not afraid to use it. The world respects strength, not weakness—that's just how it is. I protect the people I care about and I push back against anything unjust. Deep down, I fear being controlled or vulnerable, hurt by those I let in. I'd rather be too much than not enough. Showing softness feels dangerous, so I lead with force. But those I trust see a different side.`,
    coreQuestion: 'Am I in control? Can I protect what matters?',
  },

  9: {
    type: 9,
    title: 'The Peaceful Presence',
    innerVoice: `I just want things to be calm and everyone to get along. Conflict makes me want to disappear—I'll go along with what others want to keep the peace. Deep down, I fear being overlooked or losing connection, but I also fear that my own needs don't really matter. It's easy for me to see all sides, harder to know what I actually want. I merge with others' priorities and sometimes forget my own.`,
    coreQuestion: 'Am I at peace? Do I matter without having to fight for it?',
  },
};

/**
 * Pair-specific comparison scenarios for commonly confused types.
 * These highlight the key distinction between two types that often score similarly.
 */
export interface PairComparisonScenario {
  pair: [TypeNumber, TypeNumber];
  scenario: string;
  typeAResponse: { type: TypeNumber; response: string };
  typeBResponse: { type: TypeNumber; response: string };
  keyDistinction: string;
}

export const pairComparisonScenarios: PairComparisonScenario[] = [
  // Type 1 vs Type 3 (Both competency, both achievement-oriented)
  {
    pair: [1, 3],
    scenario:
      'You complete a project and it turns out well, but you notice a small mistake that no one else would catch.',
    typeAResponse: {
      type: 1,
      response:
        "The mistake bothers me deeply. Even if no one notices, I know it's there. I'd probably fix it even if it meant extra work, because leaving something imperfect feels wrong.",
    },
    typeBResponse: {
      type: 3,
      response:
        "If no one will notice, I'd probably let it go and move on to the next thing. What matters is that the project succeeded and people are impressed with the result.",
    },
    keyDistinction:
      'Type 1 is driven by internal standards of correctness; Type 3 is driven by external validation and results.',
  },

  // Type 1 vs Type 6 (Both can be dutiful and anxious)
  {
    pair: [1, 6],
    scenario: 'You disagree with a decision made by someone in authority.',
    typeAResponse: {
      type: 1,
      response:
        "I feel compelled to point out why it's wrong. Rules and principles should apply to everyone, including authorities. If something isn't right, I need to say so.",
    },
    typeBResponse: {
      type: 6,
      response:
        "I'd feel torn—part of me wants to question it, but part of me worries about the consequences of speaking up. I might test them indirectly first to see if they can be trusted.",
    },
    keyDistinction:
      'Type 1 challenges authority based on principles; Type 6 questions authority while also seeking reassurance from it.',
  },

  // Type 2 vs Type 7 (Both positive outlook, both enthusiastic)
  {
    pair: [2, 7],
    scenario: "A friend cancels plans with you at the last minute.",
    typeAResponse: {
      type: 2,
      response:
        "I'd feel hurt, wondering if I did something wrong or if they don't value our relationship. I might reach out to make sure they're okay, even though I'm the one feeling let down.",
    },
    typeBResponse: {
      type: 7,
      response:
        "I'd feel disappointed but quickly shift to thinking about what else I could do instead. Maybe this opens up an even better opportunity—I hate wasting time feeling bad.",
    },
    keyDistinction:
      'Type 2 focuses on the relationship and the other person; Type 7 quickly reframes and looks for new options.',
  },

  // Type 2 vs Type 9 (Both accommodating, both merge with others)
  {
    pair: [2, 9],
    scenario: 'Someone asks what restaurant you want to go to.',
    typeAResponse: {
      type: 2,
      response:
        "I'd think about what they would enjoy most and suggest that. Making them happy makes me happy—I like being the one who knows what people need.",
    },
    typeBResponse: {
      type: 9,
      response:
        "I'd probably say 'anywhere is fine' because I genuinely don't have a strong preference. It's easier to go along with what others want than to figure out what I want.",
    },
    keyDistinction:
      "Type 2 actively gives to connect; Type 9 passively accommodates to avoid conflict. 2s know what they want but set it aside; 9s often don't know.",
  },

  // Type 3 vs Type 7 (Both energetic, forward-moving, avoid negative)
  {
    pair: [3, 7],
    scenario: 'You have a major setback in a project you care about.',
    typeAResponse: {
      type: 3,
      response:
        "I'd immediately start strategizing how to recover and still succeed. Failure isn't an option—I need to figure out how to turn this around and come out looking good.",
    },
    typeBResponse: {
      type: 7,
      response:
        "I'd look for the silver lining or pivot to something else that excites me. Maybe this setback is actually leading to something better—there's always another opportunity.",
    },
    keyDistinction:
      'Type 3 pushes through setbacks to achieve; Type 7 reframes setbacks and may pivot to new interests.',
  },

  // Type 4 vs Type 5 (Both withdrawn, both feel different)
  {
    pair: [4, 5],
    scenario: "You're at a party where you don't know many people.",
    typeAResponse: {
      type: 4,
      response:
        "I'd feel like an outsider, aware of how different I am from everyone else. Part of me wants to connect deeply with someone, but I also feel like no one here would really understand me.",
    },
    typeBResponse: {
      type: 5,
      response:
        "I'd probably observe from the edge, feeling drained by all the social energy. I'd look for one interesting person to have a real conversation with, then leave when my battery runs out.",
    },
    keyDistinction:
      'Type 4 feels emotionally different and longs for connection; Type 5 feels mentally separate and protects their energy.',
  },

  // Type 5 vs Type 9 (Both withdrawn, both avoid engagement)
  {
    pair: [5, 9],
    scenario: "You're asked to share your opinion in a meeting.",
    typeAResponse: {
      type: 5,
      response:
        "I'd share if I felt I had something valuable to contribute and had time to formulate it. But I hate being put on the spot before I've fully thought something through.",
    },
    typeBResponse: {
      type: 9,
      response:
        "I'd probably give a neutral answer that doesn't create conflict. Everyone's opinion has merit, and I don't want to impose mine or deal with pushback.",
    },
    keyDistinction:
      "Type 5 withholds to preserve competence and energy; Type 9 withholds to preserve peace and avoid asserting themselves.",
  },

  // Type 6 vs Type 9 (Both can be indecisive, both seek stability)
  {
    pair: [6, 9],
    scenario: 'You need to make an important decision but feel uncertain.',
    typeAResponse: {
      type: 6,
      response:
        "My mind races through worst-case scenarios. I'd want to consult people I trust, research every angle, and still probably second-guess myself. The uncertainty is uncomfortable.",
    },
    typeBResponse: {
      type: 9,
      response:
        "I'd probably put off the decision, hoping it resolves itself. All the options seem fine in their own way—it's hard to know what I really want, so why rush?",
    },
    keyDistinction:
      "Type 6's indecision comes from anxiety and doubt; Type 9's comes from not connecting to their own wants and priorities.",
  },

  // Type 8 vs Type 3 (Both assertive, both image-conscious in different ways)
  {
    pair: [8, 3],
    scenario: 'Someone publicly criticizes your work.',
    typeAResponse: {
      type: 8,
      response:
        "I'd confront it directly. If their criticism is valid, fine, but if they're being unfair, they'll hear about it. I don't let people push me around or attack what's mine.",
    },
    typeBResponse: {
      type: 3,
      response:
        "I'd stay composed and professional on the outside while figuring out how to recover my image. What matters is how I'm perceived—I need to come out of this still looking competent.",
    },
    keyDistinction:
      "Type 8 protects through direct confrontation; Type 3 protects through managing perception and staying successful-looking.",
  },
];

/**
 * Get vignette for a specific type
 */
export function getVignetteForType(type: TypeNumber): TypeEssenceVignette {
  return typeEssenceVignettes[type];
}

/**
 * Get comparison scenarios for a pair of types
 */
export function getComparisonForPair(
  typeA: TypeNumber,
  typeB: TypeNumber
): PairComparisonScenario | undefined {
  return pairComparisonScenarios.find(
    scenario =>
      (scenario.pair[0] === typeA && scenario.pair[1] === typeB) ||
      (scenario.pair[0] === typeB && scenario.pair[1] === typeA)
  );
}

/**
 * Get all comparison scenarios involving a specific type
 */
export function getComparisonsForType(type: TypeNumber): PairComparisonScenario[] {
  return pairComparisonScenarios.filter(
    scenario => scenario.pair[0] === type || scenario.pair[1] === type
  );
}
