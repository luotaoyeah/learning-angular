import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ROUTER_CANCEL,
  ROUTER_ERROR,
  ROUTER_NAVIGATED,
  ROUTER_NAVIGATION,
  ROUTER_REQUEST,
} from '@ngrx/router-store';
import { map } from 'rxjs/operators';
import { Action } from '@ngrx/store';

@Injectable()
class X01Effects {
  /*
   * @ngrx/router-store 提供了 5 个 action, 对应不同的路由操作
   */
  @Effect({
    dispatch: false,
  })
  public log$ = this.actions$.pipe(
    ofType(
      ROUTER_REQUEST,
      ROUTER_NAVIGATION,
      ROUTER_NAVIGATED,
      ROUTER_CANCEL,
      ROUTER_ERROR,
    ),
    map((action: Action) => {
      console.log(`%c[${X01Effects.name}]\n`, 'color:red', action.type);
    }),
  );

  constructor(private actions$: Actions) {}
}

export { X01Effects };
