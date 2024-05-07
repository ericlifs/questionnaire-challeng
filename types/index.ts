export type Question = {
  question: string;
  options: Option[];
};

export type Option = {
  answer: string;
  correct?: boolean;
};
