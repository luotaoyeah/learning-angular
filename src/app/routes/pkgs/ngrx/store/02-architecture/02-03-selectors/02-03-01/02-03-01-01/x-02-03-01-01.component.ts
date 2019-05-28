import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { createSelector, select, Store } from '@ngrx/store';
import { IAppState } from './store/state/IAppState';
import { selectFeatureCount } from './store/selectors/02-03-01-01.selectors';

/*
 * https://ngrx.io/guide/store/selectors#using-a-selector-for-one-piece-of-state
 */
@Component({
  selector: 'app-x-02-03-01-01',
  templateUrl: './x-02-03-01-01.component.html',
  styles: [],
})
export class X02030101Component implements OnInit {
  public count$: Observable<number>;

  constructor(
    store: Store<{
      '02-03-01-01': IAppState;
    }>,
  ) {
    this.count$ = store.pipe(
      select(
        createSelector(
          (state: { '02-03-01-01': IAppState }) => state['02-03-01-01'],
          selectFeatureCount,
        ),
      ),
    );
  }

  public ngOnInit() {}
}
