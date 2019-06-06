import { NgModule } from '@angular/core';
import { X01Component } from './01-home/x-01.component';
import { AngularGridster2RoutingModule } from './angular-gridster2-routing.module';
import { GridsterModule } from 'angular-gridster2';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [X01Component],
  imports: [AngularGridster2RoutingModule, SharedModule, GridsterModule],
})
export class AngularGridster2Module {}
