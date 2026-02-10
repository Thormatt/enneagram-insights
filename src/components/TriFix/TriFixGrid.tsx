import { memo, useState, useMemo } from 'react';
import { TriFixCard } from './TriFixCard';
import { triFixDescriptions, CENTERS, getTriFixKey } from '../../data/tritypes/tritypeDescriptions';
import { getCenterColor } from '../../data/core/centers';
import type { TypeNumber, PrimaryCenter } from '../../types';

interface TriFixGridProps {
  onSelect: (code: string, gut: TypeNumber, heart: TypeNumber, head: TypeNumber, primaryCenter: PrimaryCenter) => void;
  selectedCodes?: string[];
}

interface TriFixEntry {
  key: string;
  code: string;
  gut: TypeNumber;
  heart: TypeNumber;
  head: TypeNumber;
  primaryCenter: PrimaryCenter;
  primaryType: TypeNumber;
}

const PRIMARY_FILTER_OPTIONS: Array<{ value: PrimaryCenter | 'all'; label: string; center?: PrimaryCenter }> = [
  { value: 'all', label: 'All' },
  { value: 'gut', label: 'Gut-led', center: 'gut' },
  { value: 'heart', label: 'Heart-led', center: 'heart' },
  { value: 'head', label: 'Head-led', center: 'head' }
];

// Pre-generate all 81 primary-ordered tritypes statically (no need for useMemo)
const ALL_TRI_FIXES: TriFixEntry[] = (() => {
  const entries: TriFixEntry[] = [];
  const gutTypes = CENTERS.gut as TypeNumber[];
  const heartTypes = CENTERS.heart as TypeNumber[];
  const headTypes = CENTERS.head as TypeNumber[];
  const primaryCenters: PrimaryCenter[] = ['gut', 'heart', 'head'];

  for (const gut of gutTypes) {
    for (const heart of heartTypes) {
      for (const head of headTypes) {
        for (const primaryCenter of primaryCenters) {
          const key = getTriFixKey(gut, heart, head, primaryCenter);
          const triFix = triFixDescriptions[key];
          if (triFix) {
            entries.push({
              key,
              code: triFix.code,
              gut,
              heart,
              head,
              primaryCenter,
              primaryType: primaryCenter === 'gut' ? gut : primaryCenter === 'heart' ? heart : head
            });
          }
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

export const TriFixGrid = memo(function TriFixGrid({ onSelect, selectedCodes }: TriFixGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [activePrimaryFilter, setActivePrimaryFilter] = useState<PrimaryCenter | 'all'>('all');

  const selectedSet = useMemo(() => new Set(selectedCodes ?? []), [selectedCodes]);

  // Filter tri-fixes by selected type
  const filteredTriFixes = useMemo(() => {
    let entries = ALL_TRI_FIXES;

    if (activePrimaryFilter !== 'all') {
      entries = entries.filter(t => t.primaryCenter === activePrimaryFilter);
    }

    if (activeFilter !== 'all') {
      // Filter by any position containing this type
      entries = entries.filter(t =>
        t.gut === activeFilter || t.heart === activeFilter || t.head === activeFilter
      );
    }

    return entries;
  }, [activeFilter, activePrimaryFilter]);

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="text-xs uppercase tracking-wide text-charcoal-muted dark:text-gray-500 self-center mr-1">
            Primary
          </span>
          {PRIMARY_FILTER_OPTIONS.map(({ value, label, center }) => (
            <button
              key={value}
              onClick={() => setActivePrimaryFilter(value)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                activePrimaryFilter === value
                  ? 'text-white shadow-warm'
                  : 'bg-cream-100 dark:bg-gray-800 text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-700'
              }`}
              style={
                activePrimaryFilter === value
                  ? { backgroundColor: center ? getCenterColor(center) : '#374151' }
                  : undefined
              }
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="text-xs uppercase tracking-wide text-charcoal-muted dark:text-gray-500 self-center mr-1">
            Contains
          </span>
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
            primaryCenter={t.primaryCenter}
            onClick={() => onSelect(t.code, t.gut, t.heart, t.head, t.primaryCenter)}
            isSelected={selectedSet.has(t.code)}
          />
        ))}
      </div>

      {/* Count indicator */}
      <div className="text-center text-sm text-charcoal-muted dark:text-gray-500">
        Showing {filteredTriFixes.length} of {ALL_TRI_FIXES.length} tri-fixes
        {activePrimaryFilter !== 'all' && ` | ${activePrimaryFilter}-led`}
        {activeFilter !== 'all' && ` | Type ${activeFilter}`}
      </div>
    </div>
  );
});
