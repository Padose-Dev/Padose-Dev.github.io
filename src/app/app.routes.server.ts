import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'store/**',
    renderMode: RenderMode.Server
  },
  {
    path: 'product/**',
    renderMode: RenderMode.Client
  },
  {
    path: 'service/**',
    renderMode: RenderMode.Client
  },
  {
    path: 'seller/**',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
