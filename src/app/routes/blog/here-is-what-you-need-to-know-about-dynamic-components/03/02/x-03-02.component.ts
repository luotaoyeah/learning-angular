import { AfterViewInit, Compiler, Component } from '@angular/core';

/*
 * https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e#2359
 */
@Component({
  selector: 'app-x-03-02',
  templateUrl: './x-03-02.component.html',
})
export class X0302Component implements AfterViewInit {
  /*
   * 在一般的应用中, 我们不应该注入 Compiler 来使用
   */
  constructor(private compiler: Compiler) {}

  /*
   * 默认情况下, angular 只会为两种组件生成 factory,
   * 一种是可以在 template 中找到的组件, 一种是在 entryComponents 中声明的组件,
   * 为什么呢? 这是因为在编译模块时调用的是 Compiler.compileModuleAsync() 方法
   *
   * 如果我们想给这两种组件之外的组件也生成 factory 该怎么办呢?
   * 我们可以动态加载这个模块, 然后手动调用 Compiler.compileModuleAndAllComponentsAsync() 方法,
   * 这样所有的组件都会生成 factory
   */
  public ngAfterViewInit(): void {
    import('./01/x-03-02-01.module').then(m => {
      this.compiler
        .compileModuleAndAllComponentsAsync(m.X030201Module)
        .then(({ componentFactories }) => {
          console.assert(componentFactories.length === 1);
        });
    });
  }
}
