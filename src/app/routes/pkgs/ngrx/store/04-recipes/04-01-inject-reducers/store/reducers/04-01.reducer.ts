import { IState } from '../state/IState';
import { ActionTypeEnum, ActionUnion } from '../actions/04-01.actions';
import { Injectable } from '@angular/core';
import { X0401Service } from '../../service/x-04-01.service';
import { ActionReducer } from '@ngrx/store';

const initialState: IState = {
  x: 0,
};

/*
 * 如果一个 reducer 中, 需要依赖其他的 service,
 * 这时我们可以声明一个 injectable class, 作为这个 reducer 的工厂类, 然后在这个工厂类中注入这个依赖的 service,
 * 然后我们在使用 StoreModule.forFeature() 方法注册 reducer 的时候, 也可以通过注入的方式来注册
 */
@Injectable({
  providedIn: 'root',
})
class X0401Reducer {
  constructor(private x0401Service: X0401Service) {}

  public createReducer(): ActionReducer<IState, ActionUnion> {
    return (state: IState = initialState, action: ActionUnion) => {
      switch (action.type) {
        case ActionTypeEnum.A:
          return { ...state, x: this.x0401Service.getRandom() };
        default:
          return state;
      }
    };
  }
}

export { X0401Reducer };
