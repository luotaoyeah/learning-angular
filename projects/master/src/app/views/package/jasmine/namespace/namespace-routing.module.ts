import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamespaceComponent } from '@app/views/package/jasmine/namespace/namespace.component';

const routes: Routes = [
  {
    path: 'namespace',
    component: NamespaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamespaceRoutingModule {}
