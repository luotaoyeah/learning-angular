import { Component } from '@angular/core';
import { IConfig } from './vms/IConfig';

@Component({
  selector: 'app-x-02',
  templateUrl: './x-02.component.html',
  styles: [],
})
export class X02Component {
  public config: IConfig = {
    position: 'up',
  };

  public handleClick01() {
    this.config.position = 'down';
  }

  public handleClick02() {
    this.config = {
      position: 'down',
    };
  }
}
