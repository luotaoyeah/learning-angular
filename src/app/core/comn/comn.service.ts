import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComnService {
  /**
   * 获取组件的标签信息，用于打印日志消息
   * @param Comp 组件类型
   * @param start 开始索引
   * @param end 结束索引
   */
  public getComponentLabel(
    // tslint:disable-next-line:no-any
    Comp: Type<any>,
    start: number = 3,
    end: number = -9,
  ) {
    const label = Comp.name
      .slice(start, end)
      .split('')
      .reduce((previousValue: string, currentValue: string, index: number) => {
        return `${previousValue}${currentValue}${index % 2 === 1 ? '-' : ''}`;
      })
      .slice(0, -1);

    return `[${label}]\n`;
  }
}
