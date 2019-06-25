import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Doc030308001Component } from '../03-03-08-001/doc-03-03-08-001.component';

/*
 * https://angular.io/guide/dynamic-component-loader
 */
@Component({
  selector: 'app-doc-03-03-08-02',
  templateUrl: './doc-03-03-08-02.component.html',
})
export class Doc03030802Component {
  @ViewChild('tpl01', { read: ViewContainerRef, static: true })
  public viewContainerRef!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public load() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      Doc030308001Component,
    );

    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }

  public unload() {
    this.viewContainerRef.clear();
  }
}
