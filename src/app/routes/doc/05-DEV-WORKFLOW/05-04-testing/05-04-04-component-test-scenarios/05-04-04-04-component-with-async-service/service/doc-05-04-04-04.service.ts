import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Doc05040404Service {
  private static num: number = 0;

  public getNext(): Observable<number> {
    return Observable.create((subscriber: Subscriber<number>) => {
      if (Doc05040404Service.num < 3) {
        subscriber.next(++Doc05040404Service.num);
      } else {
        subscriber.error(new Error('GREATER THAN 3'));
      }
    });
  }
}
