import { Component, Inject, OnInit } from '@angular/core';
import {
  Foo,
  SOME_TOKEN_01,
  SOME_TOKEN_02,
} from './service/doc-03-07-04-05.service';

@Component({
  selector: 'app-doc-03-07-04-05',
  templateUrl: './doc-03-07-04-05.component.html',
  providers: [
    {
      provide: SOME_TOKEN_01,
      useValue: 'FOO',
    },
    {
      provide: SOME_TOKEN_02,
      useClass: Foo,
    },
  ],
})
export class Doc03070405Component implements OnInit {
  constructor(
    @Inject(SOME_TOKEN_01)
    private token01: string,
    @Inject(SOME_TOKEN_02)
    private token02: Foo,
  ) {}

  ngOnInit() {
    console.assert(this.token01 === 'FOO');
    console.assert(this.token02.foo === 'FOO');
  }
}
