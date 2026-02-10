import { getTypeByNumber } from '../core/types';
import type { TypeNumber, PrimaryCenter } from '../../types';

type TypeInsight = {
  steady: string;
  stress: string;
  grow: string;
  selfCheck: string;
};

type TypeSocialImpression = {
  presence: string;
};

const TYPE_INSIGHTS: Record<TypeNumber, TypeInsight> = {
  1: {
    steady: 'improve what is not working and name clear standards',
    stress: 'tighten into criticism and get stuck on what is incorrect',
    grow: 'trade perfection for precision: pick the true priority and allow "good enough" elsewhere',
    selfCheck: 'Am I trying to fix the person instead of fixing the problem?'
  },
  2: {
    steady: 'tune into people and offer practical care',
    stress: 'over-give, hint, or become resentful when needs go unspoken',
    grow: 'ask directly for what you want before you earn it through effort',
    selfCheck: 'Am I helping to connect, or helping to be needed?'
  },
  3: {
    steady: 'set goals, mobilize energy, and deliver outcomes',
    stress: 'perform, over-adapt, or push success to avoid feeling exposed',
    grow: 'slow one notch and name the real feeling driving the sprint',
    selfCheck: 'Am I doing this to be effective, or to be impressive?'
  },
  4: {
    steady: 'add depth, meaning, and emotional truth',
    stress: 'intensify, compare, or withdraw into what feels missing',
    grow: 'move from mood to motion: do one grounded action that supports your value today',
    selfCheck: 'Am I honoring my feelings, or letting them run the whole room?'
  },
  5: {
    steady: 'observe, research, and clarify what is really going on',
    stress: 'retreat, conserve, and stay in analysis to avoid depletion',
    grow: 'share a "good-enough" draft early and let reality refine it',
    selfCheck: 'Am I gathering clarity, or avoiding contact?'
  },
  6: {
    steady: 'anticipate risks, prepare, and build loyal support',
    stress: 'scan for threats, second-guess, or test trust repeatedly',
    grow: 'name the fear out loud, choose one trusted input, and take the next small step',
    selfCheck: 'Am I seeking security, or feeding uncertainty?'
  },
  7: {
    steady: 'generate options, reframe, and keep energy moving forward',
    stress: 'escape into more possibilities and avoid the painful constraint',
    grow: 'stay with the discomfort long enough to finish one thing cleanly',
    selfCheck: 'Am I choosing freedom, or avoiding pain?'
  },
  8: {
    steady: 'take decisive action and protect what matters',
    stress: 'over-control, escalate, or treat vulnerability as weakness',
    grow: 'lead with clear boundaries and add one moment of softness or listening',
    selfCheck: 'Am I protecting, or armoring?'
  },
  9: {
    steady: 'stabilize, mediate, and create calm agreement',
    stress: 'numb out, delay, or merge to keep the peace',
    grow: 'name your preference early and tolerate the small friction it creates',
    selfCheck: 'Am I keeping peace, or avoiding conflict?'
  }
};

const TYPE_SOCIAL: Record<TypeNumber, TypeSocialImpression> = {
  1: { presence: 'clear, principled, and improvement-oriented' },
  2: { presence: 'warm, attentive, and personally invested' },
  3: { presence: 'focused, capable, and momentum-building' },
  4: { presence: 'deep, genuine, and meaning-seeking' },
  5: { presence: 'calm, thoughtful, and discerning' },
  6: { presence: 'steady, loyal, and quietly vigilant' },
  7: { presence: 'upbeat, quick, and possibility-minded' },
  8: { presence: 'strong, direct, and protective' },
  9: { presence: 'settling, patient, and easy to be around' }
};

function getOrderedTypes(
  gutType: TypeNumber,
  heartType: TypeNumber,
  headType: TypeNumber,
  primaryCenter: PrimaryCenter
): [TypeNumber, TypeNumber, TypeNumber] {
  if (primaryCenter === 'gut') return [gutType, heartType, headType];
  if (primaryCenter === 'heart') return [heartType, gutType, headType];
  return [headType, gutType, heartType];
}

export function getTritypeInsights(args: {
  gutType: TypeNumber;
  heartType: TypeNumber;
  headType: TypeNumber;
  primaryCenter: PrimaryCenter;
}): {
  setCode: string;
  tritypeCode: string;
  primaryType: TypeNumber;
  portrait: string;
  lead: { type: TypeNumber; label: string; insight: string };
  supports: Array<{ type: TypeNumber; label: string; insight: string }>;
  stressLoop: string;
  growthExperiment: string;
  selfChecks: string[];
} {
  const { gutType, heartType, headType, primaryCenter } = args;

  const setCode = `${gutType}${heartType}${headType}`;
  const [t1, t2, t3] = getOrderedTypes(gutType, heartType, headType, primaryCenter);
  const tritypeCode = `${t1}${t2}${t3}`;
  const primaryType = t1;

  const info1 = getTypeByNumber(t1);
  const info2 = getTypeByNumber(t2);
  const info3 = getTypeByNumber(t3);

  const label1 = info1 ? `Type ${t1}: ${info1.name}` : `Type ${t1}`;
  const label2 = info2 ? `Type ${t2}: ${info2.name}` : `Type ${t2}`;
  const label3 = info3 ? `Type ${t3}: ${info3.name}` : `Type ${t3}`;

  const short1 = info1?.name?.replace(/^The /, '') ?? `Type ${t1}`;
  const short2 = info2?.name?.replace(/^The /, '') ?? `Type ${t2}`;
  const short3 = info3?.name?.replace(/^The /, '') ?? `Type ${t3}`;

  const title1 = `Type ${t1} (${short1})`;
  const title2 = `Type ${t2} (${short2})`;
  const title3 = `Type ${t3} (${short3})`;

  const lead = { type: t1, label: label1, insight: TYPE_INSIGHTS[t1].steady };
  const supports = [
    { type: t2, label: label2, insight: TYPE_INSIGHTS[t2].steady },
    { type: t3, label: label3, insight: TYPE_INSIGHTS[t3].steady }
  ];

  const normalizeDesire = (desire: string) => desire.replace(/^To /, 'to ').trim();
  const normalizeFear = (fear: string) => fear.replace(/^Being /, 'being ').trim();

  const desireLine = info1?.coreDesire ? `At the heart of it, you want ${normalizeDesire(info1.coreDesire)}.` : '';
  const fearLine = info1?.coreFear ? `And you get reactive when the threat is ${normalizeFear(info1.coreFear)}.` : '';

  const portraitParts = [
    `You lead with ${title1}: you tend to ${TYPE_INSIGHTS[t1].steady}.`,
    `${desireLine} ${fearLine}`.trim(),
    `Your ${title2} side helps you ${TYPE_INSIGHTS[t2].steady}, and your ${title3} side helps you ${TYPE_INSIGHTS[t3].steady}.`,
    `People often experience you as ${TYPE_SOCIAL[t1].presence}, with ${TYPE_SOCIAL[t2].presence} and ${TYPE_SOCIAL[t3].presence} in the mix.`
  ].filter(Boolean);
  const portrait = portraitParts.join(' ');

  const stressLoop = `Under pressure, you may ${TYPE_INSIGHTS[t1].stress}, then ${TYPE_INSIGHTS[t2].stress}, and finally ${TYPE_INSIGHTS[t3].stress}.`;
  const growthExperiment = `Try this reset: ${TYPE_INSIGHTS[t1].grow}. Then ${TYPE_INSIGHTS[t2].grow}. Finally ${TYPE_INSIGHTS[t3].grow}.`;

  return {
    setCode,
    tritypeCode,
    primaryType,
    portrait,
    lead,
    supports,
    stressLoop,
    growthExperiment,
    selfChecks: [TYPE_INSIGHTS[t1].selfCheck, TYPE_INSIGHTS[t2].selfCheck, TYPE_INSIGHTS[t3].selfCheck]
  };
}
