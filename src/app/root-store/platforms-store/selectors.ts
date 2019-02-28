import { createFeatureSelector, createSelector, MemoizedSelector, select } from '@ngrx/store';
import { State } from './state';

import { pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export const selectPlatformState: MemoizedSelector<object, State> = createFeatureSelector<State>('platforms');
export const selectPlatforms = createSelector(
  selectPlatformState,
  x => x.platforms
);
