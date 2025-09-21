import { Routes } from '@angular/router';
import {About} from './features/about/about';

export const routes: Routes = [
  {
    path: 'about',
    component: About,
    title: 'About',
  },
  {
    path: 'terms-and-conditions',
    loadComponent: () =>
      import('./features/terms-conditions/terms-conditions').then(
        (m) => m.TermsConditions
      ),
    title: 'Terms and Conditions',
  },
  {
    path: '',
    loadComponent: () =>
      import('./features/home-screen/home-screen').then((m) => m.HomeScreen),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact').then((m) => m.Contact),
    title: 'Contact',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
