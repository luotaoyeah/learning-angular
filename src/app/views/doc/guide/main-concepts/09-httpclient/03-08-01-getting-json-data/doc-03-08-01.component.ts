import { Component, OnInit } from '@angular/core';
import { Doc030801Service } from '@app/views/doc/guide/main-concepts/09-httpclient/03-08-01-getting-json-data/service/doc-03-08-01.service';
import { IConfig } from '@app/views/doc/guide/main-concepts/09-httpclient/03-08-01-getting-json-data/model/i-config';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app--doc-03-08-01',
  templateUrl: './doc-03-08-01.component.html',
})
export class Doc030801Component implements OnInit {
  public config!: IConfig;

  constructor(private doc030801Service: Doc030801Service) {}

  public ngOnInit() {
    this.doc030801Service.getConfig().subscribe((config: IConfig) => {
      this.config = config;
    });

    this.doc030801Service.getConfigResponse().subscribe((response: HttpResponse<IConfig>) => {
      // tslint:disable-next-line:no-non-null-assertion
      console.assert(response.body!.heroesUrl === 'api/heroes');
    });
  }
}
