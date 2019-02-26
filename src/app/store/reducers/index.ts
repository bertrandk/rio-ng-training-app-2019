import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as Profile from './profile.reducer';
export interface State {
  profile: Profile.State;
}

export const reducers: ActionReducerMap<State> = {
  profile: Profile.profileReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
