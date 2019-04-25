import {
  Component,
  forwardRef,
  OnInit,
  Optional,
  SkipSelf,
} from '@angular/core';
import { ParentComponent } from './doc-03-07-05-02.service';

/*
 * 像这种组件，通过 class interface 注入了 parent component，
 * 但是同时又通过 class interface 注册了自己，
 * 这时候，在注入 parent component 的时候，就必须使用 @SkipSelf() 从 parent injector 开始寻找
 */
@Component({
  selector: 'app-doc-03-07-05-03-01',
  template: '<app-doc-03-07-05-03-02></app-doc-03-07-05-03-02>',
  providers: [
    {
      provide: ParentComponent,
      useExisting: forwardRef(() => Doc0307050301Component),
    },
  ],
})
export class Doc0307050301Component implements OnInit {
  foo: string = 'BAR';

  constructor(
    @Optional() @SkipSelf() private parentComponent: ParentComponent,
  ) {}

  ngOnInit() {
    console.assert(this.parentComponent.foo === 'FOO');
  }
}
