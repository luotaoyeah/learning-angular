import { Component, OnInit } from '@angular/core';
import { Doc03070407Service } from './service/doc-03-07-04-07.service';

@Component({
  selector: 'app-doc-03-07-04-07',
  templateUrl: './doc-03-07-04-07.component.html',
})
export class Doc03070407Component implements OnInit {
  public items: Array<number> = [];

  constructor(public doc03070407Service: Doc03070407Service) {}

  public ngOnInit() {
    this.items = this.doc03070407Service.getNumbers();
    this.afterInit();
  }

  protected afterInit() {}
}
