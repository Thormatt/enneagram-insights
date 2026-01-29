
import type { LeadershipStyle } from '../../types';

export const leadershipStyles: LeadershipStyle[] = [
  {
    type: 1,
    styleName: 'The Principled Leader',
    strengths: ['Ethics', 'High Quality Standards', 'Organization', 'Lead by Example'],
    blindSpots: ['Micromanagement', 'Rigidity', 'Criticism', 'Difficulty Delegating'],
    communicationStyle: 'Clear, direct, and instruction-focused. Focuses on "should" and "right".',
    feedbackTriggers: ['Criticism of correctness', 'Being told to lower standards', 'Perceived irresponsibility'],
    idealEnvironment: ['Structured', 'Ethical', 'Quality-focused', 'Clear rules']
  },
  {
    type: 2,
    styleName: 'The Servant Leader',
    strengths: ['Empathy', 'Team Building', 'Supportiveness', 'Developing People'],
    blindSpots: ['Avoiding Conflict', 'Favoritism', 'Burnout', 'Difficulty giving negative feedback'],
    communicationStyle: 'Warm, encouraging, and personal. Focuses on relationships and needs.',
    feedbackTriggers: ['Being called unhelpful', 'Feeling unappreciated', 'Impersonal criticism'],
    idealEnvironment: ['Collaborative', 'Supportive', 'People-focused', 'Appreciative']
  },
  {
    type: 3,
    styleName: 'The Results Leader',
    strengths: ['Goal-Setting', 'Efficiency', 'Motivation', 'Adaptability'],
    blindSpots: ['Impatience', 'Overworking Team', 'Cutting Corners', 'Ignoring Feelings'],
    communicationStyle: 'Concise, efficient, and inspiring. Focuses on goals and wins.',
    feedbackTriggers: ['Failure', 'Inefficiency', 'Looking incompetent', 'Slow progress'],
    idealEnvironment: ['Fast-paced', 'Goal-oriented', 'Meritocratic', 'High-visibility']
  },
  {
    type: 4,
    styleName: 'The Visionary Leader',
    strengths: ['Creativity', 'Authenticity', 'Emotional Intelligence', 'Unique Perspective'],
    blindSpots: ['Moodiness', 'Inconsistency', 'Over-focus on aesthetics/feeling', 'Withdrawal'],
    communicationStyle: 'Expressive, personal, and sometimes metaphorical. Focuses on meaning.',
    feedbackTriggers: ['Being called ordinary', 'Misunderstanding of vision', 'Rejection of personal style'],
    idealEnvironment: ['Creative', 'Authentic', 'Flexible', 'Meaning-driven']
  },
  {
    type: 5,
    styleName: 'The Strategic Leader',
    strengths: ['Expertise', 'Objectivity', 'Long-term Planning', 'Problem Solving'],
    blindSpots: ['Detachment', 'Lack of Communication', 'Analysis Paralysis', 'Unavailable'],
    communicationStyle: 'Factual, brief, and objective. Focuses on information and logic.',
    feedbackTriggers: ['Emotional demands', 'Intrusion on time', 'Being questioned on facts'],
    idealEnvironment: ['Quiet', 'Autonomous', 'Intellectual', 'Low social demand']
  },
  {
    type: 6,
    styleName: 'The Loyal Leader',
    strengths: ['Risk Management', 'Team Loyalty', 'Troubleshooting', 'Preparedness'],
    blindSpots: ['Indecision', 'Worst-case thinking', 'Mistrust', 'Resistance to change'],
    communicationStyle: 'Questioning, detailed, and cautious. Focuses on risks and consensus.',
    feedbackTriggers: ['Uncertainty', 'Betrayal', 'Sudden changes', 'Lack of support'],
    idealEnvironment: ['Secure', 'Team-oriented', 'Transparent', 'Stable']
  },
  {
    type: 7,
    styleName: 'The Innovative Leader',
    strengths: ['Brainstorming', 'Optimism', 'Adaptability', 'Future Vision'],
    blindSpots: ['Lack of Follow-through', 'Avoiding Hard Problems', 'Impulsiveness', 'Scattered'],
    communicationStyle: 'Fast, enthusiastic, and idea-rich. Focuses on possibilities.',
    feedbackTriggers: ['Constraints', 'Negativity', 'Boredom', 'Being pinned down'],
    idealEnvironment: ['Dynamic', 'Flexible', 'Creative', 'Variety-rich']
  },
  {
    type: 8,
    styleName: 'The Decisive Leader',
    strengths: ['Decisiveness', 'Empowerment', 'Protection', 'Big Picture Vision'],
    blindSpots: ['Intimidation', 'Impatience', 'Unwillingness to Listen', 'Steamrolling'],
    communicationStyle: 'Direct, assertive, and authoritative. Focuses on action and truth.',
    feedbackTriggers: ['Weakness', 'Manipulation', 'Being controlled', 'Disloyalty'],
    idealEnvironment: ['Autonomous', 'Action-oriented', 'Direct', 'Challenging']
  },
  {
    type: 9,
    styleName: 'The Consensus Leader',
    strengths: ['Mediation', 'Inclusivity', 'Patience', 'Stability'],
    blindSpots: ['Procrastination', 'Conflict Avoidance', 'Indecision', 'Passive-Aggression'],
    communicationStyle: 'Gentle, inclusive, and listening-oriented. Focuses on harmony.',
    feedbackTriggers: ['Conflict', 'Pressure', 'Being forced to decide', 'Disruption'],
    idealEnvironment: ['Harmonious', 'Steady', 'Collaborative', 'Low-pressure']
  }
];

export const getLeadershipStyle = (type: number): LeadershipStyle | undefined => {
  return leadershipStyles.find(l => l.type === type);
};
