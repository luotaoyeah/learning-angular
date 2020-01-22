import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@app/shared/components/page-not-found/page-not-found.component';
import { NtJsonPipe } from '@app/shared/pipes/nt-json.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const THIRDMODULES = [NgZorroAntdModule, MatMenuModule, MatButtonModule, MatIconModule, MatExpansionModule];

const COMPONENTS = [PageNotFoundComponent];

const PIPES = [NtJsonPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...THIRDMODULES],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TranslateModule, ...THIRDMODULES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
