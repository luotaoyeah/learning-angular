import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app--x-02-02-01',
  templateUrl: './x-02-02-01.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020201Component {
  public onClick() {}
}
