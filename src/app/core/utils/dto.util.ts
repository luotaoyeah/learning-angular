import { map } from 'lodash-es';

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
    // tslint:disable-next-line:no-any
    Ctor: new (...args: Array<any>) => T,
    // tslint:disable-next-line:no-any
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
    // tslint:disable-next-line:no-any
    Ctor: new (...args: Array<any>) => T,
    // tslint:disable-next-line:no-any
    data?: Array<any> | null,
  ): Array<T> {
    return map(data, item => DtoUtil.from<T>(Ctor, item));
  }

  /**
   * Convert a date string to a {@link Date} object,
   * if the result is an invalid date,
   * then return a default date(1970-01-01T00:00:00.000)
   *
   * @param dateString The date string.
   *        See {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Timestamp_string MDN} for more details
   */
  public static parseDate(dateString: string): Date {
    let _dateString = dateString;
    if (_dateString.length >= 23) {
      _dateString = `${dateString.substr(0, 23)}Z`;
    }

    let date: Date = new Date(_dateString);

    if (Number.isNaN(date.getTime())) {
      date = new Date(0);
    }

    return date;
  }

  /**
   * Get the array of keys of a DTO object with type safety
   *
   * @param dto The DTO object
   */
  public static keys<C extends object>(dto: C): Array<keyof C> {
    return Reflect.ownKeys(dto) as (Array<keyof C>);
  }
}

export { DtoUtil };
