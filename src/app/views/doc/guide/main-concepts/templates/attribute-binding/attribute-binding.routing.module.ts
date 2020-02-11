import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeBindingComponent } from '@app/views/doc/guide/main-concepts/templates/attribute-binding/attribute-binding.component';

const routes: Routes = [
  {
    path: 'guide/attribute-binding',
    component: AttributeBindingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttributeBindingRoutingModule {}
