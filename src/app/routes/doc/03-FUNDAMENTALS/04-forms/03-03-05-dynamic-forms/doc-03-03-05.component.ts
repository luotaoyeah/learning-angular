import { Component } from '@angular/core';
import { QuestionService } from './services/question.service';
import { QuestionBase } from './vms/question-base';

/*
 * https://angular.io/guide/dynamic-form
 */
@Component({
  selector: 'app--doc-03-03-05',
  templateUrl: './doc-03-03-05.component.html',
  providers: [QuestionService],
})
export class Doc030305Component {

  public questions: Array<QuestionBase<any>>;

  constructor(questionService: QuestionService) {
    this.questions = questionService.getQuestions();
  }
}
