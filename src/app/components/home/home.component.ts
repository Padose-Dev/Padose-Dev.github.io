import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

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

  stats: { value: string; label: string; icon?: string }[] = [
    { value: '500+', label: 'Active Sellers' },
    { value: '50+', label: 'Communities' },
    { value: '5,000+', label: 'Products Listed' },
    { value: '4.5', label: 'App Rating', icon: 'star' },
    { value: '...', label: 'Seller Enquiries' }
  ];

  buyerSteps = [
    { title: 'Discover Nearby', description: 'Find local vendors, shops, and service providers right in your neighborhood', image: './imgs/buyer/buyerModuleImage1.svg' },
    { title: 'Shop & Book', description: 'Browse products, book services, and add to cart from multiple stores', image: './imgs/buyer/buyerModuleImage2.svg' },
    { title: 'Get Delivered', description: 'Track your order in real-time and receive it at your doorstep', image: './imgs/buyer/buyerModuleImage3.svg' }
  ];

  sellerSteps = [
    { title: 'Create Your Store', description: 'Set up your digital storefront with products, services, and custom branding', image: './imgs/seller/sellerModuleImage1.svg' },
    { title: 'Manage & Sell', description: 'Handle orders, inventory, scheduling, and customer conversations', image: './imgs/seller/sellerModuleImage2.svg' },
    { title: 'Grow Your Business', description: 'Track analytics, boost visibility, and reach more customers daily', image: './imgs/seller/sellerModuleImage3.svg' }
  ];

  buyerFeatures = [
    { title: 'Smart Discovery', description: 'Find products and services by category, location, or keyword search', image: './imgs/buyer/buyerModuleImage1.svg' },
    { title: 'Service Booking', description: 'Book appointments with time slot selection and availability tracking', image: './imgs/buyer/buyerModuleImage2.svg' },
    { title: 'Multi-Store Cart', description: 'Shop from multiple sellers in a single checkout experience', image: './imgs/buyer/buyerModuleImage3.svg' },
    { title: 'Order Tracking', description: 'Real-time status updates from placement to delivery', image: './imgs/buyer/buyerModuleImage4.svg' },
    { title: 'Chat with Sellers', description: 'Direct messaging for queries, negotiations, and custom orders', image: './imgs/buyer/buyerModuleImage5.svg' },
    { title: 'Pulse Video Feed', description: 'Watch short videos from sellers showcasing their products', image: './imgs/buyer/buyerModuleImage6.svg' },
    { title: 'Wishlist & Follows', description: 'Save favorite items and follow your preferred stores', image: './imgs/buyer/buyerModuleImage1.svg' },
    { title: 'Reviews & Ratings', description: 'Read and write honest reviews to help the community', image: './imgs/buyer/buyerModuleImage2.svg' }
  ];

  sellerFeatures = [
    { title: 'Store Customization', description: 'Logo, banner, colors, business hours, policies — make it yours', image: './imgs/seller/sellerModuleImage1.svg' },
    { title: 'Catalog Management', description: 'Products and services with variants, images, videos, and discounts', image: './imgs/seller/sellerModuleImage2.svg' },
    { title: 'Analytics Dashboard', description: 'Revenue, engagement, popular items, and customer insights at a glance', image: './imgs/seller/sellerModuleImage3.svg' },
    { title: 'Scheduling & Availability', description: 'Weekly hours, blocked dates, and course/workshop curriculum', image: './imgs/seller/sellerModuleImage4.svg' },
    { title: 'Payment Setup', description: 'UPI, payment gateways, and ad-hoc payment links', image: './imgs/seller/sellerModuleImage1.svg' },
    { title: 'Order Management', description: 'Track, update, and fulfill orders with invoice generation', image: './imgs/seller/sellerModuleImage2.svg' },
    { title: 'Customer Inbox', description: 'Respond to inquiries, negotiate deals, and build relationships', image: './imgs/seller/sellerModuleImage3.svg' },
    { title: 'Promotions', description: 'Feature products, set discounts with expiry, and boost visibility', image: './imgs/seller/sellerModuleImage4.svg' }
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

  // FOMO activity ticker
  activityNotification = '';
  showActivity = false;
  private activityInterval: any;
  private activityMessages = [
    { city: 'Hyderabad', type: 'buyer' },
    { city: 'Bangalore', type: 'seller' },
    { city: 'Chennai', type: 'buyer' },
    { city: 'Mumbai', type: 'seller' },
    { city: 'Delhi', type: 'buyer' },
    { city: 'Pune', type: 'seller' },
    { city: 'Kolkata', type: 'buyer' },
    { city: 'Ahmedabad', type: 'seller' },
    { city: 'Jaipur', type: 'buyer' },
    { city: 'Lucknow', type: 'seller' }
  ];
  private activityIndex = 0;

  currentTestimonial = 0;
  private testimonialInterval: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.testimonialInterval = setInterval(() => {
        this.nextTestimonial();
      }, 5000);

      this.loadEnquiryCount();
      this.startActivityTicker();
    }
  }

  private async loadEnquiryCount(): Promise<void> {
    try {
      const count = await this.firebaseService.getEnquiryCount();
      const enquiryStat = this.stats.find(s => s.label === 'Seller Enquiries');
      if (enquiryStat) {
        enquiryStat.value = count.toLocaleString();
      }
    } catch {
      const enquiryStat = this.stats.find(s => s.label === 'Seller Enquiries');
      if (enquiryStat) {
        enquiryStat.value = '0';
      }
    }
  }

  ngOnDestroy(): void {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
    if (this.activityInterval) {
      clearInterval(this.activityInterval);
    }
  }

  private startActivityTicker(): void {
    this.showNextActivity();
    this.activityInterval = setInterval(() => {
      this.showNextActivity();
    }, 6000);
  }

  private showNextActivity(): void {
    const msg = this.activityMessages[this.activityIndex];
    const timeAgo = Math.floor(Math.random() * 5) + 1;
    this.activityNotification = msg.type === 'buyer'
      ? `Someone in ${msg.city} just installed the Padose app - ${timeAgo}m ago`
      : `A new seller in ${msg.city} just joined Padose - ${timeAgo}m ago`;
    this.showActivity = true;

    setTimeout(() => {
      this.showActivity = false;
    }, 4500);

    this.activityIndex = (this.activityIndex + 1) % this.activityMessages.length;
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
