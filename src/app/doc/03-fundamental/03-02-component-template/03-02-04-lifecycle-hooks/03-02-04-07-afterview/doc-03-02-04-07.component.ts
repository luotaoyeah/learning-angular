import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Doc0302040701Component } from './doc-03-02-04-07-01.component';

@Component({
  selector: 'app-doc-03-02-04-07',
  templateUrl: './doc-03-02-04-07.component.html'
})
export class Doc03020407Component implements OnInit, AfterViewInit, AfterViewChecked {
  /*
   * 可以使用 @ViewChild 装饰器，获取到对下级组件实例的引用，
   * 可以直接使用下级组件的类，
   * 也可以使用在 template 中设置的下级组件的 template reference variable（如下的 "comp01"）
   */
  @ViewChild(Doc0302040701Component) doc0302040701Component01!: Doc0302040701Component;
  @ViewChild('comp01') doc0302040701Component02!: Doc0302040701Component;

  constructor() {}

  ngOnInit() {}

  /*
   * 当下级组件创建完成之后，会触发 ngAfterViewInit() 方法
   */
  ngAfterViewInit(): void {
    console.log(`%c[${Doc03020407Component.name}][ngAfterViewInit()] ${this.doc0302040701Component01.foo}`, 'color:#00ff00');
    console.assert(this.doc0302040701Component01 === this.doc0302040701Component02);
  }

  /*
   * 当下级组件中的状态发生变更时，会触发 ngAfterViewChecked() 方法
   */
  ngAfterViewChecked(): void {
    console.log(`%c[${Doc03020407Component.name}][ngAfterViewChecked()] ${this.doc0302040701Component01.foo}`, 'color:#00ff00');
  }
}
