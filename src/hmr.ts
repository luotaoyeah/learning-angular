import { ApplicationRef, NgModuleRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SafeAny } from './typings';

export const hmrBootstrap = (
  module: SafeAny,

  bootstrap: () => Promise<NgModuleRef<SafeAny>>,
) => {
  let ngModule: NgModuleRef<SafeAny>;
  module.hot.accept();
  bootstrap().then((mod) => (ngModule = mod));
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const modalService = ngModule.injector.get(NzModalService, null) as NzModalService;
    if (modalService) {
      modalService.closeAll();
    }
    const elements = appRef.components.map((c) => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};
