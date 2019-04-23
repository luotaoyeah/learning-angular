import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc0307RoutingModule } from './doc-03-07-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { Doc030701Component } from './03-07-01-angular-dependency-injection/doc-03-07-01.component';
import { Doc030702Component } from './03-07-02-hierarchical-dependency-injection/doc-03-07-02.component';
import { Doc030703Component } from './03-07-03-di-in-action/doc-03-07-03.component';
import { Doc030704Component } from './03-07-04-di-providers/doc-03-07-04.component';
import { Doc030705Component } from './03-07-05-navigate-the-component-tree/doc-03-07-05.component';
import { Doc03070201Component } from './03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/doc-03-07-02-01.component';
import { Doc0307020101Component } from './03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-01/doc-03-07-02-01-01.component';
import { Doc0307020101Module } from './03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-01/doc-03-07-02-01-01.module';
import { Doc0307020102Component } from './03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-02/doc-03-07-02-01-02.component';
import { Doc0307020103Component } from './03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-03/doc-03-07-02-01-03.component';

@NgModule({
  declarations: [
    Doc030701Component,
    Doc030702Component,
    Doc03070201Component,
    Doc0307020101Component,
    Doc0307020102Component,
    Doc0307020103Component,
    Doc030703Component,
    Doc030704Component,
    Doc030705Component,
  ],
  imports: [
    Doc0307RoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
    Doc0307020101Module,
  ],
  entryComponents: [],
})
export class Doc0307Module {}
