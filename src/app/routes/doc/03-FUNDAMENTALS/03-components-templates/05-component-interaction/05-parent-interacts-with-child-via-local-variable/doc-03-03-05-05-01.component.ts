import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-05-05-01',
  template: `
    <p>
      <p-button [label]="'👍'" (onClick)="doVote('👍')"></p-button>
      &nbsp;
      <p-button [label]="'👎'" (onClick)="doVote('👎')"></p-button>
    </p>
  `,
})
export class Doc0303050501Component {
  public result = '';

  public doVote(result: string) {
    this.result = result;
  }
}
