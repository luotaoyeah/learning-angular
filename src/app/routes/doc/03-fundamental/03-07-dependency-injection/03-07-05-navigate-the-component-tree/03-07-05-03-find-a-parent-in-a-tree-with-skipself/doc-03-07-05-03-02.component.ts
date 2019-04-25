import { Component, OnInit, Optional } from '@angular/core';
import { ParentComponent } from './doc-03-07-05-02.service';

@Component({
  selector: 'app-doc-03-07-05-03-02',
  template: '',
})
export class Doc0307050302Component implements OnInit {
  constructor(@Optional() private parentComponent: ParentComponent) {}

  ngOnInit() {
    console.assert(this.parentComponent.foo === 'BAR');
  }
}
