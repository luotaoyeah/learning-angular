import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
  OnInitEffects,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import {
  AAction,
  ActionTypeEnum,
  InitAction,
} from '../store/actions/03.actions';
import { Action } from '@ngrx/store';

@Injectable()
class X03Effects implements OnInitEffects {
  /*
   * 当所有的 root effects 都加载完成之后, 会触发一个 type 为 ROOT_EFFECTS_INIT 的 action,
   * 可以通过监听这个 action 来执行相应的操作
   */
  @Effect()
  public init$ = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    map(action => {
      return {};
    }),
  );

  /*
   * 通常情况下, 我们都会在 effect 最后 dispatch 一个新的 action,
   * 如果我们没有 dispatch 一个新的 action, 那这个 effect 就会自动将它拦截到的 action 再次 dispatch 出去,
   * 就会造成死循环,
   * 在这种情况下, 我们可以将 @Effect 的 dispatch 选项设为 false,
   * 阻止 effect 再将 action 重新 dispatch 出去
   */
  @Effect({
    dispatch: false,
  })
  public log$ = this.actions$.pipe(
    ofType(ActionTypeEnum.A),
    tap((action: AAction) => {
      console.log(`[${X03Effects.name}]\n`, 'log$', action.type);
    }),
  );

  constructor(private actions$: Actions) {}

  /*
   * effects class 可以实现 OnInitEffects 接口,
   * 然后实现 OnInitEffects.ngrxOnInitEffects() 方法,
   * 当这个 effect class 注册成功之后, 就会触发这个方法,
   * 该方法通过返回一个 action 来 dispatch 这个 action,
   * 其他的 effects 就可以监听这个 action 从而执行操作
   */
  public ngrxOnInitEffects(): Action {
    return new InitAction();
  }
}

@Injectable()
class X0301Effects {
  @Effect({
    dispatch: false,
  })
  public init$ = this.actions$.pipe(
    ofType(ActionTypeEnum.Init),
    tap((action: InitAction) => {
      console.log(`[${X0301Effects.name}]\n`, 'init$', action.type);
    }),
  );

  constructor(private actions$: Actions) {}
}

export { X03Effects, X0301Effects };
