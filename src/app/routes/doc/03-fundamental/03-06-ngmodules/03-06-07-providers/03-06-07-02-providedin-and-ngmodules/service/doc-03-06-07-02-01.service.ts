import { Injectable } from '@angular/core';
import { Doc0306Module } from '../../../doc-03-06.module';

@Injectable({
  /*
   * 通常情况下，service 都应该注册给 root injector，
   * 但是某些情况下，也可以将 service 注册给某个其他的 NgModule，此时需要通过 providedIn: SomeModule 来注册
   */
  providedIn: Doc0306Module,
})
export class Doc0306070201Service {
  constructor() {}

  public doSomeThing() {
    console.log(`%c[${Doc0306070201Service.name}] DO SOMETHING`, 'color:red');
  }
}
