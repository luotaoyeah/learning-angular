import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
} from '@angular/core';

@Component({
  selector: 'app--x-02-b',
  template: '<button nz-button>{{foo.bar}}</button>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X02BComponent implements DoCheck {
  @Input()
  public foo: { bar: string } = { bar: 'BAR' };

  public _bar: string = this.foo.bar;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  /*
   * 当组件使用了 OnPush 策略, 同时 input property 的内部属性发生了变更时, 如何才能触发 CD ? 这时候, ngDoCheck() 就派上了用场,
   * 即使组件使用了 OnPush 策略, 但是当上级组件发生 CD 时, 该组件的 ngDoCheck() 依然会触发,
   * 我们可以在它里面, 对 input property 的属性进行比较, 从而判断是否需要执行 CD, 如果需要执行 CD, 则可以使用 ChangeDetectorRef.markForCheck() 进行标记,
   * 从而触发 CD
   */
  public ngDoCheck(): void {
    if (this._bar !== this.foo.bar) {
      this._bar = this.foo.bar;
      this.changeDetectorRef.markForCheck();
    }
  }
}
