/**
 * Pagination data for backend response
 */
import { isNil } from 'lodash-es';
import { DtoUtil } from '@app/core/utils';

class Page<T> {
  public total: number = 0;
  public items: Array<T> = [];

  constructor(t: Partial<Page<T>> = {}) {
    DtoUtil.keys(t).forEach((key) => {
      const value = Reflect.get(t, key);
      if (!isNil(value)) {
        Reflect.set(this, key, value);
      }
    });
  }
}

export { Page };
