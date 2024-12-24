import { createActionGroup, props } from '@ngrx/store';

import { User } from '../../models/models.component';

export const authActions = createActionGroup({
  source: 'Auth API',
  events: {
    'Login': props<{ email: string; password: string }>(),
    'Login Success': props<{ user: User }>(),
    'Login Failure': props<{ error: string }>(),
  },
});

export const lastViewedChapterActions = createActionGroup({
  source: 'Last Chapter Viewed API',
  events: {
    'Update Last Viewed Chapter': props<{ userId: number; lastViewedChapterId: number }>(),
    'Update Last Viewed Chapter Success': props<{ lastViewedChapterId: number }>(),
    'Update Last Viewed Chapter Failure': props<{ error: string }>(),
  },
});

// this.store.dispatch(lastViewedChapterActions.updateLastViewedChapter({userId: , lastViewedChpaterId: }))
