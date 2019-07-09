import { ChangeDetectorRef, Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f#9eda
 */
@Component({
  selector: 'app-x-02',
  templateUrl: './x-02.component.html',
})
export class X02Component {
  constructor(changeDetectorRef: ChangeDetectorRef) {
    console.log(`[${X02Component.name}]\n`, changeDetectorRef);
  }
}
