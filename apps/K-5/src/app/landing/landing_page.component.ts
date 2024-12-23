import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { CoursesComponent } from '../courses/courses.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userSelector } from '../store/selectors/login.selector';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatButtonModule, CoursesComponent],
  templateUrl: './landing_page.component.html',
  styleUrl: './landing_page.component.css',
})
export class LandingPageComponent implements OnInit{
  userName!: any;
  points!: any;
  avatars!: any;
  //userName$ = Observable<any>;

  constructor(private router:Router, private store: Store){
  }

  ngOnInit(): void {
    this.store.select(userSelector).subscribe((authState) => {
      console.log(authState);
      this.userName = authState.user.name;
      this.points = authState.user.totalPoints;
      this.avatars = authState.user.avatar;
      console.log(this.avatars);
          
        });
        //this.userName$ = this.userName;
  }
  
  buttonClick():void {
    this.router.navigate(['/courses']);
  }
}
