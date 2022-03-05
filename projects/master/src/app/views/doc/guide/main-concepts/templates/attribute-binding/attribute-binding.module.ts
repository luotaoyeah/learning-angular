import { NgModule } from '@angular/core';
import { Doc0303020801Component } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/03-03-02-08-01-attribute-binding/doc-03-03-02-08-01.component';
import { AttributeBindingComponent } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/attribute-binding.component';
import { AttributeBindingRoutingModule } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/attribute-binding.routing.module';
import { BindingToTheClassAttributeComponent } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/binding-to-the-class-attribute.component';
import { BindingToTheStyleAttributeComponent } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/binding-to-the-style-attribute.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    AttributeBindingComponent,
    Doc0303020801Component,
    BindingToTheClassAttributeComponent,
    BindingToTheStyleAttributeComponent,
  ],
  imports: [AttributeBindingRoutingModule, NzButtonModule],
})
export class AttributeBindingModule {}
