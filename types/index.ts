export type Question = {
  question: string;
  isMultipleChoice: boolean;
  options: Option[];
};

export type Option = {
  answer: string;
  correct?: boolean;
};

export type UserAnswers = Record<number, string[]>;
