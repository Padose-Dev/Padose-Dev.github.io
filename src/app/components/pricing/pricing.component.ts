import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Pricing - Free Forever During Beta',
      description: 'Padose is completely free for sellers. Zero commission, free store website, unlimited products. See our transparent pricing.',
      keywords: 'Padose pricing, free online store, zero commission marketplace, sell online free',
      ogUrl: 'https://padose.com/pricing'
    });
  }

  faqs = [
    { q: 'Is Padose really free?', a: 'Yes. During our beta phase, all features are completely free for sellers. No hidden charges, no commission on sales.', open: false },
    { q: 'Will there be paid plans in the future?', a: 'We may introduce optional premium features later, but the core selling experience will always have a free tier. Early sellers who join now will get special benefits.', open: false },
    { q: 'Do you charge commission on sales?', a: 'No. Zero commission. You keep 100% of your sales revenue.', open: false },
    { q: 'What payment methods do buyers use?', a: 'Buyers can pay via UPI, payment gateways, or cash on delivery. You set up your preferred payment method in the seller app.', open: false },
    { q: 'How do I get started?', a: 'Just register with your phone number, business name, and city. Our team will help you set up your store within 24 hours.', open: false }
  ];

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
