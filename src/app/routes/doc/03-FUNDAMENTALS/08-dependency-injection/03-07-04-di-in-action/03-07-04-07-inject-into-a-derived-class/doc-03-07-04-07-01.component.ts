import { Component } from '@angular/core';
import { Doc03070407Component } from './doc-03-07-04-07.component';
import { Doc03070407Service } from './service/doc-03-07-04-07.service';

@Component({
  selector: 'app--doc-03-07-04-07-01',
  templateUrl: './doc-03-07-04-07-01.component.html',
})
export class Doc0307040701Component extends Doc03070407Component {
  /*
   * 子类中需要自己注入，然后通过 super() 传给父类
   */
  constructor(public doc03070407Service: Doc03070407Service) {
    super(doc03070407Service);
  }

  protected afterInit() {
    this.items = this.items.sort();
  }
}
