import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CoursesComponent } from '../courses/courses.component';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { userSelector } from '../store/selectors/login.selector';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, CoursesComponent, RouterLink],
  templateUrl: './landing_page.component.html',
  styleUrl: './landing_page.component.css',
})
export class LandingPageComponent implements OnInit{
  userName!: any;
  points!: any;
  avatars!: any;
  isSidenavOpen = false;
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
  
  

  openNav() {
    this.isSidenavOpen = true;
  }

  closeNav() {
    this.isSidenavOpen = false;
  }
}
