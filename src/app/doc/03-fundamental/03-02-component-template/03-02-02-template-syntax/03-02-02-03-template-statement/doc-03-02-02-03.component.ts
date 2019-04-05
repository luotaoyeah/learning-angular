import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doc-03-02-02-03',
  templateUrl: './doc-03-02-02-03.component.html',
  providers: [MessageService],
})
export class Doc03020203Component implements OnInit {
  i = 1;

  constructor(public messageService: MessageService) {}

  ngOnInit() {}

  handleClick01() {
    this.messageService.add({
      severity: 'info',
      summary: '提示',
      detail: 'CLICK ME',
    });
  }
}
