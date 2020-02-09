import { Component, ElementRef, ViewChild } from '@angular/core';

/*
 * https://angular.io/guide/template-syntax#html-attribute-vs-dom-property
 */
@Component({
  selector: 'app--doc-03-03-02-06',
  templateUrl: './doc-03-03-02-06.component.html',
})
export class Doc03030206Component {
  @ViewChild('input01', { static: true })
  public inputElementRef!: ElementRef<HTMLInputElement>;

  public changeProperty() {
    /*
     * 如下, 修改了 DOM 对象的 value 属性(property),
     * 但是对应的 HTML 标签的 value 属性(attribute)依然不变
     */
    this.inputElementRef.nativeElement.value = 'BAZ';
  }
}
