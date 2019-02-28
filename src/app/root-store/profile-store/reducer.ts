import { State } from './state';
import { Actions, ActionTypes } from './actions';
export const INITIAL_STATE: State = {
  current: undefined,
  isLoading: false,
  error: ''
};

export function profileReducer(state: State = INITIAL_STATE, action: Actions) {
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