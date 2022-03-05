import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app--doc-03-03-05-03-01',
  templateUrl: './doc-03-03-05-03.01.component.html',
})
export class Doc0303050301Component implements OnChanges {
  @Input()
  public major: number = 0;

  @Input()
  public minor: number = 0;

  /*
   * 当 input property 的值发生变更时, 会触发生命周期函数 ngOnChanges()
   */
  public ngOnChanges(changes: SimpleChanges): void {
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        const prop = changes[key];
        console.log(
          `%c${Doc0303050301Component.name}.${key}(${prop.previousValue} -> ${prop.currentValue})`,
          'color:#00f',
        );
      }
    }
  }
}
