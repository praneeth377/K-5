import {  createSelector } from '@ngrx/store';
import { AppState } from '../models/models.component';

export const selectUsers = (state: AppState) => state.users;
export const selectCourses = (state: AppState) => state.courses;
export const selectChapters = (state: AppState) => state.chapters;
export const selectLessons = (state: AppState) => state.lessons;

export const selectSelectedCourse = createSelector(
  (state: AppState) => state.selectedCourseId,
  selectCourses,
  (courseId, courses) => courses.find(course => course.id === courseId)??null
);

export const selectSelectedChapter = createSelector(
  (state: AppState) => state.selectedChapterId,
  selectChapters,
  (chapterId, chapters) => chapters.find(chapter => chapter.id === chapterId)??null
);

export const selectRecentChapter = (state: AppState) => state.recentChapter;

export const selectChapterById = (chapterId: number) => createSelector(
  selectChapters,
  (chapters) => chapters.find(chapter => chapter.id === chapterId)
);
