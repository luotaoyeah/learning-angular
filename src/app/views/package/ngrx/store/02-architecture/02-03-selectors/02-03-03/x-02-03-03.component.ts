import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-03/store/state/i-state';
import { selectTotal } from '@app/views/package/ngrx/store/02-architecture/02-03-selectors/02-03-03/store/selectors/02-03-03.selectors';

/*
 * https://ngrx.io/guide/store/selectors#resetting-memoized-selectors
 */
@Component({
  selector: 'app--x-02-03-03',
  templateUrl: './x-02-03-03.component.html',
})
export class X020303Component implements OnInit {
  public total01: number = 0;
  public total02: number = 0;
  public total03: number = 0;

  constructor(store: Store<{ '02-03-03': IState }>) {
    /*
     * 通过 createSelector() 和 createFeatureSelector() 方法创建的 selector function,
     * 比如下面的 selectTotal(), 它会针对上一次的参数(也就是 state 对象)的结果进行缓存,
     * 即, 如果 state 对象没有变更, 则多次调用 selectTotal() 返回的结果是使用的上一次的缓存
     */

    store.subscribe((state: { '02-03-03': IState }) => {
      this.total01 = selectTotal(state);
      this.total02 = selectTotal(state);

      /*
       * 我们可以调用 MemoizedSelector.release() 方法, 强制清除缓存
       */
      selectTotal.release();
      this.total03 = selectTotal(state);
    });
  }

  public ngOnInit() {}
}
