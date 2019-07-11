import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-x-04-02-a',
  template: '<button nz-button>{{foo}}</button>',
})
export class X0402AComponent implements OnChanges {
  @Input()
  public foo: string = 'FOO';

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    changeDetectorRef.detach();
  }

  /*
   * 即使使用 ChangeDetectorRef.detach() 方法禁用了 change detection 之后,
   * 如果 input property 发生了变更, ngOnChanges() 依然会被触发,
   * 这时候我们可以使用 ChangeDetectorRef.reattach() 方法重新启用 change detection, 并在下一个时间轮次中再次禁用
   */
  public ngOnChanges(changes: SimpleChanges): void {
    this.changeDetectorRef.reattach();
    setTimeout(() => {
      this.changeDetectorRef.detach();
    });
  }
}
