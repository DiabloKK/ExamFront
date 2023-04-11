import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http: HttpClient) { }

  public quizzes() {
    return this._http.get(`${baseurl}/quiz`);
  }

  // add quiz
  public addQuiz(quiz: any) {
    return this._http.post(`${baseurl}/quiz`, quiz);
  }

}
