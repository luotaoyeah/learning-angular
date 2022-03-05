/**
 * the base class for backend response
 */
import { isNil } from 'lodash-es';
import { DtoUtil } from '@app/core/utils';

class ResponseResult<T> {
  public data: T = {} as T;
  public state: boolean = true;
  public message: string = '';

  constructor(t: Partial<ResponseResult<T>> = {}) {
    DtoUtil.keys(t).forEach((key) => {
      const value = Reflect.get(t, key);
      if (!isNil(value)) {
        Reflect.set(this, key, value);
      }
    });
  }
}

export { ResponseResult };
