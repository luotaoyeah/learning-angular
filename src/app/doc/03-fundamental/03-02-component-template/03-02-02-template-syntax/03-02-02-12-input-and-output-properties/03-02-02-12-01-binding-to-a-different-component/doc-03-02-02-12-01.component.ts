import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doc-03-02-02-12-01',
  templateUrl: './doc-03-02-02-12-01.component.html',
  providers: [MessageService]
})
export class Doc0302021201Component implements OnInit {
  public foo = 'FOO';
  /*
   * private property 也可以在 template 中使用
   */
  private bar = 'BAR';

  /*
   * private parameter property 也可以在 template 中使用
   */
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    console.assert(this.bar === 'BAR');
    console.assert(!!this.messageService);
  }
}
