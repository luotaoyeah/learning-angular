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

  private previousFoo = '';
  comment = '';

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
    if (this.previousFoo !== this.doc0302040701Component01.foo) {
      this.previousFoo = this.doc0302040701Component01.foo;
      this.doSomething();
    }
  }

  private doSomething(): void {
    const comt = this.doc0302040701Component01.foo.length > 10 ? 'LONG NAME' : '';

    if (comt !== this.comment) {
      /*
       * angular 的单向数据流不允许在视图完成渲染（composed）之后再去更新视图，
       * 而 ngAfterViewInit() 和 ngAfterViewChecked() 刚好是在 composed 之后执行的，
       * 因此，不能在这两个方法里面再去更新视图（通过修改 data binding property 触发视图更新），
       * 需要通过 setTimeout() 来执行更新
       */
      setTimeout(() => {
        this.comment = comt;
      }, 0);
    }
  }
}
