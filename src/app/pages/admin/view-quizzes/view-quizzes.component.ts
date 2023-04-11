import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css'],
})
export class ViewQuizzesComponent implements OnInit {
  quizzes = [
    {
      qId: 23,
      title: 'Basic Java Quiz',
      description:
        'Có 4 nền tảng khác nhau của ngôn ngữ lập trình Java. Đó là Java SE, Java EE, Java ME và JavaFX. Mỗi nền tảng Java sẽ đi kèm với một JVM (Máy ảo Java) và một API (Giao diện lập trình ứng dụng).',
      maxMarks: '150',
      numberOfQuestions: '20',
      active: '',
      category: {
        title: 'Programming',
      },
    },
  ];

  constructor(private _quiz: QuizService) {}

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error) => {
        // console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

  deleteQuiz(qId: number) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed) {
        // delete 
        this._quiz.deleteQuiz(qId).subscribe(
          (data) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.qId != qId);
            Swal.fire('Success', 'Quiz deleted', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error');
          }
        );
      }
    });
  }
}
