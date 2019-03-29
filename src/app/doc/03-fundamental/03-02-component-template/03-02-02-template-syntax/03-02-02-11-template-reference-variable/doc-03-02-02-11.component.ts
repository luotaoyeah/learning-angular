import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Doc0302021101Component } from './doc-03-02-02-11-01.component';

@Component({
  selector: 'app-doc-03-02-02-11',
  templateUrl: './doc-03-02-02-11.component.html',
  providers: [MessageService]
})
export class Doc03020211Component implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  doSomething(someEl: HTMLInputElement) {
    this.messageService.add({
      severity: 'info',
      summary: '提示',
      detail: someEl.value
    });
  }

  handleClick(doc0302021101Component: Doc0302021101Component) {
    this.messageService.add({ severity: 'success', summary: '提示', detail: doc0302021101Component.SOME_PROPERTY });
  }
}
