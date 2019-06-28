import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
} from '@angular/core';
import { NzAlertComponent } from 'ng-zorro-antd';

/*
 * https://blog.angularindepth.com/here-is-what-you-need-to-know-about-dynamic-components-in-angular-ac1e96167f9e#76e2
 */
@Component({
  selector: 'app-x-02',
  templateUrl: './x-02.component.html',
})
export class X02Component implements AfterViewInit {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public ngAfterViewInit(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      NzAlertComponent,
    );
    console.assert(factory instanceof ComponentFactory);
  }
}
