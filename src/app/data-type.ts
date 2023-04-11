export interface Category {
  cid: number;
  title: string;
  description: string;
}

export interface User {
  username: string;
  // other properties if any
}

export interface Quiz {
  title: String;
  description: String;
  maxMarks: String;
  numberOfQuestions: String;
  active: boolean;
  category: {
    cid: number;
  };
}

export interface Question {
  quiz: {
    qId: number;
  };
  content: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}
