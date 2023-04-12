import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/data-type';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

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
    private _question: QuestionService,
    private _snack: MatSnackBar
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

  // delete question
  deleteQuestion(quesId: number) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Detele',
      title: 'Are you sure, want to delete this question?',
    }).then((result) => {
      if (result.isConfirmed) {
        // confirm
        this._question.deleteQuestion(quesId).subscribe(
          (data) => {
            this._snack.open('Question Deleted ', '', {
              duration: 3000,
            });
            this.questions = this.questions.filter((q) => q.quesId != quesId);
          },
          (error) => {
            this._snack.open('Error in deleting questions', '', {
              duration: 3000,
            });
            console.log(error);
          }
        );
      }
    });
  }
}
