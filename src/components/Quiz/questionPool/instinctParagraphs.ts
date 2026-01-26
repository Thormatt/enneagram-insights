import type { InstinctType } from '../../../types';

/**
 * Stage 3: Ipsative Paragraph Ranking for Instincts
 *
 * Users rank 3 rich paragraph descriptions from most to least resonant.
 * This format is ideal for instincts because:
 * - Instincts are holistic drives, not isolated traits
 * - Paragraphs capture the gestalt better than single statements
 * - Ranking (ipsative) reveals relative priorities
 * - Harder to "game" than agree/disagree
 */

export interface InstinctParagraphSet {
  id: string;
  context: string; // What life domain this explores
  paragraphs: {
    instinct: InstinctType;
    text: string;
  }[];
}

/**
 * Instinct Paragraph Sets
 * Each set presents 3 paragraphs (SP, SO, SX) for ranking
 */
export const instinctParagraphSets: InstinctParagraphSet[] = [
  {
    id: 'ip-general',
    context: "General Life Focus",
    paragraphs: [
      {
        instinct: 'sp',
        text: `My attention naturally goes to practical matters - my health, finances, comfort, and security. I need to know I have enough resources and that my physical environment supports my wellbeing. I'm attuned to my body's needs and can be quite particular about food, sleep, and living conditions. When stressed, I focus on self-preservation first. I prefer steady routines and feel anxious when basic needs are uncertain. Accumulating resources and maintaining stability gives me a sense of safety.`,
      },
      {
        instinct: 'so',
        text: `My attention naturally goes to social dynamics - group belonging, status, contribution, and how I fit into larger communities. I read rooms quickly and understand hierarchies and social structures intuitively. I care about my reputation and impact on my communities. I often think about my role in groups and what I can contribute. Being connected to something larger than myself feels essential. Recognition for my social contributions matters, and I feel lost when disconnected from my communities.`,
      },
      {
        instinct: 'sx',
        text: `My attention naturally goes to intensity and connection - I seek experiences and relationships that feel alive, electric, and transformative. I'm drawn to what captivates me completely and can become deeply absorbed in people, interests, or experiences. Passion and chemistry matter more to me than stability or status. I need to feel a spark, a sense of aliveness. Surface-level connections leave me cold - I want depth, even if it's volatile. I'd rather have intense experiences than comfortable ones.`,
      },
    ],
  },
  {
    id: 'ip-relationships',
    context: "What You Seek in Close Relationships",
    paragraphs: [
      {
        instinct: 'sp',
        text: `In close relationships, I seek a partner who feels like home - someone who creates stability and shares responsibility for building a secure life together. I show love through practical care: making sure we're comfortable, healthy, fed, and financially secure. I value reliability and consistency over grand romantic gestures. Our shared routines and the life we build together matter more than constant excitement. I feel loved when my partner takes care of practical needs without being asked.`,
      },
      {
        instinct: 'so',
        text: `In close relationships, I seek a partner who is also a social ally - someone I can navigate the world with, who understands the importance of our social connections and shared community. I value a partner who enhances our standing together and shares my values about contribution and belonging. Our relationship isn't just about us - it's about what we represent together, our shared networks, and the communities we're part of. I feel loved when my partner supports my social endeavors and we're recognized as a couple.`,
      },
      {
        instinct: 'sx',
        text: `In close relationships, I seek a deep, consuming connection - someone who captivates me completely and with whom I can experience intense emotional and physical chemistry. I want to feel chosen, desired, and fully known at the deepest level. Passion, attraction, and psychological intimacy are essential - without them, a relationship feels dead even if it's stable. I'm willing to tolerate volatility for depth. I feel loved when my partner is intensely focused on me and our connection feels magnetic and alive.`,
      },
    ],
  },
  {
    id: 'ip-stress',
    context: "How You Respond Under Stress",
    paragraphs: [
      {
        instinct: 'sp',
        text: `Under stress, I withdraw to take care of myself. I focus on basics - do I have enough money? Is my health okay? Is my home secure? I might stock up on supplies, cancel social plans, or retreat into comfortable routines. Self-care becomes priority one. I can become anxious about resources running out or my body failing me. I need to feel physically safe and well-resourced before I can deal with anything else. Others might see me as overly focused on practical concerns.`,
      },
      {
        instinct: 'so',
        text: `Under stress, I turn to my community and social network. I reach out to friends, seek advice from respected figures, or throw myself into group activities. I might become more concerned about my reputation or standing - am I still valued? Still included? I process stress by talking it through with others and understanding where I stand socially. Being alone with problems feels unbearable. Others might see me as too dependent on social validation or overly concerned with what people think.`,
      },
      {
        instinct: 'sx',
        text: `Under stress, I seek intensity - either to escape through absorbing experiences or to find someone who can meet me in the depths. I might become more volatile, seeking drama or conflict that feels more alive than numbness. I can become obsessed with a person or pursuit as a way to feel something. Being bored or feeling flat is worse than being upset. I need something or someone to captivate my attention and make me feel alive. Others might see me as dramatic or unable to just relax.`,
      },
    ],
  },
  {
    id: 'ip-fulfillment',
    context: "What Makes Life Feel Meaningful",
    paragraphs: [
      {
        instinct: 'sp',
        text: `Life feels meaningful when I've created a secure, comfortable foundation - when my practical affairs are in order, my health is good, my space is nurturing, and I have enough resources to feel safe. There's deep satisfaction in being well-resourced and self-sufficient. I appreciate life's simple pleasures: good food, restful sleep, financial security, a comfortable home. Knowing I can take care of myself and those I love gives my life purpose. Stability isn't boring to me - it's the ground everything else rests on.`,
      },
      {
        instinct: 'so',
        text: `Life feels meaningful when I'm contributing to something larger than myself - when I have a valued role in my communities and can see my impact on others. Recognition, belonging, and purpose through participation in groups gives my life significance. I want to leave a mark on my communities and be remembered for my contributions. Connecting people, building networks, and understanding social systems energizes me. A life disconnected from community would feel empty, no matter how comfortable or passionate.`,
      },
      {
        instinct: 'sx',
        text: `Life feels meaningful when I'm fully alive - when I have deep connections, consuming passions, and experiences that transform me. I'd rather live intensely for a short time than exist comfortably for decades. The moments that matter most are when I feel completely captivated - by a person, an experience, a creative pursuit. Surface living feels like slow death. I need to feel the edges of experience, the depth of connection, the fire of passion. Transformation through intensity is what makes life worth living.`,
      },
    ],
  },
  {
    id: 'ip-energy',
    context: "What Energizes vs. Drains You",
    paragraphs: [
      {
        instinct: 'sp',
        text: `I feel energized when my practical needs are met and I have comfortable routines that support my wellbeing. A good meal, enough sleep, financial security, and a cozy environment recharge me. I'm drained by chaos, instability, financial uncertainty, or situations where basic needs are threatened. Too much social demand or intense emotional experiences exhaust me - I need to return to my comfortable routines to recover. Self-care isn't selfish to me; it's essential for functioning.`,
      },
      {
        instinct: 'so',
        text: `I feel energized by positive social interactions, group activities, and a sense of belonging and contribution. Being valued in my communities, having interesting conversations, and feeling socially connected recharges me. I'm drained by social isolation, exclusion, or loss of status. Extended time alone makes me restless. I also find purely self-focused or intensely one-on-one situations less engaging - I come alive in the social fabric, understanding my place in the larger whole.`,
      },
      {
        instinct: 'sx',
        text: `I feel energized by intense experiences and deep connections - chemistry with another person, absorption in a passion, or any experience that fully captivates me. The "spark" is what makes me feel alive. I'm drained by boredom, surface-level interactions, and comfortable routines that lack intensity. Stability without passion feels deadening. I'd rather be upset than bored. I need something or someone to be captivated by - without it, I feel like I'm just going through the motions.`,
      },
    ],
  },
];

/**
 * Calculate instinct stack from paragraph rankings
 * Rankings: 1 = most resonant, 2 = middle, 3 = least resonant
 */
export function scoreInstinctParagraphs(
  rankings: Array<{
    setId: string;
    rankings: Record<InstinctType, number>; // instinct -> rank (1, 2, 3)
  }>
): {
  scores: Record<InstinctType, number>;
  stack: [InstinctType, InstinctType, InstinctType];
  dominantStrength: number;
} {
  const scores: Record<InstinctType, number> = { sp: 0, so: 0, sx: 0 };

  for (const { rankings: r } of rankings) {
    // Convert rankings to scores: 1st = 3 points, 2nd = 2 points, 3rd = 1 point
    for (const [instinct, rank] of Object.entries(r)) {
      const points = 4 - rank; // 1st = 3, 2nd = 2, 3rd = 1
      scores[instinct as InstinctType] += points;
    }
  }

  // Determine stack order
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([instinct]) => instinct as InstinctType);

  const stack: [InstinctType, InstinctType, InstinctType] = [
    sorted[0],
    sorted[1],
    sorted[2],
  ];

  // Calculate dominant strength (how clearly the dominant instinct leads)
  const maxScore = Math.max(...Object.values(scores));
  const secondScore = Object.values(scores).sort((a, b) => b - a)[1];
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const dominantStrength = (maxScore - secondScore) / totalScore;

  return { scores, stack, dominantStrength };
}

/**
 * Get all paragraph sets
 */
export function getAllInstinctParagraphSets(): InstinctParagraphSet[] {
  return instinctParagraphSets;
}
