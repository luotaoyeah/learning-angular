import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IState } from '../store/state/IState';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-x-02-02-01',
  templateUrl: './x-02-02-01.component.html',
  styles: [],
})
export class X020201Component implements OnInit {
  public count$: Observable<IState>;

  /*
   * 注入 ngrx 中的 store 对象,
   * store 是一个 observable 对象, 每当其他地方调用 Store.dispatch() 方法派发 action 时,
   * store 就会推送 state,
   * 通过 select 过滤我们需要的数据
   */
  constructor(private store: Store<IState>) {
    this.count$ = this.store.pipe(select('02-02'));
  }

  public ngOnInit() {}
}
