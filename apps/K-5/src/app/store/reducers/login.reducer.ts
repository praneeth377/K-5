import { createReducer, on } from '@ngrx/store';

import { User } from '../../models/models.component';
import { authActions } from '../actions/login.action';

export interface AuthState {
  user: User | null;
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
