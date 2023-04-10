import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  @Output() adminClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  // homeClick() {
  //   this.adminClick.emit("home");
  // }

  // profileClick() {
  //   this.adminClick.emit("profile");
  // }

}
