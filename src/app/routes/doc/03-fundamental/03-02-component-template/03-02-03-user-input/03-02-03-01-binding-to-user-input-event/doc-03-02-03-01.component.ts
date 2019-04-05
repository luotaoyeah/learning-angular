import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doc-03-02-03-01',
  templateUrl: './doc-03-02-03-01.component.html',
  providers: [MessageService],
})
export class Doc03020301Component implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  handleClick(event: MouseEvent) {
    this.messageService.clear();
    this.messageService.add({
      severity: 'info',
      summary: '提示',
      detail: (event.target as HTMLButtonElement).textContent || '',
    });
  }
}
