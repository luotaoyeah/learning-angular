import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'doc/fundamental/routing/sample-application/compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
      }
    ])
  ],
  exports: [RouterModule]
})
export class DocFundamentalRoutingSampleRoutingModule {}
