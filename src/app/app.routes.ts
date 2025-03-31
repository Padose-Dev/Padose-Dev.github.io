import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'section',
    loadComponent: () =>
      import('./components/sections/sections.component').then(m => m.SectionsComponent),
  },
  {
    path: 'seller-onboard',
    loadComponent: () =>
      import('./components/seller-onboarding/seller-onboarding.component').then(m => m.SellerOnboardingComponent),
  }
];
