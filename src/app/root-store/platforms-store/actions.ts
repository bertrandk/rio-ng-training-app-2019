import { Platform } from '../../models/platform';
import { Action } from '@ngrx/store';
export enum ActionTypes {
  LOAD_PLATFORMS = 'LOAD_PLATFORMS',
  LOAD_PLATFORMS_SUCCESS = 'LOAD_PLATFORMS_SUCCESS',
  SAVE_PLATFORM = 'SAVE_PLATFORM',
  SAVE_PLATFORM_SUCCESS = 'SAVE_PLATFORM_SUCCESS'
}

export class LoadPlatforms implements Action {
  readonly type = ActionTypes.LOAD_PLATFORMS;
}
export class LoadPlatformsSuccess implements Action {
  readonly type = ActionTypes.LOAD_PLATFORMS_SUCCESS;
  constructor(public payload: Platform[]) {}
}
export class SavePlatform implements Action {
  readonly type = ActionTypes.SAVE_PLATFORM;
  constructor(public payload: Platform) {}
}
export class SavePlatformSuccess implements Action {
  readonly type = ActionTypes.SAVE_PLATFORM_SUCCESS;
  constructor(public payload: Platform) {}
}
export type Actions = LoadPlatforms | LoadPlatformsSuccess | SavePlatform | SavePlatformSuccess;
