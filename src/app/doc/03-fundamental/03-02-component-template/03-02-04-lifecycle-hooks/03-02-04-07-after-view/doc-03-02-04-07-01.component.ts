import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-04-07-01',
  template:
    '<input type="text" [ngStyle]="{borderRadius:\'3px\', outline:\'none\'}" [(ngModel)]="foo"/>',
})
export class Doc0302040701Component implements OnInit {
  foo = 'FOO';

  constructor() {}

  ngOnInit() {}
}
