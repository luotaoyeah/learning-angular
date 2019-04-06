import { Pipe, PipeTransform } from '@angular/core';

/*
 * 使用 @Pipe() 装饰器，来讲一个 class 标识为一个 pipe，
 * 通过选项 name 来设置它的名称
 */
@Pipe({
  name: 'pipe03021102',
})
/*
 * 一个 pipe 本质上就是一个 class，
 * 它需要时间 PipeTransform 接口的 transform() 方法
 */
export class Pipe03021102Pipe implements PipeTransform {
  /*
   * transform() 方法的第一个参数，就是输入参数，它的值就是 pipe 前面的表达式的值，
   * 或者上一个 pipe 的返回值，
   * transform() 方法除了第一个输入参数之外，还可以定义任意的其他参数
   */
  transform(value: number, x: number, y: number): string {
    return String((value * x) / y);
  }
}
