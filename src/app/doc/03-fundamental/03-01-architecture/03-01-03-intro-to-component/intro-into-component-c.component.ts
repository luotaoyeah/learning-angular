import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-into-component-c',
  /*
   * 可以通过 template 指定内嵌的 template 代码，
   * 此时，不能再声明 templateUrl 配置
   */
  template: '<div style=" border: 1px solid #ff0000;border-radius: 3px;padding: 10px;">inline template</div>',
  styleUrls: []
})
export class IntroIntoComponentCComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
