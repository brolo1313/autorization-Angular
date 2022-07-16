import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth-service.service';
import { AuthActions } from '../actions/auth-actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap((data) => {
        return this.auth.login(data).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        );
      })
    )
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => this.router.navigate(['/profile']))
      ),
    { dispatch: false }
  );
}
