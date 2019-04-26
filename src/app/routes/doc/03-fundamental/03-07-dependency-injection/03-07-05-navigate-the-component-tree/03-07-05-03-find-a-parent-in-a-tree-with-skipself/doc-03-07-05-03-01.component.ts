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
/*
 * 在 TS 中，class 可以被当成 interface 被实现，
 * class interface 本质上是一个 abstract class，但是被当成 interface 来用，
 * 因此当我们使用了 class interface 之后，对应的 component 就应该实现这个 class interface
 */
export class Doc0307050301Component implements OnInit, ParentComponent {
  foo: string = 'BAR';

  constructor(
    @Optional() @SkipSelf() private parentComponent: ParentComponent,
  ) {}

  ngOnInit() {
    console.assert(this.parentComponent.foo === 'FOO');
  }
}
