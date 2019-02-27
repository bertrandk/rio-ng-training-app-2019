import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProfileDataService } from '../profile/services/profile-data.service';
import * as ProfileStore from '../store/reducers/profile.reducer';
const ProfileActions = ProfileStore.ActionTypes;

@Injectable()
export class AppEffects {
  @Effect()
  loadProfile$ = this.actions$.pipe(
    ofType<ProfileStore.LoadProfile>(ProfileActions.LOAD_PROFILE),
    mergeMap(() =>
      this.profileData.get().pipe(
        map(profile => new ProfileStore.LoadProfileSuccess(profile)),
        catchError(() => EMPTY)
      )
    )
  );
  @Effect()
  saveProfile$ = this.actions$.pipe(
    ofType<ProfileStore.SaveProfile>(ProfileActions.SAVE_PROFILE),
    mergeMap(({ payload }) => {
      return this.profileData.put(payload).pipe(
        map(profile => new ProfileStore.SaveProfileSuccess(profile)),
        catchError(() => EMPTY)
      );
    })
  );
  constructor(private actions$: Actions, private profileData: ProfileDataService) {}
}
