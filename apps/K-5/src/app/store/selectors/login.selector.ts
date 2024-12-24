import { createFeatureSelector, createSelector } from '@ngrx/store';

export const userSelector = createFeatureSelector<any>('auth');

export const selectUser = createSelector(
  userSelector,
  (state) => state.user
);

export const selectLastViewedChapterId = createSelector(
  selectUser,
  (user) => user?.lastViewedChapterId
);

export const selectCompletedLessons = createSelector(
  selectUser,
  (user) => user?.completedLessons
);
