import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class Doc031002PreloadingStrategyService implements PreloadingStrategy {
  // tslint:disable-next-line:no-any
  public preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      console.log(
        `[${Doc031002PreloadingStrategyService.name}]\n${route.path}`,
      );

      /*
       * 允许预加载, 则返回 fn() 的返回结果
       */
      return fn();
    }

    /*
     * 不允许预加载, 则返回 of(null)
     */
    return of(null);
  }
}
