import { Component, ContentChild, OnInit } from '@angular/core';
import { X020501Component } from '@app/routes/blog/a-comprehensive-guide-to-angular-onpush/02/05/x-02-05-01.component';
import { X020502Component } from '@app/routes/blog/a-comprehensive-guide-to-angular-onpush/02/05/x-02-05-02.component';
import { interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app--x-02-05',
  templateUrl: './x-02-05.component.html',
})
export class X0205Component implements OnInit {
  @ContentChild(X020501Component, { static: false })
  private x020501Component!: X020501Component;

  @ContentChild(X020502Component, { static: false })
  private x020502Component!: X020502Component;

  public ngOnInit(): void {
    interval(1000)
      .pipe(
        take(50),
        tap((value) => {
          // 直接通过代码修改 ContentChild 的 input reference, 并不会触发 ContentChild 的 change detection,
          // 因为没有在 template 中 binding 这个 input,
          this.x020501Component.content = value;

          // 解决方法是将 input 声明为一个 setter, 然后在 setter 中调用 `ChangeDetectorRef.markForCheck()` 方法,
          // 从而触发 change detection
          this.x020502Component.content = value;
        }),
      )
      .subscribe();
  }
}
