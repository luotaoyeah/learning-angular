import { Component, DoCheck, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-04-06-01',
  template: '<div><button nz-button>{{barName}}</button></div>',
})
export class Doc0302040601Component implements OnChanges, DoCheck {
  @Input()
  public bar: { name: string } = { name: '' };

  public barName = this.bar.name;

  /*
   * angular 默认的 change detector 比较的是 input property 对象的引用，
   * 因此如果是 input property 对象的内部属性发生变更，angular 无法检测到 ，
   * 也就因此不会触发 ngOnChanges() 的执行
   */
  public ngOnChanges(simpleChanges: SimpleChanges): void {
    const barSimpleChange: SimpleChange = simpleChanges.bar;
    if (barSimpleChange && !barSimpleChange.firstChange) {
      console.log(`[${Doc0302040601Component.name}]\n`, 'ngOnChanges()');
    }
  }

  /*
   * 此时我们需要使用 ngDoCheck() 来实现自定义的 change detection 算法
   *
   * ngDoCheck() 会在每次 change detection cycle 之后执行，
   * 因此它的执行会非常频繁，因此放在它里面的逻辑不能太复杂
   */
  public ngDoCheck(): void {
    /*
     * 如果我们在 ngDoCheck() 中，对某个 input property 实现了自定义的检测算法，
     * 那么在 ngOnChanges() 中，我们就不应该再对这个 input property 进行处理了
     */
    if (this.barName !== this.bar.name) {
      this.barName = this.bar.name;
      console.log(`[${Doc0302040601Component.name}]\n`, 'ngDoCheck()');
    }
  }
}
