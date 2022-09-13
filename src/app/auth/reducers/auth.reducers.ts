import { createReducer, on, Action } from '@ngrx/store';
import { AuthActions } from '../actions/auth-actions';

const initialState = {
  authToken: null,
  employee: null,
  isLoading: false,
};

const reducer = createReducer(
  initialState,
  on(AuthActions.login, (state, { data }) => ({
    ...state,
    isLoading: true,
  })),

  on(AuthActions.loginSuccess, (state, { user }) => {
    return {
      ...state,
      authToken: user.authToken,
      employee: user.employee,
      isLoading: false,
    };
  })
);

export function authReducers(state: any | undefined, action: Action) {
  return reducer(state, action);
}
