import type { TypeNumber, InstinctType } from '../../types';

export interface QuizQuestion {
  id: string;
  text: string;
  category: 'fear' | 'desire' | 'behavior' | 'motivation';
}

export interface TypeQuestion extends QuizQuestion {
  typeScores: Partial<Record<TypeNumber, number>>;
}

export interface WingQuestion {
  id: string;
  text: string;
  forType: TypeNumber;
  wingA: { wing: TypeNumber; score: number };
  wingB: { wing: TypeNumber; score: number };
}

export interface InstinctQuestion {
  id: string;
  text: string;
  instinctScores: Record<InstinctType, number>;
}

// Core type identification questions - based on fears and desires
export const coreTypeQuestions: TypeQuestion[] = [
  // Fear-based questions
  {
    id: 'fear-1',
    text: 'I often worry about being seen as corrupt, evil, or defective.',
    category: 'fear',
    typeScores: { 1: 3, 4: 1 }
  },
  {
    id: 'fear-2',
    text: 'My biggest fear is being unwanted or unloved by others.',
    category: 'fear',
    typeScores: { 2: 3, 4: 1 }
  },
  {
    id: 'fear-3',
    text: 'I fear being worthless or without inherent value.',
    category: 'fear',
    typeScores: { 3: 3, 2: 1 }
  },
  {
    id: 'fear-4',
    text: 'I\'m afraid of having no identity or personal significance.',
    category: 'fear',
    typeScores: { 4: 3, 3: 1 }
  },
  {
    id: 'fear-5',
    text: 'I fear being useless, incapable, or overwhelmed by the world.',
    category: 'fear',
    typeScores: { 5: 3, 6: 1 }
  },
  {
    id: 'fear-6',
    text: 'I often worry about being without support or guidance.',
    category: 'fear',
    typeScores: { 6: 3, 9: 1 }
  },
  {
    id: 'fear-7',
    text: 'I fear being deprived, trapped in pain, or missing out.',
    category: 'fear',
    typeScores: { 7: 3, 4: 1 }
  },
  {
    id: 'fear-8',
    text: 'I\'m afraid of being harmed, controlled, or violated by others.',
    category: 'fear',
    typeScores: { 8: 3, 6: 1 }
  },
  {
    id: 'fear-9',
    text: 'I fear loss, fragmentation, and separation from others.',
    category: 'fear',
    typeScores: { 9: 3, 6: 1 }
  },

  // Desire-based questions
  {
    id: 'desire-1',
    text: 'I deeply want to be good, right, and have integrity.',
    category: 'desire',
    typeScores: { 1: 3, 6: 1 }
  },
  {
    id: 'desire-2',
    text: 'I want to feel loved and to know I matter to others.',
    category: 'desire',
    typeScores: { 2: 3, 9: 1 }
  },
  {
    id: 'desire-3',
    text: 'I want to feel valuable, successful, and worthwhile.',
    category: 'desire',
    typeScores: { 3: 3, 8: 1 }
  },
  {
    id: 'desire-4',
    text: 'I want to find my true self and express my uniqueness.',
    category: 'desire',
    typeScores: { 4: 3, 7: 1 }
  },
  {
    id: 'desire-5',
    text: 'I want to be capable, competent, and understand the world.',
    category: 'desire',
    typeScores: { 5: 3, 1: 1 }
  },
  {
    id: 'desire-6',
    text: 'I want to have security, support, and certainty.',
    category: 'desire',
    typeScores: { 6: 3, 9: 1 }
  },
  {
    id: 'desire-7',
    text: 'I want to be happy, satisfied, and free to pursue exciting experiences.',
    category: 'desire',
    typeScores: { 7: 3, 3: 1 }
  },
  {
    id: 'desire-8',
    text: 'I want to protect myself and be in control of my own life.',
    category: 'desire',
    typeScores: { 8: 3, 1: 1 }
  },
  {
    id: 'desire-9',
    text: 'I want inner peace, harmony, and connection with others.',
    category: 'desire',
    typeScores: { 9: 3, 2: 1 }
  },

  // Behavior-based questions
  {
    id: 'behavior-1',
    text: 'I notice mistakes and imperfections that others often miss.',
    category: 'behavior',
    typeScores: { 1: 2, 5: 1, 6: 1 }
  },
  {
    id: 'behavior-2',
    text: 'I often anticipate what others need before they ask.',
    category: 'behavior',
    typeScores: { 2: 2, 9: 1, 6: 1 }
  },
  {
    id: 'behavior-3',
    text: 'I adapt my presentation based on my audience.',
    category: 'behavior',
    typeScores: { 3: 2, 2: 1, 7: 1 }
  },
  {
    id: 'behavior-4',
    text: 'I often feel like an outsider, different from others.',
    category: 'behavior',
    typeScores: { 4: 2, 5: 1 }
  },
  {
    id: 'behavior-5',
    text: 'I need time alone to recharge and process information.',
    category: 'behavior',
    typeScores: { 5: 2, 4: 1, 9: 1 }
  },
  {
    id: 'behavior-6',
    text: 'I often question whether I can trust people or situations.',
    category: 'behavior',
    typeScores: { 6: 2, 5: 1, 8: 1 }
  },
  {
    id: 'behavior-7',
    text: 'I quickly move from one exciting idea or plan to another.',
    category: 'behavior',
    typeScores: { 7: 2, 3: 1 }
  },
  {
    id: 'behavior-8',
    text: 'I take charge in situations and speak up for what I believe.',
    category: 'behavior',
    typeScores: { 8: 2, 3: 1, 1: 1 }
  },
  {
    id: 'behavior-9',
    text: 'I tend to go along with others to avoid conflict.',
    category: 'behavior',
    typeScores: { 9: 2, 2: 1, 6: 1 }
  },

  // Motivation questions
  {
    id: 'motivation-1',
    text: 'I am motivated by the desire to improve things and make them right.',
    category: 'motivation',
    typeScores: { 1: 2, 3: 1 }
  },
  {
    id: 'motivation-2',
    text: 'I am motivated by being helpful and indispensable to others.',
    category: 'motivation',
    typeScores: { 2: 2, 6: 1 }
  },
  {
    id: 'motivation-3',
    text: 'I am motivated by achievement, success, and recognition.',
    category: 'motivation',
    typeScores: { 3: 2, 8: 1 }
  },
  {
    id: 'motivation-4',
    text: 'I am motivated by expressing my authentic self and deep emotions.',
    category: 'motivation',
    typeScores: { 4: 2, 2: 1 }
  },
  {
    id: 'motivation-5',
    text: 'I am motivated by understanding and accumulating knowledge.',
    category: 'motivation',
    typeScores: { 5: 2, 1: 1 }
  },
  {
    id: 'motivation-6',
    text: 'I am motivated by creating security and being prepared.',
    category: 'motivation',
    typeScores: { 6: 2, 1: 1 }
  },
  {
    id: 'motivation-7',
    text: 'I am motivated by new experiences and keeping options open.',
    category: 'motivation',
    typeScores: { 7: 2, 4: 1 }
  },
  {
    id: 'motivation-8',
    text: 'I am motivated by being strong and protecting the vulnerable.',
    category: 'motivation',
    typeScores: { 8: 2, 2: 1 }
  },
  {
    id: 'motivation-9',
    text: 'I am motivated by maintaining peace and avoiding disruption.',
    category: 'motivation',
    typeScores: { 9: 2, 7: 1 }
  }
];

// Wing questions - presented after core type is determined
export const wingQuestions: Record<TypeNumber, WingQuestion[]> = {
  1: [
    {
      id: '1-wing-1',
      text: 'When stressed, I tend to become more idealistic and withdrawn rather than more critical and helpful.',
      forType: 1,
      wingA: { wing: 9, score: 2 },
      wingB: { wing: 2, score: 0 }
    },
    {
      id: '1-wing-2',
      text: 'I often feel compelled to help others improve, not just point out what\'s wrong.',
      forType: 1,
      wingA: { wing: 9, score: 0 },
      wingB: { wing: 2, score: 2 }
    },
    {
      id: '1-wing-3',
      text: 'I prefer working behind the scenes rather than directly confronting people.',
      forType: 1,
      wingA: { wing: 9, score: 2 },
      wingB: { wing: 2, score: 0 }
    }
  ],
  2: [
    {
      id: '2-wing-1',
      text: 'I have strong principles about the right way to help others.',
      forType: 2,
      wingA: { wing: 1, score: 2 },
      wingB: { wing: 3, score: 0 }
    },
    {
      id: '2-wing-2',
      text: 'I enjoy being seen as successful and attractive when I help.',
      forType: 2,
      wingA: { wing: 1, score: 0 },
      wingB: { wing: 3, score: 2 }
    },
    {
      id: '2-wing-3',
      text: 'I can be critical of myself and others when help isn\'t given properly.',
      forType: 2,
      wingA: { wing: 1, score: 2 },
      wingB: { wing: 3, score: 0 }
    }
  ],
  3: [
    {
      id: '3-wing-1',
      text: 'I often use charm and warmth to connect with others.',
      forType: 3,
      wingA: { wing: 2, score: 2 },
      wingB: { wing: 4, score: 0 }
    },
    {
      id: '3-wing-2',
      text: 'I have a creative, artistic side that I value.',
      forType: 3,
      wingA: { wing: 2, score: 0 },
      wingB: { wing: 4, score: 2 }
    },
    {
      id: '3-wing-3',
      text: 'Success means being admired and popular with others.',
      forType: 3,
      wingA: { wing: 2, score: 2 },
      wingB: { wing: 4, score: 0 }
    }
  ],
  4: [
    {
      id: '4-wing-1',
      text: 'I often achieve success through my creative work.',
      forType: 4,
      wingA: { wing: 3, score: 2 },
      wingB: { wing: 5, score: 0 }
    },
    {
      id: '4-wing-2',
      text: 'I prefer intellectual depth and solitude to social recognition.',
      forType: 4,
      wingA: { wing: 3, score: 0 },
      wingB: { wing: 5, score: 2 }
    },
    {
      id: '4-wing-3',
      text: 'I want my unique vision to be recognized and appreciated.',
      forType: 4,
      wingA: { wing: 3, score: 2 },
      wingB: { wing: 5, score: 0 }
    }
  ],
  5: [
    {
      id: '5-wing-1',
      text: 'I have a rich inner emotional life that I keep private.',
      forType: 5,
      wingA: { wing: 4, score: 2 },
      wingB: { wing: 6, score: 0 }
    },
    {
      id: '5-wing-2',
      text: 'I like to solve practical problems and be useful to my group.',
      forType: 5,
      wingA: { wing: 4, score: 0 },
      wingB: { wing: 6, score: 2 }
    },
    {
      id: '5-wing-3',
      text: 'I am drawn to unconventional ideas and artistic expression.',
      forType: 5,
      wingA: { wing: 4, score: 2 },
      wingB: { wing: 6, score: 0 }
    }
  ],
  6: [
    {
      id: '6-wing-1',
      text: 'I tend to be more intellectual and reserved than warm and outgoing.',
      forType: 6,
      wingA: { wing: 5, score: 2 },
      wingB: { wing: 7, score: 0 }
    },
    {
      id: '6-wing-2',
      text: 'I use humor and positivity to cope with my anxieties.',
      forType: 6,
      wingA: { wing: 5, score: 0 },
      wingB: { wing: 7, score: 2 }
    },
    {
      id: '6-wing-3',
      text: 'I prefer to analyze situations carefully before taking action.',
      forType: 6,
      wingA: { wing: 5, score: 2 },
      wingB: { wing: 7, score: 0 }
    }
  ],
  7: [
    {
      id: '7-wing-1',
      text: 'I enjoy being part of a group and value loyalty to friends.',
      forType: 7,
      wingA: { wing: 6, score: 2 },
      wingB: { wing: 8, score: 0 }
    },
    {
      id: '7-wing-2',
      text: 'I am more assertive and focused on getting what I want.',
      forType: 7,
      wingA: { wing: 6, score: 0 },
      wingB: { wing: 8, score: 2 }
    },
    {
      id: '7-wing-3',
      text: 'I sometimes struggle with commitment and anxiety about decisions.',
      forType: 7,
      wingA: { wing: 6, score: 2 },
      wingB: { wing: 8, score: 0 }
    }
  ],
  8: [
    {
      id: '8-wing-1',
      text: 'I enjoy excitement, adventure, and taking risks.',
      forType: 8,
      wingA: { wing: 7, score: 2 },
      wingB: { wing: 9, score: 0 }
    },
    {
      id: '8-wing-2',
      text: 'I prefer a steady, grounded approach over constant activity.',
      forType: 8,
      wingA: { wing: 7, score: 0 },
      wingB: { wing: 9, score: 2 }
    },
    {
      id: '8-wing-3',
      text: 'I can be patient and receptive when the situation calls for it.',
      forType: 8,
      wingA: { wing: 7, score: 0 },
      wingB: { wing: 9, score: 2 }
    }
  ],
  9: [
    {
      id: '9-wing-1',
      text: 'I can be assertive and forceful when protecting others.',
      forType: 9,
      wingA: { wing: 8, score: 2 },
      wingB: { wing: 1, score: 0 }
    },
    {
      id: '9-wing-2',
      text: 'I have strong ideals about how things should be done.',
      forType: 9,
      wingA: { wing: 8, score: 0 },
      wingB: { wing: 1, score: 2 }
    },
    {
      id: '9-wing-3',
      text: 'I prefer to keep the peace rather than confront problems directly.',
      forType: 9,
      wingA: { wing: 8, score: 0 },
      wingB: { wing: 1, score: 1 }
    }
  ]
};

// Instinct questions
export const instinctQuestions: InstinctQuestion[] = [
  {
    id: 'inst-1',
    text: 'My first concern is usually my physical comfort, health, and security.',
    instinctScores: { sp: 3, so: 0, sx: 0 }
  },
  {
    id: 'inst-2',
    text: 'I think a lot about my place in groups and how I\'m perceived socially.',
    instinctScores: { sp: 0, so: 3, sx: 0 }
  },
  {
    id: 'inst-3',
    text: 'I seek intense, intimate connections with specific individuals.',
    instinctScores: { sp: 0, so: 0, sx: 3 }
  },
  {
    id: 'inst-4',
    text: 'I am very aware of my surroundings and potential threats to my wellbeing.',
    instinctScores: { sp: 2, so: 0, sx: 1 }
  },
  {
    id: 'inst-5',
    text: 'I naturally pay attention to social hierarchies and group dynamics.',
    instinctScores: { sp: 0, so: 2, sx: 1 }
  },
  {
    id: 'inst-6',
    text: 'Chemistry and attraction are very important to me in relationships.',
    instinctScores: { sp: 0, so: 1, sx: 2 }
  },
  {
    id: 'inst-7',
    text: 'I prioritize building a comfortable, stable home environment.',
    instinctScores: { sp: 3, so: 0, sx: 0 }
  },
  {
    id: 'inst-8',
    text: 'Being part of communities and causes gives my life meaning.',
    instinctScores: { sp: 0, so: 3, sx: 0 }
  },
  {
    id: 'inst-9',
    text: 'I crave experiences that feel alive, vital, and transformative.',
    instinctScores: { sp: 0, so: 0, sx: 3 }
  },
  {
    id: 'inst-10',
    text: 'I am careful about managing my resources (money, energy, time).',
    instinctScores: { sp: 2, so: 1, sx: 0 }
  },
  {
    id: 'inst-11',
    text: 'I care about my reputation and how others see me in social contexts.',
    instinctScores: { sp: 0, so: 2, sx: 1 }
  },
  {
    id: 'inst-12',
    text: 'I would rather have one deep relationship than many casual ones.',
    instinctScores: { sp: 1, so: 0, sx: 2 }
  },
  {
    id: 'inst-13',
    text: 'Health and self-care routines are important priorities for me.',
    instinctScores: { sp: 3, so: 0, sx: 0 }
  },
  {
    id: 'inst-14',
    text: 'I enjoy networking and connecting people with each other.',
    instinctScores: { sp: 0, so: 3, sx: 0 }
  },
  {
    id: 'inst-15',
    text: 'I have strong magnetism and can be very charismatic one-on-one.',
    instinctScores: { sp: 0, so: 0, sx: 3 }
  }
];

// Calculate scores from answers
export const calculateTypeScores = (
  answers: Record<string, number>
): Record<TypeNumber, number> => {
  const scores: Record<TypeNumber, number> = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
  };

  coreTypeQuestions.forEach(question => {
    const answer = answers[question.id] || 0;
    Object.entries(question.typeScores).forEach(([type, score]) => {
      scores[Number(type) as TypeNumber] += score * answer;
    });
  });

  return scores;
};

export const calculateWingScores = (
  coreType: TypeNumber,
  answers: Record<string, number>
): { wingA: number; wingB: number } => {
  const questions = wingQuestions[coreType] || [];
  let wingAScore = 0;
  let wingBScore = 0;

  questions.forEach(question => {
    const answer = answers[question.id] || 0;
    wingAScore += question.wingA.score * answer;
    wingBScore += question.wingB.score * answer;
  });

  return { wingA: wingAScore, wingB: wingBScore };
};

export const calculateInstinctScores = (
  answers: Record<string, number>
): Record<InstinctType, number> => {
  const scores: Record<InstinctType, number> = { sp: 0, so: 0, sx: 0 };

  instinctQuestions.forEach(question => {
    const answer = answers[question.id] || 0;
    scores.sp += question.instinctScores.sp * answer;
    scores.so += question.instinctScores.so * answer;
    scores.sx += question.instinctScores.sx * answer;
  });

  return scores;
};

export const getTopType = (scores: Record<TypeNumber, number>): TypeNumber => {
  let maxType: TypeNumber = 1;
  let maxScore = scores[1];

  (Object.entries(scores) as [string, number][]).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = Number(type) as TypeNumber;
    }
  });

  return maxType;
};

export const getInstinctStack = (
  scores: Record<InstinctType, number>
): [InstinctType, InstinctType, InstinctType] => {
  const sorted = (Object.entries(scores) as [InstinctType, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([instinct]) => instinct);

  return sorted as [InstinctType, InstinctType, InstinctType];
};
