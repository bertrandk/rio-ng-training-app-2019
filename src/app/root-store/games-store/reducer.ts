import { State } from './state';

import { Actions, ActionTypes } from './actions';

export const INITIAL_STATE: State = {
  games: [],
  isLoading: false,
  error: ''
};

export function gamesReducer(state: State = INITIAL_STATE, action: Actions) {
  console.log('hello');
  switch (action.type) {
    case ActionTypes.LOAD_GAMES:
      return state;
    default:
      return state;
  }
}
