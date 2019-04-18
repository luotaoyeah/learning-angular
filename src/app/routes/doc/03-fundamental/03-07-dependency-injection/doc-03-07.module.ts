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

@NgModule({
  declarations: [
    Doc030701Component,
    Doc030702Component,
    Doc030703Component,
    Doc030704Component,
    Doc030705Component,
  ],
  imports: [Doc0307RoutingModule, CommonModule, FormsModule, SharedModule],
  entryComponents: [],
})
export class Doc0307Module {}
