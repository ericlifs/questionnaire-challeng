"use client";

import { Question as TQuestion } from "questionnaire/types";
import { useState } from "react";
import Question from "./Question";

interface QuestionnaireProps {
  questionnaire: TQuestion[];
}

export default function Questionnaire({ questionnaire }: QuestionnaireProps) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const onQuestionSubmit = () => {
    setQuestionIndex((prevQuestion) => prevQuestion + 1);
  };

  return (
    <main className="flex items-start justify-center min-h-screen flex-col p-24">
      <label>
        Question {questionIndex + 1} of {questionnaire.length}
      </label>
      <Question
        key={questionnaire[questionIndex].question}
        question={questionnaire[questionIndex]}
        onSubmit={onQuestionSubmit}
      />
    </main>
  );
}
