import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Chapter, Course } from '../models/models.component';
import { completeLesson, selectCourse } from '../store/actions';
import { selectSelectedChapter, selectSelectedCourse } from '../store/selectors';


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
 
  constructor(private store: Store, private route: ActivatedRoute){}
  ngOnInit(): void {
    
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const courseId = +this.route.snapshot.paramMap.get('courseId')!;
    this.store.dispatch(selectCourse({ courseId }));
    this.selectedCourse$ = this.store.select(selectSelectedCourse);
    this.selectedChapter$ = this.store.select(selectSelectedChapter);

  }

  onCompleteLesson(userId: number, lessonId: number) {
    this.store.dispatch(completeLesson({ userId, lessonId }));
  }

}
