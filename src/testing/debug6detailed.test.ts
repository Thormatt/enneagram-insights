import { describe, it, expect } from 'vitest';
import { typeAgents } from './agents/typeAgents';
import {
  createMergedInitialState,
  startMergedQuiz,
  getCurrentMergedQuestion,
  processMergedScenarioAnswer,
  processMergedLikertAnswer,
} from '../components/Quiz/engine/mergedEngine';
import type { ScenarioQuestion } from '../components/Quiz/questionPool/scenarioQuestions';
import type { TypeNumber } from '../types';

const typeToCenter: Record<TypeNumber, 'gut' | 'heart' | 'head'> = {
  8: 'gut', 9: 'gut', 1: 'gut',
  2: 'heart', 3: 'heart', 4: 'heart',
  5: 'head', 6: 'head', 7: 'head',
};

describe('Debug Type 6 Detailed', () => {
  it('should trace Type 6 agent scoring step by step', () => {
    const agent = typeAgents[6];
    console.log('\n=== TYPE 6 AGENT PROFILE ===');
    console.log('securitySeeking:', agent.responsePatterns.securitySeeking);
    console.log('knowledgeAccumulation:', agent.responsePatterns.knowledgeAccumulation);
    console.log('centerResonance.head:', agent.centerResonance.head);

    let state = createMergedInitialState();
    state = startMergedQuiz(state);

    console.log('\n=== INITIAL STATE ===');
    console.log('Stage:', state.stage);
    console.log('Type probabilities:', Object.entries(state.typeProbabilities.probabilities)
      .map(([t, p]) => `${t}:${(p * 100).toFixed(1)}%`).join(', '));

    // Process scenarios
    console.log('\n=== PROCESSING SCENARIOS ===');
    let questionNum = 0;
    while (state.stage === 'screening' && questionNum < 10) {
      questionNum++;
      const current = getCurrentMergedQuestion(state);
      if (!current) break;

      const scenario = current.question as ScenarioQuestion;
      console.log(`\nScenario ${questionNum}: ${scenario.id}`);

      // Simulate ranking - Type 6 should prefer head responses
      const rankings: Record<string, number> = {};
      const responseScores: Record<string, number> = {};

      for (const response of scenario.responses) {
        let score = 0;
        const agentCenter = typeToCenter[agent.type];

        if (response.center === agentCenter) {
          score = agent.centerResonance[agentCenter] * 2;
        }

        if (response.typeScores) {
          const directScore = response.typeScores[agent.type] || 0;
          score += directScore * 3 * agent.responsePatterns.securitySeeking;
        }

        responseScores[response.id] = score;
      }

      const sorted = Object.entries(responseScores)
        .sort((a, b) => b[1] - a[1])
        .map(([id]) => id);

      sorted.forEach((id, index) => {
        rankings[id] = index + 1;
      });

      console.log('Response scores:', responseScores);
      console.log('Rankings:', rankings);

      state = processMergedScenarioAnswer(state, scenario.id, rankings);

      console.log('After scenario - Raw scores:', state.typeProbabilities.rawScores);
      console.log('After scenario - Top 3:', Object.entries(state.typeProbabilities.probabilities)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([t, p]) => `${t}:${(p * 100).toFixed(1)}%`).join(', '));
    }

    // Process some refinement questions
    console.log('\n=== PROCESSING REFINEMENT QUESTIONS ===');
    let refinementNum = 0;
    while (state.stage === 'refinement' && refinementNum < 10) {
      refinementNum++;
      const current = getCurrentMergedQuestion(state);
      if (!current || current.type !== 'likert') break;

      const question = current.question as { id: string; text?: string; typeScores?: Partial<Record<TypeNumber, number>> };
      console.log(`\nRefinement ${refinementNum}: ${question.id}`);
      if (question.text) console.log('Text:', question.text.substring(0, 60) + '...');
      console.log('Type scores:', question.typeScores);

      // Simulate answer
      const typeScores = question.typeScores || {};
      const agentTypeScore = typeScores[agent.type] || 0;
      let answer: number;

      if (agentTypeScore >= 3) {
        answer = 5;
      } else if (agentTypeScore >= 2) {
        answer = 4;
      } else if (agentTypeScore >= 1) {
        answer = 4;
      } else if (agentTypeScore <= -2) {
        answer = 2;
      } else if (agentTypeScore <= -1) {
        answer = 2;
      } else {
        answer = 3;
      }

      console.log(`Agent type score: ${agentTypeScore}, Answer: ${answer}`);

      state = processMergedLikertAnswer(state, question.id, answer);

      console.log('After question - Top 3:', Object.entries(state.typeProbabilities.probabilities)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([t, p]) => `${t}:${(p * 100).toFixed(1)}%`).join(', '));
      console.log('Raw scores 5 vs 6:', `5=${state.typeProbabilities.rawScores[5].toFixed(2)}, 6=${state.typeProbabilities.rawScores[6].toFixed(2)}`);
    }

    expect(true).toBe(true);
  });
});
