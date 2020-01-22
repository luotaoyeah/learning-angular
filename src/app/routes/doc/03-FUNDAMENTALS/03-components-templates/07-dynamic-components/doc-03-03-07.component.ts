import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Doc03030700Component } from './00/doc-03-03-07-00.component';
import { Doc030307Directive } from './directives/doc-03-03-07.directive';

/*
 * https://angular.io/guide/dynamic-component-loader
 */
@Component({
  selector: 'app--doc-03-03-07',
  templateUrl: './doc-03-03-07.component.html',
})
export class Doc030307Component {
  @ViewChild(Doc030307Directive, { static: false })
  public doc030308Directive!: Doc030307Directive;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  /**
   * LOAD
   */
  public loadComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      Doc03030700Component,
    );

    this.doc030308Directive.viewContainerRef.clear();
    this.doc030308Directive.viewContainerRef.createComponent(componentFactory);
  }

  /**
   * UNLOAD
   */
  public unloadComponent(): void {
    this.doc030308Directive.viewContainerRef.clear();
  }
}
