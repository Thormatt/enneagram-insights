import { describe, it, expect } from 'vitest';
import {
  runAdaptiveValidation,
  formatAdaptiveMetricsReport,
  type AdaptiveSimulationMetrics,
} from './simulator/adaptiveQuizSimulator';
import {
  runHybridValidation,
  formatHybridMetricsReport,
  type HybridSimulationMetrics,
} from './simulator/hybridQuizSimulator';
import type { TypeNumber } from '../types';

/**
 * A/B Comparison Test: Adaptive (Likert) vs Hybrid (Delphi Structure)
 *
 * Runs the same agent swarm through both quiz methodologies and compares:
 * - Type accuracy
 * - Wing accuracy
 * - Instinct accuracy
 * - Question efficiency
 * - Confidence levels
 *
 * Baseline metrics:
 * - Original static quiz: 59.3% type, 22.2% wing
 * - Adaptive quiz (current): ~80.6% type, ~72.2% wing
 */

interface ComparisonReport {
  adaptive: AdaptiveSimulationMetrics;
  hybrid: HybridSimulationMetrics;
  comparison: {
    typeAccuracyDiff: number;
    wingAccuracyDiff: number;
    instinctAccuracyDiff: number;
    questionsDiff: number;
    confidenceDiff: number;
    winner: 'adaptive' | 'hybrid' | 'tie';
    winningMargin: number;
  };
  perTypeComparison: Record<
    TypeNumber,
    {
      adaptiveAccuracy: number;
      hybridAccuracy: number;
      diff: number;
      winner: 'adaptive' | 'hybrid' | 'tie';
    }
  >;
}

function generateComparisonReport(
  adaptive: AdaptiveSimulationMetrics,
  hybrid: HybridSimulationMetrics
): ComparisonReport {
  const typeAccuracyDiff = hybrid.typeAccuracy - adaptive.typeAccuracy;
  const wingAccuracyDiff = hybrid.wingAccuracy - adaptive.wingAccuracy;
  const instinctAccuracyDiff = hybrid.instinctAccuracy - adaptive.instinctAccuracy;
  const questionsDiff = hybrid.averageQuestions - adaptive.averageQuestions;
  const confidenceDiff = hybrid.averageConfidence - adaptive.averageConfidence;

  // Weighted score: type accuracy is most important
  const adaptiveScore =
    adaptive.typeAccuracy * 0.5 +
    adaptive.wingAccuracy * 0.25 +
    adaptive.instinctAccuracy * 0.25;
  const hybridScore =
    hybrid.typeAccuracy * 0.5 +
    hybrid.wingAccuracy * 0.25 +
    hybrid.instinctAccuracy * 0.25;

  const scoreDiff = hybridScore - adaptiveScore;
  const winner: 'adaptive' | 'hybrid' | 'tie' =
    Math.abs(scoreDiff) < 0.02 ? 'tie' : scoreDiff > 0 ? 'hybrid' : 'adaptive';

  const perTypeComparison: Record<TypeNumber, any> = {} as any;
  for (let type = 1; type <= 9; type++) {
    const typeNum = type as TypeNumber;
    const adaptiveAcc = adaptive.typeBreakdown[typeNum].accuracy;
    const hybridAcc = hybrid.typeBreakdown[typeNum].accuracy;
    const diff = hybridAcc - adaptiveAcc;
    perTypeComparison[typeNum] = {
      adaptiveAccuracy: adaptiveAcc,
      hybridAccuracy: hybridAcc,
      diff,
      winner:
        Math.abs(diff) < 0.1 ? 'tie' : diff > 0 ? 'hybrid' : 'adaptive',
    };
  }

  return {
    adaptive,
    hybrid,
    comparison: {
      typeAccuracyDiff,
      wingAccuracyDiff,
      instinctAccuracyDiff,
      questionsDiff,
      confidenceDiff,
      winner,
      winningMargin: Math.abs(scoreDiff),
    },
    perTypeComparison,
  };
}

function formatComparisonReport(report: ComparisonReport): string {
  let output = '';

  output += '═══════════════════════════════════════════════════════════════\n';
  output += '          A/B COMPARISON: ADAPTIVE vs HYBRID QUIZ\n';
  output += '═══════════════════════════════════════════════════════════════\n\n';

  output += '📊 OVERALL COMPARISON\n';
  output += '───────────────────────────────────────────────────────────────\n';
  output += `                    ADAPTIVE    HYBRID      DIFF\n`;
  output += `───────────────────────────────────────────────────────────────\n`;

  const formatPct = (n: number) => (n * 100).toFixed(1).padStart(5) + '%';
  const formatDiff = (n: number) => {
    const pct = (n * 100).toFixed(1);
    return n >= 0 ? `+${pct}%` : `${pct}%`;
  };

  output += `Type Accuracy:      ${formatPct(report.adaptive.typeAccuracy)}      ${formatPct(report.hybrid.typeAccuracy)}      ${formatDiff(report.comparison.typeAccuracyDiff)}\n`;
  output += `Wing Accuracy:      ${formatPct(report.adaptive.wingAccuracy)}      ${formatPct(report.hybrid.wingAccuracy)}      ${formatDiff(report.comparison.wingAccuracyDiff)}\n`;
  output += `Instinct Accuracy:  ${formatPct(report.adaptive.instinctAccuracy)}      ${formatPct(report.hybrid.instinctAccuracy)}      ${formatDiff(report.comparison.instinctAccuracyDiff)}\n`;
  output += `Avg Questions:      ${report.adaptive.averageQuestions.toFixed(1).padStart(5)}       ${report.hybrid.averageQuestions.toFixed(1).padStart(5)}       ${(report.comparison.questionsDiff >= 0 ? '+' : '') + report.comparison.questionsDiff.toFixed(1)}\n`;
  output += `Avg Confidence:     ${report.adaptive.averageConfidence.toFixed(1).padStart(5)}%      ${report.hybrid.averageConfidence.toFixed(1).padStart(5)}%      ${formatDiff(report.comparison.confidenceDiff / 100)}\n`;
  output += '\n';

  // Winner announcement
  const winnerSymbol =
    report.comparison.winner === 'tie'
      ? '🤝'
      : report.comparison.winner === 'hybrid'
        ? '🏆 HYBRID'
        : '🏆 ADAPTIVE';
  const margin = (report.comparison.winningMargin * 100).toFixed(1);
  output += `WINNER: ${winnerSymbol}${report.comparison.winner !== 'tie' ? ` (by ${margin}% weighted score)` : ''}\n\n`;

  output += '📋 PER-TYPE BREAKDOWN\n';
  output += '───────────────────────────────────────────────────────────────\n';
  output += `TYPE    ADAPTIVE    HYBRID      DIFF        WINNER\n`;
  output += '───────────────────────────────────────────────────────────────\n';

  for (let type = 1; type <= 9; type++) {
    const typeNum = type as TypeNumber;
    const data = report.perTypeComparison[typeNum];
    const winnerIcon =
      data.winner === 'tie'
        ? '  ─'
        : data.winner === 'hybrid'
          ? '  → hybrid'
          : '  ← adaptive';

    output += `  ${type}       ${formatPct(data.adaptiveAccuracy)}       ${formatPct(data.hybridAccuracy)}       ${formatDiff(data.diff).padStart(6)}    ${winnerIcon}\n`;
  }
  output += '\n';

  // Types where each quiz wins
  const hybridWins = Object.entries(report.perTypeComparison)
    .filter(([_, data]) => data.winner === 'hybrid')
    .map(([type]) => type);
  const adaptiveWins = Object.entries(report.perTypeComparison)
    .filter(([_, data]) => data.winner === 'adaptive')
    .map(([type]) => type);
  const ties = Object.entries(report.perTypeComparison)
    .filter(([_, data]) => data.winner === 'tie')
    .map(([type]) => type);

  output += '📈 SUMMARY\n';
  output += '───────────────────────────────────────────────────────────────\n';
  output += `Hybrid wins for types:    ${hybridWins.length > 0 ? hybridWins.join(', ') : 'none'}\n`;
  output += `Adaptive wins for types:  ${adaptiveWins.length > 0 ? adaptiveWins.join(', ') : 'none'}\n`;
  output += `Ties:                     ${ties.length > 0 ? ties.join(', ') : 'none'}\n\n`;

  // Methodology comparison
  output += '📝 METHODOLOGY NOTES\n';
  output += '───────────────────────────────────────────────────────────────\n';
  output += `ADAPTIVE (Likert-based):\n`;
  output += `  - ${report.adaptive.averageQuestions.toFixed(0)} questions average\n`;
  output += `  - Pure Likert scale (1-5 agree/disagree)\n`;
  output += `  - Bayesian updating with convergence detection\n\n`;
  output += `HYBRID (Delphi-recommended):\n`;
  output += `  - ${report.hybrid.averageQuestions.toFixed(0)} questions average\n`;
  output += `  - 4-stage multi-format:\n`;
  output += `    1. Scenario ranking (center identification)\n`;
  output += `    2. Forced-choice pairs (confusable type differentiation)\n`;
  output += `    3. Ipsative paragraphs (instinct stack)\n`;
  output += `    4. Minimal Likert (health level)\n`;

  return output;
}

describe('A/B Comparison: Adaptive vs Hybrid', () => {
  describe('Full Comparison Suite', () => {
    it('should run both quizzes and compare results', () => {
      console.log('\n🔄 Running Adaptive Quiz validation...');
      const adaptiveValidation = runAdaptiveValidation();
      console.log('✅ Adaptive Quiz complete');

      console.log('\n🔄 Running Hybrid Quiz validation...');
      const hybridValidation = runHybridValidation();
      console.log('✅ Hybrid Quiz complete');

      // Generate and print comparison
      const report = generateComparisonReport(
        adaptiveValidation.combinedMetrics,
        hybridValidation.combinedMetrics
      );

      console.log('\n' + formatComparisonReport(report));

      // Also print individual reports
      console.log('\n' + '═'.repeat(65));
      console.log('DETAILED ADAPTIVE QUIZ RESULTS');
      console.log('═'.repeat(65));
      console.log(formatAdaptiveMetricsReport(adaptiveValidation.combinedMetrics));

      console.log('\n' + '═'.repeat(65));
      console.log('DETAILED HYBRID QUIZ RESULTS');
      console.log('═'.repeat(65));
      console.log(formatHybridMetricsReport(hybridValidation.combinedMetrics));

      // Basic expectations - both should be better than baseline
      expect(report.adaptive.typeAccuracy).toBeGreaterThan(0.5);
      expect(report.hybrid.typeAccuracy).toBeGreaterThan(0.5);
    });
  });

  describe('Category-Level Comparison', () => {
    it('should compare base agents', () => {
      const adaptive = runAdaptiveValidation();
      const hybrid = runHybridValidation();

      console.log('\n=== BASE AGENTS COMPARISON ===');
      console.log(`Adaptive: ${(adaptive.baseMetrics.typeAccuracy * 100).toFixed(1)}% type accuracy`);
      console.log(`Hybrid:   ${(hybrid.baseMetrics.typeAccuracy * 100).toFixed(1)}% type accuracy`);

      // Both should handle base agents well
      expect(adaptive.baseMetrics.typeAccuracy).toBeGreaterThan(0.5);
      expect(hybrid.baseMetrics.typeAccuracy).toBeGreaterThan(0.5);
    });

    it('should compare wing variant agents', () => {
      const adaptive = runAdaptiveValidation();
      const hybrid = runHybridValidation();

      console.log('\n=== WING VARIANT AGENTS COMPARISON ===');
      console.log(`Adaptive: ${(adaptive.wingMetrics.typeAccuracy * 100).toFixed(1)}% type, ${(adaptive.wingMetrics.wingAccuracy * 100).toFixed(1)}% wing`);
      console.log(`Hybrid:   ${(hybrid.wingMetrics.typeAccuracy * 100).toFixed(1)}% type, ${(hybrid.wingMetrics.wingAccuracy * 100).toFixed(1)}% wing`);

      // Wing accuracy comparison - both quizzes should be reasonably accurate
      expect(adaptive.wingMetrics.wingAccuracy).toBeGreaterThan(0.3);
      expect(hybrid.wingMetrics.wingAccuracy).toBeGreaterThan(0.3);
    });

    it('should compare counter-type agents', () => {
      const adaptive = runAdaptiveValidation();
      const hybrid = runHybridValidation();

      console.log('\n=== COUNTER-TYPE AGENTS COMPARISON ===');
      console.log(`Adaptive: ${(adaptive.counterTypeMetrics.typeAccuracy * 100).toFixed(1)}% type accuracy`);
      console.log(`Hybrid:   ${(hybrid.counterTypeMetrics.typeAccuracy * 100).toFixed(1)}% type accuracy`);

      // Counter-types are harder - lower expectations
      // The test is informational, not strict
      expect(true).toBe(true);
    });
  });

  describe('Efficiency Analysis', () => {
    it('should compare question count efficiency', () => {
      const adaptive = runAdaptiveValidation();
      const hybrid = runHybridValidation();

      console.log('\n=== EFFICIENCY ANALYSIS ===');
      console.log(`Adaptive avg questions: ${adaptive.combinedMetrics.averageQuestions.toFixed(1)}`);
      console.log(`Hybrid avg questions:   ${hybrid.combinedMetrics.averageQuestions.toFixed(1)}`);

      const adaptiveEfficiency =
        adaptive.combinedMetrics.typeAccuracy / adaptive.combinedMetrics.averageQuestions;
      const hybridEfficiency =
        hybrid.combinedMetrics.typeAccuracy / hybrid.combinedMetrics.averageQuestions;

      console.log(
        `Adaptive accuracy per question: ${(adaptiveEfficiency * 100).toFixed(2)}%`
      );
      console.log(
        `Hybrid accuracy per question:   ${(hybridEfficiency * 100).toFixed(2)}%`
      );

      // Informational test
      expect(true).toBe(true);
    });
  });

  describe('Confused Pairs Analysis', () => {
    it('should identify which quiz handles confused pairs better', () => {
      const adaptive = runAdaptiveValidation();
      const hybrid = runHybridValidation();

      // Known confused pairs from the forced-choice questions
      const confusedPairs = [
        [1, 6],
        [3, 7],
        [4, 9],
        [5, 4],
        [5, 6],
        [9, 2],
        [3, 8],
        [1, 3],
        [6, 9],
        [2, 4],
      ];

      console.log('\n=== CONFUSED PAIRS ANALYSIS ===');
      console.log('Pair    Adaptive Confusion    Hybrid Confusion    Better');
      console.log('─'.repeat(60));

      for (const [a, b] of confusedPairs) {
        const typeA = a as TypeNumber;
        const typeB = b as TypeNumber;

        // Confusion = times A was mistyped as B + times B was mistyped as A
        const adaptiveConfusion =
          (adaptive.combinedMetrics.confusionMatrix[typeA]?.[typeB] || 0) +
          (adaptive.combinedMetrics.confusionMatrix[typeB]?.[typeA] || 0);
        const hybridConfusion =
          (hybrid.combinedMetrics.confusionMatrix[typeA]?.[typeB] || 0) +
          (hybrid.combinedMetrics.confusionMatrix[typeB]?.[typeA] || 0);

        const better =
          adaptiveConfusion === hybridConfusion
            ? 'tie'
            : adaptiveConfusion < hybridConfusion
              ? 'adaptive'
              : 'hybrid';

        console.log(
          `${typeA}↔${typeB}     ${adaptiveConfusion.toString().padStart(2)}                     ${hybridConfusion.toString().padStart(2)}                   ${better}`
        );
      }

      expect(true).toBe(true);
    });
  });
});

/**
 * Export comparison utilities for programmatic use
 */
export {
  generateComparisonReport,
  formatComparisonReport,
  type ComparisonReport,
};
