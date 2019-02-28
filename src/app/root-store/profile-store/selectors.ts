import { createFeatureSelector, createSelector, MemoizedSelector, select } from '@ngrx/store';
import { State } from './state';
import { Profile } from '../../models/profile.dto';
import { pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export const getCurrent = (state: State) => state.current;

export const selectProfileState: MemoizedSelector<object, State> = createFeatureSelector<State>('profile');
export const selectCurrentProfile = createSelector(
  selectProfileState,
  getCurrent
);

export const selectFullName = pipe(
  select(selectCurrentProfile),
  filter(n => !!n),
  map(({ firstName, lastName }) => `${firstName} ${lastName}`)
);
