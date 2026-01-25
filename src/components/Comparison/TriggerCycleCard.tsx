import type { TypeNumber, EnneagramType, DefenseMechanism, DisintegrationPath } from '../../types';

interface TriggerCycleCardProps {
  type1: TypeNumber;
  type2: TypeNumber;
  typeData1: EnneagramType;
  typeData2: EnneagramType;
  defense1: DefenseMechanism | null;
  defense2: DefenseMechanism | null;
  disintegration1: DisintegrationPath | null;
  disintegration2: DisintegrationPath | null;
}

// Generate trigger cycle narrative
function generateTriggerCycle(
  type1: TypeNumber,
  type2: TypeNumber,
  _typeData1: EnneagramType,
  _typeData2: EnneagramType,
  defense1: DefenseMechanism | null,
  defense2: DefenseMechanism | null,
  _disintegration1: DisintegrationPath | null,
  _disintegration2: DisintegrationPath | null
): {
  steps: Array<{ actor: TypeNumber; action: string }>;
  breakCycle: string;
} {
  // Type-specific trigger patterns
  const triggerPatterns: Record<TypeNumber, {
    trigger: string;
    response: string;
    escalation: string;
  }> = {
    1: {
      trigger: 'feels criticized or sees something "wrong"',
      response: 'becomes more rigid and correcting',
      escalation: 'self-righteousness and resentment build'
    },
    2: {
      trigger: 'feels unappreciated or rejected',
      response: 'gives more intensely while tracking what they\'ve given',
      escalation: 'becomes demanding and martyred'
    },
    3: {
      trigger: 'feels like a failure or fears exposure',
      response: 'works harder and polishes their image',
      escalation: 'becomes disconnected from authentic feelings'
    },
    4: {
      trigger: 'feels unseen, ordinary, or abandoned',
      response: 'withdraws into melancholy and intensifies emotions',
      escalation: 'becomes self-absorbed and dramatic'
    },
    5: {
      trigger: 'feels overwhelmed or depleted',
      response: 'withdraws to conserve resources',
      escalation: 'becomes detached and dismissive'
    },
    6: {
      trigger: 'perceives a threat or feels uncertain',
      response: 'becomes vigilant and questioning',
      escalation: 'becomes paranoid or aggressively challenging'
    },
    7: {
      trigger: 'feels trapped, limited, or forced to face pain',
      response: 'seeks escape through options and positivity',
      escalation: 'becomes scattered and avoidant'
    },
    8: {
      trigger: 'feels controlled or senses vulnerability',
      response: 'asserts dominance and confronts directly',
      escalation: 'becomes intimidating and aggressive'
    },
    9: {
      trigger: 'faces conflict or pressure to engage',
      response: 'numbs out and goes along',
      escalation: 'becomes stubborn and passive-aggressive'
    }
  };

  const pattern1 = triggerPatterns[type1];
  const pattern2 = triggerPatterns[type2];

  // Build the cycle steps
  const steps: Array<{ actor: TypeNumber; action: string }> = [
    {
      actor: type1,
      action: `Type ${type1} ${pattern1.trigger} and ${pattern1.response}.`
    },
    {
      actor: type2,
      action: `Type ${type2} perceives this as threatening or uncomfortable, ${pattern2.trigger}.`
    },
    {
      actor: type2,
      action: `Type ${type2} ${pattern2.response}, which ${pattern2.escalation}.`
    },
    {
      actor: type1,
      action: `Type ${type1} experiences this as triggering—${pattern1.escalation}.`
    }
  ];

  // Generate break-the-cycle advice
  const breakCycleAdvice = generateBreakCycleAdvice(type1, type2, defense1, defense2);

  return {
    steps,
    breakCycle: breakCycleAdvice
  };
}

function generateBreakCycleAdvice(
  type1: TypeNumber,
  type2: TypeNumber,
  defense1: DefenseMechanism | null,
  defense2: DefenseMechanism | null
): string {
  const adviceMap: Partial<Record<TypeNumber, Partial<Record<TypeNumber, string>>>> = {
    1: {
      7: 'Type 1: Let go of being right. Type 7: Follow through on one commitment. Meet in the middle with structured play.',
      4: 'Type 1: Acknowledge feelings before fixing. Type 4: Channel emotions into concrete action. Meet with creative projects.',
      9: 'Type 1: Accept "good enough." Type 9: Express what you actually want. Practice direct, non-judgmental requests.',
      8: 'Type 1: Pick your battles. Type 8: Soften your intensity. Focus on shared values rather than control.',
    },
    2: {
      8: 'Type 2: Be direct about needs. Type 8: Let yourself receive care. Practice asking without manipulation or demand.',
      4: 'Type 2: Give space for processing. Type 4: Accept help without analyzing motives. Allow comfortable silence.',
      5: 'Type 2: Respect boundaries as caring. Type 5: Express appreciation verbally. Schedule connection; honor solitude.',
    },
    3: {
      6: 'Type 3: Slow down and be present. Type 6: Trust actions over words. Build trust through consistency, not performance.',
      4: 'Type 3: Show real feelings. Type 4: Appreciate effort without demanding depth. Honor both doing and being.',
      9: 'Type 3: Value presence over productivity. Type 9: Set personal goals. Celebrate small wins together.',
    },
    4: {
      5: 'Type 4: Don\'t take withdrawal personally. Type 5: Share feelings, not just thoughts. Schedule emotional check-ins.',
      7: 'Type 4: Allow lightness without calling it shallow. Type 7: Stay with intensity briefly. Balance depth with adventure.',
      1: 'Type 4: Take action despite mood. Type 1: Allow imperfection in emotional expression. Create together.',
    },
    5: {
      8: 'Type 5: Engage more visibly. Type 8: Give processing time. Respect both analysis and action.',
      7: 'Type 5: Join one adventure. Type 7: Go deep on one topic. Alternate between breadth and depth.',
      2: 'Type 5: Verbalize appreciation. Type 2: Allow space as a form of love. Quality over quantity in connection.',
    },
    6: {
      9: 'Type 6: Trust the peace is real. Type 9: Show up with your opinion. Ground each other in present reality.',
      7: 'Type 6: Enjoy without finding problems. Type 7: Acknowledge legitimate concerns. Balance caution and enthusiasm.',
      3: 'Type 6: Trust competence you see. Type 3: Show vulnerability safely. Build trust through small disclosures.',
    },
    7: {
      1: 'Type 7: Complete before moving on. Type 1: Allow spontaneity. Structured adventures work for both.',
      5: 'Type 7: Stay with one topic. Type 5: Engage with enthusiasm. Intellectual exploration satisfies both.',
      4: 'Type 7: Sit with the feeling. Type 4: Find beauty in the ordinary. Balance presence with imagination.',
    },
    8: {
      2: 'Type 8: Receive without owing. Type 2: Give without expectations. Practice vulnerable care.',
      5: 'Type 8: Give time to think. Type 5: State your position. Combine strategy with decisive action.',
      9: 'Type 8: Invite rather than push. Type 9: State clear preferences. Both practice patience.',
    },
    9: {
      3: 'Type 9: Set one personal goal. Type 3: Celebrate being over doing. Active rest works for both.',
      6: 'Type 9: Engage with concerns directly. Type 6: Accept reassurance. Ground in shared values.',
      1: 'Type 9: Express preferences. Type 1: Accept the first answer. Practice direct communication.',
    }
  };

  // Check both orderings
  const advice = adviceMap[type1]?.[type2] || adviceMap[type2]?.[type1];

  if (advice) {
    return advice;
  }

  // Generic fallback
  return `Pause and name what's happening: "I notice we're in our pattern." Type ${type1}: Soften your ${defense1?.name || 'defense'}. Type ${type2}: Soften your ${defense2?.name || 'defense'}. Return to the present moment together.`;
}

export function TriggerCycleCard({
  type1,
  type2,
  typeData1,
  typeData2,
  defense1,
  defense2,
  disintegration1,
  disintegration2
}: TriggerCycleCardProps) {
  const cycle = generateTriggerCycle(
    type1, type2, typeData1, typeData2,
    defense1, defense2, disintegration1, disintegration2
  );

  return (
    <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-red-900/20 dark:via-orange-900/20 dark:to-yellow-900/20 rounded-xl overflow-hidden border border-red-200 dark:border-red-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 text-white">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <h4 className="text-lg font-serif font-bold">Potential Conflict Loop</h4>
        </div>
        <p className="text-sm text-red-100 mt-1">
          A pattern that can emerge when both types are stressed
        </p>
      </div>

      {/* Cycle Steps */}
      <div className="p-5">
        <div className="space-y-3 mb-6">
          {cycle.steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <span className="w-7 h-7 rounded-full bg-charcoal text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                {index < cycle.steps.length - 1 && (
                  <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600 my-1" />
                )}
              </div>
              <p className="text-sm text-charcoal-light dark:text-cream-200 pt-1">
                {step.action}
              </p>
            </div>
          ))}
          <div className="flex items-center gap-3 pl-10 text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-xs italic">(Cycle continues...)</span>
          </div>
        </div>

        {/* Break the Cycle */}
        <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border-l-4 border-green-500">
          <h5 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Break the Cycle
          </h5>
          <p className="text-sm text-charcoal-light dark:text-cream-200">
            {cycle.breakCycle}
          </p>
        </div>
      </div>
    </div>
  );
}
