import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
  select
} from '@ngrx/store';
import { State } from './state';
export const selectGameState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('games');
export const selectGames = createSelector(
  selectGameState,
  x => x.games
);
