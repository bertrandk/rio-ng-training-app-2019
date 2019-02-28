import { ProfileStoreState } from './profile-store';
import { GamesStoreState } from './games-store';
import { PlatformsStoreState } from './platforms-store';

export interface State {
  profile: ProfileStoreState.State;
  games: GamesStoreState.State;
  platforms: PlatformsStoreState.State;
}
