import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Chapter, Course } from '../models/models.component';
import { chapterSelector } from '../store/selectors/chapter.selector';

// import { completeLesson, selectCourse } from '../store/actions';
// import {
// 	selectSelectedChapter,
// 	selectSelectedCourse,
// } from '../store/selectors';

@Component({
  selector: 'app-chapters',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './chapters.component.html',
  styleUrl: './chapters.component.css',
})
export class ChaptersComponent implements OnInit{
  selectedCourse$?:Observable<Course | null>
  selectedChapter$?:Observable<Chapter| null>
  completed: undefined
  
  lessons= [
    { id: '1', title: 'Lesson 1: Introduction to Angular', content: 'This is the content for Lesson 1.', completed: true },
    { id: '2', title: 'Lesson 2: Angular Components', content: 'This is the content for Lesson 2.', completed: false },
    { id: '3', title: 'Lesson 3: Angular Services', content: 'This is the content for Lesson 3.', completed: false },
    { id: '4', title: 'Lesson 4: Angular Routing', content: 'This is the content for Lesson 4.', completed: false }
  ]
  selectedLessonId: string | null = null;
  selectedLesson:undefined
 

  constructor(private store: Store, private route: ActivatedRoute){}

  ngOnInit(): void {
    console.log("chapters")
    this.store.select(chapterSelector).subscribe(data=>{
      // this.lessons=data
      console.log(data)
    })

  }
  toggleCompletion(lessonId: string|null): void {
    const lesson = this.lessons.find((lesson) => lesson.id === lessonId);
    if (lesson) {
      lesson.completed = !lesson.completed;
    }
  }

  // onCompleteLesson(userId: number, lessonId: number) {
  //   this.store.dispatch(completeLesson({ userId, lessonId }));
  // }


  selectLesson(lessonId: string): void {
    this.selectedLessonId = lessonId;
  }



  // Get the content of the selected lesson
  getSelectedLesson(){
    return this.lessons.find(lesson => lesson.id === this.selectedLessonId);
  }


}
