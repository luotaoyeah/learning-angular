import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class X03Effects {
  /*
   * 当所有的 root effects 都加载完成之后, 会触发一个 type 为 ROOT_EFFECTS_INIT 的 action,
   * 可以通过监听这个 action 来执行相应的操作
   */
  @Effect()
  public init$ = this.actoins$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    map(action => {
      return {};
    }),
  );

  constructor(private actoins$: Actions) {}
}
