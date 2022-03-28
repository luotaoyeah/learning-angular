import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app--x-02-05-02',
  templateUrl: './x-02-05-02.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020502Component {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  private _content: number = 0;

  public get content(): number {
    return this._content;
  }

  // 将 input 声明为一个 setter,
  // 并在 setter 中调用 `ChangeDetectorRef.markForCheck()` 方法,
  // 则当通过代码修改该 input 时, 就会触发 change detection
  @Input()
  public set content(value: number) {
    this._content = value;
    this.changeDetectorRef.markForCheck();
  }

  get runChangeDetection(): boolean {
    console.log(`[${X020502Component.name}]\n`, 'runChangeDetection()');
    return true;
  }
}
