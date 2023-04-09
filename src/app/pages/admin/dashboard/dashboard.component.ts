import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    
  menuType = "home";

  constructor() {}

  ngOnInit(): void {}

  sideBarClick(event: any) {
    this.menuType = event;
  }

 }
