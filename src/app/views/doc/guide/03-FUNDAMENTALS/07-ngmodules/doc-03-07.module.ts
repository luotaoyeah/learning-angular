import { NgModule } from '@angular/core';
import { Doc0307RoutingModule } from './doc-03-07-routing.module';
import { SharedModule } from '@app/shared';
import { Doc030601Component } from './03-06-01-ngmodules-introduction/doc-03-06-01.component';
import { Doc030602Component } from './03-06-02-ngmodule-vs-jsmodule/doc-03-06-02.component';
import { Doc030603Component } from './03-06-03-frequent-ngmodules/doc-03-06-03.component';
import { Doc030604Component } from './03-06-04-module-types/doc-03-06-04.component';
import { Doc030605Component } from './03-06-05-entry-components/doc-03-06-05.component';
import { Doc030606Component } from './03-06-06-feature-modules/doc-03-06-06.component';
import { Doc030607Component } from './03-06-07-providers/doc-03-06-07.component';
import { Doc030608Component } from './03-06-08-singleton-services/doc-03-06-08.component';
import { Doc030610Component } from './03-06-10-sharing-ngmodules/doc-03-06-10.component';
import { Doc030611Component } from './03-06-11-ngmodule-api/doc-03-06-11.component';
import { Doc030612Component } from './03-06-12-ngmodule-faq/doc-03-06-12.component';
import { Doc03060201Component } from './03-06-02-ngmodule-vs-jsmodule/03-06-02-01-javascript-modules/doc-03-06-02-01.component';
import { Doc03060202Component } from './03-06-02-ngmodule-vs-jsmodule/03-06-02-02-ngmodule/doc-03-06-02-02.component';
import { Doc03060601Module } from './03-06-06-feature-modules/doc-03-06-06-01/doc-03-06-06-01.module';
import { Doc03060701Component } from './03-06-07-providers/03-06-07-01-providing-a-service/doc-03-06-07-01.component';
import { Doc03060702Component } from './03-06-07-providers/03-06-07-02-providedin-and-ngmodules/doc-03-06-07-02.component';
import { Doc0306070202Service } from './03-06-07-providers/03-06-07-02-providedin-and-ngmodules/service/doc-03-06-07-02-02.service';
import { Doc03060801Component } from './03-06-08-singleton-services/03-06-08-01-providing-a-singleton-service/doc-03-06-08-01.component';
import { Doc03060802Component } from './03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02.component';
import { Doc0306080203Module } from './03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-03/doc-03-06-08-02-03.module';
import { Doc0306080202Module } from './03-06-08-singleton-services/03-06-08-02-the-for-root-pattern/doc-03-06-08-02-02/doc-03-06-08-02-02.module';
import { Doc03060803Component } from './03-06-08-singleton-services/03-06-08-03-prevent-reimport-of-the-ngmodule/doc-03-06-08-03.component';
import { Doc0306080301Module } from './03-06-08-singleton-services/03-06-08-03-prevent-reimport-of-the-ngmodule/doc-03-06-08-03-01/doc-03-06-08-03-01.module';
import { Doc030609Module } from './03-06-09-lazy-loading-ngmodules/doc-03-06-09.module';
import { Doc0306120101Module } from './03-06-12-ngmodule-faq/03-06-12-01/doc-03-06-12-01-01/doc-03-06-12-01-01.module';

@NgModule({
  declarations: [
    Doc030601Component,
    Doc030602Component,
    Doc03060201Component,
    Doc03060202Component,
    Doc030603Component,
    Doc030604Component,
    Doc030605Component,
    Doc030606Component,
    Doc030607Component,
    Doc030608Component,
    Doc030610Component,
    Doc030611Component,
    Doc030612Component,
    Doc03060701Component,
    Doc03060702Component,
    Doc03060801Component,
    Doc03060802Component,
    Doc03060803Component,
  ],
  imports: [
    Doc0307RoutingModule,
    SharedModule,
    Doc03060601Module,
    Doc0306080202Module,
    Doc0306080203Module,
    Doc0306080301Module,
    Doc030609Module,
    Doc0306120101Module,
  ],
  /*
   * servide 可以通过 providedIn 主动注册到 root，或者某个 NgModule，
   * 也可以在 NgModlue 的 providers 中被动的注册到该 NgModule 的 injector 中
   */
  providers: [Doc0306070202Service],
})
export class Doc0307Module {}
