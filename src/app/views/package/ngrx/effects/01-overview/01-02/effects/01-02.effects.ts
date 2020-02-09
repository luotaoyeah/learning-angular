import { Injectable } from '@angular/core';
import {
  ActionTypeEnum,
  SetMoviesAction,
} from '@app/views/package/ngrx/effects/01-overview/01-02/store/actions/01-02.actions';
import { X01Service } from '@app/views/package/ngrx/effects/01-overview/services/x-01.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

/*
 * effects 通过 actions$ 对所有的 actions 进行监听,
 * 通过 ofType 过滤出感兴趣的 action,
 * 当这个 action 触发时, 就执行对应的 side effect, 比如获取远程数据,
 * 最后 dispatch 一个新的 action, 并附加上数据
 */
@Injectable()
class X0102Effects {
  @Effect()
  public fetchMovies$ = this.actions$.pipe(
    ofType(ActionTypeEnum.FetchMovies),
    mergeMap(() =>
      this.x01Service.listMovies().pipe(
        map((movies) => new SetMoviesAction(movies)),
        catchError(() => EMPTY),
      ),
    ),
  );

  constructor(private actions$: Actions, private x01Service: X01Service) {}
}

export { X0102Effects };
