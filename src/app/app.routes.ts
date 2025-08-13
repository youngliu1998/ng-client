import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { WishList } from './wish-list/wish-list';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    title: 'Wish List Test',
    children: [{ path: '', component: WishList }],
  },
];
