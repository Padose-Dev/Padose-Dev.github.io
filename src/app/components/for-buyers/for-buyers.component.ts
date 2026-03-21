import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-for-buyers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './for-buyers.component.html',
  styleUrl: './for-buyers.component.scss'
})
export class ForBuyersComponent {
  features = [
    {
      icon: '🔍',
      title: 'Smart Discovery',
      description: 'Browse by category, search by keyword, or explore nearby stores. Our location-based discovery ensures you always find the best products and services around you.',
      details: ['Category browsing', 'Keyword search', 'Location-based results', 'Featured & promoted items'],
      image: './imgs/buyer/buyerModuleImage1.svg'
    },
    {
      icon: '🛒',
      title: 'Multi-Store Shopping',
      description: 'Add products from multiple sellers into a single cart. Padose handles the complexity so you can shop seamlessly across your neighborhood.',
      details: ['Multi-store cart', 'Quantity management', 'Store-wise grouping', 'Variant selection'],
      image: './imgs/buyer/buyerModuleImage2.svg'
    },
    {
      icon: '📅',
      title: 'Service Booking',
      description: 'Book appointments for services like tutoring, beauty treatments, fitness sessions, and more. Select your preferred date, time slot, and service variant.',
      details: ['Time slot selection', 'Availability calendar', 'Service variants', 'Capacity management'],
      image: './imgs/buyer/buyerModuleImage3.svg'
    },
    {
      icon: '📱',
      title: 'Real-Time Order Tracking',
      description: 'From the moment you place an order to delivery, track every step. Get notified when your order is confirmed, shipped, and out for delivery.',
      details: ['Status timeline', 'Push notifications', 'Order history', 'Invoice download'],
      image: './imgs/buyer/buyerModuleImage4.svg'
    },
    {
      icon: '💬',
      title: 'Chat with Sellers',
      description: 'Have questions? Negotiate a price? Want a custom order? Message sellers directly within the app for instant communication.',
      details: ['Real-time messaging', 'Deal negotiation', 'Custom order requests', 'Quick responses'],
      image: './imgs/buyer/buyerModuleImage5.svg'
    },
    {
      icon: '🎬',
      title: 'Pulse Video Feed',
      description: 'Watch short-form videos from local sellers showcasing their products, recipes, behind-the-scenes, and more. Discover new stores through engaging content.',
      details: ['Short videos', 'Product showcases', 'Seller stories', 'Like & interact'],
      image: './imgs/buyer/buyerModuleImage6.svg'
    },
    {
      icon: '❤️',
      title: 'Wishlist & Follow Stores',
      description: 'Save products and services you love for later. Follow your favorite stores to get updates whenever they add new items or run promotions.',
      details: ['Save products', 'Save services', 'Follow stores', 'Get updates'],
      image: './imgs/buyer/buyerModuleImage1.svg'
    },
    {
      icon: '⭐',
      title: 'Reviews & Ratings',
      description: 'Read honest reviews from other buyers before making a purchase. Share your experience to help the community make better decisions.',
      details: ['Product reviews', 'Service reviews', 'Star ratings', 'Community trust'],
      image: './imgs/buyer/buyerModuleImage2.svg'
    },
    {
      icon: '🏘️',
      title: 'Community Marketplace',
      description: 'Join your neighborhood community to discover hyper-local sellers. Each community is a curated marketplace tailored to your area.',
      details: ['Join communities', 'Local sellers', 'Curated marketplace', 'Neighborhood focus'],
      image: './imgs/buyer/buyerModuleImage3.svg'
    },
    {
      icon: '📍',
      title: 'Address Management',
      description: 'Save multiple delivery addresses for home, office, or any location. Switch between addresses effortlessly during checkout.',
      details: ['Multiple addresses', 'Easy switching', 'Auto-detect location', 'Delivery notes'],
      image: './imgs/buyer/buyerModuleImage4.svg'
    }
  ];
}
