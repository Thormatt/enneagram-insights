import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { StoryComparison } from './StoryComparison';
import type { AdaptiveQuizResults, SynthesizedResults } from '../engine';
import {
  getSubtypeProfile,
  calculateCenterBalance,
  getHarmonicGroup,
  getHornevianGroup,
  findConfusionCandidates,
  getTritypeArchetype,
  generateGrowthSummary,
} from '../engine';
import type { TypeNumber, InstinctType } from '../../../types';
import { getTritypeInfoFromCode } from '../../../data/tritypes/tritypeDescriptions';

// Growth arrow mapping (direction of integration)
const GROWTH_ARROWS: Record<TypeNumber, TypeNumber> = {
  1: 7, 2: 4, 3: 6, 4: 1, 5: 8, 6: 9, 7: 5, 8: 2, 9: 3,
};

// Extended results type that may include synthesis
interface ResultsWithSynthesis extends AdaptiveQuizResults {
  synthesis?: SynthesizedResults;
}

interface AdaptiveResultsProps {
  results: ResultsWithSynthesis;
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
  const [expandedSection, setExpandedSection] = useState<string | null>('tritype');

  // Check if types are close (confusion candidates)
  const topTwo = results.topThreeTypes.slice(0, 2);
  const confidenceGap = topTwo[0].probability - topTwo[1].probability;
  const isCloseResult = confidenceGap < 0.15;

  // Get tritype info
  const tritypeInfo = results.tritype
    ? getTritypeInfoFromCode(results.tritype.code)
    : null;

  // Sort all types by percentage for display
  const sortedTypes = results.allTypeScores
    ? [...results.allTypeScores].sort((a, b) => b.percentage - a.percentage)
    : results.topThreeTypes.map(t => ({ ...t, percentage: Math.round(t.probability * 100) }));

  // Generate synthesis if not provided (for adaptive engine results)
  const synthesis = useMemo<SynthesizedResults | undefined>(() => {
    // If already provided, use it
    if (results.synthesis) {
      return results.synthesis;
    }

    // Generate on the fly
    const dominantInstinct = results.instinctStack[0] as InstinctType;
    const healthLevel = results.integrationLevel?.level === 'healthy' ? 'healthy' :
                        results.integrationLevel?.level === 'unhealthy' ? 'unhealthy' : 'average';
    const growthArrow = GROWTH_ARROWS[results.primaryType];

    // Build allTypeScores for synthesis
    const typeScoresForSynthesis = sortedTypes.map(t => ({
      type: t.type,
      percentage: t.percentage,
    }));

    // Create subtype profile
    const subtypeProfile = getSubtypeProfile(results.primaryType, dominantInstinct);

    // Calculate center balance
    const centerBalance = calculateCenterBalance(typeScoresForSynthesis);
    const dominant = centerBalance.gut >= centerBalance.heart && centerBalance.gut >= centerBalance.head
      ? 'gut'
      : centerBalance.heart >= centerBalance.head
      ? 'heart'
      : 'head';

    // Get groups
    const harmonicGroup = getHarmonicGroup(results.primaryType);
    const hornevianGroup = getHornevianGroup(results.primaryType);

    // Find confusion candidates
    const confusionCandidates = findConfusionCandidates(results.primaryType, typeScoresForSynthesis);

    // Get tritype archetype
    const tritypeArchetype = results.tritype
      ? getTritypeArchetype(results.tritype.code)
      : null;

    // Generate growth summary
    const growthSummary = generateGrowthSummary(results.primaryType, healthLevel, growthArrow);

    return {
      subtypeProfile,
      centerBalance: { ...centerBalance, dominant },
      harmonicGroup,
      hornevianGroup,
      confusionCandidates,
      tritypeArchetype,
      answerPatterns: {
        totalAnswers: results.questionsAnswered,
        neutralPercentage: 0, // Not available from adaptive results
        strongOpinionPercentage: 0,
        pattern: 'balanced',
        insight: 'Answer patterns are analyzed when available from the quiz engine.',
      },
      growthSummary,
    };
  }, [results, sortedTypes]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-4 sm:py-8 space-y-6"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-terracotta-500 to-gold-500 flex items-center justify-center shadow-warm">
          <span className="text-4xl font-bold text-white">{results.primaryType}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 dark:text-white mb-2">
          {TYPE_NAMES[results.primaryType]}
        </h2>
        <p className="text-charcoal-light dark:text-gray-400 mb-4">
          {results.questionsAnswered} questions answered
        </p>
        <p className="text-sm text-charcoal-light dark:text-gray-400 max-w-lg mx-auto">
          {TYPE_DESCRIPTIONS[results.primaryType]}
        </p>
      </div>

      {/* Inconclusive result warning */}
      {'isInconclusive' in results && results.isInconclusive && (
        <div className="bg-purple-50 dark:bg-purple-900/30 border-2 border-purple-300 dark:border-purple-700 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <p className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                Inconclusive Result
              </p>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                {'inconclusiveReason' in results && results.inconclusiveReason}
              </p>
              <p className="text-sm text-purple-600 dark:text-purple-400">
                The type shown below is your highest-scoring result, but we recommend exploring your top 3 types
                to find which truly resonates with your inner experience.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Close result warning with story comparison */}
      {isCloseResult && !('isInconclusive' in results && results.isInconclusive) && (
        <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div className="flex-1">
              <p className="font-medium text-amber-800 dark:text-amber-200 mb-1">
                Close Result: Type {topTwo[0].type} and Type {topTwo[1].type}
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                These types are close in score. Read both stories below to see which resonates.
              </p>
              <button
                onClick={() => setShowConfusedTypes(prev => !prev)}
                className="mt-2 text-sm font-medium text-amber-800 dark:text-amber-200 underline hover:no-underline"
              >
                {showConfusedTypes ? 'Hide comparison' : 'Compare with stories'}
              </button>
            </div>
          </div>
          {showConfusedTypes && (
            <div className="mt-4 pt-4 border-t border-amber-200 dark:border-amber-700">
              <StoryComparison typeA={topTwo[0].type} typeB={topTwo[1].type} />
            </div>
          )}
        </div>
      )}

      {/* All 9 Types Distribution */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-warm-border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200 mb-4">
          Your Type Distribution
        </h3>
        <div className="space-y-3">
          {sortedTypes.map((typeScore, index) => (
            <div key={typeScore.type} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                index === 0
                  ? 'bg-terracotta-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-charcoal dark:text-gray-300'
              }`}>
                {typeScore.type}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm ${index === 0 ? 'font-semibold text-charcoal dark:text-white' : 'text-charcoal-light dark:text-gray-400'}`}>
                    {TYPE_NAMES[typeScore.type]}
                  </span>
                  <span className={`text-sm font-medium ${index === 0 ? 'text-terracotta-600 dark:text-terracotta-400' : 'text-charcoal-muted dark:text-gray-500'}`}>
                    {typeScore.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${typeScore.percentage}%` }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`h-full rounded-full ${
                      index === 0
                        ? 'bg-terracotta-500'
                        : index === 1
                        ? 'bg-terracotta-300'
                        : index === 2
                        ? 'bg-terracotta-200'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tritype Section */}
      {results.tritype && tritypeInfo && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-warm-border dark:border-gray-700 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'tritype' ? null : 'tritype')}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200">
                Your Tritype: {results.tritype.code}
              </h3>
              <p className="text-sm text-charcoal-light dark:text-gray-400">
                {tritypeInfo.name} — {tritypeInfo.archetype}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                <span className="w-7 h-7 rounded-full bg-gut-500 flex items-center justify-center text-white text-xs font-bold">
                  {results.tritype.gut}
                </span>
                <span className="w-7 h-7 rounded-full bg-heart-500 flex items-center justify-center text-white text-xs font-bold">
                  {results.tritype.heart}
                </span>
                <span className="w-7 h-7 rounded-full bg-head-500 flex items-center justify-center text-white text-xs font-bold">
                  {results.tritype.head}
                </span>
              </div>
              <svg
                className={`w-5 h-5 text-charcoal-muted transition-transform ${expandedSection === 'tritype' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {expandedSection === 'tritype' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"
            >
              <div className="pt-4 space-y-4">
                {/* Center breakdown */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 rounded-lg bg-gut-50 dark:bg-gut-900/20">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gut-500 flex items-center justify-center">
                      <span className="text-white font-bold">{results.tritype.gut}</span>
                    </div>
                    <p className="text-xs font-medium text-gut-700 dark:text-gut-300">Body/Gut</p>
                    <p className="text-xs text-gut-600 dark:text-gut-400">{TYPE_NAMES[results.tritype.gut].replace('The ', '')}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-heart-50 dark:bg-heart-900/20">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-heart-500 flex items-center justify-center">
                      <span className="text-white font-bold">{results.tritype.heart}</span>
                    </div>
                    <p className="text-xs font-medium text-heart-700 dark:text-heart-300">Heart</p>
                    <p className="text-xs text-heart-600 dark:text-heart-400">{TYPE_NAMES[results.tritype.heart].replace('The ', '')}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-head-50 dark:bg-head-900/20">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-head-500 flex items-center justify-center">
                      <span className="text-white font-bold">{results.tritype.head}</span>
                    </div>
                    <p className="text-xs font-medium text-head-700 dark:text-head-300">Head</p>
                    <p className="text-xs text-head-600 dark:text-head-400">{TYPE_NAMES[results.tritype.head].replace('The ', '')}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-charcoal-light dark:text-gray-300 leading-relaxed">
                  {tritypeInfo.description}
                </p>

                {/* Inner Experience */}
                <div className="bg-cream-100 dark:bg-gray-700/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-charcoal dark:text-gray-200 mb-2">Inner Experience</p>
                  <p className="text-sm text-charcoal-light dark:text-gray-400 italic">
                    "{tritypeInfo.innerExperience}"
                  </p>
                </div>

                {/* Strengths & Challenges */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-charcoal dark:text-gray-200 mb-2">Strengths</p>
                    <ul className="space-y-1">
                      {tritypeInfo.strengths.map((strength, i) => (
                        <li key={i} className="text-sm text-charcoal-light dark:text-gray-400 flex items-start gap-2">
                          <span className="text-sage-500 mt-1">•</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal dark:text-gray-200 mb-2">Challenges</p>
                    <ul className="space-y-1">
                      {tritypeInfo.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-charcoal-light dark:text-gray-400 flex items-start gap-2">
                          <span className="text-terracotta-500 mt-1">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Growth & Stress Arrows */}
      {results.growthArrow && results.stressArrow && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-warm-border dark:border-gray-700 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'arrows' ? null : 'arrows')}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200">
                Growth & Stress Patterns
              </h3>
              <p className="text-sm text-charcoal-light dark:text-gray-400">
                Type {results.primaryType} → {results.growthArrow.targetType} (growth) · {results.primaryType} → {results.stressArrow.targetType} (stress)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                <span className="w-7 h-7 rounded-full bg-sage-500 flex items-center justify-center text-white text-xs font-bold" title="Growth">
                  ↗
                </span>
                <span className="w-7 h-7 rounded-full bg-terracotta-500 flex items-center justify-center text-white text-xs font-bold" title="Stress">
                  ↘
                </span>
              </div>
              <svg
                className={`w-5 h-5 text-charcoal-muted transition-transform ${expandedSection === 'arrows' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {expandedSection === 'arrows' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"
            >
              <div className="pt-4 space-y-6">
                {/* Growth Arrow */}
                <div className="bg-sage-50 dark:bg-sage-900/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-sage-500 flex items-center justify-center text-white font-bold">
                      {results.growthArrow.targetType}
                    </span>
                    <div>
                      <h4 className="font-semibold text-sage-800 dark:text-sage-200">
                        Growth Direction → Type {results.growthArrow.targetType}
                      </h4>
                      <p className="text-xs text-sage-600 dark:text-sage-400">
                        {TYPE_NAMES[results.growthArrow.targetType]}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-sage-700 dark:text-sage-300 mb-3 leading-relaxed">
                    {results.growthArrow.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-medium text-sage-800 dark:text-sage-200 mb-2">What You Gain</p>
                      <ul className="space-y-1">
                        {results.growthArrow.gains.slice(0, 3).map((gain, i) => (
                          <li key={i} className="text-xs text-sage-600 dark:text-sage-400 flex items-start gap-1.5">
                            <span className="text-sage-500 mt-0.5">+</span>
                            {gain}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-sage-800 dark:text-sage-200 mb-2">Practices</p>
                      <ul className="space-y-1">
                        {results.growthArrow.practices.slice(0, 3).map((practice, i) => (
                          <li key={i} className="text-xs text-sage-600 dark:text-sage-400 flex items-start gap-1.5">
                            <span className="text-sage-500 mt-0.5">•</span>
                            {practice}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Stress Arrow */}
                <div className="bg-terracotta-50 dark:bg-terracotta-900/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-terracotta-500 flex items-center justify-center text-white font-bold">
                      {results.stressArrow.targetType}
                    </span>
                    <div>
                      <h4 className="font-semibold text-terracotta-800 dark:text-terracotta-200">
                        Stress Direction → Type {results.stressArrow.targetType}
                      </h4>
                      <p className="text-xs text-terracotta-600 dark:text-terracotta-400">
                        {TYPE_NAMES[results.stressArrow.targetType]}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-terracotta-700 dark:text-terracotta-300 mb-3 leading-relaxed">
                    {results.stressArrow.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-medium text-terracotta-800 dark:text-terracotta-200 mb-2">Under Stress You May</p>
                      <ul className="space-y-1">
                        {results.stressArrow.exhibits.slice(0, 3).map((exhibit, i) => (
                          <li key={i} className="text-xs text-terracotta-600 dark:text-terracotta-400 flex items-start gap-1.5">
                            <span className="text-terracotta-500 mt-0.5">!</span>
                            {exhibit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-terracotta-800 dark:text-terracotta-200 mb-2">Warning Signs</p>
                      <ul className="space-y-1">
                        {results.stressArrow.warningSigns.slice(0, 3).map((sign, i) => (
                          <li key={i} className="text-xs text-terracotta-600 dark:text-terracotta-400 flex items-start gap-1.5">
                            <span className="text-terracotta-500 mt-0.5">⚠</span>
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Instinct Stack */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-warm-border dark:border-gray-700">
        <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200 mb-4">
          Your Subtype: {results.instinctStack[0].toUpperCase()}-{results.primaryType}
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

        {/* Subtype Profile (from synthesis) */}
        {synthesis?.subtypeProfile && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-start gap-3">
              {synthesis!.subtypeProfile.isCounterType && (
                <span className="shrink-0 px-2 py-0.5 text-xs font-medium bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full">
                  Counter-type
                </span>
              )}
              <div>
                <p className="font-semibold text-charcoal dark:text-gray-200">
                  {synthesis!.subtypeProfile.tagline}
                </p>
                <p className="text-sm text-charcoal-light dark:text-gray-400 mt-1">
                  {synthesis!.subtypeProfile.briefDescription}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Center Balance Visualization */}
      {synthesis?.centerBalance && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-warm-border dark:border-gray-700 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'centers' ? null : 'centers')}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200">
                Center Balance
              </h3>
              <p className="text-sm text-charcoal-light dark:text-gray-400">
                Dominant: {synthesis!.centerBalance.dominant.charAt(0).toUpperCase() + synthesis!.centerBalance.dominant.slice(1)} Center
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="px-2 py-1 text-xs font-medium rounded bg-gut-100 dark:bg-gut-900/40 text-gut-700 dark:text-gut-300">
                  {synthesis!.centerBalance.gut}%
                </span>
                <span className="px-2 py-1 text-xs font-medium rounded bg-heart-100 dark:bg-heart-900/40 text-heart-700 dark:text-heart-300">
                  {synthesis!.centerBalance.heart}%
                </span>
                <span className="px-2 py-1 text-xs font-medium rounded bg-head-100 dark:bg-head-900/40 text-head-700 dark:text-head-300">
                  {synthesis!.centerBalance.head}%
                </span>
              </div>
              <svg
                className={`w-5 h-5 text-charcoal-muted transition-transform ${expandedSection === 'centers' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {expandedSection === 'centers' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"
            >
              <div className="pt-4 space-y-4">
                {/* Center bars */}
                {[
                  { name: 'Gut (8, 9, 1)', key: 'gut', color: 'gut' },
                  { name: 'Heart (2, 3, 4)', key: 'heart', color: 'heart' },
                  { name: 'Head (5, 6, 7)', key: 'head', color: 'head' },
                ].map(center => (
                  <div key={center.key}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-charcoal dark:text-gray-200">{center.name}</span>
                      <span className={`text-sm font-bold text-${center.color}-600 dark:text-${center.color}-400`}>
                        {results.synthesis!.centerBalance[center.key as 'gut' | 'heart' | 'head']}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${results.synthesis!.centerBalance[center.key as 'gut' | 'heart' | 'head']}%` }}
                        transition={{ duration: 0.5 }}
                        className={`h-full rounded-full ${
                          center.color === 'gut' ? 'bg-gut-500' :
                          center.color === 'heart' ? 'bg-heart-500' : 'bg-head-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}

                <p className="text-xs text-charcoal-muted dark:text-gray-500 mt-4">
                  This shows how your answers distributed across the three intelligence centers.
                  Your {synthesis!.centerBalance.dominant} center is most active.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Harmonic & Hornevian Groups */}
      {synthesis && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-warm-border dark:border-gray-700 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'groups' ? null : 'groups')}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200">
                Behavioral Styles
              </h3>
              <p className="text-sm text-charcoal-light dark:text-gray-400">
                {synthesis!.harmonicGroup.name} · {synthesis!.hornevianGroup.name}
              </p>
            </div>
            <svg
              className={`w-5 h-5 text-charcoal-muted transition-transform ${expandedSection === 'groups' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedSection === 'groups' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"
            >
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Harmonic Group */}
                <div className="bg-cream-100 dark:bg-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-gold-600 dark:text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-semibold text-charcoal dark:text-gray-200">
                      Harmonic: {synthesis!.harmonicGroup.name}
                    </h4>
                  </div>
                  <p className="text-sm text-charcoal-light dark:text-gray-400">
                    {synthesis!.harmonicGroup.description}
                  </p>
                </div>

                {/* Hornevian Group */}
                <div className="bg-cream-100 dark:bg-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-sage-600 dark:text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <h4 className="font-semibold text-charcoal dark:text-gray-200">
                      Hornevian: {synthesis!.hornevianGroup.name}
                    </h4>
                  </div>
                  <p className="text-sm text-charcoal-light dark:text-gray-400">
                    {synthesis!.hornevianGroup.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Confusion Candidates */}
      {synthesis?.confusionCandidates && synthesis!.confusionCandidates.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-warm-border dark:border-gray-700 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'confusion' ? null : 'confusion')}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200">
                Types to Consider
              </h3>
              <p className="text-sm text-charcoal-light dark:text-gray-400">
                {synthesis!.confusionCandidates.length} type{synthesis!.confusionCandidates.length > 1 ? 's' : ''} scored close to your primary type
              </p>
            </div>
            <svg
              className={`w-5 h-5 text-charcoal-muted transition-transform ${expandedSection === 'confusion' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedSection === 'confusion' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"
            >
              <div className="pt-4 space-y-4">
                {synthesis!.confusionCandidates.map(candidate => (
                  <div key={candidate.type} className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center text-amber-800 dark:text-amber-200 font-bold">
                          {candidate.type}
                        </span>
                        <span className="font-medium text-charcoal dark:text-gray-200">
                          {TYPE_NAMES[candidate.type]}
                        </span>
                      </div>
                      <span className="text-sm text-amber-700 dark:text-amber-300">
                        {candidate.percentage}%
                      </span>
                    </div>
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      {candidate.differentiator}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Answer Pattern Insights */}
      {synthesis?.answerPatterns && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-warm-border dark:border-gray-700 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'patterns' ? null : 'patterns')}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200">
                Answer Patterns
              </h3>
              <p className="text-sm text-charcoal-light dark:text-gray-400">
                {synthesis!.answerPatterns.pattern.charAt(0).toUpperCase() + synthesis!.answerPatterns.pattern.slice(1)} response style
              </p>
            </div>
            <svg
              className={`w-5 h-5 text-charcoal-muted transition-transform ${expandedSection === 'patterns' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {expandedSection === 'patterns' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"
            >
              <div className="pt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-charcoal dark:text-white">
                      {synthesis!.answerPatterns.strongOpinionPercentage}%
                    </p>
                    <p className="text-xs text-charcoal-muted dark:text-gray-400">
                      Strong Opinions
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-charcoal dark:text-white">
                      {synthesis!.answerPatterns.neutralPercentage}%
                    </p>
                    <p className="text-xs text-charcoal-muted dark:text-gray-400">
                      Neutral Responses
                    </p>
                  </div>
                </div>
                <p className="text-sm text-charcoal-light dark:text-gray-400">
                  {synthesis!.answerPatterns.insight}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Personalized Growth Summary */}
      {synthesis?.growthSummary && (
        <div className="bg-gradient-to-br from-sage-50 to-cream-100 dark:from-sage-900/30 dark:to-gray-800 rounded-xl p-6 border border-sage-200 dark:border-sage-800">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-6 h-6 text-sage-600 dark:text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <h3 className="text-lg font-semibold text-sage-800 dark:text-sage-200">
              Your Growth Path
            </h3>
          </div>
          <p className="text-charcoal dark:text-gray-200 leading-relaxed">
            {synthesis!.growthSummary}
          </p>
        </div>
      )}

      {/* Integration Level */}
      {results.integrationLevel && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-warm-border dark:border-gray-700 overflow-hidden">
          <button
            onClick={() => setExpandedSection(expandedSection === 'integration' ? null : 'integration')}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div>
              <h3 className="text-lg font-semibold text-charcoal dark:text-gray-200">
                Current Integration Level
              </h3>
              <p className="text-sm text-charcoal-light dark:text-gray-400">
                Level {results.integrationLevel.healthLevel}: {results.integrationLevel.levelTitle}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                results.integrationLevel.level === 'healthy'
                  ? 'bg-sage-100 dark:bg-sage-900/40 text-sage-700 dark:text-sage-300'
                  : results.integrationLevel.level === 'average'
                  ? 'bg-gold-100 dark:bg-gold-900/40 text-gold-700 dark:text-gold-300'
                  : 'bg-terracotta-100 dark:bg-terracotta-900/40 text-terracotta-700 dark:text-terracotta-300'
              }`}>
                {results.integrationLevel.level.charAt(0).toUpperCase() + results.integrationLevel.level.slice(1)}
              </span>
              <svg
                className={`w-5 h-5 text-charcoal-muted transition-transform ${expandedSection === 'integration' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {expandedSection === 'integration' && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"
            >
              <div className="pt-4 space-y-4">
                {/* Level indicator bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-charcoal-muted dark:text-gray-500">
                    <span>Unhealthy</span>
                    <span>Average</span>
                    <span>Healthy</span>
                  </div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/3 bg-gradient-to-r from-terracotta-400 to-terracotta-300" />
                      <div className="w-1/3 bg-gradient-to-r from-gold-300 to-gold-200" />
                      <div className="w-1/3 bg-gradient-to-r from-sage-300 to-sage-400" />
                    </div>
                    <div
                      className="absolute top-0 h-full w-1 bg-charcoal dark:bg-white rounded-full"
                      style={{
                        left: `${((results.integrationLevel.normalized + 1) / 2) * 100}%`,
                        transform: 'translateX(-50%)',
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-charcoal-muted dark:text-gray-500">
                    <span>9</span>
                    <span>5</span>
                    <span>1</span>
                  </div>
                </div>

                {/* Level description */}
                <div className={`rounded-lg p-4 ${
                  results.integrationLevel.level === 'healthy'
                    ? 'bg-sage-50 dark:bg-sage-900/20'
                    : results.integrationLevel.level === 'average'
                    ? 'bg-gold-50 dark:bg-gold-900/20'
                    : 'bg-terracotta-50 dark:bg-terracotta-900/20'
                }`}>
                  <p className="text-sm text-charcoal-light dark:text-gray-300 leading-relaxed">
                    {results.integrationLevel.levelDescription}
                  </p>
                </div>

                {/* Guidance */}
                <p className="text-xs text-charcoal-muted dark:text-gray-500">
                  {results.integrationLevel.level === 'healthy'
                    ? 'You are currently functioning at a healthy level. Continue your growth practices and self-awareness work.'
                    : results.integrationLevel.level === 'average'
                    ? 'You are at an average level of functioning. Focus on your growth direction and be mindful of stress patterns.'
                    : 'You may be experiencing stress or difficulty. Consider seeking support and reviewing the growth practices for your type.'}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
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

      {/* Attention Check Warning */}
      {results.attentionChecksScore && !results.attentionChecksPassed && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-xs text-amber-800 dark:text-amber-200">
              Some attention check questions were answered unexpectedly. Consider retaking the assessment with more focus for accurate results.
            </p>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-center text-xs text-charcoal-muted dark:text-gray-500 max-w-md mx-auto">
        Remember: No quiz can definitively determine your type. Use these results as a starting
        point for self-reflection and exploration, not as a final answer.
      </p>
    </motion.div>
  );
}
