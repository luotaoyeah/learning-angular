import { NgModule } from '@angular/core';
import { NamespaceModule } from '@app/views/package/jasmine/namespace/namespace.module';
import { GlobalModule } from '@app/views/package/jasmine/global/global.module';

@NgModule({
  imports: [NamespaceModule, GlobalModule],
})
export class JasmineModule {}
