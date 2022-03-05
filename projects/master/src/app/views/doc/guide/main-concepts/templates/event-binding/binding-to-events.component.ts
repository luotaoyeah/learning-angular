import { Component } from '@angular/core';

// https://angular.io/guide/event-binding#binding-to-events
@Component({
  selector: 'app--binding-to-events',
  templateUrl: './binding-to-events.component.html',
})
export class BindingToEventsComponent {
  public onClick() {
    alert('CLICK');
  }
}
