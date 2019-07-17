import { Component, forwardRef, Inject, InjectionToken, OnInit } from '@angular/core';

export const TOKEN = new InjectionToken<string>('some.token');

/*
 * forwardRef() 方法的作用是，用来指向一个尚未定义的引用，
 * 意思就是，将来我会引用某个数据，但是现在暂时不会引用这个数据，
 * 通常用来解决循环引用的问题，比如 A 引用了 B，B 又引用了 A，
 * 这时候，A 和 B 都没办法正常定义，
 * 如果通过 forwardRef() 将 A 对 B 的引用解耦，则可以先创建 B，
 * 等到 A 真正需要引用 B 时，就不会有问题了
 */
@Component({
  selector: 'app-doc-03-07-04-08',
  templateUrl: './doc-03-07-04-08.component.html',
  providers: [
    {
      /*
       * 此处需要引用 TOKEN，但是此时它尚未定义，
       * 因此需要使用 forwardRef() 来进行包装一下
       */
      provide: forwardRef(() => TOKEN),
      useValue: 'FOO',
    },
  ],
})
export class Doc03070408Component implements OnInit {
  constructor(@Inject(forwardRef(() => TOKEN)) private token: string) {}

  public ngOnInit() {
    console.assert(this.token === 'FOO');
  }
}
