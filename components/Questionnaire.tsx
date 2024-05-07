"use client";

import { Suspense, useState } from "react";

import { Question as TQuestion, UserAnswers } from "questionnaire/types";
import Question from "./Question";
import QuestionnaireResults from "./QuestionnaireResults";

interface QuestionnaireProps {
  questionnaire: TQuestion[];
}

export default function Questionnaire({ questionnaire }: QuestionnaireProps) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnwsers, setUserAnswers] = useState<UserAnswers>({});

  const isQuestionnaireComplete = userAnwsers[questionnaire.length - 1]?.length;

  const onQuestionSubmit = (optionsSelected: string[]) => {
    setUserAnswers((prevUserAnswers) => ({
      ...prevUserAnswers,
      [questionIndex]: optionsSelected,
    }));

    if (!isQuestionnaireComplete) {
      setQuestionIndex((prevQuestion) => prevQuestion + 1);
    }
  };

  if (isQuestionnaireComplete) {
    return <QuestionnaireResults userAnswers={userAnwsers} />;
  }

  return (
    <>
      <label>
        Question {questionIndex + 1} of {questionnaire.length}
      </label>
      <Question
        key={questionnaire[questionIndex].question}
        question={questionnaire[questionIndex]}
        onSubmit={onQuestionSubmit}
      />
    </>
  );
}
