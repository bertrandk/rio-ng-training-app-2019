// complete the rest of the interface
// https://rio-ng-training.now.sh/games
export interface Game {
  id?: number;
  name: string;
  platformId: number;
  [key: string]: any;
}
