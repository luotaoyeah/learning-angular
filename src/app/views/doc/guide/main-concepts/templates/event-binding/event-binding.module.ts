import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Doc030202070201Component } from '@app/views/doc/guide/main-concepts/templates/event-binding/03-02-02-07-02-$event-and-event-handling-statements/doc-03-02-02-07-02-01.component';
import { Doc0302020702Component } from '@app/views/doc/guide/main-concepts/templates/event-binding/03-02-02-07-02-$event-and-event-handling-statements/doc-03-02-02-07-02.component';
import { Doc030202070301Component } from '@app/views/doc/guide/main-concepts/templates/event-binding/03-02-02-07-03-custom-events-with-eventemitter/doc-03-02-02-07-03-01.component';
import { Doc0302020703Component } from '@app/views/doc/guide/main-concepts/templates/event-binding/03-02-02-07-03-custom-events-with-eventemitter/doc-03-02-02-07-03.component';
import { BindingToEventsComponent } from '@app/views/doc/guide/main-concepts/templates/event-binding/binding-to-events.component';
import { EventBindingComponent } from '@app/views/doc/guide/main-concepts/templates/event-binding/event-binding.component';
import { EventBindingRoutingModule } from '@app/views/doc/guide/main-concepts/templates/event-binding/event-binding.routing.module';

@NgModule({
  declarations: [
    EventBindingComponent,
    BindingToEventsComponent,
    Doc0302020702Component,
    Doc030202070201Component,
    Doc0302020703Component,
    Doc030202070301Component,
  ],
  imports: [EventBindingRoutingModule, CommonModule],
})
export class EventBindingModule {}
