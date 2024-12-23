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
