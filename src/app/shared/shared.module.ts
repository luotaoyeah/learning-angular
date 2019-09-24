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
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// tslint:disable-next-line:no-any
const THIRDMODULES: Array<any> = [NgZorroAntdModule, CountdownModule, MatMenuModule, MatButtonModule, MatIconModule];

// tslint:disable-next-line:no-any
const PIPES: Array<Type<any> | Array<any>> = [NtJsonPipe];

@NgModule({
  declarations: [...PIPES],
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
    ...PIPES,
  ],
})
export class SharedModule {}
