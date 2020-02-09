import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app--x-01-01',
  templateUrl: './x-01-01.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class X0101Component {
  @Input()
  public name: string = '';

  get runChangeDetection(): boolean {
    console.log(`[${X0101Component.name}]\n`, 'runChangeDetection()');
    return true;
  }
}
