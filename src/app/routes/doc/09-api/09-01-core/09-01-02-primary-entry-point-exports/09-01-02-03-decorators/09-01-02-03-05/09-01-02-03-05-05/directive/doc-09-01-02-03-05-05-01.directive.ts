import { Directive } from '@angular/core';

/*
 * 使用 @Directive.exportAs 给 directive 设置一个**输出名称**，
 * 在 template 中可以通过 #tpl="输出名称" 来将这个 directive 实例赋值给 tpl 变量
 */
@Directive({
  selector: '[appDoc09010203050501]',
  exportAs: 'appDoc09010203050501',
})
export class Doc09010203050501Directive {
  constructor() {}
}
