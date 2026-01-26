import { motion } from 'framer-motion';
import type { TypeNumber } from '../../../types';

interface TypeRanking {
  type: TypeNumber;
  probability: number;
  percentDisplay: string;
}

interface TypeRankingCardProps {
  rankings: TypeRanking[];
  showAll?: boolean;
}

const TYPE_NAMES: Record<TypeNumber, string> = {
  1: 'Reformer',
  2: 'Helper',
  3: 'Achiever',
  4: 'Individualist',
  5: 'Investigator',
  6: 'Loyalist',
  7: 'Enthusiast',
  8: 'Challenger',
  9: 'Peacemaker',
};

const TYPE_COLORS: Record<TypeNumber, string> = {
  1: 'bg-slate-500',
  2: 'bg-rose-500',
  3: 'bg-amber-500',
  4: 'bg-violet-500',
  5: 'bg-cyan-500',
  6: 'bg-emerald-500',
  7: 'bg-orange-500',
  8: 'bg-red-600',
  9: 'bg-green-500',
};

export function TypeRankingCard({ rankings, showAll = false }: TypeRankingCardProps) {
  const displayRankings = showAll ? rankings : rankings.slice(0, 5);
  const maxProbability = rankings[0]?.probability || 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-warm-border dark:border-gray-700">
      <h3 className="text-sm font-semibold text-charcoal dark:text-gray-200 mb-3">
        Type Probabilities
      </h3>
      <div className="space-y-2">
        {displayRankings.map((ranking, index) => (
          <motion.div
            key={ranking.type}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 text-sm font-medium text-charcoal-light dark:text-gray-400">
              Type {ranking.type}
            </span>
            <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${TYPE_COLORS[ranking.type]} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${(ranking.probability / maxProbability) * 100}%` }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              />
            </div>
            <span className="w-12 text-right text-sm font-medium text-charcoal dark:text-gray-200">
              {ranking.percentDisplay}
            </span>
          </motion.div>
        ))}
      </div>
      {!showAll && rankings.length > 5 && (
        <p className="mt-2 text-xs text-charcoal-muted dark:text-gray-500 text-center">
          + {rankings.length - 5} more types
        </p>
      )}
    </div>
  );
}

/**
 * Compact ranking display for results
 */
export function TypeRankingCompact({ rankings }: { rankings: TypeRanking[] }) {
  const topThree = rankings.slice(0, 3);

  return (
    <div className="space-y-3">
      {topThree.map((ranking, index) => (
        <div
          key={ranking.type}
          className={`flex items-center gap-4 p-3 rounded-xl ${
            index === 0
              ? 'bg-terracotta-50 dark:bg-terracotta-900/30 border-2 border-terracotta-300 dark:border-terracotta-700'
              : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
              TYPE_COLORS[ranking.type]
            }`}
          >
            {ranking.type}
          </div>
          <div className="flex-1">
            <p className={`font-semibold ${index === 0 ? 'text-terracotta-800 dark:text-terracotta-200' : 'text-charcoal dark:text-gray-200'}`}>
              Type {ranking.type}: The {TYPE_NAMES[ranking.type]}
            </p>
            <p className="text-sm text-charcoal-light dark:text-gray-400">
              {Math.round(ranking.probability * 100)}% confidence
            </p>
          </div>
          {index === 0 && (
            <span className="px-2 py-1 text-xs font-medium bg-terracotta-200 dark:bg-terracotta-800 text-terracotta-800 dark:text-terracotta-200 rounded">
              Most Likely
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
