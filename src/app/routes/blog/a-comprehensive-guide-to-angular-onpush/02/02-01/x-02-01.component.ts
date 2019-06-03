import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IConfig } from '../vms/i-config';

@Component({
  selector: 'app-x-02-01',
  templateUrl: './x-02-01.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X0201Component {
  @Input()
  public config: IConfig | null = null;

  get foo(): string {
    console.log(`[${X0201Component.name}]\n`, 'FOO');
    return 'FOO';
  }
}
