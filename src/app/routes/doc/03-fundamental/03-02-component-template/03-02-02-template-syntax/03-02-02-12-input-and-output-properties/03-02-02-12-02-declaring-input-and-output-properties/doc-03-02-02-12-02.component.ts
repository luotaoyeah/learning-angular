import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doc-03-02-02-12-02',
  templateUrl: './doc-03-02-02-12-02.component.html',
  providers: [MessageService],
})
export class Doc0302021202Component implements OnInit {
  public someProperty = 'FOOBAR';

  constructor(private messageService: MessageService) {}

  public ngOnInit() {}

  public doSomething($event: string) {
    this.messageService.add({
      severity: 'success',
      summary: '提示',
      detail: $event,
    });
  }
}
