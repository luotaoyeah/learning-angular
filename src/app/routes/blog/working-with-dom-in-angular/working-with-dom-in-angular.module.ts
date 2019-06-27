import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { WorkingWithDomInAngularRoutingModule } from './working-with-dom-in-angular-routing.module';
import { WorkingWithDomInAngularComponent } from './working-with-dom-in-angular.component';
import { X01Component } from './01/x-01.component';
import { X0101Component } from './01/x-01-01.component';
import { X02Component } from './02/x-02.component';
import { X03Component } from './03/x-03.component';
import { X04Component } from './04/x-04.component';
import { X05Component } from './05/x-05.component';
import { NzButtonComponent } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    WorkingWithDomInAngularComponent,
    X01Component,
    X0101Component,
    X02Component,
    X03Component,
    X04Component,
    X05Component,
  ],
  imports: [WorkingWithDomInAngularRoutingModule, SharedModule],
  entryComponents: [NzButtonComponent],
})
export class WorkingWithDomInAngularModule {}
