import { Injectable } from '@angular/core';
import { IState } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/store/state/i-state';

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
