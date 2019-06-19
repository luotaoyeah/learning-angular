import { Component, Input } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: `app-demo-dialog-drawer`,
  templateUrl: './st-11-01.drawer.component.html',
})
export class St1101DrawerComponent {
  @Input()
  // tslint:disable-next-line:no-any
  public record: any;

  constructor(private ref: NzDrawerRef) {}

  public ok() {
    this.ref.close(`new time: ${+new Date()}`);
    this.cancel();
  }

  public cancel() {
    this.ref.close();
  }
}
