import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScenarioCard } from './ScenarioCard';
import { CategoryIcon, CATEGORY_COLORS } from './CategoryIcon';
import { scenarios, SCENARIO_CATEGORIES, getRandomScenario } from '../../data/scenarios';
import { useAppStore } from '../../stores';
import type { ScenarioCategory, TypeNumber } from '../../types';

interface ScenarioProgress {
  completedIds: string[];
  totalPoints: number;
  resonanceHistory: Array<{
    scenarioId: string;
    types: TypeNumber[];
  }>;
}

export function ScenarioPage({ onClose }: { onClose?: () => void }) {
  const userProfile = useAppStore((state) => state.userProfile);
  const [selectedCategory, setSelectedCategory] = useState<ScenarioCategory | 'all'>('all');
  const [currentScenarioId, setCurrentScenarioId] = useState<string | null>(null);
  const [progress, setProgress] = useState<ScenarioProgress>({
    completedIds: [],
    totalPoints: 0,
    resonanceHistory: []
  });

  const filteredScenarios = useMemo(() => {
    if (selectedCategory === 'all') return scenarios;
    return scenarios.filter(s => s.category === selectedCategory);
  }, [selectedCategory]);

  const currentScenario = useMemo(() => {
    if (!currentScenarioId) return null;
    return scenarios.find(s => s.id === currentScenarioId) || null;
  }, [currentScenarioId]);

  const handleScenarioComplete = (scenarioId: string, resonatedTypes: TypeNumber[]) => {
    setProgress(prev => ({
      completedIds: [...prev.completedIds, scenarioId],
      totalPoints: prev.totalPoints + 10 + (resonatedTypes.length > 0 ? 5 : 0),
      resonanceHistory: [...prev.resonanceHistory, { scenarioId, types: resonatedTypes }]
    }));
    setCurrentScenarioId(null);
  };

  const handleStartRandom = () => {
    const random = getRandomScenario(progress.completedIds);
    if (random) {
      setCurrentScenarioId(random.id);
    }
  };

  const categories = Object.entries(SCENARIO_CATEGORIES) as [ScenarioCategory, typeof SCENARIO_CATEGORIES['relationships']][];

  // Compute resonance patterns
  const resonancePatterns = useMemo(() => {
    const typeCounts: Record<TypeNumber, number> = {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
    };
    progress.resonanceHistory.forEach(h => {
      h.types.forEach(t => {
        typeCounts[t]++;
      });
    });
    return typeCounts;
  }, [progress.resonanceHistory]);

  const topResonatingTypes = useMemo(() => {
    return (Object.entries(resonancePatterns) as [string, number][])
      .filter(([_, count]) => count > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([type]) => parseInt(type) as TypeNumber);
  }, [resonancePatterns]);

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-cream-50/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-warm-border dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-4">
              {onClose && (
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-cream-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5 text-charcoal dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
              )}
              <div>
                <h1 className="font-serif text-2xl font-bold text-charcoal dark:text-white">
                  Interactive Scenarios
                </h1>
                <p className="text-sm text-charcoal-muted dark:text-gray-400">
                  Learn types through situational observation
                </p>
              </div>
            </div>

            {/* Progress Stats */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cream-100 dark:bg-gray-800 rounded-full">
                <svg className="w-4 h-4 text-terracotta-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-charcoal dark:text-white">
                  {progress.completedIds.length} completed
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-terracotta-100 dark:bg-terracotta-900/30 rounded-full">
                <svg className="w-4 h-4 text-terracotta-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-sm font-medium text-terracotta-600 dark:text-terracotta-400">
                  {progress.totalPoints} pts
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {/* Scenario View */}
          {currentScenario ? (
            <motion.div
              key="scenario"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={() => setCurrentScenarioId(null)}
                className="mb-6 flex items-center gap-2 text-charcoal-muted dark:text-gray-400 hover:text-charcoal dark:hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to scenarios
              </button>
              <ScenarioCard
                scenario={currentScenario}
                userCoreType={userProfile?.coreType}
                onComplete={handleScenarioComplete}
              />
            </motion.div>
          ) : (
            /* Scenario List */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* Quick Start */}
              <div className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 rounded-2xl p-6 text-white shadow-warm-lg">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-xl font-bold mb-1">Ready to explore?</h2>
                    <p className="text-white/80">
                      Jump into a random scenario and discover how each type responds differently.
                    </p>
                  </div>
                  <button
                    onClick={handleStartRandom}
                    className="px-6 py-3 bg-white text-terracotta-600 font-medium rounded-xl hover:bg-white/90 transition-colors flex items-center gap-2 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Start Random Scenario
                  </button>
                </div>
              </div>

              {/* Pattern Insights (if any history) */}
              {topResonatingTypes.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-warm">
                  <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white mb-3">
                    Your Resonance Patterns
                  </h3>
                  <p className="text-sm text-charcoal-muted dark:text-gray-400 mb-4">
                    Based on your selections across scenarios, you tend to resonate most with:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topResonatingTypes.map((type, index) => (
                      <span
                        key={type}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                          index === 0
                            ? 'bg-terracotta-100 dark:bg-terracotta-900/30 text-terracotta-700 dark:text-terracotta-300'
                            : 'bg-cream-100 dark:bg-gray-700 text-charcoal dark:text-gray-300'
                        }`}
                      >
                        Type {type} ({resonancePatterns[type]}×)
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-charcoal dark:bg-white text-white dark:text-charcoal'
                      : 'bg-cream-100 dark:bg-gray-800 text-charcoal-muted dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-700'
                  }`}
                >
                  All Categories
                </button>
                {categories.map(([key, { label }]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                      selectedCategory === key
                        ? 'bg-charcoal dark:bg-white text-white dark:text-charcoal'
                        : 'bg-cream-100 dark:bg-gray-800 text-charcoal-muted dark:text-gray-400 hover:bg-cream-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    <CategoryIcon category={key} className={`w-4 h-4 ${selectedCategory === key ? '' : CATEGORY_COLORS[key]}`} />
                    {label}
                  </button>
                ))}
              </div>

              {/* Scenario Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredScenarios.map(scenario => {
                  const categoryInfo = SCENARIO_CATEGORIES[scenario.category];
                  const isCompleted = progress.completedIds.includes(scenario.id);

                  return (
                    <motion.button
                      key={scenario.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setCurrentScenarioId(scenario.id)}
                      className={`text-left p-5 rounded-2xl border-2 transition-all ${
                        isCompleted
                          ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/20'
                          : 'border-warm-border dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-terracotta-300 dark:hover:border-terracotta-600 hover:shadow-warm'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <CategoryIcon category={scenario.category} className={`w-6 h-6 ${CATEGORY_COLORS[scenario.category]}`} />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium uppercase text-charcoal-muted dark:text-gray-500">
                              {categoryInfo.label}
                            </span>
                            {isCompleted && (
                              <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Completed
                              </span>
                            )}
                          </div>
                          <h3 className="font-serif text-lg font-semibold text-charcoal dark:text-white">
                            {scenario.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal-muted dark:text-gray-400 line-clamp-3">
                        {scenario.situation.slice(0, 150)}...
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
