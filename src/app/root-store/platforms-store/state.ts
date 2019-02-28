import { Platform } from '../../models/platform';
export interface State {
  platforms: Platform[];
  isLoading: boolean;
  error: string;
}
