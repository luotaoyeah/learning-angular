import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-03-07-04-04',
  templateUrl: './doc-03-07-04-04.component.html',
})
export class Doc03070404Component implements OnInit {
  /*
   * 跟 directive 一样，在 component 中也可以注入它对应的 DOM 元素
   */
  constructor(private elementRef: ElementRef) {}

  public ngOnInit() {
    this.elementRef.nativeElement.style.color = 'red';
  }
}
