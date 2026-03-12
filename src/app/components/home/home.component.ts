import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { SeoService } from '../../services/seo.service';
import { StoreGlobeComponent } from '../store-globe/store-globe.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, StoreGlobeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  persona: 'buyer' | 'seller' | null = null;
  activeTab: 'buyer' | 'seller' = 'buyer';
  email = '';
  subscribedSuccess = false;

  stats: { value: string; label: string; icon?: string }[] = [
    { value: '260+', label: 'Active Sellers' },
    { value: '50+', label: 'Communities' },
    { value: '4.5', label: 'App Rating', icon: 'star' },
    { value: '...', label: 'Seller Enquiries' }
  ];

  buyerStats: { value: string; label: string }[] = [
    { value: '260+', label: 'Local Stores' },
    { value: '50+', label: 'Communities' },
    { value: '12+', label: 'Categories' },
    { value: '4.5★', label: 'App Rating' }
  ];

  sellerStats: { value: string; label: string }[] = [
    { value: '0%', label: 'Commission' },
    { value: '5 min', label: 'Setup Time' },
    { value: '260+', label: 'Sellers Joined' },
    { value: 'Free', label: 'Forever' }
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

  buyerHighlights = [
    { title: 'Smart Discovery', description: 'Find products and services by category, location, or keyword search', image: './imgs/buyer/buyerModuleImage1.svg' },
    { title: 'Service Booking', description: 'Book appointments with time slot selection and availability tracking', image: './imgs/buyer/buyerModuleImage2.svg' },
    { title: 'Multi-Store Cart', description: 'Shop from multiple sellers in a single checkout experience', image: './imgs/buyer/buyerModuleImage3.svg' },
    { title: 'Order Tracking', description: 'Real-time status updates from placement to delivery', image: './imgs/buyer/buyerModuleImage4.svg' },
    { title: 'Chat with Sellers', description: 'Direct messaging for queries, negotiations, and custom orders', image: './imgs/buyer/buyerModuleImage5.svg' },
    { title: 'Pulse Video Feed', description: 'Watch short videos from sellers showcasing their products', image: './imgs/buyer/buyerModuleImage6.svg' }
  ];

  buyerFeatures = [
    { title: 'Wishlist & Follows', description: 'Save favorite items and follow your preferred stores', accent: '#EC4899' },
    { title: 'Reviews & Ratings', description: 'Read and write honest reviews to help the community', accent: '#EAB308' }
  ];

  sellerHighlights = [
    { title: 'Store Customization', description: 'Logo, banner, colors, business hours, policies — make it yours', image: './imgs/seller/sellerModuleImage1.svg' },
    { title: 'Catalog Management', description: 'Products and services with variants, images, videos, and discounts', image: './imgs/seller/sellerModuleImage2.svg' },
    { title: 'AI Product Listing', description: 'Describe your product in chat and AI creates the full listing for you', image: './imgs/seller/sellerModuleImage3.svg' },
    { title: 'Analytics Dashboard', description: 'Revenue, engagement, popular items, and customer insights at a glance', image: './imgs/seller/sellerModuleImage4.svg' }
  ];

  sellerFeatures = [
    { title: 'Order Management', description: 'Track, update, and fulfill orders with invoice generation', accent: '#14B8A6' },
    { title: 'Scheduling & Availability', description: 'Weekly hours, blocked dates, and course/workshop curriculum', accent: '#6366F1' },
    { title: 'Payment Setup', description: 'UPI, payment gateways, and ad-hoc payment links', accent: '#22C55E' },
    { title: 'Customer Inbox', description: 'Respond to inquiries, negotiate deals, and build relationships', accent: '#EC4899' },
    { title: 'Pulse Video Feed', description: 'Short-form videos to showcase products and reach new customers', accent: '#EF4444' },
    { title: 'Reviews & Reputation', description: 'Customer reviews, star ratings, and reputation analytics', accent: '#EAB308' },
    { title: 'Offers & Promotions', description: 'Time-limited discounts, featured products, and seasonal deals', accent: '#A855F7' },
    { title: 'Store DNA', description: 'Your performance score vs peers — 7 dimensions, color-coded grades, and tips', accent: '#06B6D4' },
    { title: 'Store Website', description: 'Free website at yourstore.padose.com — buyers browse without installing an app', accent: '#F97316' }
  ];

  categories = [
    { name: 'Fresh Produce', icon: '🥬', color: '#22C55E' },
    { name: 'Street Food', icon: '🍜', color: '#F59E0B' },
    { name: 'Groceries', icon: '🛒', color: '#3B82F6' },
    { name: 'Home Services', icon: '🔧', color: '#6366F1' },
    { name: 'Beauty & Wellness', icon: '💆', color: '#EC4899' },
    { name: 'Tutoring', icon: '📚', color: '#8B5CF6' },
    { name: 'Handmade Crafts', icon: '🎨', color: '#F97316' },
    { name: 'Clothing', icon: '👗', color: '#14B8A6' },
    { name: 'Electronics Repair', icon: '📱', color: '#0EA5E9' },
    { name: 'Fitness & Yoga', icon: '🧘', color: '#EF4444' },
    { name: 'Pet Services', icon: '🐾', color: '#A855F7' },
    { name: 'Photography', icon: '📸', color: '#D946EF' }
  ];

  testimonials = [
    {
      name: 'Seller on Padose',
      role: 'Store Owner',
      quote: 'This is my first ever experience of creating my own store. I felt it was smooth, user friendly and accessible at ease with the add on being the chat bot. I just had to upload minimal details and my product was published. Journey matters than success at times. I feel this is one such experience I\'ve ever had.',
      avatar: 'S',
      source: 'whatsapp'
    },
    {
      name: 'Seller on Padose',
      role: 'Store Owner',
      quote: 'Thank you for your time sir. Nice explanation and app is very useful and easy to use.',
      avatar: 'S',
      source: 'whatsapp'
    },
    {
      name: 'Seller on Padose',
      role: 'Store Owner',
      quote: 'App looks amazing. Will try and let you know.',
      avatar: 'S',
      source: 'whatsapp'
    },
    {
      name: 'Seller on Padose',
      role: 'Store Owner',
      quote: 'This app is very useful, sir.',
      avatar: 'S',
      source: 'whatsapp'
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
  private resetHandler?: () => void;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private firebaseService: FirebaseService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Your Neighborhood Marketplace',
      description: 'Padose connects you with local sellers — fresh produce, home services, handmade crafts. 260+ sellers, zero commission. Download the app or start selling today.',
      keywords: 'local marketplace, neighborhood shopping, street vendors, fresh produce, home services, sell online free, Padose',
      ogUrl: 'https://padose.com'
    });

    if (isPlatformBrowser(this.platformId)) {
      // Restore persona from localStorage
      const saved = localStorage.getItem('padose_persona');
      if (saved === 'buyer' || saved === 'seller') {
        this.persona = saved;
        this.activeTab = saved;
      }

      // Listen for "Home" click reset event from header
      this.resetHandler = () => {
        this.persona = null;
        this.activeTab = 'buyer';
      };
      window.addEventListener('padose-reset-persona', this.resetHandler);

      this.testimonialInterval = setInterval(() => {
        this.nextTestimonial();
      }, 5000);

      this.loadEnquiryCount();
      this.startActivityTicker();
    }
  }

  selectPersona(p: 'buyer' | 'seller'): void {
    this.persona = p;
    this.activeTab = p;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('padose_persona', p);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  switchPersona(): void {
    const next = this.persona === 'buyer' ? 'seller' : 'buyer';
    this.selectPersona(next); // selectPersona already scrolls to top
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
    if (this.resetHandler) {
      window.removeEventListener('padose-reset-persona', this.resetHandler);
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
}
