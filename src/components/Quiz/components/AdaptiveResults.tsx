import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeRankingCompact } from './TypeRankingCard';
import { WingStrengthIndicator } from './WingStrengthIndicator';
import { StoryComparison } from './StoryComparison';
import type { AdaptiveQuizResults } from '../engine';
import type { TypeNumber, WingVariant } from '../../../types';

interface AdaptiveResultsProps {
  results: AdaptiveQuizResults;
  onSave?: () => void;
  onRetake?: () => void;
}

const TYPE_NAMES: Record<TypeNumber, string> = {
  1: 'The Reformer',
  2: 'The Helper',
  3: 'The Achiever',
  4: 'The Individualist',
  5: 'The Investigator',
  6: 'The Loyalist',
  7: 'The Enthusiast',
  8: 'The Challenger',
  9: 'The Peacemaker',
};

const TYPE_DESCRIPTIONS: Record<TypeNumber, string> = {
  1: 'Principled, purposeful, self-controlled, and perfectionistic. Ones are conscientious and ethical, with a strong sense of right and wrong.',
  2: 'Generous, demonstrative, people-pleasing, and possessive. Twos are empathetic, sincere, and warm-hearted.',
  3: 'Adaptable, excelling, driven, and image-conscious. Threes are self-assured, charming, and ambitious.',
  4: 'Expressive, dramatic, self-absorbed, and temperamental. Fours are romantic, introspective, and emotionally honest.',
  5: 'Perceptive, innovative, secretive, and isolated. Fives are alert, insightful, and curious.',
  6: 'Engaging, responsible, anxious, and suspicious. Sixes are reliable, hardworking, and trustworthy.',
  7: 'Spontaneous, versatile, acquisitive, and scattered. Sevens are extroverted, optimistic, and playful.',
  8: 'Self-confident, decisive, willful, and confrontational. Eights are powerful, dominating, and self-assertive.',
  9: 'Receptive, reassuring, agreeable, and complacent. Nines are stable, trusting, and supportive.',
};

const INSTINCT_NAMES: Record<string, string> = {
  sp: 'Self-Preservation',
  so: 'Social',
  sx: 'Sexual/One-to-One',
};

export function AdaptiveResults({ results, onSave, onRetake }: AdaptiveResultsProps) {
  const [showConfusedTypes, setShowConfusedTypes] = useState(false);

  // Check if types are close (confusion candidates)
  const topTwo = results.topThreeTypes.slice(0, 2);
  const confidenceGap = topTwo[0].probability - topTwo[1].probability;
  const isCloseResult = confidenceGap < 0.15; // Less than 15% gap

  // Parse wing info
  const wingMatch = results.wing.match(/(\d)w(\d)/);
  const coreType = wingMatch ? (Number(wingMatch[1]) as TypeNumber) : results.primaryType;
  const wingType = wingMatch ? (Number(wingMatch[2]) as TypeNumber) : null;

  // Get wing pair info for the indicator
  const wingPairs: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
    1: [9, 2], 2: [1, 3], 3: [2, 4], 4: [3, 5],
    5: [4, 6], 6: [5, 7], 7: [6, 8], 8: [7, 9], 9: [8, 1],
  };
  const [wingAType, wingBType] = wingPairs[coreType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-4 sm:py-8"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-terracotta-500 to-gold-500 flex items-center justify-center shadow-warm">
          <span className="text-3xl font-bold text-white">{results.primaryType}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal dark:text-white mb-2">
          {TYPE_NAMES[results.primaryType]}
        </h2>
        <p className="text-charcoal-light dark:text-gray-400">
          {results.questionsAnswered} questions • {results.typeConfidence}% confidence
        </p>
      </div>

      {/* Close result warning */}
      {isCloseResult && (
        <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="font-medium text-amber-800 dark:text-amber-200 mb-1">
                Close Result: Consider exploring both types
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Your top two types (Type {topTwo[0].type} and Type {topTwo[1].type}) are close in score.
                We recommend reading about both to see which resonates more deeply.
              </p>
              <button
                onClick={() => setShowConfusedTypes(prev => !prev)}
                className="mt-2 text-sm font-medium text-amber-800 dark:text-amber-200 underline hover:no-underline"
              >
                {showConfusedTypes ? 'Hide comparison' : 'Compare these types'}
              </button>
            </div>
          </div>

          {/* Story-based type comparison */}
          {showConfusedTypes && (
            <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-700">
              <StoryComparison
                typeA={topTwo[0].type}
                typeB={topTwo[1].type}
              />
            </div>
          )}
        </div>
      )}

      {/* Main description */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-warm-border dark:border-gray-700 mb-6">
        <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
          {TYPE_DESCRIPTIONS[results.primaryType]}
        </p>
      </div>

      {/* Top 3 Types */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200 mb-4">
          Your Top Three Types
        </h3>
        <TypeRankingCompact rankings={results.topThreeTypes} />
      </div>

      {/* Wing */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200 mb-4">
          Wing Analysis
        </h3>
        <WingStrengthIndicator
          coreType={coreType}
          wing={results.wing}
          balance={results.wingBalance}
          wingAType={wingAType}
          wingBType={wingBType}
        />
      </div>

      {/* Instinct Stack */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-warm-border dark:border-gray-700 mb-8">
        <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200 mb-4">
          Instinct Stack
        </h3>
        <div className="flex items-center gap-3 mb-4">
          {results.instinctStack.map((instinct, index) => (
            <div
              key={instinct}
              className={`flex-1 py-3 px-4 rounded-lg text-center ${
                index === 0
                  ? 'bg-terracotta-50 dark:bg-terracotta-900/30 border-2 border-terracotta-300 dark:border-terracotta-700'
                  : index === 1
                  ? 'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600'
                  : 'bg-gray-50/50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 opacity-60'
              }`}
            >
              <p className={`text-xs uppercase tracking-wide mb-1 ${
                index === 0 ? 'text-terracotta-600 dark:text-terracotta-400' : 'text-charcoal-muted dark:text-gray-500'
              }`}>
                {index === 0 ? 'Dominant' : index === 1 ? 'Secondary' : 'Blind Spot'}
              </p>
              <p className={`font-semibold ${
                index === 0 ? 'text-terracotta-800 dark:text-terracotta-200' : 'text-charcoal dark:text-gray-300'
              }`}>
                {INSTINCT_NAMES[instinct]}
              </p>
              <p className="text-xs text-charcoal-muted dark:text-gray-500 uppercase">
                {instinct.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-charcoal-light dark:text-gray-400">
          Your full subtype is <strong className="text-charcoal dark:text-gray-200">
            {results.instinctStack[0].toUpperCase()}-{results.primaryType}
          </strong>
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {onSave && (
          <button
            onClick={onSave}
            className="px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold rounded-xl shadow-warm hover:shadow-warm-lg transition-all"
          >
            Save to Profile
          </button>
        )}
        {onRetake && (
          <button
            onClick={onRetake}
            className="px-6 py-3 border-2 border-charcoal-light/30 dark:border-gray-600 text-charcoal dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            Retake Assessment
          </button>
        )}
      </div>

      {/* Disclaimer */}
      <p className="mt-6 text-center text-xs text-charcoal-muted dark:text-gray-500 max-w-md mx-auto">
        Remember: No quiz can definitively determine your type. Use these results as a starting
        point for self-reflection and exploration, not as a final answer.
      </p>
    </motion.div>
  );
}
