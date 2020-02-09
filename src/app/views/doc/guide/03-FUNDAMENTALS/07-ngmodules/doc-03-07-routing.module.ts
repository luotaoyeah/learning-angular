import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Doc030601Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-01-ngmodules-introduction/doc-03-06-01.component';
import { Doc030602Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-02-ngmodule-vs-jsmodule/doc-03-06-02.component';
import { Doc030603Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-03-frequent-ngmodules/doc-03-06-03.component';
import { Doc030604Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-04-module-types/doc-03-06-04.component';
import { Doc030605Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-05-entry-components/doc-03-06-05.component';
import { Doc030606Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-06-feature-modules/doc-03-06-06.component';
import { Doc030607Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-07-providers/doc-03-06-07.component';
import { Doc030608Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-08-singleton-services/doc-03-06-08.component';
import { Doc030610Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-10-sharing-ngmodules/doc-03-06-10.component';
import { Doc030611Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-11-ngmodule-api/doc-03-06-11.component';
import { Doc030612Component } from '@app/views/doc/guide/03-FUNDAMENTALS/07-ngmodules/03-06-12-ngmodule-faq/doc-03-06-12.component';

const routes: Routes = [
  {
    path: '03/07/01',
    component: Doc030601Component,
  },
  {
    path: '03/07/02',
    component: Doc030602Component,
  },
  {
    path: '03/07/03',
    component: Doc030603Component,
  },
  {
    path: '03/07/04',
    component: Doc030604Component,
  },
  {
    path: '03/07/05',
    component: Doc030605Component,
  },
  {
    path: '03/07/06',
    component: Doc030606Component,
  },
  {
    path: '03/07/07',
    component: Doc030607Component,
  },
  {
    path: '03/07/08',
    component: Doc030608Component,
  },
  {
    path: '03/07/10',
    component: Doc030610Component,
  },
  {
    path: '03/07/11',
    component: Doc030611Component,
  },
  {
    path: '03/07/12',
    component: Doc030612Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc0307RoutingModule {}
