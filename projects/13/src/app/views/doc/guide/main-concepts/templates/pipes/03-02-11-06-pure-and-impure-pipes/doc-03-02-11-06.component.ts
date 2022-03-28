import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-11-06',
  templateUrl: './doc-03-02-11-06.component.html',
})
export class Doc03021106Component implements OnInit {
  public items: Array<number> = [1, 2, 3];

  public ngOnInit() {}

  public push01() {
    this.items.push(this.items.length + 1);
  }
}
