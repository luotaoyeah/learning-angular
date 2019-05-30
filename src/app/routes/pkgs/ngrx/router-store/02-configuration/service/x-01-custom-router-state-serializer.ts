import {
  BaseRouterStoreState,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';

/*
 * 自定义的存储数据对象, 必须实现 BaseRouterStoreState 接口
 */
interface CustomRouterStoreState extends BaseRouterStoreState {
  param: Params;
  queryParams: Params;
}

/*
 * 默认情况下, @ngrx/router-store 在 dispatch 某个 action 的时候, 比如 ROUTER_NAVIGATION,
 * 会将当前的 RouterStateSnapshot 对象整个作为 payload 数据存储到 state 中去,
 * 这个 RouterStateSnapshot 对象中的数据很多, 可能会影响性能,
 * 我们可以实现一个自定义的 RouterStateSerializer 来对这个对象数据进行过滤,
 * 只将我们需要的数据存储到 state 中去
 */
class X01CustomRouterStateSerializer
  implements RouterStateSerializer<CustomRouterStoreState> {
  /**
   *
   */
  public serialize(routerState: RouterStateSnapshot): CustomRouterStoreState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    return {
      url: routerState.url,
      param: route.params,
      queryParams: routerState.root.queryParams,
    };
  }
}

export { CustomRouterStoreState, X01CustomRouterStateSerializer };
