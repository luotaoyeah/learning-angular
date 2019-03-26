import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    // @ts-ignore
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin(state.url);
  }

  /**
   * 检查是否登录
   * @param url 要跳转的地址
   */
  private checkLogin(url: string) {
    if (this.authService.isLogin) {
      return true;
    }

    this.authService.redirectUrl = url;
    this.router.navigate(['/doc/fundamental/routing/sample-application/login']);
    return false;
  }
}
