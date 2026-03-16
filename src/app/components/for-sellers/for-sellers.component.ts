import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-for-sellers',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './for-sellers.component.html',
  styleUrl: './for-sellers.component.scss'
})
export class ForSellersComponent {
  features = [
    { title: 'forSellers.digitalStorefront', description: 'forSellers.digitalStorefrontDesc', details: ['Custom logo & banner', 'Brand colors & tagline', 'Business hours setup', 'Store policies'], icon: '🏪', gradient: 'linear-gradient(135deg, #10B981, #059669)', bgColor: '#ECFDF5' },
    { title: 'forSellers.productCatalog', description: 'forSellers.productCatalogDesc', details: ['Multiple images & videos', 'Variant management', 'Discount with expiry', 'Promotion toggle'], icon: '📦', gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', bgColor: '#EFF6FF' },
    { title: 'forSellers.serviceManagement', description: 'forSellers.serviceManagementDesc', details: ['Standard services', 'Courses & workshops', 'Capacity limits', 'Curriculum builder'], icon: '📅', gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)', bgColor: '#F5F3FF' },
    { title: 'forSellers.analyticsDashboard', description: 'forSellers.analyticsDashboardDesc', details: ['Revenue tracking', 'Order analytics', 'Customer insights', 'Popular items'], icon: '📊', gradient: 'linear-gradient(135deg, #F59E0B, #D97706)', bgColor: '#FFFBEB' },
    { title: 'forSellers.orderManagement', description: 'forSellers.orderManagementDesc', details: ['Status updates', 'Order timeline', 'Invoice generation', 'Order history'], icon: '🛒', gradient: 'linear-gradient(135deg, #14B8A6, #0D9488)', bgColor: '#F0FDFA' },
    { title: 'forSellers.schedulingAvailability', description: 'forSellers.schedulingAvailabilityDesc', details: ['Weekly schedule', 'Blocked dates', 'Time slot management', 'Holiday planning'], icon: '🗓️', gradient: 'linear-gradient(135deg, #6366F1, #4F46E5)', bgColor: '#EEF2FF' },
    { title: 'forSellers.paymentIntegration', description: 'forSellers.paymentIntegrationDesc', details: ['UPI setup', 'Payment gateway', 'Payment links', 'QR code support'], icon: '💳', gradient: 'linear-gradient(135deg, #22C55E, #16A34A)', bgColor: '#F0FDF4' },
    { title: 'forSellers.customerMessaging', description: 'forSellers.customerMessagingDesc', details: ['Real-time chat', 'Deal requests', 'Quick replies', 'Customer management'], icon: '💬', gradient: 'linear-gradient(135deg, #EC4899, #BE185D)', bgColor: '#FDF2F8' },
    { title: 'forSellers.inventoryManagement', description: 'forSellers.inventoryManagementDesc', details: ['Stock tracking', 'Variant-level control', 'Quick toggle', 'Unified dashboard'], icon: '📋', gradient: 'linear-gradient(135deg, #F97316, #EA580C)', bgColor: '#FFF7ED' },
    { title: 'forSellers.communityReach', description: 'forSellers.communityReachDesc', details: ['Multi-community listing', 'Wider reach', 'Local targeting', 'Community events'], icon: '🌐', gradient: 'linear-gradient(135deg, #06B6D4, #0284C7)', bgColor: '#ECFEFF' },
    { title: 'forSellers.pulseVideoFeed', description: 'forSellers.pulseVideoFeedDesc', details: ['Short video uploads', 'Product showcase reels', 'Video engagement analytics', 'Reach new customers'], icon: '🎬', gradient: 'linear-gradient(135deg, #EF4444, #DC2626)', bgColor: '#FEF2F2' },
    { title: 'forSellers.reviewsReputation', description: 'forSellers.reviewsReputationDesc', details: ['Customer review management', 'Star rating display', 'Review analytics & trends', 'Reputation building'], icon: '⭐', gradient: 'linear-gradient(135deg, #EAB308, #CA8A04)', bgColor: '#FEFCE8' },
    { title: 'forSellers.offersPromotions', description: 'forSellers.offersPromotionsDesc', details: ['Discount with expiry dates', 'Featured product boost', 'Promotion analytics', 'Festival & seasonal deals'], icon: '🎁', gradient: 'linear-gradient(135deg, #A855F7, #7C3AED)', bgColor: '#FAF5FF' }
  ];

  benefits = [
    { value: 'Free', label: 'forSellers.benefitFree' },
    { value: '5 min', label: 'forSellers.benefit5Min' },
    { value: '0%', label: 'forSellers.benefitZeroCommission' },
    { value: '24/7', label: 'forSellers.benefit247' }
  ];
}
