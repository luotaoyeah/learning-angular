import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doc08RoutingModule } from '@app/views/doc/guide/08-CLI-COMMANDS/doc-08-routing.module';
import { Doc0801Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-01-overview/doc-08-01.component';
import { Doc0802Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-02-add/doc-08-02.component';
import { SharedModule } from '@app/shared';
import { Doc0803Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-03-build/doc-08-03.component';
import { Doc0804Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-04-config/doc-08-04.component';
import { Doc0805Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-05-doc/doc-08-05.component';
import { Doc0806Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-06-e2e/doc-08-06.component';
import { Doc0807Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-07-generate/doc-08-07.component';
import { Doc0808Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-08-help/doc-08-08.component';
import { Doc0809Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-09-lint/doc-08-09.component';
import { Doc0810Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-10-new/doc-08-10.component';
import { Doc0811Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-11-run/doc-08-11.component';
import { Doc0812Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-12-serve/doc-08-12.component';
import { Doc0813Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-13-test/doc-08-13.component';
import { Doc0814Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-14-update/doc-08-14.component';
import { Doc0815Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-15-version/doc-08-15.component';
import { Doc0816Component } from '@app/views/doc/guide/08-CLI-COMMANDS/08-16-xi18n/doc-08-16.component';

@NgModule({
  declarations: [
    Doc0801Component,
    Doc0802Component,
    Doc0803Component,
    Doc0804Component,
    Doc0805Component,
    Doc0806Component,
    Doc0807Component,
    Doc0808Component,
    Doc0809Component,
    Doc0810Component,
    Doc0811Component,
    Doc0812Component,
    Doc0813Component,
    Doc0814Component,
    Doc0815Component,
    Doc0816Component,
  ],
  imports: [CommonModule, Doc08RoutingModule, SharedModule],
})
export class Doc08Module {}
