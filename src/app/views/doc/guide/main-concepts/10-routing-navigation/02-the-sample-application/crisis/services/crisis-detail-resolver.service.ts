import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Crisis } from '@app/views/doc/guide/main-concepts/10-routing-navigation/02-the-sample-application/crisis/models/crisis';
import { EMPTY, Observable } from 'rxjs';
import { CrisisService } from '@app/views/doc/guide/main-concepts/10-routing-navigation/02-the-sample-application/crisis/services/crisis.service';
import { mergeMap, take } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  public loading: boolean = false;

  constructor(private router: Router, private crisisService: CrisisService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Crisis> | Promise<Crisis> | Crisis {
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
