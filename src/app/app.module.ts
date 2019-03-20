import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './doc/02-tutorial/heroes/heroes.component';
import { HeroDetailComponent } from './doc/02-tutorial/hero-detail/hero-detail.component';
import { MessagesComponent } from './doc/02-tutorial/messages/messages.component';
import { DashboardComponent } from './doc/02-tutorial/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './doc/02-tutorial/in-memory-data.service';
import { HeroSearchComponent } from './doc/02-tutorial/hero-search/hero-search.component';
import { DocModule } from './doc/doc.module';

/*
 * 通过 @NgModule 装饰器来声明一个 NgModule
 */
@NgModule({
  /*
   * declarations 用来声明当前 NgModule 中的 component，directive，pipe 有哪些，
   * 这些 component，directive，pipe 称之为 declarables，
   * 这些 declarables 不能在多个不同的 NgModule 中声明，否则编译报错
   */
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent, HeroSearchComponent],
  /*
   * imports 用来引入其他的 NgModule，
   * 引入一个 NgModule 就相当于将它的 exports 中声明的所有 declarables 都引入进当前的 NgModule 中，
   * 引入之后，在当前的 NgModule 中，就可以使用它的公共的 component，directive，pipe
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    DocModule
  ],
  /*
   * 默认情况下，在 declarations 中声明的 declarables 都只能在当前 NgModule 中使用，
   * 如果希望某些 declarables 可以被其他的 NgModule 使用，
   * 需要将这些 declarables 声明在 exports 中，使之成为当前 NgModule 的公共 API，
   *
   * 同时，也可以在 exports 中声明其他的 NgModule，
   * 此时，这些 NgModule 中的公共 API 就也成为了当前 NgModule 的公共 API
   */
  exports: [],
  providers: [],
  /*
   * 一个应用的 root NgModule（AppModule）需要通过 bootstrap 来声明 root component，
   * 其他的 NgModule 不需要声明该配置
   */
  bootstrap: [AppComponent]
})
export class AppModule {}
