import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf, EMPTY } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import * as featureActions from './actions';
import { ProfileDataService } from '../../profile/services/profile-data.service';

@Injectable()
export class ProfileStoreEffects {
  constructor(private profileData: ProfileDataService, private actions$: Actions) {}

  @Effect()
  initEffect$: Observable<Action> = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    map(_ => new featureActions.LoadProfile())
  );

  @Effect()
  loadProfileRequest$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadProfile>(featureActions.ActionTypes.LOAD_PROFILE),
    switchMap(action =>
      this.profileData.get().pipe(
        map(profile => new featureActions.LoadProfileSuccess(profile)),
        catchError(() => EMPTY)
      )
    )
  );
  @Effect()
  saveProfileRequest$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.SaveProfile>(featureActions.ActionTypes.SAVE_PROFILE),
    switchMap(action =>
      this.profileData.put(action.payload).pipe(
        map(profile => new featureActions.SaveProfileSuccess(profile)),
        catchError(() => EMPTY)
      )
    )
  );
}
