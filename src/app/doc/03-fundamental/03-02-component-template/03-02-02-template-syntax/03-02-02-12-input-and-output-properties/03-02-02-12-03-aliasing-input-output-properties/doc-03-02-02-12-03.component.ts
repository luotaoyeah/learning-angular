import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doc-03-02-02-12-03',
  templateUrl: './doc-03-02-02-12-03.component.html',
  providers: [MessageService]
})
export class Doc0302021203Component implements OnInit {
  // @ts-ignore: TS6138
  constructor(private messageService: MessageService) {}

  ngOnInit() {}
}
