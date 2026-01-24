import { useAppStore } from '../../stores';
import { ThemeToggle } from './ThemeToggle';
import type { ViewMode, CircleLayer, DiagramType } from '../../types';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  // Use selectors to prevent unnecessary re-renders
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

  return (
    <header className="bg-cream-50 dark:bg-gray-900 border-b border-warm-border dark:border-gray-700 px-4 lg:px-6 py-4 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile menu button */}
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 -ml-2 text-charcoal-light dark:text-gray-400 hover:text-charcoal dark:hover:text-white hover:bg-cream-200 dark:hover:bg-gray-800 rounded-xl transition-colors"
              aria-label="Open navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          <h1 className="font-serif text-xl lg:text-2xl font-bold text-charcoal dark:text-white">Enneagram Insights</h1>
          <span className="hidden sm:inline text-sm text-charcoal-muted dark:text-gray-400">A map of consciousness</span>
        </div>

        <div className="flex items-center gap-2 lg:gap-6">
          {/* View Mode Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <span id="view-mode-label" className="text-sm text-charcoal-light dark:text-gray-400">View:</span>
            <div
              className="flex bg-cream-200 dark:bg-gray-800 rounded-full p-1"
              role="group"
              aria-labelledby="view-mode-label"
            >
              {viewModes.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setViewMode(value)}
                  aria-pressed={viewMode === value}
                  className={`px-3 py-2 text-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-1 min-h-[36px] ${
                    viewMode === value
                      ? 'bg-charcoal dark:bg-white text-white dark:text-charcoal shadow-warm'
                      : 'text-charcoal-light dark:text-gray-400 hover:text-charcoal dark:hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Layer Toggle (only for circle view) */}
          {viewMode === 'circle' && (
            <div className="hidden lg:flex items-center gap-2">
              <span id="layer-mode-label" className="text-sm text-charcoal-light dark:text-gray-400">Layer:</span>
              <div
                className="flex bg-cream-200 dark:bg-gray-800 rounded-full p-1"
                role="group"
                aria-labelledby="layer-mode-label"
              >
                {circleLayers.map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => setCircleLayer(value)}
                    aria-pressed={circleLayer === value}
                    className={`px-3 py-2 text-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-1 min-h-[36px] ${
                      circleLayer === value
                        ? 'bg-charcoal dark:bg-white text-white dark:text-charcoal shadow-warm'
                        : 'text-charcoal-light dark:text-gray-400 hover:text-charcoal dark:hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Diagram Type Toggle (only for diagrams view) */}
          {viewMode === 'diagrams' && (
            <div className="hidden lg:flex items-center gap-2">
              <span id="diagram-type-label" className="text-sm text-charcoal-light dark:text-gray-400">Diagram:</span>
              <div
                className="flex bg-cream-200 dark:bg-gray-800 rounded-full p-1"
                role="group"
                aria-labelledby="diagram-type-label"
              >
                {diagramTypes.map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => setDiagramType(value)}
                    aria-pressed={diagramType === value}
                    className={`px-3 py-2 text-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-1 min-h-[36px] ${
                      diagramType === value
                        ? 'bg-charcoal dark:bg-white text-white dark:text-charcoal shadow-warm'
                        : 'text-charcoal-light dark:text-gray-400 hover:text-charcoal dark:hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Beyond Type / Transcendence Button */}
          <button
            onClick={() => setViewMode('transcendence')}
            className="p-2 lg:px-4 lg:py-2 border border-purple-300 dark:border-purple-400/50 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label="Explore Beyond Type"
          >
            <span className="text-lg lg:text-base font-serif font-bold" aria-hidden="true">0</span>
            <span className="hidden lg:inline">Beyond Type</span>
          </button>

          {/* Quiz Button */}
          <button
            onClick={() => setViewMode('quiz')}
            className="p-2 lg:px-4 lg:py-2 bg-terracotta-500 hover:bg-terracotta-600 text-white text-sm font-medium rounded-full transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2 shadow-warm"
            aria-label="Take Enneagram Quiz"
          >
            <svg className="w-5 h-5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="hidden lg:inline">Take Quiz</span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Profile Button */}
          <button
            onClick={() => setViewMode('profile')}
            className="p-2 text-charcoal-light dark:text-gray-400 hover:text-charcoal dark:hover:text-white hover:bg-cream-200 dark:hover:bg-gray-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2"
            aria-label="View my profile"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
