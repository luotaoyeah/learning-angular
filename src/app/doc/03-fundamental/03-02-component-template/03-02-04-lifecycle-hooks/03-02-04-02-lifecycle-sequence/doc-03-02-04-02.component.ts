import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-doc-03-02-04-02',
  templateUrl: './doc-03-02-04-02.component.html'
})
export class Doc03020402Component
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() foo = '';

  constructor() {}

  // @ts-ignore: TS6133
  private log(message: any): void {
    /*
        console.log(`[${Doc03020402Component.name}]`, message);
    */
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*
     * ngOnChanges() 在 input properties 的值发生变更时执行，包括第一次初始化 input properties 的值
     */
    console.assert(!!changes);
    this.log('ngOnChange()');
  }

  ngOnInit() {
    /*
     * ngOnInit() 只会执行一次，
     * 在第一次 ngOnChenges() 之后执行
     */
    this.log('ngOnInit()');
  }

  ngDoCheck(): void {
    this.log('ngDoCheck()');
  }

  ngAfterContentInit(): void {
    /*
     * ngAfterContentInit() 只会执行一次，
     * 在第一次 ngDoCheck() 之后执行
     */
    this.log('ngAfterContentInit()');
  }

  ngAfterContentChecked(): void {
    /*
     * ngAfterContentChecked() 在 ngAfterContentInit() 之后执行，
     * 以及以后的每一次 ngDoCheck() 之后执行
     */
    this.log('ngAfterContentChecked()');
  }

  ngAfterViewInit(): void {
    /*
     * ngAgterViewInit() 只会执行一次，
     * 在第一次 ngAfterContentCheced() 之后执行
     */
    this.log('ngAfterViewInit()');
  }

  ngAfterViewChecked(): void {
    /*
     * 在 ngAfterViewInit() 之后执行，
     * 以及以后的每一次 ngAfterContentChecked() 之后执行
     */
    this.log('ngAfterViewChecked()');
  }

  ngOnDestroy(): void {
    /*
     * 之后执行一次，在 angular 销毁组件之前执行
     */
    this.log('ngOnDestroy()');
  }
}
