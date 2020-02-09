import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Doc03030700Component } from '../00/doc-03-03-07-00.component';

/*
 * https://angular.io/guide/dynamic-component-loader
 */
@Component({
  selector: 'app--doc-03-03-07-02',
  templateUrl: './doc-03-03-07-02.component.html',
})
export class Doc03030702Component {
  @ViewChild('tpl01', { read: ViewContainerRef, static: true })
  public viewContainerRef!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public load() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Doc03030700Component);

    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }

  public unload() {
    this.viewContainerRef.clear();
  }
}
