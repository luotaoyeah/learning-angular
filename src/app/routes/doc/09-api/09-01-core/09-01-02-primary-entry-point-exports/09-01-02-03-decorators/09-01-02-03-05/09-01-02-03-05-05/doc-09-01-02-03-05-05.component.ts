import { Component, OnInit, ViewChild } from '@angular/core';
import { Doc09010203050501Directive } from './directive/doc-09-01-02-03-05-05-01.directive';
import { Doc09010203050502Directive } from './directive/doc-09-01-02-03-05-05-02.directive';

/*
 * https://angular.io/api/core/Directive#exportas
 */
@Component({
  selector: 'app-doc-09-01-02-03-05-05',
  templateUrl: './doc-09-01-02-03-05-05.component.html',
})
export class Doc090102030505Component implements OnInit {
  @ViewChild('tpl01')
  public appDoc09010203050501!: Doc09010203050501Directive;

  @ViewChild('tpl02')
  public appDoc09010203050502!: Doc09010203050502Directive;

  constructor() {}

  public ngOnInit() {
    console.assert(
      this.appDoc09010203050501 instanceof Doc09010203050501Directive,
    );
    console.assert(
      this.appDoc09010203050502 instanceof Doc09010203050502Directive,
    );
  }
}
