import { Component, OnInit } from '@angular/core';
import { Doc03080501Service } from '@app/views/doc/guide/main-concepts/09-httpclient/03-08-05-advanced-usage/03-08-05-01-configure-request/service/doc-03-08-05-01.service';

@Component({
  selector: 'app--doc-03-08-05-01',
  templateUrl: './doc-03-08-05-01.component.html',
})
export class Doc03080501Component implements OnInit {
  constructor(private doc03080501Service: Doc03080501Service) {}

  public ngOnInit() {
    this.doc03080501Service.getSomething().subscribe();
  }
}
