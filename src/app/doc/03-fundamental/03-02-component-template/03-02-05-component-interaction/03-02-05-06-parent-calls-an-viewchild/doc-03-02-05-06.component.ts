import { Component, OnInit, ViewChild } from '@angular/core';
import { Doc0302050601Component } from './doc-03-02-05-06-01.component';

@Component({
  selector: 'app-doc-03-02-05-06',
  templateUrl: './doc-03-02-05-06.component.html',
})
export class Doc03020506Component implements OnInit {
  @ViewChild(Doc0302050601Component)
  public doc0302050501Component!: Doc0302050601Component;

  constructor() {}

  ngOnInit() {}
}
