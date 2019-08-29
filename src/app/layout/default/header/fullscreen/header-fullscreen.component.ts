import { Component, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'header-fullscreen',
  templateUrl: './header-fullscreen.component.html',
  host: {
    '[class.d-block]': 'true',
  },
})
export class HeaderFullScreenComponent {
  public status = false;

  private get screenfull(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  @HostListener('window:resize')
  public _resize() {
    this.status = this.screenfull.isFullscreen;
  }

  @HostListener('click')
  public _click() {
    if (this.screenfull.enabled) {
      this.screenfull.toggle();
    }
  }
}
