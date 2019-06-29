import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-x-06-01',
  templateUrl: './x-06-01.component.html',
})
export class X0601Component implements OnChanges {
  @Input()
  public foo: string = '';

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(`[${X0601Component.name}]\nngOnChanges()`);
  }
}
