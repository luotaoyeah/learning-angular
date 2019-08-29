import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'header-storage',
  templateUrl: './header-storage.component.html',
  host: {
    '[class.d-block]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderStorageComponent {
  constructor(
    private nzModalService: NzModalService,
    private nzMessageService: NzMessageService,
    private translateService: TranslateService,
  ) {}

  @HostListener('click')
  public _click() {
    this.nzModalService.confirm({
      nzTitle: this.translateService.instant(
        'src/app/layout/default/header/components/storage/storage.clear-all-local-storage',
      ),
      nzOnOk: () => {
        localStorage.clear();
        this.nzMessageService.success(
          this.translateService.instant('src/app/layout/default/header/components/storage/storage.clear-succeed'),
        );
      },
    });
  }
}