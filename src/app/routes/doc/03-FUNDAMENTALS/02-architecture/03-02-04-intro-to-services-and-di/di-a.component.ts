import { Component, OnInit } from '@angular/core';
import { DiAService } from './service/di-a.service';

@Component({
  selector: 'app--di-a',
  templateUrl: './di-a.component.html',
  styleUrls: ['./di-a.component.scss'],
  /*
   * angular 中有很多类型的 injector，
   * 默认在启动应用时，会自动创建一个 root injector，
   * 在定义 service 时，如果在 metadata 中指定了 providedIn: 'root'，
   * 则表示将该 service 注册到 root injector中
   *
   * 同时，NgModule 和 component 中也都有各自的 injector，
   * 可以分别通过 @NgModule.providers 和 @Component.providers 来注册 providers
   */
  providers: [DiAService],
})
export class DiAComponent implements OnInit {
  constructor(private diAService: DiAService) {}

  public ngOnInit() {
    this.diAService.test();
  }
}
