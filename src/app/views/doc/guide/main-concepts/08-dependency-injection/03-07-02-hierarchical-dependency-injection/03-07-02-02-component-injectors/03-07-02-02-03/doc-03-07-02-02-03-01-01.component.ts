import { Component, OnInit } from '@angular/core';
import { Doc030702020301Service } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-02-component-injectors/03-07-02-02-03/service/doc-03-07-02-02-03-01.service';
import { Doc030702020303Service } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-02-component-injectors/03-07-02-02-03/service/doc-03-07-02-02-03-03.service';
import { Doc030702020302Service } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-02-hierarchical-dependency-injection/03-07-02-02-component-injectors/03-07-02-02-03/service/doc-03-07-02-02-03-02.service';

@Component({
  selector: 'app--doc-03-07-02-02-03-01-01',
  template: `
    <nz-card>
      <button nz-button>{{ foo }}</button>
      <button nz-button>{{ bar }}</button>
      <button nz-button>{{ baz }}</button>
    </nz-card>
  `,
  providers: [
    {
      provide: Doc030702020303Service,
      useValue: {
        getSome(): string {
          return 'BAZ 03';
        },
      },
    },
  ],
})
export class Doc03070202030101Component implements OnInit {
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
