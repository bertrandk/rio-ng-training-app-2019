import { Game } from '../../models/game';
export interface State {
  games: Game[];
  isLoading: boolean;
  error: string;
}
