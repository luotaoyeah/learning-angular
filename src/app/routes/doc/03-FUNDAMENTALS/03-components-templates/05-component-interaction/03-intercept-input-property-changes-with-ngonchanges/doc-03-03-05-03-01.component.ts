import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-doc-03-03-05-03-01',
  template: `
    <p-button [label]="major + '.' + minor"></p-button>
  `,
})
export class Doc0303050301Component implements OnChanges {
  @Input() public major = 0;
  @Input() public minor = 0;

  public ngOnChanges(changes: SimpleChanges): void {
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        const prop = changes[key];
        console.log(
          `%c[${Doc0303050301Component.name}].${key}(${prop.previousValue} -> ${prop.currentValue})`,
          'color:#4692FF',
        );
      }
    }
  }
}
