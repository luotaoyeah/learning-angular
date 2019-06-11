import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

/*
 * https://angular.io/api/common/AsyncPipe
 */
@Component({
  selector: 'app-doc-09-02-02-06-01',
  templateUrl: './doc-09-02-02-06-01.component.html',
})
export class Doc0902020601Component implements OnInit {
  private resolve: ((value: string) => void) | null = null;

  /*
   * AsyncPipe(async) 用来对一个 promise 对象或者 observable 对象进行拆箱
   */
  public promise01: Promise<string> = new Promise<string>(
    (resolve: (value: string) => void) => {
      this.resolve = resolve;
    },
  );

  public observable01: Observable<string> = new Observable(
    (subscriber: Subscriber<string>) => {
      setInterval(() => {
        subscriber.next(new Date().toISOString());
      }, 1000);
    },
  );

  public ngOnInit() {}

  public handleClick() {
    if (this.resolve) {
      this.resolve('FOO');
    }
  }
}
