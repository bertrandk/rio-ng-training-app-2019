import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: string[] = ['Dashboard item 1', 'Dashboard item 2', 'Dashboard Item 3'];
  constructor() {}

  ngOnInit() {
    console.log('hi');
  }
}
