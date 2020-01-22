import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app--x-01',
  templateUrl: './x-01.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class X01Component {
  get foo(): string {
    console.log(`[${X01Component.name}]\n`, 'FOO');
    return 'FOO';
  }
}
