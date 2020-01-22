import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app--x-02-03-03',
  templateUrl: './x-02-03-03.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020303Component implements OnInit {
  public count: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  get foo(): string {
    console.log(`[${X020303Component.name}]\n`, 'FOO');
    return 'FOO';
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.count = 9;

      /*
       * ChangeDetectorRef.markForCheck() 方法,
       * 不会立即触发 change detection cycle, 而是将 component 标记为 changed,
       * 在本次 change detection cycle 或者下次 cycle 中该 component 会被 check
       */
      this.changeDetectorRef.markForCheck();
    }, 5000);
  }
}
