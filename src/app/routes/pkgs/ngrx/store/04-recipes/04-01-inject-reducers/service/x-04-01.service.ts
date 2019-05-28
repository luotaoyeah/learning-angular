import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class X0401Service {
  constructor() {}

  /**
   * get a random numbere between [0, 1]
   * @return the random number
   */
  public getRandom(): number {
    return Math.random();
  }
}
