import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf, EMPTY, pipe } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import * as featureActions from './actions';
import { GameDataService } from '../../games/game-data.service';
import { Game } from '../../models/game';

@Injectable()
export class GamesStoreEffects {
  constructor(private actions$: Actions, private gameData: GameDataService) {}
  // finish this service for loading games
  @Effect()
  loadGamesRequest$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadGames>(featureActions.ActionTypes.LOAD_GAMES),
    switchMap(() => {
      return this.gameData.list().pipe(
        map((games: Game[]) => new featureActions.LoadGamesSuccess(games)),
        catchError(() => EMPTY)
      );
    })
  );
}
