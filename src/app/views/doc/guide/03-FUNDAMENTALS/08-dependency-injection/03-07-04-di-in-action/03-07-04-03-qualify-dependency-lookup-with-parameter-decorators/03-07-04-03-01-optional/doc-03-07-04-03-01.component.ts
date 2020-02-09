import { Component, Inject, OnInit, Optional } from '@angular/core';
import { TOKEN } from '@app/views/doc/guide/03-FUNDAMENTALS/08-dependency-injection/03-07-04-di-in-action/03-07-04-03-qualify-dependency-lookup-with-parameter-decorators/03-07-04-03-01-optional/service/doc-03-07-04-03-01.service';

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
