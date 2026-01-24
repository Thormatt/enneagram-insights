import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  coreTypeQuestions,
  wingQuestions,
  instinctQuestions,
  calculateTypeScores,
  calculateWingScores,
  calculateInstinctScores,
  getTopType,
  getInstinctStack
} from './quizData';
import { QuizResults } from './QuizResults';
import type { TypeNumber, WingVariant, InstinctStack } from '../../types';

type QuizStage = 'intro' | 'core' | 'wing' | 'instinct' | 'results';

interface QuizState {
  stage: QuizStage;
  coreAnswers: Record<string, number>;
  wingAnswers: Record<string, number>;
  instinctAnswers: Record<string, number>;
  currentQuestionIndex: number;
  calculatedType: TypeNumber | null;
  calculatedWing: WingVariant | null;
  calculatedInstinctStack: InstinctStack | null;
  confidence: number;
}

const initialState: QuizState = {
  stage: 'intro',
  coreAnswers: {},
  wingAnswers: {},
  instinctAnswers: {},
  currentQuestionIndex: 0,
  calculatedType: null,
  calculatedWing: null,
  calculatedInstinctStack: null,
  confidence: 0
};

interface QuizProps {
  onComplete?: (results: {
    type: TypeNumber;
    wing: WingVariant;
    instinctStack: InstinctStack;
    confidence: number;
  }) => void;
  onClose?: () => void;
}

export function Quiz({ onComplete, onClose }: QuizProps) {
  const [state, setState] = useState<QuizState>(initialState);

  const currentQuestions = useMemo(() => {
    switch (state.stage) {
      case 'core':
        return coreTypeQuestions;
      case 'wing':
        return state.calculatedType ? wingQuestions[state.calculatedType] || [] : [];
      case 'instinct':
        return instinctQuestions;
      default:
        return [];
    }
  }, [state.stage, state.calculatedType]);

  const currentQuestion = currentQuestions[state.currentQuestionIndex];
  const progress = currentQuestions.length > 0
    ? ((state.currentQuestionIndex + 1) / currentQuestions.length) * 100
    : 0;

  const handleAnswer = (value: number) => {
    if (!currentQuestion) return;

    const answerKey = state.stage === 'core' ? 'coreAnswers'
      : state.stage === 'wing' ? 'wingAnswers'
      : 'instinctAnswers';

    const newAnswers = {
      ...state[answerKey],
      [currentQuestion.id]: value
    };

    // Check if this is the last question in the current stage
    if (state.currentQuestionIndex >= currentQuestions.length - 1) {
      // Calculate results and move to next stage
      if (state.stage === 'core') {
        const scores = calculateTypeScores(newAnswers);
        const topType = getTopType(scores);
        const maxScore = scores[topType];
        const totalPossible = coreTypeQuestions.length * 3 * 5; // max answer * max score * questions
        const confidence = Math.min(100, Math.round((maxScore / (totalPossible / 9)) * 100));

        setState({
          ...state,
          coreAnswers: newAnswers,
          calculatedType: topType,
          confidence,
          stage: 'wing',
          currentQuestionIndex: 0
        });
      } else if (state.stage === 'wing') {
        const wingScores = calculateWingScores(state.calculatedType!, newAnswers);
        const wings = getWingsForType(state.calculatedType!);
        const wing: WingVariant = wingScores.wingA >= wingScores.wingB
          ? `${state.calculatedType}w${wings[0]}` as WingVariant
          : `${state.calculatedType}w${wings[1]}` as WingVariant;

        setState({
          ...state,
          wingAnswers: newAnswers,
          calculatedWing: wing,
          stage: 'instinct',
          currentQuestionIndex: 0
        });
      } else if (state.stage === 'instinct') {
        const instinctScores = calculateInstinctScores(newAnswers);
        const stack = getInstinctStack(instinctScores);
        const instinctStack: InstinctStack = `${stack[0]}/${stack[1]}/${stack[2]}` as InstinctStack;

        setState({
          ...state,
          instinctAnswers: newAnswers,
          calculatedInstinctStack: instinctStack,
          stage: 'results'
        });
      }
    } else {
      // Move to next question
      setState({
        ...state,
        [answerKey]: newAnswers,
        currentQuestionIndex: state.currentQuestionIndex + 1
      });
    }
  };

  const handleStartQuiz = () => {
    setState({ ...state, stage: 'core', currentQuestionIndex: 0 });
  };

  const handleRestart = () => {
    setState(initialState);
  };

  const handleSaveResults = () => {
    if (state.calculatedType && state.calculatedWing && state.calculatedInstinctStack) {
      onComplete?.({
        type: state.calculatedType,
        wing: state.calculatedWing,
        instinctStack: state.calculatedInstinctStack,
        confidence: state.confidence
      });
    }
  };

  const getStageLabel = () => {
    switch (state.stage) {
      case 'core': return 'Core Type';
      case 'wing': return 'Wing';
      case 'instinct': return 'Instincts';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Enneagram Assessment</h1>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Progress Bar */}
        {state.stage !== 'intro' && state.stage !== 'results' && (
          <div className="max-w-3xl mx-auto px-4 pb-4">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{getStageLabel()}</span>
              <span className="text-sm text-gray-400 dark:text-gray-500">
                Question {state.currentQuestionIndex + 1} of {currentQuestions.length}
              </span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>
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
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Discover Your Enneagram Type
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                This assessment will help you identify your core Enneagram type, wing preference,
                and instinctual stack through a series of carefully crafted questions.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto mb-10">
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                    <span className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400">1</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Core Type</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">36 questions</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <span className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400">2</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Wing</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">3 questions</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-full bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center">
                    <span className="text-lg sm:text-xl font-bold text-pink-600 dark:text-pink-400">3</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Instincts</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">15 questions</p>
                </div>
              </div>

              <button
                onClick={handleStartQuiz}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                Begin Assessment
              </button>

              <p className="mt-6 text-sm text-gray-400 dark:text-gray-500">
                Takes approximately 10-15 minutes
              </p>
            </motion.div>
          )}

          {/* Question Stage */}
          {(state.stage === 'core' || state.stage === 'wing' || state.stage === 'instinct') && currentQuestion && (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="py-4 sm:py-8"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-8">
                <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                  {currentQuestion.text}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {[
                    { value: 1, label: 'Strongly Disagree' },
                    { value: 2, label: 'Disagree' },
                    { value: 3, label: 'Neutral' },
                    { value: 4, label: 'Agree' },
                    { value: 5, label: 'Strongly Agree' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full py-3 sm:py-4 px-4 sm:px-6 text-left border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all group"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-gray-300 dark:border-gray-500 group-hover:border-indigo-500 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 font-semibold text-sm sm:text-base">
                          {option.value}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white text-sm sm:text-base">
                          {option.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Stage */}
          {state.stage === 'results' && state.calculatedType && state.calculatedWing && state.calculatedInstinctStack && (
            <QuizResults
              type={state.calculatedType}
              wing={state.calculatedWing}
              instinctStack={state.calculatedInstinctStack}
              confidence={state.confidence}
              onSave={handleSaveResults}
              onRetake={handleRestart}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Helper function to get wings for a type
function getWingsForType(type: TypeNumber): [TypeNumber, TypeNumber] {
  const wings: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
    1: [9, 2],
    2: [1, 3],
    3: [2, 4],
    4: [3, 5],
    5: [4, 6],
    6: [5, 7],
    7: [6, 8],
    8: [7, 9],
    9: [8, 1]
  };
  return wings[type];
}
