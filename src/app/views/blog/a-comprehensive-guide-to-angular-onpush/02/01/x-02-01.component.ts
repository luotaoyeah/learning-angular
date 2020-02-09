import { Component } from '@angular/core';

@Component({
  selector: 'app--x-02-01',
  templateUrl: './x-02-01.component.html',
})
export class X0201Component {
  public config: { position: 'up' | 'down' } = { position: 'up' };

  public changeInputProperty() {
    this.config.position = this.config.position === 'down' ? 'up' : 'down';
  }

  public changeInputReference() {
    this.config = { position: this.config.position === 'down' ? 'up' : 'down' };
  }
}
