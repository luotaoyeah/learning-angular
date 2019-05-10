import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-doc-03-02-05-03-01',
  template: `
    <p-button [label]="major + '.' + minor"></p-button>
  `,
})
export class Doc0302050301Component implements OnInit, OnChanges {
  @Input() public major = 0;
  @Input() public minor = 0;

  constructor() {}

  public ngOnInit() {}

  public ngOnChanges(changes: SimpleChanges): void {
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        const prop = changes[key];
        console.log(
          `%c[${Doc0302050301Component.name}].${key}(${prop.previousValue} -> ${
            prop.currentValue
          })`,
          'color:#4692FF',
        );
      }
    }
  }
}
