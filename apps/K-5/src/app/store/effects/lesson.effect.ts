import { catchError, map, of, switchMap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Lesson, User } from '../../models/models.component';
import { lessonActions } from '../actions/lesson.action';

@Injectable()
export class LessonEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  // Fetch lessons for a chapter
  fetchLessons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(lessonActions.fetchLessons),
      switchMap(({ chapterId }) =>
        this.http
          .get<Lesson[]>(`http://localhost:3000/lessons?chapterId=${chapterId}`)
          .pipe(
            map((lessons) => lessonActions.fetchLessonsSuccess({ lessons })),
            catchError(() => of(lessonActions.fetchLessonsFailure({ error: 'Failed to fetch lessons' })))
          )
      )
    )
  );

  // Complete a lesson
  completeLesson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(lessonActions.completeLesson),
      switchMap(({ userId, lessonId, points }) =>
        this.http.get<User>(`http://localhost:3000/users/${userId}`).pipe(
          switchMap((user) => {
            const updatedUser = {
              ...user,
              totalPoints: user.totalPoints + points,
              completedLessons: [...user.completedLessons, lessonId],
            };

            return this.http
              .patch(`http://localhost:3000/users/${userId}`, updatedUser)
              .pipe(
                map(() => lessonActions.completeLessonSuccess({ user: updatedUser })),
                catchError(() =>
                  of(lessonActions.completeLessonFailure({ error: 'Failed to complete lesson' }))
                )
              );
          })
        )
      )
    )
  );
}
