import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UniqueValidator implements AsyncValidator {
  /**
   *
   * @param control the form model
   */
  public validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Observable((subscriber: Subscriber<ValidationErrors | null>) => {
      setTimeout(() => {
        subscriber.next(control.value === 'foo' ? { unique: { value: control.value } } : null);

        /*
         * async validator function 返回的 observable 必须调用 complete() 方法结束
         */
        subscriber.complete();
      }, 2000);
    });
  }
}
