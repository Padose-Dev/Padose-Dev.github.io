import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDetectionService {
  private readonly PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.padose.app.buyer';
  private readonly APP_PACKAGE = 'com.padose.app.buyer';
  private readonly APP_SCHEME = 'padose://';
  private readonly WEB_URL = 'https://padose.com';

  /**
   * Check if user is on Android device
   */
  isAndroid(): boolean {
    return /Android/i.test(navigator.userAgent);
  }

  /**
   * Check if user is on iOS device
   */
  isIOS(): boolean {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  /**
   * Check if user is on mobile device
   */
  isMobile(): boolean {
    return this.isAndroid() || this.isIOS();
  }

  /**
   * Generate Android Intent URL for opening app
   */
  generateIntentUrl(path: string): string {
    // Format: intent://host/path#Intent;scheme=https;package=com.package.name;end
    return `intent://padose.com${path}#Intent;scheme=https;package=${this.APP_PACKAGE};end`;
  }

  /**
   * Generate custom scheme URL (fallback)
   */
  generateCustomSchemeUrl(path: string): string {
    return `${this.APP_SCHEME}${path}`;
  }

  /**
   * Try to open app with given path
   * Falls back to Play Store if app not installed
   */
  openInApp(path: string): void {
    if (this.isAndroid()) {
      const intentUrl = this.generateIntentUrl(path);
      
      // Try to open app
      window.location.href = intentUrl;
      
      // Fallback: If app not installed, redirect to Play Store after timeout
      setTimeout(() => {
        // Check if we're still on the same page (app didn't open)
        if (document.visibilityState === 'visible') {
          this.downloadApp();
        }
      }, 2500);
    } else if (this.isIOS()) {
      // iOS Universal Links (if configured)
      // For now, just try the web URL which should open app if configured
      window.location.href = `${this.WEB_URL}${path}`;
    } else {
      // Desktop - just open web URL
      window.location.href = `${this.WEB_URL}${path}`;
    }
  }

  /**
   * Open Play Store/App Store for app download
   */
  downloadApp(): void {
    if (this.isAndroid()) {
      window.open(this.PLAY_STORE_URL, '_blank');
    } else if (this.isIOS()) {
      // TODO: Add iOS App Store URL when available
      window.open(this.PLAY_STORE_URL, '_blank');
    } else {
      // Desktop - open Play Store in web
      window.open(this.PLAY_STORE_URL, '_blank');
    }
  }

  /**
   * Get the store link for sharing
   */
  getStoreLink(businessId: number | string): string {
    return `${this.WEB_URL}/store/${businessId}`;
  }
}

