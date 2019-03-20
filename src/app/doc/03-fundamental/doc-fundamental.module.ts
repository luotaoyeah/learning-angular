import { NgModule } from '@angular/core';
import { IntroIntoComponentAComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-a.component';
import { IntroIntoComponentBComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-b.component';
import { IntroIntoComponentCComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-c.component';

/**
 * DOC: FUNDAMENTAL
 */
@NgModule({
  declarations: [IntroIntoComponentAComponent, IntroIntoComponentBComponent, IntroIntoComponentCComponent],
  imports: [],
  exports: [IntroIntoComponentAComponent, IntroIntoComponentBComponent, IntroIntoComponentCComponent]
})
export class DocFundamentalModule {}
