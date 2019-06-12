import { NgModule } from '@angular/core';
import { X01Component } from './01-home/x-01.component';
import { AngularGridster2RoutingModule } from './angular-gridster2-routing.module';
import { GridsterModule } from 'angular-gridster2';
import { SharedModule } from '@app/shared';
import { X02Component } from './02-api/x-02.component';
import { X03Component } from './03-compact/x-03.component';
import { X04Component } from './04-display-grid/x-04.component';
import { X05Component } from './05-drag/x-05.component';
import { X08Component } from './08-grid-margins/x-08.component';

@NgModule({
  declarations: [
    X01Component,
    X02Component,
    X03Component,
    X04Component,
    X05Component,
    X08Component,
  ],
  imports: [AngularGridster2RoutingModule, SharedModule, GridsterModule],
})
export class AngularGridster2Module {}
