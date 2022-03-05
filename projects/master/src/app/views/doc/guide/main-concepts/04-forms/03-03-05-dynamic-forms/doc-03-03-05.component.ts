import { Component } from '@angular/core';
import { SafeAny } from '@src/typings';
import { QuestionService } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/services/question.service';
import { QuestionBase } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/vms/question-base';

/*
 * https://angular.io/guide/dynamic-form
 */
@Component({
  selector: 'app--doc-03-03-05',
  templateUrl: './doc-03-03-05.component.html',
  providers: [QuestionService],
})
export class Doc030305Component {
  public questions: Array<QuestionBase<SafeAny>>;

  constructor(questionService: QuestionService) {
    this.questions = questionService.getQuestions();
  }
}
