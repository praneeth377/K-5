import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { CoursesComponent } from '../courses/courses.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatButtonModule, CoursesComponent],
  templateUrl: './landing_page.component.html',
  styleUrl: './landing_page.component.css',
})
export class LandingPageComponent {
  constructor(private router:Router){}
  
  buttonClick():void {
    this.router.navigate(['/courses']);
  }
}
