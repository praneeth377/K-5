import { createReducer, on } from '@ngrx/store';

import { Lesson } from '../../models/models.component';
import { lessonActions } from '../actions/lesson.action';

export interface LessonState {
  lessons: Lesson[];
  error: string | null;
}

const initialLessonState: LessonState = {
  lessons: [],
  error: null,
};

export const lessonReducer = createReducer(
  initialLessonState,
  on(lessonActions.fetchLessonsSuccess, (state, { lessons }) => ({ ...state, lessons })),
  on(lessonActions.fetchLessonsFailure, (state, { error }) => ({ ...state, error }))
);
