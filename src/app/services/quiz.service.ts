import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private _http: HttpClient) {}

  public quizzes() {
    return this._http.get(`${baseurl}/quiz`);
  }

  // add quiz
  public addQuiz(quiz: any) {
    return this._http.post(`${baseurl}/quiz`, quiz);
  }

  // delete quiz
  public deleteQuiz(qId: number) {
    return this._http.delete(`${baseurl}/quiz/${qId}`);
  }

  // get the single quiz
  public getQuiz(qId: number) {
    return this._http.get(`${baseurl}/quiz/${qId}`);
  }

  // update quiz
  public updateQuiz(quiz: any) {
    return this._http.put(`${baseurl}/quiz`, quiz);
  }

  // get quizzes of category
  public getQuizzessOfCategory(cid: number) {
    return this._http.get(`${baseurl}/quiz/category/${cid}`);
  }
}
