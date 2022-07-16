import {
    createAction,
    props
  } from '@ngrx/store';


const login = createAction('[Auth] Login', props<{ data:any }>());
const loginSuccess = createAction('[Auth] Login', props<{ user:any }>());
const loginFailure = createAction('[Auth] Login', props<{ error:any }>());

export const AuthActions = {
    login,
    loginSuccess,
    loginFailure
}