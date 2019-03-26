import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { DocFundamentalRoutingSampleComponent } from './doc-fundamental-routing-sample.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DocFundamentalRoutingSampleRoutingModule } from './doc-fundamental-routing-sample-routing.module';

@NgModule({
  declarations: [DocFundamentalRoutingSampleComponent, ComposeMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    DocFundamentalRoutingSampleRoutingModule,
    ...[PanelModule, ButtonModule],
    HeroesModule,
    CrisisCenterModule
  ]
})
export class DocFundamentalRoutingSampleModule {}
