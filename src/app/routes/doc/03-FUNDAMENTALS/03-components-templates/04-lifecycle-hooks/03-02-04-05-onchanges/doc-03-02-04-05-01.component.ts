import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-doc-03-02-04-05-01',
  template: '',
})
export class Doc0302040501Component implements OnInit, OnChanges {
  @Input() public foo = '';

  public ngOnInit() {}

  /*
   * 当 input properties 发生变更时，就会触发 ngOnChanges() 方法
   */
  public ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
      if (changes.hasOwnProperty(change)) {
        console.log(
          `%c[${Doc0302040501Component.name}] ${change}[${changes[change].previousValue}, ${changes[change].currentValue}]`,
          'color:red',
        );
      }
    }
  }
}
