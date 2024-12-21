import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, Course } from '../models/models.component';
import { selectCourse, setRecentChapter } from '../store/actions';
import { selectChapterById, selectCourses } from '../store/selectors';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  courses$?:Observable<Course[]>

  constructor(private store: Store<AppState>) {
    this.courses$ = this.store.select(selectCourses);
  }

  ngOnInit(): void {
    console.log("hello")
    // console.log(this.courses$,"courses")
  }

  onSelectCourse(courseId: number) {
    this.store.dispatch(selectCourse({ courseId }));
    this.store.dispatch(setRecentChapter({ chapterId: courseId })); // Optional: Update recent chapter
  }

  getChapterName(chapterId: number) {
    // Use the selector to get the chapter by its ID
    this.store.select(selectChapterById(chapterId)).subscribe(chapter => {
      if (chapter) {
        return chapter.name; // Return the chapter name
      }
      return 'Chapter not found'; // In case the chapter ID is not found
    });
  }
}
