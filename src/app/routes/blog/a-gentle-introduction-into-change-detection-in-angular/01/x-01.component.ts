import { Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/a-gentle-introduction-into-change-detection-in-angular-33f9ffff6f10#32bb
 */
@Component({
  selector: 'app-x-01',
  templateUrl: './x-01.component.html',
})
export class X01Component {
  get time(): number {
    return Date.now();
  }
}
