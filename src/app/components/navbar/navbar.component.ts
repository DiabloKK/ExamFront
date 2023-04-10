import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/data-type';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  user: User | null = null;

  constructor(public login: LoginService, private router: Router) {}

  ngOnInit(): void {

    this.login.isLoggedInn.subscribe((result) => {
      this.isLoggedIn = result;
      this.user = this.login.getUser();
    });

  }

  logout() {
    this.login.logout();
    this.router.navigate(['/']);
  }
}
