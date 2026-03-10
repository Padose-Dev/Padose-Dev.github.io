import {
  Component,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface ShowcaseStore {
  name: string;
  slug: string;
  logoUrl: string | null;
  bannerUrl: string | null;
  community: string | null;
}

@Component({
  selector: 'app-store-globe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store-globe.component.html',
  styleUrl: './store-globe.component.scss',
})
export class StoreGlobeComponent implements OnInit, OnDestroy {
  stores: ShowcaseStore[] = [];
  visibleStores: ShowcaseStore[] = [];
  isLoading = true;
  error = false;

  // Globe config
  private readonly VISIBLE_COUNT = 24; // cards shown at once
  private readonly ROWS = 4;
  private rotationAngle = 0;
  private animationId: number | null = null;
  private rotationSpeed = 0.15; // degrees per frame
  isPaused = false;

  @ViewChild('globeContainer') globeContainer!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadStores();
    }
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

  private loadStores(): void {
    const apiUrl = (environment as any).BASE_URI || 'https://app.padose.com/';
    this.http.get<ShowcaseStore[]>(`${apiUrl}api/public/showcase-stores`).subscribe({
      next: (stores) => {
        // Shuffle and pick stores that have images
        this.stores = stores
          .filter((s) => s.bannerUrl || s.logoUrl)
          .sort(() => Math.random() - 0.5);
        this.visibleStores = this.stores.slice(0, this.VISIBLE_COUNT);
        this.isLoading = false;
        if (this.visibleStores.length > 0) {
          requestAnimationFrame(() => this.startAnimation());
        }
      },
      error: () => {
        this.isLoading = false;
        this.error = true;
      },
    });
  }

  private startAnimation(): void {
    const animate = () => {
      if (!this.isPaused) {
        this.rotationAngle += this.rotationSpeed;
        if (this.rotationAngle >= 360) this.rotationAngle -= 360;
        this.updateGlobeRotation();
      }
      this.animationId = requestAnimationFrame(animate);
    };
    this.animationId = requestAnimationFrame(animate);
  }

  private stopAnimation(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  private updateGlobeRotation(): void {
    if (!this.globeContainer?.nativeElement) return;
    const globe = this.globeContainer.nativeElement.querySelector('.globe-sphere');
    if (globe) {
      globe.style.transform = `rotateY(${this.rotationAngle}deg)`;
    }
  }

  onMouseEnter(): void {
    this.isPaused = true;
  }

  onMouseLeave(): void {
    this.isPaused = false;
  }

  getCardStyle(index: number): { [key: string]: string } {
    const total = this.visibleStores.length;
    const row = index % this.ROWS;
    const colCount = Math.ceil(total / this.ROWS);
    const col = Math.floor(index / this.ROWS);

    // Distribute cards in a sphere: theta (horizontal), phi (vertical)
    const theta = (col / colCount) * 360;
    const phiRange = 120; // total vertical spread in degrees
    const phi = -phiRange / 2 + (row / (this.ROWS - 1)) * phiRange;

    const radius = 280; // sphere radius in px

    return {
      transform: `rotateY(${theta}deg) rotateX(${phi}deg) translateZ(${radius}px)`,
    };
  }

  getStoreUrl(store: ShowcaseStore): string {
    return `/store/${store.slug}`;
  }

  getImageUrl(store: ShowcaseStore): string {
    return store.bannerUrl || store.logoUrl || '';
  }

  trackBySlug(_: number, store: ShowcaseStore): string {
    return store.slug;
  }
}
