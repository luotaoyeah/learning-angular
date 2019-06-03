/* tslint:disable:no-any */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider.js';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-ngx-jquery-slider',
  templateUrl: './ngx-jquery-slider.component.html',
  styleUrls: ['./ngx-jquery-slider.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NgxJquerySliderComponent,
      multi: true,
    },
  ],
})
export class NgxJquerySliderComponent implements OnInit, ControlValueAccessor {
  @ViewChild('location')
  public location!: ElementRef<HTMLDivElement>;

  public widget: any;
  private value: number = 0;
  private onChange: (value: number) => void = () => {};

  /**
   * 当 FormControl 的数据流向 DOM 时, 会调用该方法
   */
  public writeValue(value: number): void {
    this.value = value;
    if (this.widget && this.value !== undefined) {
      this.widget.slider('value', this.value);
    }
  }

  public registerOnChange(fn: (value: number) => void): void {
    /*
     * 将传入的回调函数保存下来, 后面要用
     */
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    console.log(`[${NgxJquerySliderComponent.name}]\n[registerOnTouched]`);
  }

  public ngOnInit() {
    // @ts-ignore
    this.widget = $(this.location.nativeElement).slider();
    this.widget.on('slidestop', (event: MouseEvent, ui: any) => {
      /*
       * 当 DOM 的数据流向 FormControl 时, 我们需要调用保存的回调方法
       */
      this.onChange(ui.value);
    });
  }
}
