import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'header-search',
  template: `
    <nz-input-group
      [nzAddOnBeforeIcon]="
        focus ? 'anticon anticon-arrow-down' : 'anticon anticon-search'
      "
    >
      <input
        nz-input
        [(ngModel)]="q"
        (focus)="qFocus()"
        (blur)="qBlur()"
        [placeholder]="'menu.search.placeholder' | translate"
      />
    </nz-input-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSearchComponent implements AfterViewInit {
  q = '';

  quereyInputEl: HTMLInputElement | null = null;

  @HostBinding('class.alain-default__search-focus')
  focus = false;

  @HostBinding('class.alain-default__search-toggled')
  searchToggled = false;

  @Input()
  set toggleChange(value: boolean) {
    if (typeof value === 'undefined') return;
    this.searchToggled = true;
    this.focus = true;
    setTimeout(() => {
      if (this.quereyInputEl) {
        this.quereyInputEl.focus();
      }
    }, 300);
  }

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.quereyInputEl = (this.elementRef
      .nativeElement as HTMLElement).querySelector('.ant-input');
  }

  qFocus() {
    this.focus = true;
  }

  qBlur() {
    this.focus = false;
    this.searchToggled = false;
  }
}
