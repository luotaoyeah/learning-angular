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
import { NtJsonPipe } from './pipes/nt-json.pipe';

// tslint:disable-next-line:no-any
const THIRDMODULES: Array<any> = [NgZorroAntdModule, CountdownModule];

// region your componets & directives

// tslint:disable-next-line:no-any
const COMPONENTS: Array<any> = [];
// tslint:disable-next-line:no-any
const DIRECTIVES: Array<Type<any> | any[]> = [];
// tslint:disable-next-line:no-any
const PIPES: Array<Type<any> | any[]> = [NtJsonPipe];

// endregion

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
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
    ...PIPES,
  ],
})
export class SharedModule {}
