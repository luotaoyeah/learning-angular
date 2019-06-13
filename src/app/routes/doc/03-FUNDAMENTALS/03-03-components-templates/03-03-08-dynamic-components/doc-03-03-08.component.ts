import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Doc03030801Component } from './03-03-08-01/doc-03-03-08-01.component';
import { Doc030308Directive } from './directives/doc-03-03-08.directive';

/*
 * https://angular.io/guide/dynamic-component-loader
 */
@Component({
  selector: 'app-doc-03-03-08',
  templateUrl: './doc-03-03-08.component.html',
})
export class Doc030308Component {
  @ViewChild(Doc030308Directive)
  public doc030308Directive!: Doc030308Directive;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  /**
   * LOAD
   */
  public loadComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      Doc03030801Component,
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
