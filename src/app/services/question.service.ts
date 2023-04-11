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

  // add question
  public addQuestion(question: Question) {
    return this._http.post(`${baseurl}/question`, question);
  }
}
