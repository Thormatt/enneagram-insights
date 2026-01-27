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

  const showSecondaryNav = viewMode === 'circle' || viewMode === 'diagrams' || viewMode === 'compare';

  return (
    <header className="bg-charcoal dark:bg-gray-950 border-b border-charcoal-light/20 transition-colors">
      {/* Primary Navigation Row */}
      <div className="flex items-center justify-between px-4 lg:px-6 py-3">
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Mobile menu button */}
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 -ml-2 text-cream-200 hover:text-white hover:bg-charcoal-light/30 rounded-xl transition-colors"
              aria-label="Open navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          <h1 className="font-serif text-xl lg:text-2xl font-bold text-white whitespace-nowrap">Enneagram Insights</h1>
          <span className="hidden xl:inline text-sm text-cream-300 whitespace-nowrap">A map of consciousness</span>
        </div>

        {/* Desktop controls - hidden on mobile (md breakpoint) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {/* View Mode Toggle - Desktop (labels) */}
          <div className="flex items-center gap-2">
            <span id="view-mode-label" className="text-sm text-cream-300">View:</span>
            <div
              className="flex bg-charcoal-light/30 rounded-full p-1"
              role="group"
              aria-labelledby="view-mode-label"
            >
              {viewModes.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setViewMode(value)}
                  aria-pressed={viewMode === value}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:ring-offset-1 focus:ring-offset-charcoal ${
                    viewMode === value
                      ? 'bg-cream-100 text-charcoal shadow-warm'
                      : 'text-cream-200 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Beyond Type / Transcendence Button */}
          <button
            onClick={() => setViewMode('transcendence')}
            className="px-3 py-1.5 text-cream-200 text-sm font-medium rounded-full hover:bg-charcoal-light/30 hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-cream-300 focus:ring-offset-1 focus:ring-offset-charcoal"
            aria-label="Explore Beyond Type"
          >
            <span className="font-serif font-bold" aria-hidden="true">0</span>
            <span className="hidden lg:inline">Beyond Type</span>
          </button>

          {/* Wisdom Lineage Button */}
          <button
            onClick={() => setViewMode('wisdomLineage')}
            className="px-3 py-1.5 text-cream-200 text-sm font-medium rounded-full hover:bg-charcoal-light/30 hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-cream-300 focus:ring-offset-1 focus:ring-offset-charcoal"
            aria-label="Explore Wisdom Lineage"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="hidden lg:inline">Lineage</span>
          </button>

          {/* Quiz Button */}
          <button
            onClick={() => setViewMode('quiz')}
            className="px-3 py-1.5 bg-terracotta-500/20 text-terracotta-300 text-sm font-medium rounded-full hover:bg-terracotta-500/30 hover:text-terracotta-200 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:ring-offset-1 focus:ring-offset-charcoal"
            aria-label="Take Enneagram Quiz"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="hidden lg:inline">Quiz</span>
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Profile Button */}
          <button
            onClick={() => setViewMode('profile')}
            className="p-2 text-cream-200 hover:text-white hover:bg-charcoal-light/30 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:ring-offset-1 focus:ring-offset-charcoal"
            aria-label="View my profile"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Secondary Navigation Row - Desktop only (md+), contextual */}
      {showSecondaryNav && (
        <div className="hidden md:flex items-center gap-4 px-4 lg:px-6 h-[44px] bg-charcoal-light/20 dark:bg-gray-900/50 border-t border-charcoal-light/10">
          {/* Layer Toggle (only for circle view) */}
          {viewMode === 'circle' && (
            <>
              <span id="layer-mode-label" className="text-sm text-cream-300">Layer:</span>
              <div
                className="flex bg-charcoal-light/30 rounded-full p-1"
                role="group"
                aria-labelledby="layer-mode-label"
              >
                {circleLayers.map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => setCircleLayer(value)}
                    aria-pressed={circleLayer === value}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:ring-offset-1 focus:ring-offset-charcoal ${
                      circleLayer === value
                        ? 'bg-cream-100 text-charcoal shadow-warm'
                        : 'text-cream-200 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Diagram Type Toggle (only for diagrams view) */}
          {viewMode === 'diagrams' && (
            <>
              <span id="diagram-type-label" className="text-sm text-cream-300">Diagram:</span>
              <div
                className="flex bg-charcoal-light/30 rounded-full p-1"
                role="group"
                aria-labelledby="diagram-type-label"
              >
                {diagramTypes.map(({ value, label }) => (
                  <button
                    key={value}
                    onClick={() => setDiagramType(value)}
                    aria-pressed={diagramType === value}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:ring-offset-1 focus:ring-offset-charcoal ${
                      diagramType === value
                        ? 'bg-cream-100 text-charcoal shadow-warm'
                        : 'text-cream-200 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Compare view context */}
          {viewMode === 'compare' && (
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-cream-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <span className="text-sm text-cream-300">Deep Dive: Compare relationship dynamics between any two types</span>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
