import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-02-07-03',
  templateUrl: './doc-03-02-02-07-03.component.html',
})
export class Doc0302020703Component implements OnInit {
  public ngOnInit() {}

  public handleSomeCustomEvent($event: { foo: string }) {
    alert($event.foo);
  }
}
