import { Component, forwardRef, OnInit } from '@angular/core';
import { ParentComponent } from './doc-03-07-05-02.service';

/*
 * 如果 child component 不能提前知道 parent component 的类型，
 * 这时候就需要 parent component 配合，使用 class interface 的方式定义一个通用的 token，
 * child component 也知道这个 token，它就可以使用这个 token 注入 parent component
 */
@Component({
  selector: 'app--doc-03-07-05-02',
  templateUrl: './doc-03-07-05-02.component.html',
  providers: [
    {
      provide: ParentComponent,
      useExisting: forwardRef(() => Doc03070502Component),
    },
  ],
})
export class Doc03070502Component implements OnInit {
  public foo: string = 'FOO';

  public ngOnInit() {}
}
