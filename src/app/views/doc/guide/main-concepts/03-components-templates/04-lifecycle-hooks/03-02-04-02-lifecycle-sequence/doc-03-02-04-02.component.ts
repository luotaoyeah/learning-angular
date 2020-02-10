import { Component, Input } from '@angular/core';

@Component({
  selector: 'app--doc-03-02-04-02',
  templateUrl: './doc-03-02-04-02.component.html',
})
export class Doc03020402Component {
  @Input()
  public foo: string = '';

  public foo01: number = 1;
  public foo02: number = 1;
}
