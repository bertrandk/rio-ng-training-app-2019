import { Profile } from '../../models/profile.dto';

export interface State {
  current: Profile;
  isLoading: boolean;
  error: string;
}

export const INITIAL_STATE: State = {
  current: {
    id: null,
    image: '',
    languageId: null,
    firstName: '',
    lastName: '',
    averageNumberOfHoursPerDay: null,
    email: ''
  },
  isLoading: false,
  error: ''
};

export function profileReducer(state: State = INITIAL_STATE, action: any) {
  switch (action.type) {
    case '[LOAD_PROFILE]':
      return { ...state, isLoading: true };
    case '[Profile API] Profile Loaded Success':
      return { ...state, current: { ...action.payload }, isLoading: false };
    default:
      return state;
  }
}
