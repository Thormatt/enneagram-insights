import { useAppStore } from '../../stores';
import { enneagramTypes, getCenterColor } from '../../data';
import type { TypeNumber } from '../../types';

interface SidebarProps {
  onSelectType?: () => void;
}

export function Sidebar({ onSelectType }: SidebarProps) {
  // Use selectors to prevent unnecessary re-renders
  const selectedType = useAppStore((state) => state.selectedType);
  const selectType = useAppStore((state) => state.selectType);

  const handleSelectType = (typeNumber: TypeNumber) => {
    selectType(typeNumber);
    onSelectType?.();
  };

  const typesByCenter = {
    gut: enneagramTypes.filter(t => t.center === 'gut'),
    heart: enneagramTypes.filter(t => t.center === 'heart'),
    head: enneagramTypes.filter(t => t.center === 'head')
  };

  const centerLabels = {
    gut: 'Body Center',
    heart: 'Heart Center',
    head: 'Head Center'
  };

  return (
    <aside
      className="w-64 bg-cream-50 dark:bg-gray-900 border-r border-warm-border dark:border-gray-700 p-4 overflow-y-auto transition-colors"
      role="navigation"
      aria-label="Enneagram types"
    >
      <h2 id="sidebar-heading" className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-4">
        Types
      </h2>

      <div className="space-y-6">
        {(['gut', 'heart', 'head'] as const).map(center => (
          <div key={center}>
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"
              style={{ color: getCenterColor(center) }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: getCenterColor(center) }}
              />
              {centerLabels[center]}
            </h3>

            <ul className="space-y-1" role="list" aria-label={`${centerLabels[center]} types`}>
              {typesByCenter[center].map(type => (
                <li key={type.number}>
                  <button
                    onClick={() => handleSelectType(type.number as TypeNumber)}
                    aria-current={selectedType === type.number ? 'true' : undefined}
                    aria-label={`Type ${type.number}: ${type.name}`}
                    className={`w-full text-left px-3 py-3 rounded-xl transition-colors flex items-center gap-3 min-h-[44px] ${
                      selectedType === type.number
                        ? 'bg-cream-200 dark:bg-gray-800 text-charcoal dark:text-white shadow-warm'
                        : 'text-charcoal-light dark:text-gray-400 hover:bg-cream-100 dark:hover:bg-gray-800 hover:text-charcoal dark:hover:text-white'
                    }`}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: getCenterColor(center) }}
                      aria-hidden="true"
                    >
                      {type.number}
                    </span>
                    <span className="text-sm font-medium">{type.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-warm-border dark:border-gray-700">
        <h2 className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-4">
          Quick Actions
        </h2>
        <div className="space-y-2">
          <button
            onClick={() => {
              selectType(null);
              onSelectType?.();
            }}
            className="w-full text-left px-3 py-2 rounded-xl text-sm text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-800 hover:text-charcoal dark:hover:text-white transition-colors"
          >
            Clear Selection
          </button>
        </div>
      </div>
    </aside>
  );
}
