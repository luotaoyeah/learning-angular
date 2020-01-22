import {
  Compiler,
  Component,
  NgModule,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

/*
 * https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e#2b99
 */
@Component({
  selector: 'app--x-04',
  templateUrl: './x-04.component.html',
})
export class X04Component {
  @ViewChild('vc', {
    static: false,
    read: ViewContainerRef,
  })
  public vc!: ViewContainerRef;

  constructor(private compiler: Compiler) {}

  /*
   * 因为 @Component() 和 @NgModule() 这两个装饰器本质上就是两个函数,
   * 因此我们可以在运行时期, 直接调用它们, 从而动态地构造出 NgModule 和 Component,
   * 然后再动态地对它们进行编译, 生成对应组件的 factory, 从而可以用来创建动态组件
   */
  public createComponent() {
    const X0401Component = Component({
      template:
        '<button class="ant-btn ant-btn-default"><span>{{foo}}</span></button>',
    })(
      class {
        public foo: string = '';
      },
    );

    const X0401Module = NgModule({
      declarations: [X0401Component],
    })(class {});

    this.compiler
      .compileModuleAndAllComponentsAsync(X0401Module)
      .then(({ componentFactories }) => {
        this.vc.clear();
        const componentRef = this.vc.createComponent(componentFactories[0]);
        componentRef.instance.foo = 'FOO';
      });
  }
}
