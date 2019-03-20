import { NgModule } from '@angular/core';
import { IntroIntoComponentAComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-a.component';
import { IntroIntoComponentBComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-b.component';

/**
 * DOC: FUNDAMENTAL
 */
@NgModule({
  declarations: [IntroIntoComponentAComponent, IntroIntoComponentBComponent],
  imports: [],
  exports: [IntroIntoComponentAComponent, IntroIntoComponentBComponent]
})
export class DocFundamentalModule {}
