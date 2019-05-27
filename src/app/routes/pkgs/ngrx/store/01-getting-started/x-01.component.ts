import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../../../../../reducers';
import { Decrement, Increment, Reset } from './store/actions/counter.actions';

/*
 * https://ngrx.io/guide/store
 */
@Component({
  selector: 'app-x-01',
  templateUrl: './x-01.component.html',
  styles: [],
})
export class X01Component implements OnInit {
  constructor(private store: Store<IState>) {}

  public ngOnInit() {}

  public increment() {
    this.store.dispatch(new Increment());
  }

  public decrement() {
    this.store.dispatch(new Decrement());
  }

  public reset() {
    this.store.dispatch(new Reset());
  }
}
