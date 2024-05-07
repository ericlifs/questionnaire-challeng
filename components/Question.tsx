"use client";

import { Option, Question as TQuestion } from "questionnaire/types";
import { useState } from "react";

interface QuestionProps {
  question: TQuestion;
  onSubmit: (options: string[]) => void;
}

export default function Question({ question, onSubmit }: QuestionProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const onOptionToggled = (option: Option) => {
    if (question.isMultipleChoice) {
      const isOptionAlreadySelected = selectedOptions.includes(option.answer);

      if (isOptionAlreadySelected) {
        return setSelectedOptions((prevSelectedOptions) =>
          prevSelectedOptions.filter((selected) => selected !== option.answer)
        );
      }

      return setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        option.answer,
      ]);
    }

    setSelectedOptions([option.answer]);
  };

  const onQuestionSubmit = () => {
    if (selectedOptions.length) {
      onSubmit(selectedOptions);
    }
  };

  return (
    <>
      <h1 className="text-6xl">{question.question}</h1>
      <ul className="flex flex-col space-y-10 my-12 w-full max-w-xl">
        {question.options.map((option) => (
          <button
            role="button"
            key={option.answer}
            className="border flex items-center space-x-4 rounded-xl p-4"
            onClick={() => onOptionToggled(option)}
          >
            <input
              readOnly
              className="accent-amber-500"
              type={question.isMultipleChoice ? "checkbox" : "radio"}
              checked={selectedOptions.includes(option.answer)}
              name={question.question}
            />
            <span>{option.answer}</span>
          </button>
        ))}
      </ul>
      <button
        role="submit"
        className="disabled:bg-slate-300 bg-amber-500 rounded-md p-2 text-black font-semibold"
        onClick={onQuestionSubmit}
        disabled={selectedOptions.length === 0}
      >
        Submit answer
      </button>
    </>
  );
}
