
import type { ChildhoodPattern } from '../../types';

export const childhoodPatterns: ChildhoodPattern[] = [
  {
    type: 1,
    familyAtmosphere: 'High standards, moral obligation, criticism for mistakes',
    lostMessage: 'You are good. You are loved as you are.',
    copingStrategy: 'I must be perfect and good to be acceptable. I will police myself so no one else can criticize me.',
    healingMessage: 'You are good enough. Mistakes are part of growth.'
  },
  {
    type: 2,
    familyAtmosphere: 'Emphasis on helping others, own needs overlooked or discouraged',
    lostMessage: 'You are wanted. Your needs matter.',
    copingStrategy: 'I will make myself indispensable to earn love. I will suppress my own needs to meet yours.',
    healingMessage: 'You are loved for who you are, not just what you do.'
  },
  {
    type: 3,
    familyAtmosphere: 'Valued for performance and achievement, praise tied to success',
    lostMessage: 'You are loved for yourself.',
    copingStrategy: 'I will be the best. I will achieve and perform to ensure I have value.',
    healingMessage: 'You have value simply because you exist.'
  },
  {
    type: 4,
    familyAtmosphere: 'Feeling different, misunderstood, or unseen; sense of abandonment',
    lostMessage: 'You are seen for who you are.',
    copingStrategy: 'I will hold onto my unique suffering to prove I exist. I will search for the missing piece.',
    healingMessage: 'You are not defective. You belong.'
  },
  {
    type: 5,
    familyAtmosphere: 'Intrusive or emotionally overwhelming; lack of privacy',
    lostMessage: 'Your needs are not a problem.',
    copingStrategy: 'I will withdraw to protect my resources. I will not need anything from anyone.',
    healingMessage: 'Your needs are valid. There is enough for you.'
  },
  {
    type: 6,
    familyAtmosphere: 'Unpredictable, inconsistent, or untrustworthy authority',
    lostMessage: 'You are safe.',
    copingStrategy: 'I will be vigilant. I will find security through alliances or by questioning everything.',
    healingMessage: 'You are safe. You can trust your own inner guidance.'
  },
  {
    type: 7,
    familyAtmosphere: 'Limited nurturing, potentially chaotic or painful needing escape',
    lostMessage: 'You will be taken care of.',
    copingStrategy: 'I will take care of myself by staying positive and occupied. I will avoid pain at all costs.',
    healingMessage: 'You can rest. You will be taken care of.'
  },
  {
    type: 8,
    familyAtmosphere: 'Hostile, controlling, or weak; needed to grow up fast',
    lostMessage: 'You will not be betrayed.',
    copingStrategy: 'I will be strong. I will control my environment so no one can hurt me again.',
    healingMessage: 'You can be vulnerable. You are protected.'
  },
  {
    type: 9,
    familyAtmosphere: 'Overlooked, conflict-avoidant, opinions didn\'t matter',
    lostMessage: 'Your presence matters.',
    copingStrategy: 'I will stay quiet and blend in. I will not cause trouble so I can keep the peace.',
    healingMessage: 'Your presence matters. The world needs your voice.'
  }
];

export const getChildhoodPattern = (type: number): ChildhoodPattern | undefined => {
  return childhoodPatterns.find(p => p.type === type);
};
