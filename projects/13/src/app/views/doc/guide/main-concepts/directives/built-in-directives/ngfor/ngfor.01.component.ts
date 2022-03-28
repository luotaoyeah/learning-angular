import { Component, Input } from '@angular/core';

@Component({
  selector: 'app--ngfor-01',
  templateUrl: './ngfor.01.component.html',
})
export class Ngfor01Component {
  @Input()
  public value: string = '';
}
