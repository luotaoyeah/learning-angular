import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy {
  public modules: Array<string> = [];

  constructor() {}

  // tslint:disable-next-line:no-any
  public preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload) {
      if (route.path) {
        this.modules.push(route.path);
      }

      console.log(
        `[${SelectivePreloadingStrategyService.name}] - [${route.path}]`,
      );

      return fn();
    }

    return of(null);
  }
}
