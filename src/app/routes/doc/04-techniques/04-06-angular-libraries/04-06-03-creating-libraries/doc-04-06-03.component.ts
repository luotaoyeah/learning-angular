import { Component, OnInit } from '@angular/core';
import { LearningAngularLibService } from '@luotao/learning-angular-lib';

/*
 * https://angular.io/guide/creating-libraries
 */
@Component({
  selector: 'app-doc-04-06-03',
  templateUrl: './doc-04-06-03.component.html',
})
export class Doc040603Component implements OnInit {
  constructor(private learningAngularLibService: LearningAngularLibService) {}

  public ngOnInit() {}

  public handleClick() {
    this.learningAngularLibService.doSomething();
  }
}
