import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { SafeAny } from '../../../../../../../../typings';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  private hasView = false;

  /*
   * structural directive 会使用 <ng-template> 里面的内容，来创建一个 EmbeddedView，
   * 即调用 ViewContainerRef.createEmbeddedView(templateRef: TemplateRef) 方法来创建，
   * 因此需要将 ViewContainerRef 和 TemplateRef 注入进来
   */
  constructor(private templateRef: TemplateRef<SafeAny>, private viewContainerRef: ViewContainerRef) {}

  @Input()
  set appUnless(value: boolean) {
    if (!value && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (value && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
}
