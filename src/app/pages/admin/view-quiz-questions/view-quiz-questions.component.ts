import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/data-type';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css'],
})
export class ViewQuizQuestionsComponent implements OnInit {
  qId = 0;
  qTitle = '';
  questions: Question[] = [];

  constructor(
    private _router: ActivatedRoute,
    private _question: QuestionService
  ) {}

  ngOnInit(): void {
    this.qId = this._router.snapshot.params['qid'];
    this.qTitle = this._router.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data: any) => {
        // console.log(data);
        this.questions = data;
      },
      (error) => {
        // console.log(error);
      }
    );
  }
}
