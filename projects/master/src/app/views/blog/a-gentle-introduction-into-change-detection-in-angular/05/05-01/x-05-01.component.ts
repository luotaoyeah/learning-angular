import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { X05Component } from '@app/views/blog/a-gentle-introduction-into-change-detection-in-angular/05/x-05.component';

@Component({
  selector: 'app--x-05-01',
  templateUrl: './x-05-01.component.html',
})
export class X0501Component implements OnInit, AfterViewInit, AfterViewChecked {
  constructor(private x05Component: X05Component) {}

  /*
   * 在 ngOnInit() 里面**可以**修改上级组件的 binding
   */
  public ngOnInit(): void {
    this.x05Component.text = 'BAR';
  }

  /*
   * 在 ngAfterViewInit() 里面**不能**修改上级组件的 binding
   */
  public ngAfterViewInit(): void {
    /*
     * FIXME 在学习本节知识点时, 可以取消下面的注释来查看效果
     */
    // this.x05Component.text = 'BAR';
  }

  /*
   * 在 ngAfterViewChecked() 里面**不能**修改上级组件的 binding
   */
  public ngAfterViewChecked(): void {
    /*
     * FIXME 在学习本节知识点时, 可以取消下面的注释来查看效果
     */
    // this.x05Component.text = 'BAR';
  }
}
