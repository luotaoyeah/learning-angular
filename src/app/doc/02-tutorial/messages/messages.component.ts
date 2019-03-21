import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  /*
   * 如果需要在 template 中使用 service，
   * 则需要将该 service 声明为 public 的
   */
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
