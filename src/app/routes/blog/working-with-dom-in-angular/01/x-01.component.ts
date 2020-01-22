import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

/*
 * https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866#9355
 */
@Component({
  selector: 'app--x-01',
  templateUrl: './x-01.component.html',
})
export class X01Component {
  @ViewChildren('c', {
    read: ElementRef,
  })
  public childComponents!: QueryList<ElementRef>;

  constructor(private renderer2: Renderer2, private el: ElementRef) {}

  /*
   * 使用 Renderer2.removeChild() 方法, 可以从宿主元素的 DOM 中删除下级组件的元素,
   * 但是这种方式只是删除了下级组件的 DOM 元素, 而下级组件的 component view 实例依然存在
   *
   * 这是因为 angular 在编译一个组件的 template 时, 会对应地生成一棵 component view 树,
   * 里面的每一个 view 节点都会关联到对应的 DOM 节点,
   * 当我们使用 Renderer2.removeChild() 时, 只是删除了对应的 DOM 节点, 其对应的 view 节点依然存在
   *
   * 所以, 通常我们不应该使用 Renderer2.removeChild() 方法来删除某个下级组件
   */
  public removeChild() {
    this.renderer2.removeChild(
      this.el.nativeElement,
      this.childComponents.first.nativeElement,
    );
  }
}
