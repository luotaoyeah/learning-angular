import { NgModule } from '@angular/core';
import { Doc030702010103Service } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-01-where-to-configure-providers/03-07-02-01-01/service/doc-03-07-02-01-01-03.service';

/*
 * 使用 @NgModule.providers 配置的 providers 不支持 tree-shaking
 */
@NgModule({
  providers: [Doc030702010103Service],
})
export class Doc0307020101Module {}
