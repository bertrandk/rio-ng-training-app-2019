import { Component, OnInit, Inject, Injectable } from '@angular/core';

import { RootStoreState } from '../root-store';
import { Store, select } from '@ngrx/store';
import { selectGames } from '../root-store/games-store/selectors';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { propOr, find, propEq, pipe } from 'ramda';
import * as PlatformStore from '../root-store/platforms-store';
import * as GamesStore from '../root-store/games-store';

const getPlatformNameById = id =>
  pipe(
    find(propEq('id', id)),
    propOr('notFound', 'name')
  );

const formFullGame = ([games, platforms]) => {
  return games.map(game => {
    const platformName = getPlatformNameById(game.platformId)(platforms);
    return {
      ...game,
      platformName
    };
  });
};

@Injectable({
  providedIn: 'root'
})
export class GamesFacade {
  games$ = this.store$.pipe(select(selectGames));
  platforms$ = this.store$.pipe(select(n => n.platforms.platforms));
  fullGames$ = combineLatest(this.games$, this.platforms$).pipe(
    map(formFullGame)
  );
  constructor(private store$: Store<RootStoreState.State>) {}
  loadGames() {
    this.store$.dispatch(new GamesStore.GamesStoreActions.LoadGames());
  }
}
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games$ = this.facade.games$;
  platforms$ = this.facade.platforms$;
  fullGames$ = this.facade.fullGames$;

  constructor(private facade: GamesFacade) {}

  ngOnInit() {
    this.facade.loadGames();
  }
}
