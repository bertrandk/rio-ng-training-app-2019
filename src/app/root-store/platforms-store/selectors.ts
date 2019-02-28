import { createFeatureSelector, createSelector, MemoizedSelector, select } from '@ngrx/store';
import { State } from './state';

import { pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export const getPlatforms = (state: State) => state.platforms;
