import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-x-02-03-01',
  templateUrl: './x-02-03-01.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class X020301Component implements OnInit {
  public count: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  get foo(): string {
    console.log(`[${X020301Component.name}]\n`, 'FOO');
    return 'FOO';
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.count = 9;

      /*
       * ChangeDetectorRef.detectChanges() 方法,
       * 触发该 component 及其下级 component 的 change detection cycle
       */
      this.changeDetectorRef.detectChanges();
    }, 5000);
  }
}
