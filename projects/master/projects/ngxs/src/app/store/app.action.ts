/* eslint-disable no-shadow */
import { APP__STATE_NAME } from './app.const';

namespace ACT_APP {
  export namespace x {
    export class Update {
      public static readonly type = `${APP__STATE_NAME}.x.${Update.name}`;
    }
  }

  export namespace y {
    export class Update {
      public static readonly type = `${APP__STATE_NAME}.y.${Update.name}`;
    }
  }
}

export { ACT_APP };
