import {
  Component,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
  rows: ShowcaseStore[][] = [];
  isLoading = true;
  error = false;
  isPaused = false;

  private readonly ROW_COUNT = 3;
  private readonly API_URL = 'https://app.padose.com/';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadStores();
    }
  }

  ngOnDestroy(): void {}

  private loadStores(): void {
    this.http.get<ShowcaseStore[]>(`${this.API_URL}api/public/showcase-stores`).subscribe({
      next: (stores) => {
        this.stores = stores.filter((s) => s.bannerUrl || s.logoUrl);
        this.buildRows();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.error = true;
      },
    });
  }

  private buildRows(): void {
    const shuffled = [...this.stores].sort(() => Math.random() - 0.5);
    const perRow = Math.ceil(shuffled.length / this.ROW_COUNT);
    this.rows = [];
    for (let i = 0; i < this.ROW_COUNT; i++) {
      const rowStores = shuffled.slice(i * perRow, (i + 1) * perRow);
      if (rowStores.length > 0) {
        this.rows.push([...rowStores, ...rowStores]);
      }
    }
  }

  getStoreUrl(store: ShowcaseStore): string {
    return `https://${store.slug}.padose.com`;
  }

  getImageUrl(store: ShowcaseStore): string {
    return store.bannerUrl || store.logoUrl || '';
  }

  isReversed(rowIndex: number): boolean {
    return rowIndex % 2 === 1;
  }

  onMouseEnter(): void {
    this.isPaused = true;
  }

  onMouseLeave(): void {
    this.isPaused = false;
  }

  trackBySlug(_: number, store: ShowcaseStore): string {
    return store.slug + '_' + _;
  }
}
