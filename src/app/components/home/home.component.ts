import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  activeTab: 'buyer' | 'seller' = 'buyer';
  email = '';
  subscribedSuccess = false;

  stats = [
    { value: '10,000+', label: 'Active Sellers' },
    { value: '500+', label: 'Communities' },
    { value: '50,000+', label: 'Products Listed' },
    { value: '4.5', label: 'App Rating', icon: 'star' }
  ];

  buyerSteps = [
    { icon: '📍', title: 'Discover Nearby', description: 'Find local vendors, shops, and service providers right in your neighborhood' },
    { icon: '🛒', title: 'Shop & Book', description: 'Browse products, book services, and add to cart from multiple stores' },
    { icon: '🚀', title: 'Get Delivered', description: 'Track your order in real-time and receive it at your doorstep' }
  ];

  sellerSteps = [
    { icon: '🏪', title: 'Create Your Store', description: 'Set up your digital storefront with products, services, and custom branding' },
    { icon: '📦', title: 'Manage & Sell', description: 'Handle orders, inventory, scheduling, and customer conversations' },
    { icon: '📈', title: 'Grow Your Business', description: 'Track analytics, boost visibility, and reach more customers daily' }
  ];

  buyerFeatures = [
    { icon: '🔍', title: 'Smart Discovery', description: 'Find products and services by category, location, or keyword search' },
    { icon: '📅', title: 'Service Booking', description: 'Book appointments with time slot selection and availability tracking' },
    { icon: '🛍️', title: 'Multi-Store Cart', description: 'Shop from multiple sellers in a single checkout experience' },
    { icon: '📱', title: 'Order Tracking', description: 'Real-time status updates from placement to delivery' },
    { icon: '💬', title: 'Chat with Sellers', description: 'Direct messaging for queries, negotiations, and custom orders' },
    { icon: '🎬', title: 'Pulse Video Feed', description: 'Watch short videos from sellers showcasing their products' },
    { icon: '❤️', title: 'Wishlist & Follows', description: 'Save favorite items and follow your preferred stores' },
    { icon: '⭐', title: 'Reviews & Ratings', description: 'Read and write honest reviews to help the community' }
  ];

  sellerFeatures = [
    { icon: '🏪', title: 'Store Customization', description: 'Logo, banner, colors, business hours, policies — make it yours' },
    { icon: '📦', title: 'Catalog Management', description: 'Products and services with variants, images, videos, and discounts' },
    { icon: '📊', title: 'Analytics Dashboard', description: 'Revenue, engagement, popular items, and customer insights at a glance' },
    { icon: '📅', title: 'Scheduling & Availability', description: 'Weekly hours, blocked dates, and course/workshop curriculum' },
    { icon: '💳', title: 'Payment Setup', description: 'UPI, payment gateways, and ad-hoc payment links' },
    { icon: '📋', title: 'Order Management', description: 'Track, update, and fulfill orders with invoice generation' },
    { icon: '💬', title: 'Customer Inbox', description: 'Respond to inquiries, negotiate deals, and build relationships' },
    { icon: '🎯', title: 'Promotions', description: 'Feature products, set discounts with expiry, and boost visibility' }
  ];

  categories = [
    { name: 'Fresh Produce', icon: '🥬' },
    { name: 'Street Food', icon: '🍜' },
    { name: 'Groceries', icon: '🛒' },
    { name: 'Home Services', icon: '🔧' },
    { name: 'Beauty & Wellness', icon: '💅' },
    { name: 'Tutoring', icon: '📚' },
    { name: 'Handmade Crafts', icon: '🎨' },
    { name: 'Clothing', icon: '👗' },
    { name: 'Electronics Repair', icon: '📱' },
    { name: 'Fitness & Yoga', icon: '🧘' },
    { name: 'Pet Services', icon: '🐾' },
    { name: 'Photography', icon: '📸' }
  ];

  testimonials = [
    {
      name: 'Lakshmi Devi',
      role: 'Vegetable Vendor, Hyderabad',
      quote: 'Padose transformed my pushcart business. Now customers find me easily, place orders in advance, and I waste less produce. My income has grown significantly!',
      avatar: 'L'
    },
    {
      name: 'Rahul Sharma',
      role: 'Buyer, Bangalore',
      quote: 'I love getting fresh vegetables from my neighborhood vendor through Padose. The quality is amazing and delivery is super fast since they are just around the corner!',
      avatar: 'R'
    },
    {
      name: 'Priya Kumari',
      role: 'Home Baker, Chennai',
      quote: 'As a home baker, Padose gave me a professional storefront. I manage orders, schedule deliveries, and my customer base has tripled in just 3 months.',
      avatar: 'P'
    }
  ];

  currentTestimonial = 0;
  private testimonialInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.testimonialInterval = setInterval(() => {
        this.nextTestimonial();
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  nextTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentTestimonial = this.currentTestimonial === 0
      ? this.testimonials.length - 1
      : this.currentTestimonial - 1;
  }

  setTestimonial(index: number): void {
    this.currentTestimonial = index;
  }

  switchTab(tab: 'buyer' | 'seller'): void {
    this.activeTab = tab;
  }

  get currentSteps() {
    return this.activeTab === 'buyer' ? this.buyerSteps : this.sellerSteps;
  }

  get currentFeatures() {
    return this.activeTab === 'buyer' ? this.buyerFeatures : this.sellerFeatures;
  }
}
