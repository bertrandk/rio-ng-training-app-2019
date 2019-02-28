import { Profile } from '../../models/profile.dto';
export interface State {
  current: Profile;
  isLoading: boolean;
  error: string;
}
