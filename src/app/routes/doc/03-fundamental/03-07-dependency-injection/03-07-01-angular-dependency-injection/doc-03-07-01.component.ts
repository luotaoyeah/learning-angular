import { Component, OnInit } from '@angular/core';
import { Doc030701Service } from './service/doc-03-07-01.service';

@Component({
  selector: 'app-doc-03-07-01',
  templateUrl: './doc-03-07-01.component.html',
})
export class Doc030701Component implements OnInit {
  public color!: string;

  constructor(private doc030701Service: Doc030701Service) {}

  ngOnInit() {
    this.color = this.doc030701Service.getColor();
  }
}
