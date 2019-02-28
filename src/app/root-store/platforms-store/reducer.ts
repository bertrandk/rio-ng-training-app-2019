import { State } from './state';

import { Actions, ActionTypes } from './actions';

export const INITIAL_STATE: State = {
  platforms: [],
  isLoading: false,
  error: ''
};

export function platformReducer(state: State = INITIAL_STATE, action: Actions) {
  switch (action.type) {
    case ActionTypes.LOAD_PLATFORMS:
      return { ...state, isLoading: true, error: '' };
    case ActionTypes.LOAD_PLATFORMS_SUCCESS:
      return { ...state, platforms: [...action.payload], isLoading: false, error: '' };
    default:
      return state;
  }
}
