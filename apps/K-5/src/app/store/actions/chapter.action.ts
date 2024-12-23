import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Chapter } from '../../models/models.component';

export const chapterAction = createActionGroup({
  source: 'Chapter API',
  events: {
    'Load Chapters': emptyProps(),
    'Load Chapters Success': props<{payload: Chapter[]}>(),
    'Load Chapters Failure': emptyProps()
  }
})
