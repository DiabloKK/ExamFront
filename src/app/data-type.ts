export interface Category {
  cid: number;
  title: string;
  description: string;
}

export const defaultCategory: Category = {
  cid: 0,
  title: '',
  description: '',
};

export interface User {
  username: String
  password: String;
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
}

export const defaultUser = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

export interface Quiz {
  qId: number;
  title: String;
  description: String;
  maxMarks: number;
  numberOfQuestions: number;
  active: boolean;
  category: Category;
}

export const defaultQuiz: Quiz = {
  qId: 0,
  title: '',
  description: '',
  maxMarks: 0,
  numberOfQuestions: 0,
  active: true,
  category: defaultCategory,
};

export interface Question {
  givenAnswer: String;
  quesId: number;
  quiz: Quiz;
  content: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

export const defaultQuestion = {
  givenAnswer: '',
  quesId: 0,
  quiz: defaultQuiz,
  content: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  answer: '',
};
