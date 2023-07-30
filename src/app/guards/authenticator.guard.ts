import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatorGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('token');

    if (!token) {
      return this.unauthenticated();
    }

    return true;
  }

  unauthenticated() {
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }
}
