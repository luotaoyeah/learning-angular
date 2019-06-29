import { Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e#6aa3
 */
@Component({
  selector: 'app-x-05',
  templateUrl: './x-05.component.html',
})
export class X05Component {
  public visible: boolean = true;
}
