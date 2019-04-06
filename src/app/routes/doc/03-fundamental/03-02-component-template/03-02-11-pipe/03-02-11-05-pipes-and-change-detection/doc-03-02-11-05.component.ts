import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-11-05',
  templateUrl: './doc-03-02-11-05.component.html',
})
export class Doc03021105Component implements OnInit {
  items: Array<number> = [1, 2, 3];

  constructor() {}

  ngOnInit() {}

  push01() {
    this.items.push(this.items.length + 1);
  }

  push02() {
    this.items.push(this.items.length + 1);
    this.items = this.items.slice();
  }
}
