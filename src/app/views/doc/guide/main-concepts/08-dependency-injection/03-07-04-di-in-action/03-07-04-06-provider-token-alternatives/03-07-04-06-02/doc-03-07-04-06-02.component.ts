import { Component, Inject, OnInit, Optional } from '@angular/core';
import { TOKEN_01, TOKEN_02 } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-04-di-in-action/03-07-04-06-provider-token-alternatives/03-07-04-06-02/service/doc-03-07-04-06-02.service';

@Component({
  selector: 'app--doc-03-07-04-06-02',
  templateUrl: './doc-03-07-04-06-02.component.html',
})
export class Doc0307040602Component implements OnInit {
  constructor(
    @Inject(TOKEN_01)
    @Optional()
    private token01: string,
    @Inject(TOKEN_02)
    private token02: string,
  ) {}

  public ngOnInit() {
    console.assert(this.token01 === null);
    console.assert(this.token02 === 'FOO');
  }
}
