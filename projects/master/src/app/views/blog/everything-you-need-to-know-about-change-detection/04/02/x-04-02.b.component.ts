import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app--x-04-02-b',
  template: '<button nz-button>{{foo}}</button>',
})
export class X0402BComponent implements OnChanges {
  @Input()
  public foo: string = 'FOO';

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    changeDetectorRef.detach();
  }

  /*
   * ChangeDetectorRef.reattach() 方法有一个限制, 它只会重新启用当前组件的 CD,
   * 因此, 如果上级组件的 CD 也被禁用了, 则使用 ChangeDetectorRef.reattach() 方法没有效果
   */
  public ngOnChanges(changes: SimpleChanges): void {
    this.changeDetectorRef.reattach();
    setTimeout(() => {
      this.changeDetectorRef.detach();
    });
  }
}
