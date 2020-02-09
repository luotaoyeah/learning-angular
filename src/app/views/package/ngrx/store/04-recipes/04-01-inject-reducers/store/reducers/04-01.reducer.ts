import { IState } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/store/state/i-state';
import { ActionTypeEnum, ActionUnion } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/store/actions/04-01.actions';
import { Injectable } from '@angular/core';
import { X0401Service } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/service/x-04-01.service';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { X0401Component } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/x-04-01.component';

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
    return (state: IState | undefined, action: ActionUnion) => {
      switch (action.type) {
        case ActionTypeEnum.A:
          return { ...state, x: this.x0401Service.getRandom() };
        case ActionTypeEnum.B:
          return { ...state, x: this.x0401Service.getRandom() };
        default:
          return state || { x: 0 };
      }
    };
  }
}

function metaReducer01(reducer: ActionReducer<IState, ActionUnion>) {
  return (state: IState | undefined, action: ActionUnion) => {
    if (action.type === ActionTypeEnum.B) {
      console.log(
        `%c[${X0401Component.name}]\n`,
        'color:red',
        `[${metaReducer01.name}]`,
        action.type,
      );
    }
    return reducer(state, action);
  };
}

/*
 * meta-reducer 也可以使用 DI 注入的方式来进行注册,
 * 但是要注意的是, 必须在 AppModule 中进行注入
 */
@Injectable({
  providedIn: 'root',
})
class MetaReducer02 {
  constructor(private x0401Service: X0401Service) {}

  public createMetaReducer(): MetaReducer<IState, ActionUnion> {
    return (reducer: ActionReducer<IState, ActionUnion>) => {
      return (state: IState | undefined, action: ActionUnion) => {
        if (action.type === ActionTypeEnum.B) {
          console.log(
            `%c[${X0401Component.name}]\n`,
            'color:green',
            `[${metaReducer01.name}]`,
            action.type,
            this.x0401Service.getRandom(),
          );
        }
        return reducer(state, action);
      };
    };
  }
}

export { X0401Reducer, metaReducer01, MetaReducer02 };
