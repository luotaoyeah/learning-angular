import { ApplicationRef, Component } from '@angular/core';
import { SafeAny } from '@src/typings';

/*
 * https://blog.angularindepth.com/boosting-performance-of-angular-applications-with-manual-change-detection-42cb396110fb#b4fb
 */
@Component({
  selector: 'app--x-01',
  templateUrl: './x-01.component.html',
})
export class X01Component {
  public time: string = new Date().toISOString();

  /*
   * NgZone 是 angular 对 zone.js 的封装,
   * NgZone 的作用是: 在执行异步操作的时候(XHR/setTimeout()/setIntervar()/click), 自动触发 CD,
   * 具体实现是: 在 ApplicationRef 中订阅了 NgZone.onMicrotaskEmpty 事件, 然后调用 ApplicationRef.tick() 方法, 触发 CD
   */
  constructor(applicationRef: ApplicationRef) {
    applicationRef.tick = new Proxy(applicationRef.tick, {
      apply(target: () => void, thisArg: SafeAny, argArray?: SafeAny): SafeAny {
        console.log(`[${X01Component.name}]\ntick()`, new Date().toISOString());
        return target.apply(thisArg, argArray);
      },
    });

    setInterval(() => {
      this.time = new Date().toISOString();
    }, 1000);
  }
}
