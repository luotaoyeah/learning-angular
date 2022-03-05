import { Component, NgZone, OnInit } from '@angular/core';

/*
 * https://blog.angularindepth.com/do-you-still-think-that-ngzone-zone-js-is-required-for-change-detection-in-angular-16f7a575afef#59e7
 */
@Component({
  selector: 'app--x-02',
  templateUrl: './x-02.component.html',
})
export class X02Component implements OnInit {
  constructor(private ngZone: NgZone) {}

  public ngOnInit(): void {
    /*
     * NgZone.run() 方法, 用来在 NgZone 里面执行代码
     */
    this.ngZone.run(() => {});

    /*
     * NgZone.runOutsideAngular() 方法, 用来在 NgZone 外面执行代码,
     * 它里面的代码, 不会自动触发 change detection cycle,
     * 它里面的代码, 通常是一些比较消耗性能的, 同时不需要触发 change detection 的代码
     */
    this.ngZone.runOutsideAngular(() => {});

    /*
     * 当所有的 microtask 和 macrotask 都处理完了之后, NgZone.isStable 属性为 true
     */
    console.log(this.ngZone.isStable);

    /*
     * NgZone.onUnstable 事件, 表示进入了 NgZone
     */
    this.ngZone.onUnstable.subscribe(() => {});

    /*
     * NgZone.onMicrotaskEmpty 事件, 表示 microtask 队列空了,
     * 在这里面, 通过调用 ApplicationRef.tick() 方法, 自动触发 change detection cycle
     */
    this.ngZone.onMicrotaskEmpty.subscribe(() => {});

    /*
     * NgZone.onStable 事件, 表示 microtask 队列空了, 并且没有新的任务进入队列
     */
    this.ngZone.onStable.subscribe(() => {});

    this.ngZone.onError.subscribe(() => {});
  }
}
