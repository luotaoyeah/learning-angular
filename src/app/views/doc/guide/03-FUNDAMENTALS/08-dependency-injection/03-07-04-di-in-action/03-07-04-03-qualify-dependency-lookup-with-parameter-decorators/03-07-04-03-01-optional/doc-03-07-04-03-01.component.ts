import { Component, Inject, OnInit, Optional } from '@angular/core';
import { TOKEN } from './service/doc-03-07-04-03-01.service';

@Component({
  selector: 'app--doc-03-07-04-03-01',
  templateUrl: './doc-03-07-04-03-01.component.html',
})
export class Doc0307040301Component implements OnInit {
  constructor(@Optional() @Inject(TOKEN) private token: string) {}

  public ngOnInit() {
    console.assert(this.token === null);
  }
}
