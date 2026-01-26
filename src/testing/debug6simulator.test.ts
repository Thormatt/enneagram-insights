import { describe, it, expect } from 'vitest';
import { typeAgents } from './agents/typeAgents';
import type { AgentPersona } from './agents/typeAgents';
import {
  createMergedInitialState,
  startMergedQuiz,
  getCurrentMergedQuestion,
  processMergedScenarioAnswer,
  processMergedLikertAnswer,
  processMergedForcedChoiceAnswer,
  processMergedWingAnswer,
  processMergedInstinctAnswer,
  processMergedHealthAnswer,
} from '../components/Quiz/engine/mergedEngine';
import type { ScenarioQuestion } from '../components/Quiz/questionPool/scenarioQuestions';
import type { ForcedChoicePair } from '../components/Quiz/questionPool/forcedChoiceQuestions';
import type { InstinctParagraphSet } from '../components/Quiz/questionPool/instinctParagraphs';
import type { HealthQuestion } from '../components/Quiz/questionPool/healthLevelQuestions';
import type { TypeNumber, InstinctType } from '../types';

const typeToCenter: Record<TypeNumber, 'gut' | 'heart' | 'head'> = {
  8: 'gut', 9: 'gut', 1: 'gut',
  2: 'heart', 3: 'heart', 4: 'heart',
  5: 'head', 6: 'head', 7: 'head',
};

const typeKeyMap: Record<TypeNumber, keyof AgentPersona['responsePatterns']> = {
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

// Copy the exact simulateLikertAnswer from the simulator to trace it
function simulateLikertAnswerWithDebug(
  agent: AgentPersona,
  question: { id: string; typeScores?: Partial<Record<TypeNumber, number>>; direction?: { positive: TypeNumber; negative: TypeNumber } }
): { answer: number; debug: string } {
  let typeScores: Partial<Record<TypeNumber, number>> = {};

  if ('typeScores' in question && question.typeScores) {
    typeScores = question.typeScores;
  } else if ('direction' in question && question.direction) {
    typeScores = {
      [question.direction.positive]: 2,
      [question.direction.negative]: -2,
    };
  }

  const agentTypeScore = typeScores[agent.type] || 0;
  const agentResonance = agent.responsePatterns[typeKeyMap[agent.type]];
  const agentCenter = typeToCenter[agent.type];

  let centerScore = 0;
  let centerTypeCount = 0;
  for (const [type, score] of Object.entries(typeScores)) {
    const typeNum = Number(type) as TypeNumber;
    if (typeToCenter[typeNum] === agentCenter) {
      centerScore += score || 0;
      centerTypeCount++;
    }
  }
  const avgCenterScore = centerTypeCount > 0 ? centerScore / centerTypeCount : 0;

  const wingPairs: Record<TypeNumber, [TypeNumber, TypeNumber]> = {
    1: [9, 2], 2: [1, 3], 3: [2, 4], 4: [3, 5], 5: [4, 6],
    6: [5, 7], 7: [6, 8], 8: [7, 9], 9: [8, 1],
  };
  const [wingA, wingB] = wingPairs[agent.type];
  const wingAScore = typeScores[wingA] || 0;
  const wingBScore = typeScores[wingB] || 0;
  const avgWingScore = (wingAScore + wingBScore) / 2;

  let baseAnswer: number;
  let reason: string;

  if (agentTypeScore >= 3) {
    baseAnswer = 4.5 + agentResonance * 0.3;
    reason = `direct>=3: 4.5+${agentResonance.toFixed(2)}*0.3`;
  } else if (agentTypeScore >= 2) {
    baseAnswer = 4 + agentResonance * 0.4;
    reason = `direct>=2: 4+${agentResonance.toFixed(2)}*0.4`;
  } else if (agentTypeScore >= 1) {
    baseAnswer = 3.5 + agentResonance * 0.4;
    reason = `direct>=1: 3.5+${agentResonance.toFixed(2)}*0.4`;
  } else if (agentTypeScore <= -3) {
    baseAnswer = 1.5 - agentResonance * 0.3;
    reason = `direct<=-3: 1.5-${agentResonance.toFixed(2)}*0.3`;
  } else if (agentTypeScore <= -2) {
    baseAnswer = 2 - agentResonance * 0.3;
    reason = `direct<=-2: 2-${agentResonance.toFixed(2)}*0.3`;
  } else if (agentTypeScore <= -1) {
    baseAnswer = 2.5 - agentResonance * 0.2;
    reason = `direct<=-1: 2.5-${agentResonance.toFixed(2)}*0.2`;
  } else {
    const combinedScore = avgCenterScore * 0.7 + avgWingScore * 0.3;
    reason = `neutral: centerAvg=${avgCenterScore.toFixed(2)}, wingAvg=${avgWingScore.toFixed(2)}, combined=${combinedScore.toFixed(2)}`;

    if (combinedScore >= 2) {
      baseAnswer = 3.8 + agent.centerResonance[agentCenter] * 0.4;
    } else if (combinedScore >= 1) {
      baseAnswer = 3.4 + agent.centerResonance[agentCenter] * 0.3;
    } else if (combinedScore <= -2) {
      baseAnswer = 2.2 - agent.centerResonance[agentCenter] * 0.3;
    } else if (combinedScore <= -1) {
      baseAnswer = 2.6 - agent.centerResonance[agentCenter] * 0.2;
    } else {
      baseAnswer = 3 + avgCenterScore * agent.centerResonance[agentCenter] * 0.3;
    }
  }

  // No random noise for debugging
  const finalAnswer = Math.max(1, Math.min(5, Math.round(baseAnswer)));
  return {
    answer: finalAnswer,
    debug: `typeScore=${agentTypeScore}, ${reason} → base=${baseAnswer.toFixed(2)} → ${finalAnswer}`
  };
}

describe('Debug Type 6 Simulator', () => {
  it('should trace full quiz simulation for Type 6', () => {
    const agent = typeAgents[6];
    console.log('\n=== SIMULATING TYPE 6 THROUGH FULL QUIZ ===\n');

    let state = createMergedInitialState();
    state = startMergedQuiz(state);

    const maxIterations = 100;
    let iterations = 0;
    let questionNum = 0;

    while (state.stage !== 'results' && iterations < maxIterations) {
      iterations++;
      const current = getCurrentMergedQuestion(state);
      if (!current) break;

      questionNum++;

      switch (current.type) {
        case 'scenario': {
          // Use simplified scenario ranking
          const scenario = current.question as ScenarioQuestion;
          const rankings: Record<string, number> = {};
          let rank = 1;
          for (const response of scenario.responses) {
            if (response.center === 'head') {
              rankings[response.id] = 1;
            } else {
              rankings[response.id] = ++rank;
            }
          }
          // Fix rankings
          const assigned = new Set(Object.values(rankings));
          let nextRank = 1;
          for (const response of scenario.responses) {
            if (!rankings[response.id]) {
              while (assigned.has(nextRank)) nextRank++;
              rankings[response.id] = nextRank;
              assigned.add(nextRank);
            }
          }

          state = processMergedScenarioAnswer(state, scenario.id, rankings);

          if (questionNum <= 5 || state.stage !== 'screening') {
            console.log(`Q${questionNum} [scenario] ${scenario.id}`);
            console.log(`  Top 3: ${Object.entries(state.typeProbabilities.probabilities)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3)
              .map(([t, p]) => `${t}:${(p * 100).toFixed(1)}%`).join(', ')}`);
          }
          break;
        }

        case 'likert': {
          const likertQ = current.question as { id: string; text?: string; typeScores?: Partial<Record<TypeNumber, number>> };
          const result = simulateLikertAnswerWithDebug(agent, likertQ);

          state = processMergedLikertAnswer(state, likertQ.id, result.answer);

          if (questionNum <= 20) {
            const type5Score = state.typeProbabilities.rawScores[5];
            const type6Score = state.typeProbabilities.rawScores[6];
            console.log(`Q${questionNum} [likert] ${likertQ.id}`);
            console.log(`  Scores: ${JSON.stringify(likertQ.typeScores)}`);
            console.log(`  Answer: ${result.debug}`);
            console.log(`  Raw: 5=${type5Score.toFixed(1)}, 6=${type6Score.toFixed(1)}`);
            console.log(`  Top 3: ${Object.entries(state.typeProbabilities.probabilities)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3)
              .map(([t, p]) => `${t}:${(p * 100).toFixed(1)}%`).join(', ')}`);
          }
          break;
        }

        case 'forced-choice': {
          const fcQ = current.question as ForcedChoicePair;
          // Type 6 agent should choose Type 6 if available
          const chosenType = fcQ.optionA.type === 6 ? 6 :
                            fcQ.optionB.type === 6 ? 6 :
                            fcQ.optionA.type;
          state = processMergedForcedChoiceAnswer(state, fcQ.id, chosenType);
          console.log(`Q${questionNum} [forced-choice] ${fcQ.id} → chose ${chosenType}`);
          break;
        }

        case 'wing': {
          const wingQ = current.question as { id: string };
          state = processMergedWingAnswer(state, wingQ.id, 3);
          break;
        }

        case 'instinct-paragraph': {
          const instinctSet = current.question as InstinctParagraphSet;
          const rankings: Record<InstinctType, number> = { sp: 1, so: 2, sx: 3 };
          state = processMergedInstinctAnswer(state, instinctSet.id, rankings);
          break;
        }

        case 'health': {
          const healthQ = current.question as HealthQuestion;
          state = processMergedHealthAnswer(state, healthQ.id, 3);
          break;
        }
      }
    }

    console.log('\n=== FINAL RESULTS ===');
    if (state.results) {
      console.log(`Primary type: ${state.results.primaryType}`);
      console.log(`Confidence: ${state.results.typeConfidence}%`);
      console.log(`Top 3: ${state.results.topThreeTypes.map(t => `${t.type}:${(t.probability * 100).toFixed(1)}%`).join(', ')}`);
      console.log(`Questions answered: ${state.results.questionsAnswered}`);
    }

    expect(state.results?.primaryType).toBe(6);
  });
});
