import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-doc-03-02-04-06-01',
  template: '',
})
export class Doc0302040601Component implements OnInit, OnChanges, DoCheck {
  @Input() bar: { name: string } = { name: '' };

  private barName = this.bar.name;

  constructor() {}

  ngOnInit() {}

  /*
   * angular 没办法检测到 input property 内部属性的变更，
   * 如下，当 bar 对象的内部属性发生变更时，不会触发 ngOnChanges() 的执行
   */
  ngOnChanges(changes: SimpleChanges): void {
    const barChange: SimpleChange = changes.bar;
    if (barChange && !barChange.firstChange) {
      console.log(
        `%c[${Doc0302040601Component.name}][ngOnChanges()] CHANGED`,
        'color:#00ff00',
      );
    }
  }

  ngDoCheck(): void {
    if (this.barName !== this.bar.name) {
      this.barName = this.bar.name;
      console.log(
        `%c[${Doc0302040601Component.name}][ngDoCheck()] CHANGED`,
        'color:#00ff00',
      );
    }
  }
}
