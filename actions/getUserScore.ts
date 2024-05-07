import questionnaire from "questionnaire/data/questionnaire.json";
import { UserAnswers } from "questionnaire/types";

export default function getUserScore(userAnswers: UserAnswers) {
  const correctOptions = questionnaire.data.filter((question, index) => {
    const correctAnswers = question.options.filter((option) => option.correct);
    const mappedAnswers = correctAnswers.map((answer) => answer.answer);

    return (
      mappedAnswers.sort().toString() == userAnswers[index].sort().toString()
    );
  });

  const correct = correctOptions.length;

  return {
    correct,
    wrong: questionnaire.data.length - correct,
    score: (correct * 100) / questionnaire.data.length,
  };
}
