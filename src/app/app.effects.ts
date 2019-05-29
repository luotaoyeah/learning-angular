import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  @Effect()
  public foo$ = this.actions$.pipe(
    ofType(''),
    map(() => {
      return {};
    }),
  );

  constructor(private actions$: Actions) {}
}
