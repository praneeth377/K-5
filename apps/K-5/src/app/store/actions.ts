import { createAction, props } from '@ngrx/store';
import { User, Lesson, Chapter, Course } from '../models/models.component';

// Define action types


export const selectCourse = createAction(
  '[Course] Select Course',
  props<{ courseId: number }>()
);
// Action to set the selected chapter ID
export const selectChapter = createAction(
  '[Chapter] Select Chapter',
  props<{ chapterId: number }>()
);

// Action to update user's lesson completion
export const completeLesson = createAction(
  '[Lesson] Complete Lesson',
  props<{ userId: number; lessonId: number }>()
);

// Update recently watched chapter
export const setRecentChapter = createAction(
  '[Chapter] Set Recent Chapter',
  props<{ chapterId: number }>()
);