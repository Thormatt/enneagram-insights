import { describe, it, expect, beforeAll } from 'vitest';
import {
  typeAgents,
  getAllBaseAgents,
  getAllWingAgents,
  getAllSubtypeAgents,
  getCounterTypeAgents,
} from './agents/typeAgents';
import {
  simulateQuiz,
  runSimulationBatch as _runSimulationBatch,
  analyzeQuestionDiscrimination as _analyzeQuestionDiscrimination,
  formatMetricsReport,
} from './simulator/quizSimulator';
import {
  runBaselineTests,
  printBaselineReport,
  exportResultsAsJson,
  type BaselineTestResults,
} from './runBaselineTest';
import type { TypeNumber } from '../types';

describe('Enneagram Quiz Agent Swarm Testing', () => {
  // Store results for cross-test reference
  let baselineResults: BaselineTestResults;

  beforeAll(() => {
    // Run the full baseline test once
    baselineResults = runBaselineTests(5); // 5 iterations for faster tests
  });

  describe('Agent Personas', () => {
    it('should have 9 base type agents', () => {
      const agents = getAllBaseAgents();
      expect(agents).toHaveLength(9);
    });

    it('should have all types represented', () => {
      const agents = getAllBaseAgents();
      const types = agents.map(a => a.type).sort((a, b) => a - b);
      expect(types).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should have 18 wing variant agents (2 per type)', () => {
      const agents = getAllWingAgents();
      expect(agents).toHaveLength(18);
    });

    it('should have 27 subtype agents (3 per type)', () => {
      const agents = getAllSubtypeAgents();
      expect(agents).toHaveLength(27);
    });

    it('should have 9 counter-type agents', () => {
      const agents = getCounterTypeAgents();
      expect(agents).toHaveLength(9);
    });

    it('each agent should have valid response patterns', () => {
      const agents = getAllBaseAgents();
      for (const agent of agents) {
        // All patterns should be between 0 and 1
        for (const [_key, value] of Object.entries(agent.responsePatterns)) {
          expect(value).toBeGreaterThanOrEqual(0);
          expect(value).toBeLessThanOrEqual(1);
        }

        // Primary type pattern should be highest
        const primaryPattern = agent.responsePatterns[
          getPatternKeyForType(agent.type)
        ];
        expect(primaryPattern).toBeGreaterThanOrEqual(0.9);
      }
    });
  });

  describe('Quiz Simulation', () => {
    it('should produce valid results for a single agent', () => {
      const agent = typeAgents[1];
      const result = simulateQuiz(agent);

      expect(result.expectedType).toBe(1);
      expect(result.resultType).toBeGreaterThanOrEqual(1);
      expect(result.resultType).toBeLessThanOrEqual(9);
      expect(result.typeConfidence).toBeGreaterThan(0);
      expect(result.typeConfidence).toBeLessThanOrEqual(100);
      expect(Object.keys(result.answers).length).toBeGreaterThan(0);
    });

    it('should produce valid scores for all types', () => {
      const agent = typeAgents[5];
      const result = simulateQuiz(agent);

      for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
        expect(result.typeScores[t]).toBeGreaterThanOrEqual(0);
      }
    });

    it('all answers should be valid (1-5)', () => {
      const agent = typeAgents[3];
      const result = simulateQuiz(agent);

      for (const answer of Object.values(result.answers)) {
        expect(answer).toBeGreaterThanOrEqual(1);
        expect(answer).toBeLessThanOrEqual(5);
        expect(Number.isInteger(answer)).toBe(true);
      }
    });
  });

  describe('Baseline Metrics', () => {
    it('should calculate combined metrics', () => {
      expect(baselineResults.combinedMetrics).toBeDefined();
      expect(baselineResults.combinedMetrics.totalAgents).toBeGreaterThan(0);
    });

    it('should produce a confusion matrix', () => {
      const matrix = baselineResults.combinedMetrics.confusionMatrix;
      expect(matrix).toBeDefined();

      // Matrix should be 9x9
      for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
        expect(matrix[t]).toBeDefined();
        for (const r of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
          expect(typeof matrix[t][r]).toBe('number');
        }
      }
    });

    it('should identify weak questions', () => {
      expect(baselineResults.weakQuestions).toBeDefined();
      expect(Array.isArray(baselineResults.weakQuestions)).toBe(true);
    });

    it('should generate recommendations', () => {
      expect(baselineResults.recommendations).toBeDefined();
      expect(Array.isArray(baselineResults.recommendations)).toBe(true);
    });
  });

  describe('Performance Targets (Informational)', () => {
    // These tests report metrics but don't fail - they're informational

    it('METRIC: Overall type accuracy', () => {
      const accuracy = baselineResults.combinedMetrics.typeAccuracy;
      console.log(`\n📊 Overall Type Accuracy: ${(accuracy * 100).toFixed(1)}%`);
      console.log(`   Target: 85% | Status: ${accuracy >= 0.85 ? '✅ PASS' : '⚠️ NEEDS IMPROVEMENT'}`);

      // We don't fail this test, just report
      expect(accuracy).toBeGreaterThan(0);
    });

    it('METRIC: Wing accuracy', () => {
      const accuracy = baselineResults.combinedMetrics.wingAccuracy;
      console.log(`\n📊 Wing Accuracy: ${(accuracy * 100).toFixed(1)}%`);
      console.log(`   Target: 70% | Status: ${accuracy >= 0.70 ? '✅ PASS' : '⚠️ NEEDS IMPROVEMENT'}`);

      expect(accuracy).toBeGreaterThan(0);
    });

    it('METRIC: Instinct accuracy', () => {
      const accuracy = baselineResults.combinedMetrics.instinctAccuracy;
      console.log(`\n📊 Instinct Accuracy: ${(accuracy * 100).toFixed(1)}%`);
      console.log(`   Target: 75% | Status: ${accuracy >= 0.75 ? '✅ PASS' : '⚠️ NEEDS IMPROVEMENT'}`);

      expect(accuracy).toBeGreaterThan(0);
    });

    it('METRIC: Counter-type accuracy', () => {
      const accuracy = baselineResults.counterTypeMetrics.typeAccuracy;
      console.log(`\n📊 Counter-Type Accuracy: ${(accuracy * 100).toFixed(1)}%`);
      console.log(`   Target: 75% | Status: ${accuracy >= 0.75 ? '✅ PASS' : '⚠️ NEEDS IMPROVEMENT'}`);

      expect(accuracy).toBeGreaterThan(0);
    });

    it('METRIC: Average confidence', () => {
      const confidence = baselineResults.combinedMetrics.averageConfidence;
      console.log(`\n📊 Average Confidence: ${confidence.toFixed(1)}%`);
      console.log(`   Target: 65% | Status: ${confidence >= 65 ? '✅ PASS' : '⚠️ NEEDS IMPROVEMENT'}`);

      expect(confidence).toBeGreaterThan(0);
    });

    it('METRIC: Type-by-type breakdown', () => {
      console.log('\n📊 Type-by-Type Accuracy:');
      for (const t of [1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeNumber[]) {
        const breakdown = baselineResults.combinedMetrics.typeBreakdown[t];
        const status = breakdown.accuracy >= 0.85 ? '✅' : breakdown.accuracy >= 0.70 ? '⚠️' : '❌';
        console.log(`   Type ${t}: ${(breakdown.accuracy * 100).toFixed(0)}% ${status}`);
      }

      expect(true).toBe(true);
    });

    it('METRIC: Problem pairs', () => {
      console.log('\n📊 Confused Type Pairs (>10% confusion):');
      if (baselineResults.problemPairs.length === 0) {
        console.log('   ✅ No significant confusion between types');
      } else {
        for (const pair of baselineResults.problemPairs.slice(0, 5)) {
          console.log(`   ⚠️ Type ${pair.type1} ↔ Type ${pair.type2}: ${(pair.confusionRate * 100).toFixed(0)}%`);
        }
      }

      expect(true).toBe(true);
    });
  });

  describe('Question Analysis', () => {
    it('should identify high-discrimination questions', () => {
      const topQuestions = baselineResults.questionAnalysis.slice(0, 5);
      console.log('\n📈 Top Discriminating Questions:');
      for (const q of topQuestions) {
        console.log(`   [${q.questionId}] ${(q.discriminationIndex * 100).toFixed(0)}% discrimination`);
      }

      expect(topQuestions.length).toBeGreaterThan(0);
    });

    it('should identify low-discrimination questions needing improvement', () => {
      const weakQuestions = baselineResults.weakQuestions;
      console.log(`\n📉 Weak Questions (need improvement): ${weakQuestions.length}`);
      for (const q of weakQuestions.slice(0, 5)) {
        console.log(`   [${q.questionId}] ${(q.discriminationIndex * 100).toFixed(0)}% - "${q.questionText.substring(0, 50)}..."`);
      }

      // We expect some weak questions in the current quiz
      expect(Array.isArray(weakQuestions)).toBe(true);
    });
  });

  describe('Full Report', () => {
    it('should generate a formatted metrics report', () => {
      const report = formatMetricsReport(baselineResults.combinedMetrics);
      expect(typeof report).toBe('string');
      expect(report.length).toBeGreaterThan(100);
    });

    it('should export results as JSON', () => {
      const json = exportResultsAsJson(baselineResults);
      const parsed = JSON.parse(json);

      expect(parsed.summary).toBeDefined();
      expect(parsed.summary.combinedTypeAccuracy).toBeDefined();
      expect(parsed.confusionMatrix).toBeDefined();
      expect(parsed.recommendations).toBeDefined();
    });

    it('FULL REPORT OUTPUT', () => {
      console.log('\n\n');
      printBaselineReport(baselineResults);
    });
  });
});

// Helper function
function getPatternKeyForType(type: TypeNumber): keyof typeof typeAgents[1]['responsePatterns'] {
  const map: Record<TypeNumber, keyof typeof typeAgents[1]['responsePatterns']> = {
    1: 'fearOfCorruption',
    2: 'needToBeNeeded',
    3: 'achievementDrive',
    4: 'identitySearch',
    5: 'knowledgeAccumulation',
    6: 'securitySeeking',
    7: 'experienceSeeking',
    8: 'controlAssertiveness',
    9: 'peaceHarmony',
  };
  return map[type];
}
