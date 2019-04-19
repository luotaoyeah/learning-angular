import { Injectable } from '@angular/core';

@Injectable()
export class Doc0306070202Service {
  constructor() {}

  public doSomeThing() {
    console.log(`%c[${Doc0306070202Service.name}] DO SOMETHING`, 'color:green');
  }
}
