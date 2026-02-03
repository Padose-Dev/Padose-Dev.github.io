import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppDetectionService } from './app-detection.service';

export interface RedirectParams {
  screen: 'product' | 'service' | 'seller';
  product_id?: string | number;
  service_id?: string | number;
  seller_id?: string | number;
}

@Injectable({
  providedIn: 'root'
})
export class RedirectService {
  private readonly PLAY_STORE_BASE_URL = 'https://play.google.com/store/apps/details';
  private readonly APP_PACKAGE = 'com.padose.app.buyer';

  constructor(
    private appDetection: AppDetectionService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /**
   * Build referrer parameter string from redirect params
   * Example: screen=product&product_id=299
   */
  private buildReferrer(params: RedirectParams): string {
    const referrerParts: string[] = [`screen=${params.screen}`];
    
    if (params.product_id) {
      referrerParts.push(`product_id=${params.product_id}`);
    }
    if (params.service_id) {
      referrerParts.push(`service_id=${params.service_id}`);
    }
    if (params.seller_id) {
      referrerParts.push(`seller_id=${params.seller_id}`);
    }
    
    return referrerParts.join('&');
  }

  /**
   * Generate Play Store URL with referrer parameter
   */
  private generatePlayStoreUrl(referrer: string): string {
    const encodedReferrer = encodeURIComponent(referrer);
    const url = `${this.PLAY_STORE_BASE_URL}?id=${this.APP_PACKAGE}&referrer=${encodedReferrer}`;
    console.log('[RedirectService] Generated Play Store URL:', url);
    console.log('[RedirectService] Referrer:', referrer);
    console.log('[RedirectService] Encoded Referrer:', encodedReferrer);
    return url;
  }

  /**
   * Redirect to Play Store with referrer when app is not installed
   */
  redirectToPlayStore(params: RedirectParams): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const referrer = this.buildReferrer(params);
    const playStoreUrl = this.generatePlayStoreUrl(referrer);
    
    if (this.appDetection.isAndroid() || this.appDetection.isMobile()) {
      window.location.href = playStoreUrl;
    } else {
      // Desktop - open in new tab
      window.open(playStoreUrl, '_blank');
    }
  }

  /**
   * Try to open in app, fallback to Play Store with referrer
   */
  redirectWithFallback(path: string, params: RedirectParams): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (this.appDetection.isAndroid()) {
      // Try to open app first
      const intentUrl = this.appDetection.generateIntentUrl(path);
      window.location.href = intentUrl;
      
      // Fallback: If app not installed, redirect to Play Store with referrer
      setTimeout(() => {
        if (document.visibilityState === 'visible') {
          this.redirectToPlayStore(params);
        }
      }, 2500);
    } else if (this.appDetection.isIOS()) {
      // iOS Universal Links
      window.location.href = `https://padose.com${path}`;
    } else {
      // Desktop - redirect to Play Store with referrer
      this.redirectToPlayStore(params);
    }
  }

  /**
   * Handle product redirect
   */
  redirectProduct(productId: string | number): void {
    console.log('[RedirectService] Redirecting product:', productId);
    const path = `/product/${productId}`;
    const params: RedirectParams = {
      screen: 'product',
      product_id: productId
    };
    this.redirectWithFallback(path, params);
  }

  /**
   * Handle service redirect
   */
  redirectService(serviceId: string | number): void {
    console.log('[RedirectService] Redirecting service:', serviceId);
    const path = `/service/${serviceId}`;
    const params: RedirectParams = {
      screen: 'service',
      service_id: serviceId
    };
    this.redirectWithFallback(path, params);
  }

  /**
   * Handle seller redirect
   */
  redirectSeller(sellerId: string | number): void {
    console.log('[RedirectService] Redirecting seller:', sellerId);
    const path = `/seller/${sellerId}`;
    const params: RedirectParams = {
      screen: 'seller',
      seller_id: sellerId
    };
    this.redirectWithFallback(path, params);
  }
}

