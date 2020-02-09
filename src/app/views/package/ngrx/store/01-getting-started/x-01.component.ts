import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '@app/reducers';
import { DecrementAction, IncrementAction, ResetAction } from './store/actions/01.actions';

/*
 * https://ngrx.io/guide/store
 */
@Component({
  selector: 'app--x-01',
  templateUrl: './x-01.component.html',
})
export class X01Component implements OnInit {
  constructor(private store: Store<IState>) {}

  public ngOnInit() {}

  public increment() {
    this.store.dispatch(new IncrementAction());
  }

  public decrement() {
    this.store.dispatch(new DecrementAction());
  }

  public reset() {
    this.store.dispatch(new ResetAction());
  }
}
