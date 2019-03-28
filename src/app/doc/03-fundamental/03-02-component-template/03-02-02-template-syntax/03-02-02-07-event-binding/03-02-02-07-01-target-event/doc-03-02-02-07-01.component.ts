import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doc-03-02-02-07-01',
  templateUrl: './doc-03-02-02-07-01.component.html',
  providers: [MessageService]
})
export class Doc0302020701Component implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit() {}

  handleClick01() {
    this.messageService.add({ severity: 'info', summary: '提示', detail: 'CLICK ME' });
  }

  handleClick02(msg: string) {
    this.messageService.add({ severity: 'success', summary: '提示', detail: msg });
  }
}
