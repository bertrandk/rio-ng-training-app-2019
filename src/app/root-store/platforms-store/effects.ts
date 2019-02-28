import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf, EMPTY, pipe } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Platform } from '../../models/platform';
import * as featureActions from './actions';

@Injectable({
  providedIn: 'root'
})
export class PlatformsStoreEffects {
  constructor(private httpClient: HttpClient, private actions$: Actions) {}

  @Effect()
  loadPlatformRequest$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadPlatforms>(featureActions.ActionTypes.LOAD_PLATFORMS),
    startWith(new featureActions.LoadPlatforms()),
    switchMap(action =>
      this.httpClient.get<Platform[]>('https://rio-ng-training.now.sh/platforms').pipe(
        map(platforms => new featureActions.LoadPlatformsSuccess(platforms)),
        catchError(() => EMPTY)
      )
    )
  );
}
