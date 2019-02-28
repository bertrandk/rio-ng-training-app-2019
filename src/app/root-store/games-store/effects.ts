import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf, EMPTY, pipe } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import * as featureActions from './actions';

@Injectable()
export class GamesStoreEffects {
  constructor(private actions$: Actions) {}
  // finish this service for loading games
  @Effect()
  loadGamesRequest$: Observable<any> = this.actions$.pipe(
    ofType<featureActions.LoadGames>(featureActions.ActionTypes.LOAD_GAMES),
    map(_ => EMPTY)
  );
}
