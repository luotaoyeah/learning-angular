import { Component, OnInit } from '@angular/core';
import { Doc030804Service } from '@app/views/doc/guide/main-concepts/09-httpclient/03-08-04-sending-data-to-the-server/service/doc-03-08-04.service';

@Component({
  selector: 'app--doc-03-08-04',
  templateUrl: './doc-03-08-04.component.html',
})
export class Doc030804Component implements OnInit {
  constructor(private doc030804Service: Doc030804Service) {}

  public ngOnInit() {}

  public request() {
    /*
     * 只用调用了 Observable.subscribe() 方法之后，
     * 请求才会真正发起
     */
    this.doc030804Service.request().subscribe();
  }
}
