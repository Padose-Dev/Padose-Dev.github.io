import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
      withRouterConfig({ onSameUrlNavigation: 'reload' })
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideTranslateService({ defaultLanguage: 'en' }),
    provideTranslateHttpLoader({ prefix: './i18n/', suffix: '.json' }),
  ]
};
