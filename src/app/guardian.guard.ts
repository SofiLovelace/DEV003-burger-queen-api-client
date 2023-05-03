import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuardianGuard implements CanActivate {
  constructor(private router: Router) {}

  public checkPermissions(path: any): boolean {
    if (sessionStorage.getItem('userRole') === 'admin') {
      return true;
    }
    if (path === sessionStorage.getItem('userRole')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(route.url[0].path);
    return this.checkPermissions(route.url[0].path);
  }
}
