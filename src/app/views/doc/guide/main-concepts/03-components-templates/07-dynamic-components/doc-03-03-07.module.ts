import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030307RoutingModule } from '@app/views/doc/guide/main-concepts/03-components-templates/07-dynamic-components/doc-03-03-07-routing.module';
import { Doc03030700Component } from '@app/views/doc/guide/main-concepts/03-components-templates/07-dynamic-components/00/doc-03-03-07-00.component';
import { Doc030307Component } from '@app/views/doc/guide/main-concepts/03-components-templates/07-dynamic-components/doc-03-03-07.component';
import { Doc030307Directive } from '@app/views/doc/guide/main-concepts/03-components-templates/07-dynamic-components/directives/doc-03-03-07.directive';
import { Doc03030701Component } from '@app/views/doc/guide/main-concepts/03-components-templates/07-dynamic-components/01/doc-03-03-07-01.component';
import { Doc03030702Component } from '@app/views/doc/guide/main-concepts/03-components-templates/07-dynamic-components/02/doc-03-03-07-02.component';

@NgModule({
  declarations: [
    Doc030307Component,
    Doc03030701Component,
    Doc03030702Component,
    Doc03030700Component,
    [Doc030307Directive],
  ],
  imports: [Doc030307RoutingModule, SharedModule],
  /*
   * 动态加载的 component 需要在 @NgModule.entryComponents 中声明
   */
  entryComponents: [Doc03030700Component],
})
export class Doc030307Module {}
