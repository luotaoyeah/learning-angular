import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from '@app/views/doc/guide/main-concepts/templates/event-binding/event-binding.component';

const routes: Routes = [
  {
    path: 'guide/event-binding',
    component: EventBindingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventBindingRoutingModule {}
