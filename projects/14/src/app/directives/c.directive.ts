import { Directive, Host, Inject, Optional } from '@angular/core';
import { TOKEN_C } from '../element-injector-hierarchy/a.const';

@Directive({
    selector: '[appC]',
    // providers: [{ provide: TOKEN_C, useValue: 'CDirective' }],
})
export class CDirective {
    public constructor(
        @Inject(TOKEN_C)
        @Optional()
        // @Host() 表示 DI 的解析范围为: 从当前元素(directive 或 component)开始往上, 直到当前元素的 host.
        // 这儿的 host 指的是, 当前元素在谁的 template 里面, 谁就是 host.
        // 注意, 解析范围不包括 host 本身.
        @Host()
        public c: string | null,
    ) {
        console.log('c:', this.c);
    }
}
