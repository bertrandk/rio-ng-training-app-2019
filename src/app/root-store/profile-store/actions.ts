import { Profile } from '../../models/profile.dto';
import { Action } from '@ngrx/store';

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

export type Actions = LoadProfile | LoadProfileSuccess | SaveProfile | SaveProfileSuccess;
