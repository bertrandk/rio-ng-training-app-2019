import { State } from './state';

import { Actions, ActionTypes } from './actions';

export const INITIAL_STATE: State = {
  games: [],
  isLoading: false,
  error: ''
};

export function gamesReducer(state: State = INITIAL_STATE, action: Actions) {
  switch (action.type) {
    case ActionTypes.LOAD_GAMES:
      return { ...state, isLoading: true, error: '' };
    case ActionTypes.LOAD_GAMES_SUCCESS:
      return {
        ...state,
        games: [...action.games],
        isLoading: false,
        error: ''
      };
    default:
      return state;
  }
}
