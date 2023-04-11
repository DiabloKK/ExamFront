import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  menuType = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuType = this.router.url.substring(7).split("/")[0];
  }

  // sideBarClick(event: any) {
  //   this.menuType = event;
  //   console.log(this.menuType);
  // }
}
