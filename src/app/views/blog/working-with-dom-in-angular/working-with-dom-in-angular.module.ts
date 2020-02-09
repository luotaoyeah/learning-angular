import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NzAlertComponent } from 'ng-zorro-antd/alert';
import { X0101Component } from '@app/views/blog/working-with-dom-in-angular/01/x-01-01.component';
import { X01Component } from '@app/views/blog/working-with-dom-in-angular/01/x-01.component';
import { X02Component } from '@app/views/blog/working-with-dom-in-angular/02/x-02.component';
import { X03Component } from '@app/views/blog/working-with-dom-in-angular/03/x-03.component';
import { X04Component } from '@app/views/blog/working-with-dom-in-angular/04/x-04.component';
import { X05Component } from '@app/views/blog/working-with-dom-in-angular/05/x-05.component';
import { X0601Component } from '@app/views/blog/working-with-dom-in-angular/06/x-06-01.component';
import { X06Component } from '@app/views/blog/working-with-dom-in-angular/06/x-06.component';
import { X0701Component } from '@app/views/blog/working-with-dom-in-angular/07/x-07-01.component';
import { X07Component } from '@app/views/blog/working-with-dom-in-angular/07/x-07.component';
import { X08Component } from '@app/views/blog/working-with-dom-in-angular/08/x-08.component';
import { WorkingWithDomInAngularRoutingModule } from '@app/views/blog/working-with-dom-in-angular/working-with-dom-in-angular-routing.module';
import { WorkingWithDomInAngularComponent } from '@app/views/blog/working-with-dom-in-angular/working-with-dom-in-angular.component';

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
