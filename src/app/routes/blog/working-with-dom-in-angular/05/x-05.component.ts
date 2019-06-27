import {
  Component,
  ComponentFactoryResolver,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd';

/*
 * https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866#a2b5
 */
@Component({
  selector: 'app-x-05',
  templateUrl: './x-05.component.html',
})
export class X05Component {
  @ViewChild('vc', {
    static: false,
    read: ViewContainerRef,
  })
  public vc!: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer2: Renderer2,
  ) {}

  public createView() {
    /*
     * 使用 ViewContainerRef.createComponent() 方法来创建一个 host view,
     * 创建 host view 的时候, 是根据某个组件的 ComponentFactory 来创建的,
     * 所以我们首先需要通过 ComponentFactoryResolver.resolveComponentFactory() 方法获取到该组件的 ComponentFactory
     */
    const text = this.renderer2.createText('FOO');
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      NzButtonComponent,
    );
    this.vc.createComponent(factory, 0, undefined, [[text]]);
  }
}
