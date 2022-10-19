import { createFeatureSelector, createSelector } from '@ngrx/store';

import { tripsKey, State as FeatureState } from '../reducers/profile.reducers';


export interface AppState {
  [tripsKey]: FeatureState;
}

export const selectProfileState = createFeatureSelector<FeatureState>(tripsKey);

export const selectUnits = createSelector(
  selectProfileState,
  state => state.unitsList
);

