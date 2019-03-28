import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doc-03-02-02-07-03',
  templateUrl: './doc-03-02-02-07-03.component.html',
  providers: [MessageService]
})
export class Doc0302020703Component implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit() {}

  handleSomeCustomEvent($event: { foo: string }) {
    this.messageService.add({
      severity: 'error',
      summary: '提示',
      detail: $event.foo
    });
  }
}
