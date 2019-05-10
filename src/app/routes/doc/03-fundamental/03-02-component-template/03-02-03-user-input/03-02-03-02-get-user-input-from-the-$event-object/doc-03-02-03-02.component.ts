import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-03-02',
  templateUrl: './doc-03-02-03-02.component.html',
})
export class Doc03020302Component implements OnInit {
  public values = '';

  constructor() {}

  public ngOnInit() {}

  public handleKeyUp(event: KeyboardEvent) {
    if (event.target) {
      this.values += `${(event.target as HTMLInputElement).value} | `;
    }
  }
}
