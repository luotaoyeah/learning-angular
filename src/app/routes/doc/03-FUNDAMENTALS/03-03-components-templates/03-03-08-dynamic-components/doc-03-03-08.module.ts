import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030308RoutingModule } from './doc-03-03-08-routing.module';
import { Doc030308001Component } from './03-03-08-001/doc-03-03-08-001.component';
import { Doc030308Component } from './doc-03-03-08.component';
import { Doc030308Directive } from './directives/doc-03-03-08.directive';
import { Doc03030801Component } from './03-03-08-01/doc-03-03-08-01.component';
import { Doc03030802Component } from './03-03-08-02/doc-03-03-08-02.component';

@NgModule({
  declarations: [
    Doc030308Component,
    Doc03030801Component,
    Doc03030802Component,
    Doc030308001Component,
    [Doc030308Directive],
  ],
  imports: [Doc030308RoutingModule, SharedModule],
  /*
   * 动态加载的 component 需要在 @NgModule.entryComponents 中声明
   */
  entryComponents: [Doc030308001Component],
})
export class Doc030308Module {}
