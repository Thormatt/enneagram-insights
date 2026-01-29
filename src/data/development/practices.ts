
import type { GrowthPractice } from '../../types';

export const growthPractices: GrowthPractice[] = [
  {
    type: 1,
    journalPrompts: [
      'What went "good enough" today?',
      'Where did I feel rigid, and what was I afraid would happen if I relaxed?',
      'List three things I appreciate about myself that have nothing to do with being "right".'
    ],
    meditationFocus: 'Acceptance and Serenity. Visualizing a river flowing, accepting its path without correcting it.',
    cognitiveReframing: 'Replace "I should/must" with "I could" or "I choose to". Notice the shift in pressure.',
    emotionalPractice: 'Make space for "play" without a goal. Do something badly on purpose.',
    actionChallenge: 'Leave one thing undone or imperfect today and notice that the world doesn\'t end.'
  },
  {
    type: 2,
    journalPrompts: [
      'What did I need today that I didn\'t ask for?',
      'Did I say "yes" when I wanted to say "no"? Why?',
      'Who am I when I am not helping anyone?'
    ],
    meditationFocus: 'Loving-Kindness for Self. Directing the warmth you give others back into your own heart.',
    cognitiveReframing: 'Change "They need me" to "They can handle this." Change "I have to help" to "I can choose to help if I have energy."',
    emotionalPractice: 'Spend an hour alone doing something solely for your own pleasure.',
    actionChallenge: 'Ask for help directly for something small today. Do not apologize for asking.'
  },
  {
    type: 3,
    journalPrompts: [
      'What feelings did I push aside today to get things done?',
      'If no one could see my achievements, what would I still want to do?',
      'Who am I beneath the image of success?'
    ],
    meditationFocus: 'Authenticity and Being. Resting in the feeling of simply existing, without achieving anything.',
    cognitiveReframing: 'Separate "doing" from "being". Remind yourself: "My value is not my output."',
    emotionalPractice: 'Share a failure or insecurity with a trusted friend without spinning it into a success story.',
    actionChallenge: 'Do an activity purely for enjoyment, not for a result or to tell anyone about it.'
  },
  {
    type: 4,
    journalPrompts: [
      'What is ordinary but beautiful in my life right now?',
      'Am I romanticizing a feeling because it feels "deep"?',
      'What constructive action can I take on my creative ideas today?'
    ],
    meditationFocus: 'Equanimity and Grounding. Connecting to the stable earth beneath the shifting emotional waves.',
    cognitiveReframing: 'Challenge the narrative of "deficiency". When you feel something is missing, list three things that are present.',
    emotionalPractice: 'Practice "containing" an intense emotion without expressing it immediately, just observing it.',
    actionChallenge: 'Stick to a mundane routine (dishes, bed making) for a week to find grounding in the ordinary.'
  },
  {
    type: 5,
    journalPrompts: [
      'What did I feel in my body today?',
      'Where did I withhold myself from others?',
      'What is one thing I know that I could share?'
    ],
    meditationFocus: 'Presence and Engagement. Sensing the body and the environment directly, bypassing the analytical mind.',
    cognitiveReframing: 'Challenge scarcity. Remind yourself: "I have enough energy to engage." "The world is not going to deplete me."',
    emotionalPractice: 'Reach out to a friend just to say hello, without a specific reason or informational goal.',
    actionChallenge: 'Participate in a social activity physically (dance, sports) to get out of your head.'
  },
  {
    type: 6,
    journalPrompts: [
      'What went right today?',
      'Did my worst-case scenario happen? If not, acknowledge that.',
      'Where did I trust myself today?'
    ],
    meditationFocus: 'Inner Support and Courage. Visualizing a strong, stable core within yourself that can handle uncertainty.',
    cognitiveReframing: 'Replace "What if..." (catastrophizing) with "Even if... I can handle it." Focus on competence.',
    emotionalPractice: 'Notice when you are looking outside yourself for reassurance. Pause and ask your inner self first.',
    actionChallenge: 'Make a small decision without consulting anyone else. Trust your gut.'
  },
  {
    type: 7,
    journalPrompts: [
      'What discomfort did I avoid today?',
      'What am I grateful for right here, right now?',
      'What is one commitment I am glad I kept?'
    ],
    meditationFocus: 'Stillness and Contentment. Sitting with "what is" rather than planning "what\'s next".',
    cognitiveReframing: 'Challenge the need for "more". Remind yourself: "This moment is enough." "I don\'t need to escape."',
    emotionalPractice: 'When a negative feeling arises, stay with it for 5 minutes instead of distracting yourself.',
    actionChallenge: 'Finish a project you have started before starting a new one. Complete the cycle.'
  },
  {
    type: 8,
    journalPrompts: [
      'Where did I feel vulnerable today?',
      'Did I use force when connection would have worked?',
      'Who do I trust, and have I shown them my softer side?'
    ],
    meditationFocus: 'Surrender and Innocence. Visualizing a child (your inner child) who is safe and doesn\'t need to fight.',
    cognitiveReframing: 'Reframe vulnerability not as weakness, but as a different kind of strength/courage.',
    emotionalPractice: 'Practice active listening without fixing, advising, or interrupting. Just hear.',
    actionChallenge: 'Let someone else take the lead in a situation today. Notice how it feels to follow.'
  },
  {
    type: 9,
    journalPrompts: [
      'What did I really want today that I didn\'t say?',
      'Where did I check out or go on autopilot?',
      'What matters to me enough to fight for?'
    ],
    meditationFocus: 'Alertness and Agency. Focusing on the sensation of "I am here, I matter, I act".',
    cognitiveReframing: 'Challenge the idea that "it doesn\'t matter". Remind yourself: "My voice matters." "Peace at any cost is not peace."',
    emotionalPractice: 'Express a differing opinion or preference today, even on something small (like where to eat).',
    actionChallenge: 'Do the most important task first thing in the morning. Break the inertia.'
  }
];

export const getGrowthPractice = (type: number): GrowthPractice | undefined => {
  return growthPractices.find(p => p.type === type);
};
