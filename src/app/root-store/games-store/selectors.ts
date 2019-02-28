import { createFeatureSelector, createSelector, MemoizedSelector, select } from '@ngrx/store';
import { State } from './state';

import { pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export const selectGameState: MemoizedSelector<object, State> = createFeatureSelector<State>('games');
export const selectGames = createSelector(
  selectGameState,
  x => x.games
);
