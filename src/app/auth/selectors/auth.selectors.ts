import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface FeatureState {
    authToken: any;
    employee: any;
}

export interface AppState {
  auth: FeatureState;
}
export const authKey = 'auth';


export const selectAuthState = createFeatureSelector<FeatureState>(authKey);


export const selectUserToken = createSelector(
    selectAuthState,
    (state: any) => state.authToken
  );
  
  export const selectUser = createSelector(
    selectAuthState,
    (state: any) => state.employee
  );
