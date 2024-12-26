import { createReducer, on } from '@ngrx/store';

import { User } from '../../models/models.component';
import { lessonActions } from '../actions/lesson.action';
import { authActions, lastViewedChapterActions } from '../actions/login.action';

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
  on(authActions.loginFailure, (state, { error }) => ({ ...state, user: null, error })),
  on(authActions.logout, () => initialState),
  on(lastViewedChapterActions.updateLastViewedChapterSuccess, (state, { lastViewedChapterId }) => ({
    ...state,
    user: state.user
      ? { ...state.user, lastViewedChapterId }
      : null,
  })),
  on(lastViewedChapterActions.updateLastViewedChapterFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(lessonActions.completeLessonSuccess, (state, { user }) => ({ ...state, user })),
  on(lessonActions.completeLessonFailure, (state, { error }) => ({ ...state, error }))
);
