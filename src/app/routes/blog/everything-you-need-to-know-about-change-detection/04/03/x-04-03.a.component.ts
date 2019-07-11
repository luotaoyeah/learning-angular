import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-x-04-03-a',
  template: '<button nz-button>{{len}}</button>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X0403AComponent implements DoCheck {
  @Input()
  public foo: Array<number> = [];

  public len: number = this.foo.length;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  /*
   * ChangeDetectorRef.markForCheck() 方法, 用来将当前组件标记为'待检查', angular 会对当前组件执行一次 CD,
   * 同时, 如果当前组件的上级组件也禁用了 CD, 则也会将上级组件标记为'待检查', 一直到跟组件,
   * 这也是它跟 ChangeDetectorRef.reattach() 方法的区别, reattach() 方法只会启用当前组件的 CD, 不会启用上级组件的 CD
   */
  public ngDoCheck(): void {
    if (this.foo.length !== this.len) {
      this.len = this.foo.length;
      this.changeDetectorRef.markForCheck();
    }
  }
}
