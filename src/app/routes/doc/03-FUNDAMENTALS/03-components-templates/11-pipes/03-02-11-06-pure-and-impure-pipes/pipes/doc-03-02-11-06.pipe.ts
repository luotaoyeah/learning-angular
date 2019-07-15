import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doc03021106',
  /*
   * pipe 默认是 pure 的, 即当输入参数没有发生变更时, 不会执行 transform() 方法,
   * 当 pure 设置为 false 时, transform() 方法在每一个 change detection cycle 中都会执行
   */
  pure: false,
})
export class Doc03021106Pipe implements PipeTransform {
  public transform(value: Array<number>): Array<number> {
    return value.map(i => i * 2);
  }
}
