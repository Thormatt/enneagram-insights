import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TypeNumber } from '../../types';
import { getLevelsByHealthState } from '../../data';

type HealthState = 'healthy' | 'average' | 'unhealthy';

interface HealthCombinationExplorerProps {
  type1: TypeNumber;
  type2: TypeNumber;
  centerColor1: string;
  centerColor2: string;
}

interface HealthToggleProps {
  typeNumber: TypeNumber;
  centerColor: string;
  value: HealthState;
  onChange: (state: HealthState) => void;
}

function HealthToggle({ typeNumber, centerColor, value, onChange }: HealthToggleProps) {
  const states: { id: HealthState; label: string; icon: React.ReactNode }[] = [
    {
      id: 'healthy',
      label: 'Healthy',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      id: 'average',
      label: 'Average',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      )
    },
    {
      id: 'unhealthy',
      label: 'Stressed',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="w-6 h-6 rounded-full text-white text-sm font-bold flex items-center justify-center"
          style={{ backgroundColor: centerColor }}
        >
          {typeNumber}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Type {typeNumber}&apos;s State
        </span>
      </div>
      <div className="flex gap-1">
        {states.map((state) => {
          const isSelected = value === state.id;
          const stateColors = {
            healthy: isSelected ? 'bg-emerald-500 text-white' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
            average: isSelected ? 'bg-amber-500 text-white' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400',
            unhealthy: isSelected ? 'bg-red-500 text-white' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
          };

          return (
            <button
              key={state.id}
              onClick={() => onChange(state.id)}
              className={`
                flex-1 px-2 py-2 rounded-lg text-xs font-medium transition-all
                flex items-center justify-center gap-1
                ${stateColors[state.id]}
                ${isSelected ? 'shadow-md scale-105' : 'hover:scale-102'}
              `}
            >
              {state.icon}
              <span className="hidden sm:inline">{state.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Generate interaction content based on health states and types
function getInteractionContent(
  type1: TypeNumber,
  type2: TypeNumber,
  health1: HealthState,
  health2: HealthState
) {
  // Get representative level data
  const level1 = getLevelsByHealthState(type1, health1)[0];
  const level2 = getLevelsByHealthState(type2, health2)[0];

  // Determine overall tone based on combination
  const healthScore = { healthy: 2, average: 1, unhealthy: 0 };
  const combinedScore = healthScore[health1] + healthScore[health2];

  // Base dynamics by score
  const dynamicsByScore: Record<number, { tone: string; color: string; bgClass: string }> = {
    4: { tone: 'Thriving', color: '#10b981', bgClass: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800' },
    3: { tone: 'Stabilizing', color: '#84cc16', bgClass: 'bg-lime-50 dark:bg-lime-900/20 border-lime-200 dark:border-lime-800' },
    2: { tone: 'Managing', color: '#eab308', bgClass: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' },
    1: { tone: 'Strained', color: '#f97316', bgClass: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' },
    0: { tone: 'Crisis', color: '#ef4444', bgClass: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' }
  };

  const baseDynamic = dynamicsByScore[combinedScore];

  // Generate specific content based on the combination
  const isSymmetric = health1 === health2;
  const healthierPerson = healthScore[health1] > healthScore[health2] ? 1 : healthScore[health2] > healthScore[health1] ? 2 : 0;

  let dynamicName = '';
  let description = '';
  let warningSigns: string[] = [];
  let advice1 = '';
  let advice2 = '';
  let potential = '';

  if (isSymmetric) {
    // Both at same level
    if (health1 === 'healthy') {
      dynamicName = 'Mutual Growth';
      description = `Both types are operating from their best selves. Type ${type1} brings ${level1?.characteristics?.[0]?.toLowerCase() || 'their gifts'} while Type ${type2} contributes ${level2?.characteristics?.[0]?.toLowerCase() || 'their strengths'}. This creates a resilient, generative dynamic where both partners support each other's continued development.`;
      warningSigns = ['Complacency - taking the good dynamic for granted', 'External stressors that could destabilize one partner'];
      advice1 = `Continue your growth practices. Your ${level1?.title?.toLowerCase() || 'healthy state'} creates safety for your partner.`;
      advice2 = `Your ${level2?.title?.toLowerCase() || 'groundedness'} helps stabilize the relationship. Keep nurturing your self-awareness.`;
      potential = 'A deeply fulfilling partnership with room for continued growth together.';
    } else if (health1 === 'average') {
      dynamicName = 'Comfortable but Stuck';
      description = `Both partners are functional but operating from their default patterns. Type ${type1} may be ${level1?.characteristics?.[0]?.toLowerCase() || 'in their usual mode'} while Type ${type2} shows ${level2?.characteristics?.[0]?.toLowerCase() || 'typical behaviors'}. Without conscious effort, you may reinforce each other's blind spots.`;
      warningSigns = [
        'Recurring arguments that never fully resolve',
        'Feeling like roommates rather than partners',
        'Avoiding deeper conversations'
      ];
      advice1 = `Notice when you're on autopilot. Your pattern of being ${level1?.characteristics?.[1]?.toLowerCase() || 'in your comfort zone'} may be limiting growth.`;
      advice2 = `Be aware of your tendency toward ${level2?.characteristics?.[1]?.toLowerCase() || 'default behaviors'}. Small changes can shift the whole dynamic.`;
      potential = 'Stable but stagnant without intentional growth work. Great potential if both commit to development.';
    } else {
      dynamicName = 'Crisis Mode';
      description = `Both partners are struggling significantly. Type ${type1} is showing ${level1?.characteristics?.[0]?.toLowerCase() || 'stress behaviors'} while Type ${type2} exhibits ${level2?.characteristics?.[0]?.toLowerCase() || 'their own struggles'}. These patterns often amplify each other, creating a destructive cycle.`;
      warningSigns = [
        'Escalating conflicts with no resolution',
        'Feeling trapped or hopeless',
        'Loss of basic respect or safety'
      ];
      advice1 = `Your wellbeing comes first. Seek individual support - therapy, trusted friends, or crisis resources if needed.`;
      advice2 = `Focus on your own healing before trying to fix the relationship. You cannot pour from an empty cup.`;
      potential = 'Without intervention, this dynamic often deteriorates further. Individual healing must come first.';
    }
  } else {
    // Asymmetric - one healthier than the other
    const healthierType = healthierPerson === 1 ? type1 : type2;
    const strugglingType = healthierPerson === 1 ? type2 : type1;
    const healthierLevel = healthierPerson === 1 ? level1 : level2;
    const strugglingLevel = healthierPerson === 1 ? level2 : level1;
    const healthierHealth = healthierPerson === 1 ? health1 : health2;
    const strugglingHealth = healthierPerson === 1 ? health2 : health1;

    if (healthierHealth === 'healthy' && strugglingHealth === 'unhealthy') {
      // Maximum gap
      dynamicName = 'The Anchor and the Storm';
      description = `Type ${healthierType} is grounded as "${healthierLevel?.title || 'their best self'}" while Type ${strugglingType} is struggling as "${strugglingLevel?.title || 'under stress'}". This creates significant strain - the healthy partner may feel like they're constantly rescuing or walking on eggshells.`;
      warningSigns = [
        `Type ${healthierType} feeling exhausted from carrying the relationship`,
        `Type ${strugglingType} becoming dependent or resentful`,
        'The healthy partner losing themselves in caretaking'
      ];
      if (healthierPerson === 1) {
        advice1 = `Set compassionate boundaries. You cannot heal your partner - only support them. Protect your own wellbeing.`;
        advice2 = `Your partner's health is a gift, not a fix. Seek professional help and focus on one small positive action daily.`;
      } else {
        advice1 = `Your partner's health is a gift, not a fix. Seek professional help and focus on one small positive action daily.`;
        advice2 = `Set compassionate boundaries. You cannot heal your partner - only support them. Protect your own wellbeing.`;
      }
      potential = 'Recovery is possible but requires professional support for the struggling partner and strong boundaries from the healthy one.';
    } else if (healthierHealth === 'healthy' && strugglingHealth === 'average') {
      // Moderate gap - healthy + average
      dynamicName = 'The Guide and the Learner';
      description = `Type ${healthierType} operates from "${healthierLevel?.title || 'a healthy place'}" which naturally models growth for Type ${strugglingType}, currently at "${strugglingLevel?.title || 'average functioning'}". This can be a beautiful growth dynamic if the "learner" stays open.`;
      warningSigns = [
        `Type ${strugglingType} feeling judged or "not good enough"`,
        `Type ${healthierType} becoming preachy or impatient`,
        'Power imbalance in decision-making'
      ];
      if (healthierPerson === 1) {
        advice1 = `Lead by example, not lecture. Your groundedness is inspiring when offered without superiority.`;
        advice2 = `Stay curious about your own growth. Your partner shows what's possible - learn from them without comparison.`;
      } else {
        advice1 = `Stay curious about your own growth. Your partner shows what's possible - learn from them without comparison.`;
        advice2 = `Lead by example, not lecture. Your groundedness is inspiring when offered without superiority.`;
      }
      potential = 'Excellent growth potential. The healthier partner can be a positive influence without becoming a project manager.';
    } else {
      // Average + unhealthy
      dynamicName = 'The Caretaker and the Dependent';
      description = `Type ${healthierType} at "${healthierLevel?.title || 'average functioning'}" is trying to stabilize Type ${strugglingType} who shows "${strugglingLevel?.title || 'stress behaviors'}". This often creates an enabling dynamic where the "caretaker" loses themselves.`;
      warningSigns = [
        `Type ${healthierType} making excuses for their partner's behavior`,
        `Type ${strugglingType} becoming more dependent rather than improving`,
        'The relationship becoming one-sided'
      ];
      if (healthierPerson === 1) {
        advice1 = `Watch for enabling. Supporting someone doesn't mean tolerating harmful patterns. Seek outside perspective.`;
        advice2 = `Your partner cannot save you - only support you. Take ownership of your healing with professional help.`;
      } else {
        advice1 = `Your partner cannot save you - only support you. Take ownership of your healing with professional help.`;
        advice2 = `Watch for enabling. Supporting someone doesn't mean tolerating harmful patterns. Seek outside perspective.`;
      }
      potential = 'Risk of the average partner being pulled down. Professional intervention recommended for the struggling partner.';
    }
  }

  return {
    dynamicName,
    description,
    warningSigns,
    advice1,
    advice2,
    potential,
    ...baseDynamic,
    level1,
    level2
  };
}

export function HealthCombinationExplorer({
  type1,
  type2,
  centerColor1,
  centerColor2
}: HealthCombinationExplorerProps) {
  const [health1, setHealth1] = useState<HealthState>('average');
  const [health2, setHealth2] = useState<HealthState>('average');

  const content = useMemo(
    () => getInteractionContent(type1, type2, health1, health2),
    [type1, type2, health1, health2]
  );

  return (
    <div className="space-y-4">
      {/* Toggle Selectors */}
      <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
        <HealthToggle
          typeNumber={type1}
          centerColor={centerColor1}
          value={health1}
          onChange={setHealth1}
        />
        <div className="flex items-end pb-2">
          <span className="text-gray-400 text-lg">+</span>
        </div>
        <HealthToggle
          typeNumber={type2}
          centerColor={centerColor2}
          value={health2}
          onChange={setHealth2}
        />
      </div>

      {/* Dynamic Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${health1}-${health2}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`rounded-xl border overflow-hidden ${content.bgClass}`}
        >
          {/* Header */}
          <div
            className="p-4 text-white"
            style={{ backgroundColor: content.color }}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-serif font-bold text-lg">{content.dynamicName}</h4>
              <span className="text-sm opacity-80">{content.tone}</span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-sm opacity-90">
              <span className="flex items-center gap-1">
                <span className="font-bold">{type1}</span>
                <span className="capitalize">{health1 === 'unhealthy' ? 'stressed' : health1}</span>
              </span>
              <span>+</span>
              <span className="flex items-center gap-1">
                <span className="font-bold">{type2}</span>
                <span className="capitalize">{health2 === 'unhealthy' ? 'stressed' : health2}</span>
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {content.description}
            </p>

            {/* Warning Signs */}
            <div>
              <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Warning Signs
              </h5>
              <ul className="space-y-1">
                {content.warningSigns.map((sign, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">!</span>
                    {sign}
                  </li>
                ))}
              </ul>
            </div>

            {/* Advice for Each Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/60 dark:bg-gray-700/40">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center"
                    style={{ backgroundColor: centerColor1 }}
                  >
                    {type1}
                  </span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    What {type1} Can Do
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {content.advice1}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white/60 dark:bg-gray-700/40">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center"
                    style={{ backgroundColor: centerColor2 }}
                  >
                    {type2}
                  </span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    What {type2} Can Do
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {content.advice2}
                </p>
              </div>
            </div>

            {/* Potential Outcome */}
            <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
              <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                Potential Outcome
              </h5>
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                {content.potential}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
