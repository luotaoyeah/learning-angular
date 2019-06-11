import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

/*
 * https://angular.io/guide/forms-overview#data-flow-in-template-driven-forms
 */
@Component({
  selector: 'app-doc-03-03-01-05-02',
  templateUrl: './doc-03-03-01-05-02.component.html',
})
export class Doc0303010502Component implements OnInit {
  @ViewChild('ngModel')
  public ngModel!: NgModel;

  public color: string = 'RED';

  public ngOnInit(): void {
    this.ngModel.control.setValue = new Proxy(this.ngModel.control.setValue, {
      apply(
        target: (
          value: string,
          options?: {
            onlySelf?: boolean;
            emitEvent?: boolean;
            emitModelToViewChange?: boolean;
            emitViewToModelChange?: boolean;
          },
        ) => void,
        // tslint:disable-next-line:no-any
        thisArg: any,
        // tslint:disable-next-line:no-any
        argArray?: any,
      ): void {
        /*
         * ① 调用 FormControl.setValue() 方法, 更新 FormControl 对象的数据
         */
        console.log(
          `[${Doc0303010502Component.name}]\n`,
          '[FormControl.setValue()]',
          argArray[0],
        );

        return target.apply(thisArg, argArray);
      },
    });

    this.ngModel.control.valueChanges.subscribe((value: string) => {
      /*
       * ② FormControl.valueChanges 推送数据
       */
      console.log(
        `[${Doc0303010502Component.name}]\n`,
        '[FormControl.valueChanges]',
        value,
      );
    });

    this.ngModel.viewToModelUpdate = new Proxy(this.ngModel.viewToModelUpdate, {
      apply(
        target: (newValue: string) => void,
        // tslint:disable-next-line:no-any no-any
        thisArg: any,
        // tslint:disable-next-line:no-any no-any
        argArray?: any,
      ): void {
        /*
         * ③ 调用 NgModel.viewToModelUpdate() 方法, 触发 ngModelChange 事件
         */
        console.log(
          `[${Doc0303010502Component.name}]\n`,
          '[NgModel.viewToModelUpdate()]',
          argArray[0],
        );

        return target.apply(thisArg, argArray);
      },
    });
  }

  public handleInput(event: Event) {
    /*
     * ④ 触发 input 事件
     */
    console.log(
      `[${Doc0303010502Component.name}]\n`,
      '[input]',
      (event.target as HTMLInputElement).value,
    );
  }
}
