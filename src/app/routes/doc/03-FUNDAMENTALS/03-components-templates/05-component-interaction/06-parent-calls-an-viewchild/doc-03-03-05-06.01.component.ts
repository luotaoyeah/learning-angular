import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-05-06-01',
  templateUrl: './doc-03-03-05-06.01.component.html',
})
export class Doc0303050601Component {
  public result: string = '<DEFAULT>';

  public doVote(result: string) {
    this.result = result;
  }
}
