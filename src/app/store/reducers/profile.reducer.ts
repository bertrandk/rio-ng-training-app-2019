import { Profile } from '../../models/profile.dto';
import { Action } from '@ngrx/store';

export interface State {
  current: Profile;
  isLoading: boolean;
  error: string;
}

export enum ActionTypes {
  LOAD_PROFILE = 'LOAD_PROFILE',
  LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS',
  SAVE_PROFILE = 'SAVE_PROFILE',
  SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS'
}

export class LoadProfile implements Action {
  readonly type = ActionTypes.LOAD_PROFILE;
}
export class LoadProfileSuccess implements Action {
  readonly type = ActionTypes.LOAD_PROFILE_SUCCESS;
  constructor(public payload: Profile) {}
}
export class SaveProfile implements Action {
  readonly type = ActionTypes.SAVE_PROFILE;
  constructor(public payload: Profile) {}
}
export class SaveProfileSuccess implements Action {
  readonly type = ActionTypes.SAVE_PROFILE_SUCCESS;
  constructor(public payload: Profile) {}
}

export type ProfileActions = LoadProfile | LoadProfileSuccess | SaveProfile | SaveProfileSuccess;
export const INITIAL_STATE: State = {
  current: {
    id: null,
    image: '',
    languageId: null,
    firstName: '',
    lastName: '',
    averageNumberOfHoursPerDay: null,
    email: ''
  },
  isLoading: false,
  error: ''
};

export function profileReducer(state: State = INITIAL_STATE, action: ProfileActions) {
  switch (action.type) {
    case ActionTypes.LOAD_PROFILE:
    case ActionTypes.SAVE_PROFILE:
      return { ...state, isLoading: true };
    case ActionTypes.SAVE_PROFILE_SUCCESS:
    case ActionTypes.LOAD_PROFILE_SUCCESS:
      return { ...state, current: { ...action.payload }, isLoading: false };
    default:
      return state;
  }
}
