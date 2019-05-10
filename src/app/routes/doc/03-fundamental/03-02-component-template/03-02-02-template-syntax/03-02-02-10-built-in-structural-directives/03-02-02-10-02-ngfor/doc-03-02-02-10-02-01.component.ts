import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-10-02-01',
  template: '<p-button [label]="msg"></p-button>&nbsp;',
})
export class Doc030202100201Component implements OnInit {
  @Input() public msg = '';

  constructor() {}

  public ngOnInit() {}
}
