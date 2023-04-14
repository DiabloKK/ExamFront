import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question, defaultQuestion } from 'src/app/data-type';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  
  public Editor: any = ClassicEditor;

  qId: number = 0;
  qTitle = '';
  question = defaultQuestion;

  constructor(private _route: ActivatedRoute, private _question: QuestionService) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this.question.quiz['qId'] = this.qId;
  }

  formSubmit() {
    if (this.question.content.trim() == '' || this.question.content == null) {
      return;
    }

    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      return;
    }

    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      return;
    }

    if (this.question.option3.trim() == '' || this.question.option3 == null) {
      return;
    }

    if (this.question.option4.trim() == '' || this.question.option4 == null) {
      return;
    }

    // form submit
    this._question.addQuestion(this.question).subscribe(
      (data: any) => {
        Swal.fire('Success', 'Question Added. Add Another one', 'success');
        this.question = defaultQuestion;
      },
      (error) => {
        Swal.fire('Error', 'Error in adding question', 'error');
      }
    );
  }
}
