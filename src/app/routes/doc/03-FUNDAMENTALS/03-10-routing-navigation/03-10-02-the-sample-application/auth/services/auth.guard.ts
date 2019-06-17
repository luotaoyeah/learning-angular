import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  /**
   * canActivate() 用来守护某个路由
   * @param next 要跳转的路由
   * @param state 当前路由状态
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isLogin(state.url);
  }

  /**
   * canActivateChild() 用来守护下级路由
   * @param childRoute 下级路由
   * @param state 当前路由状态
   */
  public canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const result =
      !!childRoute.routeConfig && childRoute.routeConfig.path !== 'hero';

    if (!result) {
      console.warn('没有权限进入');
    }

    return result;
  }

  /**
   * canLoad() 用来守护是否可以加载某个路由对应的 NgModule
   * @param route 路由配置
   * @param segments UrlSegments
   */
  public canLoad(
    route: Route,
    segments: Array<UrlSegment>,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.isLogin(`/doc/03/10/02/${segments.map(i => i.path).join('/')}`);
  }

  /**
   * 检查是否登录
   * @param url 要跳转的地址
   */
  private isLogin(url: string): boolean {
    if (this.authService.isLogin) {
      return true;
    }

    this.authService.redirectUrl = url;
    this.router.navigate(['/doc/03/10/02/login'], {
      queryParams: {
        session_id: 0,
      },
      fragment: 'anchor',
    });

    return false;
  }
}
