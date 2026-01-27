import { useAppStore } from '../../stores';
import { enneagramTypes, getCenterColor } from '../../data';
import { ThemeToggle } from './ThemeToggle';
import type { TypeNumber, ViewMode, CircleLayer, DiagramType } from '../../types';

interface SidebarProps {
  onSelectType?: () => void;
  onClose?: () => void;
}

export function Sidebar({ onSelectType, onClose }: SidebarProps) {
  // Use selectors to prevent unnecessary re-renders
  const selectedType = useAppStore((state) => state.selectedType);
  const selectType = useAppStore((state) => state.selectType);
  const viewMode = useAppStore((state) => state.viewMode);
  const setViewMode = useAppStore((state) => state.setViewMode);
  const circleLayer = useAppStore((state) => state.circleLayer);
  const setCircleLayer = useAppStore((state) => state.setCircleLayer);
  const diagramType = useAppStore((state) => state.diagramType);
  const setDiagramType = useAppStore((state) => state.setDiagramType);

  const viewModes: { value: ViewMode; label: string }[] = [
    { value: 'circle', label: 'Circle' },
    { value: 'diagrams', label: 'Diagrams' },
    { value: 'compare', label: 'Compare' }
  ];

  const circleLayers: { value: CircleLayer; label: string }[] = [
    { value: 'basic', label: 'Basic' },
    { value: 'dynamics', label: 'Dynamics' },
    { value: 'groups', label: 'Groups' },
    { value: 'subtypes', label: 'Subtypes' }
  ];

  const diagramTypes: { value: DiagramType; label: string }[] = [
    { value: 'centers', label: 'Centers' },
    { value: 'triads', label: 'Triads' },
    { value: 'relationships', label: 'Relationships' }
  ];

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    onClose?.();
  };

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
      {/* Mobile Navigation Controls */}
      <div className="md:hidden space-y-4 mb-6 pb-6 border-b border-warm-border dark:border-gray-700">
        {/* View Mode */}
        <div>
          <h2 className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-3">
            View
          </h2>
          <div className="space-y-1">
            {viewModes.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => handleViewModeChange(value)}
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

        {/* Circle Layer (only when circle view is active) */}
        {viewMode === 'circle' && (
          <div>
            <h2 className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-3">
              Layer
            </h2>
            <div className="space-y-1">
              {circleLayers.map(({ value, label }) => (
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

        {/* Diagram Type (only when diagrams view is active) */}
        {viewMode === 'diagrams' && (
          <div>
            <h2 className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-3">
              Diagram
            </h2>
            <div className="space-y-1">
              {diagramTypes.map(({ value, label }) => (
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

        {/* Special Views */}
        <div>
          <h2 className="font-serif text-sm font-semibold text-charcoal-muted dark:text-gray-400 uppercase tracking-wider mb-3">
            Explore
          </h2>
          <div className="space-y-1">
            <button
              onClick={() => handleViewModeChange('transcendence')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <span className="font-serif font-bold text-charcoal dark:text-white">0</span>
              Beyond Type
            </button>
            <button
              onClick={() => handleViewModeChange('wisdomLineage')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Wisdom Lineage
            </button>
            <button
              onClick={() => handleViewModeChange('quiz')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-terracotta-600 dark:text-terracotta-400 hover:bg-terracotta-500/10 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Take Quiz
            </button>
            <button
              onClick={() => handleViewModeChange('profile')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              My Profile
            </button>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-sm font-medium text-charcoal-light dark:text-gray-400">Theme</span>
          <ThemeToggle />
        </div>
      </div>

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
