import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Doc030307Directive } from '../directives/doc-03-03-07.directive';
import { Doc03030700Component } from '../00/doc-03-03-07-00.component';

/*
 * https://angular.io/guide/dynamic-component-loader
 */
@Component({
  selector: 'app--doc-03-03-07-01',
  templateUrl: './doc-03-03-07-01.component.html',
})
export class Doc03030701Component {
  @ViewChild(Doc030307Directive, { static: true })
  public doc030308Directive!: Doc030307Directive;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public load() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      Doc03030700Component,
    );

    this.doc030308Directive.viewContainerRef.clear();
    this.doc030308Directive.viewContainerRef.createComponent(componentFactory);
  }

  public unload() {
    this.doc030308Directive.viewContainerRef.clear();
  }
}
