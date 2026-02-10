import type { ReactNode } from 'react';
import { useAppStore } from '../../stores';
import { enneagramTypes, getCenterColor } from '../../data';
import { ThemeToggle } from './ThemeToggle';
import type { TypeNumber, ViewMode, CircleLayer, DiagramType } from '../../types';

interface SidebarProps {
  onSelectType?: () => void;
  onClose?: () => void;
}

interface ExploreItem {
  value: ViewMode;
  label: string;
  icon: ReactNode;
  accent?: boolean;
}

const VIEW_MODES: { value: ViewMode; label: string }[] = [
  { value: 'circle', label: 'Circle' },
  { value: 'diagrams', label: 'Diagrams' },
  { value: 'compare', label: 'Compare' }
];

const CIRCLE_LAYERS: { value: CircleLayer; label: string }[] = [
  { value: 'basic', label: 'Basic' },
  { value: 'dynamics', label: 'Dynamics' },
  { value: 'groups', label: 'Groups' },
  { value: 'subtypes', label: 'Subtypes' }
];

const DIAGRAM_TYPES: { value: DiagramType; label: string }[] = [
  { value: 'centers', label: 'Centers' },
  { value: 'triads', label: 'Triads' },
  { value: 'relationships', label: 'Relationships' }
];

const EXPLORE_ITEMS: ExploreItem[] = [
  {
    value: 'journey',
    label: 'The Journey',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    value: 'transcendence',
    label: 'Beyond Type',
    icon: <span className="font-serif font-bold text-charcoal dark:text-white">0</span>
  },
  {
    value: 'wisdomLineage',
    label: 'Wisdom Lineage',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    value: 'tritypes',
    label: 'Tri-Fix',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    value: 'scenarios',
    label: 'Scenarios',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    value: 'quiz',
    label: 'Take Quiz',
    accent: true,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    value: 'profile',
    label: 'My Profile',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }
];

export function Sidebar({ onSelectType, onClose }: SidebarProps) {
  const selectedType = useAppStore((state) => state.selectedType);
  const selectType = useAppStore((state) => state.selectType);
  const viewMode = useAppStore((state) => state.viewMode);
  const setViewMode = useAppStore((state) => state.setViewMode);
  const circleLayer = useAppStore((state) => state.circleLayer);
  const setCircleLayer = useAppStore((state) => state.setCircleLayer);
  const diagramType = useAppStore((state) => state.diagramType);
  const setDiagramType = useAppStore((state) => state.setDiagramType);

  const typesByCenter = {
    gut: enneagramTypes.filter((type) => type.center === 'gut'),
    heart: enneagramTypes.filter((type) => type.center === 'heart'),
    head: enneagramTypes.filter((type) => type.center === 'head')
  };

  const centerLabels = {
    gut: 'Body Center',
    heart: 'Heart Center',
    head: 'Head Center'
  };

  const openView = (mode: ViewMode) => {
    setViewMode(mode);
    onClose?.();
  };

  const handleSelectType = (typeNumber: TypeNumber) => {
    selectType(typeNumber);
    onSelectType?.();
  };

  const renderExploreList = () => (
    <div className="space-y-1">
      {EXPLORE_ITEMS.map((item) => (
        <button
          key={item.value}
          onClick={() => openView(item.value)}
          className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
            item.accent
              ? 'text-terracotta-600 dark:text-terracotta-400 hover:bg-terracotta-500/10'
              : 'text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-800'
          }`}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );

  return (
    <aside
      className="w-64 bg-cream-50 dark:bg-gray-900 border-r border-warm-border dark:border-gray-700 p-4 overflow-y-auto transition-colors"
      role="navigation"
      aria-label="Enneagram types"
    >
      <div className="md:hidden space-y-4 mb-6 pb-6 border-b border-warm-border dark:border-gray-700">
        <div>
          <h2 className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-3">
            View
          </h2>
          <div className="space-y-1">
            {VIEW_MODES.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => openView(value)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  viewMode === value
                    ? 'bg-charcoal dark:bg-white text-white dark:text-charcoal'
                    : 'text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-800'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {viewMode === 'circle' && (
          <div>
            <h2 className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-3">
              Layer
            </h2>
            <div className="space-y-1">
              {CIRCLE_LAYERS.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => {
                    setCircleLayer(value);
                    onClose?.();
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    circleLayer === value
                      ? 'bg-terracotta-500/20 text-terracotta-600 dark:text-terracotta-400'
                      : 'text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'diagrams' && (
          <div>
            <h2 className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-3">
              Diagram
            </h2>
            <div className="space-y-1">
              {DIAGRAM_TYPES.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => {
                    setDiagramType(value);
                    onClose?.();
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    diagramType === value
                      ? 'bg-terracotta-500/20 text-terracotta-600 dark:text-terracotta-400'
                      : 'text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-3">
            Explore
          </h2>
          {renderExploreList()}
        </div>

        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-sm font-medium text-charcoal-light dark:text-gray-400">Theme</span>
          <ThemeToggle />
        </div>
      </div>

      <h2 id="sidebar-heading" className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-4">
        Types
      </h2>

      <div className="space-y-6">
        {(['gut', 'heart', 'head'] as const).map((center) => (
          <div key={center}>
            <h3
              className="text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"
              style={{ color: getCenterColor(center) }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: getCenterColor(center) }} />
              {centerLabels[center]}
            </h3>

            <ul className="space-y-1" role="list" aria-label={`${centerLabels[center]} types`}>
              {typesByCenter[center].map((type) => (
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
          Explore
        </h2>
        {renderExploreList()}
      </div>

      <div className="mt-6 pt-6 border-t border-warm-border dark:border-gray-700">
        <h2 className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-4">
          Quick Actions
        </h2>
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
    </aside>
  );
}
