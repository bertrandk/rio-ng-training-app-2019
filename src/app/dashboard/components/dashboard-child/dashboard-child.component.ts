import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.scss']
})
export class DashboardChildComponent implements OnInit {
  items = ['dashboard child 1', 'dashboard child 2'];
  constructor() {}

  ngOnInit() {}
}
