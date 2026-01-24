import { useState, lazy, Suspense, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { EnneagramCircle } from './components/Circle';
import { TypeCard } from './components/TypeCard';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useAppStore, createUserProfile } from './stores';
import type { TypeNumber, WingVariant, InstinctStack } from './types';
import './index.css';

// Hook for responsive sizing
function useWindowSize() {
  const [size, setSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}

// Lazy load heavy components for better initial load performance
const Diagrams = lazy(() => import('./components/Diagrams').then(m => ({ default: m.Diagrams })));
const ComparisonExplorer = lazy(() => import('./components/Comparison').then(m => ({ default: m.ComparisonExplorer })));
const TypeDetailPage = lazy(() => import('./components/TypeDetail').then(m => ({ default: m.TypeDetailPage })));
const SubtypeSelector = lazy(() => import('./components/SubtypeSelector').then(m => ({ default: m.SubtypeSelector })));
const Quiz = lazy(() => import('./components/Quiz').then(m => ({ default: m.Quiz })));
const Profile = lazy(() => import('./components/Profile').then(m => ({ default: m.Profile })));
const TranscendencePage = lazy(() => import('./components/Transcendence').then(m => ({ default: m.TranscendencePage })));

// Loading fallback component
function LoadingFallback({ message = 'Loading...' }: { message?: string }) {
  return (
    <div className="flex items-center justify-center h-full min-h-[200px]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-4 border-terracotta-200 border-t-terracotta-500 rounded-full animate-spin" />
        <span className="text-charcoal-light dark:text-gray-400 text-sm">{message}</span>
      </div>
    </div>
  );
}

function App() {
  // Use selectors to prevent unnecessary re-renders
  const selectedType = useAppStore((state) => state.selectedType);
  const viewMode = useAppStore((state) => state.viewMode);
  const compareTypes = useAppStore((state) => state.compareTypes);
  const selectType = useAppStore((state) => state.selectType);
  const setViewMode = useAppStore((state) => state.setViewMode);
  const setUserProfile = useAppStore((state) => state.setUserProfile);
  const [subtypeSelectorOpen, setSubtypeSelectorOpen] = useState(false);
  const [typeCardOpen, setTypeCardOpen] = useState(false);
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  // Responsive breakpoints
  const isLargeScreen = windowWidth >= 1280; // xl breakpoint
  const isMediumScreen = windowWidth >= 1024; // lg breakpoint

  // Calculate responsive visualization sizes
  const visualizationSize = useMemo(() => {
    // Account for sidebar (256px) and TypeCard panel (480px on xl) and padding
    const sidebarWidth = isMediumScreen ? 256 : 0;
    const typecardWidth = isLargeScreen ? 480 : 0;
    const padding = 64; // Padding on both sides
    const availableWidth = windowWidth - sidebarWidth - typecardWidth - padding;
    const availableHeight = windowHeight - 140; // Header + padding

    // For circle: use the smaller of available width/height, max 550px
    const circleSize = Math.min(availableWidth, availableHeight, 550);
    // Ensure minimum usable size
    const clampedCircleSize = Math.max(circleSize, 280);

    // For diagrams: can be wider than tall
    const diagramsWidth = Math.min(availableWidth, 700);
    const diagramsHeight = Math.min(availableHeight, 500);

    return {
      circle: clampedCircleSize,
      diagramsWidth: Math.max(diagramsWidth, 320),
      diagramsHeight: Math.max(diagramsHeight, 350),
    };
  }, [windowWidth, windowHeight, isLargeScreen, isMediumScreen]);

  const handleTypeNavigate = (type: TypeNumber) => {
    selectType(type);
  };

  const handleCloseDetail = () => {
    setViewMode('circle');
  };

  const handleQuizComplete = (results: {
    type: TypeNumber;
    wing: WingVariant;
    instinctStack: InstinctStack;
  }) => {
    const profile = createUserProfile(results.type, results.wing, results.instinctStack);
    setUserProfile(profile);
    selectType(results.type);
    setViewMode('circle');
  };

  // Open TypeCard drawer when type is selected on smaller screens
  useEffect(() => {
    if (selectedType && !isLargeScreen) {
      setTypeCardOpen(true);
    }
  }, [selectedType, isLargeScreen]);

  // Quiz view is full screen
  if (viewMode === 'quiz') {
    return (
      <Suspense fallback={<LoadingFallback message="Loading quiz..." />}>
        <Quiz
          onComplete={handleQuizComplete}
          onClose={() => setViewMode('circle')}
        />
      </Suspense>
    );
  }

  // Profile view is full screen
  if (viewMode === 'profile') {
    return (
      <Suspense fallback={<LoadingFallback message="Loading profile..." />}>
        <Profile />
      </Suspense>
    );
  }

  // Transcendence view is full screen
  if (viewMode === 'transcendence') {
    return (
      <Suspense fallback={<LoadingFallback message="Loading essence teachings..." />}>
        <TranscendencePage onClose={() => setViewMode('circle')} />
      </Suspense>
    );
  }

  // Detail view is full screen
  if (viewMode === 'detail' && selectedType) {
    return (
      <Suspense fallback={<LoadingFallback message="Loading details..." />}>
        <TypeDetailPage
          typeNumber={selectedType}
          onNavigate={handleTypeNavigate}
          onClose={handleCloseDetail}
        />
      </Suspense>
    );
  }

  return (
    <Layout>
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-terracotta-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <div className="flex flex-col xl:flex-row gap-4 xl:gap-6 h-full" role="main" id="main-content">
        {/* Main visualization area */}
        <div className="flex-1 flex items-center justify-center min-h-0" aria-live="polite">
          {viewMode === 'circle' && (
            <EnneagramCircle
              width={visualizationSize.circle}
              height={visualizationSize.circle}
            />
          )}
          {viewMode === 'diagrams' && (
            <Suspense fallback={<LoadingFallback message="Loading diagrams..." />}>
              <Diagrams
                width={visualizationSize.diagramsWidth}
                height={visualizationSize.diagramsHeight}
              />
            </Suspense>
          )}
          {viewMode === 'compare' && (
            <Suspense fallback={<LoadingFallback message="Loading comparison..." />}>
              <div className="w-full max-w-4xl mx-auto p-2 sm:p-4 overflow-y-auto">
                <ComparisonExplorer
                  initialType1={compareTypes?.[0] ?? selectedType ?? undefined}
                  initialType2={compareTypes?.[1]}
                />
              </div>
            </Suspense>
          )}
        </div>

        {/* Type detail panel - desktop only (xl+), hidden in compare mode */}
        <AnimatePresence>
          {selectedType && viewMode !== 'compare' && isLargeScreen && (
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="w-[480px] flex-shrink-0 overflow-y-auto"
              aria-label={`Details for Type ${selectedType}`}
            >
              <TypeCard
                typeNumber={selectedType}
                onOpenSubtypes={() => setSubtypeSelectorOpen(true)}
              />
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Floating action button to open TypeCard on smaller screens */}
        {selectedType && viewMode !== 'compare' && !isLargeScreen && (
          <button
            onClick={() => setTypeCardOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-full shadow-warm-lg flex items-center justify-center z-30 transition-colors"
            aria-label={`View details for Type ${selectedType}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        )}
      </div>

      {/* TypeCard drawer for smaller screens */}
      <AnimatePresence>
        {selectedType && viewMode !== 'compare' && !isLargeScreen && typeCardOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setTypeCardOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.12 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-[400px] md:w-[480px] bg-cream-50 dark:bg-gray-900 shadow-warm-lg z-50 overflow-y-auto"
              aria-label={`Details for Type ${selectedType}`}
            >
              <div className="sticky top-0 bg-cream-50 dark:bg-gray-900 border-b border-warm-border dark:border-gray-700 p-4 flex items-center justify-between z-10">
                <span className="font-serif font-semibold text-charcoal dark:text-white">Type Details</span>
                <button
                  onClick={() => setTypeCardOpen(false)}
                  className="p-2 text-charcoal-muted hover:text-charcoal dark:text-gray-400 dark:hover:text-white rounded-xl hover:bg-cream-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close type details"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <TypeCard
                typeNumber={selectedType}
                onOpenSubtypes={() => setSubtypeSelectorOpen(true)}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Subtype Selector Overlay */}
      {selectedType && (
        <Suspense fallback={null}>
          <SubtypeSelector
            typeNumber={selectedType}
            isOpen={subtypeSelectorOpen}
            onClose={() => setSubtypeSelectorOpen(false)}
          />
        </Suspense>
      )}

    </Layout>
  );
}

function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}

export default AppWithErrorBoundary;
