import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProfileDataService } from '../profile/services/profile-data.service';

@Injectable()
export class AppEffects {
  @Effect()
  loadProfile$ = this.actions$.pipe(
    ofType('[LOAD_PROFILE]'),
    mergeMap(() =>
      this.profileData.get().pipe(
        map(profile => ({ type: '[Profile API] Profile Loaded Success', payload: profile })),
        catchError(() => EMPTY)
      )
    )
  );
  @Effect()
  saveProfile$ = this.actions$.pipe(
    ofType('[SAVE PROFILE]'),
    mergeMap(({ payload }) => {
      return this.profileData.put(payload).pipe(
        map(profile => ({ type: '[Profile API] Profile Saved Success', payload: profile })),
        catchError(() => EMPTY)
      );
    })
  );
  constructor(private actions$: Actions, private profileData: ProfileDataService) {}
}
