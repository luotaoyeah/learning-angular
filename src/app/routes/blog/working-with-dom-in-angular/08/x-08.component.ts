import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';

/*
 * https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866#7b07
 */
@Component({
  selector: 'app--x-08',
  templateUrl: './x-08.component.html',
})
export class X08Component {
  @ViewChild('vc', {
    static: false,
    read: ViewContainerRef,
  })
  public vc!: ViewContainerRef;

  @ViewChild('tpl', {
    static: false,
    read: TemplateRef,
  })
  public tpl!: TemplateRef<{ $implicit: string }>;

  public viewRef: ViewRef | null = null;

  public createView() {
    this.vc.clear();
    this.viewRef = this.vc.createEmbeddedView(this.tpl, {
      $implicit: 'FOO',
    });
  }

  public attachView() {
    if (this.viewRef) {
      this.vc.insert(this.viewRef);
    }
  }

  public detachView() {
    this.vc.detach();
  }
}
