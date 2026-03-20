import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FirebaseService } from '../../services/firebase.service';
import { SeoService } from '../../services/seo.service';
import { StoreGlobeComponent } from '../store-globe/store-globe.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule, StoreGlobeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  persona: 'buyer' | 'seller' | null = null;
  activeTab: 'buyer' | 'seller' = 'buyer';
  email = '';
  subscribedSuccess = false;

  stats: { value: string; label: string; icon?: string }[] = [
    { value: '260+', label: 'homeStats.activeSellers' },
    { value: '50+', label: 'homeStats.communities' },
    { value: '4.5', label: 'homeStats.appRating', icon: 'star' },
    { value: '...', label: 'homeStats.sellerEnquiries' }
  ];

  buyerStats: { value: string; label: string }[] = [
    { value: '260+', label: 'homeStats.localStores' },
    { value: '50+', label: 'homeStats.communities' },
    { value: '12+', label: 'homeStats.categories' },
    { value: '4.5★', label: 'homeStats.appRating' }
  ];

  sellerStats: { value: string; label: string }[] = [
    { value: '0%', label: 'homeStats.commission' },
    { value: '5 min', label: 'homeStats.setupTime' },
    { value: '260+', label: 'homeStats.sellersJoined' },
    { value: 'Free', label: 'homeStats.forever' }
  ];

  buyerSteps = [
    { title: 'homeSteps.buyerStep1Title', description: 'homeSteps.buyerStep1Desc', image: './imgs/buyer/buyerModuleImage1.svg' },
    { title: 'homeSteps.buyerStep2Title', description: 'homeSteps.buyerStep2Desc', image: './imgs/buyer/buyerModuleImage2.svg' },
    { title: 'homeSteps.buyerStep3Title', description: 'homeSteps.buyerStep3Desc', image: './imgs/buyer/buyerModuleImage3.svg' }
  ];

  sellerSteps = [
    { title: 'homeSteps.sellerStep1Title', description: 'homeSteps.sellerStep1Desc', image: './imgs/seller/sellerModuleImage1.svg' },
    { title: 'homeSteps.sellerStep2Title', description: 'homeSteps.sellerStep2Desc', image: './imgs/seller/sellerModuleImage2.svg' },
    { title: 'homeSteps.sellerStep3Title', description: 'homeSteps.sellerStep3Desc', image: './imgs/seller/sellerModuleImage3.svg' }
  ];

  buyerHighlights = [
    { title: 'homeHighlights.smartDiscovery', description: 'homeHighlights.smartDiscoveryDesc', image: './imgs/buyer/buyerModuleImage1.svg' },
    { title: 'homeHighlights.serviceBooking', description: 'homeHighlights.serviceBookingDesc', image: './imgs/buyer/buyerModuleImage2.svg' },
    { title: 'homeHighlights.multiStoreCart', description: 'homeHighlights.multiStoreCartDesc', image: './imgs/buyer/buyerModuleImage3.svg' },
    { title: 'homeHighlights.orderTracking', description: 'homeHighlights.orderTrackingDesc', image: './imgs/buyer/buyerModuleImage4.svg' },
    { title: 'homeHighlights.chatWithSellers', description: 'homeHighlights.chatWithSellersDesc', image: './imgs/buyer/buyerModuleImage5.svg' },
    { title: 'homeHighlights.pulseVideoFeed', description: 'homeHighlights.pulseVideoFeedDesc', image: './imgs/buyer/buyerModuleImage6.svg' }
  ];

  buyerFeatures = [
    { title: 'homeHighlights.wishlistFollows', description: 'homeHighlights.wishlistFollowsDesc', accent: '#EC4899' },
    { title: 'homeHighlights.reviewsRatings', description: 'homeHighlights.reviewsRatingsDesc', accent: '#EAB308' }
  ];

  sellerHighlights = [
    { title: 'homeHighlights.storeCustomization', description: 'homeHighlights.storeCustomizationDesc', image: './imgs/seller/sellerModuleImage1.svg' },
    { title: 'homeHighlights.catalogManagement', description: 'homeHighlights.catalogManagementDesc', image: './imgs/seller/sellerModuleImage2.svg' },
    { title: 'homeHighlights.aiProductListing', description: 'homeHighlights.aiProductListingDesc', image: './imgs/seller/sellerModuleImage3.svg' },
    { title: 'homeHighlights.analyticsDashboard', description: 'homeHighlights.analyticsDashboardDesc', image: './imgs/seller/sellerModuleImage4.svg' }
  ];

  sellerFeatures = [
    { title: 'homeSellerFeatures.orderManagement', description: 'homeSellerFeatures.orderManagementDesc', accent: '#14B8A6' },
    { title: 'homeSellerFeatures.scheduling', description: 'homeSellerFeatures.schedulingDesc', accent: '#6366F1' },
    { title: 'homeSellerFeatures.paymentSetup', description: 'homeSellerFeatures.paymentSetupDesc', accent: '#22C55E' },
    { title: 'homeSellerFeatures.customerInbox', description: 'homeSellerFeatures.customerInboxDesc', accent: '#EC4899' },
    { title: 'homeSellerFeatures.pulseVideo', description: 'homeSellerFeatures.pulseVideoDesc', accent: '#EF4444' },
    { title: 'homeSellerFeatures.reviewsReputation', description: 'homeSellerFeatures.reviewsReputationDesc', accent: '#EAB308' },
    { title: 'homeSellerFeatures.offersPromotions', description: 'homeSellerFeatures.offersPromotionsDesc', accent: '#A855F7' },
    { title: 'homeSellerFeatures.storeDna', description: 'homeSellerFeatures.storeDnaDesc', accent: '#06B6D4' },
    { title: 'homeSellerFeatures.storeWebsite', description: 'homeSellerFeatures.storeWebsiteDesc', accent: '#F97316' }
  ];

  categories = [
    { name: 'homeCategories.freshProduce', icon: '🥬', color: '#22C55E' },
    { name: 'homeCategories.streetFood', icon: '🍜', color: '#F59E0B' },
    { name: 'homeCategories.groceries', icon: '🛒', color: '#3B82F6' },
    { name: 'homeCategories.homeServices', icon: '🔧', color: '#6366F1' },
    { name: 'homeCategories.beautyWellness', icon: '💆', color: '#EC4899' },
    { name: 'homeCategories.tutoring', icon: '📚', color: '#8B5CF6' },
    { name: 'homeCategories.handmadeCrafts', icon: '🎨', color: '#F97316' },
    { name: 'homeCategories.clothing', icon: '👗', color: '#14B8A6' },
    { name: 'homeCategories.electronicsRepair', icon: '📱', color: '#0EA5E9' },
    { name: 'homeCategories.fitnessYoga', icon: '🧘', color: '#EF4444' },
    { name: 'homeCategories.petServices', icon: '🐾', color: '#A855F7' },
    { name: 'homeCategories.photography', icon: '📸', color: '#D946EF' }
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
    },
    {
      name: 'RRK Collection',
      role: 'Store Owner',
      quote: 'Ee roju start chesanu nenu ....3 orders vachayandi website nundi. Thank you so much for giving this amazing platform to us.',
      avatar: 'R',
      source: 'whatsapp',
      image: './imgs/seller/testimonial-rrk-collection.png'
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
    private seo: SeoService,
    private translate: TranslateService
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
      const enquiryStat = this.stats.find(s => s.label === 'homeStats.sellerEnquiries');
      if (enquiryStat) {
        enquiryStat.value = count.toLocaleString();
      }
    } catch {
      const enquiryStat = this.stats.find(s => s.label === 'homeStats.sellerEnquiries');
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
    if (msg.type === 'buyer') {
      this.translate.get('home.activityBuyer', { city: msg.city, time: timeAgo }).subscribe(text => {
        this.activityNotification = text;
      });
    } else {
      this.translate.get('home.activitySeller', { city: msg.city, time: timeAgo }).subscribe(text => {
        this.activityNotification = text;
      });
    }
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
