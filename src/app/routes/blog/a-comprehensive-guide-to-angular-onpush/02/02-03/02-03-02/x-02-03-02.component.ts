import { ApplicationRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app--x-02-03-02',
  templateUrl: './x-02-03-02.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020302Component implements OnInit {
  public count: number = 0;

  constructor(private applicationRef: ApplicationRef) {}

  get foo(): string {
    console.log(`[${X020302Component.name}]\n`, 'FOO');
    return 'FOO';
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.count = 9;

      /*
       * ApplicationRef.tick() 方法,
       * 触发整个 application 的 change detection cycle
       */
      this.applicationRef.tick();
    }, 5000);
  }
}
