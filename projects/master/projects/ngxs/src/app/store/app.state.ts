import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext, StateToken } from '@ngxs/store';
import produce from 'immer';
import { ACT_APP } from './app.action';
import { APP__STATE_NAME } from './app.const';

const APP__STATE_TOKEN = new StateToken<IAppStateModel>(APP__STATE_NAME);

interface IAppStateModel {
  x: number;
  y: number;
}

type IStateContext = StateContext<IAppStateModel>;

// @dynamic
@State<IAppStateModel>({
  name: APP__STATE_TOKEN,
  defaults: {
    x: 0,
    y: 0,
  },
})
@Injectable()
class AppState {
  @Selector([AppState])
  public static x01(state: IAppStateModel): () => number {
    return () => state.x;
  }

  public static x02(): (state: IAppStateModel) => number {
    return createSelector([AppState], (state: IAppStateModel) => {
      return state.x;
    });
  }

  @Selector([AppState])
  public static y01(state: IAppStateModel): () => number {
    return () => state.y;
  }

  public static y02(): (state: IAppStateModel) => number {
    return createSelector([AppState], (state: IAppStateModel) => {
      return state.y;
    });
  }

  @Action(ACT_APP.x.Update, { cancelUncompleted: true })
  public updateX(ctx: IStateContext) {
    ctx.setState(
      produce((draft: IAppStateModel) => {
        draft.x++;
      }),
    );
  }
  @Action(ACT_APP.y.Update, { cancelUncompleted: true })
  public updateY(ctx: IStateContext) {
    ctx.setState(
      produce((draft: IAppStateModel) => {
        draft.y++;
      }),
    );
  }
}

export { AppState, IStateContext, IAppStateModel };
