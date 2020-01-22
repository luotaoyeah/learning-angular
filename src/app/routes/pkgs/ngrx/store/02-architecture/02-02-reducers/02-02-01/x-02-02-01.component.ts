import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IState } from '../store/state/i-state';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app--x-02-02-01',
  templateUrl: './x-02-02-01.component.html',
})
export class X020201Component implements OnInit {
  public count01$: Observable<IState>;
  public count02$: Observable<number>;

  /*
   * 注入 ngrx 中的 store 对象,
   * store 是一个 observable 对象, 每当其他地方调用 Store.dispatch() 方法派发 action 时,
   * store 就会推送 state,
   * 通过 select 过滤我们需要的数据
   */
  constructor(private store: Store<IState>) {
    this.count01$ = this.store.pipe(select((state: IState) => state));
    this.count02$ = this.store.pipe(select('count'));
  }

  public ngOnInit() {}
}
