import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { userService } from '../../share/services/user-service';
import { map, tap } from 'rxjs';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(userService);
  const routeNavigation = inject(Router);
  return authService.isAuth$.pipe(
    tap((isAuth) => {
      console.log('authGuard', isAuth);
      if (!isAuth) {
        alert('please login first');
        routeNavigation.navigateByUrl('/');
      }
    }),
    map((isAuth) => isAuth)
  );
};

export const publicGuard: CanActivateFn = (route, state) => {
  const authService = inject(userService);
  const router = inject(Router);

  // Directly subscribe to the isAuth$ Observable from the userService
  return authService.isAuth$.pipe(
    // The core logic is inverted
    map(isAuth => {
      if (isAuth) {
        // If the user is logged in, redirect them to the dashboard
        return router.createUrlTree(['/dashboard']);
      }
      // Otherwise, allow them to proceed to the current route
      return true;
    })
  );
};
