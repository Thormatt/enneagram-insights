import { motion } from 'framer-motion';
import type { TypeNumber, WingVariant } from '../../../types';

interface WingStrengthIndicatorProps {
  coreType: TypeNumber;
  wing: WingVariant;
  balance: number; // -1 to 1, where 0 is perfectly balanced
  wingAType: TypeNumber;
  wingBType: TypeNumber;
  wingAScore?: number;
  wingBScore?: number;
}

const WING_PAIRS: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
  1: [9, 2], 2: [1, 3], 3: [2, 4], 4: [3, 5],
  5: [4, 6], 6: [5, 7], 7: [6, 8], 8: [7, 9], 9: [8, 1],
};

export function WingStrengthIndicator({
  coreType,
  wing,
  balance,
  wingAType,
  wingBType,
}: WingStrengthIndicatorProps) {
  // Convert balance to percentages
  // balance > 0 means wingA is stronger, < 0 means wingB is stronger
  const wingAPercent = Math.round(50 + balance * 50);
  const wingBPercent = 100 - wingAPercent;

  // Determine which wing is dominant
  const dominantWing = balance >= 0 ? wingAType : wingBType;
  const dominantPercent = balance >= 0 ? wingAPercent : wingBPercent;

  // Is this a "balanced" wing situation?
  const isBalanced = Math.abs(balance) < 0.15;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-warm-border dark:border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-charcoal dark:text-gray-200">
          Wing Strength
        </h3>
        <span className="text-sm text-charcoal-light dark:text-gray-400">
          {wing}
        </span>
      </div>

      {/* Visual balance indicator */}
      <div className="relative mb-4">
        <div className="flex h-8 rounded-lg overflow-hidden">
          <motion.div
            className="bg-sage-500 flex items-center justify-center"
            initial={{ width: '50%' }}
            animate={{ width: `${wingAPercent}%` }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs font-semibold text-white">
              {wingAPercent > 20 ? `${wingAType}` : ''}
            </span>
          </motion.div>
          <motion.div
            className="bg-terracotta-500 flex items-center justify-center"
            initial={{ width: '50%' }}
            animate={{ width: `${wingBPercent}%` }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs font-semibold text-white">
              {wingBPercent > 20 ? `${wingBType}` : ''}
            </span>
          </motion.div>
        </div>

        {/* Center marker */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-white dark:bg-gray-900" />
      </div>

      {/* Labels */}
      <div className="flex justify-between text-sm">
        <div className={`${balance > 0 ? 'font-semibold text-charcoal dark:text-gray-200' : 'text-charcoal-light dark:text-gray-500'}`}>
          w{wingAType} ({wingAPercent}%)
        </div>
        <div className={`${balance < 0 ? 'font-semibold text-charcoal dark:text-gray-200' : 'text-charcoal-light dark:text-gray-500'}`}>
          w{wingBType} ({wingBPercent}%)
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-xs text-charcoal-muted dark:text-gray-500">
        {isBalanced ? (
          <>Your wings are fairly balanced. You draw nearly equally from both adjacent types.</>
        ) : (
          <>Your {dominantPercent}% lean toward {dominantWing} gives you a {coreType}w{dominantWing} flavor.</>
        )}
      </p>
    </div>
  );
}

/**
 * Compact wing display for results summary
 */
export function WingBadge({ wing, balance }: { wing: WingVariant; balance: number }) {
  const isBalanced = Math.abs(balance) < 0.15;
  const strength = Math.abs(balance);

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sage-50 dark:bg-sage-900/30 rounded-lg">
      <span className="font-semibold text-sage-800 dark:text-sage-200">{wing}</span>
      {!isBalanced && (
        <span className="text-xs text-sage-600 dark:text-sage-400">
          ({strength > 0.5 ? 'strong' : strength > 0.3 ? 'moderate' : 'slight'})
        </span>
      )}
      {isBalanced && (
        <span className="text-xs text-sage-600 dark:text-sage-400">(balanced)</span>
      )}
    </div>
  );
}
