import { Routes } from '@angular/router';
// import { Layout } from './layout/layout';
// import { WishList } from './wish-list/wish-list';
import { NotFound } from './not-found/not-found';
import { Auth } from './auth/auth';
import { authGuard, publicGuard } from './_guard/auth-guard';

export const routes: Routes = [
  { path: '', component: Auth, title: 'login'},
  {
    path: 'dashboard',
    loadComponent: () => import('./layout/layout').then((m) => m.Layout),
    title: 'Wish List Test',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./wish-list/wish-list').then((m) => m.WishList),
      },
    ],
  },
  { path: '**', component: NotFound, title: 'no this page' },
];
