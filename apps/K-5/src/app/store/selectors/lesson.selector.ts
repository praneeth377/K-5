import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LessonState } from '../reducers/lesson.reducer';

export const lessonSelector = createFeatureSelector<LessonState>('lesson');

export const selectLessons = createSelector(
  lessonSelector,
  (state) => state.lessons
);
