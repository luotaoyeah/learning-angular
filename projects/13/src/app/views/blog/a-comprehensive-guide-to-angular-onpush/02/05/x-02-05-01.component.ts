import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app--x-02-05-01',
  templateUrl: './x-02-05-01.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020501Component {
  @Input()
  public content: number = 0;

  get runChangeDetection(): boolean {
    console.log(`[${X020501Component.name}]\n`, 'runChangeDetection()');
    return true;
  }
}
