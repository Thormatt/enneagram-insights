import { memo } from 'react';
import type { TypeNumber, PrimaryCenter } from '../../types';
import type { TriFixInfo } from '../../data/tritypes/tritypeDescriptions';

// Pre-compute colors to avoid function calls during render
const CENTER_COLORS = {
  gut: '#D97706',    // amber-600
  heart: '#DC2626',  // red-600
  head: '#2563EB'    // blue-600
} as const;

interface TriFixCardProps {
  triFix: TriFixInfo;
  gutType: TypeNumber;
  heartType: TypeNumber;
  headType: TypeNumber;
  primaryCenter?: PrimaryCenter;
  onClick?: () => void;
  isSelected?: boolean;
}

export const TriFixCard = memo(function TriFixCard({
  triFix,
  gutType,
  heartType,
  headType,
  onClick,
  isSelected = false
}: TriFixCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-2xl border-2 transition-colors duration-100 ${
        isSelected
          ? 'border-terracotta-500 bg-terracotta-50 dark:bg-terracotta-900/20 shadow-warm-lg'
          : 'border-warm-border dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-terracotta-300 dark:hover:border-terracotta-600 hover:shadow-warm'
      }`}
    >
      {/* Tri-Fix Code Display */}
      <div className="flex items-center gap-1 mb-3">
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
          style={{ backgroundColor: CENTER_COLORS.gut }}
        >
          {gutType}
        </span>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
          style={{ backgroundColor: CENTER_COLORS.heart }}
        >
          {heartType}
        </span>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
          style={{ backgroundColor: CENTER_COLORS.head }}
        >
          {headType}
        </span>
      </div>

      {/* Name and Archetype */}
      <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-1">
        {triFix.name}
      </h3>
      <p className="text-sm text-charcoal-muted dark:text-gray-400 mb-3">
        {triFix.archetype}
      </p>

      {/* Preview of strengths */}
      <div className="flex flex-wrap gap-1.5">
        {triFix.strengths.slice(0, 2).map((strength, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-cream-100 dark:bg-gray-700 text-charcoal-light dark:text-gray-300"
          >
            {strength}
          </span>
        ))}
        {triFix.strengths.length > 2 && (
          <span className="text-xs px-2 py-1 text-charcoal-muted dark:text-gray-500">
            +{triFix.strengths.length - 2} more
          </span>
        )}
      </div>
    </button>
  );
});
