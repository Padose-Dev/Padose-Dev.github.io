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
      title: 'Your Digital Storefront',
      description: 'Create a professional online store with custom branding — logo, banner, accent color, tagline, and business hours. Your store, your identity.',
      details: ['Custom logo & banner', 'Brand colors & tagline', 'Business hours setup', 'Store policies'],
      icon: '🏪',
      gradient: 'linear-gradient(135deg, #10B981, #059669)',
      bgColor: '#ECFDF5'
    },
    {
      title: 'Product Catalog',
      description: 'List unlimited products with multiple images, videos, variants (sizes, colors), pricing, and discount configuration. Manage everything from your phone.',
      details: ['Multiple images & videos', 'Variant management', 'Discount with expiry', 'Promotion toggle'],
      icon: '📦',
      gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
      bgColor: '#EFF6FF'
    },
    {
      title: 'Service Management',
      description: 'Offer services like tutoring, beauty, fitness, and more. Set up time slots, manage capacity, and even create courses with curriculum and schedules.',
      details: ['Standard services', 'Courses & workshops', 'Capacity limits', 'Curriculum builder'],
      icon: '📅',
      gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
      bgColor: '#F5F3FF'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track your business performance with real-time insights — revenue, orders, engagement metrics, popular items, and customer behavior analytics.',
      details: ['Revenue tracking', 'Order analytics', 'Customer insights', 'Popular items'],
      icon: '📊',
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
      bgColor: '#FFFBEB'
    },
    {
      title: 'Order Management',
      description: 'Manage incoming orders with status tracking. Update orders from new to confirmed, shipped, and delivered. Generate professional invoices.',
      details: ['Status updates', 'Order timeline', 'Invoice generation', 'Order history'],
      icon: '🛒',
      gradient: 'linear-gradient(135deg, #14B8A6, #0D9488)',
      bgColor: '#F0FDFA'
    },
    {
      title: 'Scheduling & Availability',
      description: 'Set your weekly operating hours, block specific dates, and manage service availability. Perfect for service providers with fixed schedules.',
      details: ['Weekly schedule', 'Blocked dates', 'Time slot management', 'Holiday planning'],
      icon: '🗓️',
      gradient: 'linear-gradient(135deg, #6366F1, #4F46E5)',
      bgColor: '#EEF2FF'
    },
    {
      title: 'Payment Integration',
      description: 'Accept payments via UPI, payment gateways, or create custom payment links. Set up your preferred payment method and start collecting.',
      details: ['UPI setup', 'Payment gateway', 'Payment links', 'QR code support'],
      icon: '💳',
      gradient: 'linear-gradient(135deg, #22C55E, #16A34A)',
      bgColor: '#F0FDF4'
    },
    {
      title: 'Customer Messaging',
      description: 'Communicate directly with buyers through an integrated inbox. Answer queries, negotiate deals, and build lasting customer relationships.',
      details: ['Real-time chat', 'Deal requests', 'Quick replies', 'Customer management'],
      icon: '💬',
      gradient: 'linear-gradient(135deg, #EC4899, #BE185D)',
      bgColor: '#FDF2F8'
    },
    {
      title: 'Inventory Management',
      description: 'Track stock levels across all your product variants. Toggle availability instantly and never oversell with real-time inventory sync.',
      details: ['Stock tracking', 'Variant-level control', 'Quick toggle', 'Unified dashboard'],
      icon: '📋',
      gradient: 'linear-gradient(135deg, #F97316, #EA580C)',
      bgColor: '#FFF7ED'
    },
    {
      title: 'Community Reach',
      description: 'List your store in multiple community marketplaces to reach more customers. Get discovered by buyers in different neighborhoods.',
      details: ['Multi-community listing', 'Wider reach', 'Local targeting', 'Community events'],
      icon: '🌐',
      gradient: 'linear-gradient(135deg, #06B6D4, #0284C7)',
      bgColor: '#ECFEFF'
    },
    {
      title: 'Pulse Video Feed',
      description: 'Create short-form videos showcasing your products, behind-the-scenes moments, or customer testimonials. Reach more buyers through engaging video content on the Pulse feed.',
      details: ['Short video uploads', 'Product showcase reels', 'Video engagement analytics', 'Reach new customers'],
      icon: '🎬',
      gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
      bgColor: '#FEF2F2'
    },
    {
      title: 'Reviews & Reputation',
      description: 'Build trust with verified customer reviews and ratings. Track your store reputation, respond to feedback, and let your happy customers bring you more business.',
      details: ['Customer review management', 'Star rating display', 'Review analytics & trends', 'Reputation building'],
      icon: '⭐',
      gradient: 'linear-gradient(135deg, #EAB308, #CA8A04)',
      bgColor: '#FEFCE8'
    },
    {
      title: 'Offers & Promotions',
      description: 'Create time-limited discounts, featured product promotions, and special deals to attract more buyers. Set expiry dates and track how your offers perform.',
      details: ['Discount with expiry dates', 'Featured product boost', 'Promotion analytics', 'Festival & seasonal deals'],
      icon: '🎁',
      gradient: 'linear-gradient(135deg, #A855F7, #7C3AED)',
      bgColor: '#FAF5FF'
    }
  ];

  benefits = [
    { value: 'Free', label: 'No registration or subscription fees' },
    { value: '5 min', label: 'Quick setup — start selling in minutes' },
    { value: '0%', label: 'Zero commission on your sales' },
    { value: '24/7', label: 'Your store is always open online' }
  ];
}
