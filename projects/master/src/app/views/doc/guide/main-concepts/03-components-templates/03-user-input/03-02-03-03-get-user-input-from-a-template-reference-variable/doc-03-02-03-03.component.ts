import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-03-03',
  templateUrl: './doc-03-02-03-03.component.html',
})
export class Doc03020303Component implements OnInit {
  public values = '';

  public ngOnInit() {}

  public handleKeyUp(value: string) {
    this.values += `${value} | `;
  }
}
