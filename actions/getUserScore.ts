import questionnaire from "questionnaire/data/questionnaire.json";
import { UserAnswers } from "questionnaire/types";

export default function getUserScore(userAnswers: UserAnswers) {
  const correctAnswers = questionnaire.data.filter((question, index) => {
    const correctOptions = question.options.reduce((accum, option) => {
      if (option.correct) {
        return [...accum, option.answer];
      }

      return accum;
    }, [] as string[]);

    return (
      correctOptions.sort().toString() == userAnswers[index].sort().toString()
    );
  });

  const correct = correctAnswers.length;

  return {
    correct,
    wrong: questionnaire.data.length - correct,
    score: (correct * 100) / questionnaire.data.length,
  };
}
