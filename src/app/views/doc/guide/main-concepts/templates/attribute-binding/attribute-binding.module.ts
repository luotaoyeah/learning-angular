import { NgModule } from '@angular/core';
import { Doc0303020801Component } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/03-03-02-08-01-attribute-binding/doc-03-03-02-08-01.component';
import { Doc0303020802Component } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/03-03-02-08-02-class-binding/doc-03-03-02-08-02.component';
import { Doc0303020803Component } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/03-03-02-08-03-style-binding/doc-03-03-02-08-03.component';
import { AttributeBindingRoutingModule } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/attribute-binding-routing.module';
import { AttributeBindingComponent } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/attribute-binding.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@NgModule({
  declarations: [AttributeBindingComponent, Doc0303020801Component, Doc0303020802Component, Doc0303020803Component],
  imports: [AttributeBindingRoutingModule, NzButtonModule, NzCollapseModule],
})
export class AttributeBindingModule {}
