import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Doc05040405Service {
  private static num: number = 0;

  public getNext(): Observable<number> {
    return Observable.create((subscriber: Subscriber<number>) => {
      if (Doc05040405Service.num < 3) {
        subscriber.next(++Doc05040405Service.num);
      } else {
        subscriber.error(new Error('GREATER THAN 3'));
      }
    });
  }
}
