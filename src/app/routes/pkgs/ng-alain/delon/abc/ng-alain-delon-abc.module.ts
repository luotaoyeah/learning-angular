import { NgModule } from '@angular/core';
import { NgAlainDelonAbcRoutingModule } from './ng-alain-delon-abc-routing.module';
import { SharedModule } from '@app/shared';
import { DelonAbcComponent } from './delon-abc.component';
import { FullContentComponent } from './full-content/full-content.component';
import { St01Component } from './st/01-basic/st-01.component';
import { StComponent } from './st/st.component';
import { St02Component } from './st/02-data/st-02.component';
import { St03Component } from './st/03-type/st-03.component';
import { St04Component } from './st/04-checkbox/st-04.component';
import { St05Component } from './st/05-click/st-05.component';
import { St06Component } from './st/06-reset/st-06.component';
import { St08Component } from './st/08-sort/st-08.component';
import { St07Component } from './st/07-radio/st-07.component';
import { St09Component } from './st/09-custom-column/st-09.component';
import { St10Component } from './st/10-expand/st-10.component';
import { St11Component } from './st/11-buttons/st-11.component';
import { St1101ModalComponent } from './st/11-buttons/01/st-11-01.modal.component';
import { St1101DrawerComponent } from './st/11-buttons/01/st-11-01.drawer.component';
import { St12Component } from './st/12-fixed/st-12.component';

@NgModule({
  declarations: [
    DelonAbcComponent,
    FullContentComponent,
    StComponent,
    St01Component,
    St02Component,
    St03Component,
    St04Component,
    St05Component,
    St06Component,
    St07Component,
    St08Component,
    St09Component,
    St10Component,
    St11Component,
    St1101ModalComponent,
    St1101DrawerComponent,
    St12Component,
  ],
  imports: [NgAlainDelonAbcRoutingModule, SharedModule],
  entryComponents: [St1101ModalComponent, St1101DrawerComponent],
})
export class NgAlainDelonAbcModule {}
