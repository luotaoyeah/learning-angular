import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { Doc0303080401Component } from './doc-03-03-08-04.01.component';
import { NgElement, WithProperties } from '@angular/elements';

@Injectable()
export class Doc0303080401Service {
  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  /**
   *
   * @param message Message
   */
  public showAsComponent(message: string) {
    const element: HTMLElement = document.createElement(
      'app-doc-03-03-08-04-01',
    );

    const factory: ComponentFactory<
      Doc0303080401Component
    > = this.componentFactoryResolver.resolveComponentFactory(
      Doc0303080401Component,
    );

    const componentRef: ComponentRef<Doc0303080401Component> = factory.create(
      this.injector,
      [],
      element,
    );
    componentRef.instance.message = message;

    componentRef.instance.closed.subscribe(() => {
      document.body.removeChild(element);
      this.applicationRef.detachView(componentRef.hostView);
    });

    document.body.appendChild(element);
    this.applicationRef.attachView(componentRef.hostView);
  }

  /**
   *
   * @param message Message
   */
  public showAsElement(message: string) {
    const element: NgElement &
      WithProperties<Doc0303080401Component> = document.createElement(
      'app-doc-03-03-08-04-01-element',
      // tslint:disable-next-line:no-any
    ) as any;

    element.message = message;
    element.addEventListener('closed', () => {
      document.body.removeChild(element);
    });

    document.body.appendChild(element);
  }
}
