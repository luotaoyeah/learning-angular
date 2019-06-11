import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe03021105',
})
export class Pipe03021105Pipe implements PipeTransform {
  /*
   * 默认情况下，只有当输入参数发生变更时，transform() 方法才会执行，
   * 也就是说，如果输入参数是一个 object 或者 array，当它们的属性和元素发生变更，
   * 但是 object 或者 array 本身引用没有发生变更时，transform() 方法也不会执行，
   *
   * 一个解决方法是：每次都重新给这个 object 或者 array 赋值，
   * 使之成为一个新的对象
   */
  public transform(value: Array<number>): Array<number> {
    return value.map(i => i * 2);
  }
}
