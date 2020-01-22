import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app--doc-03-02-04-02-01',
  templateUrl: './doc-03-02-04-02-01.component.html',
})
export class Doc0302040201Component implements OnInit, OnChanges {
  @Input()
  public foo: number = 0;

  @Input()
  public bar: string = '';

  /*
   * ngOnChanges() 在 input property 发生变更时执行，包括首次对 input property 进行初始化的时候
   *
   * 因此 ngOnChanges() 有 2 个执行时机：
   *
   *     1. 在 component 第一次加载时，对 input property 进行初始化时，
   *        此次执行是在 ngOnInit() 之前
   *
   *     2. 后续当任何某个 input property 发生变更时
   */
  public ngOnChanges(simpleChanges: SimpleChanges): void {
    /*
     * 参数 simpleChanges 中只包含发生变更的 input property，
     * 没有发生变更的 input property 不会包含在参数 simpleChanges 中，
     *
     * simpleChanges 对象的每一个属性，表示一个 input property 的变更信息，
     * 变更信息包含 3 个信息：
     *
     *     1. previousValue：旧值
     *     2. currentValue：新值
     *     3. firstChange：是否是第一次发生变更（初始化）
     */
    console.log(`[${Doc0302040201Component.name}]\n`, simpleChanges);
  }

  public ngOnInit(): void {
    console.log(Doc0302040201Component, 'ngOnInit()');
  }
}
