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
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./components/contact-us/contact-us.component').then(m => m.ContactUsComponent),
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () =>
      import('./components/terms-and-conditions/terms-and-conditions.component').then(m => m.TermsAndConditionsComponent),
  },
  {
    path: 'cancellation-refund-policy',
    loadComponent: () =>
      import('./components/cancellation-refund-policy/cancellation-refund-policy.component').then(m => m.CancellationRefundPolicyComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./components/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
  }
];
