import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './landing_page.component.html',
  styleUrl: './landing_page.component.css',
})
export class LandingPageComponent {}
