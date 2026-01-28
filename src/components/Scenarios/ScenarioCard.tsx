import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeResponsePanel } from './TypeResponsePanel';
import { InsightReveal } from './InsightReveal';
import { CategoryIcon } from './CategoryIcon';
import { SCENARIO_CATEGORIES } from '../../data/scenarios';
import type { Scenario, TypeNumber } from '../../types';

interface ScenarioCardProps {
  scenario: Scenario;
  userCoreType?: TypeNumber;
  onComplete: (scenarioId: string, resonatedTypes: TypeNumber[]) => void;
}

type ScenarioPhase = 'reading' | 'exploring' | 'insight';

export function ScenarioCard({
  scenario,
  userCoreType,
  onComplete
}: ScenarioCardProps) {
  const [phase, setPhase] = useState<ScenarioPhase>('reading');
  const [resonatedTypes, setResonatedTypes] = useState<TypeNumber[]>([]);

  const categoryInfo = SCENARIO_CATEGORIES[scenario.category];

  const handleResonanceToggle = (type: TypeNumber) => {
    setResonatedTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleStartExploring = () => {
    setPhase('exploring');
  };

  const handleShowInsight = () => {
    setPhase('insight');
  };

  const handleComplete = () => {
    onComplete(scenario.id, resonatedTypes);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {/* Reading Phase */}
        {phase === 'reading' && (
          <motion.div
            key="reading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-warm-lg overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-charcoal to-charcoal-light text-white">
              <div className="flex items-center gap-2 mb-3">
                <CategoryIcon category={scenario.category} className="w-6 h-6 text-white/90" />
                <span className="text-sm font-medium opacity-80 uppercase tracking-wider">
                  {categoryInfo.label}
                </span>
              </div>
              <h2 className="font-serif text-2xl font-bold">
                {scenario.title}
              </h2>
            </div>

            {/* Situation */}
            <div className="p-6">
              <p className="text-charcoal dark:text-gray-200 leading-relaxed text-lg">
                {scenario.situation}
              </p>
            </div>

            {/* Start Button */}
            <div className="p-6 pt-0">
              <button
                onClick={handleStartExploring}
                className="w-full py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 shadow-warm"
              >
                Explore How Each Type Responds
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}

        {/* Exploring Phase */}
        {phase === 'exploring' && (
          <motion.div
            key="exploring"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {/* Scenario Header */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-warm p-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">{categoryInfo.icon}</span>
                <div className="flex-1">
                  <h2 className="font-serif text-lg font-semibold text-charcoal dark:text-white">
                    {scenario.title}
                  </h2>
                  <p className="text-sm text-charcoal-muted dark:text-gray-400">
                    Explore all 9 responses • Select what resonates with you
                  </p>
                </div>
                {resonatedTypes.length > 0 && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-terracotta-100 dark:bg-terracotta-900/30 rounded-full">
                    <svg className="w-4 h-4 text-terracotta-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="text-sm font-medium text-terracotta-600 dark:text-terracotta-400">
                      {resonatedTypes.length}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Type Responses */}
            <div className="space-y-3">
              {scenario.responses.map(response => (
                <TypeResponsePanel
                  key={response.type}
                  response={response}
                  isResonated={resonatedTypes.includes(response.type)}
                  onResonanceToggle={handleResonanceToggle}
                />
              ))}
            </div>

            {/* Show Insight Button */}
            <div className="sticky bottom-4 bg-cream-50/95 dark:bg-gray-900/95 backdrop-blur-sm p-4 rounded-2xl shadow-warm-lg">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm text-charcoal-muted dark:text-gray-400">
                  {resonatedTypes.length === 0
                    ? 'Select responses that feel true to you'
                    : `${resonatedTypes.length} response${resonatedTypes.length > 1 ? 's' : ''} selected`
                  }
                </div>
                <button
                  onClick={handleShowInsight}
                  disabled={resonatedTypes.length === 0}
                  className={`px-6 py-3 font-medium rounded-xl transition-all flex items-center gap-2 ${
                    resonatedTypes.length > 0
                      ? 'bg-terracotta-500 hover:bg-terracotta-600 text-white shadow-warm'
                      : 'bg-cream-200 dark:bg-gray-700 text-charcoal-muted dark:text-gray-500 cursor-not-allowed'
                  }`}
                >
                  See My Insight
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Insight Phase */}
        {phase === 'insight' && (
          <motion.div
            key="insight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <InsightReveal
              resonatedTypes={resonatedTypes}
              userCoreType={userCoreType}
              onContinue={handleComplete}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
