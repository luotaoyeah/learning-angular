import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-05-06-01',
  template: `
    <p>
      <p-button [label]="'👍'" (onClick)="doVote('👍')"></p-button>
      &nbsp;
      <p-button [label]="'👎'" (onClick)="doVote('👎')"></p-button>
    </p>
  `,
})
export class Doc0302050601Component implements OnInit {
  result = '';

  constructor() {}

  ngOnInit() {}

  public doVote(result: string) {
    this.result = result;
  }
}
