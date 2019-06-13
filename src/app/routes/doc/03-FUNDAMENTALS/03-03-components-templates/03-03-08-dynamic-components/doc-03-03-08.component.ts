import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Doc030308001Component } from './03-03-08-001/doc-03-03-08-001.component';
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
      Doc030308001Component,
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
