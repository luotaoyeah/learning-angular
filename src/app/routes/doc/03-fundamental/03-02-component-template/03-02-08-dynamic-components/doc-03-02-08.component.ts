import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Doc03020801Component } from './doc-03-02-08-01.component';

@Component({
  selector: 'app-doc-03-02-08',
  templateUrl: './doc-03-02-08.component.html',
})
export class Doc030208Component implements OnInit {
  @ViewChild('dyn', { read: ViewContainerRef })
  public viewContainerRef!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public ngOnInit() {}

  public loadComponent(): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(
        Doc03020801Component,
      ),
    );
  }

  public unloadComponent() {
    this.viewContainerRef.remove();
  }
}
