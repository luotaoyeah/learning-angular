import { Component, OnInit } from '@angular/core';
import { Doc03080503Service } from './service/doc-03-08-05-03.service';

@Component({
  selector: 'app-doc-03-08-05-03',
  templateUrl: './doc-03-08-05-03.component.html',
})
export class Doc03080503Component implements OnInit {
  constructor(private doc03080503Service: Doc03080503Service) {}

  ngOnInit() {}

  request() {
    this.doc03080503Service.fetch().subscribe();
  }
}
