import getUserScore from "questionnaire/actions/getUserScore";
import { UserAnswers } from "questionnaire/types";

interface QuestionnaireResultsProps {
  userAnswers: UserAnswers;
}

export default function QuestionnaireResults({
  userAnswers,
}: QuestionnaireResultsProps) {
  const results = getUserScore(userAnswers);

  return (
    <>
      <h1 className="text-6xl">Your score is %{results.score}</h1>
      <ul className="space-y-4 mt-4 list-disc list-inside">
        {Boolean(results.correct) && (
          <li className="text-green-600">
            {results.correct} question/s correctly
          </li>
        )}
        {Boolean(results.wrong) && (
          <li className="text-red-600">{results.wrong} question/s wrong</li>
        )}
      </ul>
    </>
  );
}
