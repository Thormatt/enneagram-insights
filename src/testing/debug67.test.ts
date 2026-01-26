import { describe, it, expect } from 'vitest';
import {
  runMergedValidation,
  simulateMergedQuiz,
} from './simulator/mergedQuizSimulator';
import { getAllBaseAgents, getAllWingAgents, getCounterTypeAgents } from './agents/typeAgents';
import type { TypeNumber } from '../types';

describe('Debug Type 6 and 7', () => {
  it('should show confusion patterns for types 6 and 7', () => {
    const validation = runMergedValidation();

    console.log('\n=== MERGED QUIZ CONFUSION MATRIX ===');
    console.log('Rows = Actual Type, Columns = Predicted Type');
    console.log('     1  2  3  4  5  6  7  8  9');

    for (let i = 1; i <= 9; i++) {
      let row = `  ${i}  `;
      for (let j = 1; j <= 9; j++) {
        const count = validation.combinedMetrics.confusionMatrix[i as TypeNumber][j as TypeNumber];
        row += count.toString().padStart(2) + ' ';
      }
      console.log(row);
    }

    console.log('\n=== TYPE 6 DETAILED BREAKDOWN ===');
    const type6Data = validation.combinedMetrics.typeBreakdown[6];
    console.log(`Accuracy: ${(type6Data.accuracy * 100).toFixed(1)}%`);
    console.log(`Correct: ${type6Data.correct}/${type6Data.total}`);
    console.log(`Common mistype: ${type6Data.commonMistype}`);

    console.log('\n=== TYPE 7 DETAILED BREAKDOWN ===');
    const type7Data = validation.combinedMetrics.typeBreakdown[7];
    console.log(`Accuracy: ${(type7Data.accuracy * 100).toFixed(1)}%`);
    console.log(`Correct: ${type7Data.correct}/${type7Data.total}`);
    console.log(`Common mistype: ${type7Data.commonMistype}`);

    // Run individual agents for type 6 and 7 to see patterns
    console.log('\n=== INDIVIDUAL TYPE 6 AGENT RESULTS ===');
    const baseAgents = getAllBaseAgents();
    const wingAgents = getAllWingAgents();
    const counterAgents = getCounterTypeAgents();

    const type6Agents = [
      ...baseAgents.filter(a => a.type === 6),
      ...wingAgents.filter(a => a.type === 6),
      ...counterAgents.filter(a => a.type === 6),
    ];

    for (const agent of type6Agents) {
      const result = simulateMergedQuiz(agent);
      const correct = result.correctType ? '✅' : '❌';
      const name = 'variant' in agent ? agent.variant : `Type ${agent.type}`;
      console.log(`${correct} ${name} → predicted ${result.results.primaryType} (conf: ${result.results.typeConfidence}%)`);
      if (!result.correctType) {
        console.log(`   Top 3: ${result.results.topThreeTypes.map(t => `${t.type}(${(t.probability * 100).toFixed(0)}%)`).join(', ')}`);
      }
    }

    console.log('\n=== INDIVIDUAL TYPE 7 AGENT RESULTS ===');
    const type7Agents = [
      ...baseAgents.filter(a => a.type === 7),
      ...wingAgents.filter(a => a.type === 7),
      ...counterAgents.filter(a => a.type === 7),
    ];

    for (const agent of type7Agents) {
      const result = simulateMergedQuiz(agent);
      const correct = result.correctType ? '✅' : '❌';
      const name = 'variant' in agent ? agent.variant : `Type ${agent.type}`;
      console.log(`${correct} ${name} → predicted ${result.results.primaryType} (conf: ${result.results.typeConfidence}%)`);
      if (!result.correctType) {
        console.log(`   Top 3: ${result.results.topThreeTypes.map(t => `${t.type}(${(t.probability * 100).toFixed(0)}%)`).join(', ')}`);
      }
    }

    expect(true).toBe(true);
  });
});
