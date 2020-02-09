import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { Doc030310RoutingModule } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/doc-03-03-10-routing.module';
import { Doc030310Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/doc-03-03-10.component';
import { Doc03031001Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/03-03-10-01-what-are-structural-directives/doc-03-03-10-01.component';
import { Doc03031002Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/03-03-10-02-ngif-case-study/doc-03-03-10-02.component';
import { Doc03031003Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/03-03-10-03-the-asterisk-prefix/doc-03-03-10-03.component';
import { Doc03031004Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/03-03-10-04-inside-ngfor/doc-03-03-10-04.component';
import { Doc03031005Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/03-03-10-05-inside-ngswitch-directives/doc-03-03-10-05.component';
import { Doc03031006Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/03-03-10-06-the-ng-template/doc-03-03-10-06.component';
import { Doc03031007Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/03-03-10-07-group-sibling-elements-with-ng-container/doc-03-03-10-07.component';
import { Doc03031008Component } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/03-03-10-08-write-a-structural-directive/doc-03-03-10-08.component';
import { UnlessDirective } from '@app/views/doc/guide/03-FUNDAMENTALS/03-components-templates/10-structural-directives/03-03-10-08-write-a-structural-directive/directive/unless.directive';

@NgModule({
  declarations: [
    Doc030310Component,
    Doc03031001Component,
    Doc03031002Component,
    Doc03031003Component,
    Doc03031004Component,
    Doc03031005Component,
    Doc03031006Component,
    Doc03031007Component,
    Doc03031008Component,
    [UnlessDirective],
  ],
  imports: [SharedModule, Doc030310RoutingModule],
})
export class Doc030310Module {}
