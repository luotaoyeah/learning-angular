import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IState } from './store/state/IState';
import { Observable } from 'rxjs';
import { selectCount } from './store/selectors/02-03-02.selectors';

/*
 * https://ngrx.io/guide/store/selectors#selecting-feature-states
 */
@Component({
  selector: 'app-x-02-03-02',
  templateUrl: './x-02-03-02.component.html',
  styles: [],
})
export class X020302Component implements OnInit {
  public count$: Observable<number>;

  constructor(store: Store<{ '02-03-02': IState }>) {
    this.count$ = store.pipe(select(selectCount));
  }

  public ngOnInit() {}
}
