import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TypeNumber } from '../../../types';
import {
  getVignetteForType,
  getComparisonForPair,
  type TypeEssenceVignette,
  type PairComparisonScenario,
} from '../../../data/stories/typeEssenceVignettes';

interface StoryComparisonProps {
  typeA: TypeNumber;
  typeB: TypeNumber;
  onSelection?: (selectedType: TypeNumber | 'neither' | 'both') => void;
}

type SelectionOption = TypeNumber | 'neither' | 'both' | null;

export function StoryComparison({ typeA, typeB, onSelection }: StoryComparisonProps) {
  const [selection, setSelection] = useState<SelectionOption>(null);
  const [showScenario, setShowScenario] = useState(false);

  const vignetteA = getVignetteForType(typeA);
  const vignetteB = getVignetteForType(typeB);
  const pairScenario = getComparisonForPair(typeA, typeB);

  const handleSelection = (choice: SelectionOption) => {
    setSelection(choice);
    if (choice && onSelection) {
      onSelection(choice);
    }
  };

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200 mb-2">
          Which inner voice sounds more like you?
        </h3>
        <p className="text-sm text-charcoal-light dark:text-gray-400">
          Read both descriptions below. Notice which one creates more recognition in your body,
          not just which sounds more appealing.
        </p>
      </div>

      {/* Vignette comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <VignetteCard
          vignette={vignetteA}
          isSelected={selection === typeA}
          onSelect={() => handleSelection(typeA)}
        />
        <VignetteCard
          vignette={vignetteB}
          isSelected={selection === typeB}
          onSelect={() => handleSelection(typeB)}
        />
      </div>

      {/* Neither/Both options */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => handleSelection('both')}
          className={`px-4 py-2 rounded-lg text-sm transition-all ${
            selection === 'both'
              ? 'bg-terracotta-100 dark:bg-terracotta-900/40 border-2 border-terracotta-400 dark:border-terracotta-600 text-terracotta-700 dark:text-terracotta-300'
              : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-charcoal-light dark:text-gray-400 hover:border-gray-300'
          }`}
        >
          Both resonate equally
        </button>
        <button
          onClick={() => handleSelection('neither')}
          className={`px-4 py-2 rounded-lg text-sm transition-all ${
            selection === 'neither'
              ? 'bg-terracotta-100 dark:bg-terracotta-900/40 border-2 border-terracotta-400 dark:border-terracotta-600 text-terracotta-700 dark:text-terracotta-300'
              : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-charcoal-light dark:text-gray-400 hover:border-gray-300'
          }`}
        >
          Neither feels right
        </button>
      </div>

      {/* Pair-specific scenario comparison */}
      {pairScenario && (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setShowScenario(!showScenario)}
            className="w-full flex items-center justify-between py-2 text-sm font-medium text-charcoal dark:text-gray-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors"
          >
            <span>See how these types differ in a specific situation</span>
            <svg
              className={`w-5 h-5 transition-transform ${showScenario ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {showScenario && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <ScenarioComparison scenario={pairScenario} typeA={typeA} typeB={typeB} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Selection feedback */}
      <AnimatePresence>
        {selection && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-sage-50 dark:bg-sage-900/30 border border-sage-200 dark:border-sage-800 rounded-lg p-4"
          >
            {selection === 'neither' ? (
              <p className="text-sm text-sage-800 dark:text-sage-200">
                That's okay. Type discovery is a journey. Consider reading about all nine types,
                or exploring the subtype descriptions to find what resonates.
              </p>
            ) : selection === 'both' ? (
              <p className="text-sm text-sage-800 dark:text-sage-200">
                This is common with these two types. Focus on your <em>core fear</em> and <em>automatic reaction under stress</em>—
                that often reveals the true type. The scenario comparison above might help clarify.
              </p>
            ) : (
              <p className="text-sm text-sage-800 dark:text-sage-200">
                Type {selection} resonates more with you. Remember, this is about core motivations,
                not behaviors—you might act like another type sometimes, but the inner voice matters most.
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface VignetteCardProps {
  vignette: TypeEssenceVignette;
  isSelected: boolean;
  onSelect: () => void;
}

function VignetteCard({ vignette, isSelected, onSelect }: VignetteCardProps) {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`text-left p-5 rounded-xl border-2 transition-all ${
        isSelected
          ? 'bg-terracotta-50 dark:bg-terracotta-900/30 border-terracotta-400 dark:border-terracotta-600 shadow-warm'
          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
      }`}
    >
      {/* Type badge */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            isSelected
              ? 'bg-terracotta-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-charcoal dark:text-gray-300'
          }`}
        >
          {vignette.type}
        </span>
        <span className={`font-medium ${isSelected ? 'text-terracotta-700 dark:text-terracotta-300' : 'text-charcoal dark:text-gray-200'}`}>
          {vignette.title}
        </span>
      </div>

      {/* Inner voice narrative */}
      <p className="text-sm text-charcoal-light dark:text-gray-400 leading-relaxed mb-4 italic">
        "{vignette.innerVoice}"
      </p>

      {/* Core question */}
      <p className="text-xs font-medium text-charcoal-muted dark:text-gray-500">
        Core question: <span className="text-charcoal dark:text-gray-300">{vignette.coreQuestion}</span>
      </p>

      {/* Selection indicator */}
      {isSelected && (
        <div className="mt-3 flex items-center gap-2 text-terracotta-600 dark:text-terracotta-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">This resonates more</span>
        </div>
      )}
    </motion.button>
  );
}

interface ScenarioComparisonProps {
  scenario: PairComparisonScenario;
  typeA: TypeNumber;
  typeB: TypeNumber;
}

function ScenarioComparison({ scenario, typeA, typeB }: ScenarioComparisonProps) {
  // Ensure responses are in the same order as typeA/typeB props
  const responseA =
    scenario.typeAResponse.type === typeA ? scenario.typeAResponse : scenario.typeBResponse;
  const responseB =
    scenario.typeBResponse.type === typeB ? scenario.typeBResponse : scenario.typeAResponse;

  return (
    <div className="mt-4 space-y-4">
      {/* Scenario description */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
        <p className="text-sm font-medium text-charcoal dark:text-gray-200 mb-1">Situation:</p>
        <p className="text-sm text-charcoal-light dark:text-gray-400 italic">
          "{scenario.scenario}"
        </p>
      </div>

      {/* Response comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-xs uppercase tracking-wide text-charcoal-muted dark:text-gray-500 mb-2">
            Type {responseA.type} might think:
          </p>
          <p className="text-sm text-charcoal dark:text-gray-300 italic">
            "{responseA.response}"
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-xs uppercase tracking-wide text-charcoal-muted dark:text-gray-500 mb-2">
            Type {responseB.type} might think:
          </p>
          <p className="text-sm text-charcoal dark:text-gray-300 italic">
            "{responseB.response}"
          </p>
        </div>
      </div>

      {/* Key distinction */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-3 border border-amber-200 dark:border-amber-800">
        <p className="text-xs uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-1">
          Key Distinction
        </p>
        <p className="text-sm text-amber-800 dark:text-amber-200">
          {scenario.keyDistinction}
        </p>
      </div>
    </div>
  );
}
