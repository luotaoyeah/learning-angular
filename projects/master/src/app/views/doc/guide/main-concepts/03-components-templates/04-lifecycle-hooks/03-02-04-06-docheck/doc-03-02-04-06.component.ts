import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-04-06',
  templateUrl: './doc-03-02-04-06.component.html',
})
export class Doc03020406Component implements OnInit {
  public bar: { name: string } = { name: 'FOO' };

  public ngOnInit() {}
}
