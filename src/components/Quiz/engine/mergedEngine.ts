import type { TypeNumber, InstinctType, WingVariant, InstinctStack } from '../../../types';

// Import from adaptive quiz question pools
import { screeningQuestions } from '../questionPool/screeningQuestions';
import { differentiatorQuestions } from '../questionPool/differentiatorQuestions';
import { expandedWingQuestions } from '../questionPool/expandedWingQuestions';
import { coreTypeQuestions, instinctQuestions } from '../quizData';
import {
  updateTypeProbabilities,
  getLeadingType,
  calculateEntropy,
  type TypeProbabilities,
  type InstinctProbabilities,
} from './scoreCalculator';
import {
  synthesizeResults,
  type SynthesizedResults,
} from './resultsSynthesis';
import {
  checkConvergence,
  type ConvergenceConfig,
} from './convergenceChecker';
import {
  getForcedChoiceForPair,
  shouldTriggerForcedChoice,
  applyForcedChoiceScore,
  type ForcedChoicePair,
} from '../questionPool/forcedChoiceQuestions';

// Import from hybrid quiz
import {
  getAllScenarioQuestions,
  scoreScenarioRankings,
  type ScenarioQuestion,
} from '../questionPool/scenarioQuestions';
import {
  getAllInstinctParagraphSets,
  scoreInstinctParagraphs,
  type InstinctParagraphSet,
} from '../questionPool/instinctParagraphs';
import {
  getHealthQuestionsForType,
  calculateHealthLevel,
  type HealthQuestion,
  type HealthLevel,
} from '../questionPool/healthLevelQuestions';
import { getLevel as getLevelData } from '../../../data/development/levels';
import type { HealthLevel as HealthLevelNumber } from '../../../types';

/**
 * Merged Quiz Engine
 *
 * Combines the best of Adaptive (Likert) and Hybrid (Delphi) approaches:
 *
 * Stage 1: Quick Screening (scenarios) → Narrow to center/candidates
 * Stage 2: Type Refinement (adaptive Likert + forced-choice) → Primary type
 * Stage 3: Wing & Instinct (forced-choice + ipsative) → Full variant
 * Stage 4: Health Level (minimal Likert) → Current state
 */

export type MergedQuizStage =
  | 'intro'
  | 'screening'    // Stage 1: Scenario screening
  | 'refinement'   // Stage 2: Adaptive Likert + forced-choice
  | 'wing'         // Stage 3a: Wing determination
  | 'instinct'     // Stage 3b: Instinct paragraphs
  | 'health'       // Stage 4: Health level
  | 'results';

type ScreeningQuestion = typeof screeningQuestions[number];
type TypeQuestion = typeof coreTypeQuestions[number];
type DifferentiatorQuestion = typeof differentiatorQuestions[number];
type WingQuestion = typeof expandedWingQuestions[TypeNumber][number];
type InstinctQuestion = typeof instinctQuestions[number];

export type AnyMergedQuestion =
  | ScenarioQuestion
  | ScreeningQuestion
  | TypeQuestion
  | DifferentiatorQuestion
  | ForcedChoicePair
  | WingQuestion
  | InstinctParagraphSet
  | InstinctQuestion
  | HealthQuestion;

export interface MergedQuizState {
  stage: MergedQuizStage;

  // Stage 1: Screening
  scenarioQuestions: ScenarioQuestion[];
  scenarioIndex: number;
  scenarioAnswers: Record<string, Record<string, number>>;

  // Stage 2: Refinement (adaptive)
  typeProbabilities: TypeProbabilities;
  typeConvergence: ReturnType<typeof checkConvergence>;
  answeredQuestions: Set<string>;
  questionHistory: Array<{ question: AnyMergedQuestion; answer: number | Record<string, number> }>;

  // Stage 2b: Forced-choice disambiguation
  forcedChoiceActive: boolean;
  forcedChoiceQuestions: ForcedChoicePair[];
  forcedChoiceIndex: number;
  forcedChoiceAnswers: Record<string, TypeNumber>;
  confusedPairs: [TypeNumber, TypeNumber][];

  // Stage 3a: Wing
  wingAnswers: Record<string, number>;
  wingResult: {
    variant: WingVariant;
    balance: number;
    wingAScore: number;
    wingBScore: number;
  } | null;

  // Stage 3b: Instinct paragraphs
  instinctSets: InstinctParagraphSet[];
  instinctIndex: number;
  instinctAnswers: Array<{ setId: string; rankings: Record<InstinctType, number> }>;
  instinctProbabilities: InstinctProbabilities;

  // Stage 4: Health
  healthQuestions: HealthQuestion[];
  healthIndex: number;
  healthAnswers: Record<string, number>;

  // Current question
  currentQuestion: AnyMergedQuestion | null;

  // Results
  results: MergedQuizResults | null;
}

export interface MergedQuizResults {
  primaryType: TypeNumber;
  typeConfidence: number;
  topThreeTypes: Array<{
    type: TypeNumber;
    probability: number;
    score: number;
  }>;
  allTypeScores: Array<{
    type: TypeNumber;
    probability: number;
    percentage: number;
  }>;
  tritype: {
    gut: TypeNumber;
    heart: TypeNumber;
    head: TypeNumber;
    code: string;
  };
  wing: WingVariant;
  wingBalance: number;
  instinctStack: InstinctStack;
  instinctScores: Record<InstinctType, number>;
  healthLevel: HealthLevel;
  healthScore: number;
  healthInterpretation: string;
  // Integration level (for UI compatibility with AdaptiveQuizResults)
  integrationLevel: {
    level: HealthLevelNumber;
    healthLevel: HealthLevel;
    normalized: number;
    levelTitle: string;
    levelDescription: string;
  };
  questionsAnswered: number;
  convergenceReason: string;
  methodology: 'merged';
  // Inconclusive result detection
  isInconclusive: boolean;
  inconclusiveReason: string | null;
  // Synthesized insights
  synthesis: SynthesizedResults;
}

// Configuration
const MERGED_CONFIG: ConvergenceConfig = {
  minQuestions: 12,
  maxQuestions: 30,
  highConfidenceThreshold: 0.80,
  marginThreshold: 0.25,
  questionsForHighConfidence: 15,
  questionsForMargin: 18,
  entropyThreshold: 0.35,
};

const SCENARIOS_TO_USE = 3; // Use 3 scenarios for quick screening
const MIN_REFINEMENT_QUESTIONS = 8;
const MIN_WING_QUESTIONS = 4;

/**
 * Initialize merged quiz state
 */
export function createMergedInitialState(): MergedQuizState {
  const scenarios = getAllScenarioQuestions().slice(0, SCENARIOS_TO_USE);

  return {
    stage: 'intro',

    // Stage 1
    scenarioQuestions: scenarios,
    scenarioIndex: 0,
    scenarioAnswers: {},

    // Stage 2
    typeProbabilities: {
      probabilities: { 1: 1/9, 2: 1/9, 3: 1/9, 4: 1/9, 5: 1/9, 6: 1/9, 7: 1/9, 8: 1/9, 9: 1/9 },
      rawScores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
      questionCount: 0,
    },
    typeConvergence: { hasConverged: false, reason: null, confidence: 0, questionCount: 0, details: { topType: 1 as TypeNumber, topProbability: 1/9, marginOverSecond: 0, entropy: 1, viableCandidates: 9 } },
    answeredQuestions: new Set(),
    questionHistory: [],

    // Stage 2b
    forcedChoiceActive: false,
    forcedChoiceQuestions: [],
    forcedChoiceIndex: 0,
    forcedChoiceAnswers: {},
    confusedPairs: [],

    // Stage 3a
    wingAnswers: {},
    wingResult: null,

    // Stage 3b
    instinctSets: getAllInstinctParagraphSets(),
    instinctIndex: 0,
    instinctAnswers: [],
    instinctProbabilities: {
      probabilities: { sp: 1/3, so: 1/3, sx: 1/3 },
      rawScores: { sp: 0, so: 0, sx: 0 },
      questionCount: 0,
    },

    // Stage 4
    healthQuestions: [],
    healthIndex: 0,
    healthAnswers: {},

    currentQuestion: null,
    results: null,
  };
}

/**
 * Start the merged quiz
 */
export function startMergedQuiz(state: MergedQuizState): MergedQuizState {
  const firstScenario = state.scenarioQuestions[0];
  return {
    ...state,
    stage: 'screening',
    scenarioIndex: 0,
    currentQuestion: firstScenario || null,
  };
}

/**
 * Get current question info
 */
export function getCurrentMergedQuestion(state: MergedQuizState): {
  type: 'scenario' | 'likert' | 'forced-choice' | 'wing' | 'instinct-paragraph' | 'instinct-likert' | 'health';
  question: AnyMergedQuestion;
  stage: MergedQuizStage;
} | null {
  if (!state.currentQuestion) return null;

  let type: 'scenario' | 'likert' | 'forced-choice' | 'wing' | 'instinct-paragraph' | 'instinct-likert' | 'health';

  switch (state.stage) {
    case 'screening':
      type = 'scenario';
      break;
    case 'refinement':
      type = state.forcedChoiceActive ? 'forced-choice' : 'likert';
      break;
    case 'wing':
      type = 'wing';
      break;
    case 'instinct':
      type = 'instinct-paragraph';
      break;
    case 'health':
      type = 'health';
      break;
    default:
      return null;
  }

  return {
    type,
    question: state.currentQuestion,
    stage: state.stage,
  };
}

/**
 * Process scenario answer (Stage 1)
 */
export function processMergedScenarioAnswer(
  state: MergedQuizState,
  questionId: string,
  rankings: Record<string, number>
): MergedQuizState {
  const question = state.scenarioQuestions.find(q => q.id === questionId);
  if (!question) return state;

  // Score scenario
  const scores = scoreScenarioRankings(question, rankings);

  // Update type probabilities from scenario
  // Reduced weight from 2 to 0.8 to prevent scenarios from dominating
  // Scenarios identify CENTER, refinement questions differentiate within center
  let newTypeProbabilities = { ...state.typeProbabilities };
  for (const [type, score] of Object.entries(scores)) {
    newTypeProbabilities.rawScores[Number(type) as TypeNumber] += score * 0.8;
  }

  const newAnswers = { ...state.scenarioAnswers, [questionId]: rankings };
  const newHistory = [...state.questionHistory, { question, answer: rankings }];
  const newIndex = state.scenarioIndex + 1;

  // Check if screening complete
  if (newIndex >= state.scenarioQuestions.length) {
    // Recalculate probabilities with softmax
    newTypeProbabilities = recalculateProbabilities(newTypeProbabilities);

    // Move to refinement stage
    const nextQuestion = selectRefinementQuestion(newTypeProbabilities, new Set());

    return {
      ...state,
      scenarioAnswers: newAnswers,
      scenarioIndex: newIndex,
      typeProbabilities: newTypeProbabilities,
      questionHistory: newHistory,
      stage: 'refinement',
      currentQuestion: nextQuestion,
    };
  }

  // More scenarios
  return {
    ...state,
    scenarioAnswers: newAnswers,
    scenarioIndex: newIndex,
    typeProbabilities: newTypeProbabilities,
    questionHistory: newHistory,
    currentQuestion: state.scenarioQuestions[newIndex],
  };
}

/**
 * Process Likert answer (Stage 2 refinement)
 */
export function processMergedLikertAnswer(
  state: MergedQuizState,
  questionId: string,
  answer: number
): MergedQuizState {
  const question = state.currentQuestion;
  if (!question || !('typeScores' in question || 'direction' in question)) return state;

  // Get type scores
  let typeScores: Partial<Record<TypeNumber, number>> = {};
  if ('typeScores' in question) {
    typeScores = question.typeScores;
  } else if ('direction' in question) {
    const diff = question as { direction: { positive: TypeNumber; negative: TypeNumber } };
    typeScores = {
      [diff.direction.positive]: 2,
      [diff.direction.negative]: -2,
    };
  }

  // Update probabilities
  const newTypeProbabilities = updateTypeProbabilities(state.typeProbabilities, typeScores, answer);
  const newAnswered = new Set(state.answeredQuestions).add(questionId);
  const newHistory = [...state.questionHistory, { question, answer }];

  // Check convergence
  const convergence = checkConvergence(newTypeProbabilities, MERGED_CONFIG);
  const questionsAnswered = state.scenarioQuestions.length + newAnswered.size;

  // Check if we should trigger forced-choice
  if (questionsAnswered >= MIN_REFINEMENT_QUESTIONS) {
    const topTypes = getTopTypes(newTypeProbabilities, 3);
    const forcedChoiceCheck = shouldTriggerForcedChoice(topTypes);

    if (forcedChoiceCheck.trigger && forcedChoiceCheck.pairs.length > 0 && !state.forcedChoiceActive) {
      // Enter forced-choice mode
      const firstPair = forcedChoiceCheck.pairs[0];
      const fcQuestions = getForcedChoiceForPair(firstPair[0], firstPair[1]);

      if (fcQuestions.length > 0) {
        return {
          ...state,
          typeProbabilities: newTypeProbabilities,
          typeConvergence: convergence,
          answeredQuestions: newAnswered,
          questionHistory: newHistory,
          forcedChoiceActive: true,
          forcedChoiceQuestions: fcQuestions,
          forcedChoiceIndex: 0,
          confusedPairs: forcedChoiceCheck.pairs,
          currentQuestion: fcQuestions[0],
        };
      }
    }
  }

  // Check if we should move to wing stage
  if (convergence.hasConverged || questionsAnswered >= MERGED_CONFIG.maxQuestions) {
    return transitionToWingStage(state, newTypeProbabilities, convergence, newAnswered, newHistory);
  }

  // Continue refinement
  const nextQuestion = selectRefinementQuestion(newTypeProbabilities, newAnswered);

  return {
    ...state,
    typeProbabilities: newTypeProbabilities,
    typeConvergence: convergence,
    answeredQuestions: newAnswered,
    questionHistory: newHistory,
    currentQuestion: nextQuestion,
  };
}

/**
 * Process forced-choice answer (Stage 2b)
 */
export function processMergedForcedChoiceAnswer(
  state: MergedQuizState,
  questionId: string,
  chosenType: TypeNumber
): MergedQuizState {
  const question = state.currentQuestion as ForcedChoicePair;
  if (!question) return state;

  const unchosenType = question.optionA.type === chosenType ? question.optionB.type : question.optionA.type;

  // Apply score adjustment
  const adjustedScores = applyForcedChoiceScore(
    state.typeProbabilities.rawScores,
    chosenType,
    unchosenType
  );

  const newTypeProbabilities = recalculateProbabilities({
    ...state.typeProbabilities,
    rawScores: adjustedScores,
  });

  const newFCAnswers = { ...state.forcedChoiceAnswers, [questionId]: chosenType };
  const newHistory = [...state.questionHistory, { question, answer: chosenType as unknown as number }];
  const newIndex = state.forcedChoiceIndex + 1;

  // Check if more forced-choice questions in current pair
  if (newIndex < state.forcedChoiceQuestions.length) {
    return {
      ...state,
      typeProbabilities: newTypeProbabilities,
      forcedChoiceAnswers: newFCAnswers,
      forcedChoiceIndex: newIndex,
      questionHistory: newHistory,
      currentQuestion: state.forcedChoiceQuestions[newIndex],
    };
  }

  // Check for more confused pairs
  const currentPairIndex = state.confusedPairs.findIndex(
    p => (p[0] === question.optionA.type && p[1] === question.optionB.type) ||
         (p[1] === question.optionA.type && p[0] === question.optionB.type)
  );
  const nextPairIndex = currentPairIndex + 1;

  if (nextPairIndex < state.confusedPairs.length) {
    const nextPair = state.confusedPairs[nextPairIndex];
    const nextPairQuestions = getForcedChoiceForPair(nextPair[0], nextPair[1]);

    if (nextPairQuestions.length > 0) {
      return {
        ...state,
        typeProbabilities: newTypeProbabilities,
        forcedChoiceAnswers: newFCAnswers,
        forcedChoiceQuestions: nextPairQuestions,
        forcedChoiceIndex: 0,
        questionHistory: newHistory,
        currentQuestion: nextPairQuestions[0],
      };
    }
  }

  // Done with forced-choice, move to wing
  const convergence = checkConvergence(newTypeProbabilities, MERGED_CONFIG);
  return transitionToWingStage(
    state,
    newTypeProbabilities,
    convergence,
    state.answeredQuestions,
    newHistory
  );
}

/**
 * Process wing answer (Stage 3a)
 */
export function processMergedWingAnswer(
  state: MergedQuizState,
  questionId: string,
  answer: number
): MergedQuizState {
  const determinedType = getLeadingType(state.typeProbabilities).type;
  const wingQuestions = expandedWingQuestions[determinedType] || [];

  const newWingAnswers = { ...state.wingAnswers, [questionId]: answer };
  const newHistory = [...state.questionHistory, { question: state.currentQuestion!, answer }];
  const answeredWingCount = wingQuestions.filter(q => newWingAnswers[q.id] !== undefined).length;

  // Check if wing complete
  if (answeredWingCount >= MIN_WING_QUESTIONS) {
    const wingScores = calculateWingScores(determinedType, newWingAnswers);
    const wing = wingScores.balance >= 0
      ? `${determinedType}w${wingScores.wingAType}` as WingVariant
      : `${determinedType}w${wingScores.wingBType}` as WingVariant;

    // Move to instinct stage
    const firstInstinctSet = state.instinctSets[0];

    return {
      ...state,
      wingAnswers: newWingAnswers,
      wingResult: {
        variant: wing,
        balance: wingScores.balance,
        wingAScore: wingScores.wingA,
        wingBScore: wingScores.wingB,
      },
      questionHistory: newHistory,
      stage: 'instinct',
      instinctIndex: 0,
      currentQuestion: firstInstinctSet,
    };
  }

  // More wing questions
  const nextWingQuestion = wingQuestions.find(q => newWingAnswers[q.id] === undefined);

  return {
    ...state,
    wingAnswers: newWingAnswers,
    questionHistory: newHistory,
    currentQuestion: nextWingQuestion || null,
  };
}

/**
 * Process instinct paragraph answer (Stage 3b)
 */
export function processMergedInstinctAnswer(
  state: MergedQuizState,
  setId: string,
  rankings: Record<InstinctType, number>
): MergedQuizState {
  const newAnswers = [...state.instinctAnswers, { setId, rankings }];
  const newHistory = [...state.questionHistory, { question: state.currentQuestion!, answer: rankings }];
  const newIndex = state.instinctIndex + 1;

  // Check if instinct stage complete
  if (newIndex >= state.instinctSets.length) {
    // Calculate instinct scores
    const instinctResult = scoreInstinctParagraphs(newAnswers);

    // Move to health stage
    const determinedType = getLeadingType(state.typeProbabilities).type;
    const healthQuestions = getHealthQuestionsForType(determinedType);

    return {
      ...state,
      instinctAnswers: newAnswers,
      instinctIndex: newIndex,
      instinctProbabilities: {
        probabilities: {
          sp: instinctResult.scores.sp / 15,
          so: instinctResult.scores.so / 15,
          sx: instinctResult.scores.sx / 15,
        },
        rawScores: instinctResult.scores,
        questionCount: newAnswers.length,
      },
      questionHistory: newHistory,
      stage: 'health',
      healthQuestions,
      healthIndex: 0,
      currentQuestion: healthQuestions[0] || null,
    };
  }

  return {
    ...state,
    instinctAnswers: newAnswers,
    instinctIndex: newIndex,
    questionHistory: newHistory,
    currentQuestion: state.instinctSets[newIndex],
  };
}

/**
 * Process health answer (Stage 4)
 */
export function processMergedHealthAnswer(
  state: MergedQuizState,
  questionId: string,
  answer: number
): MergedQuizState {
  const newAnswers = { ...state.healthAnswers, [questionId]: answer };
  const newHistory = [...state.questionHistory, { question: state.currentQuestion!, answer }];
  const newIndex = state.healthIndex + 1;

  // Check if health stage complete
  if (newIndex >= state.healthQuestions.length) {
    // Calculate final results
    const results = calculateMergedResults(state, newAnswers);

    return {
      ...state,
      healthAnswers: newAnswers,
      healthIndex: newIndex,
      questionHistory: newHistory,
      stage: 'results',
      results,
      currentQuestion: null,
    };
  }

  return {
    ...state,
    healthAnswers: newAnswers,
    healthIndex: newIndex,
    questionHistory: newHistory,
    currentQuestion: state.healthQuestions[newIndex],
  };
}

/**
 * Generic answer processor that routes to correct handler
 */
export function processMergedAnswer(
  state: MergedQuizState,
  answer: number | Record<string, number> | TypeNumber
): MergedQuizState {
  if (!state.currentQuestion) return state;

  const questionId = 'id' in state.currentQuestion ? state.currentQuestion.id : '';

  switch (state.stage) {
    case 'screening':
      return processMergedScenarioAnswer(state, questionId, answer as Record<string, number>);

    case 'refinement':
      if (state.forcedChoiceActive) {
        return processMergedForcedChoiceAnswer(state, questionId, answer as TypeNumber);
      }
      return processMergedLikertAnswer(state, questionId, answer as number);

    case 'wing':
      return processMergedWingAnswer(state, questionId, answer as number);

    case 'instinct':
      return processMergedInstinctAnswer(state, questionId, answer as Record<InstinctType, number>);

    case 'health':
      return processMergedHealthAnswer(state, questionId, answer as number);

    default:
      return state;
  }
}

// ==========================================
// Helper Functions
// ==========================================

function recalculateProbabilities(probs: TypeProbabilities): TypeProbabilities {
  const scores = probs.rawScores;
  const maxScore = Math.max(...Object.values(scores));
  const expScores: Record<TypeNumber, number> = {} as Record<TypeNumber, number>;
  let expSum = 0;

  for (let i = 1; i <= 9; i++) {
    const typeNum = i as TypeNumber;
    expScores[typeNum] = Math.exp((scores[typeNum] - maxScore) / 2); // Temperature = 2
    expSum += expScores[typeNum];
  }

  const newProbs: Record<TypeNumber, number> = {} as Record<TypeNumber, number>;
  for (let i = 1; i <= 9; i++) {
    const typeNum = i as TypeNumber;
    newProbs[typeNum] = expScores[typeNum] / expSum;
  }

  return {
    probabilities: newProbs,
    rawScores: scores,
    questionCount: probs.questionCount,
  };
}

function getTopTypes(probs: TypeProbabilities, n: number): Array<{ type: TypeNumber; probability: number }> {
  return Object.entries(probs.probabilities)
    .map(([type, prob]) => ({ type: Number(type) as TypeNumber, probability: prob }))
    .sort((a, b) => b.probability - a.probability)
    .slice(0, n);
}

function selectRefinementQuestion(
  probs: TypeProbabilities,
  answered: Set<string>
): AnyMergedQuestion | null {
  const topTypes = getTopTypes(probs, 5).map(t => t.type); // Look at top 5, not just 3
  const topConfidence = Math.max(...Object.values(probs.probabilities));
  const answeredCount = answered.size;

  // PHASE 1 (early): Use core motivation screening questions first
  // These questions have strong positive scores for specific types
  // This helps the true type build up a score before narrowing
  if (answeredCount < 6) {
    // Prioritize core motivation questions that directly target types
    const coreMotivationQuestions = screeningQuestions.filter(q => q.category === 'core_motivation');
    for (const q of coreMotivationQuestions) {
      if (!answered.has(q.id)) {
        return q;
      }
    }
  }

  // PHASE 2 (middle): Use screening questions that help narrow centers/groups
  // These have both positive and negative scores for multiple types
  if (answeredCount < 12 || topConfidence < 0.25) {
    for (const q of screeningQuestions) {
      if (!answered.has(q.id)) {
        const qTypes = Object.keys(q.typeScores).map(Number) as TypeNumber[];
        // Select if it involves any of the top 5 types (broader search)
        if (qTypes.some(t => topTypes.includes(t))) {
          return q;
        }
      }
    }
  }

  // PHASE 3: Use differentiator questions when confused type pairs are detected
  // Key insight: Head types (5,6,7) often get confused because scenarios favor Type 5
  // Differentiators help correct this bias by asking targeted questions
  const CONFUSED_TYPE_PAIRS: [TypeNumber, TypeNumber][] = [
    [5, 6], [5, 7], [1, 6], [9, 6], [4, 5], [3, 7], [3, 8], [2, 9], [7, 6], [8, 6]
  ];

  // Check if any confused pair has both types in top 4 candidates
  const topFour = topTypes.slice(0, 4);
  for (const [typeA, typeB] of CONFUSED_TYPE_PAIRS) {
    if (topFour.includes(typeA) && topFour.includes(typeB)) {
      // Found a confused pair - use differentiator questions for this pair
      for (const q of differentiatorQuestions) {
        if (!answered.has(q.id)) {
          if ((q.direction.positive === typeA && q.direction.negative === typeB) ||
              (q.direction.positive === typeB && q.direction.negative === typeA)) {
            return q;
          }
        }
      }
    }
  }

  // FALLBACK: Any remaining screening questions
  for (const q of screeningQuestions) {
    if (!answered.has(q.id)) {
      return q;
    }
  }

  // Then type questions (these are the broad Likert questions)
  for (const q of coreTypeQuestions) {
    if (!answered.has(q.id)) {
      return q;
    }
  }

  // Finally, any remaining differentiator questions
  for (const q of differentiatorQuestions) {
    if (!answered.has(q.id)) {
      return q;
    }
  }

  return null;
}

function transitionToWingStage(
  state: MergedQuizState,
  typeProbabilities: TypeProbabilities,
  convergence: ReturnType<typeof checkConvergence>,
  answeredQuestions: Set<string>,
  history: MergedQuizState['questionHistory']
): MergedQuizState {
  const determinedType = getLeadingType(typeProbabilities).type;
  const wingQuestions = expandedWingQuestions[determinedType] || [];
  const firstWingQuestion = wingQuestions[0];

  return {
    ...state,
    typeProbabilities,
    typeConvergence: convergence,
    answeredQuestions,
    questionHistory: history,
    forcedChoiceActive: false,
    stage: 'wing',
    currentQuestion: firstWingQuestion || null,
  };
}

function calculateWingScores(
  type: TypeNumber,
  answers: Record<string, number>
): { wingA: number; wingB: number; wingAType: TypeNumber; wingBType: TypeNumber; balance: number } {
  const wingPairs: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
    1: [9, 2], 2: [1, 3], 3: [2, 4], 4: [3, 5], 5: [4, 6],
    6: [5, 7], 7: [6, 8], 8: [7, 9], 9: [8, 1],
  };

  const [wingAType, wingBType] = wingPairs[type];
  let wingA = 0;
  let wingB = 0;

  const wingQuestions = expandedWingQuestions[type] || [];
  for (const q of wingQuestions) {
    const answer = answers[q.id];
    if (answer !== undefined) {
      // Assume questions are designed so 5 = wingA, 1 = wingB
      wingA += answer;
      wingB += (6 - answer);
    }
  }

  return {
    wingA,
    wingB,
    wingAType,
    wingBType,
    balance: wingA - wingB,
  };
}

function calculateMergedResults(
  state: MergedQuizState,
  healthAnswers: Record<string, number>
): MergedQuizResults {
  const probs = state.typeProbabilities;
  const leading = getLeadingType(probs);

  // Get all type scores sorted
  const allTypeScores = Object.entries(probs.probabilities)
    .map(([type, probability]) => ({
      type: Number(type) as TypeNumber,
      probability,
      percentage: Math.round(probability * 100),
    }))
    .sort((a, b) => b.probability - a.probability);

  // Top three
  const topThree = allTypeScores.slice(0, 3).map(t => ({
    type: t.type,
    probability: t.probability,
    score: probs.rawScores[t.type],
  }));

  // Calculate tritype
  const GUT_TYPES = [8, 9, 1] as TypeNumber[];
  const HEART_TYPES = [2, 3, 4] as TypeNumber[];
  const HEAD_TYPES = [5, 6, 7] as TypeNumber[];

  const gutType = allTypeScores.find(t => GUT_TYPES.includes(t.type))!.type;
  const heartType = allTypeScores.find(t => HEART_TYPES.includes(t.type))!.type;
  const headType = allTypeScores.find(t => HEAD_TYPES.includes(t.type))!.type;

  let tritypeCode: string;
  if (GUT_TYPES.includes(leading.type)) {
    tritypeCode = `${gutType}${heartType}${headType}`;
  } else if (HEART_TYPES.includes(leading.type)) {
    tritypeCode = `${heartType}${gutType}${headType}`;
  } else {
    tritypeCode = `${headType}${gutType}${heartType}`;
  }

  // Wing
  const wing = state.wingResult?.variant || `${leading.type}w${leading.type === 9 ? 1 : (leading.type % 9) + 1}` as WingVariant;
  const wingBalance = state.wingResult?.balance || 0;

  // Instinct stack
  const instinctResult = scoreInstinctParagraphs(state.instinctAnswers);
  const instinctStack = `${instinctResult.stack[0]}/${instinctResult.stack[1]}/${instinctResult.stack[2]}` as InstinctStack;

  // Health
  const healthResult = calculateHealthLevel(leading.type, healthAnswers);

  // Count questions
  const questionsAnswered =
    state.scenarioQuestions.length +
    state.answeredQuestions.size +
    Object.keys(state.forcedChoiceAnswers).length +
    Object.keys(state.wingAnswers).length +
    state.instinctAnswers.length +
    Object.keys(healthAnswers).length;

  // Detect inconclusive results
  // Criteria:
  // 1. Top probability < 25% (barely better than chance for 9 types = 11%)
  // 2. Margin over second type < 5%
  // 3. Normalized entropy > 0.75 (too spread out)
  const entropy = calculateEntropy(probs);
  const marginOverSecond = leading.marginOverSecond;

  let isInconclusive = false;
  let inconclusiveReason: string | null = null;

  if (leading.probability < 0.25) {
    isInconclusive = true;
    inconclusiveReason = 'No type emerged as a clear match. Your answers suggest you may identify with multiple types.';
  } else if (marginOverSecond < 0.05) {
    isInconclusive = true;
    inconclusiveReason = `Types ${leading.type} and ${topThree[1].type} are nearly tied. Consider exploring both types to see which resonates more.`;
  } else if (entropy > 0.75) {
    isInconclusive = true;
    inconclusiveReason = 'Your answers were spread across many types. This could indicate you answered neutrally or identify with multiple perspectives.';
  }

  // Growth arrow mapping (direction of integration)
  const GROWTH_ARROWS: Record<TypeNumber, TypeNumber> = {
    1: 7, 2: 4, 3: 6, 4: 1, 5: 8, 6: 9, 7: 5, 8: 2, 9: 3,
  };

  // Collect all Likert answers for answer pattern analysis
  const allLikertAnswers: Record<string, number> = {};
  for (const item of state.questionHistory) {
    if (typeof item.answer === 'number' && 'id' in item.question) {
      allLikertAnswers[item.question.id] = item.answer;
    }
  }
  // Add wing and health answers
  Object.assign(allLikertAnswers, state.wingAnswers, healthAnswers);

  // Generate synthesized insights
  const synthesis = synthesizeResults(
    leading.type,
    instinctResult.stack[0],
    allTypeScores,
    tritypeCode,
    healthResult.level,
    GROWTH_ARROWS[leading.type],
    allLikertAnswers
  );

  // Map health state to level number (1-9)
  // healthy = levels 1-3, average = levels 4-6, unhealthy = levels 7-9
  // Use score to fine-tune within the range
  let healthLevelNumber: HealthLevelNumber;
  if (healthResult.level === 'healthy') {
    // Score 33-100 maps to levels 1-3
    healthLevelNumber = healthResult.score >= 66 ? 1 : healthResult.score >= 33 ? 2 : 3;
  } else if (healthResult.level === 'average') {
    // Score -33 to 33 maps to levels 4-6
    healthLevelNumber = healthResult.score >= 0 ? 4 : healthResult.score >= -33 ? 5 : 6;
  } else {
    // Score -100 to -33 maps to levels 7-9
    healthLevelNumber = healthResult.score >= -66 ? 7 : healthResult.score >= -90 ? 8 : 9;
  }

  // Get level data for the type
  const levelData = getLevelData(leading.type, healthLevelNumber);

  // Calculate normalized value (-1 to 1)
  const normalized = healthResult.score / 100;

  // Build integration level object
  const integrationLevel = {
    level: healthLevelNumber,
    healthLevel: healthResult.level,
    normalized,
    levelTitle: levelData?.title || `Level ${healthLevelNumber}`,
    levelDescription: levelData?.description || healthResult.interpretation,
  };

  return {
    primaryType: leading.type,
    typeConfidence: Math.round(leading.probability * 100),
    topThreeTypes: topThree,
    allTypeScores,
    tritype: { gut: gutType, heart: heartType, head: headType, code: tritypeCode },
    wing,
    wingBalance,
    instinctStack,
    instinctScores: instinctResult.scores,
    healthLevel: healthResult.level,
    healthScore: healthResult.score,
    healthInterpretation: healthResult.interpretation,
    integrationLevel,
    questionsAnswered,
    convergenceReason: state.typeConvergence.reason || 'completed',
    methodology: 'merged',
    isInconclusive,
    inconclusiveReason,
    synthesis,
  };
}

/**
 * Get progress info
 */
export function getMergedProgress(state: MergedQuizState): {
  stage: MergedQuizStage;
  stageNumber: number;
  totalStages: number;
  stageProgress: number;
  overallProgress: number;
  stageName: string;
} {
  const stageInfo: Record<MergedQuizStage, { number: number; name: string; weight: number }> = {
    intro: { number: 0, name: 'Introduction', weight: 0 },
    screening: { number: 1, name: 'Quick Screening', weight: 0.15 },
    refinement: { number: 2, name: 'Type Refinement', weight: 0.40 },
    wing: { number: 3, name: 'Wing Style', weight: 0.15 },
    instinct: { number: 4, name: 'Instinct Priorities', weight: 0.20 },
    health: { number: 5, name: 'Current State', weight: 0.10 },
    results: { number: 6, name: 'Your Results', weight: 0 },
  };

  const info = stageInfo[state.stage];
  let stageProgress = 0;

  switch (state.stage) {
    case 'screening':
      stageProgress = state.scenarioIndex / state.scenarioQuestions.length;
      break;
    case 'refinement':
      stageProgress = Math.min(1, state.answeredQuestions.size / MIN_REFINEMENT_QUESTIONS);
      break;
    case 'wing':
      stageProgress = Object.keys(state.wingAnswers).length / MIN_WING_QUESTIONS;
      break;
    case 'instinct':
      stageProgress = state.instinctIndex / state.instinctSets.length;
      break;
    case 'health':
      stageProgress = state.healthQuestions.length > 0
        ? state.healthIndex / state.healthQuestions.length
        : 0;
      break;
    case 'results':
      stageProgress = 1;
      break;
  }

  // Calculate overall progress
  let overallProgress = 0;
  const stages: MergedQuizStage[] = ['screening', 'refinement', 'wing', 'instinct', 'health'];
  for (const s of stages) {
    const sInfo = stageInfo[s];
    if (s === state.stage) {
      overallProgress += sInfo.weight * stageProgress;
      break;
    } else {
      overallProgress += sInfo.weight;
    }
  }

  return {
    stage: state.stage,
    stageNumber: info.number,
    totalStages: 5,
    stageProgress,
    overallProgress,
    stageName: info.name,
  };
}
