import { map } from 'lodash';
import { SafeAny } from '@src/typings';

/**
 * DTO utils
 */
class DtoUtil {
  /**
   * Convert back-end response data to a fron-end model object
   *
   * @param Ctor The model class
   * @param data The response data
   */
  public static from<T>(Ctor: new (...args: Array<SafeAny>) => T, data?: SafeAny | null): T {
    return new Ctor(data);
  }

  /**
   * Convert back-end response data to a fron-end model array
   *
   * @param Ctor The model class
   * @param data The response data
   */
  public static fromArray<T>(Ctor: new (...args: Array<SafeAny>) => T, data?: Array<SafeAny> | null): Array<T> {
    return map(data, (item) => DtoUtil.from<T>(Ctor, item));
  }

  /**
   * Get the array of keys of a DTO object with type safety
   *
   * @param dto The DTO object
   */
  public static keys<C extends Record<string, unknown>>(dto: C): Array<keyof C> {
    if (!dto) {
      return [];
    }

    return Reflect.ownKeys(dto) as Array<keyof C>;
  }
}

export { DtoUtil };
