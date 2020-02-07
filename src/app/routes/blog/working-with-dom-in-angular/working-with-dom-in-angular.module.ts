import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NzAlertComponent } from 'ng-zorro-antd/alert';
import { X0101Component } from './01/x-01-01.component';
import { X01Component } from './01/x-01.component';
import { X02Component } from './02/x-02.component';
import { X03Component } from './03/x-03.component';
import { X04Component } from './04/x-04.component';
import { X05Component } from './05/x-05.component';
import { X0601Component } from './06/x-06-01.component';
import { X06Component } from './06/x-06.component';
import { X0701Component } from './07/x-07-01.component';
import { X07Component } from './07/x-07.component';
import { X08Component } from './08/x-08.component';
import { WorkingWithDomInAngularRoutingModule } from './working-with-dom-in-angular-routing.module';
import { WorkingWithDomInAngularComponent } from './working-with-dom-in-angular.component';

@NgModule({
  declarations: [
    WorkingWithDomInAngularComponent,
    X01Component,
    X0101Component,
    X02Component,
    X03Component,
    X04Component,
    X05Component,
    X06Component,
    X0601Component,
    X07Component,
    X0701Component,
    X08Component,
  ],
  imports: [WorkingWithDomInAngularRoutingModule, SharedModule],
  entryComponents: [NzAlertComponent, X0601Component, X0701Component],
})
export class WorkingWithDomInAngularModule {}
