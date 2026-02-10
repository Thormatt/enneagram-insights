import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useAppStore } from '../../stores';
import { ThemeToggle } from './ThemeToggle';
import type { ViewMode, CircleLayer, DiagramType } from '../../types';

interface HeaderProps {
  onMenuClick?: () => void;
}

interface ExploreItem {
  value: ViewMode;
  label: string;
  icon: ReactNode;
}

export function Header({ onMenuClick }: HeaderProps) {
  const viewMode = useAppStore((state) => state.viewMode);
  const setViewMode = useAppStore((state) => state.setViewMode);
  const circleLayer = useAppStore((state) => state.circleLayer);
  const setCircleLayer = useAppStore((state) => state.setCircleLayer);
  const diagramType = useAppStore((state) => state.diagramType);
  const setDiagramType = useAppStore((state) => state.setDiagramType);

  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const exploreMenuRef = useRef<HTMLDivElement>(null);

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

  const exploreItems: ExploreItem[] = [
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
      value: 'scenarios',
      label: 'Scenarios',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
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
      value: 'wisdomLineage',
      label: 'Wisdom Lineage',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      value: 'transcendence',
      label: 'Beyond Type',
      icon: <span className="font-serif font-bold text-sm leading-none">0</span>
    },
  ];

  const showSecondaryNav = viewMode === 'circle' || viewMode === 'diagrams' || viewMode === 'compare';

  useEffect(() => {
    if (!isExploreOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExploreOpen(false);
      }
    };

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (exploreMenuRef.current && !exploreMenuRef.current.contains(target)) {
        setIsExploreOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [isExploreOpen]);

  const openView = (mode: ViewMode) => {
    setViewMode(mode);
    setIsExploreOpen(false);
  };

  return (
    <header className="bg-charcoal dark:bg-gray-950 border-b border-charcoal-light/20 transition-colors">
      <div className="flex items-center justify-between px-4 lg:px-6 py-3 gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="lg:hidden p-3 -ml-2 text-cream-200 hover:text-white hover:bg-charcoal-light/30 rounded-xl transition-colors"
              aria-label="Open navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          <div className="min-w-0">
            <h1 className="font-serif text-xl lg:text-2xl font-bold text-white truncate">Enneagram Insights</h1>
            <span className="hidden xl:inline text-sm text-cream-300 whitespace-nowrap">A map of consciousness</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <div className="flex items-center gap-2">
            <span id="view-mode-label" className="text-sm text-cream-300">View:</span>
            <div className="flex bg-charcoal-light/30 rounded-full p-1" role="group" aria-labelledby="view-mode-label">
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

          <button
            onClick={() => setViewMode('quiz')}
            className="px-3.5 py-2 bg-terracotta-500/20 text-terracotta-300 text-sm font-medium rounded-full hover:bg-terracotta-500/30 hover:text-terracotta-200 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:ring-offset-1 focus:ring-offset-charcoal"
            aria-label="Take Enneagram Quiz"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Quiz
          </button>

          <div className="relative" ref={exploreMenuRef}>
            <button
              onClick={() => setIsExploreOpen((open) => !open)}
              className="px-3.5 py-2 text-cream-200 text-sm font-medium rounded-full hover:bg-charcoal-light/30 hover:text-white transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cream-300 focus:ring-offset-1 focus:ring-offset-charcoal"
              aria-expanded={isExploreOpen}
              aria-haspopup="menu"
            >
              Explore
              <svg className={`w-4 h-4 transition-transform ${isExploreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isExploreOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-cream-100 dark:bg-gray-900 border border-warm-border dark:border-gray-700 shadow-warm-lg p-2 z-40" role="menu" aria-label="Explore views">
                {exploreItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => openView(item.value)}
                    className="w-full px-3 py-2.5 rounded-xl text-left text-sm text-charcoal-light dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-800 hover:text-charcoal dark:hover:text-white transition-colors flex items-center gap-2"
                    role="menuitem"
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <ThemeToggle />

          <button
            onClick={() => setViewMode('profile')}
            className="p-2.5 text-cream-200 hover:text-white hover:bg-charcoal-light/30 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:ring-offset-1 focus:ring-offset-charcoal"
            aria-label="View my profile"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setViewMode('quiz')}
            className="px-3 py-2 rounded-full bg-terracotta-500/20 text-terracotta-300 text-sm font-medium hover:bg-terracotta-500/30 transition-colors"
          >
            Quiz
          </button>
        </div>
      </div>

      {showSecondaryNav && (
        <div className="hidden md:flex items-center gap-4 px-4 lg:px-6 py-2 bg-charcoal-light/20 dark:bg-gray-900/50 border-t border-charcoal-light/10">
          {viewMode === 'circle' && (
            <>
              <span id="layer-mode-label" className="text-sm text-cream-300">Layer:</span>
              <div className="flex bg-charcoal-light/30 rounded-full p-1" role="group" aria-labelledby="layer-mode-label">
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

          {viewMode === 'diagrams' && (
            <>
              <span id="diagram-type-label" className="text-sm text-cream-300">Diagram:</span>
              <div className="flex bg-charcoal-light/30 rounded-full p-1" role="group" aria-labelledby="diagram-type-label">
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

          {viewMode === 'compare' && (
            <div className="flex items-center gap-2 text-cream-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <span className="text-sm">Compare relationship dynamics between two types.</span>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
