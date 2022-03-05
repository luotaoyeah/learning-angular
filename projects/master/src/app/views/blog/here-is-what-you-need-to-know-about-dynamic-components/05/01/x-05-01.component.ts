import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { X050101Component } from '@app/views/blog/here-is-what-you-need-to-know-about-dynamic-components/05/01/x-05-01-01.component';

@Component({
  selector: 'app--x-05-01',
  templateUrl: './x-05-01.component.html',
})
export class X0501Component {
  @ViewChild('vc', {
    static: false,
    read: ViewContainerRef,
  })
  public vc!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public createComponent() {
    this.vc.clear();
    this.vc.createComponent(this.componentFactoryResolver.resolveComponentFactory(X050101Component));
  }
}
