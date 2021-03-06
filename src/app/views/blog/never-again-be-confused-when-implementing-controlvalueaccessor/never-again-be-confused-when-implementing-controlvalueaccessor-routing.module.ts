import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeverAgainBeConfusedWhenImplementingControlvalueaccessorComponent } from '@app/views/blog/never-again-be-confused-when-implementing-controlvalueaccessor/never-again-be-confused-when-implementing-controlvalueaccessor.component';

const routes: Routes = [
  {
    path: 'never-again-be-confused-when-implementing-controlvalueaccessor',
    component: NeverAgainBeConfusedWhenImplementingControlvalueaccessorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeverAgainBeConfusedWhenImplementingControlvalueaccessorRoutingModule {}
