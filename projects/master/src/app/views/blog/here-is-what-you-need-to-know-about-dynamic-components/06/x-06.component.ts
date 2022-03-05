import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { X0601Component } from '@app/views/blog/here-is-what-you-need-to-know-about-dynamic-components/06/01/x-06-01.component';

/*
 * https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e#4591
 */
@Component({
  selector: 'app--x-06',
  templateUrl: './x-06.component.html',
})
export class X06Component {
  @ViewChild('vc', {
    static: false,
    read: ViewContainerRef,
  })
  public vc!: ViewContainerRef;

  public x0601ComponentComponentRef: ComponentRef<X0601Component> | null = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public createComponent() {
    this.vc.clear();
    this.x0601ComponentComponentRef = this.vc.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(X0601Component),
    );
    this.x0601ComponentComponentRef.instance.foo = Date.now().toString();
  }

  /*
   * 动态创建的组件, 它的 input property 不是在模板中通过 property binding 绑定的,
   * 而是通过直接修改组件属性的方式来更新, 因此动态组件不会触发 ngOnChanges() 方法
   */
  public changeInput() {
    if (this.x0601ComponentComponentRef) {
      this.x0601ComponentComponentRef.instance.foo = Date.now().toString();
    }
  }
}
