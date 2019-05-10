import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-02-05-05-01',
  template: `
    <p>
      <p-button [label]="'👍'" (onClick)="doVote('👍')"></p-button>
      &nbsp;
      <p-button [label]="'👎'" (onClick)="doVote('👎')"></p-button>
    </p>
  `,
})
export class Doc0302050501Component implements OnInit {
  public result = '';

  constructor() {}

  public ngOnInit() {}

  public doVote(result: string) {
    this.result = result;
  }
}
