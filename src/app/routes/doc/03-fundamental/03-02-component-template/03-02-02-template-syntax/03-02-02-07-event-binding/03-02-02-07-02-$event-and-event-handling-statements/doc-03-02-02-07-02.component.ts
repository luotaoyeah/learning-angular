import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doc-03-02-02-07-02',
  templateUrl: './doc-03-02-02-07-02.component.html',
  providers: [MessageService],
})
export class Doc0302020702Component implements OnInit {
  public foo = 'foo';

  constructor(public messageService: MessageService) {}

  public ngOnInit() {}

  public handleClick01($event: boolean) {
    this.messageService.add({
      severity: 'info',
      summary: '提示',
      detail: typeof $event,
    });
  }
}
