import { Component, NgZone } from '@angular/core';

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

  constructor(ngZone: NgZone) {
    /*
     * 为了避免 ExpressionChangedAfterItHasBeenCheckedError 这个错误,
     * 我们就必须保证这个 binding 的值, 在两次 change detection cycle 中返回的结果是一样的,
     * 怎么保证呢?
     * 因为这两次 change detection cycle 是同步执行的, 所以我们可以异步地更新这个 binding 的值,
     * 这样就可以保证两次 change detection cycle 中返回的结果是一样的, 同时又可以更新 binding 的值
     *
     *
     * https://blog.angularindepth.com/a-gentle-introduction-into-change-detection-in-angular-33f9ffff6f10#c431
     * 但是使用 setInterval() 会造成另外一个问题, 就是它会自动触发 change detection cycle,
     * 所以相当于存在一个无限循环的 change detection cycle 永远在执行, 如何解决呢?
     *
     * 之所以 setInterval() 会触发 change detection cycle, 是因为 angular 使用了 zone.js 这个库,
     * angular 在启动的时候会创建一个 NgZone, 在这个 zone 里面, 发生所有的异步事件时, 比如 setInterval(),
     * angular 都会被通知到, 然后就会触发 change detection cycle,
     * 所有我们可以在这个 NgZone 之外执行 setInterval() 就不会触发 change detection cycle 了,
     * 使用 NgZone.runOutsideAngular() 方法来实现这个目的
     *
     */

    ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this._time = Date.now();
      }, 1);
    });
  }
}
