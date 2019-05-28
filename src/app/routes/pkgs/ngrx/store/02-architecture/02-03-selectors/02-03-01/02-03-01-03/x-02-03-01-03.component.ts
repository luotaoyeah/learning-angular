import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { createSelector, select, Store } from '@ngrx/store';
import { IAppState } from './store/state/IAppState';
import { selectCounterMultiply } from './store/selectors/02-03-01-03.selectors';
import {
  ResetCounterAction,
  SetCounterAction,
} from './store/actions/02-03-01-03.actions';

/*
 * https://ngrx.io/guide/store/selectors#using-selectors-with-props
 */
@Component({
  selector: 'app-x-02-03-01-03',
  templateUrl: './x-02-03-01-03.component.html',
  styles: [],
})
export class X02030103Component implements OnInit {
  public counter$: Observable<Array<number>>;

  constructor(
    private store: Store<{
      '02-03-01-03': IAppState;
    }>,
  ) {
    this.counter$ = store.pipe(
      /*
       * 在调用 select() 方法的时候, 传入 props 参数
       */
      select(
        createSelector(
          (state: { '02-03-01-03': IAppState }) => state['02-03-01-03'],
          selectCounterMultiply,
        ),
        { multiply: 2 },
      ),
    );
  }

  public ngOnInit() {}

  public setCounter() {
    this.store.dispatch(new SetCounterAction());
  }

  public resetCounter() {
    this.store.dispatch(new ResetCounterAction());
  }
}
