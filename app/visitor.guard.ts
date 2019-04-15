import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class VisitorGuard implements CanActivate {
	constructor(private as: AuthService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.as.getRole().map((role: string) => (role == "a" || role == "e"));
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.as.getRole().map((role: string) => (role == "a" || role == "e"));;
  }
}
