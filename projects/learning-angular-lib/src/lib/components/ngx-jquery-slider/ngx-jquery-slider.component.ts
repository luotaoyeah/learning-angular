import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider.js';

@Component({
  selector: 'lib-ngx-jquery-slider',
  templateUrl: './ngx-jquery-slider.component.html',
  styleUrls: ['./ngx-jquery-slider.component.css'],
})
export class NgxJquerySliderComponent implements OnInit {
  @ViewChild('location')
  public location!: ElementRef<HTMLDivElement>;

  // tslint:disable-next-line:no-any
  public widget: any;

  constructor() {}

  public ngOnInit() {
    // @ts-ignore
    this.widget = $(this.location.nativeElement).slider();
  }
}
