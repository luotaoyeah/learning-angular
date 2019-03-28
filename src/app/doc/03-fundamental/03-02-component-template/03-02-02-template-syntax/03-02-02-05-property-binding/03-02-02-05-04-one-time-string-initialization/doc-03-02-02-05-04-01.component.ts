import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-02-05-04-01',
  templateUrl: './doc-03-02-02-05-04-01.component.html'
})
export class Doc030202050401Component implements OnInit {
  @Input() foo = '';
  @Input() bar = '';

  constructor() {}

  ngOnInit() {}
}
