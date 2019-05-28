import { Component, OnInit } from '@angular/core';
import {
  createFeatureSelector,
  createSelector,
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { IState } from '../store/state/IState';

@Component({
  selector: 'app-x-01-01',
  templateUrl: './x-01-01.component.html',
  styles: [],
})
export class X0101Component implements OnInit {
  public count$: Observable<number>;

  constructor(store: Store<{ '01': IState }>) {
    this.count$ = store.pipe(
      select(
        createSelector(
          createFeatureSelector<{ '01': IState }, IState>('01'),
          (state: IState) => state.count,
        ),
      ),
    );
  }

  public ngOnInit() {}
}
