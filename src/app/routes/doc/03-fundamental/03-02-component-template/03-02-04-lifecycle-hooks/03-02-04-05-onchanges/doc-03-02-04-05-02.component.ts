import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-doc-03-02-04-05-02',
  template: '<p>{{bar.name}}</p>',
})
export class Doc0302040502Component implements OnInit, OnChanges {
  @Input() public bar: { name: string } = { name: 'BAR' };

  constructor() {}

  public ngOnInit() {}

  /*
   * ngOnChanges() 会在 input properties 发生变更时触发，
   * 这儿所说的变更，指的是对象的引用发生变更，
   * 因此如果 input property 是一个对象，当它的属性发生变更时，不会触发 ngOnChanges()，
   * 只有当它的对象引用发生变更时，才会触发 ngOnChanges()
   */
  public ngOnChanges(changes: SimpleChanges): void {
    const barChange: SimpleChange = changes.bar;
    if (barChange && !barChange.firstChange) {
      console.log(`[${Doc0302040502Component.name}] ngOnChange()`);
    }
  }
}
