import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app--doc-03-02-11-06-01',
  templateUrl: './doc-03-02-11-06-01.component.html',
})
export class Doc0302110601Component implements OnInit {
  private messages: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  public message$!: Observable<string>;

  constructor() {
    this.init();
  }

  public ngOnInit() {}

  public init() {
    this.message$ = interval(1000).pipe(
      map(i => this.messages[i]),
      take(this.messages.length),
    );
  }
}
