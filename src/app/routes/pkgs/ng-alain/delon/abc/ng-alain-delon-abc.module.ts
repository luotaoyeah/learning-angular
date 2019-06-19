import { NgModule } from '@angular/core';
import { NgAlainDelonAbcRoutingModule } from './ng-alain-delon-abc-routing.module';
import { SharedModule } from '@app/shared';
import { DelonAbcComponent } from './delon-abc.component';
import { FullContentComponent } from './full-content/full-content.component';
import { St01Component } from './st/01/st-01.component';
import { StComponent } from './st/st.component';
import { St02Component } from './st/02/st-02.component';
import { St03Component } from './st/03/st-03.component';

@NgModule({
  declarations: [
    DelonAbcComponent,
    FullContentComponent,
    StComponent,
    St01Component,
    St02Component,
    St03Component,
  ],
  imports: [NgAlainDelonAbcRoutingModule, SharedModule],
})
export class NgAlainDelonAbcModule {}
