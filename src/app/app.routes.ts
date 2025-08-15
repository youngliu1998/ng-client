import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { WishList } from './wish-list/wish-list';
import { NotFound } from './not-found/not-found';
import { Auth } from './auth/auth';

export const routes: Routes = [
  { path: '', component: Auth },
  {
    path: 'dashboard',
    component: Layout,
    title: 'Wish List Test',
    children: [{ path: '', component: WishList }],
  },
  { path: 'auth', component: Auth, title: 'Login' },
  { path: '**', component: NotFound, title: 'no this page' },
];
