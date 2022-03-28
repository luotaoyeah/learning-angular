import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/*
 * https://angular.io/guide/router#candeactivate-handling-unsaved-changes
 */
@Injectable({
  providedIn: 'root',
})
class CanDeactivateGuard implements CanDeactivate<ICanDeactivateComponent> {
  public canDeactivate(
    component: ICanDeactivateComponent,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

interface ICanDeactivateComponent {
  canDeactivate?: () => Observable<boolean> | Promise<boolean> | boolean;
}

export { CanDeactivateGuard, ICanDeactivateComponent };
