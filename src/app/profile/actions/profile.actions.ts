import {
    createAction,
    props
  } from '@ngrx/store';


const getUnits = createAction('[Profile] getUnits');
const getUnitsSuccess = createAction('[Profile] getUnits Success', props<{ unitsList:any }>());
const getUnitsFailure = createAction('[Profile] getUnits Failure', props<{ error:any }>());



export const ProfileActions = {
    getUnits,
    getUnitsSuccess,
    getUnitsFailure,
}
