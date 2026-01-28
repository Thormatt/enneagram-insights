import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { getCenterColor, getTypeByNumber } from '../../data';
import type { TypeNumber, CenterType } from '../../types';

interface InsightRevealProps {
  resonatedTypes: TypeNumber[];
  userCoreType?: TypeNumber;
  onContinue: () => void;
}

export function InsightReveal({
  resonatedTypes,
  userCoreType,
  onContinue
}: InsightRevealProps) {
  const analysis = useMemo(() => {
    if (resonatedTypes.length === 0) {
      return {
        pattern: 'No resonance selected',
        insight: 'Consider exploring what felt most familiar or true about each type\'s response.',
        centerBreakdown: { gut: 0, heart: 0, head: 0 } as Record<CenterType, number>
      };
    }

    // Analyze center distribution
    const centerBreakdown: Record<CenterType, number> = { gut: 0, heart: 0, head: 0 };
    resonatedTypes.forEach(type => {
      const typeInfo = getTypeByNumber(type);
      if (typeInfo) {
        centerBreakdown[typeInfo.center]++;
      }
    });

    // Find dominant center
    const dominantCenter = (Object.entries(centerBreakdown) as [CenterType, number][])
      .sort((a, b) => b[1] - a[1])[0];

    // Determine pattern
    let pattern = '';
    let insight = '';

    if (resonatedTypes.length === 1) {
      const typeInfo = getTypeByNumber(resonatedTypes[0]);
      pattern = `Strong Type ${resonatedTypes[0]} resonance`;
      insight = `You connected deeply with the ${typeInfo?.name}'s perspective. This may reflect your primary way of processing situations.`;
    } else if (dominantCenter[1] >= 2) {
      const centerNames: Record<CenterType, string> = {
        gut: 'Body/Instinct',
        heart: 'Heart/Feeling',
        head: 'Head/Thinking'
      };
      pattern = `${centerNames[dominantCenter[0]]} center affinity`;
      insight = dominantCenter[0] === 'gut'
        ? 'You tend to respond from your gut instincts—action, boundaries, and physical presence guide your reactions.'
        : dominantCenter[0] === 'heart'
          ? 'You process through emotional attunement—relationships, identity, and feeling states shape your responses.'
          : 'You approach situations analytically—thinking, planning, and understanding come first for you.';
    } else {
      pattern = 'Multi-center perspective';
      insight = 'You relate to responses across different centers, suggesting flexibility in how you process situations or complexity in your type structure.';
    }

    // Check if matches user's core type
    if (userCoreType && resonatedTypes.includes(userCoreType)) {
      insight += ` Notably, your core type (${userCoreType}) was among your selections, showing self-awareness of your patterns.`;
    } else if (userCoreType && !resonatedTypes.includes(userCoreType)) {
      const typeInfo = getTypeByNumber(userCoreType);
      insight += ` Interestingly, your core type (${typeInfo?.name}) wasn't selected—this scenario may have activated different parts of your personality.`;
    }

    return { pattern, insight, centerBreakdown };
  }, [resonatedTypes, userCoreType]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-terracotta-50 to-cream-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-warm-lg"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-terracotta-500 flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-charcoal dark:text-white mb-1">
            Your Insight
          </h3>
          <p className="text-sm text-charcoal-muted dark:text-gray-400">
            Based on your selections
          </p>
        </div>
      </div>

      {/* Pattern Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1.5 bg-terracotta-100 dark:bg-terracotta-900/30 text-terracotta-700 dark:text-terracotta-300 rounded-full text-sm font-medium">
          {analysis.pattern}
        </span>
      </div>

      {/* Insight Text */}
      <p className="text-charcoal dark:text-gray-200 leading-relaxed mb-6">
        {analysis.insight}
      </p>

      {/* Selected Types */}
      {resonatedTypes.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase text-charcoal-muted dark:text-gray-500 mb-2">
            You resonated with
          </h4>
          <div className="flex flex-wrap gap-2">
            {resonatedTypes.map(type => {
              const typeInfo = getTypeByNumber(type);
              return (
                <div
                  key={type}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 shadow-sm"
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: getCenterColor(typeInfo?.center || 'gut') }}
                  >
                    {type}
                  </span>
                  <span className="text-sm font-medium text-charcoal dark:text-white">
                    {typeInfo?.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Center Distribution */}
      {resonatedTypes.length > 0 && (
        <div className="mb-6 bg-white/50 dark:bg-gray-800/50 rounded-xl p-4">
          <h4 className="text-xs font-semibold uppercase text-charcoal-muted dark:text-gray-500 mb-3">
            Center Distribution
          </h4>
          <div className="flex gap-4">
            {(['gut', 'heart', 'head'] as CenterType[]).map(center => {
              const count = analysis.centerBreakdown[center];
              const total = resonatedTypes.length;
              const percentage = total > 0 ? (count / total) * 100 : 0;

              return (
                <div key={center} className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-xs font-medium capitalize"
                      style={{ color: getCenterColor(center) }}
                    >
                      {center}
                    </span>
                    <span className="text-xs text-charcoal-muted dark:text-gray-500">
                      {count}
                    </span>
                  </div>
                  <div className="h-2 bg-cream-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: getCenterColor(center) }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Continue Button */}
      <button
        onClick={onContinue}
        className="w-full py-3 bg-charcoal dark:bg-white text-white dark:text-charcoal font-medium rounded-xl hover:bg-charcoal/90 dark:hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
      >
        Continue Exploring
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </motion.div>
  );
}
