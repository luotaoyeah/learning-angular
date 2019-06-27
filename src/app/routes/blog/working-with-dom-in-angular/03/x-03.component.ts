import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

/*
 * https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866#5097
 */
@Component({
  selector: 'app-x-03',
  templateUrl: './x-03.component.html',
})
export class X03Component implements AfterViewInit {
  /*
   * 在 template 中定义了 <ng-container> 之后,
   * 我们需要在 component class 中使用 @ViewChild() 获取到这个 view container 实例,
   * 在这里, 我们使用了 read: ViewContainerRef 来查询它
   */
  @ViewChild('vc', {
    static: false,
    read: ViewContainerRef,
  })
  public vc!: ViewContainerRef;

  public ngAfterViewInit(): void {
    console.log(`[${X03Component.name}]\n`, this.vc);
  }
}
