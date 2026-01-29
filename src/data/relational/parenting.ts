import type { ParentingStyle } from '../../types';

export const parentingStyles: ParentingStyle[] = [
  {
    type: 1,
    styleName: 'The Teacher Parent',
    strengths: ['Consistent discipline', 'High standards', 'Teaching responsibility', 'Reliability'],
    challenges: ['Can be overly critical', 'May focus too much on correction', 'Difficulty relaxing'],
    strugglesWith: ['Mess and chaos', 'Disobedience', 'Inefficiency', 'Lack of effort'],
    growthTips: [
      'Focus on connection before correction',
      'Allow for mistakes without immediate judgment',
      'Make time for unstructured play',
      'Praise effort rather than just perfect results'
    ]
  },
  {
    type: 2,
    styleName: 'The Nurturing Parent',
    strengths: ['Warmth and affection', 'Attuned to needs', 'Supportive', 'Generous'],
    challenges: ['Can be intrusive', 'May struggle with boundaries', 'Can create dependency'],
    strugglesWith: ['Children becoming independent', 'Feeling unappreciated', 'Saying no'],
    growthTips: [
      'Encourage independence even when it feels like pulling away',
      'Set clear boundaries without guilt',
      'Take care of your own needs so you don\'t resent giving',
      'Allow children to solve their own problems'
    ]
  },
  {
    type: 3,
    styleName: 'The Role Model Parent',
    strengths: ['Encouraging success', 'Modeling hard work', 'Providing opportunities', 'Organized'],
    challenges: ['May pressure children to perform', 'Focus on image over feelings', 'Can be absent due to work'],
    strugglesWith: ['Lack of ambition in children', 'Failure or average performance', 'Emotional messiness'],
    growthTips: [
      'Value your child for who they are, not what they achieve',
      'Share your own failures and vulnerabilities',
      'Make time for "unproductive" connection',
      'Notice when you are "performing" parenting'
    ]
  },
  {
    type: 4,
    styleName: 'The Expressive Parent',
    strengths: ['Emotional depth', 'Creativity', 'Supportive of individuality', 'Open-minded'],
    challenges: ['Can be moody or withdrawn', 'May over-identify with child\'s pain', 'Inconsistent structure'],
    strugglesWith: ['Mundane routine', 'Feeling rejected by child', 'Child\'s conformity'],
    growthTips: [
      'Provide consistent structure even when you don\'t feel like it',
      'Separate your emotions from your child\'s experience',
      'Appreciate ordinary moments without needing drama',
      'Stay present when things are boring'
    ]
  },
  {
    type: 5,
    styleName: 'The Observant Parent',
    strengths: ['Respect for autonomy', 'Intellectual stimulation', 'Calm in crisis', 'Non-intrusive'],
    challenges: ['Can be emotionally detached', 'May withdraw from chaos', 'Difficulty with intense needs'],
    strugglesWith: ['Loud noise and chaos', 'Constant demands for attention', 'Emotional outbursts'],
    growthTips: [
      'Engage physically and emotionally, not just intellectually',
      'Schedule "floor time" to be fully present',
      'Express affection verbally and physically',
      'Explain your need for space without rejecting the child'
    ]
  },
  {
    type: 6,
    styleName: 'The Loyal Parent',
    strengths: ['Protective', 'Reliable', 'Prepared', 'Creates safety'],
    challenges: ['Can be overly anxious', 'May project fears onto child', 'Difficulty trusting outsiders'],
    strugglesWith: ['Risk-taking', 'Uncertainty about safety', 'Rebellion'],
    growthTips: [
      'Manage your own anxiety so it doesn\'t limit your child',
      'Encourage age-appropriate risks',
      'Focus on what is going right, not just potential dangers',
      'Trust your child\'s growing competence'
    ]
  },
  {
    type: 7,
    styleName: 'The Fun Parent',
    strengths: ['Enthusiasm', 'Adventure', 'Optimism', 'Open to new experiences'],
    challenges: ['May avoid difficult emotions', 'Can be inconsistent', 'Difficulty with routine discipline'],
    strugglesWith: ['Boredom and routine', 'Negative emotions', 'Long-term discipline'],
    growthTips: [
      'Stay present through the child\'s difficult emotions',
      'Follow through on discipline even when it\'s not fun',
      'Create and stick to stabilizing routines',
      'Slow down and just "be" with your child'
    ]
  },
  {
    type: 8,
    styleName: 'The Protective Parent',
    strengths: ['Advocacy', 'Strength', 'Encouraging resilience', 'Direct communication'],
    challenges: ['Can be controlling', 'May be too intense', 'Difficulty with vulnerability'],
    strugglesWith: ['Weakness or whining', 'Disrespect', 'Lack of toughness'],
    growthTips: [
      'Soften your approach; intensity can be scary',
      'Allow your child to see your vulnerable side',
      'Listen without immediately fixing or fighting',
      'Patience with your child\'s slower pace'
    ]
  },
  {
    type: 9,
    styleName: 'The Accepting Parent',
    strengths: ['Patience', 'Acceptance', 'Creating harmony', 'Good listener'],
    challenges: ['May avoid conflict', 'Can be disengaged', 'Difficulty enforcing rules'],
    strugglesWith: ['Conflict between siblings', 'Saying no', 'Demands for immediate action'],
    growthTips: [
      'Step up and take charge when necessary',
      'Address problems before they become big issues',
      'Stay present and engaged, even when tired',
      'Help children navigate conflict rather than just silencing it'
    ]
  }
];

export const getParentingStyle = (type: number): ParentingStyle | undefined => {
  return parentingStyles.find(p => p.type === type);
};
