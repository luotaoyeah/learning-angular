import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SafeAny } from '@src/typings';
import { QuestionBase } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/vms/question-base';
import { QuestionControlService } from '@app/views/doc/guide/main-concepts/04-forms/03-03-05-dynamic-forms/services/question-control.service';

@Component({
  selector: 'app--dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input()
  public questions: Array<QuestionBase<SafeAny>> = [];

  public formGroup!: FormGroup;
  public payLoad: string = '';

  constructor(private questionControlService: QuestionControlService) {}

  public ngOnInit() {
    this.formGroup = this.questionControlService.toFormGroup(this.questions);
  }

  public onSubmit() {
    this.payLoad = JSON.stringify(this.formGroup.value);
  }
}
