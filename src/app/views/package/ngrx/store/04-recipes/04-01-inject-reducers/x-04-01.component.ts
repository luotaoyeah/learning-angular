import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IState } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/store/state/i-state';
import { selectX } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/store/selectors/04-01.selectors';
import { AAction, BAction } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/store/actions/04-01.actions';

/*
 * https://ngrx.io/guide/store/recipes/injecting
 */
@Component({
  selector: 'app--x-04-01',
  templateUrl: './x-04-01.component.html',
})
export class X0401Component implements OnInit {
  public x$: Observable<number>;

  constructor(private store: Store<{ '04-01': IState }>) {
    this.x$ = store.pipe(select(selectX));
  }

  public ngOnInit() {}

  public handleA() {
    this.store.dispatch(new AAction());
  }

  public handleB() {
    this.store.dispatch(new BAction());
  }
}
