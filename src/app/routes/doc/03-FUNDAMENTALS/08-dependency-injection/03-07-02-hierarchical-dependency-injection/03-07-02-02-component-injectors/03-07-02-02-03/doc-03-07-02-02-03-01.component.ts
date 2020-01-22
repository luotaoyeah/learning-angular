import { Component, OnInit } from '@angular/core';
import { Doc030702020301Service } from './service/doc-03-07-02-02-03-01.service';
import { Doc030702020303Service } from './service/doc-03-07-02-02-03-03.service';
import { Doc030702020302Service } from './service/doc-03-07-02-02-03-02.service';

@Component({
  selector: 'app--doc-03-07-02-02-03-01',
  template: `
    <nz-card>
      <button nz-button>{{ foo }}</button>
      <button nz-button>{{ bar }}</button>
      <button nz-button>{{ baz }}</button>
      <hr />
      <app--doc-03-07-02-02-03-01-01></app--doc-03-07-02-02-03-01-01>
    </nz-card>
  `,
  providers: [
    {
      provide: Doc030702020302Service,
      useValue: {
        getSome(): string {
          return 'BAZ 02';
        },
      },
    },
  ],
})
export class Doc030702020301Component implements OnInit {
  public foo: string = '';
  public bar: string = '';
  public baz: string = '';

  constructor(
    private doc030702020301Service: Doc030702020301Service,
    private doc030702020302Service: Doc030702020302Service,
    private doc030702020303Service: Doc030702020303Service,
  ) {
    this.foo = this.doc030702020301Service.getSome();
    this.bar = this.doc030702020302Service.getSome();
    this.baz = this.doc030702020303Service.getSome();
  }

  public ngOnInit() {}
}
