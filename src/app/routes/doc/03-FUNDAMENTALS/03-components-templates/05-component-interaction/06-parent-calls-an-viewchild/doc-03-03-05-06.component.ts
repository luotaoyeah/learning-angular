import { Component, ViewChild } from '@angular/core';
import { Doc0303050601Component } from './doc-03-03-05-06-01.component';

@Component({
  selector: 'app-doc-03-03-05-06',
  templateUrl: './doc-03-03-05-06.component.html',
})
export class Doc03030506Component {
  @ViewChild(Doc0303050601Component, { static: true })
  public doc0302050501Component!: Doc0303050601Component;
}
