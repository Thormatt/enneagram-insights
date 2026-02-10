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
  primaryCenter,
  onClick,
  isSelected = false
}: TriFixCardProps) {
  const getPrimaryRing = (center: PrimaryCenter) => (
    primaryCenter === center
      ? `0 0 0 2px rgba(255,255,255,0.9), 0 0 0 4px ${CENTER_COLORS[center]}`
      : undefined
  );

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-2xl border-2 transform-gpu transition-[transform,background-color,border-color] duration-120 ease-out motion-reduce:transition-none ${
        isSelected
          ? 'border-terracotta-500 bg-terracotta-50 dark:bg-terracotta-900/20'
          : 'border-warm-border dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-terracotta-300 dark:hover:border-terracotta-600'
      } hover:-translate-y-0.5`}
      style={{ contain: 'layout paint' }}
    >
      {/* Tri-Fix Code Display */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
          style={{ backgroundColor: CENTER_COLORS.gut, boxShadow: getPrimaryRing('gut') }}
        >
          {gutType}
        </span>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
          style={{ backgroundColor: CENTER_COLORS.heart, boxShadow: getPrimaryRing('heart') }}
        >
          {heartType}
        </span>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
          style={{ backgroundColor: CENTER_COLORS.head, boxShadow: getPrimaryRing('head') }}
        >
          {headType}
        </span>
        {primaryCenter && (
          <span className="text-[10px] uppercase tracking-wide text-charcoal-muted dark:text-gray-500">
            {primaryCenter}-led
          </span>
        )}
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
