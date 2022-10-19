import { Injectable } from '@angular/core';
import {
    map,
    catchError,
    exhaustMap,
} from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { ProfileService } from '../services/profile.services';
import { ProfileActions } from '../actions/profile.actions';

@Injectable()
export class ProfileEffect {
    constructor(
        private actions$: Actions,
        private profSrv: ProfileService,
    ) { }

    getUnits$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProfileActions.getUnits),
            exhaustMap(() =>
                this.profSrv.FetchDepartments().pipe(
                    map((unitsList) => ProfileActions.getUnitsSuccess({ unitsList })),
                    catchError((error) =>
                        of(ProfileActions.getUnitsFailure({ error }))
                    )
                )
            )
        )
    );
}
