import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { SafeAny } from '../../../../../../../../../typings';
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
   * 通过 dynamic component 的方式来使用这个组件
   * @param message Message
   */
  public showAsComponent(message: string) {
    const element: HTMLElement = document.createElement('app-doc-03-03-08-04-01');

    const factory: ComponentFactory<Doc0303080401Component> = this.componentFactoryResolver.resolveComponentFactory(
      Doc0303080401Component,
    );

    const componentRef: ComponentRef<Doc0303080401Component> = factory.create(this.injector, [], element);
    componentRef.instance.message = message;

    componentRef.instance.close.subscribe(() => {
      document.body.removeChild(element);
      this.applicationRef.detachView(componentRef.hostView);
    });

    document.body.appendChild(element);
    this.applicationRef.attachView(componentRef.hostView);
  }

  /**
   * 通过 custom element 的方式来使用这个组件, 此时这个 custom element 就跟普通的 DOM 标签一样使用(如: div/span/p)
   * @param message Message
   */
  public showAsElement(message: string) {
    const el: NgElement & WithProperties<Pick<Doc0303080401Component, 'message'>> = document.createElement(
      'app-doc-03-03-08-04-01-element',
    ) as SafeAny;

    el.message = message;
    el.addEventListener('close', () => {
      document.body.removeChild(el);
    });

    document.body.appendChild(el);
  }
}
