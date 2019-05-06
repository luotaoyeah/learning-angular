import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComnService {
  /**
   * 获取组件的标签信息，用于打印日志消息
   * @param Comp 组件
   */
  // tslint:disable-next-line:no-any
  public getComponentLabel(Comp: Type<any>) {
    const label = Comp.name
      .slice(3, -9)
      .split('')
      .reduce((previousValue: string, currentValue: string, index: number) => {
        return `${previousValue}${currentValue}${index % 2 === 1 ? '_' : ''}`;
      })
      .slice(0, -1);

    return `[ ${label} ]\n`;
  }
}
