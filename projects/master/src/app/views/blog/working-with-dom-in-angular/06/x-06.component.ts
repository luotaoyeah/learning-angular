import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { X0601Component } from '@app/views/blog/working-with-dom-in-angular/06/x-06-01.component';

/*
 * https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866#d50a
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

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public createView() {
    this.vc.createComponent(this.componentFactoryResolver.resolveComponentFactory(X0601Component));
  }

  public removeView() {
    /*
     * ViewContainerRef.remove() 方法, 用来移除并销毁该容器中的一个动态组件,
     * 对应的动态组件的实例会被完全销毁
     */
    this.vc.remove();
  }
}
