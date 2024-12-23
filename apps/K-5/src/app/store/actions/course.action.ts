import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Course } from '../../models/models.component';

export const courseAction = createActionGroup({
  source: 'Course API',
  events: {
    'Load Courses': emptyProps(),
    'Load Courses Success': props<{payload: Course[]}>(),
    'Load Courses Failure': emptyProps()
  }
})
