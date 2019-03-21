import { NgModule } from '@angular/core';
import { IntroIntoComponentAComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-a.component';
import { IntroIntoComponentBComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-b.component';
import { IntroIntoComponentCComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-c.component';
import { IntroIntoComponentDComponent } from './03-01-architecture/03-01-03-intro-to-component/intro-into-component-d.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * DOC: FUNDAMENTAL
 */
@NgModule({
  declarations: [IntroIntoComponentAComponent, IntroIntoComponentBComponent, IntroIntoComponentCComponent, IntroIntoComponentDComponent],
  imports: [CommonModule, FormsModule],
  exports: [IntroIntoComponentAComponent, IntroIntoComponentBComponent, IntroIntoComponentCComponent, IntroIntoComponentDComponent]
})
export class DocFundamentalModule {}
