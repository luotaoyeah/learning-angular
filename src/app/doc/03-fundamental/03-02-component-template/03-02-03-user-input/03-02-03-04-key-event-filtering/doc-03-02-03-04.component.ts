import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-03-04',
  templateUrl: './doc-03-02-03-04.component.html',
})
export class Doc03020304Component implements OnInit {
  value = '';

  constructor() {}

  ngOnInit() {}

  handleKeyUp(value: string) {
    this.value = value;
  }
}
