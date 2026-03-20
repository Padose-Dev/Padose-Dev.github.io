import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [CommonModule, RouterModule, TranslateModule]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileView = false;
  mobileMenuOpen = false;
  currentLang = 'en';
  showLangMenu = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {
    this.currentLang = this.translate.currentLang || this.translate.defaultLang || 'en';
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
    if (!this.isMobileView) {
      this.mobileMenuOpen = false;
    }
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.showLangMenu = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 20;
    }
  }

  checkScreenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = window.innerWidth <= 1024;
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  switchLang(lang: string): void {
    this.currentLang = lang;
    this.translate.use(lang);
    this.showLangMenu = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('padose_lang', lang);
    }
  }

  toggleLangMenu(): void {
    this.showLangMenu = !this.showLangMenu;
  }

  goHome(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('padose_persona');
      // Dispatch a custom event so the home component can reset even on same-url nav
      window.dispatchEvent(new Event('padose-reset-persona'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    this.closeMobileMenu();
    this.router.navigate(['/']);
  }
}
