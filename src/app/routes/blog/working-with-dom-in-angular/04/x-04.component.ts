import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

/*
 * https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866#1970
 */
@Component({
  selector: 'app--x-04',
  templateUrl: './x-04.component.html',
})
export class X04Component {
  @ViewChild('vc', {
    static: false,
    read: ViewContainerRef,
  })
  public vc!: ViewContainerRef;

  /*
   * 在 template 中使用 <ng-template> 定义好了 embedded view 的模板之后,
   * 我们需要在 component class 中使用 @ViewChild() 获取到这个模板实例,
   * 在这里我们使用了 read: TemplateRef 来查询它
   */
  @ViewChild('tpl', {
    static: false,
    read: TemplateRef,
  })
  public tpl!: TemplateRef<{
    $implicit: string;
  }>;

  public createEmbeddedView() {
    this.vc.clear();

    /*
     * 使用 ViewContainerRef.createEmbeddedView() 方法来创建一个 embedded view,
     * 通过第二个参数可以给它的模板传递一个 context 环境对象
     */
    this.vc.createEmbeddedView(this.tpl, {
      $implicit: 'FOO',
    });
  }
}
