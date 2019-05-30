import { Injectable } from '@angular/core';
import { IState } from '../store/state/IState';

@Injectable({
  providedIn: 'root',
})
export class X0401Service {
  /**
   * get a random numbere between [0, 1]
   * @return the random number
   */
  public getRandom(): number {
    return Math.random();
  }

  /**
   * get initial state
   * @return the initial state
   */
  public getInitialState(): IState {
    return { x: 9 };
  }
}
