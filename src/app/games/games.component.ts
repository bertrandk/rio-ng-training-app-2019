import { Component, OnInit } from '@angular/core';

import { RootStoreState } from '../root-store';
import { Store, select } from '@ngrx/store';
import { selectGames } from '../root-store/games-store/selectors';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games$ = this.store$.pipe(select(selectGames));

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {}
}
