import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-x-02-04-01',
  templateUrl: './x-02-04-01.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020401Component {
  @Input()
  public items$!: Observable<Array<string>>;

  get foo(): string {
    console.log(`[${X020401Component.name}]\n`);
    return 'FOO';
  }
}
