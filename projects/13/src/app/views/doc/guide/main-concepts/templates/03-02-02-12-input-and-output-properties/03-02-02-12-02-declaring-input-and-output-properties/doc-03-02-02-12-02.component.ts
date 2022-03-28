import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-02-12-02',
  templateUrl: './doc-03-02-02-12-02.component.html',
})
export class Doc0302021202Component implements OnInit {
  public someProperty = 'FOOBAR';

  public ngOnInit() {}

  public doSomething($event: string) {
    alert($event);
  }
}
