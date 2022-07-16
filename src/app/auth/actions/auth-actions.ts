import {
    createAction,
    props
  } from '@ngrx/store';


const login = createAction('[Auth] Login', props<{ data:any }>());
const loginSuccess = createAction('[Auth] Login Success', props<{ user:any }>());
const loginFailure = createAction('[Auth] Login Failure', props<{ error:any }>());

const loginRedirect = createAction('[Auth] Login Redirect');


export const AuthActions = {
    login,
    loginSuccess,
    loginFailure,

    loginRedirect
}