import { createReducer, on } from '@ngrx/store';

import { authActions } from '../actions/login.action';

export interface AuthState {
  user: any | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(authActions.loginSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(authActions.loginFailure, (state, { error }) => ({ ...state, user: null, error }))
);
