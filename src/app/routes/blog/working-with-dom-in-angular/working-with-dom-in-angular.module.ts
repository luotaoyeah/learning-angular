import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { WorkingWithDomInAngularRoutingModule } from './working-with-dom-in-angular-routing.module';
import { WorkingWithDomInAngularComponent } from './working-with-dom-in-angular.component';
import { X01Component } from './01/x-01.component';
import { X0101Component } from './01/x-01-01.component';

@NgModule({
  declarations: [
    WorkingWithDomInAngularComponent,
    X01Component,
    X0101Component,
  ],
  imports: [WorkingWithDomInAngularRoutingModule, SharedModule],
})
export class WorkingWithDomInAngularModule {}
