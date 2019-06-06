import { NgModule } from '@angular/core';
import { NamespaceModule } from './namespace/namespace.module';
import { GlobalModule } from './global/global.module';

@NgModule({
  imports: [NamespaceModule, GlobalModule],
})
export class JasmineModule {}
