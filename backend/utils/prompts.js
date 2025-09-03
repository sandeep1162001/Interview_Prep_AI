const questionAnswerPrompt = (
  role,
  experience,
  topicsToFocus,
  numberOfQuestions
) =>
  `You are an AI trained to generate technical interview questions and answers.

Task:
- Role: ${role}
- Candidate Experience: ${experience} years
- Focus Topics: ${topicsToFocus}
- Write ${numberOfQuestions} interview questions.
- For each question, generate a detailed but beginner-friendly answer.
- If the answer needs a code example, add a small code block inside.
- Keep formatting very clean.
- Return a pure JSON array like:
[
  {
    "question": "Question here?",
    "answer": "Answer here."
  },
  ...
]
Important: Do NOT add any extra text. Only return valid JSON.
`;

const conceptExplainPrompt = (question) => `
You are an AI trained to explain technical interview questions.

Task:
- Question: ${question}
- Give a clear, beginner-friendly explanation.
- If the explanation benefits from a code example, add one.
- Return a pure JSON object like:
{
  "question": "${question}",
  "answer": "Detailed explanation here..."
}
Important: Do NOT add any extra text. Only return valid JSON.
`;

module.exports = { questionAnswerPrompt, conceptExplainPrompt };
