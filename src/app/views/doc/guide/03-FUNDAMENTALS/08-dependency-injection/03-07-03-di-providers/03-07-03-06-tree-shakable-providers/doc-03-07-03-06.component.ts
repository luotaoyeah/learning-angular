import { Component, OnInit } from '@angular/core';
import { Doc0307030603Service } from '@app/views/doc/guide/03-FUNDAMENTALS/08-dependency-injection/03-07-03-di-providers/03-07-03-06-tree-shakable-providers/service/doc-03-07-03-06-03.service';

@Component({
  selector: 'app--doc-03-07-03-06',
  templateUrl: './doc-03-07-03-06.component.html',
})
export class Doc03070306Component implements OnInit {
  constructor(private doc0307030603Service: Doc0307030603Service) {}

  public ngOnInit() {
    console.assert(this.doc0307030603Service.K === 'BAR');
  }
}
