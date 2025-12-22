import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppDetectionService } from '../../services/app-detection.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  businessId: string | null = null;
  store: any = null;
  products: any[] = [];
  services: any[] = [];
  isLoading = true;
  error: string | null = null;
  isMobile = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private appDetection: AppDetectionService
  ) {
    this.isMobile = this.appDetection.isMobile();
  }

  ngOnInit(): void {
    // Get business_id from route
    this.route.paramMap.subscribe(params => {
      this.businessId = params.get('business_id');
      if (this.businessId) {
        this.loadStoreData();
      } else {
        this.error = 'Store ID not found';
        this.isLoading = false;
      }
    });
  }

  /**
   * Load store data from API
   */
  loadStoreData(): void {
    if (!this.businessId) return;

    this.isLoading = true;
    this.error = null;

    // Fetch store details
    this.http.get(`${environment.BASE_URI}seller/get?id=${this.businessId}`).subscribe({
      next: (response: any) => {
        if (response && response.data) {
          this.store = response.data;
          this.loadStoreProducts();
        } else {
          this.error = 'Store not found';
          this.isLoading = false;
        }
      },
      error: (err) => {
        console.error('Error loading store:', err);
        this.error = 'Failed to load store information';
        this.isLoading = false;
      }
    });
  }

  /**
   * Load store products and services
   */
  loadStoreProducts(): void {
    if (!this.businessId) {
      this.isLoading = false;
      return;
    }

    // Fetch products
    const productsRequest = this.http.get(`${environment.BASE_URI}product/get?seller_id=${this.businessId}&limit=10`).toPromise();
    
    // Fetch services
    const servicesRequest = this.http.get(`${environment.BASE_URI}service/get?seller_id=${this.businessId}&limit=10`).toPromise();

    Promise.all([productsRequest, servicesRequest])
      .then(([productsRes, servicesRes]: any[]) => {
        this.products = productsRes?.data || [];
        this.services = servicesRes?.data || [];
        this.isLoading = false;
      })
      .catch((err) => {
        console.error('Error loading products/services:', err);
        // Continue even if products fail to load
        this.products = [];
        this.services = [];
        this.isLoading = false;
      });
  }

  /**
   * Open store in buyer app
   */
  openInApp(): void {
    if (this.businessId) {
      this.appDetection.openInApp(`/store/${this.businessId}`);
    }
  }

  /**
   * Download buyer app from Play Store
   */
  downloadApp(): void {
    this.appDetection.downloadApp();
  }

  /**
   * Navigate to registration page
   */
  signUp(): void {
    // Store current URL for redirect after registration
    // Note: Buyer app uses /seller/{sellerId} route, not /store/{businessId}
    if (this.businessId) {
      localStorage.setItem('redirectAfterLogin', `/seller/${this.businessId}`);
    }
    // Navigate to registration (you may need to create this route)
    this.router.navigate(['/seller-onboard']);
  }

  /**
   * Navigate to login page
   */
  login(): void {
    // Store current URL for redirect after login
    // Note: Buyer app uses /seller/{sellerId} route, not /store/{businessId}
    if (this.businessId) {
      localStorage.setItem('redirectAfterLogin', `/seller/${this.businessId}`);
    }
    // Navigate to login (you may need to create this route or use buyer app login)
    // For now, redirect to buyer app login
    this.appDetection.openInApp('/login');
  }

  /**
   * Get store image or default
   */
  getStoreImage(): string {
    return this.store?.logo_image || '/imgs/logo.png';
  }

  /**
   * Format rating display
   */
  getRatingDisplay(): string {
    if (this.store?.rating) {
      return `${this.store.rating.toFixed(1)} ⭐`;
    }
    return '';
  }

  /**
   * Get location display
   */
  getLocationDisplay(): string {
    const parts: string[] = [];
    if (this.store?.city) parts.push(this.store.city);
    if (this.store?.pincode) parts.push(this.store.pincode);
    return parts.join(', ') || '';
  }

  /**
   * Navigate to home page
   */
  goToHome(): void {
    this.router.navigate(['/']);
  }
}

