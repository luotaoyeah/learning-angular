import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  /** 消息列表 */
  public messages: string[] = [];

  /**
   * 添加一条消息
   * @param message 消息
   */
  public add(message: string): void {
    this.messages.push(message);
  }

  /**
   * 清空消息
   */
  public clear(): void {
    this.messages = [];
  }
}
