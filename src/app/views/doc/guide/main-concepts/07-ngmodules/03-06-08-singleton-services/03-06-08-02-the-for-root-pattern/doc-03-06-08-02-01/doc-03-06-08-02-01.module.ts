import { ModuleWithProviders, NgModule } from '@angular/core';
import { Doc0306080201Service } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-01/service/doc-03-06-08-02-01.service';
import { Doc0306080201Component } from '@app/views/doc/guide/main-concepts/07-ngmodules/03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-01/doc-03-06-08-02-01.component';

@NgModule({
  declarations: [Doc0306080201Component],
  exports: [Doc0306080201Component],
})
export class Doc0306080201Module {
  public static forRoot(): ModuleWithProviders<Doc0306080201Module> {
    return {
      ngModule: Doc0306080201Module,
      providers: [Doc0306080201Service],
    };
  }

  public static forChild(): ModuleWithProviders<Doc0306080201Module> {
    return {
      ngModule: Doc0306080201Module,
    };
  }
}
