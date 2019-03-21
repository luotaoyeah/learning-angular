import { Directive, ElementRef, OnInit } from '@angular/core';

/*
 * 通过 @Directive 装饰器声明一个 directive，
 * 实际上，component 也是一个特殊的 directive，
 *
 * directive 大体上可以分为两类：
 *
 *     structural directive：
 *         *ngIf
 *         *ngFor
 *         ngSwitch
 *
 *     attribute directive：
 *         ngModel
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tRadius]'
})
export class RadiusDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.color = 'red';
  }
}
