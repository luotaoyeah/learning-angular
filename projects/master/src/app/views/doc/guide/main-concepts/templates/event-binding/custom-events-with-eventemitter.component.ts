import { Component } from '@angular/core';

// https://angular.io/guide/event-binding#custom-events-with-eventemitter
@Component({
  selector: 'app--custom-events-with-eventemitter',
  templateUrl: './custom-events-with-eventemitter.component.html',
})
export class CustomEventsWithEventemitterComponent {
  public onSomeCustomEvent($event: string) {
    console.assert($event === 'foo');
  }
}
