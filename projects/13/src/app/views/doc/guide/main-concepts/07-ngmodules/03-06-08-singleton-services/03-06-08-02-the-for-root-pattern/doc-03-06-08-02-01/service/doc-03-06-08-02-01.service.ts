import { Injectable } from '@angular/core';

@Injectable()
export class Doc0306080201Service {
  public doSomething() {
    console.log(`%c[${Doc0306080201Service.name}]`, 'color:red');
  }
}
