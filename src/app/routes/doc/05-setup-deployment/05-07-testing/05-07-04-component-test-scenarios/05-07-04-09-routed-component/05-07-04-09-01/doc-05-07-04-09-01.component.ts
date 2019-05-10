import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-doc-05-07-04-09-01',
  templateUrl: './doc-05-07-04-09-01.component.html',
})
export class Doc0507040901Component implements OnInit {
  public foo: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  public ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.foo = paramMap.get('foo') || '';
    });
  }
}
