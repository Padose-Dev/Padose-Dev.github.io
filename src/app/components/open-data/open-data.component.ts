import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
declare const Chart: any;

@Component({
  selector: 'app-open-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './open-data.component.html',
  styleUrl: './open-data.component.scss'
})
export class OpenDataComponent implements OnInit, OnDestroy {
  private readonly API = 'https://app.padose.com/open';

  kpis: { label: string; value: number; display: string }[] = [];
  topStores: any[] = [];
  communities: any[] = [];
  growthData: any = null;
  activePeriod: 'daily' | 'weekly' | 'monthly' = 'daily';
  lastUpdated = '';
  loading = true;
  private refreshInterval: any;
  private growthChart: any = null;
  private chartLoaded = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadChartJs().then(() => {
        this.chartLoaded = true;
        this.loadAll();
        this.refreshInterval = setInterval(() => this.loadAll(), 60_000);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.refreshInterval) clearInterval(this.refreshInterval);
    if (this.growthChart) this.growthChart.destroy();
  }

  private loadChartJs(): Promise<void> {
    return new Promise((resolve) => {
      if (typeof Chart !== 'undefined') { resolve(); return; }
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/chart.js@4';
      s.onload = () => resolve();
      document.head.appendChild(s);
    });
  }

  private loadAll(): void {
    Promise.all([
      this.http.get<any>(`${this.API}/stats`).toPromise(),
      this.http.get<any>(`${this.API}/growth`).toPromise(),
      this.http.get<any[]>(`${this.API}/top-stores`).toPromise(),
      this.http.get<any[]>(`${this.API}/communities`).toPromise(),
    ]).then(([stats, growth, stores, communities]) => {
      this.kpis = [
        { label: 'Orders Delivered', value: stats.totalOrders, display: '0' },
        { label: 'Active Stores', value: stats.totalStores, display: '0' },
        { label: 'Products', value: stats.totalProducts, display: '0' },
        { label: 'Services', value: stats.totalServices, display: '0' },
        { label: 'Buyers', value: stats.totalBuyers, display: '0' },
        { label: 'Sellers', value: stats.totalSellers, display: '0' },
      ];
      this.animateCounters();

      this.growthData = growth;
      this.topStores = stores || [];
      this.communities = communities || [];
      this.loading = false;
      this.lastUpdated = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

      setTimeout(() => this.renderChart(), 0);
    }).catch(() => {
      this.loading = false;
    });
  }

  private animateCounters(): void {
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      this.kpis.forEach(k => {
        k.display = Math.round(k.value * eased).toLocaleString();
      });
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  switchPeriod(mode: 'daily' | 'weekly' | 'monthly'): void {
    this.activePeriod = mode;
    this.renderChart();
  }

  get periodSubtitle(): string {
    const map = { daily: 'Daily — Last 30 Days', weekly: 'Weekly — Last 12 Weeks', monthly: 'Monthly — Last 12 Months' };
    return map[this.activePeriod];
  }

  private renderChart(): void {
    if (!this.chartLoaded || !this.growthData) return;
    const canvas = document.getElementById('growth-chart') as HTMLCanvasElement;
    if (!canvas) return;

    const group = this.growthData[this.activePeriod];
    const dateKey = this.activePeriod === 'daily' ? 'date' : this.activePeriod === 'weekly' ? 'week' : 'month';

    const labelSet = new Set<string>();
    ['orders', 'buyers', 'stores'].forEach(key => {
      (group[key] || []).forEach((r: any) => labelSet.add(r[dateKey]));
    });
    const sortedDates = [...labelSet].sort();

    const labels = sortedDates.map(d => {
      const dt = new Date(d);
      if (this.activePeriod === 'daily') return dt.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
      if (this.activePeriod === 'weekly') {
        const start = new Date(dt.getFullYear(), 0, 1);
        const wk = Math.ceil(((dt.getTime() - start.getTime()) / 86400000 + start.getDay() + 1) / 7);
        return 'W' + wk + ' ' + dt.toLocaleDateString('en-IN', { month: 'short' });
      }
      return dt.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });
    });

    const toMap = (arr: any[]) => {
      const m: Record<string, number> = {};
      (arr || []).forEach((r: any) => m[r[dateKey]] = r.count);
      return m;
    };
    const ordersMap = toMap(group.orders);
    const buyersMap = toMap(group.buyers);
    const storesMap = toMap(group.stores);

    const ctx = canvas.getContext('2d')!;
    if (this.growthChart) this.growthChart.destroy();
    this.growthChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: 'Orders', data: sortedDates.map(d => ordersMap[d] || 0), backgroundColor: 'rgba(108,92,231,0.7)', borderRadius: 4 },
          { label: 'New Buyers', data: sortedDates.map(d => buyersMap[d] || 0), backgroundColor: 'rgba(0,184,148,0.7)', borderRadius: 4 },
          { label: 'New Stores', data: sortedDates.map(d => storesMap[d] || 0), backgroundColor: 'rgba(253,203,110,0.8)', borderRadius: 4 },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: { y: { beginAtZero: true, ticks: { precision: 0 } } },
      },
    });
  }

  getInitial(name: string): string {
    return name ? name.charAt(0).toUpperCase() : '?';
  }
}
