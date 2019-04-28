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

  private get screenfull(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  @HostListener('window:resize')
  _resize() {
    if (screenfull) {
      this.status = this.screenfull.isFullscreen;
    }
  }

  @HostListener('click')
  _click() {
    if (this.screenfull && this.screenfull.enabled) {
      this.screenfull.toggle();
    }
  }
}
