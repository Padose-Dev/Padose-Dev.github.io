import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'for-buyers',
    loadComponent: () =>
      import('./components/for-buyers/for-buyers.component').then(m => m.ForBuyersComponent),
  },
  {
    path: 'for-sellers',
    loadComponent: () =>
      import('./components/for-sellers/for-sellers.component').then(m => m.ForSellersComponent),
  },
  {
    path: 'communities',
    loadComponent: () =>
      import('./components/communities/communities.component').then(m => m.CommunitiesComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./components/faq/faq.component').then(m => m.FaqComponent),
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
  },
  {
    path: 'open',
    loadComponent: () =>
      import('./components/open-data/open-data.component').then(m => m.OpenDataComponent),
  },
  {
    path: 'delete-account',
    loadComponent: () =>
      import('./components/delete-account/delete-account.component').then(m => m.DeleteAccountComponent),
  },
  {
    path: 'store/:business_id',
    loadComponent: () =>
      import('./components/store/store.component').then(m => m.StoreComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./components/redirect/redirect.component').then(m => m.RedirectComponent),
  },
  {
    path: 'service/:id',
    loadComponent: () =>
      import('./components/redirect/redirect.component').then(m => m.RedirectComponent),
  },
  {
    path: 'seller/:id',
    loadComponent: () =>
      import('./components/redirect/redirect.component').then(m => m.RedirectComponent),
  }
];
