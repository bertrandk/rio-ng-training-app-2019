import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games-edit',
  templateUrl: './games-edit.component.html',
  styleUrls: ['./games-edit.component.scss']
})
export class GamesEditComponent implements OnInit {
  gameId: number;
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.paramMap.subscribe(n => {
      this.gameId = +n.get('id');
    });
  }
}
