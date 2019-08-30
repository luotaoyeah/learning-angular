import { Component } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-05-04',
  templateUrl: './doc-03-03-05-04.component.html',
})
export class Doc03030504Component {
  public handleVote($event: string) {
    console.log($event);
  }
}
