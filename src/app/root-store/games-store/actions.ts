import { Action } from '@ngrx/store';

import { Profile } from '../../models/profile.dto';
import { Game } from '../../models/game';

/*
Complete the actions for
- loading all games
- loading a game by id
- saving a game by id
*/
export enum ActionTypes {
  LOAD_GAMES = 'LOAD_GAMES',
  LOAD_GAMES_SUCCESS = 'LOAD_GAMES_SUCCESS'
}

export class LoadGames implements Action {
  readonly type = ActionTypes.LOAD_GAMES;
}

export class LoadGamesSuccess implements Action {
  readonly type = ActionTypes.LOAD_GAMES_SUCCESS;
  constructor(public games: Game[]) {}
}
export type Actions = LoadGames | LoadGamesSuccess;
