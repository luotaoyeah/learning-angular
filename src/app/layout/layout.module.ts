import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { LayoutDefaultComponent } from './default/layout-default.component';
import { LayoutHeaderComponent } from './default/header/layout-header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { HeaderFullScreenComponent } from './default/header/fullscreen/header-fullscreen.component';
import { HeaderStorageComponent } from './default/header/storage/header-storage.component';
import { LayoutPassportComponent } from './passport/passport.component';
import { HeaderUserComponent } from './default/header/user/header-user.component';
import { HeaderI18nComponent } from './default/header/i18n/header-i18n.component';
import { HeaderSettingComponent } from './default/header/setting/header-setting.component';

const COMPONENTS = [LayoutDefaultComponent, LayoutHeaderComponent, SidebarComponent];

const HEADERCOMPONENTS = [
  HeaderFullScreenComponent,
  HeaderI18nComponent,
  HeaderSettingComponent,
  HeaderStorageComponent,
  HeaderUserComponent,
];

const PASSPORT = [LayoutPassportComponent];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS, ...HEADERCOMPONENTS, ...PASSPORT],
  exports: [...COMPONENTS, ...PASSPORT],
})
export class LayoutModule {}
