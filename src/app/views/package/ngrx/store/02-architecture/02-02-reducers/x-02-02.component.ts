import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '@app/views/package/ngrx/store/02-architecture/02-02-reducers/store/state/i-state';
import { DecrementAction, IncrementAction, ResetAction } from '@app/views/package/ngrx/store/02-architecture/02-02-reducers/store/actions/02-02.actions';

/*
 * https://ngrx.io/guide/store/reducers
 */
@Component({
  selector: 'app--x-02-02',
  templateUrl: './x-02-02.component.html',
})
export class X0202Component implements OnInit {
  constructor(private store: Store<IState>) {}

  public ngOnInit() {}

  public increment() {
    this.store.dispatch(new IncrementAction(new Date()));
  }

  public decrement() {
    this.store.dispatch(new DecrementAction(new Date()));
  }

  public reset() {
    this.store.dispatch(new ResetAction(new Date()));
  }
}
