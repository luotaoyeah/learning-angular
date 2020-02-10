import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-02-12-03',
  templateUrl: './doc-03-02-02-12-03.component.html',
})
export class Doc0302021203Component implements OnInit {
  public ngOnInit() {}

  handleMyBar($event: string) {
    alert($event);
  }
}
