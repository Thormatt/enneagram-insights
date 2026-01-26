import { motion } from 'framer-motion';
import type { TypeNumber } from '../../../types';
import type { QuizPhase } from '../engine';

interface ConfidenceDisplayProps {
  topType?: TypeNumber;
  confidence?: number;
  margin?: number;
  phase: QuizPhase;
}

export function ConfidenceDisplay({
  topType,
  confidence = 0,
  margin = 0,
  phase,
}: ConfidenceDisplayProps) {
  const confidencePercent = Math.round(confidence * 100);
  const marginPercent = Math.round(margin * 100);

  // Determine confidence level
  const getConfidenceLevel = () => {
    if (confidencePercent >= 70) return { level: 'high', color: 'text-green-600 dark:text-green-400' };
    if (confidencePercent >= 40) return { level: 'moderate', color: 'text-amber-600 dark:text-amber-400' };
    return { level: 'low', color: 'text-charcoal-muted dark:text-gray-500' };
  };

  const { level, color } = getConfidenceLevel();

  // Phase descriptions
  const getPhaseDescription = () => {
    switch (phase) {
      case 'screening':
        return 'Identifying your center (Gut/Heart/Head) and group tendencies...';
      case 'refinement':
        return 'Narrowing down to your most likely types...';
      case 'differentiation':
        return 'Distinguishing between your top candidates...';
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-charcoal-light dark:text-gray-400">
          Current Analysis
        </span>
        <span className={`text-sm font-semibold ${color}`}>
          {level.charAt(0).toUpperCase() + level.slice(1)} Confidence
        </span>
      </div>

      <div className="flex items-center gap-4 mb-3">
        {topType && (
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-charcoal dark:text-gray-200">
              Type {topType}
            </span>
            <span className="text-lg text-charcoal-light dark:text-gray-400">
              at {confidencePercent}%
            </span>
          </div>
        )}

        {marginPercent > 0 && (
          <div className="flex items-center gap-1 text-sm text-charcoal-muted dark:text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>+{marginPercent}% margin</span>
          </div>
        )}
      </div>

      {/* Confidence bar */}
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
        <motion.div
          className={`h-full rounded-full ${
            level === 'high'
              ? 'bg-green-500'
              : level === 'moderate'
              ? 'bg-amber-500'
              : 'bg-gray-400'
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${confidencePercent}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <p className="text-xs text-charcoal-muted dark:text-gray-500">
        {getPhaseDescription()}
      </p>
    </div>
  );
}

/**
 * Mini confidence indicator (inline)
 */
export function ConfidenceBadge({
  confidence,
  size = 'sm',
}: {
  confidence: number;
  size?: 'xs' | 'sm' | 'md';
}) {
  const percent = Math.round(confidence * 100);

  const sizeClasses = {
    xs: 'text-xs px-1.5 py-0.5',
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-3 py-1.5',
  };

  const getColor = () => {
    if (percent >= 70) return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    if (percent >= 40) return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
    return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
  };

  return (
    <span className={`inline-flex items-center font-medium rounded ${sizeClasses[size]} ${getColor()}`}>
      {percent}%
    </span>
  );
}
