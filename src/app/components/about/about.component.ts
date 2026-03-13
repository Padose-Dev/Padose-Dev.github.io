import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'About Us - People Tech Ventures',
      description: 'Padose is built by People Tech Ventures, Rajahmundry. Our mission: empower every local seller with technology to reach their neighborhood.',
      keywords: 'Padose about, People Tech Ventures, local marketplace India, neighborhood marketplace startup',
      ogUrl: 'https://padose.com/about'
    });
  }

  values = [
    { icon: '🤝', title: 'Community First', description: 'We believe local commerce strengthens communities. Every feature we build aims to connect neighbors and empower local businesses.' },
    { icon: '🌱', title: 'Sustainability', description: 'By promoting local, seasonal products, we reduce food miles, minimize waste, and support a greener economy.' },
    { icon: '🎯', title: 'Simplicity', description: 'Technology should be accessible. We design our platform so that even first-time smartphone users can sell and shop with ease.' },
    { icon: '💡', title: 'Innovation', description: 'From video feeds to smart scheduling, we continuously innovate to give our users the best possible marketplace experience.' }
  ];

  milestones = [
    { year: '2024', title: 'Idea & Research', description: 'Identified the gap — millions of local sellers with no affordable digital presence. Started market research and customer discovery.' },
    { year: 'Early 2025', title: 'Building the Product', description: 'Designed and developed the buyer and seller apps. Bootstrapped the platform with core marketplace, chat, and catalog features.' },
    { year: 'Dec 2025', title: 'Launch', description: 'Padose went live with real users. First sellers onboarded, first orders placed, first communities formed.' },
    { year: '2026', title: 'Growing', description: 'Adding features like Pulse video feed, AI product listing, service booking, and auto social posting. Onboarding more communities every week.' }
  ];
}
