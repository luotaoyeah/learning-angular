import { Injectable } from '@angular/core';

/*
 * @Injectable 的参数中可以不设置 providedIn: 'root'，
 * 此时，必须显示地将这个 service 在某个 NgModule 或者某个 component 的 providers 中进行声明
 */
@Injectable()
export class Doc03060702Service {
  constructor() {}

  public doSomeThing() {
    console.log(`%c[${Doc03060702Service.name}] DO SOMETHING`, 'color:red');
  }
}
