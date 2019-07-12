import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-x-02-a',
  template: '<button nz-button>{{foo.bar}}</button>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X02AComponent implements OnChanges {
  @Input()
  public foo: { bar: string } = { bar: 'BAR' };

  /*
   * 当组件使用了 OnPush 策略时, 只有当 input property 的对象引用发生变更时, 才会触发 CD, 如果只是 input property 的内部属性发生了变更, 则不会触发 CD,
   * 如下, 当 foo 没有发生变更, 只是 foo.bar 发生变更时, 就不会触发 ngOnChanges() 周期函数, 也就不会触发 CD
   */
  public ngOnChanges(changes: SimpleChanges): void {
    const fooChange = changes.foo;
    if (fooChange && !fooChange.isFirstChange()) {
      console.log(`[${X02AComponent.name}]\nngOnChanges()`);
    }
  }
}
