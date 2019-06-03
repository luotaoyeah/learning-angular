import { NgModule } from '@angular/core';
import { LearningAngularLibComponent } from './components/learning-angular-lib.component';
import { NgxJquerySliderComponent } from './components/ngx-jquery-slider/ngx-jquery-slider.component';

@NgModule({
  declarations: [LearningAngularLibComponent, NgxJquerySliderComponent],
  imports: [],
  exports: [LearningAngularLibComponent, NgxJquerySliderComponent],
})
export class LearningAngularLibModule {}
