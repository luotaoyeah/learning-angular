import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app--x-02-01-01',
  templateUrl: './x-02-01-01.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020101Component {
  // 在 `OnPush` 策略下, 如果 input 是一个 object,
  // 则只有当该 input 的 reference 发生变更时, 才会触发 change detection,
  // 如果只是该 input 的内部属性发生变更, 则不会触发 change detection
  @Input()
  public config: { position: 'up' | 'down' } = { position: 'up' };

  public get runChangeDetection(): boolean {
    console.log(`[${X020101Component.name}]\n`, 'runChangeDetection()');
    return true;
  }
}
