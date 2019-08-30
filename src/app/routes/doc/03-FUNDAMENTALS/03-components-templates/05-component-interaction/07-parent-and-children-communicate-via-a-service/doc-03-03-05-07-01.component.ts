import { Component } from '@angular/core';
import { Doc03030507Service } from './service/doc-03-03-05-07.service';

@Component({
  selector: 'app-doc-03-03-05-07-01',
  template: `
    <p-button [label]="'log foo'" (onClick)="logFoo()"></p-button>
  `,
})
export class Doc0303050701Component {
  constructor(private doc03020507Service: Doc03030507Service) {}

  public logFoo() {
    console.log(this.doc03020507Service.foo);
  }
}
