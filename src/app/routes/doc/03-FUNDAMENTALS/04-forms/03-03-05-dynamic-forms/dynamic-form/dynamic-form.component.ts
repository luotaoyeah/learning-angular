import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../vms/question-base';
import { QuestionControlService } from '../services/question-control.service';

@Component({
  selector: 'app--dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input()

  public questions: Array<QuestionBase<any>> = [];

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
