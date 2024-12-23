import { catchError, map, of, switchMap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Course } from '../../models/models.component';
import { courseAction } from '../actions/course.action';

@Injectable()
export class CourseEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  course$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseAction.loadCourses),
      switchMap(() =>
        this.http
          .get<Course[]>(`http://localhost:3000/courses`)
          .pipe(
            map((courses) => {
              if (courses.length > 0) {
                return courseAction.loadCoursesSuccess({ payload: courses });
              } else {
                return courseAction.loadCoursesFailure();
              }
            }),
            catchError(() => of(courseAction.loadCoursesFailure()))
          )
      )
    )
  );
}
