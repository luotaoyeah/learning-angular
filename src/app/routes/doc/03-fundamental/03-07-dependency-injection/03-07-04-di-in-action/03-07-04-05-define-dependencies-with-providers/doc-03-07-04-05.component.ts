import { Component, Inject, OnInit } from '@angular/core';
import { SOME_TOKEN_01 } from './service/doc-03-07-04-05.service';

@Component({
  selector: 'app-doc-03-07-04-05',
  templateUrl: './doc-03-07-04-05.component.html',
  providers: [
    {
      provide: SOME_TOKEN_01,
      useValue: 'FOO',
    },
  ],
})
export class Doc03070405Component implements OnInit {
  constructor(@Inject(SOME_TOKEN_01) private token01: string) {}

  ngOnInit() {
    console.assert(this.token01 === 'FOO');
  }
}
