import { Component, OnInit } from '@angular/core';
import { Doc030803Service } from './service/doc-03-08-03.service';

@Component({
  selector: 'app-doc-03-08-03',
  templateUrl: './doc-03-08-03.component.html',
})
export class Doc030803Component implements OnInit {
  public txt: string = '';

  constructor(private doc030803Service: Doc030803Service) {}

  public ngOnInit() {}

  public request() {
    this.doc030803Service.getTxt().subscribe((txt: string) => {
      this.txt = txt;
    });
  }
}
