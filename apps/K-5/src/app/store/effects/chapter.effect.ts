import { catchError, map, of, switchMap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Chapter } from '../../models/models.component';
import { chapterAction } from '../actions/chapter.action';
import { courseAction } from '../actions/course.action';

@Injectable()
export class ChapterEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  chapter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(chapterAction.loadChapters),
      switchMap(() =>
        this.http
          .get<Chapter[]>(`http://localhost:3000/chapters`)
          .pipe(
            map((chapters) => {
              if (chapters.length > 0) {
                return chapterAction.loadChaptersSuccess({ payload: chapters });
              } else {
                return chapterAction.loadChaptersFailure();
              }
            }),
            catchError(() => of(chapterAction.loadChaptersFailure()))
          )
      )
    )
  );
}
