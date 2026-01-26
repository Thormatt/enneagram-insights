import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  createInitialState,
  startQuiz,
  processAnswer,
  getProgress,
  getCurrentRankings,
  type AdaptiveQuizState,
} from './engine';
import { TypeRankingCard } from './components/TypeRankingCard';
import { ConfidenceDisplay } from './components/ConfidenceDisplay';
import { AdaptiveResults } from './components/AdaptiveResults';
import type { TypeNumber, WingVariant, InstinctStack } from '../../types';

interface AdaptiveQuizProps {
  onComplete?: (results: {
    type: TypeNumber;
    wing: WingVariant;
    instinctStack: InstinctStack;
    confidence: number;
  }) => void;
  onClose?: () => void;
}

export function AdaptiveQuiz({ onComplete, onClose }: AdaptiveQuizProps) {
  const [state, setState] = useState<AdaptiveQuizState>(createInitialState);
  const [showRankings, setShowRankings] = useState(false);

  const progress = useMemo(() => getProgress(state), [state]);
  const rankings = useMemo(() => getCurrentRankings(state), [state]);

  const handleStartQuiz = useCallback(() => {
    setState(prev => startQuiz(prev));
  }, []);

  const handleAnswer = useCallback((value: number) => {
    setState(prev => processAnswer(prev, value));
  }, []);

  const handleRestart = useCallback(() => {
    setState(createInitialState());
  }, []);

  const handleSaveResults = useCallback(() => {
    if (state.results) {
      onComplete?.({
        type: state.results.primaryType,
        wing: state.results.wing,
        instinctStack: `${state.results.instinctStack[0]}/${state.results.instinctStack[1]}/${state.results.instinctStack[2]}` as InstinctStack,
        confidence: state.results.typeConfidence,
      });
    }
  }, [state.results, onComplete]);

  const currentQuestion = state.currentQuestion;

  // Get stage label
  const getStageLabel = () => {
    switch (state.stage) {
      case 'type':
        return `Core Type (${progress.phase})`;
      case 'forcedChoice':
        return 'Type Clarification';
      case 'wing':
        return 'Wing Determination';
      case 'instinct':
        return 'Instincts';
      default:
        return '';
    }
  };

  // Calculate progress percentage
  const progressPercent = useMemo(() => {
    if (state.stage === 'type') {
      return progress.convergenceProgress * 55; // Type is 55% of quiz
    } else if (state.stage === 'forcedChoice') {
      // Forced choice is 5% of quiz
      const fcAnswered = Object.keys(state.forcedChoiceAnswers).length;
      const totalFc = state.confusedPairs.length * 2; // ~2 questions per pair
      return 55 + (fcAnswered / Math.max(totalFc, 1)) * 5;
    } else if (state.stage === 'wing') {
      const wingQuestionCount = Object.keys(state.wingAnswers).length;
      return 60 + (wingQuestionCount / 8) * 20; // Wing is 20%
    } else if (state.stage === 'instinct') {
      return 80 + (state.instinctProbabilities.questionCount / 15) * 20; // Instinct is 20%
    }
    return 100;
  }, [state, progress]);

  return (
    <div className="min-h-screen bg-cream-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-charcoal dark:bg-gray-900 border-b border-charcoal-light/20 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-serif font-bold text-white">
              Adaptive Assessment
            </h1>
            {state.stage !== 'intro' && state.stage !== 'results' && (
              <span className="px-2 py-1 text-xs font-medium bg-terracotta-500/20 text-terracotta-300 rounded">
                {progress.phase.toUpperCase()}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {state.stage !== 'intro' && state.stage !== 'results' && (
              <button
                onClick={() => setShowRankings(prev => !prev)}
                className="p-2 text-cream-200 hover:text-white hover:bg-charcoal-light/30 rounded-xl transition-colors"
                title="Show type rankings"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </button>
            )}
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 text-cream-200 hover:text-white hover:bg-charcoal-light/30 rounded-xl transition-colors"
                aria-label="Close quiz"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        {state.stage !== 'intro' && state.stage !== 'results' && (
          <div className="max-w-3xl mx-auto px-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-cream-200">{getStageLabel()}</span>
              <span className="text-sm text-cream-300">
                {progress.questionsAnswered} questions • ~{progress.estimatedRemaining.expected} remaining
              </span>
            </div>
            <div className="h-2 bg-charcoal-light/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-terracotta-500 to-gold-500"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="mt-2 text-xs text-cream-400">{progress.message}</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {/* Intro Stage */}
          {state.stage === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-terracotta-500 to-gold-500 flex items-center justify-center shadow-warm">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 dark:text-white mb-4">
                Adaptive Enneagram Assessment
              </h2>
              <p className="text-base sm:text-lg text-charcoal-light dark:text-gray-400 mb-6 max-w-xl mx-auto">
                This assessment adapts to your answers in real-time, asking fewer questions
                while achieving higher accuracy than traditional fixed-length quizzes.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                <div className="bg-cream-200 dark:bg-gray-800 rounded-xl p-4 border border-warm-border dark:border-gray-700">
                  <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-sage-200 dark:bg-sage-900/50 flex items-center justify-center">
                    <span className="text-base font-bold text-sage-700 dark:text-sage-400 whitespace-nowrap">15-25</span>
                  </div>
                  <p className="text-sm font-medium text-charcoal dark:text-gray-200">Questions</p>
                  <p className="text-xs text-charcoal-light dark:text-gray-400">Adaptive length</p>
                </div>
                <div className="bg-cream-200 dark:bg-gray-800 rounded-xl p-4 border border-warm-border dark:border-gray-700">
                  <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-terracotta-200 dark:bg-terracotta-900/50 flex items-center justify-center">
                    <span className="text-base font-bold text-terracotta-700 dark:text-terracotta-400 whitespace-nowrap">Top 3</span>
                  </div>
                  <p className="text-sm font-medium text-charcoal dark:text-gray-200">Types</p>
                  <p className="text-xs text-charcoal-light dark:text-gray-400">With confidence</p>
                </div>
                <div className="bg-cream-200 dark:bg-gray-800 rounded-xl p-4 border border-warm-border dark:border-gray-700">
                  <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-gold-200 dark:bg-gold-900/50 flex items-center justify-center">
                    <span className="text-base font-bold text-gold-700 dark:text-gold-400 whitespace-nowrap">Live</span>
                  </div>
                  <p className="text-sm font-medium text-charcoal dark:text-gray-200">Progress</p>
                  <p className="text-xs text-charcoal-light dark:text-gray-400">Real-time tracking</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-cream-300 dark:bg-charcoal/50 border border-warm-border dark:border-gray-700 rounded-xl p-4 mb-8 max-w-xl mx-auto">
                <p className="text-sm text-charcoal dark:text-cream-200 leading-relaxed">
                  <strong className="font-semibold text-terracotta-600 dark:text-terracotta-400">Note:</strong> This assessment uses Bayesian inference
                  to adapt questions based on your responses. While more accurate than fixed quizzes,
                  only you can truly determine your type through self-reflection.
                </p>
              </div>

              <button
                onClick={handleStartQuiz}
                className="px-8 py-4 bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white font-semibold rounded-xl shadow-warm hover:shadow-warm-lg transition-all"
              >
                Begin Adaptive Assessment
              </button>

              <p className="mt-6 text-sm text-charcoal-muted dark:text-gray-500">
                Usually takes 5-10 minutes
              </p>
            </motion.div>
          )}

          {/* Question Stage */}
          {(state.stage === 'type' || state.stage === 'wing' || state.stage === 'instinct') && currentQuestion && 'text' in currentQuestion && (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="py-4 sm:py-8"
            >
              {/* Rankings sidebar (collapsible) */}
              <AnimatePresence>
                {showRankings && state.stage === 'type' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 overflow-hidden"
                  >
                    <TypeRankingCard rankings={rankings} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Question card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-warm p-4 sm:p-8 border border-warm-border dark:border-gray-700">
                <p className="text-lg sm:text-xl text-charcoal dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                  {currentQuestion.text}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {[
                    { value: 1, label: 'Strongly Disagree' },
                    { value: 2, label: 'Disagree' },
                    { value: 3, label: 'Neutral' },
                    { value: 4, label: 'Agree' },
                    { value: 5, label: 'Strongly Agree' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full py-3 sm:py-4 px-4 sm:px-6 text-left border-2 border-warm-border dark:border-gray-600 rounded-xl hover:border-terracotta-400 dark:hover:border-terracotta-500 hover:bg-terracotta-50 dark:hover:bg-terracotta-900/30 transition-all group"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-charcoal-muted/30 dark:border-gray-500 group-hover:border-terracotta-500 flex items-center justify-center text-charcoal-muted dark:text-gray-500 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 font-semibold text-sm sm:text-base">
                          {option.value}
                        </div>
                        <span className="text-charcoal-light dark:text-gray-300 group-hover:text-charcoal dark:group-hover:text-white text-sm sm:text-base">
                          {option.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Confidence indicator for type stage */}
              {state.stage === 'type' && (
                <div className="mt-6">
                  <ConfidenceDisplay
                    topType={rankings[0]?.type}
                    confidence={rankings[0]?.probability}
                    margin={rankings[0]?.probability - (rankings[1]?.probability || 0)}
                    phase={progress.phase}
                  />
                </div>
              )}
            </motion.div>
          )}

          {/* Forced Choice Stage */}
          {state.stage === 'forcedChoice' && currentQuestion && 'optionA' in currentQuestion && 'optionB' in currentQuestion && (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="py-4 sm:py-8"
            >
              {/* Explanation card */}
              <div className="bg-terracotta-50 dark:bg-terracotta-900/20 border border-terracotta-200 dark:border-terracotta-800 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-terracotta-600 dark:text-terracotta-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-terracotta-700 dark:text-terracotta-300">Type Clarification</span>
                </div>
                <p className="text-sm text-terracotta-600 dark:text-terracotta-400">
                  Your top types are close. Choose which statement resonates more strongly with you.
                </p>
              </div>

              {/* Forced choice question card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-warm p-4 sm:p-8 border border-warm-border dark:border-gray-700">
                <p className="text-center text-charcoal-light dark:text-gray-400 mb-6 text-sm">
                  Which describes you better?
                </p>

                <div className="space-y-4">
                  {/* Option A */}
                  <button
                    onClick={() => handleAnswer(1)}
                    className="w-full p-4 sm:p-6 text-left border-2 border-warm-border dark:border-gray-600 rounded-xl hover:border-sage-500 dark:hover:border-sage-400 hover:bg-sage-50 dark:hover:bg-sage-900/30 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-sage-100 dark:bg-sage-900/50 flex items-center justify-center text-sage-700 dark:text-sage-400 font-bold text-lg group-hover:bg-sage-200 dark:group-hover:bg-sage-800/50 transition-colors">
                        A
                      </div>
                      <span className="text-charcoal dark:text-gray-200 group-hover:text-charcoal-dark dark:group-hover:text-white leading-relaxed">
                        {currentQuestion.optionA.text}
                      </span>
                    </div>
                  </button>

                  {/* VS divider */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-warm-border dark:bg-gray-600"></div>
                    <span className="text-sm font-medium text-charcoal-muted dark:text-gray-500">or</span>
                    <div className="flex-1 h-px bg-warm-border dark:bg-gray-600"></div>
                  </div>

                  {/* Option B */}
                  <button
                    onClick={() => handleAnswer(2)}
                    className="w-full p-4 sm:p-6 text-left border-2 border-warm-border dark:border-gray-600 rounded-xl hover:border-terracotta-500 dark:hover:border-terracotta-400 hover:bg-terracotta-50 dark:hover:bg-terracotta-900/30 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-terracotta-100 dark:bg-terracotta-900/50 flex items-center justify-center text-terracotta-700 dark:text-terracotta-400 font-bold text-lg group-hover:bg-terracotta-200 dark:group-hover:bg-terracotta-800/50 transition-colors">
                        B
                      </div>
                      <span className="text-charcoal dark:text-gray-200 group-hover:text-charcoal-dark dark:group-hover:text-white leading-relaxed">
                        {currentQuestion.optionB.text}
                      </span>
                    </div>
                  </button>
                </div>

                {/* Progress indicator */}
                <div className="mt-6 text-center text-sm text-charcoal-muted dark:text-gray-500">
                  Clarification {Object.keys(state.forcedChoiceAnswers).length + 1} of ~{state.confusedPairs.length * 2}
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Stage */}
          {state.stage === 'results' && state.results && (
            <AdaptiveResults
              results={state.results}
              onSave={handleSaveResults}
              onRetake={handleRestart}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
