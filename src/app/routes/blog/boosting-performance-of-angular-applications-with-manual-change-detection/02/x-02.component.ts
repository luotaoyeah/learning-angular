import { Component, NgZone } from '@angular/core';

/*
 * https://blog.angularindepth.com/boosting-performance-of-angular-applications-with-manual-change-detection-42cb396110fb#b49e
 */
@Component({
  selector: 'app-x-02',
  templateUrl: './x-02.component.html',
})
export class X02Component {
  public time: string = new Date().toISOString();

  private num: number = 0;

  /*
   * NgZone.runOutsideAngular() 方法, 用来在 NgZone 之外执行代码, 这样就不会自动触发 CD,
   * 注意, 如果此时其他地方自动触发了 CD, 从而调用了 ApplicationRef.tick() 方法, 那么此处的代码也会被动地触发 CD,
   * NgZone.run() 方法, 用来重新回到 NgZone 之内执行代码, 从而自动触发 CD
   */
  constructor(ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.num++;

        if (this.num % 10 === 0) {
          ngZone.run(() => {
            this.time = new Date().toISOString();
          });
        } else {
          this.time = new Date().toISOString();
        }
      }, 1000);
    });
  }
}
