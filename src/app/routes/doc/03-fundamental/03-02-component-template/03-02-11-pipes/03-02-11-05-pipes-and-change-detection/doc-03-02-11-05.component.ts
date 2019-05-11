import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-11-05',
  templateUrl: './doc-03-02-11-05.component.html',
})
export class Doc03021105Component implements OnInit {
  public items: Array<number> = [1, 2, 3];

  constructor() {}

  public ngOnInit() {}

  public push01() {
    this.items.push(this.items.length + 1);
  }

  public push02() {
    this.items.push(this.items.length + 1);
    this.items = this.items.slice();
  }
}
