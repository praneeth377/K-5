import { Route } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { LandingPageComponent } from './landing/landing_page.component';

export const appRoutes: Route[] = [
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/:courseId/chapters', component: ChaptersComponent },
    { path: 'landing', component: LandingPageComponent}
];
