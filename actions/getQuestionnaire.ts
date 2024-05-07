"use server";

import questionnaire from "questionnaire/data/questionnaire.json";

export default async function getQuestionnaire() {
  const mappedQuestionnaire = questionnaire.data.map((question) => ({
    ...question,
    isMultipleChoice:
      question.options.filter((option) => option.correct).length > 1,
    options: question.options.map((option) => ({
      ...option,
      correct: undefined,
    })),
  }));

  return mappedQuestionnaire;
}
