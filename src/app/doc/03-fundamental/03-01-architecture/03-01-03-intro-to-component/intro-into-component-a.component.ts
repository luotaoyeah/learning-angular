import { Component, OnInit } from '@angular/core';

@Component({
  /*
   * CSS 选择器，用来在 template 中标识当前组件
   */
  selector: 'app-intro-into-component-a',
  templateUrl: './intro-into-component-a.component.html',
  styleUrls: ['./intro-into-component-a.component.scss']
})
export class IntroIntoComponentAComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
