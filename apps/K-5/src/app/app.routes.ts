import { Route } from '@angular/router';

import { ChaptersComponent } from './chapters/chapters.component';
import { CoursesComponent } from './courses/courses.component';
import { LandingPageComponent } from './landing/landing_page.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'landing', component: LandingPageComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/:courseId/chapters', component: ChaptersComponent },
    { path: 'landing', component: LandingPageComponent}
];
