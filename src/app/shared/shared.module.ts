import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NtJsonPipe } from './pipes/nt-json.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PageNotFoundComponent } from '@app/shared/components/page-not-found/page-not-found.component';

// tslint:disable-next-line:no-any
const THIRDMODULES: Array<any> = [NgZorroAntdModule, MatMenuModule, MatButtonModule, MatIconModule];

// tslint:disable-next-line:no-any
const COMPONENTS: Array<Type<any> | Array<any>> = [PageNotFoundComponent];

// tslint:disable-next-line:no-any
const PIPES: Array<Type<any> | Array<any>> = [NtJsonPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    /*
     * 要使用 reactive form, 则必须引入 ReactiveFormsModule
     */
    ReactiveFormsModule,
    ...THIRDMODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    ...THIRDMODULES,
    ...COMPONENTS,
    ...PIPES,
  ],
})
export class SharedModule {}
