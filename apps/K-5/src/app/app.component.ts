import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LandingPageComponent } from './landing/landing_page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LandingPageComponent, MatProgressBarModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'K-5';
}
