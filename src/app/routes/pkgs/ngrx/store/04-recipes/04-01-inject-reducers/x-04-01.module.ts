import { InjectionToken, NgModule } from '@angular/core';
import { X0401Component } from './x-04-01.component';
import { SharedModule } from '@shared';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { X0401Reducer } from './store/reducers/04-01.reducer';
import { IState } from './store/state/IState';
import { ActionUnion } from './store/actions/04-01.actions';

const X0401REDUCER_TOKEN: InjectionToken<
  ActionReducer<IState, ActionUnion>
> = new InjectionToken<ActionReducer<IState, ActionUnion>>(
  'X0401REDUCER_TOKEN',
);

@NgModule({
  declarations: [X0401Component],
  providers: [
    {
      provide: X0401REDUCER_TOKEN,
      useFactory: (x0401Reducer: X0401Reducer) => {
        return x0401Reducer.createReducer();
      },
      deps: [X0401Reducer],
    },
  ],
  /*
   * StoreModule.forFeature() 方法的第二个参数,
   * 可以直接是一个 reducer 函数,
   * 也可以是一个 InjectionToken 对象, 这样我们就可以通过 DI 注入这个 reducer
   */
  imports: [SharedModule, StoreModule.forFeature('04-01', X0401REDUCER_TOKEN)],
  exports: [X0401Component],
})
export class X0401Module {}
