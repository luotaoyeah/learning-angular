import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() {}

  /**
   * 添加一条消息
   * @param message 消息
   */
  add(message: string): void {
    this.messages.push(message);
  }

  /**
   * 清空消息
   */
  clear(): void {
    this.messages = [];
  }
}
