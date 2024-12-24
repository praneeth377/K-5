import { createActionGroup, props } from '@ngrx/store';

import { Lesson, User } from '../../models/models.component';

export const lessonActions = createActionGroup({
  source: 'Lesson API',
  events: {
    'Fetch Lessons': props<{ chapterId: number }>(),
    'Fetch Lessons Success': props<{ lessons: Lesson[] }>(),
    'Fetch Lessons Failure': props<{ error: string }>(),
    'Complete Lesson': props<{ userId: number; lessonId: number; points: number }>(),
    'Complete Lesson Success': props<{ user: User }>(),
    'Complete Lesson Failure': props<{ error: string }>(),
  },
});

// this.store.dispatch(lessonActions.fetchLessons({chapterId: }))
// this.store.dispatch(lessonActions.completeLesson({ userId: , lessonId: , points: }))
