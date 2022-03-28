import { AfterContentInit, Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f#8852
 */
@Component({
  selector: 'app--x-03',
  templateUrl: './x-03.component.html',
})
export class X03Component implements AfterContentInit {
  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
}
