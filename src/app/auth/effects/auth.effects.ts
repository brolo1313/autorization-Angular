import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth-service.service';
import { AuthActions }  from '../actions/auth-actions'
import { of } from 'rxjs';



@Injectable()
export class AuthEffect {

 

  constructor(
    private actions$: Actions,
    private auth: AuthService
  ) {}


  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    map(({data}) => data),
    exhaustMap((data) => this.auth.login(data)
      .pipe(
        map(user => (AuthActions.loginSuccess({user}))),
        catchError(error => of(AuthActions.loginFailure({error})))
      ))
    )
  );
}