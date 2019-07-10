import { ChangeDetectorRef, Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f#9567
 */
@Component({
  selector: 'app-x-04',
  templateUrl: './x-04.component.html',
})
export class X04Component {
  /*
   * component 和 view 是一一对应的,
   * 在 view 中, 可以通过 ViewData.component 获取到对应的 component,
   * 在 component 中, 可以通过注入 ChangeDetectorRef 获取到对应的 view,
   */
  constructor(changeDetectorRef: ChangeDetectorRef) {}
}
