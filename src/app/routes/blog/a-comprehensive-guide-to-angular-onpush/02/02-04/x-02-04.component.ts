import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app--x-02-04',
  templateUrl: './x-02-04.component.html',
  styles: [],
})
export class X0204Component {
  private items: Array<string> = [];
  public items$: BehaviorSubject<Array<string>> = new BehaviorSubject(
    this.items,
  );

  /**
   *
   */
  public handleClick() {
    this.items.push(Date.now().toString());
    this.items$.next(this.items);
  }
}
