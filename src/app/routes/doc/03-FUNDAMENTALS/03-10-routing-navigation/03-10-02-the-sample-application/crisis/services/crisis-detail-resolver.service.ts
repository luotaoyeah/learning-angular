import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Crisis } from '../models/crisis';
import { EMPTY, Observable } from 'rxjs';
import { CrisisService } from './crisis.service';
import { mergeMap, take } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  public loading: boolean = false;

  constructor(private router: Router, private crisisService: CrisisService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<Crisis> | Promise<Crisis> | Crisis {
    const id: number = Number(route.paramMap.get('id'));
    if (!Number.isNaN(id)) {
      this.loading = true;
      return this.crisisService.getCrisis(id).pipe(
        take(1),
        mergeMap((crisis: Crisis | null) => {
          this.loading = false;
          if (crisis) {
            return of(crisis);
          } else {
            console.warn(`[加载危机] - [ id = ${id} ] - [ NOT FOUND ]`);
            this.router.navigate(['/doc/03/10/02/crisis']);
            return EMPTY;
          }
        }),
      );
    } else {
      this.loading = false;
      this.router.navigate(['/doc/03/10/02/crisis']);
      return EMPTY;
    }
  }
}
