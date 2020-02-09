import { Component, OnInit, Optional } from '@angular/core';
import { ParentComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/08-dependency-injection/03-07-05-navigate-the-component-tree/03-07-05-03-find-a-parent-in-a-tree-with-skipself/doc-03-07-05-02.service';

@Component({
  selector: 'app--doc-03-07-05-03-02',
  template: '',
})
export class Doc0307050302Component implements OnInit {
  constructor(@Optional() private parentComponent: ParentComponent) {}

  public ngOnInit() {
    console.assert(this.parentComponent.foo === 'BAR');
  }
}
