import { Component, OnInit } from '@angular/core';
import { Doc030801Service } from './service/doc-03-08-01.service';
import { IConfig } from './model/IConfig';

@Component({
  selector: 'app-doc-03-08-01',
  templateUrl: './doc-03-08-01.component.html',
})
export class Doc030801Component implements OnInit {
  public config!: IConfig;

  constructor(private doc030801Service: Doc030801Service) {}

  ngOnInit() {
    this.doc030801Service.getConfig().subscribe((config: IConfig) => {
      this.config = config;
    });
  }
}
