import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-x-02-02',
  templateUrl: './x-02-02.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X0202Component {
  public count: number = 0;

  get foo(): string {
    console.log(`[${X0202Component.name}]\n`, 'FOO');
    return 'FOO';
  }

  public handleClick() {
    this.count++;
  }
}
