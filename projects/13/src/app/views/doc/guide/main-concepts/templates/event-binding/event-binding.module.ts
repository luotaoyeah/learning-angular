import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BindingToEventsComponent } from '@app/views/doc/guide/main-concepts/templates/event-binding/binding-to-events.component';
import { CustomEventsWithEventemitter01Component } from '@app/views/doc/guide/main-concepts/templates/event-binding/custom-events-with-eventemitter.01.component';
import { CustomEventsWithEventemitterComponent } from '@app/views/doc/guide/main-concepts/templates/event-binding/custom-events-with-eventemitter.component';
import { EventBindingComponent } from '@app/views/doc/guide/main-concepts/templates/event-binding/event-binding.component';
import { EventBindingRoutingModule } from '@app/views/doc/guide/main-concepts/templates/event-binding/event-binding.routing.module';

@NgModule({
  declarations: [
    EventBindingComponent,
    BindingToEventsComponent,
    CustomEventsWithEventemitterComponent,
    CustomEventsWithEventemitter01Component,
  ],
  imports: [EventBindingRoutingModule, CommonModule],
})
export class EventBindingModule {}
