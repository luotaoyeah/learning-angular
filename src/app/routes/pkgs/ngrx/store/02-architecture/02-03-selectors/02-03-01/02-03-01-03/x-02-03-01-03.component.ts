import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { createSelector, select, Store } from '@ngrx/store';
import { IAppState } from './store/state/i-app-state';
import {
  selectCounterMultiply01,
  selectCounterMultiply02,
} from './store/selectors/02-03-01-03.selectors';
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
  public counter01$: Observable<Array<number>>;
  public counter02$: Observable<number>;
  public counter03$: Observable<number>;

  constructor(
    private store: Store<{
      '02-03-01-03': IAppState;
    }>,
  ) {
    this.counter01$ = store.pipe(
      /*
       * 在调用 select() 方法的时候, 传入 props 参数
       */
      select(
        createSelector(
          (state: { '02-03-01-03': IAppState }) => state['02-03-01-03'],
          selectCounterMultiply01,
        ),
        { id: '1', multiply: 2 },
      ),
    );

    const selectCounterMultiply02Factory = () => {
      return createSelector(
        (state: { '02-03-01-03': IAppState }) => {
          return state['02-03-01-03'];
        },
        selectCounterMultiply02,
      );
    };
    this.counter02$ = store.pipe(
      select(selectCounterMultiply02Factory(), { id: '1', multiply: 2 }),
    );
    this.counter03$ = store.pipe(
      select(selectCounterMultiply02Factory(), { id: '1', multiply: 3 }),
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
