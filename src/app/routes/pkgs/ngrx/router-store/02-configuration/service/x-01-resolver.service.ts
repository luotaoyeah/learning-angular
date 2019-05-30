import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class X01ResolverService implements Resolve<string> {
  constructor() {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<string> | Promise<string> | string {
    console.log(`[${X01ResolverService.name}]\n`);
    return 'FOO';
  }
}
