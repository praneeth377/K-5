import { createActionGroup, props } from '@ngrx/store';

export const authActions = createActionGroup({
  source: 'Auth API',
  events: {
    'Login': props<{ email: string; password: string }>(),
    'Login Success': props<{ user: any }>(),
    'Login Failure': props<{ error: string }>(),
  },
});
