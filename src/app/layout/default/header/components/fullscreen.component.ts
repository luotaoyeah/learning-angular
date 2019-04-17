import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'header-fullscreen',
  template: `
    <i
      nz-icon
      [type]="status ? 'fullscreen-exit' : 'fullscreen'"
      class="mr-sm"
    ></i>
    {{ (status ? 'menu.fullscreen.exit' : 'menu.fullscreen') | translate }}
  `,
  host: {
    '[class.d-block]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderFullScreenComponent {
  status = false;

  @HostListener('window:resize')
  _resize() {
    if (screenfull) {
      this.status = screenfull.isFullscreen;
    }
  }

  @HostListener('click')
  _click() {
    if (screenfull && screenfull.enabled) {
      screenfull.toggle();
    }
  }
}
