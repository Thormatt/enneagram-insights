import { describe, it, expect } from 'vitest';
import {
  runAdaptiveValidation,
  type AdaptiveSimulationMetrics,
} from './simulator/adaptiveQuizSimulator';
import {
  runHybridValidation,
  type HybridSimulationMetrics,
} from './simulator/hybridQuizSimulator';
import {
  runMergedValidation,
  type MergedSimulationMetrics,
} from './simulator/mergedQuizSimulator';
import type { TypeNumber } from '../types';

/**
 * A/B/C Comparison Test: Adaptive vs Hybrid vs Merged
 *
 * Compares all three quiz methodologies:
 * - Adaptive: Pure Likert with Bayesian updating
 * - Hybrid: Delphi 4-stage (scenarios, forced-choice, ipsative, Likert)
 * - Merged: Best of both (scenarios + adaptive Likert + forced-choice + ipsative)
 */

type QuizMetrics = AdaptiveSimulationMetrics | HybridSimulationMetrics | MergedSimulationMetrics;

interface TripleComparisonReport {
  adaptive: QuizMetrics;
  hybrid: QuizMetrics;
  merged: QuizMetrics;
  rankings: {
    typeAccuracy: ['adaptive' | 'hybrid' | 'merged', 'adaptive' | 'hybrid' | 'merged', 'adaptive' | 'hybrid' | 'merged'];
    wingAccuracy: ['adaptive' | 'hybrid' | 'merged', 'adaptive' | 'hybrid' | 'merged', 'adaptive' | 'hybrid' | 'merged'];
    efficiency: ['adaptive' | 'hybrid' | 'merged', 'adaptive' | 'hybrid' | 'merged', 'adaptive' | 'hybrid' | 'merged'];
    overall: 'adaptive' | 'hybrid' | 'merged';
  };
  scores: {
    adaptive: number;
    hybrid: number;
    merged: number;
  };
}

function rankQuizzes(
  adaptive: number,
  hybrid: number,
  merged: number,
  higherIsBetter: boolean = true
): ['adaptive' | 'hybrid' | 'merged', 'adaptive' | 'hybrid' | 'merged', 'adaptive' | 'hybrid' | 'merged'] {
  const quizzes: Array<{ name: 'adaptive' | 'hybrid' | 'merged'; value: number }> = [
    { name: 'adaptive', value: adaptive },
    { name: 'hybrid', value: hybrid },
    { name: 'merged', value: merged },
  ];

  quizzes.sort((a, b) => higherIsBetter ? b.value - a.value : a.value - b.value);

  return [quizzes[0].name, quizzes[1].name, quizzes[2].name];
}

function generateTripleComparisonReport(
  adaptive: QuizMetrics,
  hybrid: QuizMetrics,
  merged: QuizMetrics
): TripleComparisonReport {
  // Calculate weighted scores (type accuracy 50%, wing 25%, instinct 25%)
  const adaptiveScore =
    adaptive.typeAccuracy * 0.5 +
    adaptive.wingAccuracy * 0.25 +
    adaptive.instinctAccuracy * 0.25;
  const hybridScore =
    hybrid.typeAccuracy * 0.5 +
    hybrid.wingAccuracy * 0.25 +
    hybrid.instinctAccuracy * 0.25;
  const mergedScore =
    merged.typeAccuracy * 0.5 +
    merged.wingAccuracy * 0.25 +
    merged.instinctAccuracy * 0.25;

  const overallRanking = rankQuizzes(adaptiveScore, hybridScore, mergedScore);

  return {
    adaptive,
    hybrid,
    merged,
    rankings: {
      typeAccuracy: rankQuizzes(adaptive.typeAccuracy, hybrid.typeAccuracy, merged.typeAccuracy),
      wingAccuracy: rankQuizzes(adaptive.wingAccuracy, hybrid.wingAccuracy, merged.wingAccuracy),
      efficiency: rankQuizzes(adaptive.averageQuestions, hybrid.averageQuestions, merged.averageQuestions, false),
      overall: overallRanking[0],
    },
    scores: {
      adaptive: adaptiveScore,
      hybrid: hybridScore,
      merged: mergedScore,
    },
  };
}

function formatTripleComparisonReport(report: TripleComparisonReport): string {
  let output = '';

  output += '═══════════════════════════════════════════════════════════════════════════\n';
  output += '              A/B/C COMPARISON: ADAPTIVE vs HYBRID vs MERGED\n';
  output += '═══════════════════════════════════════════════════════════════════════════\n\n';

  output += '📊 OVERALL COMPARISON\n';
  output += '───────────────────────────────────────────────────────────────────────────\n';
  output += `                    ADAPTIVE     HYBRID      MERGED      RANK\n`;
  output += '───────────────────────────────────────────────────────────────────────────\n';

  const formatPct = (n: number) => (n * 100).toFixed(1).padStart(5) + '%';
  const formatNum = (n: number) => n.toFixed(1).padStart(5);

  output += `Type Accuracy:      ${formatPct(report.adaptive.typeAccuracy)}       ${formatPct(report.hybrid.typeAccuracy)}       ${formatPct(report.merged.typeAccuracy)}       ${report.rankings.typeAccuracy.map((q, i) => `${i + 1}.${q}`).join(' ')}\n`;
  output += `Wing Accuracy:      ${formatPct(report.adaptive.wingAccuracy)}       ${formatPct(report.hybrid.wingAccuracy)}       ${formatPct(report.merged.wingAccuracy)}       ${report.rankings.wingAccuracy.map((q, i) => `${i + 1}.${q}`).join(' ')}\n`;
  output += `Instinct Accuracy:  ${formatPct(report.adaptive.instinctAccuracy)}       ${formatPct(report.hybrid.instinctAccuracy)}       ${formatPct(report.merged.instinctAccuracy)}\n`;
  output += `Avg Questions:      ${formatNum(report.adaptive.averageQuestions)}        ${formatNum(report.hybrid.averageQuestions)}        ${formatNum(report.merged.averageQuestions)}        ${report.rankings.efficiency.map((q, i) => `${i + 1}.${q}`).join(' ')}\n`;
  output += `Avg Confidence:     ${formatPct(report.adaptive.averageConfidence / 100)}       ${formatPct(report.hybrid.averageConfidence / 100)}       ${formatPct(report.merged.averageConfidence / 100)}\n`;
  output += '\n';

  output += `Weighted Score:     ${(report.scores.adaptive * 100).toFixed(1)}%        ${(report.scores.hybrid * 100).toFixed(1)}%        ${(report.scores.merged * 100).toFixed(1)}%\n`;
  output += '\n';

  // Winner announcement
  const winner = report.rankings.overall;
  const winnerScore = report.scores[winner];
  output += `🏆 OVERALL WINNER: ${winner.toUpperCase()} (${(winnerScore * 100).toFixed(1)}% weighted score)\n\n`;

  // Per-type breakdown
  output += '📋 PER-TYPE ACCURACY BREAKDOWN\n';
  output += '───────────────────────────────────────────────────────────────────────────\n';
  output += `TYPE    ADAPTIVE    HYBRID      MERGED      BEST\n`;
  output += '───────────────────────────────────────────────────────────────────────────\n';

  for (let type = 1; type <= 9; type++) {
    const typeNum = type as TypeNumber;
    const adaptiveAcc = report.adaptive.typeBreakdown[typeNum].accuracy;
    const hybridAcc = report.hybrid.typeBreakdown[typeNum].accuracy;
    const mergedAcc = report.merged.typeBreakdown[typeNum].accuracy;

    const best = adaptiveAcc >= hybridAcc && adaptiveAcc >= mergedAcc
      ? 'adaptive'
      : hybridAcc >= mergedAcc
        ? 'hybrid'
        : 'merged';

    output += `  ${type}       ${formatPct(adaptiveAcc)}       ${formatPct(hybridAcc)}       ${formatPct(mergedAcc)}       ${best}\n`;
  }
  output += '\n';

  // Summary
  const adaptiveWins = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(t => {
    const typeNum = t as TypeNumber;
    const a = report.adaptive.typeBreakdown[typeNum].accuracy;
    const h = report.hybrid.typeBreakdown[typeNum].accuracy;
    const m = report.merged.typeBreakdown[typeNum].accuracy;
    return a >= h && a >= m;
  });

  const hybridWins = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(t => {
    const typeNum = t as TypeNumber;
    const a = report.adaptive.typeBreakdown[typeNum].accuracy;
    const h = report.hybrid.typeBreakdown[typeNum].accuracy;
    const m = report.merged.typeBreakdown[typeNum].accuracy;
    return h > a && h >= m;
  });

  const mergedWins = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(t => {
    const typeNum = t as TypeNumber;
    const a = report.adaptive.typeBreakdown[typeNum].accuracy;
    const h = report.hybrid.typeBreakdown[typeNum].accuracy;
    const m = report.merged.typeBreakdown[typeNum].accuracy;
    return m > a && m > h;
  });

  output += '📈 TYPES WON BY EACH QUIZ\n';
  output += '───────────────────────────────────────────────────────────────────────────\n';
  output += `Adaptive best for: ${adaptiveWins.length > 0 ? adaptiveWins.join(', ') : 'none'}\n`;
  output += `Hybrid best for:   ${hybridWins.length > 0 ? hybridWins.join(', ') : 'none'}\n`;
  output += `Merged best for:   ${mergedWins.length > 0 ? mergedWins.join(', ') : 'none'}\n\n`;

  // Methodology comparison
  output += '📝 METHODOLOGY COMPARISON\n';
  output += '───────────────────────────────────────────────────────────────────────────\n';
  output += `ADAPTIVE (Pure Likert):\n`;
  output += `  - Bayesian updating with convergence detection\n`;
  output += `  - All questions are 1-5 agree/disagree scale\n`;
  output += `  - ~${report.adaptive.averageQuestions.toFixed(0)} questions average\n\n`;
  output += `HYBRID (Delphi 4-stage):\n`;
  output += `  - Stage 1: Scenario ranking\n`;
  output += `  - Stage 2: Forced-choice pairs\n`;
  output += `  - Stage 3: Ipsative paragraphs (instincts)\n`;
  output += `  - Stage 4: Minimal Likert (health)\n`;
  output += `  - ~${report.hybrid.averageQuestions.toFixed(0)} questions average\n\n`;
  output += `MERGED (Best of Both):\n`;
  output += `  - Stage 1: Quick scenario screening\n`;
  output += `  - Stage 2: Adaptive Likert + forced-choice disambiguation\n`;
  output += `  - Stage 3: Wing determination + ipsative instincts\n`;
  output += `  - Stage 4: Health level\n`;
  output += `  - ~${report.merged.averageQuestions.toFixed(0)} questions average\n`;

  return output;
}

describe('A/B/C Comparison: Adaptive vs Hybrid vs Merged', () => {
  describe('Full Triple Comparison', () => {
    it('should compare all three quiz methodologies', () => {
      console.log('\n🔄 Running Adaptive Quiz validation...');
      const adaptiveValidation = runAdaptiveValidation();
      console.log('✅ Adaptive complete');

      console.log('🔄 Running Hybrid Quiz validation...');
      const hybridValidation = runHybridValidation();
      console.log('✅ Hybrid complete');

      console.log('🔄 Running Merged Quiz validation...');
      const mergedValidation = runMergedValidation();
      console.log('✅ Merged complete');

      const report = generateTripleComparisonReport(
        adaptiveValidation.combinedMetrics,
        hybridValidation.combinedMetrics,
        mergedValidation.combinedMetrics
      );

      console.log('\n' + formatTripleComparisonReport(report));

      // Basic expectations
      expect(report.adaptive.typeAccuracy).toBeGreaterThan(0.5);
      expect(report.hybrid.typeAccuracy).toBeGreaterThan(0.5);
      expect(report.merged.typeAccuracy).toBeGreaterThan(0.5);
    });
  });

  describe('Category Breakdown', () => {
    it('should compare base agent accuracy', () => {
      const adaptive = runAdaptiveValidation();
      const hybrid = runHybridValidation();
      const merged = runMergedValidation();

      console.log('\n=== BASE AGENTS ===');
      console.log(`Adaptive: ${(adaptive.baseMetrics.typeAccuracy * 100).toFixed(1)}%`);
      console.log(`Hybrid:   ${(hybrid.baseMetrics.typeAccuracy * 100).toFixed(1)}%`);
      console.log(`Merged:   ${(merged.baseMetrics.typeAccuracy * 100).toFixed(1)}%`);

      expect(true).toBe(true);
    });

    it('should compare wing variant accuracy', () => {
      const adaptive = runAdaptiveValidation();
      const hybrid = runHybridValidation();
      const merged = runMergedValidation();

      console.log('\n=== WING VARIANTS ===');
      console.log(`Adaptive: ${(adaptive.wingMetrics.typeAccuracy * 100).toFixed(1)}% type, ${(adaptive.wingMetrics.wingAccuracy * 100).toFixed(1)}% wing`);
      console.log(`Hybrid:   ${(hybrid.wingMetrics.typeAccuracy * 100).toFixed(1)}% type, ${(hybrid.wingMetrics.wingAccuracy * 100).toFixed(1)}% wing`);
      console.log(`Merged:   ${(merged.wingMetrics.typeAccuracy * 100).toFixed(1)}% type, ${(merged.wingMetrics.wingAccuracy * 100).toFixed(1)}% wing`);

      expect(true).toBe(true);
    });

    it('should compare counter-type accuracy', () => {
      const adaptive = runAdaptiveValidation();
      const hybrid = runHybridValidation();
      const merged = runMergedValidation();

      console.log('\n=== COUNTER-TYPES ===');
      console.log(`Adaptive: ${(adaptive.counterTypeMetrics.typeAccuracy * 100).toFixed(1)}%`);
      console.log(`Hybrid:   ${(hybrid.counterTypeMetrics.typeAccuracy * 100).toFixed(1)}%`);
      console.log(`Merged:   ${(merged.counterTypeMetrics.typeAccuracy * 100).toFixed(1)}%`);

      expect(true).toBe(true);
    });
  });

  describe('Efficiency Analysis', () => {
    it('should compare accuracy per question', () => {
      const adaptive = runAdaptiveValidation();
      const hybrid = runHybridValidation();
      const merged = runMergedValidation();

      const adaptiveEfficiency = adaptive.combinedMetrics.typeAccuracy / adaptive.combinedMetrics.averageQuestions;
      const hybridEfficiency = hybrid.combinedMetrics.typeAccuracy / hybrid.combinedMetrics.averageQuestions;
      const mergedEfficiency = merged.combinedMetrics.typeAccuracy / merged.combinedMetrics.averageQuestions;

      console.log('\n=== EFFICIENCY (accuracy per question) ===');
      console.log(`Adaptive: ${(adaptiveEfficiency * 100).toFixed(2)}% per question (${adaptive.combinedMetrics.averageQuestions.toFixed(1)} avg)`);
      console.log(`Hybrid:   ${(hybridEfficiency * 100).toFixed(2)}% per question (${hybrid.combinedMetrics.averageQuestions.toFixed(1)} avg)`);
      console.log(`Merged:   ${(mergedEfficiency * 100).toFixed(2)}% per question (${merged.combinedMetrics.averageQuestions.toFixed(1)} avg)`);

      expect(true).toBe(true);
    });
  });
});

export { generateTripleComparisonReport, formatTripleComparisonReport, type TripleComparisonReport };
