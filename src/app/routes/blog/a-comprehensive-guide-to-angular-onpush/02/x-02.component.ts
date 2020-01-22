import { Component } from '@angular/core';
import { IConfig } from './vms/i-config';

@Component({
  selector: 'app--x-02',
  templateUrl: './x-02.component.html',
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
