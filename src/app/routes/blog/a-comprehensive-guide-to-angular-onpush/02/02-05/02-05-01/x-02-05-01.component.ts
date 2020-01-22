import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app--x-02-05-01',
  templateUrl: './x-02-05-01.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020501Component {
  @Input()
  public content01: string = 'FOO';

  /*
   * 将 input property 声明为一个 setter,
   * 并在该 setter 中调用 ChangeDetectorRef.markForCheck() 方法,
   * 则当通过代码修改该 input property 的值时, 就会触发 change detection cycle
   */
  private _content02: string = 'FOO';
  @Input()
  public set content02(value: string) {
    this._content02 = value;
    this.changeDetectorRef.markForCheck();
  }

  public get content02(): string {
    return this._content02;
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}
}
