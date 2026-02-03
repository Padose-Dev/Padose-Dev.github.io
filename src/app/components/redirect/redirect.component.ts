import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RedirectService } from '../../services/redirect.service';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="redirect-container">
      <div class="redirect-content">
        <h2>Redirecting...</h2>
        <p>Opening in app or Play Store...</p>
      </div>
    </div>
  `,
  styles: [`
    .redirect-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f5f5f5;
    }
    .redirect-content {
      text-align: center;
      padding: 2rem;
    }
    h2 {
      color: #333;
      margin-bottom: 1rem;
    }
    p {
      color: #666;
    }
  `]
})
export class RedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private redirectService: RedirectService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    console.log('[RedirectComponent] Initializing redirect component');
    
    // Only execute redirects in the browser (not during SSR)
    if (!isPlatformBrowser(this.platformId)) {
      console.log('[RedirectComponent] Not in browser, skipping redirect');
      return;
    }

    // Get the route path to determine type (product, service, or seller)
    const url = this.router.url;
    const id = this.route.snapshot.paramMap.get('id');
    
    console.log('[RedirectComponent] URL:', url);
    console.log('[RedirectComponent] ID:', id);
    
    if (!id) {
      console.warn('[RedirectComponent] No ID found in route parameters');
      return;
    }
    
    // Extract the base path (remove query params and fragments)
    const basePath = url.split('?')[0].split('#')[0];
    console.log('[RedirectComponent] Base path:', basePath);
    
    // Execute redirect immediately
    if (basePath.startsWith('/product/')) {
      console.log('[RedirectComponent] Redirecting to product:', id);
      this.redirectService.redirectProduct(id);
    } else if (basePath.startsWith('/service/')) {
      console.log('[RedirectComponent] Redirecting to service:', id);
      this.redirectService.redirectService(id);
    } else if (basePath.startsWith('/seller/')) {
      console.log('[RedirectComponent] Redirecting to seller:', id);
      this.redirectService.redirectSeller(id);
    } else {
      console.warn(`[RedirectComponent] Unknown route type for URL: ${url}`);
    }
  }
}

