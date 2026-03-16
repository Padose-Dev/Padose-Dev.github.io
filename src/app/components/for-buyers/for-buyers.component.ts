import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-for-buyers',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './for-buyers.component.html',
  styleUrl: './for-buyers.component.scss'
})
export class ForBuyersComponent {
  features = [
    {
      icon: '🔍',
      title: 'forBuyers.smartDiscovery',
      description: 'forBuyers.smartDiscoveryDesc',
      details: ['forBuyers.smartDiscoveryDetails.0', 'forBuyers.smartDiscoveryDetails.1', 'forBuyers.smartDiscoveryDetails.2', 'forBuyers.smartDiscoveryDetails.3'],
      image: './imgs/buyer/buyerModuleImage1.svg'
    },
    {
      icon: '🛒',
      title: 'forBuyers.multiStoreShopping',
      description: 'forBuyers.multiStoreShoppingDesc',
      details: ['forBuyers.multiStoreShoppingDetails.0', 'forBuyers.multiStoreShoppingDetails.1', 'forBuyers.multiStoreShoppingDetails.2', 'forBuyers.multiStoreShoppingDetails.3'],
      image: './imgs/buyer/buyerModuleImage2.svg'
    },
    {
      icon: '📅',
      title: 'forBuyers.serviceBooking',
      description: 'forBuyers.serviceBookingDesc',
      details: ['forBuyers.serviceBookingDetails.0', 'forBuyers.serviceBookingDetails.1', 'forBuyers.serviceBookingDetails.2', 'forBuyers.serviceBookingDetails.3'],
      image: './imgs/buyer/buyerModuleImage3.svg'
    },
    {
      icon: '📱',
      title: 'forBuyers.orderTracking',
      description: 'forBuyers.orderTrackingDesc',
      details: ['forBuyers.orderTrackingDetails.0', 'forBuyers.orderTrackingDetails.1', 'forBuyers.orderTrackingDetails.2', 'forBuyers.orderTrackingDetails.3'],
      image: './imgs/buyer/buyerModuleImage4.svg'
    },
    {
      icon: '💬',
      title: 'forBuyers.chatWithSellers',
      description: 'forBuyers.chatWithSellersDesc',
      details: ['forBuyers.chatWithSellersDetails.0', 'forBuyers.chatWithSellersDetails.1', 'forBuyers.chatWithSellersDetails.2', 'forBuyers.chatWithSellersDetails.3'],
      image: './imgs/buyer/buyerModuleImage5.svg'
    },
    {
      icon: '🎬',
      title: 'forBuyers.pulseVideoFeed',
      description: 'forBuyers.pulseVideoFeedDesc',
      details: ['forBuyers.pulseVideoFeedDetails.0', 'forBuyers.pulseVideoFeedDetails.1', 'forBuyers.pulseVideoFeedDetails.2', 'forBuyers.pulseVideoFeedDetails.3'],
      image: './imgs/buyer/buyerModuleImage6.svg'
    },
    {
      icon: '❤️',
      title: 'forBuyers.wishlistFollow',
      description: 'forBuyers.wishlistFollowDesc',
      details: ['forBuyers.wishlistFollowDetails.0', 'forBuyers.wishlistFollowDetails.1', 'forBuyers.wishlistFollowDetails.2', 'forBuyers.wishlistFollowDetails.3'],
      image: './imgs/buyer/buyerModuleImage1.svg'
    },
    {
      icon: '⭐',
      title: 'forBuyers.reviewsRatings',
      description: 'forBuyers.reviewsRatingsDesc',
      details: ['forBuyers.reviewsRatingsDetails.0', 'forBuyers.reviewsRatingsDetails.1', 'forBuyers.reviewsRatingsDetails.2', 'forBuyers.reviewsRatingsDetails.3'],
      image: './imgs/buyer/buyerModuleImage2.svg'
    },
    {
      icon: '🏘️',
      title: 'forBuyers.communityMarketplace',
      description: 'forBuyers.communityMarketplaceDesc',
      details: ['forBuyers.communityMarketplaceDetails.0', 'forBuyers.communityMarketplaceDetails.1', 'forBuyers.communityMarketplaceDetails.2', 'forBuyers.communityMarketplaceDetails.3'],
      image: './imgs/buyer/buyerModuleImage3.svg'
    },
    {
      icon: '📍',
      title: 'forBuyers.addressManagement',
      description: 'forBuyers.addressManagementDesc',
      details: ['forBuyers.addressManagementDetails.0', 'forBuyers.addressManagementDetails.1', 'forBuyers.addressManagementDetails.2', 'forBuyers.addressManagementDetails.3'],
      image: './imgs/buyer/buyerModuleImage4.svg'
    }
  ];
}
