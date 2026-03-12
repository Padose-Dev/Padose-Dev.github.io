import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="not-found">
      <div class="container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div class="not-found-actions">
          <a routerLink="/" class="btn-home">Go to Homepage</a>
          <a routerLink="/seller-onboard" class="btn-seller">Start Selling</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .not-found {
      min-height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 4rem 1rem;
    }
    .container { max-width: 500px; }
    h1 {
      font-size: 6rem;
      font-weight: 800;
      color: #001F60;
      line-height: 1;
      margin-bottom: 0.5rem;
    }
    h2 {
      font-size: 1.5rem;
      color: #334155;
      margin-bottom: 1rem;
    }
    p {
      color: #64748b;
      margin-bottom: 2rem;
    }
    .not-found-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    .btn-home, .btn-seller {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      font-size: 0.95rem;
    }
    .btn-home {
      background: #001F60;
      color: #fff;
    }
    .btn-seller {
      background: #25D366;
      color: #fff;
    }
    .btn-home:hover { background: #002d8a; }
    .btn-seller:hover { background: #1fb855; }
  `]
})
export class NotFoundComponent {}
