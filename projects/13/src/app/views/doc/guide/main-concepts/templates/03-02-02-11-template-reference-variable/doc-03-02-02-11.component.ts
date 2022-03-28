import { Component, OnInit } from '@angular/core';
import { Doc0302021101Component } from '@app/views/doc/guide/main-concepts/templates/03-02-02-11-template-reference-variable/doc-03-02-02-11-01.component';

@Component({
  selector: 'app--doc-03-02-02-11',
  templateUrl: './doc-03-02-02-11.component.html',
})
export class Doc03020211Component implements OnInit {
  public ngOnInit() {}

  public doSomething(someEl: HTMLInputElement) {
    alert(someEl.value);
  }

  public handleClick(doc0302021101Component: Doc0302021101Component) {
    alert(doc0302021101Component.SOME_PROPERTY);
  }
}
