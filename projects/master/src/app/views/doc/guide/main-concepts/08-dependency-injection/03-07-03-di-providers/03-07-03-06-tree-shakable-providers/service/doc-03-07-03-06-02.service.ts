import { Injectable } from '@angular/core';
import { Doc03070306Module } from '@app/views/doc/guide/main-concepts/08-dependency-injection/03-07-03-di-providers/03-07-03-06-tree-shakable-providers/doc-03-07-03-06.module';

/*
 * 使用 @Injectable.providedIn 注册，可以实现 tree-shaking
 */
@Injectable({
  providedIn: Doc03070306Module,
})
export class Doc0307030602Service {
  constructor() {
    console.log('TREE-SHAKABLE-SERVICE');
  }
}
