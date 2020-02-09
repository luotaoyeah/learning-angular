import { ChangeDetectorRef, Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app--x-04-04-a',
  template: '<button nz-button>{{foo}}</button><button nz-button>{{bar.foo}}</button>',
})
export class X0404AComponent implements OnChanges, DoCheck {
  @Input()
  public foo: string = '';

  @Input()
  public bar: { foo: string } = { foo: '' };

  private _foo: string = this.bar.foo;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    changeDetectorRef.detach();
  }

  /*
   * ChangeDetectorRef.detectChanges() 方法, 用来对当前组件以及它的下级组件, 手动执行一次 CD
   */
  public ngOnChanges(changes: SimpleChanges): void {
    this.changeDetectorRef.detectChanges();
  }

  public ngDoCheck(): void {
    if (this.bar.foo !== this._foo) {
      this._foo = this.bar.foo;
      this.changeDetectorRef.detectChanges();
    }
  }
}
