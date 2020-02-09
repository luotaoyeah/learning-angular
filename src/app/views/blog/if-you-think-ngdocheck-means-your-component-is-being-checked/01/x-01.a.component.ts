import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app--x-01-a',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X01AComponent implements DoCheck {
  /*
   * 上级组件在执行 CD 的过程中, 会执行下级组件的 ngDoCheck() 周期函数, 无论该下级组件是否使用了 OnPush 策略
   */
  public ngDoCheck(): void {
    console.log(`[${X01AComponent.name}]\nngDoCheck()`, new Date().toISOString());
  }
}
