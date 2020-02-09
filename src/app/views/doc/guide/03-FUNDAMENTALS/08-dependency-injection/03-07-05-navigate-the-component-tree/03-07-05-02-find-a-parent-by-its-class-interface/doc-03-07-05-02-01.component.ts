import { Component, OnInit, Optional } from '@angular/core';
import { ParentComponent } from '@app/views/doc/guide/03-FUNDAMENTALS/08-dependency-injection/03-07-05-navigate-the-component-tree/03-07-05-02-find-a-parent-by-its-class-interface/doc-03-07-05-02.service';

@Component({
  selector: 'app--doc-03-07-05-02-01',
  template: '',
})
export class Doc0307050201Component implements OnInit {
  constructor(@Optional() private doc03070501Component: ParentComponent) {}

  public ngOnInit() {
    console.assert(this.doc03070501Component.foo === 'FOO');
  }
}
