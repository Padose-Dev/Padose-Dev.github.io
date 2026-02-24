import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    { icon: '🤝', title: 'Community First', description: 'We believe local commerce strengthens communities. Every feature we build aims to connect neighbors and empower local businesses.' },
    { icon: '🌱', title: 'Sustainability', description: 'By promoting local, seasonal products, we reduce food miles, minimize waste, and support a greener economy.' },
    { icon: '🎯', title: 'Simplicity', description: 'Technology should be accessible. We design our platform so that even first-time smartphone users can sell and shop with ease.' },
    { icon: '💡', title: 'Innovation', description: 'From video feeds to smart scheduling, we continuously innovate to give our users the best possible marketplace experience.' }
  ];

  milestones = [
    { year: '2024', title: 'The Beginning', description: 'Padose was founded with a mission to digitize street vendors and local shops.' },
    { year: '2024', title: 'App Launch', description: 'Launched buyer and seller apps on Google Play Store with core marketplace features.' },
    { year: '2025', title: 'Community Growth', description: 'Expanded to 500+ communities with features like Pulse video feed and service booking.' },
    { year: '2026', title: 'Scaling Up', description: 'Growing across India with advanced analytics, payment integrations, and course management.' }
  ];
}
