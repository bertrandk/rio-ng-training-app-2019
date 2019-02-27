import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  items: string[] = ['Games item 1', 'Games item 2', 'Games Item 3'];
  constructor() {}

  ngOnInit() {}
}
