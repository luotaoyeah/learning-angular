import { Component, OnInit } from '@angular/core';

@Component({
  /*
   * 因为 component 的 selector 可以是任意合法的 CSS 选择器，
   * 因此 component 的 selector 也可以是一个 CSS 类名
   */
  // tslint:disable-next-line:component-selector
  selector: '.app-intro-into-component-b',
  templateUrl: './intro-into-component-b.component.html',
  styleUrls: ['./intro-into-component-b.component.scss'],
})
export class IntroIntoComponentBComponent implements OnInit {
  public ngOnInit() {}
}
