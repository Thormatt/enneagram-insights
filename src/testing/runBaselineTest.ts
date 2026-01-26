/**
 * Baseline Test Runner
 * Runs the agent swarm through the current quiz to establish baseline metrics
 */

import {
  typeAgents as _typeAgents,
  getAllBaseAgents,
  getAllWingAgents,
  getAllSubtypeAgents,
  getCounterTypeAgents,
} from './agents/typeAgents';
import {
  simulateQuiz,
  runSimulationBatch,
  analyzeQuestionDiscrimination,
  formatMetricsReport,
  type SimulationMetrics,
  type QuestionAnalysis,
} from './simulator/quizSimulator';
import type { TypeNumber } from '../types';

/**
 * Run baseline tests and return comprehensive results
 */
export interface BaselineTestResults {
  baseAgentMetrics: SimulationMetrics;
  wingAgentMetrics: SimulationMetrics;
  subtypeAgentMetrics: SimulationMetrics;
  counterTypeMetrics: SimulationMetrics;
  combinedMetrics: SimulationMetrics;
  questionAnalysis: QuestionAnalysis[];
  weakQuestions: QuestionAnalysis[];
  problemPairs: Array<{
    type1: TypeNumber;
    type2: TypeNumber;
    confusionRate: number;
  }>;
  recommendations: string[];
}

/**
 * Run the complete baseline test suite
 */
export function runBaselineTests(iterations: number = 10): BaselineTestResults {
  console.log('🧪 Starting Enneagram Quiz Baseline Tests...\n');

  // Collect agents
  const baseAgents = getAllBaseAgents();
  const wingAgents = getAllWingAgents();
  const subtypeAgents = getAllSubtypeAgents();
  const counterTypeAgents = getCounterTypeAgents();

  // Run multiple iterations for statistical significance
  console.log(`Running ${iterations} iterations per agent type...\n`);

  // Expand agents for multiple iterations
  const expandedBase = Array(iterations).fill(baseAgents).flat();
  const expandedWing = Array(iterations).fill(wingAgents).flat();
  const expandedSubtype = Array(iterations).fill(subtypeAgents).flat();
  const expandedCounter = Array(iterations).fill(counterTypeAgents).flat();

  // Run simulations
  console.log('📊 Testing base type agents...');
  const baseAgentMetrics = runSimulationBatch(expandedBase);

  console.log('📊 Testing wing variant agents...');
  const wingAgentMetrics = runSimulationBatch(expandedWing);

  console.log('📊 Testing subtype agents...');
  const subtypeAgentMetrics = runSimulationBatch(expandedSubtype);

  console.log('📊 Testing counter-type agents...');
  const counterTypeMetrics = runSimulationBatch(expandedCounter);

  // Combined metrics
  console.log('📊 Calculating combined metrics...');
  const allAgents = [
    ...expandedBase,
    ...expandedWing,
    ...expandedSubtype,
  ];
  const combinedMetrics = runSimulationBatch(allAgents);

  // Analyze question discrimination
  console.log('📊 Analyzing question discrimination...');
  const allResults = allAgents.map(simulateQuiz);
  const questionAnalysis = analyzeQuestionDiscrimination(allResults);

  // Find weak questions (discrimination < 0.3)
  const weakQuestions = questionAnalysis.filter(q => q.discriminationIndex < 0.3);

  // Find problem pairs (high confusion rates)
  const problemPairs = findProblemPairs(combinedMetrics);

  // Generate recommendations
  const recommendations = generateRecommendations(
    combinedMetrics,
    counterTypeMetrics,
    weakQuestions,
    problemPairs
  );

  return {
    baseAgentMetrics,
    wingAgentMetrics,
    subtypeAgentMetrics,
    counterTypeMetrics,
    combinedMetrics,
    questionAnalysis,
    weakQuestions,
    problemPairs,
    recommendations,
  };
}

/**
 * Find type pairs with high confusion rates
 */
function findProblemPairs(
  metrics: SimulationMetrics
): Array<{ type1: TypeNumber; type2: TypeNumber; confusionRate: number }> {
  const pairs: Array<{ type1: TypeNumber; type2: TypeNumber; confusionRate: number }> = [];

  for (const t1 of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
    const total = metrics.typeBreakdown[t1].total;
    if (total === 0) continue;

    for (const t2 of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
      if (t1 === t2) continue;

      const confused = metrics.confusionMatrix[t1][t2];
      const confusionRate = confused / total;

      if (confusionRate > 0.1) { // More than 10% confusion
        pairs.push({ type1: t1, type2: t2, confusionRate });
      }
    }
  }

  return pairs.sort((a, b) => b.confusionRate - a.confusionRate);
}

/**
 * Generate improvement recommendations
 */
function generateRecommendations(
  combined: SimulationMetrics,
  counterType: SimulationMetrics,
  weakQuestions: QuestionAnalysis[],
  problemPairs: Array<{ type1: TypeNumber; type2: TypeNumber; confusionRate: number }>
): string[] {
  const recommendations: string[] = [];

  // Overall accuracy
  if (combined.typeAccuracy < 0.85) {
    recommendations.push(
      `⚠️ Overall type accuracy (${(combined.typeAccuracy * 100).toFixed(1)}%) is below target (85%). ` +
      `Consider adding more discriminating questions.`
    );
  }

  // Counter-type accuracy
  if (counterType.typeAccuracy < 0.75) {
    recommendations.push(
      `⚠️ Counter-type accuracy (${(counterType.typeAccuracy * 100).toFixed(1)}%) is low. ` +
      `Counter-types (SP-4, SX-6, SO-7, etc.) often look different from their core type. ` +
      `Consider adding questions that target underlying motivations rather than surface behaviors.`
    );
  }

  // Weak questions
  if (weakQuestions.length > 5) {
    const ids = weakQuestions.slice(0, 5).map(q => q.questionId).join(', ');
    recommendations.push(
      `⚠️ ${weakQuestions.length} questions have low discrimination power. ` +
      `Consider revising or replacing: ${ids}`
    );
  }

  // Problem pairs
  for (const pair of problemPairs.slice(0, 3)) {
    recommendations.push(
      `⚠️ High confusion between Type ${pair.type1} and Type ${pair.type2} ` +
      `(${(pair.confusionRate * 100).toFixed(0)}% mistyping rate). ` +
      `Add differentiator questions specifically for this pair.`
    );
  }

  // Wing accuracy
  if (combined.wingAccuracy < 0.70) {
    recommendations.push(
      `⚠️ Wing accuracy (${(combined.wingAccuracy * 100).toFixed(1)}%) is low. ` +
      `Current quiz has only 3 wing questions per type. Expand to 6-9 questions.`
    );
  }

  // Instinct accuracy
  if (combined.instinctAccuracy < 0.75) {
    recommendations.push(
      `⚠️ Instinct accuracy (${(combined.instinctAccuracy * 100).toFixed(1)}%) is below target. ` +
      `Consider adding more instinct-specific questions.`
    );
  }

  // Confidence margin
  if (combined.averageMargin < 20) {
    recommendations.push(
      `⚠️ Average score margin (${combined.averageMargin.toFixed(1)}) is low. ` +
      `Questions may not sufficiently differentiate between types. ` +
      `Consider increasing scoring weights for primary type indicators.`
    );
  }

  return recommendations;
}

/**
 * Print a detailed report of the baseline test results
 */
export function printBaselineReport(results: BaselineTestResults): void {
  console.log('\n');
  console.log(formatMetricsReport(results.combinedMetrics));

  console.log('\n');
  console.log('═══════════════════════════════════════════════════');
  console.log('         DETAILED BREAKDOWN BY AGENT TYPE');
  console.log('═══════════════════════════════════════════════════');

  console.log('\n🎯 BASE TYPE AGENTS (9 types):');
  console.log(`   Accuracy: ${(results.baseAgentMetrics.typeAccuracy * 100).toFixed(1)}%`);
  console.log(`   Confidence: ${results.baseAgentMetrics.averageConfidence.toFixed(1)}%`);

  console.log('\n🦋 WING VARIANT AGENTS (18 variants):');
  console.log(`   Accuracy: ${(results.wingAgentMetrics.typeAccuracy * 100).toFixed(1)}%`);
  console.log(`   Wing Detection: ${(results.wingAgentMetrics.wingAccuracy * 100).toFixed(1)}%`);

  console.log('\n🔮 SUBTYPE AGENTS (27 variants):');
  console.log(`   Accuracy: ${(results.subtypeAgentMetrics.typeAccuracy * 100).toFixed(1)}%`);
  console.log(`   Instinct Detection: ${(results.subtypeAgentMetrics.instinctAccuracy * 100).toFixed(1)}%`);

  console.log('\n⚡ COUNTER-TYPE AGENTS (9 special cases):');
  console.log(`   Accuracy: ${(results.counterTypeMetrics.typeAccuracy * 100).toFixed(1)}%`);
  console.log('   (Counter-types often look different from their core type)');

  console.log('\n');
  console.log('═══════════════════════════════════════════════════');
  console.log('         QUESTION ANALYSIS');
  console.log('═══════════════════════════════════════════════════');

  console.log('\n📈 TOP 5 DISCRIMINATING QUESTIONS:');
  for (const q of results.questionAnalysis.slice(0, 5)) {
    console.log(`   [${q.questionId}] Discrimination: ${(q.discriminationIndex * 100).toFixed(0)}%`);
    console.log(`      "${q.questionText.substring(0, 60)}..."`);
  }

  console.log('\n📉 WEAKEST QUESTIONS (need improvement):');
  for (const q of results.weakQuestions.slice(0, 5)) {
    console.log(`   [${q.questionId}] Discrimination: ${(q.discriminationIndex * 100).toFixed(0)}%`);
    console.log(`      "${q.questionText.substring(0, 60)}..."`);
  }

  console.log('\n');
  console.log('═══════════════════════════════════════════════════');
  console.log('         CONFUSED TYPE PAIRS');
  console.log('═══════════════════════════════════════════════════');

  if (results.problemPairs.length === 0) {
    console.log('\n✅ No significant type confusion detected!');
  } else {
    for (const pair of results.problemPairs.slice(0, 5)) {
      console.log(`\n   Type ${pair.type1} ↔ Type ${pair.type2}: ${(pair.confusionRate * 100).toFixed(0)}% confusion`);
    }
  }

  console.log('\n');
  console.log('═══════════════════════════════════════════════════');
  console.log('         RECOMMENDATIONS');
  console.log('═══════════════════════════════════════════════════');

  if (results.recommendations.length === 0) {
    console.log('\n✅ All metrics meet target thresholds!');
  } else {
    for (const rec of results.recommendations) {
      console.log(`\n${rec}`);
    }
  }

  console.log('\n═══════════════════════════════════════════════════\n');
}

/**
 * Export results as JSON for further analysis
 */
export function exportResultsAsJson(results: BaselineTestResults): string {
  return JSON.stringify({
    summary: {
      combinedTypeAccuracy: results.combinedMetrics.typeAccuracy,
      combinedWingAccuracy: results.combinedMetrics.wingAccuracy,
      combinedInstinctAccuracy: results.combinedMetrics.instinctAccuracy,
      averageConfidence: results.combinedMetrics.averageConfidence,
      averageMargin: results.combinedMetrics.averageMargin,
    },
    byAgentType: {
      base: {
        accuracy: results.baseAgentMetrics.typeAccuracy,
        confidence: results.baseAgentMetrics.averageConfidence,
      },
      wing: {
        typeAccuracy: results.wingAgentMetrics.typeAccuracy,
        wingAccuracy: results.wingAgentMetrics.wingAccuracy,
      },
      subtype: {
        typeAccuracy: results.subtypeAgentMetrics.typeAccuracy,
        instinctAccuracy: results.subtypeAgentMetrics.instinctAccuracy,
      },
      counterType: {
        accuracy: results.counterTypeMetrics.typeAccuracy,
      },
    },
    confusionMatrix: results.combinedMetrics.confusionMatrix,
    typeBreakdown: results.combinedMetrics.typeBreakdown,
    problemPairs: results.problemPairs,
    weakQuestions: results.weakQuestions.map(q => ({
      id: q.questionId,
      text: q.questionText,
      discriminationIndex: q.discriminationIndex,
    })),
    recommendations: results.recommendations,
  }, null, 2);
}
