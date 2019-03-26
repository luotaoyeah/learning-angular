import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      /*
       * TODO
       * named router-outlet 没有验证成功
       */
      {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
      }
    ])
  ],
  exports: [RouterModule]
})
export class DocFundamentalRoutingSampleRoutingModule {}
