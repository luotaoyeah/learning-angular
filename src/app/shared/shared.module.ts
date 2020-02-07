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
import { SafeAny } from '@src/typings';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';

const NG_ZORRO_MODULES: Array<SafeAny> = [
  NzButtonModule,
  NzIconModule,
  NzTableModule,
  NzCollapseModule,
  NzDividerModule,
  NzRadioModule,
  NzProgressModule,
  NzTagModule,
  NzGridModule,
  NzListModule,
  NzAlertModule,
  NzSpinModule,
  NzCardModule,
  NzInputModule,
  NzInputModule,
  NzSelectModule,
  NzMessageModule,
  NzModalModule,
];
const MATERIAL_MODULES: Array<SafeAny> = [MatMenuModule, MatButtonModule, MatIconModule, MatExpansionModule];

const MODULES: Array<SafeAny> = [...NG_ZORRO_MODULES, ...MATERIAL_MODULES];

const COMPONENTS: Array<SafeAny> = [PageNotFoundComponent];

const PIPES: Array<SafeAny> = [NtJsonPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...MODULES],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    ...MODULES,
    ...COMPONENTS,
    ...PIPES,
  ],
})
export class SharedModule {}
