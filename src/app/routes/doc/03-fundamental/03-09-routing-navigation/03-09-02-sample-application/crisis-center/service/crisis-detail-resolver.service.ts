import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Crisis } from '../model/crisis';
import { EMPTY, Observable } from 'rxjs';
import { CrisisService } from './crisis.service';
import { mergeMap, take } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private crisisService: CrisisService, private router: Router) {}

  public resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<Crisis> | Promise<Crisis> | Crisis {
    const id: number = Number(route.paramMap.get('id'));
    if (!Number.isNaN(id)) {
      return this.crisisService.getCrisis(id).pipe(
        take(1),
        mergeMap((crisis: Crisis | null) => {
          if (crisis) {
            return of(crisis);
          } else {
            console.warn(`[加载危机] - [ id = ${id} ] - [ NOT FOUND ]`);
            this.router.navigate([
              '/doc/fundamental/routing/sample-application/crisis-center',
            ]);
            return EMPTY;
          }
        }),
      );
    }

    this.router.navigate([
      '/doc/fundamental/routing/sample-application/crisis-center',
    ]);
    return EMPTY;
  }
}
