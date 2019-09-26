import { map } from 'lodash';

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
  public static from<T>(

    Ctor: new (...args: Array<any>) => T,

    data?: any | null,
  ): T {
    return new Ctor(data);
  }

  /**
   * Convert back-end response data to a fron-end model array
   *
   * @param Ctor The model class
   * @param data The response data
   */
  public static fromArray<T>(

    Ctor: new (...args: Array<any>) => T,

    data?: Array<any> | null,
  ): Array<T> {
    return map(data, item => DtoUtil.from<T>(Ctor, item));
  }

  /**
   * Get the array of keys of a DTO object with type safety
   *
   * @param dto The DTO object
   */
  public static keys<C extends object>(dto: C): Array<keyof C> {
    if (!dto) {
      return [];
    }

    return Reflect.ownKeys(dto) as Array<keyof C>;
  }
}

export { DtoUtil };
