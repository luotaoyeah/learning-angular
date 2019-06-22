import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Doc05040404Service {
  private static num: number = 0;

  public getNextNum(): Observable<number> {
    return new Observable((subscriber: Subscriber<number>) => {
      if (Doc05040404Service.num < 3) {
        subscriber.next(++Doc05040404Service.num);
      } else {
        subscriber.error(new Error('GREATER THAN 3'));
      }
    });
  }
}
