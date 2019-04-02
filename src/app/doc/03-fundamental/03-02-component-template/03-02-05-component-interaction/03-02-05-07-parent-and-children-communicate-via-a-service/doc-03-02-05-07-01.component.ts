import { Component, OnInit } from '@angular/core';
import { Doc03020507Service } from './service/doc-03-02-05-07.service';

@Component({
  selector: 'app-doc-03-02-05-07-01',
  template: `
    <p-button [label]="'log foo'" (onClick)="logFoo()"></p-button>
  `
})
export class Doc0302050701Component implements OnInit {
  constructor(private doc03020507Service: Doc03020507Service) {}

  ngOnInit() {}

  logFoo() {
    console.log(this.doc03020507Service.foo);
  }
}
