import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './landing_page.component.html',
  styleUrl: './landing_page.component.css',
})
export class LandingPageComponent {}
