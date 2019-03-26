import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(component: CanDeactivateComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

export interface CanDeactivateComponent {
  canDeactivate?: () => Observable<boolean> | Promise<boolean> | boolean;
}
