import { Observable } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { courseSelector } from '../store/selectors/course.selector';
import { chapterSelector } from '../store/selectors/chapter.selector';
import { Chapter, Course } from '../models/models.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  selectedCourseId: number | null = null;

courses?:Course[]=[]
chapters?:any=[]
  constructor(private router:Router,private store:Store) {
  
  }

  ngOnInit(): void {
    this.store.select(courseSelector).subscribe(data=>{
      this.courses=data
    })
    this.store.select(chapterSelector).subscribe((data)=>{
      this.chapters=data
    })
  
    

  }
  getChaptersForCourse(courseId: number) {

    return this.chapters.filter((chapter: { courseId: number; }) => chapter.courseId === courseId);
  }

  onSelectCourse(courseId: number) {
    console.log(courseId)
  }

  // getChapterName(chapterId: number) {
   
  //   this.store.select(selectChapterById(chapterId)).subscribe(chapter => {
  //     if (chapter) {
  //       return chapter.name; 
  //     }
  //     return 'Chapter not found';
  //   });
  // }
  toggleCourse(courseId: number): void {
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
