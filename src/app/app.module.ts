import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './doc/02-tutorial/service/in-memory-data.service';
import { DocModule } from './doc/doc.module';
import { TreeModule } from 'primeng/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './comn/page-not-found/page-not-found.component';
import { Router } from '@angular/router';

/*
 * 通过 @NgModule 装饰器来声明一个 NgModule
 */
@NgModule({
  /*
   * declarations 用来声明当前 NgModule 中的 component，directive，pipe 有哪些，
   * 这些 component，directive，pipe 称之为 declarables，
   * 这些 declarables 不能在多个不同的 NgModule 中声明，否则编译报错
   */
  declarations: [AppComponent, PageNotFoundComponent],
  /*
   * imports 用来引入其他的 NgModule，
   * 引入一个 NgModule 就相当于将它的 exports 中声明的所有 declarables 都引入进当前的 NgModule 中，
   * 引入之后，在当前的 NgModule 中，就可以使用它的公共的 component，directive，pipe
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    ...[TreeModule],
    DocModule,
    AppRoutingModule
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
export class AppModule {
  // @ts-ignore: TS6138
  constructor(private router: Router) {
    /*
     * 通过 Router.config 属性，查看整个应用的完整的路由配置
     */
    /*
        // @ts-ignore: TS6133
        console.log(JSON.stringify(this.router.config, (key: string, value: any) => (typeof value === 'function' ? value.name : value), 2));
    */
  }
}
