import { Component, OnInit } from '@angular/core';
import { Doc05070403Service } from './service/doc-05-07-04-03.service';

@Component({
  selector: 'app-doc-05-07-04-03',
  templateUrl: './doc-05-07-04-03.component.html',
})
export class Doc05070403Component implements OnInit {
  public message: string = '';

  constructor(private doc05070403Service: Doc05070403Service) {}

  ngOnInit() {
    this.message = `${this.doc05070403Service.name}BAR`;
  }
}
