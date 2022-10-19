import { ProfileActions } from './../actions/profile.actions';
import { Action, createReducer, on } from '@ngrx/store';


export const tripsKey = 'profile';

export interface State {
  isLoading: boolean;
  unitsList: any[];
}

export const initialState: State = {
  isLoading: false,
  unitsList: [],
};

const reducer = createReducer(
  initialState,
  on(
    ProfileActions.getUnitsFailure,
    state => ({
      ...state,
      isLoading: false
    })
  ),

  on(ProfileActions.getUnits, state => ({
      ...state,
      isLoading: false
    })
  ),

  on(ProfileActions.getUnitsSuccess, (state, {unitsList}) => ({
    ...state,
    unitsList,
    isLoading: false
  })),

);

export function ProfileReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
