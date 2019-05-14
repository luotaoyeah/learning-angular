import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxTranslateComponent } from './ngx-translate.component';

const routes: Routes = [
  {
    path: '',
    component: NgxTranslateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxTranslateRoutingModule {}
