// complete the rest of the interface
// https://rio-ng-training.now.sh/games

export interface Game {
  id?: number;
  dateCreated: string;
  name: string;
  image: string;
  priority: number;
  numberOfHoursPlayed: number;
  platformId: number;
  numberOfHoursToComplete: number;
  isComplete: boolean;
}
