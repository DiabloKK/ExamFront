import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { defaultUser } from 'src/app/data-type';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  public user = defaultUser;
  
  constructor(private userService: UserService, private snack: MatSnackBar) {

  }

  ngOnInit(): void {
      
  }

  formSubmit() {
    // console.log(this.user);
    if(this.user.username=='' || this.user.username==null) {
      this.snack.open("Username is required !!", "", {
        duration: 3000,
        // verticalPosition: 'top',
        // horizontalPosition: 'right'
      });
      return;
    }

    //validate


    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        // console.log(data);
        Swal.fire('Successfully', 'User id is ' + data.id, 'success');
      },
      (error) => {
        this.snack.open(error["error"]["msg"], '', {
          duration: 3000
        });
      }
    );
  }

}
