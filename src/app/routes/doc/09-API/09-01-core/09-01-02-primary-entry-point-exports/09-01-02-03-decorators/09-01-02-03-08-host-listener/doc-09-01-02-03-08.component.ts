import { Component, HostListener } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

/*
 * https://angular.io/api/core/HostListener
 */
@Component({
  selector: 'app--doc-09-01-02-03-08',
  templateUrl: './doc-09-01-02-03-08.component.html',
  styleUrls: ['./doc-09-01-02-03-08.component.less'],
})
export class Doc0901020308Component {
  constructor(private nzMessageService: NzMessageService) {}

  /*
   * @HostListener() 的第一个参数表示要监听的 DOM 事件名称,
   * 第二个参数表示要传递给箭头函数的参数列表,
   * 这些参数是一些字符串, 都是以 $event 开头的, 表示传递给监听函数的参数就是其对应的事件对象的属性
   */
  @HostListener('click', ['$event.target', '$event.clientX'])
  public handleClick(el: HTMLElement, clientX: number) {
    console.log(`[${Doc0901020308Component.name}]\n`, el);
    console.log(`[${Doc0901020308Component.name}]\n`, clientX);
    this.nzMessageService.info('CLICK');
  }
}
