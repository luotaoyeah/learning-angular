import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Doc05070405Service {
  private static num: number = 0;

  public getNext(): Observable<number> {
    return Observable.create((subscriber: Subscriber<number>) => {
      if (Doc05070405Service.num < 3) {
        subscriber.next(++Doc05070405Service.num);
      } else {
        subscriber.error(new Error('GREATER THAN 3'));
      }
    });
  }
}
