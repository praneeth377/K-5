import { provideHttpClient } from '@angular/common/http';
import {
	ApplicationConfig,
	isDevMode,
	provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { appRoutes } from './app.routes';
import { ChapterEffects } from './store/effects/chapter.effect';
import { CourseEffects } from './store/effects/course.effect';
import { AuthEffects } from './store/effects/login.effect';
import { chapterReducer } from './store/reducers/chapter.reducer';
import { courseReducer } from './store/reducers/course.reducer';
import { authReducer } from './store/reducers/login.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore({auth: authReducer, course: courseReducer, chapter: chapterReducer}),
    provideEffects([AuthEffects, CourseEffects, ChapterEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
],
};
