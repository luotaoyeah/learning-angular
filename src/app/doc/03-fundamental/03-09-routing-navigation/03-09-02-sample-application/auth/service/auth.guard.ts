import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  /**
   * canActivate() 用来守护某个路由
   * @param next 要跳转的路由
   * @param state 当前路由状态
   */
  canActivate(
    // @ts-ignore
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin(state.url);
  }

  /**
   * canActivateChild() 用来守护下级路由
   * @param childRoute 下级路由
   * @param state 当前路由状态
   */
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    // @ts-ignore
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !!childRoute.routeConfig && childRoute.routeConfig.path !== 'heroes';
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
