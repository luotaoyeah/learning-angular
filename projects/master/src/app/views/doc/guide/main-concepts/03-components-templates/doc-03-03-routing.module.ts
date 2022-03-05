import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030201Component } from '@app/views/doc/guide/main-concepts/03-components-templates/01-displaying-data/doc-03-02-01.component';
import { Doc030203Component } from '@app/views/doc/guide/main-concepts/03-components-templates/03-user-input/doc-03-02-03.component';
import { Doc030204Component } from '@app/views/doc/guide/main-concepts/03-components-templates/04-lifecycle-hooks/doc-03-02-04.component';
import { Doc030308Component } from '@app/views/doc/guide/main-concepts/03-components-templates/08-angular-elements/doc-03-03-08.component';
import { Doc030209Component } from '@app/views/doc/guide/main-concepts/03-components-templates/09-attribute-directives/doc-03-02-09.component';

const routes: Routes = [
  {
    path: '03/03/01',
    component: Doc030201Component,
  },
  {
    path: '03/03/03',
    component: Doc030203Component,
  },
  {
    path: '03/03/04',
    component: Doc030204Component,
  },
  {
    path: '03/03/08',
    component: Doc030308Component,
  },
  {
    path: '03/03/09',
    component: Doc030209Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0303RoutingModule {}
