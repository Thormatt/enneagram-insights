/**
 * Attention Check Questions
 *
 * These questions verify that the user is paying attention and answering thoughtfully.
 * They have expected answers and are used to validate response quality.
 */

export interface AttentionCheckQuestion {
  id: string;
  text: string;
  expectedAnswer: number; // 1-5 Likert scale
  tolerance: number; // How many points off is acceptable (0 = exact match required)
  category: 'direct' | 'reverse' | 'obvious';
}

export const attentionCheckQuestions: AttentionCheckQuestion[] = [
  {
    id: 'attn-1',
    text: 'For this question, please select "Strongly Agree" to confirm you are reading carefully.',
    expectedAnswer: 5,
    tolerance: 0, // Must be exact
    category: 'direct',
  },
  {
    id: 'attn-2',
    text: 'I have never experienced any emotion in my entire life.',
    expectedAnswer: 1, // Should strongly disagree - this is impossible
    tolerance: 1, // Accept 1 or 2
    category: 'obvious',
  },
  {
    id: 'attn-3',
    text: 'Please select the middle option (Neutral) for this item.',
    expectedAnswer: 3,
    tolerance: 0, // Must be exact
    category: 'direct',
  },
];

/**
 * Question positions where attention checks should be inserted (0-indexed)
 * These are positions within the type determination stage
 */
export const ATTENTION_CHECK_POSITIONS = [7, 14]; // After questions 8 and 15

/**
 * Check if an attention check was passed
 */
export function checkAttentionAnswer(
  question: AttentionCheckQuestion,
  answer: number
): boolean {
  const diff = Math.abs(answer - question.expectedAnswer);
  return diff <= question.tolerance;
}

/**
 * Get attention check for a specific position (if any)
 */
export function getAttentionCheckForPosition(
  questionIndex: number,
  usedChecks: Set<string>
): AttentionCheckQuestion | null {
  if (!ATTENTION_CHECK_POSITIONS.includes(questionIndex)) {
    return null;
  }

  // Find an unused attention check
  const availableCheck = attentionCheckQuestions.find(q => !usedChecks.has(q.id));
  return availableCheck || null;
}

/**
 * Evaluate all attention check results
 */
export function evaluateAttentionChecks(
  answers: Record<string, number>
): {
  passed: number;
  failed: string[];
  total: number;
  passRate: number;
} {
  let passed = 0;
  const failed: string[] = [];

  for (const question of attentionCheckQuestions) {
    const answer = answers[question.id];
    if (answer !== undefined) {
      if (checkAttentionAnswer(question, answer)) {
        passed++;
      } else {
        failed.push(question.id);
      }
    }
  }

  const total = Object.keys(answers).length;
  const passRate = total > 0 ? passed / total : 1;

  return { passed, failed, total, passRate };
}
