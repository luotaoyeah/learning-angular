import { Component, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: `app-demo-dialog-modal`,
  templateUrl: './st-11-01.modal.component.html',
})
export class St1101ModalComponent {
  @Input()
  // tslint:disable-next-line:no-any
  public record: any;

  constructor(private modal: NzModalRef) {}

  public ok() {
    this.modal.close(`new time: ${+new Date()}`);
    this.cancel();
  }

  public cancel() {
    this.modal.destroy();
  }
}
