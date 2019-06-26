import { Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/a-gentle-introduction-into-change-detection-in-angular-33f9ffff6f10#61e7
 */
@Component({
  selector: 'app-x-04',
  templateUrl: './x-04.component.html',
})
export class X04Component {
  private _time: number = Date.now();

  get time(): number {
    return this._time;
  }

  constructor() {
    /*
     * 为了避免 ExpressionChangedAfterItHasBeenCheckedError 这个错误,
     * 我们就必须保证这个 binding 的值, 在两次 change detection cycle 中返回的结果是一样的,
     * 怎么保证呢?
     * 因为这两次 change detection cycle 是同步执行的, 所以我们可以异步地更新这个 binding 的值,
     * 这样就可以保证两次 change detection cycle 中返回的结果是一样的, 同时又可以更新 binding 的值
     *
     * TODO
     */

    setInterval(() => {
      this._time = Date.now();
    }, 1);
  }
}
