import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';

// tslint:disable-next-line:no-any
const THIRDMODULES: Array<any> = [NgZorroAntdModule, CountdownModule];

// region your componets & directives

// tslint:disable-next-line:no-any
const COMPONENTS: Array<any> = [];
// tslint:disable-next-line:no-any
const DIRECTIVES: Array<Type<any> | any[]> = [];

// endregion

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    /*
     * 要使用 reactive form, 则必须引入 ReactiveFormsModule
     */
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    ...THIRDMODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    TranslateModule,
    ...THIRDMODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {}
