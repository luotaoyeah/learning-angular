import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from './store/state/IState';
import {
  DecrementAction,
  IncrementAction,
  ResetAction,
} from './store/actions/02-02.actions';

/*
 * https://ngrx.io/guide/store/reducers
 */
@Component({
  selector: 'app-x-02-02',
  templateUrl: './x-02-02.component.html',
  styles: [],
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
