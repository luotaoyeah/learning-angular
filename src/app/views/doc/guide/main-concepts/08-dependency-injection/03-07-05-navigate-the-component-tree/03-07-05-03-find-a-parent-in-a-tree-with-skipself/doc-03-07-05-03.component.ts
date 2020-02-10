import { Component, forwardRef, OnInit } from '@angular/core';
import { ParentComponent } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-05-navigate-the-component-tree/03-07-05-03-find-a-parent-in-a-tree-with-skipself/doc-03-07-05-02.service';

@Component({
  selector: 'app--doc-03-07-05-03',
  template: '<app--doc-03-07-05-03-01></app--doc-03-07-05-03-01>',
  providers: [
    {
      provide: ParentComponent,
      useExisting: forwardRef(() => Doc03070503Component),
    },
  ],
})
export class Doc03070503Component implements OnInit, ParentComponent {
  public foo: string = 'FOO';

  public ngOnInit() {}
}
