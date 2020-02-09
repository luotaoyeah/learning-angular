import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, OnIdentifyEffects } from '@ngrx/effects';
import { ActionTypeEnum } from '@app/views/package/ngrx/effects/03-lifecycle/store/actions/03.actions';
import { tap } from 'rxjs/operators';

@Injectable()
class X030501Effects {
  @Effect({
    dispatch: false,
  })
  public log$ = this.actions$.pipe(
    ofType(ActionTypeEnum.Identity),
    tap(() => {
      console.log(`[%c${X030501Effects.name}]\n`, 'color:red');
    }),
  );

  constructor(private actions$: Actions) {}
}

/*
 * 默认情况下, 同一个 effects 即使注册多次, 实际上也只会注册一次,
 * 我们可以通过实现 OnIdentifyEffects 接口,
 * 然后实现 OnIdentifyEffects.ngrxOnIdentifyEffects() 方法,
 * 该方法返回一个 string 类型的 identifier,
 * 这样, 这个 effects 就可以被注册多次了
 */
@Injectable()
class X030502Effects implements OnIdentifyEffects {
  @Effect({
    dispatch: false,
  })
  public log$ = this.actions$.pipe(
    ofType(ActionTypeEnum.Identity),
    tap(() => {
      console.log(`%c[${X030502Effects.name}]\n`, 'color:green');
    }),
  );

  constructor(private actions$: Actions) {}

  public ngrxOnIdentifyEffects(): string {
    return Math.random().toString();
  }
}

export { X030501Effects, X030502Effects };
