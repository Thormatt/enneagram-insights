import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCenterColor, getTypeByNumber } from '../../data';
import type { ScenarioResponse, TypeNumber } from '../../types';

interface TypeResponsePanelProps {
  response: ScenarioResponse;
  isResonated: boolean;
  onResonanceToggle: (type: TypeNumber) => void;
  showFullDetails?: boolean;
}

export function TypeResponsePanel({
  response,
  isResonated,
  onResonanceToggle,
  showFullDetails = false
}: TypeResponsePanelProps) {
  const [isExpanded, setIsExpanded] = useState(showFullDetails);
  const typeInfo = getTypeByNumber(response.type);
  const centerColor = getCenterColor(typeInfo?.center || 'gut');

  return (
    <motion.div
      layout
      className={`border-2 rounded-xl overflow-hidden transition-all ${
        isResonated
          ? 'border-terracotta-500 bg-terracotta-50 dark:bg-terracotta-900/20'
          : 'border-warm-border dark:border-gray-700 bg-white dark:bg-gray-800'
      }`}
    >
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center gap-3 text-left hover:bg-cream-50 dark:hover:bg-gray-700/50 transition-colors"
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
          style={{ backgroundColor: centerColor }}
        >
          {response.type}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-charcoal dark:text-white">
            Type {response.type}: {typeInfo?.name}
          </h4>
          <p className="text-sm text-charcoal-muted dark:text-gray-400 line-clamp-2">
            {response.preview}
          </p>
        </div>
        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="w-5 h-5 text-charcoal-muted flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4 border-t border-warm-border dark:border-gray-700">
              {/* Full Response */}
              <div className="pt-4 space-y-3">
                {/* Thought */}
                <div>
                  <h5 className="text-xs font-semibold uppercase text-charcoal-muted dark:text-gray-500 mb-1">
                    Internal Thought
                  </h5>
                  <p className="text-sm text-charcoal dark:text-gray-300 italic">
                    "{response.fullResponse.thought}"
                  </p>
                </div>

                {/* Action */}
                <div>
                  <h5 className="text-xs font-semibold uppercase text-charcoal-muted dark:text-gray-500 mb-1">
                    Likely Action
                  </h5>
                  <p className="text-sm text-charcoal dark:text-gray-300">
                    {response.fullResponse.action}
                  </p>
                </div>

                {/* Somatic Marker */}
                <div>
                  <h5 className="text-xs font-semibold uppercase text-charcoal-muted dark:text-gray-500 mb-1">
                    Body Sensation
                  </h5>
                  <p className="text-sm text-charcoal dark:text-gray-300">
                    {response.fullResponse.somaticMarker}
                  </p>
                </div>
              </div>

              {/* Psychological Insight */}
              <div className="bg-cream-50 dark:bg-gray-900 rounded-lg p-3">
                <h5 className="text-xs font-semibold uppercase text-terracotta-600 dark:text-terracotta-400 mb-1">
                  Psychological Insight
                </h5>
                <p className="text-sm text-charcoal dark:text-gray-300">
                  {response.psychologicalInsight}
                </p>
              </div>

              {/* Health Variations */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3">
                  <h5 className="text-xs font-semibold uppercase text-emerald-600 dark:text-emerald-400 mb-1">
                    Healthy Expression
                  </h5>
                  <p className="text-xs text-charcoal dark:text-gray-300">
                    {response.healthVariations.healthy}
                  </p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3">
                  <h5 className="text-xs font-semibold uppercase text-amber-600 dark:text-amber-400 mb-1">
                    Unhealthy Expression
                  </h5>
                  <p className="text-xs text-charcoal dark:text-gray-300">
                    {response.healthVariations.unhealthy}
                  </p>
                </div>
              </div>

              {/* Resonance Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onResonanceToggle(response.type);
                }}
                className={`w-full py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  isResonated
                    ? 'bg-terracotta-500 text-white hover:bg-terracotta-600'
                    : 'bg-cream-100 dark:bg-gray-700 text-charcoal dark:text-white hover:bg-cream-200 dark:hover:bg-gray-600'
                }`}
              >
                {isResonated ? (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    This resonates with me
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    This resonates with me
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
