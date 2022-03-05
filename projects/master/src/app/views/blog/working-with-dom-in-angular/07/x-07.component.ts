import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { X0701Component } from '@app/views/blog/working-with-dom-in-angular/07/x-07-01.component';

/*
 * https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866#9724
 */
@Component({
  selector: 'app--x-07',
  templateUrl: './x-07.component.html',
})
export class X07Component {
  @ViewChild('vc', {
    static: false,
    read: ViewContainerRef,
  })
  public vc!: ViewContainerRef;

  public viewRef: ViewRef | null = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public createView() {
    this.vc.clear();
    this.viewRef = this.vc.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(X0701Component),
    ).hostView;
  }

  /*
   * ViewContainerRef.insert() 方法, 用来挂载一个动态组件,
   * 通常跟 ViewContainerRef.detach() 方法一起使用,
   * 一个用来卸载, 一个用来挂载
   */
  public attachView() {
    if (this.viewRef) {
      this.vc.insert(this.viewRef);
    }
  }

  public detachView() {
    /*
     * 使用 ViewContainerRef.detach() 方法, 用来卸载一个动态组件,
     * 它跟 ViewContainerRef.remove() 方法的区别在于,
     * ViewContainerRef.remove() 方法**会**销毁动态组件的实例,
     * 而 ViewContainerRef.detach() 方法**不会**销毁动态组件的实例
     */
    this.vc.detach(0);
  }
}
