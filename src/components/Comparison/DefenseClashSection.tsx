import type { TypeNumber, DefenseMechanism } from '../../types';

interface DefenseClashSectionProps {
  type1: TypeNumber;
  type2: TypeNumber;
  defense1: DefenseMechanism | null;
  defense2: DefenseMechanism | null;
  centerColor1: string;
  centerColor2: string;
}

// Generate insight about how defenses interact
function getDefenseInteractionInsight(
  type1: TypeNumber,
  type2: TypeNumber,
  defense1: DefenseMechanism | null,
  defense2: DefenseMechanism | null
): { clashPoint: string; growthEdge: string } {
  if (!defense1 || !defense2) {
    return {
      clashPoint: 'Unable to analyze defense interaction.',
      growthEdge: 'Learn about each other\'s defensive patterns.'
    };
  }

  // Same defense mechanism
  if (defense1.name === defense2.name) {
    return {
      clashPoint: `Both use ${defense1.name}, which means you understand each other's blind spots intuitively. However, you may reinforce rather than challenge each other's patterns.`,
      growthEdge: `Since you share this pattern, you can help each other recognize when it's active. Practice gently naming it when you see it in each other.`
    };
  }

  // Specific pairings with meaningful interactions
  const interactions: Record<string, { clashPoint: string; growthEdge: string }> = {
    'Reaction Formation-Repression': {
      clashPoint: 'One transforms unacceptable feelings into their opposite, while Two pushes needs out of awareness entirely. One may criticize Two for "not being genuine" while Two feels judged for their caring.',
      growthEdge: 'One can help Two acknowledge hidden needs by modeling self-improvement. Two can help One access suppressed anger through warmth and acceptance.'
    },
    'Reaction Formation-Rationalization': {
      clashPoint: 'One converts impulses into virtues while Seven explains away discomfort with logic. One may see Seven as irresponsible; Seven may see One as rigid and joyless.',
      growthEdge: 'Seven\'s ability to reframe can help One lighten up. One\'s commitment to facing unpleasant truths can help Seven stay with difficult emotions.'
    },
    'Reaction Formation-Denial': {
      clashPoint: 'One transforms feelings into their opposite; Eight refuses to acknowledge vulnerability at all. Both suppress, but One through morality and Eight through strength.',
      growthEdge: 'Eight\'s directness can help One express anger cleanly. One\'s self-reflection can help Eight acknowledge the feelings underneath the armor.'
    },
    'Repression-Identification': {
      clashPoint: 'Two represses their needs while Three identifies completely with achievements. Both lose authentic self—Two by focusing on others, Three by becoming a role.',
      growthEdge: 'Two can model that being loved doesn\'t require performing. Three can model that pursuing goals is healthy, not selfish.'
    },
    'Repression-Denial': {
      clashPoint: 'Two hides needs from themselves; Eight denies vulnerability entirely. Two\'s indirect approach frustrates Eight\'s need for directness. Eight\'s bluntness can trigger Two\'s hidden resentment.',
      growthEdge: 'Eight can help Two be direct about needs. Two can help Eight recognize that needing others isn\'t weakness.'
    },
    'Identification-Introjection': {
      clashPoint: 'Three becomes their role; Four absorbs external judgments as identity. Both struggle with authentic self—Three by performing, Four by taking criticism personally.',
      growthEdge: 'Four can model emotional authenticity over image. Three can model that identity doesn\'t require suffering.'
    },
    'Introjection-Isolation': {
      clashPoint: 'Four absorbs everything personally; Five disconnects from feelings entirely. Four may feel unseen by Five\'s detachment; Five may feel overwhelmed by Four\'s emotional intensity.',
      growthEdge: 'Five\'s objectivity can help Four not take everything personally. Four\'s emotional depth can help Five reconnect with feelings.'
    },
    'Isolation-Projection': {
      clashPoint: 'Five withdraws to analyze from safety; Six projects their fears outward. Five\'s detachment may increase Six\'s anxiety; Six\'s suspicion may push Five further away.',
      growthEdge: 'Five\'s calm analysis can ground Six\'s anxious projections. Six\'s loyalty can help Five trust enough to engage.'
    },
    'Projection-Rationalization': {
      clashPoint: 'Six projects anxiety outward; Seven rationalizes discomfort away. Six may see Seven as dangerously naive; Seven may see Six as unnecessarily fearful.',
      growthEdge: 'Seven\'s optimism can balance Six\'s worst-case thinking. Six\'s caution can help Seven take legitimate concerns seriously.'
    },
    'Rationalization-Narcotization': {
      clashPoint: 'Seven explains away pain; Nine numbs it out. Both avoid discomfort but differently—Seven through mental reframing, Nine through checking out.',
      growthEdge: 'Seven\'s energy can wake Nine up. Nine\'s acceptance can help Seven stop running from difficult truths.'
    },
    'Denial-Narcotization': {
      clashPoint: 'Eight denies vulnerability through power; Nine numbs through merging and routine. Eight may try to shake Nine awake; Nine may stubbornly resist.',
      growthEdge: 'Eight\'s directness can help Nine engage with their own wants. Nine\'s calm can help Eight drop their armor.'
    }
  };

  // Check for specific pairings (in either order)
  const key1 = `${defense1.name}-${defense2.name}`;
  const key2 = `${defense2.name}-${defense1.name}`;

  if (interactions[key1]) {
    return interactions[key1];
  }
  if (interactions[key2]) {
    return interactions[key2];
  }

  // Generic fallback based on center
  return {
    clashPoint: `${defense1.name} (Type ${type1}) and ${defense2.name} (Type ${type2}) represent different strategies for managing discomfort. Friction can arise when these strategies conflict.`,
    growthEdge: `Awareness of your different defenses is the first step. Notice when each of you is operating from defense rather than authenticity, and gently name it.`
  };
}

export function DefenseClashSection({
  type1,
  type2,
  defense1,
  defense2,
  centerColor1,
  centerColor2
}: DefenseClashSectionProps) {
  const insight = getDefenseInteractionInsight(type1, type2, defense1, defense2);

  return (
    <div className="space-y-6">
      {/* Defense Mechanism Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Type 1 Defense */}
        {defense1 && (
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-600">
            <div className="p-3 text-white" style={{ backgroundColor: centerColor1 }}>
              <div className="flex items-center justify-between">
                <span className="font-medium">Type {type1}&apos;s Defense</span>
                <span className="text-sm opacity-90">{defense1.name}</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
                {defense1.description}
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                  In Action
                </h5>
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  {defense1.inAction}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Type 2 Defense */}
        {defense2 && (
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-600">
            <div className="p-3 text-white" style={{ backgroundColor: centerColor2 }}>
              <div className="flex items-center justify-between">
                <span className="font-medium">Type {type2}&apos;s Defense</span>
                <span className="text-sm opacity-90">{defense2.name}</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
                {defense2.description}
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                  In Action
                </h5>
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  {defense2.inAction}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Clash Analysis */}
      <div className="bg-gradient-to-r from-terracotta-50 to-gold-50 dark:from-terracotta-900/20 dark:to-gold-900/20 rounded-xl p-5 border border-terracotta-200 dark:border-terracotta-800">
        <h4 className="text-lg font-serif font-semibold text-charcoal dark:text-white mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          How These Defenses Interact
        </h4>

        <div className="space-y-4">
          <div>
            <h5 className="text-sm font-semibold text-terracotta-700 dark:text-terracotta-300 mb-1">
              Potential Friction Point
            </h5>
            <p className="text-sm text-charcoal-light dark:text-cream-200">
              {insight.clashPoint}
            </p>
          </div>

          <div className="border-t border-terracotta-200 dark:border-terracotta-700 pt-4">
            <h5 className="text-sm font-semibold text-gold-700 dark:text-gold-300 mb-1 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Growth Edge
            </h5>
            <p className="text-sm text-charcoal-light dark:text-cream-200">
              {insight.growthEdge}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
