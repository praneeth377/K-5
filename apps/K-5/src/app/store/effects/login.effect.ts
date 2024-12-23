import { catchError, map, of, switchMap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { User } from '../../models/models.component';
import { authActions } from '../actions/login.action';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      switchMap(({ email, password }) =>
        this.http
          .get<User[]>(`http://localhost:3000/users?email=${email}&password=${password}`)
          .pipe(
            map((users) => {
              if (users.length > 0) {
                return authActions.loginSuccess({ user: users[0] });
              } else {
                return authActions.loginFailure({ error: 'Invalid credentials' });
              }
            }),
            catchError(() => of(authActions.loginFailure({ error: 'Server error' })))
          )
      )
    )
  );
}
