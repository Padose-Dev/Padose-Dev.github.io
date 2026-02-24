import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-for-sellers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './for-sellers.component.html',
  styleUrl: './for-sellers.component.scss'
})
export class ForSellersComponent {
  features = [
    {
      icon: '🏪',
      title: 'Your Digital Storefront',
      description: 'Create a professional online store with custom branding — logo, banner, accent color, tagline, and business hours. Your store, your identity.',
      details: ['Custom logo & banner', 'Brand colors & tagline', 'Business hours setup', 'Store policies'],
      image: './imgs/seller/sellerModuleImage1.svg'
    },
    {
      icon: '📦',
      title: 'Product Catalog',
      description: 'List unlimited products with multiple images, videos, variants (sizes, colors), pricing, and discount configuration. Manage everything from your phone.',
      details: ['Multiple images & videos', 'Variant management', 'Discount with expiry', 'Promotion toggle'],
      image: './imgs/seller/sellerModuleImage2.svg'
    },
    {
      icon: '🎯',
      title: 'Service Management',
      description: 'Offer services like tutoring, beauty, fitness, and more. Set up time slots, manage capacity, and even create courses with curriculum and schedules.',
      details: ['Standard services', 'Courses & workshops', 'Capacity limits', 'Curriculum builder'],
      image: './imgs/seller/sellerModuleImage3.svg'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track your business performance with real-time insights — revenue, orders, engagement metrics, popular items, and customer behavior analytics.',
      details: ['Revenue tracking', 'Order analytics', 'Customer insights', 'Popular items'],
      image: './imgs/seller/sellerModuleImage4.svg'
    },
    {
      icon: '📋',
      title: 'Order Management',
      description: 'Manage incoming orders with status tracking. Update orders from new to confirmed, shipped, and delivered. Generate professional invoices.',
      details: ['Status updates', 'Order timeline', 'Invoice generation', 'Order history'],
      image: './imgs/seller/sellerModuleImage1.svg'
    },
    {
      icon: '📅',
      title: 'Scheduling & Availability',
      description: 'Set your weekly operating hours, block specific dates, and manage service availability. Perfect for service providers with fixed schedules.',
      details: ['Weekly schedule', 'Blocked dates', 'Time slot management', 'Holiday planning'],
      image: './imgs/seller/sellerModuleImage2.svg'
    },
    {
      icon: '💳',
      title: 'Payment Integration',
      description: 'Accept payments via UPI, payment gateways, or create custom payment links. Set up your preferred payment method and start collecting.',
      details: ['UPI setup', 'Payment gateway', 'Payment links', 'QR code support'],
      image: './imgs/seller/sellerModuleImage3.svg'
    },
    {
      icon: '💬',
      title: 'Customer Messaging',
      description: 'Communicate directly with buyers through an integrated inbox. Answer queries, negotiate deals, and build lasting customer relationships.',
      details: ['Real-time chat', 'Deal requests', 'Quick replies', 'Customer management'],
      image: './imgs/seller/sellerModuleImage4.svg'
    },
    {
      icon: '📈',
      title: 'Inventory Management',
      description: 'Track stock levels across all your product variants. Toggle availability instantly and never oversell with real-time inventory sync.',
      details: ['Stock tracking', 'Variant-level control', 'Quick toggle', 'Unified dashboard'],
      image: './imgs/seller/sellerModuleImage1.svg'
    },
    {
      icon: '🌐',
      title: 'Community Reach',
      description: 'List your store in multiple community marketplaces to reach more customers. Get discovered by buyers in different neighborhoods.',
      details: ['Multi-community listing', 'Wider reach', 'Local targeting', 'Community events'],
      image: './imgs/seller/sellerModuleImage2.svg'
    }
  ];

  benefits = [
    { value: 'Free', label: 'No registration or subscription fees' },
    { value: '5 min', label: 'Quick setup — start selling in minutes' },
    { value: '0%', label: 'Zero commission on your sales' },
    { value: '24/7', label: 'Your store is always open online' }
  ];
}
