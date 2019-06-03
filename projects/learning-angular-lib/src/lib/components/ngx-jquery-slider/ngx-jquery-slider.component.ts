import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider.js';

@Component({
  selector: 'lib-ngx-jquery-slider',
  templateUrl: './ngx-jquery-slider.component.html',
  styleUrls: ['./ngx-jquery-slider.component.css'],
})
export class NgxJquerySliderComponent implements OnInit, OnChanges {
  @Input()
  public value: number = 0;

  @Output()
  private valueChange: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('location')
  public location!: ElementRef<HTMLDivElement>;

  // tslint:disable-next-line:no-any
  public widget: any;

  constructor() {}

  public ngOnInit() {
    // @ts-ignore
    this.widget = $(this.location.nativeElement).slider();
    this.widget.slider('value', this.value);
    // tslint:disable-next-line:no-any
    this.widget.on('slidestop', (event: MouseEvent, ui: any) => {
      this.valueChange.emit(ui.value);
    });
  }

  public ngOnChanges() {
    if (this.widget && this.widget.slider('value') !== this.value) {
      this.widget.slider('value', this.value);
    }
  }
}
