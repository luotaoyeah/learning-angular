import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-07-02',
  templateUrl: './doc-03-02-02-07-02.component.html',
})
export class Doc0302020702Component implements OnInit {
  public foo = 'foo';

  public ngOnInit() {}

  public handleClick01($event: boolean) {
    alert(typeof $event);
  }
}
