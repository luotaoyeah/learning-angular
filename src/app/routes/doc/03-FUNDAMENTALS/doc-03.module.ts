import { NgModule } from '@angular/core';
import { Doc0303Module } from './03-03-components-templates/doc-03-03.module';
import { Doc0304Module } from './03-04-forms/doc-03-04.module';
import { Doc0305Module } from './03-05-observables-rxjs/doc-03-05.module';
import { Doc0306Module } from './03-06-bootstrapping/doc-03-06.module';
import { Doc0307Module } from './03-07-ngmodules/doc-03-07.module';
import { Doc0308Module } from './03-08-dependency-injection/doc-03-08.module';
import { Doc0309Module } from './03-09-httpclient/doc-03-09.module';
import { Doc0311Module } from './03-11-animations/doc-03-11.module';
import { Doc0301Module } from './03-01-tour-of-heroes-app/doc-03-01.module';
import { Doc0302Module } from './03-02-architecture/doc-03-02.module';
import { Doc0310Module } from './03-10-routing-navigation/doc-03-10.module';

@NgModule({
  imports: [
    Doc0301Module,
    Doc0302Module,
    Doc0303Module,
    Doc0304Module,
    Doc0305Module,
    Doc0306Module,
    Doc0307Module,
    Doc0308Module,
    Doc0309Module,
    Doc0310Module,
    Doc0311Module,
  ],
})
export class Doc03Module {}
