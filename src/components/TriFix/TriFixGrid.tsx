import { memo, useState, useMemo } from 'react';
import { TriFixCard } from './TriFixCard';
import { triFixDescriptions, CENTERS, getTriFixKey } from '../../data/tritypes/tritypeDescriptions';
import { getCenterColor } from '../../data/core/centers';
import type { TypeNumber, PrimaryCenter } from '../../types';

interface TriFixGridProps {
  onSelect: (code: string, gut: TypeNumber, heart: TypeNumber, head: TypeNumber) => void;
  selectedCode?: string;
}

interface TriFixEntry {
  key: string;
  code: string;
  gut: TypeNumber;
  heart: TypeNumber;
  head: TypeNumber;
}

// Pre-generate all 27 tri-fixes statically (no need for useMemo)
const ALL_TRI_FIXES: TriFixEntry[] = (() => {
  const entries: TriFixEntry[] = [];
  const gutTypes = CENTERS.gut as TypeNumber[];
  const heartTypes = CENTERS.heart as TypeNumber[];
  const headTypes = CENTERS.head as TypeNumber[];

  for (const gut of gutTypes) {
    for (const heart of heartTypes) {
      for (const head of headTypes) {
        const key = getTriFixKey(gut, heart, head);
        if (triFixDescriptions[key]) {
          entries.push({
            key,
            code: `${gut}${heart}${head}`,
            gut,
            heart,
            head
          });
        }
      }
    }
  }
  return entries;
})();

type FilterValue = 'all' | TypeNumber;

const FILTER_OPTIONS: Array<{ value: FilterValue; label: string; center?: PrimaryCenter }> = [
  { value: 'all', label: 'All' },
  { value: 8, label: '8', center: 'gut' },
  { value: 9, label: '9', center: 'gut' },
  { value: 1, label: '1', center: 'gut' },
  { value: 2, label: '2', center: 'heart' },
  { value: 3, label: '3', center: 'heart' },
  { value: 4, label: '4', center: 'heart' },
  { value: 5, label: '5', center: 'head' },
  { value: 6, label: '6', center: 'head' },
  { value: 7, label: '7', center: 'head' },
];

export const TriFixGrid = memo(function TriFixGrid({ onSelect, selectedCode }: TriFixGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  // Filter tri-fixes by selected type
  const filteredTriFixes = useMemo(() => {
    if (activeFilter === 'all') return ALL_TRI_FIXES;
    // Filter by any position containing this type
    return ALL_TRI_FIXES.filter(t =>
      t.gut === activeFilter || t.heart === activeFilter || t.head === activeFilter
    );
  }, [activeFilter]);

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {FILTER_OPTIONS.map(({ value, label, center }) => (
          <button
            key={value}
            onClick={() => setActiveFilter(value)}
            className={`w-10 h-10 rounded-full text-sm font-bold transition-colors ${
              activeFilter === value
                ? 'text-white shadow-warm'
                : 'bg-cream-100 dark:bg-gray-800 text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-700'
            }`}
            style={
              activeFilter === value
                ? { backgroundColor: center ? getCenterColor(center) : '#374151' }
                : undefined
            }
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tri-Fix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTriFixes.map(t => (
          <TriFixCard
            key={t.key}
            triFix={triFixDescriptions[t.key]}
            gutType={t.gut}
            heartType={t.heart}
            headType={t.head}
            primaryCenter="gut"
            onClick={() => onSelect(t.code, t.gut, t.heart, t.head)}
            isSelected={selectedCode === t.code}
          />
        ))}
      </div>

      {/* Count indicator */}
      <div className="text-center text-sm text-charcoal-muted dark:text-gray-500">
        {activeFilter === 'all'
          ? `All ${filteredTriFixes.length} tri-fixes`
          : `${filteredTriFixes.length} tri-fixes containing Type ${activeFilter}`
        }
      </div>
    </div>
  );
});
