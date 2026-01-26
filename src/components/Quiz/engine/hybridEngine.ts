import type { TypeNumber, InstinctType, WingVariant, InstinctStack } from '../../../types';
import {
  getAllScenarioQuestions,
  scoreScenarioRankings,
  type ScenarioQuestion,
} from '../questionPool/scenarioQuestions';
import {
  forcedChoiceQuestions,
  scoreForcedChoice,
  getForcedChoiceForType,
  type ForcedChoicePair,
} from '../questionPool/forcedChoicePairs';
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

/**
 * Hybrid Quiz Engine
 *
 * Implements the Delphi-recommended 4-stage structure:
 * 1. Scenarios + ranking → Center identification
 * 2. Forced-choice pairs → Confusable type differentiation
 * 3. Ipsative paragraphs → Instinct stack
 * 4. Minimal Likert → Health level
 */

export type HybridQuizStage =
  | 'intro'
  | 'scenarios'      // Stage 1
  | 'forced-choice'  // Stage 2
  | 'instincts'      // Stage 3
  | 'health'         // Stage 4
  | 'results';

export interface HybridQuizState {
  stage: HybridQuizStage;

  // Stage 1: Scenarios
  scenarioQuestions: ScenarioQuestion[];
  scenarioIndex: number;
  scenarioAnswers: Record<string, Record<string, number>>; // questionId -> responseId -> rank

  // Stage 2: Forced-choice
  forcedChoiceQuestions: ForcedChoicePair[];
  forcedChoiceIndex: number;
  forcedChoiceAnswers: Record<string, 'A' | 'B'>;

  // Stage 3: Instinct paragraphs
  instinctSets: InstinctParagraphSet[];
  instinctIndex: number;
  instinctAnswers: Array<{
    setId: string;
    rankings: Record<InstinctType, number>;
  }>;

  // Stage 4: Health level
  healthQuestions: HealthQuestion[];
  healthIndex: number;
  healthAnswers: Record<string, number>;

  // Running type scores (updated after each stage)
  typeScores: Record<TypeNumber, number>;

  // Final results
  results: HybridQuizResults | null;
}

export interface HybridQuizResults {
  primaryType: TypeNumber;
  confidence: number;
  topThreeTypes: Array<{
    type: TypeNumber;
    score: number;
    percentage: number;
  }>;
  allTypeScores: Array<{
    type: TypeNumber;
    score: number;
    percentage: number;
  }>;
  wing: WingVariant;
  instinctStack: InstinctStack;
  instinctScores: Record<InstinctType, number>;
  healthLevel: HealthLevel;
  healthScore: number;
  healthInterpretation: string;
  questionsAnswered: number;
  methodology: 'hybrid-delphi'; // Tag to identify which quiz produced this
}

/**
 * Initialize hybrid quiz state
 */
export function createHybridInitialState(): HybridQuizState {
  const typeScores: Record<TypeNumber, number> = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
  };

  return {
    stage: 'intro',
    scenarioQuestions: getAllScenarioQuestions(),
    scenarioIndex: 0,
    scenarioAnswers: {},
    forcedChoiceQuestions: [], // Will be populated after Stage 1
    forcedChoiceIndex: 0,
    forcedChoiceAnswers: {},
    instinctSets: getAllInstinctParagraphSets(),
    instinctIndex: 0,
    instinctAnswers: [],
    healthQuestions: [], // Will be populated after Stage 2
    healthIndex: 0,
    healthAnswers: {},
    typeScores,
    results: null,
  };
}

/**
 * Start the hybrid quiz
 */
export function startHybridQuiz(state: HybridQuizState): HybridQuizState {
  return {
    ...state,
    stage: 'scenarios',
    scenarioIndex: 0,
  };
}

/**
 * Get current question based on stage
 */
export function getCurrentHybridQuestion(state: HybridQuizState): {
  type: 'scenario' | 'forced-choice' | 'instinct' | 'health';
  question: ScenarioQuestion | ForcedChoicePair | InstinctParagraphSet | HealthQuestion;
  index: number;
  total: number;
} | null {
  switch (state.stage) {
    case 'scenarios':
      if (state.scenarioIndex >= state.scenarioQuestions.length) return null;
      return {
        type: 'scenario',
        question: state.scenarioQuestions[state.scenarioIndex],
        index: state.scenarioIndex,
        total: state.scenarioQuestions.length,
      };

    case 'forced-choice':
      if (state.forcedChoiceIndex >= state.forcedChoiceQuestions.length) return null;
      return {
        type: 'forced-choice',
        question: state.forcedChoiceQuestions[state.forcedChoiceIndex],
        index: state.forcedChoiceIndex,
        total: state.forcedChoiceQuestions.length,
      };

    case 'instincts':
      if (state.instinctIndex >= state.instinctSets.length) return null;
      return {
        type: 'instinct',
        question: state.instinctSets[state.instinctIndex],
        index: state.instinctIndex,
        total: state.instinctSets.length,
      };

    case 'health':
      if (state.healthIndex >= state.healthQuestions.length) return null;
      return {
        type: 'health',
        question: state.healthQuestions[state.healthIndex],
        index: state.healthIndex,
        total: state.healthQuestions.length,
      };

    default:
      return null;
  }
}

/**
 * Process scenario answer (Stage 1)
 */
export function processScenarioAnswer(
  state: HybridQuizState,
  questionId: string,
  rankings: Record<string, number> // responseId -> rank (1, 2, 3)
): HybridQuizState {
  const question = state.scenarioQuestions.find(q => q.id === questionId);
  if (!question) return state;

  // Score this scenario
  const scores = scoreScenarioRankings(question, rankings);

  // Update type scores
  const newTypeScores = { ...state.typeScores };
  for (const [type, score] of Object.entries(scores)) {
    newTypeScores[Number(type) as TypeNumber] += score;
  }

  const newAnswers = {
    ...state.scenarioAnswers,
    [questionId]: rankings,
  };

  const newIndex = state.scenarioIndex + 1;

  // Check if Stage 1 complete
  if (newIndex >= state.scenarioQuestions.length) {
    // Transition to Stage 2: Select forced-choice questions based on top types
    const topTypes = getTopTypesFromScores(newTypeScores, 4);
    const selectedForcedChoice = selectForcedChoiceQuestions(topTypes);

    return {
      ...state,
      scenarioAnswers: newAnswers,
      scenarioIndex: newIndex,
      typeScores: newTypeScores,
      stage: 'forced-choice',
      forcedChoiceQuestions: selectedForcedChoice,
      forcedChoiceIndex: 0,
    };
  }

  return {
    ...state,
    scenarioAnswers: newAnswers,
    scenarioIndex: newIndex,
    typeScores: newTypeScores,
  };
}

/**
 * Process forced-choice answer (Stage 2)
 */
export function processForcedChoiceAnswer(
  state: HybridQuizState,
  questionId: string,
  choice: 'A' | 'B'
): HybridQuizState {
  const question = state.forcedChoiceQuestions.find(q => q.id === questionId);
  if (!question) return state;

  // Score the choice
  const scores = scoreForcedChoice(question, choice);

  // Update type scores
  const newTypeScores = { ...state.typeScores };
  newTypeScores[question.typeA] += scores.typeA;
  newTypeScores[question.typeB] += scores.typeB;

  const newAnswers = {
    ...state.forcedChoiceAnswers,
    [questionId]: choice,
  };

  const newIndex = state.forcedChoiceIndex + 1;

  // Check if Stage 2 complete
  if (newIndex >= state.forcedChoiceQuestions.length) {
    // Transition to Stage 3: Instincts
    return {
      ...state,
      forcedChoiceAnswers: newAnswers,
      forcedChoiceIndex: newIndex,
      typeScores: newTypeScores,
      stage: 'instincts',
      instinctIndex: 0,
    };
  }

  return {
    ...state,
    forcedChoiceAnswers: newAnswers,
    forcedChoiceIndex: newIndex,
    typeScores: newTypeScores,
  };
}

/**
 * Process instinct paragraph ranking (Stage 3)
 */
export function processInstinctAnswer(
  state: HybridQuizState,
  setId: string,
  rankings: Record<InstinctType, number>
): HybridQuizState {
  const newAnswers = [
    ...state.instinctAnswers,
    { setId, rankings },
  ];

  const newIndex = state.instinctIndex + 1;

  // Check if Stage 3 complete
  if (newIndex >= state.instinctSets.length) {
    // Transition to Stage 4: Health level
    const primaryType = getTopTypesFromScores(state.typeScores, 1)[0];
    const healthQuestions = getHealthQuestionsForType(primaryType);

    return {
      ...state,
      instinctAnswers: newAnswers,
      instinctIndex: newIndex,
      stage: 'health',
      healthQuestions,
      healthIndex: 0,
    };
  }

  return {
    ...state,
    instinctAnswers: newAnswers,
    instinctIndex: newIndex,
  };
}

/**
 * Process health level answer (Stage 4)
 */
export function processHealthAnswer(
  state: HybridQuizState,
  questionId: string,
  answer: number // 1-5 Likert
): HybridQuizState {
  const newAnswers = {
    ...state.healthAnswers,
    [questionId]: answer,
  };

  const newIndex = state.healthIndex + 1;

  // Check if Stage 4 complete
  if (newIndex >= state.healthQuestions.length) {
    // Calculate final results
    const results = calculateHybridResults(state, newAnswers);

    return {
      ...state,
      healthAnswers: newAnswers,
      healthIndex: newIndex,
      stage: 'results',
      results,
    };
  }

  return {
    ...state,
    healthAnswers: newAnswers,
    healthIndex: newIndex,
  };
}

/**
 * Calculate final hybrid quiz results
 */
function calculateHybridResults(
  state: HybridQuizState,
  healthAnswers: Record<string, number>
): HybridQuizResults {
  // Get primary type
  const sortedTypes = Object.entries(state.typeScores)
    .map(([type, score]) => ({ type: Number(type) as TypeNumber, score }))
    .sort((a, b) => b.score - a.score);

  const primaryType = sortedTypes[0].type;

  // Calculate percentages
  const minScore = Math.min(...sortedTypes.map(t => t.score));
  const shiftedScores = sortedTypes.map(t => ({
    ...t,
    score: t.score - minScore + 1,
  }));
  const totalScore = shiftedScores.reduce((sum, t) => sum + t.score, 0);

  const allTypeScores = shiftedScores.map(t => ({
    type: t.type,
    score: t.score,
    percentage: Math.round((t.score / totalScore) * 100),
  }));

  // Ensure percentages sum to 100
  const sumPct = allTypeScores.reduce((s, t) => s + t.percentage, 0);
  if (sumPct !== 100) {
    allTypeScores[0].percentage += (100 - sumPct);
  }

  const topThree = allTypeScores.slice(0, 3);
  const confidence = topThree[0].percentage;

  // Determine wing (adjacent type with higher score)
  const wingOptions = getWingOptions(primaryType);
  const wingScores = wingOptions.map(w => ({
    wing: w,
    score: state.typeScores[w],
  }));
  const dominantWing = wingScores.sort((a, b) => b.score - a.score)[0].wing;
  const wing = `${primaryType}w${dominantWing}` as WingVariant;

  // Calculate instinct stack
  const instinctResult = scoreInstinctParagraphs(state.instinctAnswers);
  const instinctStack = `${instinctResult.stack[0]}/${instinctResult.stack[1]}/${instinctResult.stack[2]}` as InstinctStack;

  // Calculate health level
  const healthResult = calculateHealthLevel(primaryType, healthAnswers);

  // Count total questions
  const questionsAnswered =
    Object.keys(state.scenarioAnswers).length +
    Object.keys(state.forcedChoiceAnswers).length +
    state.instinctAnswers.length +
    Object.keys(healthAnswers).length;

  return {
    primaryType,
    confidence,
    topThreeTypes: topThree,
    allTypeScores,
    wing,
    instinctStack,
    instinctScores: instinctResult.scores,
    healthLevel: healthResult.level,
    healthScore: healthResult.score,
    healthInterpretation: healthResult.interpretation,
    questionsAnswered,
    methodology: 'hybrid-delphi',
  };
}

/**
 * Helper: Get top N types from scores
 */
function getTopTypesFromScores(
  scores: Record<TypeNumber, number>,
  n: number
): TypeNumber[] {
  return Object.entries(scores)
    .map(([type, score]) => ({ type: Number(type) as TypeNumber, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map(t => t.type);
}

/**
 * Helper: Select forced-choice questions for top candidate types
 */
function selectForcedChoiceQuestions(topTypes: TypeNumber[]): ForcedChoicePair[] {
  const selected: ForcedChoicePair[] = [];
  const usedIds = new Set<string>();

  // Get questions that differentiate between top types
  for (let i = 0; i < topTypes.length; i++) {
    for (let j = i + 1; j < topTypes.length; j++) {
      const questions = forcedChoiceQuestions.filter(
        q =>
          !usedIds.has(q.id) &&
          ((q.typeA === topTypes[i] && q.typeB === topTypes[j]) ||
            (q.typeA === topTypes[j] && q.typeB === topTypes[i]))
      );
      for (const q of questions.slice(0, 2)) {
        // Max 2 per pair
        selected.push(q);
        usedIds.add(q.id);
      }
    }
  }

  // Also add a few questions for each top type against non-top types
  for (const type of topTypes.slice(0, 2)) {
    const typeQuestions = getForcedChoiceForType(type).filter(
      q => !usedIds.has(q.id)
    );
    for (const q of typeQuestions.slice(0, 2)) {
      selected.push(q);
      usedIds.add(q.id);
    }
  }

  return selected;
}

/**
 * Helper: Get wing options for a type
 */
function getWingOptions(type: TypeNumber): [TypeNumber, TypeNumber] {
  const wingPairs: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
    1: [9, 2],
    2: [1, 3],
    3: [2, 4],
    4: [3, 5],
    5: [4, 6],
    6: [5, 7],
    7: [6, 8],
    8: [7, 9],
    9: [8, 1],
  };
  return wingPairs[type];
}

/**
 * Get progress info for UI
 */
export function getHybridProgress(state: HybridQuizState): {
  stage: HybridQuizStage;
  stageNumber: number;
  totalStages: number;
  stageProgress: number;
  overallProgress: number;
  stageName: string;
} {
  const stageInfo: Record<
    HybridQuizStage,
    { number: number; name: string; weight: number }
  > = {
    intro: { number: 0, name: 'Introduction', weight: 0 },
    scenarios: { number: 1, name: 'Life Scenarios', weight: 0.35 },
    'forced-choice': { number: 2, name: 'Core Motivations', weight: 0.30 },
    instincts: { number: 3, name: 'Instinct Priorities', weight: 0.25 },
    health: { number: 4, name: 'Current State', weight: 0.10 },
    results: { number: 5, name: 'Your Results', weight: 0 },
  };

  const info = stageInfo[state.stage];

  let stageProgress = 0;
  switch (state.stage) {
    case 'scenarios':
      stageProgress = state.scenarioIndex / state.scenarioQuestions.length;
      break;
    case 'forced-choice':
      stageProgress =
        state.forcedChoiceQuestions.length > 0
          ? state.forcedChoiceIndex / state.forcedChoiceQuestions.length
          : 0;
      break;
    case 'instincts':
      stageProgress = state.instinctIndex / state.instinctSets.length;
      break;
    case 'health':
      stageProgress =
        state.healthQuestions.length > 0
          ? state.healthIndex / state.healthQuestions.length
          : 0;
      break;
    case 'results':
      stageProgress = 1;
      break;
  }

  // Calculate overall progress
  let overallProgress = 0;
  const stages: HybridQuizStage[] = [
    'scenarios',
    'forced-choice',
    'instincts',
    'health',
  ];
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
    totalStages: 4,
    stageProgress,
    overallProgress,
    stageName: info.name,
  };
}
