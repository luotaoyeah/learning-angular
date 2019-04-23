import { Component, Inject, OnInit } from '@angular/core';
import {
  CONFIG_01,
  CONFIG_TOKEN_01,
  CONFIG_TOKEN_02,
  IConfig,
} from './doc-03-07-03-03-01-config';

@Component({
  selector: 'app-doc-03-07-03-03-01',
  templateUrl: './doc-03-07-03-03-01.component.html',
  providers: [
    {
      provide: CONFIG_TOKEN_01,
      useValue: CONFIG_01,
    },
  ],
})
export class Doc0307030301Component implements OnInit {
  constructor(
    @Inject(CONFIG_TOKEN_01) private config01: IConfig,
    @Inject(CONFIG_TOKEN_02) private config02: IConfig,
  ) {}

  ngOnInit() {
    console.assert(this.config01.value === 'BAR');
    console.assert(this.config02.value === 'BAZ');
  }
}
