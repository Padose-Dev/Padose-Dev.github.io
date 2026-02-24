import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-communities',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './communities.component.html',
  styleUrl: './communities.component.scss'
})
export class CommunitiesComponent {
  benefits = [
    {
      icon: '🏘️',
      title: 'Hyper-Local Marketplace',
      description: 'Each community is a curated marketplace for your neighborhood. Find sellers who are literally around the corner.'
    },
    {
      icon: '🤝',
      title: 'Build Trust',
      description: 'When you know your vendors personally, trust is natural. Padose strengthens these neighborhood bonds digitally.'
    },
    {
      icon: '🥬',
      title: 'Fresher Products',
      description: 'Shorter supply chains mean fresher produce. Buy directly from local farmers and vendors for maximum freshness.'
    },
    {
      icon: '♻️',
      title: 'Reduce Waste',
      description: 'Local, seasonal produce means less transportation, less storage, and significantly less food waste.'
    },
    {
      icon: '💪',
      title: 'Support Livelihoods',
      description: 'Every purchase on Padose directly supports a local vendor or small business owner in your community.'
    },
    {
      icon: '🌱',
      title: 'Sustainable Commerce',
      description: 'By shopping local, you reduce carbon footprint and contribute to a more sustainable economy.'
    }
  ];

  howItWorks = [
    { step: '1', title: 'Join Your Community', description: 'Find and join the community marketplace for your neighborhood or locality.' },
    { step: '2', title: 'Discover Local Sellers', description: 'Browse vendors, shops, and service providers who are part of your community.' },
    { step: '3', title: 'Shop & Connect', description: 'Order products, book services, chat with sellers — all within your trusted community.' },
    { step: '4', title: 'Grow Together', description: 'Leave reviews, refer friends, and help your community marketplace thrive.' }
  ];
}
