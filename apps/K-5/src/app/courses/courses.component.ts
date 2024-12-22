import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, Course } from '../models/models.component';
import { selectCourse, setRecentChapter } from '../store/actions';
import { selectChapterById, selectCourses } from '../store/selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  selectedCourseId: string | null = null;
  courses$?:Observable<Course[]>
  courses= [
    {
      id: '1',
      title: 'Angular Basics',
      description: 'Learn the fundamentals of Angular.',
      lessons: [
        { id: '1', title: 'Introduction to Angular', description: 'Getting started with Angular.' },
        { id: '2', title: 'Components and Templates', description: 'Learn about components and templates.' },
        { id: '3', title: 'Services and Dependency Injection', description: 'Understanding services in Angular.' },
      ],
    },
    {
      id: '2',
      title: 'React Essentials',
      description: 'Master the basics of React.',
      lessons: [
        { id: '1', title: 'Introduction to React', description: 'Getting started with React.' },
        { id: '2', title: 'React Components', description: 'Learn about React components.' },
        { id: '3', title: 'State Management in React', description: 'Learn how to manage state in React.' },
      ],
    },
    {
      id: '3',
      title: 'Node.js for Beginners',
      description: 'Learn backend development with Node.js.',
      lessons: [
        { id: '1', title: 'Setting up Node.js', description: 'Setting up Node.js for development.' },
        { id: '2', title: 'Creating a Simple Server', description: 'Learn how to create a server using Node.js.' },
        { id: '3', title: 'Handling HTTP Requests', description: 'Learn how to handle HTTP requests in Node.js.' },
      ],
    },
  ];

  constructor(private store: Store<AppState>,private router:Router) {
    this.courses$ = this.store.select(selectCourses);
  }

  ngOnInit(): void {
    console.log("hello")
    this.courses$?.subscribe(value=>{
      console.log("value",value)
    })
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
  toggleCourse(courseId: string): void {
    if (this.selectedCourseId === courseId) {
      this.selectedCourseId = null; // Close the course if already selected
    } else {
      this.selectedCourseId = courseId; // Open the clicked course
    }
  }
  navigateChapterpage(id:string){
    this.router.navigate([`courses/:${id}/chapters`])
  }
}
