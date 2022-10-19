import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const getToken = JSON.parse(localStorage.getItem('user')!)
    if (!getToken?.authToken?.accessToken) {
            this.router.navigate(['/login'], {queryParams: {redirect: state.url}, replaceUrl: true});
          }
          return true;
  }
}
