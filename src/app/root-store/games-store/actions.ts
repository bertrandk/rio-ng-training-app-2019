import { Profile } from '../../models/profile.dto';
import { Action } from '@ngrx/store';

/*
Complete the actions for
- loading all games
- loading a game by id
- saving a game by id
*/
export enum ActionTypes {
  LOAD_GAMES = 'LOAD_GAMES'
}

export class LoadGames implements Action {
  readonly type = ActionTypes.LOAD_GAMES;
}

export type Actions = LoadGames;
