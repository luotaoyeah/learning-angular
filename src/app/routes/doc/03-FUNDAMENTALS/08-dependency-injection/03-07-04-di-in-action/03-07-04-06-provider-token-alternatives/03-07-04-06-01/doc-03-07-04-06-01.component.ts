import { Component, Inject, OnInit } from '@angular/core';
import { ILogger } from './service/doc-03-07-04-06-01.service';

@Component({
  selector: 'app--doc-03-07-04-06-01',
  templateUrl: './doc-03-07-04-06-01.component.html',
  providers: [
    {
      provide: ILogger,
      useValue: {
        log(): string {
          return 'FOO';
        },
      },
    },
  ],
})
export class Doc0307040601Component implements OnInit {
  constructor(@Inject(ILogger) private logger: ILogger) {}

  public ngOnInit() {
    console.assert(this.logger.log() === 'FOO');
  }
}
