import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-doc-05-04-04-09-01',
  templateUrl: './doc-05-04-04-09-01.component.html',
})
export class Doc0504040901Component implements OnInit {
  public foo: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.foo = paramMap.get('foo') || '';
    });
  }
}
