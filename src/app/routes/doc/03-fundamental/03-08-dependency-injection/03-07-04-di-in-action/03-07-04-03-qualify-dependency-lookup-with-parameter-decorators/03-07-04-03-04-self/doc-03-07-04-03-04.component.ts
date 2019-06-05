import { Component, OnInit } from '@angular/core';
import { STORE_TOKEN } from './service/doc-03-07-04-03-04-01.service';

@Component({
  selector: 'app-doc-03-07-04-03-04',
  template: '<app-doc-03-07-04-03-04-01></app-doc-03-07-04-03-04-01>',
  providers: [
    {
      provide: STORE_TOKEN,
      useFactory: (): Storage => window.localStorage,
    },
  ],
})
export class Doc0307040304Component implements OnInit {
  public ngOnInit() {}
}
