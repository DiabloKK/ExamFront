import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';
import { Question } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private _http: HttpClient) {}

  public getQuestionsOfQuiz(qid: number) {
    return this._http.get(`${baseurl}/question/quiz/all/${qid}`);
  }

  public getQuestionsOfQuizForTest(qid: number) {
    return this._http.get(`${baseurl}/question/quiz/${qid}`);
  }

  // add question
  public addQuestion(question: Question) {
    return this._http.post(`${baseurl}/question`, question);
  }

  // delete question
  public deleteQuestion(questionId: number) {
    return this._http.delete(`${baseurl}/question/${questionId}`);
  }

  // eval quiz
  public evalQuiz(questions: any) {
    return this._http.post(`${baseurl}/question/eval-quiz`, questions);
  }

}
