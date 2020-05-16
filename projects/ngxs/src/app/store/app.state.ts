import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import produce from 'immer';
import { ACT_APP } from './app.action';
import { APP__STATE_NAME } from './app.const';

const APP__STATE_TOKEN = new StateToken<IAppStateModel>(APP__STATE_NAME);

interface IAppStateModel {
  items: Array<{ x: { value: number }; y: { value: number } }>;
}

type IStateContext = StateContext<IAppStateModel>;

// @dynamic
@State<IAppStateModel>({
  name: APP__STATE_TOKEN,
  defaults: {
    items: [
      {
        x: { value: 0 },
        y: { value: 0 },
      },
    ],
  },
})
@Injectable()
class AppState {
  @Selector([AppState])
  public static x(state: IAppStateModel): number {
    return state.items.find(() => true)?.x?.value ?? 0;
  }

  @Selector([AppState])
  public static y(state: IAppStateModel): number {
    return state.items.find(() => true)?.y?.value ?? 0;
  }

  @Action(ACT_APP.x.Update, { cancelUncompleted: true })
  public updateX(ctx: IStateContext) {
    ctx.setState(
      produce((draft: IAppStateModel) => {
        const item = draft.items.find(() => true);
        if (item) {
          item.x.value++;
        }
      }),
    );
  }
  @Action(ACT_APP.y.Update, { cancelUncompleted: true })
  public updateY(ctx: IStateContext) {
    ctx.setState(
      produce((draft: IAppStateModel) => {
        const item = draft.items.find(() => true);
        if (item) {
          item.y.value++;
        }
      }),
    );
  }
}

export { AppState, IStateContext, IAppStateModel };
