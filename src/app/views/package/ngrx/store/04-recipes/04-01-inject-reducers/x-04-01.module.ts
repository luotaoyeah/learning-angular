import { InjectionToken, NgModule } from '@angular/core';
import { X0401Component } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/x-04-01.component';
import { SharedModule } from '@app/shared';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { metaReducer01, X0401Reducer } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/store/reducers/04-01.reducer';
import { IState } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/store/state/i-state';
import { ActionUnion } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/store/actions/04-01.actions';
import { StoreConfig } from '@ngrx/store/src/store_module';
import { X0401Service } from '@app/views/package/ngrx/store/04-recipes/04-01-inject-reducers/service/x-04-01.service';

const X0401_REDUCER_TOKEN: InjectionToken<
  ActionReducer<IState, ActionUnion>
> = new InjectionToken<ActionReducer<IState, ActionUnion>>(
  'X0401_REDUCER_TOKEN',
);

const X0401_FEATURE_CONFIG_TOKEN: InjectionToken<
  StoreConfig<IState>
> = new InjectionToken<StoreConfig<IState>>('X0401_FEATURE_CONFIG_TOKEN');

@NgModule({
  declarations: [X0401Component],
  providers: [
    {
      provide: X0401_REDUCER_TOKEN,
      useFactory: (x0401Reducer: X0401Reducer) => {
        return x0401Reducer.createReducer();
      },
      deps: [X0401Reducer],
    },
    {
      provide: X0401_FEATURE_CONFIG_TOKEN,
      useFactory: (x0401Service: X0401Service) => {
        return {
          metaReducers: [metaReducer01],
          initialState: x0401Service.getInitialState(),
        };
      },
      deps: [X0401Service],
    },
  ],
  /*
   * StoreModule.forFeature() 方法的第二个参数,
   * 可以直接是一个 reducer 函数,
   * 也可以是一个 InjectionToken 对象, 这样我们就可以通过 DI 注入这个 reducer,
   *
   * StoreModule.forFeature() 方法的第三个参数,
   * 可以直接是一个 StoreConfig 对象,
   * 也可以是一个 InjectionToken 对象, 这样我们就可以通过 DI 注入这个 reducer,
   */
  imports: [
    SharedModule,
    StoreModule.forFeature(
      '04-01',
      X0401_REDUCER_TOKEN,
      X0401_FEATURE_CONFIG_TOKEN,
    ),
  ],
  exports: [X0401Component],
})
export class X0401Module {}
