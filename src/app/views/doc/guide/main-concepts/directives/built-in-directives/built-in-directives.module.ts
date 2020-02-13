import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doc0302020901Component } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/03-02-02-09-built-in-attribute-directives/03-02-02-09-01-ngclass/doc-03-02-02-09-01.component';
import { Doc0302020902Component } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/03-02-02-09-built-in-attribute-directives/03-02-02-09-02-ngstyle/doc-03-02-02-09-02.component';
import { Doc0302020903Component } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/03-02-02-09-built-in-attribute-directives/03-02-02-09-03-ngmodel/doc-03-02-02-09-03.component';
import { Doc03020209Component } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/03-02-02-09-built-in-attribute-directives/doc-03-02-02-09.component';
import { Doc0302021003Component } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/03-02-02-10-built-in-structural-directives/03-02-02-10-03-template-input-variable/doc-03-02-02-10-03.component';
import { Doc0302021004Component } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/03-02-02-10-built-in-structural-directives/03-02-02-10-04-ngswitch/doc-03-02-02-10-04.component';
import { Doc03020210Component } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/03-02-02-10-built-in-structural-directives/doc-03-02-02-10.component';
import { BuiltInDirectivesComponent } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/built-in-directives.component';
import { BuiltInDirectivesRoutingModule } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/built-in-directives.routing.module';
import { Ngfor01Component } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/ngfor/ngfor.01.component';
import { NgforComponent } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/ngfor/ngfor.component';
import { NgifComponent } from '@app/views/doc/guide/main-concepts/directives/built-in-directives/ngif/ngif.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [
    BuiltInDirectivesComponent,

    Doc03020209Component,
    Doc0302020901Component,
    Doc0302020902Component,
    Doc0302020903Component,

    Doc03020210Component,
    NgifComponent,
    NgforComponent,
    Ngfor01Component,
    Doc0302021003Component,
    Doc0302021004Component,
  ],
  imports: [BuiltInDirectivesRoutingModule, NzButtonModule, NzCollapseModule, CommonModule, FormsModule, NzRadioModule],
})
export class BuiltInDirectivesModule {}
